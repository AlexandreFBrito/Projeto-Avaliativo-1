var listaCompleta = [];
var listaLocal;
var idTarefa = 0;

if (JSON.parse(localStorage.getItem('lista')) != null) {
    listaCompleta = JSON.parse(localStorage.getItem('lista'));

    function localS() {

        if (listaCompleta != null) {
            //idTarefa = listaCompleta.length;
            for (var i = 0; i < listaCompleta.length; i++) {
                var tabela = document.getElementById('lista');
                var numeroLinhas = tabela.rows.length;
                var linha = tabela.insertRow(numeroLinhas);
                var celula1 = linha.insertCell(0);
                var celula2 = linha.insertCell(1);
                var celula3 = linha.insertCell(2);

                if (listaCompleta[i].status == "false") {
                    celula1.innerHTML = '<input type="checkbox" id="ch' + listaCompleta[i].id + '" value="' + listaCompleta[i].id + '" onclick="through(this.value)">';
                    celula2.innerHTML = '<label class="ch' + listaCompleta[i].id + '" for="ch' + listaCompleta[i].id + '" >' + listaCompleta[i].nome + '</label>';
                } else {
                    celula1.innerHTML = '<input type="checkbox" checked="checked" id="ch' + listaCompleta[i].id + '" value="' + listaCompleta[i].id + '" onclick="through(this.value)">';
                    celula2.innerHTML = '<label class="ch' + listaCompleta[i].id + '" for="ch' + listaCompleta[i].id + '" style="text-decoration: line-through;">' + listaCompleta[i].nome + '</label>';
                }

                celula3.innerHTML = '<button onclick="removeLinha(this, this.value)" value="' + idTarefa + '">X</button>';

            }
            idTarefa = listaCompleta[listaCompleta.length - 1].id + 1;
        }
    }

    localS();
}

function adicionaLinha() {

    //recupero o input
    var input = document.getElementById('tarefaDigitada');

    //recupero o texto digitado no input
    var tarefaDigitada = input.value;
    var status = "false";

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
        celula1.innerHTML = '<input type="checkbox" id="ch' + idTarefa + '" value="' + idTarefa + '" onclick="through(this.value)">';
        celula2.innerHTML = '<label class="ch' + idTarefa + '" >' + tarefaDigitada + '</label>';
        celula3.innerHTML = '<button onclick="removeLinha(this)" id="bt' + idTarefa + '" value="' + idTarefa + '">X</button>';

        //capturando os objetos
        var listaTarefa = new Object();
        listaTarefa.id = idTarefa;
        listaTarefa.nome = tarefaDigitada;
        listaTarefa.status = status;

        //lista com todas as tarefas
        listaCompleta.push(listaTarefa);


        //Criando String
        listaLocal = JSON.stringify(listaCompleta);

        //inserindo dados no localstorage
        window.localStorage.setItem('lista', listaLocal);

        //limpo o input
        input.value = '';
        idTarefa = idTarefa + 1;
    } else {
        alert('Não foi digitada nenhuma tarefa');
    }
}
//função para remover linha clicando no botão
function removeLinha(linha, valor) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('lista').deleteRow(i);

}

//função para deixar o texto tachado
function through(objeto) {

    if (listaCompleta[objeto].status == 'false') {
        var label = document.getElementsByClassName('ch' + objeto)[0];
        label.style.cssText = 'text-decoration: line-through;';
        listaCompleta[objeto].status = "true";
        //Criando String
        listaLocal = JSON.stringify(listaCompleta);
        //inserindo dados no localstorage
        window.localStorage.setItem('lista', listaLocal);
    } else {
        listaCompleta[objeto].status = "false";
        //Criando String
        listaLocal = JSON.stringify(listaCompleta);
        //inserindo dados no localstorage
        window.localStorage.setItem('lista', listaLocal);
        var label = document.getElementsByClassName('ch' + objeto)[0];
        label.style.cssText = 'text-decoration: none;';
    }


}