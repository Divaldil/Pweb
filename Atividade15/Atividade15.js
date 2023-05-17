function jancur(){
    if (document.getElementById("cursos").value == "null") {
        return 0;
    } else
    var input = confirm("Você realmente quer abrir a janela deste curso?");

    if (document.getElementById("cursos").value == "ADS") {
        window.open("JanelaADS.html", "_blank", "width=600, height=300");
    } else if (document.getElementById("cursos").value == "EA") {
        window.open("JanelaEA.html", "_blank", "width=600, height=300");
    } else
        window.open("JanelaFM.html", "_blank", "width=600, height=300");
}