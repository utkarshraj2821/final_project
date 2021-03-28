pic=document.getElementById("cp")
pic.addEventListener("click",()=>{
    modal=document.getElementsByClassName("modal");
    // console.log(modal[0]);
    modal[0].classList.remove("close");
    modal[0].classList.add("open");
})
cut=document.getElementById("close")
console.log(cut);
cut.addEventListener("click",()=>{
    modal=document.getElementsByClassName("modal");
    // console.log(modal[0]);
    modal[0].classList.remove("open");
    modal[0].classList.add("close");
})