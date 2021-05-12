const state = document.getElementById('state');

function whatState() {
    const arrayEstados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'];
    for (let indexState = 0; indexState < arrayEstados.length; indexState += 1) {
        stateList = arrayEstados[indexState];
        stateOption = document.createElement('option');
        stateOption.innerHTML = stateList;
        state.appendChild(stateOption);
    }    
}
whatState();