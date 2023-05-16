function validarDados() {
            
    // usando a posicao no formulario
    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].value.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.elements[0].focus();
        return false;
    };

    // usando o nome no formulario
    if (document.forms.formulario1.elements["idEmail"].value == "" || document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.idEmail.focus();
       return false;
    }

    //usando o nome no formulario  de maneira direta
    if (document.forms.formulario1.elements.idComentario.value == "" || document.forms.formulario1.elements.idComentario.value.length < 20) {
        alert("É necessario preencher o campo COMENTARIO com mais de 20 caracteres!");
        document.getElementById("idComentario").focus();
        return false;
    }

    var opcoes = document.getElementsByName("check");

    if ((!opcoes[0].checked) && (!opcoes[1].checked)){
        alert("Favor selecionar uma opção")
        return false;
    } else if(opcoes[0].checked){
        alert("Volte sempre à está página!")
        return true;
    } else {
        alert("Que bom que você voltou a visitar esta página!")
        return true;
    }

    return true;
}