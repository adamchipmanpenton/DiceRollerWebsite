"use strict";
var player1Total = 0
var player2Total = 0

const getRandomNumber =function(max){
    let rand = null;
    rand = Math.random();
    rand = Math.floor(rand * max);
    rand = rand + 1;
    return rand;
}

const rollD8 = () => {
    const amountD8 = $("#amountd8").val();
    let i = 0
    const amountPlayer1d8 = []
    const amountPlayer2d8 = []
    for(;i < amountD8;){

        const player1D8 = getRandomNumber(8)
        amountPlayer1d8.push(player1D8)
        player1Total += player1D8
        const player2D8 = getRandomNumber(8)
        amountPlayer2d8.push(player2D8)
        player2Total += player2D8
        i++
    }
    $("#player1d8").val(amountPlayer1d8);
    $("#player2d8").val(amountPlayer2d8);
}


const rollD6 = () => {
    const player1D6 = getRandomNumber(6)
    $("#player1d6").val(player1D6);
    player1Total += player1D6
    const player2D6 = getRandomNumber(6)
    $("#player2d6").val(player2D6);
    player2Total += player2D6
}

const rollD4 = () =>{
    const player1D4 = getRandomNumber(4)
    $("#player1d4").val(player1D4);
    player1Total += player1D4
    const player2D4 = getRandomNumber(4)
    $("#player2d4").val(player2D4);
    player2Total += player2D4
}

$( document ).ready(function(){
    $('#roll').click( () =>{
        rollD8()
        rollD6()
        rollD4()
        $("#player1total").val(player1Total)
        $("#player2total").val(player2Total)
    })
});