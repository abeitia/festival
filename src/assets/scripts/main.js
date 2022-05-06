/**
 * Import dependencies from node_modules
 * see commented examples below
 */

 import * as bootstrap from 'bootstrap';
+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);


})();

var toastTrigger = document.getElementById('liveToastBtn');
var toastLiveExample = document.getElementById('liveToast');

var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var alertTrigger = document.getElementById('tourdatesBtn');

if (toastTrigger) {
toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
 })
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Las fechas del tour serán anunciadas próximamente', 'success')
  })
}

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}


