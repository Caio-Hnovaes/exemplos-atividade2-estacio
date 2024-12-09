// Troca os valores de duas posições em um vetor
const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

// Embaralha os elementos de um vetor

const shuffle = (vetor, quantidade) => {
    for (let i = 0; i < quantidade; i++){
        const pos1 = Math.floor(Math.random() * vetor.length);
        const pos2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, pos1, pos2);
    }
};

// Ordena um vetor de inteiros utilizando Bubble Sort

const bubble_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - 1 - i; j++) {
            if (vetor[j] > vetor[j + 1]){
                swap(vetor, j, j + 1);
            }
        }
    }
};

// Ordena um vetor de inteiros utilizando selection sort

const selection_sort = (vetor) => {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++){
        let menor = i;
        for (let j = i + 1; j < n; j++){
            if (vetor[j] < vetor[menor]){
                menor = j;
            }
        }
        swap (vetor, i, menor);
    }
};

// Particiona o vetor para o algoritmo Quick Sort

const particionamento = (vetor, inicio, fim) => {
    const pivot = vetor[fim];
    let i = inicio - 1;
    for (let j = inicio; j < fim; j++){
        if (vetor[j] < pivot) {
            i++;
            swap(vetor, i, j);
        }
    }
    swap(vetor, i + 1, fim);
    return i + 1;
};

// Ordena um vetor de inteiros utilizando Quick Sort

const quick_sort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        const posPivot = particionamento(vetor, inicio, fim);
        quick_sort(vetor, inicio, posPivot - 1);
        quick_sort(vetor, posPivot + 1, fim);
    }
};

/*
//Testando as funções

//vetor de teste
const vetor = [8, 3, 5, 1, 9, 7, 2];

// Testabdi shuffle
console.log('Vetor original:', vetor);
shuffle(vetor, 5);
console.log('Vetor embaralhado:', vetor);

//Testando Bubble Sort
bubble_sort(vetor);
console.log('Bubble sort:', vetor);

//testando selection sort
shuffle(vetor, 5);
console.log('Vetor embaralhado:', vetor);
selection_sort(vetor);
console.log('Selection Sort:', vetor);

//testando quick sort
shuffle(vetor, 5);
console.log('Vetor embaralhado:', vetor);
quick_sort(vetor, 0, vetor.length - 1);
console.log('Quick Sort:', vetor);
*/

function add(){
    const input = document.getElementById('valor');

    const lista = document.getElementById('valores');

    const node = document.createElement('li');

    const texto = document.createTextNode(input.value);
    node.appendChild(texto);

    lista.appendChild(node);

    input.value = '';
}

function ordenar(){
    const lista = document.getElementById('valores');
    const metodo = document.getElementById('metodo');
    const vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));

    switch (metodo.selectedIndex){
        case 0:
            bubble_sort(vetor);
            break;
        case 1:
            selection_sort(vetor);
            break;
        case 2:
            quick_sort(vetor, 0, vetor.length - 1);
            break;
    }

    lista.innerHTML = vetor
       .map(valor => `<li>${valor}</li>`)
       .reduce((html, li) => html + li, '');
}

function misturar(){
    const lista = document.getElementById('valores');

    const vetor = Array.from(lista.children).map(item => parseInt(item.innerHTML));

    shuffle(vetor, vetor.length * 2);

    lista.innerHTML = vetor
       .map(valor => `<li>${valor}</li>`)
       .reduce((html, li) => html + li, '');
}