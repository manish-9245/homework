const fs = require('fs');
const path = require('path');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

for (let day = 1; day <= 30; day++) {
  for (let j = 1; j <= 4; j++) {
    const qnum = (day - 1) * 4 + j;
    const qlabel = `Q${qnum}`;
    const qlower = qlabel.toLowerCase(); // q1, q2, etc
    const cpath = path.join(__dirname, '..', 'solutions', 'c', `day${day}_${qlower}.c`);
    const pypath = path.join(__dirname, '..', 'solutions', 'python', `day${day}_${qlower}.py`);

    if (!fs.existsSync(cpath)) {
      ensureDir(cpath);
      fs.writeFileSync(cpath, `/* day${day}_${qlower}.c - placeholder */\n#include <stdio.h>\nint main(void) { printf(\"TODO: day ${day} ${qlabel} (C)\\n\"); return 0; }\n`);
      console.log('created', cpath);
    }

    if (!fs.existsSync(pypath)) {
      ensureDir(pypath);
      fs.writeFileSync(pypath, `# day${day}_${qlower}.py - placeholder\nprint(\"TODO: day ${day} ${qlabel} (Python)\")\n`);
      console.log('created', pypath);
    }
  }
}

console.log('done');
