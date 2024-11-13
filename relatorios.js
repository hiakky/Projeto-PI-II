// Função para salvar um novo relatório
function saveReport() {
    const reportText = document.getElementById('reportText').value.trim();
    if (!reportText) {
        alert("O relatório não pode estar vazio.");
        return;
    }

    // Pega a data atual para organizar os relatórios
    const currentDate = new Date().toLocaleString('pt-BR', { 
        year: 'numeric', month: '2-digit', day: '2-digit', 
        hour: '2-digit', minute: '2-digit', second: '2-digit' 
    });

    // Cria um objeto de relatório
    const newReport = {
        text: reportText,
        date: currentDate
    };

    // Recupera os relatórios existentes do localStorage
    let reports = JSON.parse(localStorage.getItem('reports')) || [];

    // Adiciona o novo relatório à lista
    reports.push(newReport);

    // Salva a lista de relatórios no localStorage
    localStorage.setItem('reports', JSON.stringify(reports));

    // Limpa o campo de texto
    document.getElementById('reportText').value = '';

    // Atualiza a lista de relatórios exibidos
    displayReports();
}

// Função para exibir os relatórios armazenados
function displayReports() {
    const reports = JSON.parse(localStorage.getItem('reports')) || [];
    const reportList = document.getElementById('reportList');
    reportList.innerHTML = '';

    reports.forEach(report => {
        const reportItem = document.createElement('div');
        reportItem.classList.add('report-item');
        reportItem.innerHTML = `
            <p>${report.text}</p>
            <span class="date">${report.date}</span>
        `;
        reportList.appendChild(reportItem);
    });
}

// Carregar os relatórios ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    displayReports();
});
