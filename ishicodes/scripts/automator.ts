import cron from 'node-cron';
import { pool } from '../lib/db';
import { SCHEDULE } from '../lib/data/schedule';
import { performPush } from '../lib/automation';

// Run every day at 09:00
cron.schedule('0 9 * * *', async () => {
    const today = new Date().toISOString().split('T')[0];
    const dayData = SCHEDULE.find(s => s.date === today);
    
    if (dayData) {
        const [tokens]: any = await pool.query('SELECT * FROM tokens');
        for (const token of tokens) {
            await performPush(token, dayData);
        }
    }
});