
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const yearMonths = (...seasons) => seasons.reduce((months, curr) => [...months, ...curr], []);

const { winter, spring, summer, autumn } = yearSeasons;
console.log(yearMonths(winter, spring, summer, autumn));
