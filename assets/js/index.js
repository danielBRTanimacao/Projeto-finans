function redirectEmail() {
    let text_register = document.querySelector("input#emailtxt");
    if (text_register.value.length == "") {
        alert("Digite um email valido!");
    } else {
        window.location.assign(
            "https://danielbrtanimacao.github.io/Projeto-finans/userarea.html"
        );
    }
}
