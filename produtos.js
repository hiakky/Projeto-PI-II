document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;
    const expirationDate = document.getElementById("expirationDate").value || "N/A";

    // Cria uma nova linha para o produto
    const table = document.getElementById("productTable").querySelector("tbody");
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const quantityCell = newRow.insertCell(1);
    const expirationCell = newRow.insertCell(2);

    nameCell.textContent = productName;
    quantityCell.textContent = quantity;
    expirationCell.textContent = expirationDate;

    // Limpa o formulário
    document.getElementById("productForm").reset();
});

