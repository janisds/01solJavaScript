let zin = prompt('Geef een zin in: ');
//let zin="Als de kat van huis is, dansen de muizen";
console.log(`De zin in P taal: ${vertaal(zin)}`);
console.log(
  `De zin in P taal via destructuring: ${vertaalMetDestructuring(zin)}`
);

function vertaal(zin) {
  let pzin = [];
  let lettersTeHerhalen = [];
  for (let letter of zin) {
    if ('aeiouAEIOU'.indexOf(letter) > -1) {
      lettersTeHerhalen.push(letter);
    } else {
      if (lettersTeHerhalen.length > 0) {
        pzin = herhaal(pzin, lettersTeHerhalen);
        lettersTeHerhalen = [];
      }
    }
    pzin.push(letter);
  }
  if (lettersTeHerhalen.length > 0) {
    pzin = herhaal(pzin, lettersTeHerhalen);
  }
  return pzin.join('');
}

function herhaal(zin, lettersTeHerhalen) {
  zin.push('p');
  return zin.concat(lettersTeHerhalen);
}

function vertaalMetDestructuring(zin) {
  let pzin = [];
  let lettersTeHerhalen = [];
  let letter;
  while (zin.length !== 0) {
    [letter, ...zin] = zin;
    if ('aeiouAEIOU'.indexOf(letter) > -1) {
      lettersTeHerhalen = [...lettersTeHerhalen, letter];
    } else {
      if (lettersTeHerhalen.length > 0) {
        pzin = herhaalMetDestructuring(pzin, lettersTeHerhalen);
        lettersTeHerhalen = [];
      }
    }
    pzin = [...pzin, letter];
  }
  if (lettersTeHerhalen.length > 0) {
    pzin = herhaalMetDestructuring(pzin, lettersTeHerhalen);
  }
  return pzin.join('');
}

function herhaalMetDestructuring(zin, lettersTeHerhalen) {
  return [...zin, 'p', ...lettersTeHerhalen];
}
