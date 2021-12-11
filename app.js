var toggle=false;

document.body.querySelector(".menuIcon").addEventListener("click", function(){

 toggle=!toggle;

    if(toggle){
        document.querySelector(".Menu").style.right="0";
    }else{
        document.querySelector(".Menu").style.right="-150px";
    }
})