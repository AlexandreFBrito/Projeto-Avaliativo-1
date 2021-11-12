
var lista = ['Curso Java', 'Curso Python', 'Curso JS'];

function localS() {

    for (var i = 0; i < lista.length; i++) {
        var tabela = document.getElementById('lista');
        var numeroLinhas = tabela.rows.length;
        var linha = tabela.insertRow(numeroLinhas);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var celula3 = linha.insertCell(2);
        celula1.innerHTML = '<input type="checkbox">';
        celula2.innerHTML = "<label>" + lista[i] + "</label>";
        celula3.innerHTML = "<button onclick='removeLinha(this)'>X</button>";
    }
}

localS();

function adicionaLinha() {

    //recupero o input
    var input = document.getElementById('tarefaDigitada');

    //recupero o texto digitado no input
    var tarefaDigitada = input.value;

    //verifico se não é vazio
    if (tarefaDigitada != '') {
        //recupero a tabela
        var tabela = document.getElementById('lista');
        
        //recupero o número de linhas da tabela
        var numeroLinhas = tabela.rows.length;
        var linha = tabela.insertRow(numeroLinhas);
        
        //crio as celulas
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);
        var celula3 = linha.insertCell(2);
        
        //insiro os dados na celula
        celula1.innerHTML = '<input type="checkbox">';
        celula2.innerHTML = "<label>" + tarefaDigitada + "</label>";
        celula3.innerHTML = "<button onclick='removeLinha(this)'>X</button>";
        
        //inserindo dados no array
        lista.push(tarefaDigitada);
        
        //inserindo dados no localstorage
        window.localStorage.setItem('lista', lista);
       
        //limpo o input
        input.value = '';        
    } else {
        alert('Não foi digitada nenhuma tarefa');
    }
}
//função para remover linha clicando no botão
function removeLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('lista').deleteRow(i);
}