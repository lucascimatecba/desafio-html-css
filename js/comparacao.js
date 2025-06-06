let carrosArray = [];
class Carros {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, imagem){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.roda = roda;
       this.volumeCacamba = volumeCacamba;
       this.imagem = imagem;
    }
} 

function ReceberCarrosArrayPosicao(array, carrosClass) {
    for(let i = 0; i < array.length; i++){
        if(array[i].nome  === carrosClass.nome)
            return i;
    }
    return -1;
}

function DefinirCarroParaComparacao(el, carrosClass) {
    if(carrosClass instanceof Carros){       
        if(el.checked){
            if(carrosArray.length >= 2) {
                alert("Você só pode marcar 2 veículos para apresentar a comparação");
                document.querySelectorAll('input[type="checkbox"].checkbox').forEach(checkbox => checkbox.checked = false);
                carrosArray = [];
                return;
            }
            if (ReceberCarrosArrayPosicao(carrosArray, carrosClass) === -1) {
                carrosArray.push(carrosClass);
            }
        } else {
          const index = ReceberCarrosArrayPosicao(arr, carrosClass);
          if (index !== -1) {
            carrosArray.splice(index, 1);
          }
        } 
    } else {
        throw "Você precisa definir uma classe de carros.";
    }
}

function MostrarComparacao() {
    if(carrosArray.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    AtualizarTabelaDeComparacao();
    document.getElementById("comparacao").style.display = "block";
}

function EsconderComparacao(){
    document.getElementById("comparacao").style.display = "none";
    carrosArray = [];
    document.querySelectorAll('input[type="checkbox"].checkbox').forEach(cb => cb.checked = false);
}

function AtualizarTabelaDeComparacao() {
    for (let i = 0; i < 2; i++) {
        const car = carrosArray[i];

        document.getElementById(`comparacao_image_${i}`).innerHTML = `<img src="${car.imagem}" style="width: 100px;">`;
        document.getElementById(`comparacao_modelo_${i}`).innerText = car.nome;
        document.getElementById(`comparacao_alturacacamba_${i}`).innerText = `${car.alturaCacamba} mm`;
        document.getElementById(`comparacao_alturaveiculo_${i}`).innerText =  `${car.alturaVeiculo} mm`;
        document.getElementById(`comparacao_alturasolo_${i}`).innerText = `${car.alturaSolo} mm`;
        document.getElementById(`comparacao_capacidadecarga_${i}`).innerText = `${car.capacidadeCarga} kg`;
        document.getElementById(`comparacao_motor_${i}`).innerText =  `${car.motor} L`;
        document.getElementById(`comparacao_potencia_${i}`).innerText =  `${car.potencia} cv`;
        document.getElementById(`comparacao_volumecacamba_${i}`).innerText =  `${car.volumeCacamba} L`;
        document.getElementById(`comparacao_roda_${i}`).innerText = car.roda;
        document.getElementById(`comparacao_preco_${i}`).innerText = `R$ ${car.preco.toLocaleString('pt-BR')}`;
    }
   
}