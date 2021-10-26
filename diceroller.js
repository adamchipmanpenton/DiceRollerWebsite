"use strict";
var player1Total = 0
var player2Total = 0
const showPlayer1Dice = []
const showPlayer2Dice = []

const getRandomNumber =function(max){
    let rand = null;
    rand = Math.random();
    rand = Math.floor(rand * max);
    rand = rand + 1;
    return rand;
}

const rollD10 = () =>{
    const p1amountD10 = $("#p1amountd10").val();
    const p2amountD10 = $("#p2amountd10").val();
    var i=0
    var j=0
    
    for(;i < p1amountD10;){
        const player1D10 = getRandomNumber(10)
        showPlayer1Dice.push(player1D10)
        player1Total += player1D10
        i++
    }
    for(;j < p2amountD10;){  
        const player2D10 = getRandomNumber(10)
        showPlayer2Dice.push(player2D10)
        player2Total += player2D10
        j++
    }
}

const rollD8 = () => {
    const p1amountD8 = $("#p1amountd8").val();
    const p2amountD8 = $("#p2amountd8").val();
    var i=0
    var j=0
    
    for(;i < p1amountD8;){
        const player1D8 = getRandomNumber(8)
        showPlayer1Dice.push(player1D8)
        player1Total += player1D8
        i++
    }
    for(;j < p2amountD8;){
        const player2D8 = getRandomNumber(8)
        showPlayer2Dice.push(player2D8)
        player2Total += player2D8
        j++
    }
}

const rollD6 = () => {
    const p1amountD6 = $("#p1amountd6").val();
    const p2amountD6 = $("#p2amountd6").val();
    var i=0
    var j=0
    
    for(;i < p1amountD6;){
        const player1D6 = getRandomNumber(6)
        showPlayer1Dice.push(player1D6)
        player1Total += player1D6
        i++
    }
    for(;j < p2amountD6;){
        const player2D6 = getRandomNumber(6)
        showPlayer2Dice.push(player2D6)
        player2Total += player2D6
        j++
    }
}

const rollD4 = () =>{
    const p1amountD4 = $("#p1amountd4").val();
    const p2amountD4 = $("#p2amountd4").val();
    var i=0
    var j=0
    
    for(;i < p1amountD4;){
        const player1D4 = getRandomNumber(4)
        showPlayer1Dice.push(player1D4)
        player1Total += player1D4
        i++
    }
    for(;j < p2amountD4;){
        const player2D4 = getRandomNumber(4)
        showPlayer2Dice.push(player2D4)
        player2Total += player2D4
        j++
    }
}

const showTotals = () =>{

    const p1Modifier = parseFloat($("#p1modifier").val())
    const p2Modifier = parseFloat($("#p2modifier").val())
    player1Total = p1Modifier + player1Total
    player2Total = p2Modifier + player2Total


    $("#showp1dice").val(showPlayer1Dice);
    $("#showp2dice").val(showPlayer2Dice);
    $("#player1total").val(player1Total)
    $("#player2total").val(player2Total)
}

const resetRolls = () =>{
    player1Total = 0
    player2Total = 0
    showPlayer1Dice.length = 0
    showPlayer2Dice.length = 0

    $("#showp1dice").val(showPlayer1Dice)
    $("#showp2dice").val(showPlayer2Dice)
    $("#player1total").val(player1Total)
    $("#player2total").val(player2Total)
    $("#p1amountd10").val(0)
    $("#p2amountd10").val(0)
    $("#p1amountd8").val(0)
    $("#p2amountd8").val(0)
    $("#p1amountd6").val(0)
    $("#p2amountd6").val(0)
    $("#p1amountd4").val(0)
    $("#p2amountd4").val(0)
    $("#p1modifier").val(0)
    $("#p2modifier").val(0)
}

$( document ).ready(function(){
    resetRolls()

    var roll = true
    $('#roll').click( () =>{
        
        if (roll == true){
        
            rollD10()
            rollD8()
            rollD6()
            rollD4()
            showTotals()
            $("#roll").val("Reset")
            roll = false
        }else if(roll == false){
            resetRolls()
            $("#roll").val("Roll")
            roll = true

        }

    })
});