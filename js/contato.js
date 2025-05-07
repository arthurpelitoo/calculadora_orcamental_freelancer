function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email); // verifica se é true ou false. Se for true ele entrega o true e contrario tambem.
}

closeModal();

const form = document.getElementById("formId");

function formContatoPreenchido(event) {

    const nome = form.nome.value.trim(); //o value.trim() apaga os espaços vazios antes e depois da linha.
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if(nome == "" && email == "" && mensagem == ""){
        title = "Ocorreu um problema ao enviar formulario!";
        message = "Você tentou entregar o formulario sem enviar as suas informações!";

        openModal();
        event.preventDefault();
        return;
    } else if(nome != "" && email != "" && mensagem != "" && validarEmail(email)){
        title = "Formulario enviado";
        message = "O Formulario foi enviado com sucesso!";
        
        openModal();
    }else{
        if(nome == ""){
            title = "Ocorreu um problema ao enviar formulario!"
            message = "Preencha seu nome."

            openModal();
            event.preventDefault();
            return;
        }

        if(email == ""){
            title = "Ocorreu um problema ao enviar formulario!"
            message = "Preencha seu email."

            openModal();
            event.preventDefault();
            return;
        } else if(!validarEmail(email)){
            title = "Ocorreu um problema ao enviar formulario!"
            message = "O email informado não é válido. Por favor, insira um email no formato correto."

            openModal();
            event.preventDefault();
            return;
        }

        if(mensagem == ""){
            title = "Ocorreu um problema ao enviar formulario!"
            message = "Envie alguma mensagem!"

            openModal();
            event.preventDefault();
            return;
        }
    }
};

form.addEventListener("submit", formContatoPreenchido);


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