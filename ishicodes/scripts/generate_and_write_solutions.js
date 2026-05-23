const fs = require('fs');
const path = require('path');

const schedule = require('../lib/data/schedule').SCHEDULE;

function qNumFromLabel(lbl){
  return parseInt(lbl.replace(/^Q/i, ''), 10);
}

function pySolutionFor(q){
  // Simple heuristics by q mod groups
  if(q % 5 === 1) return `# Sum of first N natural numbers.\n\ndef main():\n    n=int(input())\n    print(n*(n+1)//2)\n\nif __name__=='__main__':\n    main()\n`;
  if(q % 5 === 2) return `# Reverse a string or number.\n\ndef main():\n    s=input().strip()\n    print(s[::-1])\n\nif __name__=='__main__':\n    main()\n`;
  if(q % 5 === 3) return `# Compute factorial of N.\n\ndef main():\n    n=int(input())\n    res=1\n    for i in range(2,n+1):\n        res*=i\n    print(res)\n\nif __name__=='__main__':\n    main()\n`;
  if(q % 5 === 4) return `# Print first N Fibonacci numbers (space separated).\n\ndef main():\n    n=int(input())\n    a,b=0,1\n    out=[]\n    for _ in range(n):\n        out.append(str(a))\n        a,b=b,a+b\n    print(' '.join(out))\n\nif __name__=='__main__':\n    main()\n`;
  // default: check prime
  return `# Check if number is prime.\n\ndef is_prime(n):\n    if n<2: return False\n    i=2\n    while i*i<=n:\n        if n%i==0: return False\n        i+=1\n    return True\n\ndef main():\n    n=int(input())\n    print('YES' if is_prime(n) else 'NO')\n\nif __name__=='__main__':\n    main()\n`;
}

function cPlaceholderFor(q){
  return `/* Placeholder C solution for Q${q} */\n#include <stdio.h>\nint main(){\n    // Implement solution for Q${q}\n    return 0;\n}\n`;
}

function ensureDir(dir){
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function main(){
  const pyDir = path.join(__dirname, '..', 'solutions', 'python');
  const cDir = path.join(__dirname, '..', 'solutions', 'c');
  ensureDir(pyDir); ensureDir(cDir);

  let created = 0;
  schedule.forEach(day => {
    const dayNum = day.day;
    day.questions.forEach(qLabel => {
      const q = qNumFromLabel(qLabel);
      const pyName = `day${dayNum}_q${q}.py`;
      const cName = `day${dayNum}_q${q}.c`;
      const pyPath = path.join(pyDir, pyName);
      const cPath = path.join(cDir, cName);

      if(!fs.existsSync(pyPath)){
        fs.writeFileSync(pyPath, pySolutionFor(q));
        created++;
        console.log('Wrote', pyPath);
      }
      if(!fs.existsSync(cPath)){
        fs.writeFileSync(cPath, cPlaceholderFor(q));
        created++;
        console.log('Wrote', cPath);
      }
    });
  });
  console.log('Done. files created:', created);
}

if(require.main===module) main();
