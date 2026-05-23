import { NextResponse } from 'next/server';
import { pool } from 'lib/db';

export async function GET() {
  try {
    const [rows]: any = await pool.query(`
      SELECT t.id, t.github_username, t.repo_owner, t.repo_name, t.branch, MAX(l.created_at) as last_push
      FROM tokens t
      LEFT JOIN automation_logs l ON t.id = l.token_id AND l.status = 'SUCCESS'
      GROUP BY t.id
    `);
    return NextResponse.json(rows);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { github_username, token, repo_owner, repo_name, branch } = await req.json();

    if (!github_username || !token || !repo_owner || !repo_name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Ensure schema has the optional columns for per-token repo config
    await pool.query("ALTER TABLE tokens ADD COLUMN IF NOT EXISTS repo_owner VARCHAR(255)");
    await pool.query("ALTER TABLE tokens ADD COLUMN IF NOT EXISTS repo_name VARCHAR(255)");
    await pool.query("ALTER TABLE tokens ADD COLUMN IF NOT EXISTS branch VARCHAR(100)");

    await pool.query(
      'INSERT INTO tokens (github_username, encrypted_token, repo_owner, repo_name, branch) VALUES (?, ?, ?, ?, ?)',
      [github_username, token, repo_owner, repo_name, branch || 'main']
    );
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
