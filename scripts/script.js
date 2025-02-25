document.getElementById("generate").onclick = function() {
    const keywords = document.getElementById("keywords").value;
    
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer SUA_CHAVE_DE_API', // Substitua pela sua chave
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: `Escreva um poema sobre: ${keywords}`,
            max_tokens: 100,
            temperature: 0.7,
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("poem").innerText = data.choices[0].text.trim();
    })
    .catch((error) => {
        console.error('Erro:', error);
        document.getElementById("poem").innerText = "Erro ao gerar poema.";
    });
};
