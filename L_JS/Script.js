const Canvas = document.getElementById("Canvas");
const ctx = Canvas.getContext('2d');
Canvas.width = 2000;
Canvas.height = 1365;

window.addEventListener("click", ()=>{
    Color ();
})

function Color (){
    for(let x = 0; x < 100; x++){
        for(let y = 0; y < 80; y++){
            if(y%2){
                CrHexagon(x*20,y*17)
            } else {
                CrHexagon(x*20+10,y*17)
            }
        }
    }
}

function CrHexagon (x,y) {
    ctx.beginPath();ctx.moveTo(x+10,y+0);ctx.lineTo(x+20,y+6);ctx.lineTo(x+20,y+17);ctx.lineTo(x+10,y+23);ctx.lineTo(x+0,y+17);ctx.lineTo(x+0,y+6);
    ctx.fillStyle = 'orange';ctx.fill();
}