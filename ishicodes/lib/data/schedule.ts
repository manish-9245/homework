export const SCHEDULE = [
  { date: '2026-05-28', day: 1, questions: ['Q1','Q2','Q3','Q4'] },
  { date: '2026-05-29', day: 2, questions: ['Q5','Q6','Q7','Q8'] },
  { date: '2026-05-30', day: 3, questions: ['Q9','Q10','Q11','Q12'] },
  { date: '2026-05-31', day: 4, questions: ['Q13','Q14','Q15','Q16'] },
  { date: '2026-06-01', day: 5, questions: ['Q17','Q18','Q19','Q20'] },
  { date: '2026-06-02', day: 6, questions: ['Q21','Q22','Q23','Q24'] },
  { date: '2026-06-03', day: 7, questions: ['Q25','Q26','Q27','Q28'] },
  { date: '2026-06-04', day: 8, questions: ['Q29','Q30','Q31','Q32'] },
  { date: '2026-06-05', day: 9, questions: ['Q33','Q34','Q35','Q36'] },
  { date: '2026-06-06', day: 10, questions: ['Q37','Q38','Q39','Q40'] },
  { date: '2026-06-07', day: 11, questions: ['Q41','Q42','Q43','Q44'] },
  { date: '2026-06-08', day: 12, questions: ['Q45','Q46','Q47','Q48'] },
  { date: '2026-06-09', day: 13, questions: ['Q49','Q50','Q51','Q52'] },
  { date: '2026-06-10', day: 14, questions: ['Q53','Q54','Q55','Q56'] },
  { date: '2026-06-11', day: 15, questions: ['Q57','Q58','Q59','Q60'] },
  { date: '2026-06-12', day: 16, questions: ['Q61','Q62','Q63','Q64'] },
  { date: '2026-06-13', day: 17, questions: ['Q65','Q66','Q67','Q68'] },
  { date: '2026-06-14', day: 18, questions: ['Q69','Q70','Q71','Q72'] },
  { date: '2026-06-15', day: 19, questions: ['Q73','Q74','Q75','Q76'] },
  { date: '2026-06-16', day: 20, questions: ['Q77','Q78','Q79','Q80'] },
  { date: '2026-06-17', day: 21, questions: ['Q81','Q82','Q83','Q84'] },
  { date: '2026-06-18', day: 22, questions: ['Q85','Q86','Q87','Q88'] },
  { date: '2026-06-19', day: 23, questions: ['Q89','Q90','Q91','Q92'] },
  { date: '2026-06-20', day: 24, questions: ['Q93','Q94','Q95','Q96'] },
  { date: '2026-06-21', day: 25, questions: ['Q97','Q98','Q99','Q100'] },
  { date: '2026-06-22', day: 26, questions: ['Q101','Q102','Q103','Q104'] },
  { date: '2026-06-23', day: 27, questions: ['Q105','Q106','Q107','Q108'] },
  { date: '2026-06-24', day: 28, questions: ['Q109','Q110','Q111','Q112'] },
  { date: '2026-06-25', day: 29, questions: ['Q113','Q114','Q115','Q116'] },
  { date: '2026-06-26', day: 30, questions: ['Q117','Q118','Q119','Q120'] },
];

export function getScheduleForDate(dateStr: string) {
  return SCHEDULE.find(s => s.date === dateStr) || null;
}

export function getPastAndTodaySchedule() {
  const today = new Date().toISOString().split('T')[0];
  return SCHEDULE.filter(s => s.date <= today);
}

export function getUpcomingSchedule() {
  const today = new Date().toISOString().split('T')[0];
  return SCHEDULE.filter(s => s.date > today);
}
