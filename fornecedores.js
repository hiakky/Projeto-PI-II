document.getElementById("supplierForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const supplierName = document.getElementById("supplierName").value;
    const contact = document.getElementById("contact").value;
    const suppliedProduct = document.getElementById("suppliedProduct").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    const table = document.getElementById("supplierTable").querySelector("tbody");
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const contactCell = newRow.insertCell(1);
    const productCell = newRow.insertCell(2);
    const dateCell = newRow.insertCell(3);
    const actionsCell = newRow.insertCell(4);

    nameCell.textContent = supplierName;
    contactCell.textContent = contact;
    productCell.textContent = suppliedProduct;
    dateCell.textContent = deliveryDate;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Remover";
    deleteButton.addEventListener("click", function() {
        table.deleteRow(newRow.rowIndex - 1);
    });

    actionsCell.appendChild(deleteButton);

    // Limpa o formulário após adicionar o fornecedor
    document.getElementById("supplierForm").reset();
});

let transactions = [];

function addTransaction() {
    const type = document.getElementById("type").value;
    const value = document.getElementById("value").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;

    const transaction = { type, value, description, status };
    transactions.push(transaction);

    renderTransactions();
    document.getElementById("transactionForm").reset();
}

function removeTransaction(index) {
    transactions.splice(index, 1);
    renderTransactions();
}

function renderTransactions() {
    const transactionList = document.getElementById("transactionList");
    transactionList.innerHTML = "";

    transactions.forEach((transaction, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${transaction.type}</td>
            <td>R$ ${transaction.value}</td>
            <td>${transaction.description}</td>
            <td>${transaction.status}</td>
            <td><button class="remove-btn" onclick="removeTransaction(${index})">Remover</button></td>
        `;

        transactionList.appendChild(row);
    });
}

