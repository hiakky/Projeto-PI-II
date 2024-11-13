// financeiro.js

// Dados fictícios para o exemplo
const financialData = {
    currentBalance: "R$ 5.200",
    totalIncome: "R$ 15.000",
    totalExpense: "R$ 9.800",
    cashFlow: [1200, 1500, 1800, 1400, 1600, 1300, 1900],
    accounts: [
        { description: "Fornecedor A", category: "Compra de estoque", dueDate: "2024-11-10", value: "R$ 500", status: "Pendente" },
        { description: "Fornecedor B", category: "Compra de insumos", dueDate: "2024-11-15", value: "R$ 800", status: "Pago" },
        { description: "Venda C", category: "Receita de venda", dueDate: "2024-11-20", value: "R$ 1200", status: "Recebido" }
    ]
};

// Função para carregar dados financeiros
function loadFinancialData() {
    document.getElementById("currentBalance").textContent = financialData.currentBalance;
    document.getElementById("totalIncome").textContent = financialData.totalIncome;
    document.getElementById("totalExpense").textContent = financialData.totalExpense;

    const tableBody = document.getElementById("financialTableBody");
    financialData.accounts.forEach(account => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${account.description}</td>
            <td>${account.category}</td>
            <td>${account.dueDate}</td>
            <td>${account.value}</td>
            <td>${account.status}</td>
        `;
        tableBody.appendChild(row);
    });

    renderCashFlowChart();
}

// Função para simular o gráfico de fluxo de caixa
function renderCashFlowChart() {
    const chartContainer = document.getElementById("cashFlowChart");
    const canvas = document.createElement("canvas");
    chartContainer.appendChild(canvas);

    new Chart(canvas, {
        type: "line",
        data: {
            labels: ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6", "Dia 7"],
            datasets: [{
                label: "Fluxo de Caixa",
                data: financialData.cashFlow,
                borderColor: "#2563eb",
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: "Dias" } },
                y: { title: { display: true, text: "Valor (R$)" } }
            }
        }
    });
}

// Carregar dados ao iniciar
document.addEventListener("DOMContentLoaded", loadFinancialData);
