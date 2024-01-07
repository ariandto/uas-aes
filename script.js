// script.js

var initialTextValue = '';
var initialPasswordValue = '';

document.addEventListener('DOMContentLoaded', function () {
  // Menyimpan nilai awal dari input text dan password saat halaman dimuat
  initialTextValue = document.getElementById('text').value;
  initialPasswordValue = document.getElementById('password').value;
});

function encrypt() {
  var text = document.getElementById('text').value;
  var password = document.getElementById('password').value;

  if (text === '' || password === '') {
    alert('Both data and password are required for encryption.');
    return;
  }

  var encrypted = CryptoJS.AES.encrypt(text, password);
  document.getElementById('EncryptedValue').innerHTML = encrypted;
  document.getElementById('decrypted').innerHTML = '';
}

function decrypt() {
  var encryptedValue = document.getElementById('EncryptedValue').innerHTML;
  var password = document.getElementById('password').value;

  if (encryptedValue === '' || password === '') {
    alert('Both encrypted data and password are required for decryption.');
    return;
  }

  var decrypted = CryptoJS.AES.decrypt(encryptedValue, password).toString(
    CryptoJS.enc.Utf8
  );
  document.getElementById('decrypted').innerHTML = decrypted;
  document.getElementById('EncryptedValue').innerHTML = '';
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
  document.getElementById('EncryptedValue').innerHTML = '';
  document.getElementById('decrypted').innerHTML = '';
}
