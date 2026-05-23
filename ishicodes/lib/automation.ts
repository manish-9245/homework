import simpleGit from 'simple-git';
import { pool } from './db';
import fs from 'fs';
import path from 'path';
import { SCHEDULE } from './data/schedule';

const SOLUTIONS_SRC = path.join(process.cwd(), 'solutions');

export async function performPush(tokenData: any, dayData: any) {
    if (!tokenData.repo_owner || !tokenData.repo_name) {
        return { success: false, error: "Repository owner and name must be configured for this token." };
    }

    const tmpBase = path.join(process.cwd(), '.tmp');
    if (!fs.existsSync(tmpBase)) fs.mkdirSync(tmpBase, { recursive: true });
    const tmpDir = path.join(tmpBase, `push_${tokenData.id}_${dayData.day}_${Date.now()}`);
    try {
        const authUser = encodeURIComponent(tokenData.github_username || '');
        const authToken = encodeURIComponent(tokenData.encrypted_token || tokenData.token || '');
        const branch = tokenData.branch || 'main';
        const remoteUrl = `https://${authUser}:${authToken}@github.com/${tokenData.repo_owner}/${tokenData.repo_name}.git`;

        // Clone the repository
        await simpleGit().clone(remoteUrl, tmpDir, ['--depth', '1']);

        const git = simpleGit(tmpDir);
        // Ensure user config for the commit
        try {
            await git.addConfig('user.name', 'ishicodes-bot');
            await git.addConfig('user.email', 'ishicodes-bot@example.com');
        } catch (e) {
            // ignore config failures
        }

        const dayDir = path.join(tmpDir, `day${dayData.day}`);
        if (!fs.existsSync(dayDir)) fs.mkdirSync(dayDir, { recursive: true });

        // Copy solutions
        for (const qno of dayData.questions) {
            const cFileSrc = `${qno}.c`;
            const pyFileSrc = `${qno}.py`;
            const cSrc = path.join(SOLUTIONS_SRC, dayData.date, cFileSrc);
            const pySrc = path.join(SOLUTIONS_SRC, dayData.date, pyFileSrc);

            const cFileDest = `day${dayData.day}_${qno.toLowerCase()}.c`;
            const pyFileDest = `day${dayData.day}_${qno.toLowerCase()}.py`;

            if (fs.existsSync(cSrc)) fs.copyFileSync(cSrc, path.join(dayDir, cFileDest));
            if (fs.existsSync(pySrc)) fs.copyFileSync(pySrc, path.join(dayDir, pyFileDest));
        }

        await git.add('./*');
        await git.commit(`Automated daily push: Day ${dayData.day} for ${tokenData.github_username}`);
        await git.push('origin', branch);

        await pool.query('INSERT INTO automation_logs (token_id, status) VALUES (?, ?)', [tokenData.id, 'SUCCESS']);
        return { success: true };
    } catch (error: any) {
        await pool.query('INSERT INTO automation_logs (token_id, status, error_message) VALUES (?, ?, ?)', [tokenData.id, 'FAILED', error.message]);
        return { success: false, error: error.message };
    } finally {
        // cleanup
        try {
            if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true, force: true });
        } catch (e) {
            // ignore cleanup errors
        }
    }
}
