c=0;
vid=document.getElementById("vid");
    vid.addEventListener("click",()=>{
        if(c===0)
        {
        vid.play();
        c=1;
        }
        else
        {
            vid.pause();
            c=0;
        }
    })