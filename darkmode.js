let darkmode = localStorage.getItem('darkmode');

const darkmodetoggle = document.querySelector("#nightmode");


const enabledarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "enabled")
}

const disabledarkmode =() =>{
    document.body.classList.remove("darkmode");

    localStorage.setItem("darkmode",null);
};

if(darkmode ==="enabled"){
  enabledarkmode();
}


darkmodetoggle.addEventListener("click", () =>{
    darkmode = localStorage.getItem("darkmode")
    if(darkmode!== "enabled"){
        enabledarkmode();
    }else{
        disabledarkmode();
    }
   
});