const divs = document.getElementsByTagName('div');

for (let index in divs) {
  divs[index].className = 'shadow p-3 rounded';
}