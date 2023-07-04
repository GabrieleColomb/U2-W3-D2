function salvaNome() {
  var nome = document.getElementById('name').value;
  localStorage.setItem('nomeUtente', nome);
  mostraValoreSalvato();
}

function rimuoviNome() {
  localStorage.removeItem('nomeUtente');
  mostraValoreSalvato();
}

function mostraValoreSalvato() {
  var valoreSalvato = localStorage.getItem('nomeUtente');
  var valoreSalvatoDiv = document.getElementById('valoreSalvato');
  var inputField = document.getElementById('name');

  if (valoreSalvato) {
    inputField.value = valoreSalvato;
    valoreSalvatoDiv.textContent = 'Valore precedentemente salvato: ' + valoreSalvato;
  } else {
    inputField.value = '';
    valoreSalvatoDiv.textContent = '';
  }
}

mostraValoreSalvato();