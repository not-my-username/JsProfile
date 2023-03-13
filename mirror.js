function mirror() {

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    for (let x = 0; x<size+1;x++){
        for (let y = 0; y<size;y++){
            for(let z = 0; z+4<size;z++){
                d = ctx.getImageData(z-1, x-1, 1, 1).dataac 
                if(d[0]+d[1]+d[2] == 0) ctx.fillStyle = "rgb(255, 255, 255)"
                else ctx.fillStyle =  `rgb(${d[0]}, ${d[1]}, ${d[2]})`
                ctx.fillRect(size-z, x-1, 1, 1)
            }
        }
    }
}