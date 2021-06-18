let si=document.getElementById("si");
si.addEventListener("click",function(e){
    alert("Grasias sabia que aceptarias AMOR Kiss LOVE");
});
let no=document.getElementById("no");
no.addEventListener("mousemove",function(e){
    let x = Math.round(Math.random()*95);
    let y = Math.round(Math.random()*95);
    no.style.left=x+"%";
    no.style.top=y+"%";
});