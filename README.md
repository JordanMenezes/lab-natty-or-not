# Título do Projeto Gerador de Poemas Personalizados

## 📒 Descrição
O Gerador de Poemas Personalizados é uma aplicação web simples que permite que os usuários insiram palavras ou temas e recebam um poema gerado automaticamente. É uma maneira divertida e interativa de explorar a poesia utilizando inteligência artificial.

## 🤖 Tecnologias Utilizadas
- **OpenAI GPT-3/ChatGPT**: Para a geração automática de poemas.
- **HTML/CSS**: Para a construção da interface da aplicação.
- **JavaScript**: Para lidar com a interação do usuário e as chamadas para a API do OpenAI.

## 🧐 Processo de Criação

### Passo 1: Planejamento
- Defina o escopo do projeto, incluindo quais tipos de poemas podem ser gerados (românticos, tristes, inspiradores, etc.).
- Decida como os usuários irão interagir com a aplicação (ex: inserindo uma palavra-chave ou tema).

### Passo 2: Configuração do Ambiente
- Configure um ambiente de desenvolvimento local.
- Crie uma conta na OpenAI e obtenha uma chave de API para acessar o modelo GPT-3 ou ChatGPT.

### Passo 3: Desenvolvimento da Interface
- Crie um arquivo HTML com um formulário simples, onde os usuários possam inserir suas palavras-chave:
  
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Poemas Personalizados</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Gerador de Poemas Personalizados</h1>
        <input type="text" id="keywords" placeholder="Digite uma palavra ou tema">
        <button id="generate">Gerar Poema</button>
        <div id="poem"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Passo 4: Estilização da Página
- Crie um arquivo CSS (styles.css) para adicionar estilos à sua aplicação, como cores e espaçamento.

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
}

.container {
    margin: 50px auto;
    width: 400px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
}

button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

#poem {
    margin-top: 20px;
    font-style: italic;
}
```

### Passo 5: Programação da Lógica de Geração
- Crie um arquivo JavaScript (script.js) para lidar com a lógica de interação e chamadas à API do OpenAI:

```javascript
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
```

### Passo 6: Testes e Correções
- Teste a aplicação localmente e verifique se a geração de poemas está funcionando como esperado.
- Faça ajustes conforme necessário com base nos testes.

### Passo 7: Implementação e Compartilhamento
- Publique a aplicação em um servidor web simples ou use plataformas como GitHub Pages, Vercel ou Netlify para compartilhar com amigos e coletar feedback.

## 🚀 Resultados
Ao final do projeto, você terá uma aplicação funcional onde os usuários podem inserir suas palavras ou temas e receber poemas personalizados. Esta aplicação pode ser expandida com recursos adicionais, como a escolha de estilos de poema ou a capacidade de salvar poemas gerados.

## 💭 Reflexão (Opcional)
Criar uma aplicação simples usando IA é acessível e pode ser uma experiência gratificante. O feedback contínuo dos usuários pode guiar melhorias e inovações, mostrando que mesmo projetos simplificados podem ser relevantes e impactantes. A interação entre a criatividade humana e a inteligência artificial pode resultar em experiências únicas e inspiradoras.