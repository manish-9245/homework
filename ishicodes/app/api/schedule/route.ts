import { NextResponse } from 'next/server';
import { SCHEDULE } from '../../../lib/data/schedule';
import fs from 'fs';
import path from 'path';

function checkSolutionsForDay(day: any) {
  const results: any = {};
  for (const q of day.questions) {
    const cName = `${q}.c`;
    const pyName = `${q}.py`;
    const cPath = path.join(process.cwd(), 'solutions', day.date, cName);
    const pyPath = path.join(process.cwd(), 'solutions', day.date, pyName);
    results[q] = {
      c: fs.existsSync(cPath),
      cPath: fs.existsSync(cPath) ? `/solutions/${day.date}/${cName}` : null,
      py: fs.existsSync(pyPath),
      pyPath: fs.existsSync(pyPath) ? `/solutions/${day.date}/${pyName}` : null,
    };
  }
  return results;
}

export async function GET() {
  try {
    // Return full schedule with solution existence flags
    const out = SCHEDULE.map((d) => ({
      ...d,
      solutions: checkSolutionsForDay(d),
    }));
    return NextResponse.json(out);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
