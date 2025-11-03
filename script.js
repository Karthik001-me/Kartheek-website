let x=prompt('Enter your Name');
    //let z=x.trim();
    let element=document.getElementById('user');
    element.textContent=`Welcome ${x}`;
const Score=JSON.parse(localStorage.getItem('Score')) || {
  wins:0,
  losses:0,
  ties:0,
};
 updateScore();
function playgame(playerMove){
  const computer=botMove();
  let result;
  if(playerMove==='rock'){
      if(computer==='rock'){
        result='Tie';
      }else if(computer==='paper'){
        result='You lose';
      }else if(computer==='scissors'){
        result='You win';
      }
     }else if(playerMove==='scissors'){
      if(computer==='rock'){
        result='You lose';
      }else if(computer==='paper'){
        result='You win';
      }else if(computer==='scissors'){
        result='Tie';
      }
     }else if(playerMove==='paper'){
       if(computer==='rock'){
         result='you win';
      }else if(computer==='paper'){
        result='Tie';
      }else if(computer==='scissors'){
        result='You lose';
        
      }
     }
  if(result==='You win'){
    Score.wins+=1;
    document.getElementById('result').innerHTML=`<img  width="130px" src="Winner.gif">`;
  }else if(result==='You lose'){
    document.getElementById('result').innerHTML=`<img  width="130px" src="Lose.gif">`;
    Score.losses+=1;
  }else if(result==='Tie'){
    document.getElementById('result').innerHTML=`<img  width="130px" src="Tie.gif">`;
    Score.ties+=1;
  }
  localStorage.setItem('Score',JSON.stringify(Score));
  updateScore();
  
  document.getElementById('moves').innerHTML=`${x} Choose <img class="move-img" src="/storage/emulated/0/Download/${playerMove}-emoji.png">  - <img class="move-img" src="/storage/emulated/0/Download/${computer}-emoji.png">  Computer`;
  }
 function updateScore(){
   document.getElementById('score').textContent=`Wins: ${Score.wins} Losses: ${Score.losses} Ties: ${Score.ties}`;
 }
  function botMove(){
        let ranNumber=Math.random();
    if(ranNumber>0 && ranNumber<1/3){
      computer='rock';
    }else if(ranNumber>1/3 && ranNumber<2/3){
      computer='paper';
    }else if(ranNumber>2/3 && ranNumber<1){
      computer='scissors';
    }
      return computer;
  }