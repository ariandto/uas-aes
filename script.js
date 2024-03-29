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
    var encrypted = CryptoJS.AES.encrypt(text, password).toString();
    document.getElementById('result').innerHTML = encrypted;
  } else if (operationDecrypt) {
    var encryptedValue = document.getElementById('result').innerHTML;
    if (encryptedValue === '') {
      alert('Encrypted data is required for decryption.');
      return;
    }

    try {
      var decrypted = CryptoJS.AES.decrypt(encryptedValue, password);
      var decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

      if (!decryptedText) {
        throw new Error('Invalid password or encrypted data.');
      }

      document.getElementById('result').innerHTML = decryptedText;
    } catch (error) {
      alert('Decryption failed. ' + error.message);
    }
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
