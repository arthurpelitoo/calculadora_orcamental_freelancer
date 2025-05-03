closeModal();

let buttonCalcProjetos = document.getElementById("btnCalcular");
let projetosInput = document.getElementById("qtdProjetos");
let pagamentoPorProjetoInput = document.getElementById("valorMedioPorProjetos");
let calculo = 0;
let title, message;

function addOrçamentoCalculado(){

    let orcamentoCalculado = document.getElementById("valorFinal");

    if(projetosInput.value != "" && pagamentoPorProjetoInput.value != ""){
        
        if( (!isNaN(Number(projetosInput.value))) && (!isNaN(Number(pagamentoPorProjetoInput.value))) ){
            calculo = projetosInput.value * pagamentoPorProjetoInput.value;

            orcamentoCalculado.innerHTML =
            `
            <h1 class="valorFinal" id="valorFinal">R$ ${calculo.toFixed(2)}</h1>
            `;

        }else{

            title = "Houve um erro com o calculo";
            message = "Não coloque texto dentro dos valores!";
            console.log(2);

            openModal();

        }

    } else{

        title = "Houve um erro com o calculo";
        message = "Não coloque valores vazios dentro dos valores!";
        console.log(1);

        openModal();
    }

}

buttonCalcProjetos.addEventListener("click", addOrçamentoCalculado);

function openModal(){

    document.getElementById("modal-container").innerHTML =
            `
            <div class="modal">
                <div class="modalContainerTitle">
                    <h3 class="modalTitle">${title}</h3>
                </div>
                <div class="modalContainerMessage">
                    <p class="modalMessage">${message}</p>
                </div>
                <div class="modalButton">
                    <button onclick="closeModal()">Beleza!</button>
                </div>
            </div>
            `;

    document.getElementById("modal-container").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "flex";
    document.getElementById("modal-container").style.opacity = "1";
    document.getElementById("modal-overlay").style.opacity = "1";

}

function closeModal(){
    document.getElementById("modal-container").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.getElementById("modal-container").style.opacity = "0";
    document.getElementById("modal-overlay").style.opacity = "0";
}