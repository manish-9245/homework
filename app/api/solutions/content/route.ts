import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { date, qno, lang } = await req.json();
    if (!date || !qno || !lang) return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    const ext = lang === 'python' ? 'py' : 'c';
    const fileName = `${qno}.${ext}`;
    const filePath = path.join(process.cwd(), 'solutions', date, fileName);
    if (!fs.existsSync(filePath)) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    const content = fs.readFileSync(filePath, 'utf-8');
    return NextResponse.json({ content });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
