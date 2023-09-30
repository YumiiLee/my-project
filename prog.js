function toggleMode() {
   const html = document.documentElement 
    /*document é referente ao 
    documento criado no navegador
    e documentElement é o documento HTML. O pontinho
    serve para acessar as propriedades*/
html.classList.toggle('light')

const image = document.querySelector("#profile img")

if(html.classList.contains('light')) {
/*if é uma condição, se a solicitação for verdadeira, 
o a informação será aplicada no código*/
    image.setAttribute('src', './assets/avatarmercialigthmode2.png')

    //setAttriibute serve para adicionar, ajustar um atributo.

} else {

    image.setAttribute('src', './assets/Avatar.png')
    //caso não tenha o ligth, manter modo escuro.
/*else é uma condição caso não exista a solicitação no código*/

}

}

//pegar a tag img
//se tiver ligthmode add img light
//substituir a imagem

