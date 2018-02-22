let eendjes = [5, 2, 4, 1, 1, 5, 4, 4, 3, 2];
console.log(
  `De beginpositie voor de eendjes ${eendjes} met de hoogste score is ${berekenPositieMaxScore(
    eendjes
  ) + 1}`
);

eendjes = [];
for (let i = 0; i < 10; i++) {
  eendjes[i] = parseInt(prompt(`Geef de waarde in voor eendje ${i + 1}: `));
}
console.log(
  `De beginpositie voor de eendjes ${eendjes} met de hoogste score is ${berekenPositieMaxScore(
    eendjes
  ) + 1}`
);

function berekenPositieMaxScore(eendjes) {
  let score = 0;
  let positie = 0;
  for (let i = 0; i < eendjes.length - 4; i++) {
    let nieuweScore = 0;
    for (let j = i; j < i + 4; j++) nieuweScore += eendjes[j];
    score = Math.max(score, nieuweScore);
    if (score === nieuweScore) positie = i;
  }
  return positie;
}
