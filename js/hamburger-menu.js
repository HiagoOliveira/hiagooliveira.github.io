$('document').ready(function () {
  var target = $('.burger-icon'),
      isClosed = true;

  target.click(function () {
    burgerTime();
  });

  function burgerTime() {
    if (isClosed == true) {
      target.removeClass('open-burger');
      target.addClass('closed-burger');
      isClosed = false;
    } else {
      target.removeClass('closed-burger');
      target.addClass('open-burger');
      isClosed = true;
    }
  }
});