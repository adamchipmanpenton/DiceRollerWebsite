(function($) {
    $.fn.rollD20 = function(options) {

        let settings = $.extend({
            background : "grey",
            diceImage :{
                border: "2px solid black",
                borderradius : "20px"
            },
            showDiceNumber: {
                fontsize : "20px",
                fontcolor : "black",
                fontfamily: "Times New Roman"
            },
           diceColor : "black"


        }, options)

        return this.each(function() {
          
            let picNumber = 0
            let myVar = null
            let timer = 0
            let diceImage = $("<img>")
            let background = $("<div></div>");
            let closeButton = $("<img>");
            let showDiceNumber = null
            let diceColor = settings.diceColor
            
            $(this).on("click", function() {
                timer = 0
                show()
                addBackGround()
                addDicePic()
                exitButton()
                myVar= setInterval(showPictures, 50)
            })

            function show(){
                background.show()
                diceImage.show()
                closeButton.show()
            }

            function addBackGround(){
                background.css({
                    "background-color": settings.background,
                    "position": "absolute",
                    "top": "0px",
                    "left": "0px",
                    "text-align": "center",
                    "width": "100%",
                    "height": "100%",
                    "padding-top": "5%",
                    "opacity": "0.5"
                })
                $("body").append(background);
            }

            function addDicePic(){
                diceImage.css({    
                    "position" : "absolute",
                    "top" : "37.5%",
                    "left" : "37.5%",
                    "width": "25%",
                    "border": settings.diceImage.border,
                    "border-radius": settings.diceImage.borderradius
                })
                $("body").append(diceImage);
            }

            function showPictures(){
                timer += 1
                picNumber= Math.floor(Math.random() * 20) + 1 ;
                //picNumber = 20
                console.log(picNumber)
                $(diceImage).attr("src", `pictures/${diceColor}/${picNumber}.jpg`);
                if(timer == 50){
                    clearInterval(myVar)
                    displayNumber(picNumber)
                }
            }

            function displayNumber(picNumber){

            if(picNumber == 1){
                showDiceNumber = $(`<p>&#129324</p>`);
            }else if(picNumber == 20){
                showDiceNumber = $(`<p>&#129321</p>`);
            }else{
                showDiceNumber = $(`<h2>You rolled a ${picNumber}!!</h2>`);
            }
                
                showDiceNumber.css({    
                    "position" : "absolute",
                    "top" : "40%",
                    "left" : "37.5%",
                    "width": "25%",
                    "text-align": "center",
                    "font-size" : settings.showDiceNumber.fontsize,
                    "color" : settings.showDiceNumber.fontcolor,
                    "font-family": settings.showDiceNumber.fontfamily
                })
                $("body").append(showDiceNumber);
            }

            function exitButton(){
                let closeCss = {
                    "cursor": "pointer",
                    "width": "100px",
                    "height": "50px",
                    "position": "absolute",
                    "top": "20px",
                    "right": "20px",
                    "border": "0px",
                    "z-index": "1" 
                }
                closeButton.attr("src", "exitbutton2.png");
                closeButton.css(closeCss);
                $("body").append(closeButton);
            }

            closeButton.on("click", function(){
                background.hide()
                diceImage.hide()
                closeButton.hide()
                showDiceNumber.hide()
            })
        })
    }
}(jQuery))