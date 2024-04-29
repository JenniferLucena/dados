function adicionarLinha() {
    var item = "Novo Item";
    var quantidade = 1;
    var preco = 0.00;
  
    var newRow = $('<tr>');
    var cols = "";
  
    cols += '<td>' + item + '</td>';
    cols += '<td>' + quantidade + '</td>';
    cols += '<td>' + preco.toFixed(2) + '</td>';
  
    newRow.append(cols);
    $("#myTable").append(newRow);
  }

function enviarDados() {
    var dados = [];
  
    $('#myTable tr').each(function(row, tr){
      var item = $(tr).find('td:eq(0)').text();
      var quantidade = parseInt($(tr).find('td:eq(1)').text());
      var preco = parseFloat($(tr).find('td:eq(2)').text());
  
      dados.push({item: item, quantidade: quantidade, preco: preco});
    });
  
    var xhr = new XMLHttpRequest();
    var url = "processar_dados.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert('Dados enviados com sucesso!');
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        alert('Erro ao enviar dados: ' + xhr.statusText);
      }
    };
  
    xhr.send(JSON.stringify(dados));
  }