function adicionaLinha(idTabela) {

    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    //celula1.innerHTML = 'produto '+ Math.floor((Math.random() * 100) + 1); 
    celula1.innerHTML = '<input type="checkbox">';
    celula2.innerHTML = Math.floor((Math.random() * 100) + 1);
    celula3.innerHTML = "<button onclick='removeLinha(this)'>X</button>";
}

function removeLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('lista').deleteRow(i);
}