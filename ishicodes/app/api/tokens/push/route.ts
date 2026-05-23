import { NextResponse } from 'next/server';
import { pool } from 'lib/db';
import { SCHEDULE } from '../../../../lib/data/schedule';
import { performPush } from '../../../../lib/automation';

export async function POST(req: Request) {
  try {
    const { tokenId } = await req.json();
    
    // Get token data
    const [tokens]: any = await pool.query('SELECT * FROM tokens WHERE id = ?', [tokenId]);
    if (tokens.length === 0) return NextResponse.json({ error: 'Token not found' }, { status: 404 });
    
    // Get today's schedule
    const today = new Date().toISOString().split('T')[0];
    const dayData = SCHEDULE.find(s => s.date === today);
    
    if (!dayData) return NextResponse.json({ error: 'No schedule for today' }, { status: 400 });
    
    const result = await performPush(tokens[0], dayData);
    
    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}