// script.js

var initialTextValue = '';
var initialPasswordValue = '';

document.addEventListener('DOMContentLoaded', function () {
  // Menyimpan nilai awal dari input text dan password saat halaman dimuat
  initialTextValue = document.getElementById('text').value;
  initialPasswordValue = document.getElementById('password').value;
});

function process() {
  var text = document.getElementById('text').value;
  var password = document.getElementById('password').value;
  var operationEncrypt = document.getElementById('encryptRadio').checked;
  var operationDecrypt = document.getElementById('decryptRadio').checked;

  if (text === '' || password === '' || (!operationEncrypt && !operationDecrypt)) {
    alert('Data, password, and operation selection are required.');
    return;
  }

  if (operationEncrypt) {
    var encrypted = CryptoJS.AES.encrypt(text, password);
    document.getElementById('result').innerHTML = encrypted;
  } else if (operationDecrypt) {
    var encryptedValue = document.getElementById('EncryptedValue').innerHTML;
    if (encryptedValue === '') {
      alert('Encrypted data is required for decryption.');
      return;
    }

    var decrypted = CryptoJS.AES.decrypt(encryptedValue, password).toString(
      CryptoJS.enc.Utf8
    );
    document.getElementById('result').innerHTML = decrypted;
  }
}

function clearInput() {
  var currentTextValue = document.getElementById('text').value;
  var currentPasswordValue = document.getElementById('password').value;

  if (
    currentTextValue === initialTextValue &&
    currentPasswordValue === initialPasswordValue
  ) {
    alert('No changes made to the inputs.');
    return;
  }

  document.getElementById('text').value = '';
  document.getElementById('password').value = '';
  document.getElementById('result').innerHTML = '';
}
