/*function navMobile(el) {
    console.log("0");
    var display = document.getElementById(el).style.display;
    console.log(display)
    if (document.querySelector(".cabecalho-menu").style.display == 'none') {
        console.log("1")
        document.querySelector(".cabecalho .cabecalho-imagem").addEventListener("click", function () {
            document.querySelector(".cabecalho-menu").style.display = 'flex';
            console.log("Corno!");
        })
    }else{
        console.log("Exceção!")
    }
}*/


//Por algum motivo que não sei explicar, ele não ta reconhecendo os elementos do CSS e,
//por isso, foi feito o código abaixo, que torna o display none ou flex já dentro
//do próprio código.

window.onload = function(){
    document.querySelector(".cabecalho-imagem").addEventListener("click", function(){
        if (document.querySelector(".cabecalho .cabecalho-menu").style.display == 'flex') {
            document.querySelector(".cabecalho .cabecalho-menu").style.display = 'none'
            document.querySelector(".cabecalho .cabecalho-imagem").style.transitionDuration = '0.5s';
            document.querySelector(".cabecalho .cabecalho-imagem").style.transform = 'rotate(0deg)';
        } else{
            document.querySelector(".cabecalho .cabecalho-menu").style.display = 'flex';
            document.querySelector(".cabecalho .cabecalho-imagem").style.transform = 'rotate(90deg)';
        }
    });
};