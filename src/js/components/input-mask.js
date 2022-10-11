const telInput = document.querySelector('.input-tel-js');
if (telInput) {
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(telInput);
}