var regex = /^(ftp|http|https):\/\/[^ "]+$/;

function inserirPacote() {
    const destino = document.getElementById("destino").value;
    const imagem = document.getElementById("imagem").value;
    const duracao = document.getElementById("duracao").value;
    const inclusos = document.getElementById("inclusos").value.split(/,|\n/).map(item => item.trim());
    const preco = document.getElementById("preco").value;

    if (!destino || !imagem || !duracao || !inclusos || !preco) {
        alert("Por favor, preencha todos os campos.");
        return;
    } else {
        if (isNaN(preco)) {
            alert('Por favor, insira um preço válido.');
            return;
        }
        if (!regex.test(imagem)) {
            alert('Por favor, insira um link válido.');
            return;
          }
    }

    const novoRoteiro = document.createElement("div");
    novoRoteiro.className = "roteiros-viagens";

    const inclusosHTML = inclusos.map(item => `<li>${item}</li>`).join("");

    novoRoteiro.innerHTML = `
        <img class="img-roteiro" src="${imagem}" alt="${destino}">
        <div class="roteiro-destino">${destino}</div>
        <ul class="roteiro-incluso">${inclusosHTML}</ul>
        <div class="roteiro-preco">R$${preco}</div>
        <div class="roteiro-obs">Taxas Inclusas</div>
        <div class="roteiro-parcelamento">Em até 10x sem Juros</div>
        <button class="roteiro-comprar" onclick="capturarInformacoes(this)">Comprar</button>
    `;

    const containerDestinos = document.querySelector(".container-destinos");
    containerDestinos.appendChild(novoRoteiro);

    document.getElementById("destino").value = "";
    document.getElementById("imagem").value = "";
    document.getElementById("duracao").value = "";
    document.getElementById("inclusos").value = "";
    document.getElementById("preco").value = "";
}
