const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');
const result = document.getElementById('resultado');

function calcularTotal() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        mensagem()

    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Quantidade de itens: <span> ${v1} </span> </li>
                <li>Preço individual: <span> R$${(v2).toFixed(2)} </span> </li>       
                <li><strong>O valor total dos itens é ${v1} * R$${(v2).toFixed(2)}:</strong> <span> R$${(v1 * v2).toFixed(2)} </span> </li>
            </ul>
        `;
    }
}

function desconto() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        mensagem()

    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Valor do item: <span> R$${(v1).toFixed(2)} </span> </li>
                <li>Porcentagem de desconto: <span> ${v2}% </span> </li>       
                <li><strong>O valor final de R$${(v1).toFixed(2)} com ${v2}% de desconto corresponde a:</strong> <span> R$${(v1 - ((v1 * v2) / 100)).toFixed(2)} </span> </li>
            </ul>
        `;
    }
}

function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        mensagem()

    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Valor do item: <span> R$${(v1).toFixed(2)} </span> </li>
                <li>Porcentagem de juros: <span> ${v2}% </span> </li>       
                <li><strong>O valor final de R$${(v1).toFixed(2)} com acréscimo de ${v2}% de juros corresponde a:</strong> <span>${(v1 + ((v1 * v2) / 100)).toFixed(2)}R$</span> </li>
            </ul>
        `;
    }
}

function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        mensagem()

    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Valor do item: <span> R$${(v1).toFixed(2)} </span> </li>
                <li>Porcentagem de comissão: <span> ${v2}% </span> </li>       
                <li><strong>Em uma venda de R$${(v1).toFixed(2)}, a comissão de ${v2}% sobre o valor será de:</strong> <span>${(v1 * (v2 / 100)).toFixed(2)}R$</span> </li>
            </ul>
        `;
    }
}

function lucro() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        mensagem()

    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Valor de venda: <span> R$${(v1).toFixed(2)}</span> </li>
                <li>Valor de compra: <span> R$${(v2).toFixed(2)} </span> </li>   
                <li><strong>O lucro na compra de um produto de R$${(v2).toFixed(2)} e na revenda por R$${(v1).toFixed(2)} é de:</strong> <span> R$${(v1 - v2).toFixed(2)} </span> </li>
            </ul>
        `;
    }
}

function limpar() {
    input01.value = "";
    input02.value = "";
    result.style.display = "none";
    input01.focus();
}

function mensagem() {
    result.innerHTML = `
            <h2>ERRO DE VALIDAÇÃO</h2>
            <p>Valores inválidos. Digite um número.</p>
        `;
    input01.focus()
}