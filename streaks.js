function gen() {
    //setup base variables 
    size = 10 // the size of the outputed image
    name = $("#name").val() // the name inputted

    //obtain a list containing the ascii code for each letter in name
    x = 0
    asciiName = []
    name.split("").forEach(e => {
        asciiName.push(e.charCodeAt(0))
        //genatates a number that is the sum of all the ascii codes
        x += e.charCodeAt(0)
    });

    //length of list
    l = asciiName.length

    //increese the length of x from line 12, and replace trailing 0's.
    x = x *10000 + x * 10000 + x

    //obtain the colour of the pixels by taking the first, middle, and last three numbers in x and using them as the rgb values.
    colour = []
    colour[0] = parseInt(`${x}`.slice(0, 3)) % 256
    colour[1] = parseInt(`${x}`.slice(`${x}`.length / 2, (`${x}`.length / 2)+3)) % 256
    colour[2] = parseInt(`${x}`.slice(6, `${x}`.length)) % 256

    //setup canvas
    ctx.clearRect(0, 0, 10, 10)
    ctx.fillStyle = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`


    //loop through all pixels in the canvas
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            //draw a pixel if the ascii code of the name at the index ((x+y) + offset) % length is divisible by three
            if (asciiName[((x+y) + offset)%l] % 3 == 0) {
                ctx.fillStyle = `rgb(${colour[0]}, ${colour[1]}, ${colour[2]})`
                ctx.fillRect(x, y, 1, 1)
            }else{
                ctx.fillStyle = "white"
                ctx.fillRect(x, y, 1, 1)
            }
    }
    }
    //mirror the image if enabled 
    if(is_mirror) mirror(size)
}

$(document).ready(function() {
    //canvas setup
    updateLive = true
    c = $("#canvas");
    ctx = c[0].getContext("2d");
    offset = 0
    is_mirror = false
    updateLive = true
})

$("#mirror").on("input", function (e) {
    console.log("Mirror Checked");
    is_mirror = e.target.checked
})