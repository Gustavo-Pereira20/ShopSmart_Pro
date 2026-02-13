const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');
const result = document.getElementById('resultado');

function calcularTotal() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        result.innerHTML = `
            <h2>ERRO DE VALIDAÇÃO</h2>
            <p>Valores inválidos. Digite um número.</p>
        `;
    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Quantidade de itens: <span> ${v1} </span> </li>
                <li>Preço individual: <span>${v2}</span> </li>       
                <li>O valor total dos itens é ${v1} * ${v2}: <span>${v1 * v2}R$</span> </li>
            </ul>
        `;
    }
}

function desconto() { 
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        result.innerHTML = `
            <h2>ERRO DE VALIDAÇÃO</h2>
            <p>Valores inválidos. Digite um número.</p>
        `;
    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Valor do item: <span> ${v1} </span> </li>
                <li>Porcentagem de desconto: <span>${v2}</span> </li>       
                <li>O valor final de ${v1}R$ com ${v2}% de desconto corresponde a: <span>${v1 - ((v1 * v2) / 100)}R$</span> </li>
            </ul>
        `;
    }
}

function juros() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        result.innerHTML = `
            <h2>ERRO DE VALIDAÇÃO</h2>
            <p>Valores inválidos. Digite um número.</p>
        `;
    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Valor do item: <span> ${v1} </span> </li>
                <li>Porcentagem de juros: <span>${v2}</span> </li>       
                <li>O valor final de ${v1}R$ com acréscimo de ${v2}% de juros corresponde a: <span>${v1 + ((v1 * v2) / 100)}R$</span> </li>
            </ul>
        `;
    }
}

function comissao() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        result.innerHTML = `
            <h2>ERRO DE VALIDAÇÃO</h2>
            <p>Valores inválidos. Digite um número.</p>
        `;
    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Valor do item: <span> ${v1} </span> </li>
                <li>Porcentagem de comissão: <span>${v2}</span> </li>       
                <li>Em uma venda de ${v1}R$, a comissão de ${v2}% sobre o valor será de: <span>${v1 * (v2 / 100)}R$</span> </li>
            </ul>
        `;
    }
}

function lucro() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);

    if (isNaN(v1) || isNaN(v2)) {
        result.style.display = 'flex';
        result.innerHTML = `
            <h2>ERRO DE VALIDAÇÃO</h2>
            <p>Valores inválidos. Digite um número.</p>
        `;
    } else {
        result.style.display = 'flex';
        result.innerHTML = `
            <ul>
                <li>Valor de compra: <span> ${v1} </span> </li>
                <li>Valor de revenda: <span>${v2}</span> </li>       
                <li>O lucro na compra de um produto de ${v1}R$ e na revenda por ${v2}R$ é de: <span>${v2 - v1}R$</span> </li>
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