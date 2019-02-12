var boxes = [
    'https://cdn.discordapp.com/attachments/393481058202419211/538071115038326826/final_boss_fucker.png',
    'https://cdn.discordapp.com/attachments/393481058202419211/538071499513397253/tumblr_oha304kxd91ukp9i1o1_1280.jpg',
    'https://cdn.discordapp.com/attachments/393481058202419211/538093715110232084/unknown.png'
]

function render(c){
    for(var i in c){
        console.log(c[i])
        var divthemainoneithink = document.createElement("div")
        divthemainoneithink.setAttribute("class", "card")

        var myimageithink = document.createElement("img")
        myimageithink.setAttribute("src", c[i])

        var mylinkithink = document.createElement("a")
        mylinkithink.setAttribute("href", c[i])
        mylinkithink.innerHTML = "Full image"

        var div3thefooteroneyouknow = document.createElement("div")
        div3thefooteroneyouknow.setAttribute("class", "footer")
        div3thefooteroneyouknow.appendChild(mylinkithink)

        var div2theavataroneyouknow = document.createElement("div")
        div2theavataroneyouknow.setAttribute("class", "avatar")
        div2theavataroneyouknow.appendChild(myimageithink)

        divthemainoneithink.appendChild(div2theavataroneyouknow)
        divthemainoneithink.appendChild(div3thefooteroneyouknow)
        
        document.getElementById("h").appendChild(divthemainoneithink)
    }
}

window.onload = function(){
    render(boxes)
}