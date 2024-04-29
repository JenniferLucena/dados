<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe os dados do JavaScript
    $dados = json_decode(file_get_contents("php://input"), true);

    // Conecta ao banco de dados (substitua com suas informações)
    $conn = new mysqli("localhost", "root", "123*", "bar");

    // Insere os dados no banco de dados
    foreach ($dados as $dado) {
        $item = $conn->real_escape_string($dado['item']);
        $quantidade = (int)$dado['quantidade'];
        $preco = (float)$dado['preco'];

        // Inserção dos dados na tabela do banco de dados
        $sql = "INSERT INTO pedidos (item, quantidade, preco) VALUES ('$item', $quantidade, $preco)";

        if ($conn->query($sql) !== TRUE) {
            echo "Erro ao inserir dados: " . $conn->error;
        }
    }

    // Fecha a conexão
    $conn->close();
}
?>