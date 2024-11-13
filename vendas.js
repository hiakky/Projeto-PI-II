// vendas.js

// Função para carregar dados de vendas fictícios (para simulação)
function loadKPIData() {
    // Dados de exemplo (substituir com dados reais)
    const totalSales = "R$";
    const topProduct = "...";
    const totalQuantity = "";
    const totalRevenue = "R$";
    
    // Atualiza o conteúdo dos KPIs
    document.getElementById("totalSales").textContent = totalSales;
    document.getElementById("topProduct").textContent = topProduct;
    document.getElementById("totalQuantity").textContent = `${totalQuantity} unidades`;
    document.getElementById("totalRevenue").textContent = totalRevenue;
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", loadKPIData);
