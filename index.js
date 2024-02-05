boxes = document.querySelectorAll(".box");
rst= document.querySelector("#reset");
winDiv= document.querySelector("#winDec");
newgame = document.querySelector("#new");
hide = document.querySelector(".hide");
player = document.querySelector(".player");
let playerO = true;

let winnerlist=[
    [0,1,2],    
    [3,4,5],    
    [6,7,8],    
    [0,3,6],    
    [1,4,7],    
    [2,5,8],    
    [0,4,8],    
    [2,4,6],    
];
let count = 0;
player.innerText="Player O:"
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(playerO===true)
        {
            box.innerText="O";
            playerO=false;
            player.innerText="Player X:";
        }
        else{
            box.innerText="X";
            playerO=true;
            player.innerText="Player O:";
        }
        count++;
        if(count===9)
        {
          printTied();
        }
        box.disabled=true;
        checkWin();
        newgame.addEventListener("click", clear);
        rst.addEventListener("click", clear);
    });
});

let checkWin = ()=>{
    
    for (pattern of winnerlist)
    {
        let val1 = boxes[pattern[0]].innerText;   
        let val2 = boxes[pattern[1]].innerText;   
        let val3 = boxes[pattern[2]].innerText;   
        if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3)
            {
                printwinner(val1);
                disableAll();
            }
        }
    }
}

let disableAll = ()=>{
    for(box of boxes)
    {
        box.disabled= true;
    }
}
let printwinner= (val1)=>{
    winDiv.innerText=`The winner is \n Player ${val1}!!`
    winDiv.classList.remove("hide");
    newgame.classList.remove("hide");
    player.classList.add("hide");
}
let printTied= ()=>{
    winDiv.innerText=`GAME TIED!!`
    winDiv.classList.remove("hide");
    newgame.classList.remove("hide");
    player.classList.add("hide");
}

let clear = ()=>
{
    for(box of boxes)
    {
        box.disabled= false;
        box.innerText="";
    }
    playerO = true;
    winDiv.classList.add("hide");
    newgame.classList.add("hide");
    player.classList.remove("hide");
    count = 0;
}