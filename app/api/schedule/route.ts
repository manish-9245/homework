import { NextResponse } from 'next/server';
import { SCHEDULE } from '../../../lib/data/schedule';
import fs from 'fs';
import path from 'path';

let questionsData: any = null;

function getProblemStatement(qno: string) {
  if (!questionsData) {
    try {
      const filePath = path.join(process.cwd(), 'solutions', 'summer_assignment_questions.json');
      const data = fs.readFileSync(filePath, 'utf-8');
      questionsData = JSON.parse(data).questions;
    } catch (e) {
      return '';
    }
  }
  const match = questionsData.find((q: any) => q.question_no === qno);
  return match ? match.problem_statement : '';
}

function checkSolutionsForDay(day: any) {
  const results: any = {};
  for (const q of day.questions) {
    const cName = `${q}.c`;
    const pyName = `${q}.py`;
    const cPath = path.join(process.cwd(), 'solutions', day.date, cName);
    const pyPath = path.join(process.cwd(), 'solutions', day.date, pyName);
    results[q] = {
      problem_statement: getProblemStatement(q),
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
