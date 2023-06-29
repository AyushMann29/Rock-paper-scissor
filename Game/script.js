let display = document.getElementById('display');
let bot = 0

function start(){
    display.value = ''
    bot = 0
    bot = Math.floor((Math.random()*3)+1);
    document.getElementById('pPaper').style.display = 'block';
    document.getElementById('pStone').style.display = 'block';
    document.getElementById('pScissor').style.display = 'block';   
    document.getElementById('botPaper').style.display = 'block';
    document.getElementById('botScissor').style.display = 'block';
    document.getElementById('botStone').style.display = 'block';
}

function action(number){
    if (number == 1 && bot == 2){
        display.value = 'Bot wins.';
    }
    else if (number == 2 && bot == 3){
        display.value = 'Bot wins';
    }
    else if (number == 3 && bot == 1){
        display.value = 'Bot wins';
    }
    else if (number == bot){
        display.value = 'Tie';
    }
    else{
        display.value = 'Player won';
    }

    if (number == 1){
        document.getElementById('pPaper').style.display = 'none';
        document.getElementById('pStone').style.display = 'none';
    }
    if (number == 2){
        document.getElementById('pPaper').style.display = 'none';
        document.getElementById('pScissor').style.display = 'none';
    }
    if (number == 3){
        document.getElementById('pScissor').style.display = 'none';
        document.getElementById('pStone').style.display = 'none';
    }

    if (bot == 1){
        document.getElementById('botPaper').style.display = 'none';
        document.getElementById('botStone').style.display = 'none';
    }
    if (bot == 2){
        document.getElementById('botPaper').style.display = 'none';
        document.getElementById('botScissor').style.display = 'none';
    }
    if (bot == 3){
        document.getElementById('botScissor').style.display = 'none';
        document.getElementById('botStone').style.display = 'none';
    }
}
