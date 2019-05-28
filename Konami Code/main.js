const pressed = [];
const sequence = 'madmike';

window.addEventListener('keyup', e => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-sequence.length - 1, pressed.length - sequence.length);
  if (pressed.join('').includes(sequence)) {
    alert('coded by madmike');
    cornify_add();
  }
  console.log(pressed);
});
