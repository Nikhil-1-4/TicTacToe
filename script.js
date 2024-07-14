let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector("#newgame");
let msgcon=document.querySelector(".msg");
let msg=document.querySelector("#message")
let turnO=true;
const arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let cnt=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box Was Clicked");
        if(turnO){
           box.innerText="O";
           turnO=false;  
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        cnt++;
        checkWinner(cnt);
        if(cnt===9){
            showTie();
        }
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
};
const showTie=()=>{
    msg.innerText="Match Tied"
    msgcon.classList.remove("hide");
};

const checkWinner=(i)=>{
    for(let pattern of arr){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                console.log("Winner",p1)
                disableBoxes();
                showWinner(p1);
            }
        }
    }
};
const resetGame=()=>{
    turnO=true;
    cnt=0;
    enableBoxes();
    msgcon.classList.add("hide");
};
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
