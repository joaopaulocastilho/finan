<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nova Compra</title>
    <script src="./js/addItem.js"></script>
</head>
<body>
    <form method="post">
        <input type="text" name="buylocal" placeholder="Local da compra"/><br>
        <input type="date" name="buydate" placeholder="Data da compra"/><br>
        <br>
        <input type="button" value="+ Produtos" onclick="addItem(1)"/><br>
        <input type="submit" value="Salvar compra"/><br>
        <span id="itemsList">&nbsp;</span>
    </form>
</body>
</html>
