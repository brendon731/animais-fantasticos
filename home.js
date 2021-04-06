let faq_options = document.querySelectorAll("dt");
let miniaturas = document.querySelectorAll(".miniaturas img");
let image = document.querySelectorAll(".image ul")[0]
let img_grande = document.querySelectorAll(".image ul li")
let container_scroll = document.querySelectorAll("#img-scroll img")
let info_animais = document.querySelectorAll(".informaçoes-animais")

let map = document.querySelectorAll(".map img")[0]
let map_info = document.querySelectorAll(".map-info")[0]

let ul_nav = document.querySelectorAll(".ul-nav")[0]
let menu_button = document.querySelectorAll(".menu_button")[0]

let clicked = document.querySelectorAll(".ul-nav > li a")
let href, section, topo;

let animais = document.querySelectorAll(".animais-fantasticos")[0]

let close_modal = document.querySelectorAll(".close_modal")[0]

function closeModal(){
    document.querySelector("#modal").classList.toggle("actived")

}
close_modal.onclick = e=>{
 closeModal()
}
clicked.forEach(e=>{
    e.onclick = a =>{
        a.preventDefault()
        href = e.getAttribute("href")
        if(!!href){
            if(href === "#modal"){
                closeModal()
            }else{
                section = document.querySelector(href)
                topo = section.getBoundingClientRect().top
                window.scrollTo(0,topo )
            }
    }
}})

menu_button.onclick = e =>{
    ul_nav.classList.toggle("disable")
}


map.onmousemove = e=>{
    map_info.style.top = `${e.pageY+15}px`;
    map_info.style.left = `${e.pageX+10}px`;
    console.log(e.pageX)
}
map.onmouseout = e =>{
    map_info.toggleAttribute("hidden")
}

map.onmouseenter = e =>{
    map_info.toggleAttribute("hidden")
}
window.onmouseenter = e =>{
    map_info.style.top = `${200}px`;
    map_info.style.left = `${200}px`;
    console.log(e)
      
}

faq_options.forEach(e=>{
    e.onclick = i =>{
     e.classList.toggle("fechado")
     console.log(e.classList)
    }
})

let atual = 0
let scroll_position
let active = 0

miniaturas[active].style.opacity = "1"
img_grande[active].style.opacity = "1"

miniaturas.forEach((img, position)=>{
    img.onclick = a =>{
        
        
            scroll_position = (img_grande[0].clientWidth * position) 
       
        image.style.transform = `translatex(${-scroll_position}px)`
        if (active !== position){

            img_grande[active].classList.remove("active")
            img_grande[position].classList.add("active")
            
            miniaturas[active].classList.remove("active")
            miniaturas[position].classList.add("active")
            
            miniaturas[position].style.opacity = "1"
            miniaturas[active].style.opacity = ".5"
    
            img_grande[position].style.opacity = "1"
            img_grande[active].style.opacity = ".5"
    
            active = position
        }
    }
})
let teste
let anterior = 0
container_scroll.forEach( (img, position)=>{
    img.onclick = e =>{
        info_animais[anterior].classList.remove("show")
        info_animais[position].classList.add("show")
        teste = document.querySelectorAll(".show")[0].clientHeight
        
        if(teste<400){
            
            animais.style.height = `${510}px`
        }else{
            animais.style.height = `${teste+130}px`

        }
        anterior = position
    }
})

function myFunction() {
    teste = document.querySelectorAll(".show")[0].clientHeight
        
        if(teste<400){
            
            animais.style.height = `${510}px`
        }else{
            animais.style.height = `${teste+130}px`

        }
   
  }


