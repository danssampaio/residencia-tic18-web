function capturarInformacoes(button) {
    const roteiroViagem = button.closest('.roteiros-viagens');
    const destino = roteiroViagem.querySelector('.roteiro-destino').innerText;
    const inclusos = Array.from(roteiroViagem.querySelectorAll('.roteiro-incluso li')).map(li => li.innerText);
    const preco = roteiroViagem.querySelector('.roteiro-preco').innerText;
    const observacoes = roteiroViagem.querySelector('.roteiro-obs').innerText;
    const parcelamento = roteiroViagem.querySelector('.roteiro-parcelamento').innerText;

    const pacoteTuristico = {
        destino: destino,
        inclusos: inclusos,
        preco: preco,
        observacoes: observacoes,
        parcelamento: parcelamento
    };

    console.log(JSON.stringify(pacoteTuristico, null, 2));
}