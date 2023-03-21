offset = 0
function gen() {
    size = 10
    name = $("#name").val()
    x = 0
    asciiName = []
    name.split("").forEach(e => {
        asciiName.push(e.charCodeAt(0))
        x += e.charCodeAt(0)
    });
    
    l = asciiName.length

    x = x *10000 + x * 10000 + x

    colour = []
    colour[0] = parseInt(`${x}`.slice(0, 3)) % 256
    colour[1] = parseInt(`${x}`.slice(`${x}`.length / 2, (`${x}`.length / 2)+3)) % 256
    colour[2] = parseInt(`${x}`.slice(6, `${x}`.length)) % 256


    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 10, 10)
    ctx.fillStyle = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`

    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            if (asciiName[((x+y) + offset)%l] % 3 == 0) {
                ctx.fillStyle = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`
                ctx.fillRect(x, y, 1, 1)
            }else{
                ctx.fillStyle = "white"
                ctx.fillRect(x, y, 1, 1)
            }
    }
    }
    console.log($("#mirrorButton").is(':checked'));
    if($("#mirrorButton").is(':checked')) mirror()
}