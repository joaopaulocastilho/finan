function addItem() {
    var number = document.getElementById("counter").value++;
    
    var name  = document.createElement("input");
    var quantity  = document.createElement("input");
    var price  = document.createElement("input");

    name.setAttribute("type", "text");
    quantity.setAttribute("type", "number");
    price.setAttribute("type", "number");

    name.setAttribute("name", "buyitemname" + name);
    quantity.setAttribute("name", "buyitemquantity" + name);
    price.setAttribute("name", "buyitemprice" + name);

    name.setAttribute("placeholder", "Nome");
    quantity.setAttribute("placeholder", "Quantidade ou peso");
    price.setAttribute("placeholder", "Preço por unidade ou kgs");

    var items = document.getElementById("itemsList");
    items.appendChild(name);
    items.appendChild(quantity);
    items.appendChild(price);
    items.appendChild(document.createElement("br"));

    document.getElementById("counter").value = ++number;
}
