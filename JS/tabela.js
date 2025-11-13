const caminhoJSON = 'json/tabela.json'

fetch(caminhoJSON) 
    .then(resposta => resposta.json()) 
    .then(dados => inserirTabela(dados)) 
    .catch(erro => console.error('Erro ao carregar JSON:', erro)); 

function inserirTabela(dados) { 
    const corpoTabela = document.querySelector('#tabela2 tbody'); 
    corpoTabela.innerHTML = ''; 
    dados.forEach(valorTabela => { 
        const linha = document.createElement('tr'); 
        linha.innerHTML = `
            <td>${valorTabela.elemento}</td>
            <td>${valorTabela.funcao}</td>
            <td>${valorTabela.necessario}</td>
            <td>${valorTabela.compatibilidade}</td>
            <td>${valorTabela.observacao}</td>
        `; 
        corpoTabela.appendChild(linha);
    });

}