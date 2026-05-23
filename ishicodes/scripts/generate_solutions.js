const fs = require('fs');
const path = require('path');

const QUESTIONS_FILE = path.join(process.cwd(), '..', 'summer_assignment_questions.json');
const SCHEDULE_FILE = path.join(process.cwd(), '..', 'lib', 'data', 'schedule.ts');
const SOLUTIONS_DIR = path.join(process.cwd(), '..', 'solutions');

function loadQuestions() {
  if (!fs.existsSync(QUESTIONS_FILE)) return {};
  const raw = fs.readFileSync(QUESTIONS_FILE, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse questions JSON', e);
    return {};
  }
}

function loadSchedule() {
  if (!fs.existsSync(SCHEDULE_FILE)) return [];
  const raw = fs.readFileSync(SCHEDULE_FILE, 'utf8');
  // crude parse to extract SCHEDULE array from the TS file
  const match = raw.match(/export const SCHEDULE = (\[[\s\S]*?\]);/m);
  if (!match) return [];
  try {
    // Replace single quotes with double for JSON parse and remove trailing commas
    const arrText = match[1]
      .replace(/'/g, '"')
      .replace(/(\w+)\s*:/g, '"$1":')
      .replace(/,\s*}/g, '}')
      .replace(/,\s*\]/g, ']');
    return JSON.parse(arrText);
  } catch (e) {
    console.error('Failed to parse schedule TS snippet', e);
    return [];
  }
}

function heuristicsToPython(questionText) {
  const q = questionText.toLowerCase();
  // sum of numbers
  if (/sum\s+of|sum of|add\s+numbers|sum the numbers|sum them/.test(q)) {
    return `import sys

nums = list(map(int, sys.stdin.read().strip().split()))
print(sum(nums))
`;
  }
  if (/reverse/.test(q)) {
    return `import sys
s = sys.stdin.read().strip() 
print(s[::-1])
`;
  }
  if (/factorial/.test(q)) {
    return `import sys
n = int(sys.stdin.read().strip())
res = 1
for i in range(2, n+1): res *= i
print(res)
`;
  }
  if (/fibonacci/.test(q)) {
    return `import sys
n = int(sys.stdin.read().strip())
a,b = 0,1
for _ in range(n): a,b = b,a+b
print(a)
`;
  }
  if (/prime/.test(q)) {
    return `import sys
n = int(sys.stdin.read().strip())
if n<=1:
    print('NO')
else:
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            print('NO')
            break
    else:
        print('YES')
`;
  }
  if (/sort|sorted/.test(q)) {
    return `import sys
arr = list(map(int, sys.stdin.read().strip().split()))
arr.sort()
print(' '.join(map(str, arr)))
`;
  }
  if (/gcd/.test(q)) {
    return `import sys
from math import gcd
nums = list(map(int, sys.stdin.read().strip().split()))
from functools import reduce
print(reduce(gcd, nums))
`;
  }
  if (/lcm/.test(q)) {
    return `import sys
from math import gcd
nums = list(map(int, sys.stdin.read().strip().split()))
def lcm(a,b): return a//gcd(a,b)*b
from functools import reduce
print(reduce(lcm, nums))
`;
  }

  // fallback: echo input
  return `import sys
print(sys.stdin.read().strip())
`;
}

function cPlaceholder(day, qlabel) {
  return `/* day${day}_${qlabel}.c - placeholder (auto-generated) */
#include <stdio.h>
int main(void) {
    printf("TODO: implement solution for ${qlabel} (C)\\n");
    return 0;
}
`;
}

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function writeSolutions() {
  const questions = loadQuestions();
  const schedule = loadSchedule();
  if (!Array.isArray(schedule) || schedule.length === 0) {
    console.error('Schedule not loaded; aborting');
    return;
  }

  for (const day of schedule) {
    const dayNum = day.day;
    for (const q of day.questions) {
      // q like 'Q1'
      const qlower = q.toLowerCase();
      const qkey = q; // assuming JSON keys match 'Q1' etc
      const qtext = questions[qkey] || '';

      const pyDir = path.join(SOLUTIONS_DIR, 'python');
      const cDir = path.join(SOLUTIONS_DIR, 'c');
      ensureDir(pyDir);
      ensureDir(cDir);
      const pyPath = path.join(pyDir, `day${dayNum}_${qlower}.py`);
      const cPath = path.join(cDir, `day${dayNum}_${qlower}.c`);

      if (!fs.existsSync(pyPath)) {
        const pyCode = `# ${qlower} - ${qtext.replace(/\n/g, ' ')}\n` + heuristicsToPython(qtext || qkey);
        fs.writeFileSync(pyPath, pyCode, 'utf8');
        console.log('wrote', pyPath);
      }

      if (!fs.existsSync(cPath)) {
        fs.writeFileSync(cPath, cPlaceholder(dayNum, qlower), 'utf8');
        console.log('wrote', cPath);
      }
    }
  }
}

writeSolutions();
console.log('generation completed');
