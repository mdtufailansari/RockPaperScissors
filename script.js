let User_Score = 0;
let Computer_Score = 0;

let itam= document.querySelectorAll(".item");
let msg = document.querySelector(".play");
let User = document.querySelector("#userscore");
let Comp = document.querySelector("#compscore");

const genCompChoice= ()=>{
    const comp_Option = ["rock","paper","Scissors"];
    const randidx = Math.floor(Math.random() *3);
    return comp_Option[randidx];   
}
const DrawGame =()=>{
    console.log(" Game draw.");
    msg.innerText = "Game Draw,Play again your move";
    msg.style.backgroundColor = "rgb(243, 110, 16)";
}
const showWinner = (userWin,User_choices,comp_Choice) =>{
 if(userWin){
     User_Score++;
     User.innerText = User_Score;
    msg.innerText = `You Win! Your ${User_choices} beats Computer ${comp_Choice}`;
    msg.style.backgroundColor = "green";
 }
 else{
     Computer_Score++;
     Comp.innerText = Computer_Score;
    msg.innerText = `You lost. Computer ${comp_Choice} beats Your ${User_choices}`;
    msg.style.backgroundColor = "red";

 }
};

const PlayGame = (User_choices)=>{
    console.log("user choice =",User_choices);
    const comp_Choice = genCompChoice();
    console.log("computer choice =",comp_Choice);
    if(User_choices===comp_Choice){
        DrawGame();
     } else{
        let userWin = true;
        if(User_choices === "rock"){
          userWin =  comp_Choice === "paper" ? false:true;
        }else if(User_choices === "paper"){
           userWin= comp_Choice === "Scissors" ? false:true;
        }else{
            userWin = comp_Choice === "rock" ? false:true;
        }
        showWinner(userWin,User_choices,comp_Choice);
     }
    
};
itam.forEach( (items)=>{
    items.addEventListener("click", ()=>{
     const User_choices = items.getAttribute("id");
    
       PlayGame(User_choices);
    });
}
);  