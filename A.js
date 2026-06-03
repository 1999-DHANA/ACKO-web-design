let btn=document.getElementById("btn")
btn.onclick=function(){
    let img=document.getElementById("img")
    let display=img.classList.toggle("true")
    if(display){
        img.style.display="none"
    }else{
        img.style.display="block"
    }
}