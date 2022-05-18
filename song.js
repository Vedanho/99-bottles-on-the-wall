function generateSongText() {
  for (let i = 99; i > 0; i--) {
    if (i !== 1) {
    console.log(`${i} ${checkWord(i)} пива на стене, ${i} ${checkWord(i)} пива!
        Возьми одну, пусти по кругу,${i - 1} ${checkWord(i - 1)} пива на стене!`);
  }
  else {console.log(`${i} ${checkWord(i)} пива на стене, ${i} ${checkWord(i)} пива!
        Возьми одну, пусти по кругу, ${checkWord(i - 1)} пива на стене!`);}
}
}
let bottle;
let form1 = "бутылка";
let form2 = "бутылки";
let form3 = "бутылок";
let form4 = 'нет бутылок'

function checkWord(n) {
  if (n === 0) {
    bottle = form4
  }
  else if (n === 11 || n === 12 || n === 13 || n ===14) {
    bottle = form3
  }
  else if (n.toString()[n.toString().length - 1] === '1') {
    bottle = form1;
  } else if (
    n.toString()[n.toString().length - 1] === '2' ||
    n.toString()[n.toString().length - 1] === '3' ||
    n.toString()[n.toString().length - 1] === '4' 
  ) {
    bottle = form2;
  } else if (
    n.toString()[n.toString().length - 1] === '5' ||
    n.toString()[n.toString().length - 1] === '6' ||
    n.toString()[n.toString().length - 1] === '7' ||
    n.toString()[n.toString().length - 1] === '8' ||
    n.toString()[n.toString().length - 1] === '9' ||
    n.toString()[n.toString().length - 1] === '0'
  ) {
    bottle = form3;
  }
  return bottle;
}
generateSongText()

