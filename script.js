// 1. Меню төмен түскенде қараяды
window.addEventListener('scroll', function(){
  var h = document.getElementById('header');
  if(window.scrollY > 50){ h.classList.add('scrolled'); }
  else { h.classList.remove('scrolled'); }
});

// 2. Фотоны басқанда үлкейтіп ашады
function openModal(src){
  var m = document.getElementById('modal');
  document.getElementById('modal-img').src = src;
  m.style.display = 'flex';
}
function closeModal(){
  document.getElementById('modal').style.display = 'none';
}

// 3. Заказды WhatsApp-қа жібереді
function sendOrder(){
  var name = document.getElementById('f-name').value;
  var phone = document.getElementById('f-phone').value;
  var model = document.getElementById('f-model').value;
  var size = document.getElementById('f-size').value;

  if(!name || !phone){
    alert('Атыңыз бен телефоныңызды жазыңызшы');
    return;
  }

  var text = "Сәлеметсіз бе! KANAT ALYKAS сайтынан жазып отырмын%0A%0AАты: " + name + "%0AТелефон: " + phone + "%0AМодель: " + model + "%0AӨлшем: " + size;
  // ОСЫ ЖЕРДЕГІ НӨМІРДІ ӨЗІҢДІКІНЕ АУЫСТЫР
  window.open("https://wa.me/77000000000?text=" + text, "_blank");
}