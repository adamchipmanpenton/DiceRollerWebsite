(function($) {
    $.fn.rollD20 = function(options) {

        let settings = $.extend({
            background : "grey",
            diceImage :{
                border: "2px solid black",
                borderradius : "20px"
            },
            showDiceNumber: {
                fontsize : "100%",
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


            let pictures = []
        
            const images = [
                `pictures/${diceColor}/1.jpg`,
                `pictures/${diceColor}/2.jpg`,
                `pictures/${diceColor}/3.jpg`,
                `pictures/${diceColor}/4.jpg`,
                `pictures/${diceColor}/5.jpg`,
                `pictures/${diceColor}/6.jpg`,
                `pictures/${diceColor}/7.jpg`,
                `pictures/${diceColor}/8.jpg`,
                `pictures/${diceColor}/9.jpg`,
                `pictures/${diceColor}/10.jpg`,
                `pictures/${diceColor}/11.jpg`,
                `pictures/${diceColor}/12.jpg`,
                `pictures/${diceColor}/13.jpg`,
                `pictures/${diceColor}/14.jpg`,
                `pictures/${diceColor}/15.jpg`,
                `pictures/${diceColor}/16.jpg`,
                `pictures/${diceColor}/17.jpg`,
                `pictures/${diceColor}/18.jpg`,
                `pictures/${diceColor}/19.jpg`,
                `pictures/${diceColor}/20.jpg`,
            
            ]
            
            
            $(this).on("click", function() {
                preload(images)

                console.log(pictures)
                timer = 0
                show()
                addBackGround()
                addDicePic()
                exitButton()
                myVar= setInterval(showPictures, 50)
            })

            function preload(images) {
                $(images).each(function () {
                    $('<img />').attr('src',this).appendTo('body').css('display','none');
                });
            }

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
                console.log(picNumber)
                $(diceImage).attr("src", images[picNumber-1]);
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