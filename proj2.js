let slider = document.querySelector(".slider");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let images = document.querySelectorAll(".image");


    let slideNum = 1;

    let buttom=document.querySelector(".buttom");
    for(let i=0;i<images.length;i++){
        let div=document.createElement("div");
        div.className= "button";
        buttom.appendChild(div);
    }
   
    let buttons=document.querySelectorAll(".button");
    buttons[0].style.backgroundColor="white";
    
    const resetBg=()=>{
        buttons.forEach((button)=>{
            button.style.backgroundColor="transparent";
        })
    }
    buttons.forEach((button,i)=>{
        button.addEventListener("click",()=>{
            resetBg();
            slider.style.transform=`translateX(-${i*800}px)`;
            slideNum=i+1;
            button.style.backgroundColor="white";
        })
    })

const changecolor=()=>{
resetBg();
buttons[slideNum-1].style.backgroundColor="white";
}




    right.addEventListener("click", () => {
        if (slideNum < images.length) {
            slider.style.transform = `translateX(-${slideNum * 800}px)`;
            slideNum++;
        } else {
            slider.style.transform = `translateX(-0px)`;
            slideNum = 1;
        }
        changecolor();
    });

    left.addEventListener("click", () => {
        if (slideNum > 1) {
            slider.style.transform = `translateX(-${(slideNum - 2) * 800}px)`;
            slideNum--;
        } else {
            slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
            slideNum = images.length;
        }
        changecolor();
        
    });

  