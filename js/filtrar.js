



var campoFiltro = document.querySelector("#filtrar-medicamentos");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var medicamentos = document.querySelectorAll(".prod");

    if (this.value.length > 0) {
        for (var i = 0; i < medicamentos.length; i++) {
            console.log(medicamentos[i])
            var medicamento = medicamentos[i];
            medicamento.classList.add("invisivel");
            
            var nomeMed = medicamento.querySelector(".nome-prod").textContent;

            var filtrar = new RegExp(this.value, "i")

            if (filtrar.test(nomeMed)) {
                medicamento.classList.remove("invisivel")
            } else {
                medicamento.classList.add("invisivel")
            }
        }
    }
    else {
        for (var i = 0; i < medicamentos.length; i++) {
            var medicamento = medicamentos[i];
            medicamento.classList.remove("invisivel");
        }
    }
});