function calcularDelta() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;

    a = Number(a);
    b = Number(b);
    c = Number(c);

    var delta = Math.pow(b, 2) - 4 * a * c;

    document.getElementById('resultado').value = delta;
}

function calcularComprimento() {
    var raio = document.getElementById('raio').value;
    
    raio = Number(raio);

    // comprimento = 2 * pi * raio

    var comp = 2 * Math.PI * raio;
    comp = comp.toFixed(2); //para 2 casas decimais  
    
    document.getElementById('c').value = comp;
}

function calcularArea() {
    var raio = document.getElementById('raio').value;
    
    raio = Number(raio);

    // area = 4 * pi * raio2

    var area = 2 * Math.PI * Math.pow(raio, 2);
    area = area.toFixed(2); //para 2 casas decimais  
    
    document.getElementById('a').value = area;
}

function calcularVolume() {
    var raio = document.getElementById('raio').value;
    
    raio = Number(raio);

    // volume = 3/4 * pi * raio3

    var vol = 3/4 * Math.PI * Math.pow(raio, 3);
    vol = vol.toFixed(2); //para 2 casas decimais  
    
    document.getElementById('v').value = vol;
}

function escolherCalculadora() {
    if (document.getElementById('delta').checked == true)
        window.location.replace('calculadoradelta.html');

    else if (document.getElementById('esfera').checked == true)
        window.location.replace('calculadoraesfera.html');

    else if (document.getElementById('basica').checked == true)
        window.location.replace('calculadorabasica.html');

    else
        window.alert('Voçê deve selecionar uma das opções!');
}

function calcularOperacao(operacao) {
    var n1 = Number(document.getElementById('n1').value);
    var n2 = Number(document.getElementById('n2').value);
    var resultado = 0;

    switch(operacao) {
        case '+': resultado = n1 + n2; break;
        case '-': resultado = n1 - n2; break;
        case 'x': resultado = n1 * n2; break;
        case ':': resultado = n1 / n2; break;
    }

    document.getElementById('resultado').value = resultado;

}