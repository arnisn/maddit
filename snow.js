window.onload = function(){
    var canvas = document.getElementById("Sky");
    var ctx = canvas.getContext("2d");
    
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    
    var mf = 100;
    var flakes = [];
    
    for(var i = 0; i < mf; i++ )
        {
            flakes.push({
                x: Math.random()*W,
                y:  Math.random()*H,
                r: Math.random()*5+2,
                d: Math.random()+ 1
                
            })
        }
    function drawflakes()
     {
         ctx.clearRect(0, 0, W, H);
         ctx.fillStyle = "white";
         for(var i = 0; i < mf; i++)
             {
                 var f = flakes[i];
                 ctx.moveTo(f.x, f.y);
                 ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
             }
         ctx.fill():
         moveflakes();
     }
}
