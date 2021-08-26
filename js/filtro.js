//selecionando todos os elementos
const filtroItem = document.querySelector(".itens");
const filtroImg = document.querySelectorAll(".image");


window.onload = () =>{ //uma vez carregado
    filtroItem.onclick = (selectedItem) =>{ //quando clicar no filtroitem
        if(selectedItem.target.classList.contains("item")){
            filtroItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filtroNome = selectedItem.target.getAttribute("data-name");
            filtroImg.forEach((image)=>{
                 let filtroImagens = image.getAttribute("data-name");
                
                if((filtroImagens == filtroNome) || filtroNome == "todos"){
                    image.classList.add("show");
                }else{
                  image.classList.add("hide");
                  image.classList.remove("show");  
                }
            });
        }
    }
    for(let index =0; index<filtroImg.length; index++){
         filtroImg[index].setAttribute("onclick", "preview1(this)");
    }
}


//declarando as variáveis
const previewBox = document.querySelector(".preview"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".titulo-preview p"),
closeIcon = previewBox.querySelector(".fechar"),
closeModal = previewBox.querySelector(".modal"),
modal = document.querySelector(".modal"),
ingredientes = previewBox.querySelector(".ingredientes-descricao p");



//fullscreen preview função

function preview1(element){
    let selectedPrevImg = element.querySelector("img").src;
    previewImg.src = selectedPrevImg;
    let selectedImgCategory = element.querySelector(".image h1").textContent;
    categoryName.textContent = selectedImgCategory;
    let selectedIngredientes = element.querySelector(".image p").textContent;
    ingredientes.textContent = selectedIngredientes;
    previewBox.classList.add("show"); //mostrar preview
    modal.classList.add("show"); //mostrar preview
    closeIcon.onclick = () =>{
        previewBox.classList.remove("show");
        modal.classList.remove("show");
    }
}













































