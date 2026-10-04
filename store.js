(function () {
  "use strict";

  var config = window.CHECKOUT_CONFIG || {};

  function checkoutUrl(key) {
    var value = config[key];
    if (typeof value !== "string") return "";
    var url = value.trim();
    if (!/^https?:\/\//i.test(url)) return "";
    return url;
  }

  function noteFor(button) {
    var next = button.nextElementSibling;
    if (next && next.classList.contains("checkout-note")) return next;
    return null;
  }

  var buttons = document.querySelectorAll("[data-product]");
  for (var i = 0; i < buttons.length; i++) {
    (function (button) {
      var url = checkoutUrl(button.getAttribute("data-product"));
      button.addEventListener("click", function () {
        if (url) {
          window.location.assign(url);
          return;
        }
        var note = noteFor(button);
        if (note) note.textContent = "Checkout for this kit is not connected yet.";
      });
    })(buttons[i]);
  }
})();
