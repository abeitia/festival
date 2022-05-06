/**
 * Import dependencies from node_modules
 * see commented examples below
 */

 import * as bootstrap from 'bootstrap';
+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);


})();

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
 })
}


