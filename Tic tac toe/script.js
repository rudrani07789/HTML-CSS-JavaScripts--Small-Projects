console.log('Welcome to Tic Tac Toe game');
let music= new Audio("music.mp3");
let turnmusic = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let gamedone=false;
let turn="X";
let line = document.querySelector('.line');

//Function to check turn
const changeTurn=()=>{
    return turn === "X"?"O":"X"
}

//Function to check for win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
 let wins=[[0,1,2,0,5,0],
           [3,4,5,0,15,0 ],
           [6,7,8,0,25,0 ],
           [0,3,6,5,0,90 ],
           [1,4,7,15,0,90 ],
           [2,5,8,25,0,90],
           [0,4,8,2,0,48],
           [2,4,6, 100,100,135]
]
wins.forEach(e=>{
     if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "" ) ) {
         document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
         gamedone=true
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="250px";
         line.style.width = "100%";   
         line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
     }
})
}

//Game logic
//music.play()
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            
            turn=changeTurn();
            turnmusic.play();
            checkWin();
            if(!gamedone){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
            
            
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    })
    turn='X';
    gamedone=false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    line.style.width = "0px";
    line.style.transform = "";
            
})
