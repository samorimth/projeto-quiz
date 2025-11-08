function clearRanking() {
    if (confirm("Tem certeza que deseja limpar o Ranking? Esta ação não pode ser desfeita.")) {
        localStorage.removeItem(RANKING_KEY); // Remove o item do localStorage
        ranking = []; // Zera a variável local do ranking
        updateRankingDisplay(); // Atualiza a exibição na tela
        alert("Ranking limpo com sucesso!");
    }
}