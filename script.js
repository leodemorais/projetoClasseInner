// Captura dos elementos HTML
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adiciona conteúdo textual aos elementos
titulo.innerText = 'Título da Página';
link.innerText = 'Visite o site da Proz Educação';

// Adiciona itens simples na lista não ordenada
for (let i = 1; i <= 3; i++) {
    const item = document.createElement('li');
    item.innerText = `Item ${i}`;
    listaNaoOrdenada.appendChild(item);
}

// Adiciona itens com links na lista ordenada
const sites = ['https://site1.com', 'https://site2.com', 'https://site3.com'];
for (let i = 0; i < sites.length; i++) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = sites[i];
    link.innerText = `Link ${i + 1}`;
    item.appendChild(link);
    listaOrdenada.appendChild(item);
}
