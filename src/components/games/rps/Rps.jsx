import { useState } from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors  } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

const homeLink = [
{name: 'Quit game', href: '/#aboutme'}
]

 const actions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

function randomAction(){
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculateWinner(action1, action2){
  if (action1 === action2){
    return 0;
  } else if (actions[action1] === action2) {
    return -1;
  } else if (actions[action2] === action1) { 
    return 1;
  }

  return null; 
}

function ActionIcon({action, ...props}){
  const icons={
  rock: FaHandRock,
  paper: FaHandPaper,
  scissors: FaHandScissors,
  };

  const Icon = icons[action]
  return (<Icon {...props}/>);
}

function Player({name = "player", score = 0, action="rock"}){
  return(
    <div className="flex flex-col font-myText text-myOcean w-30 h-30">
      <div className="flex flex-row justify-center text-xl mb-6">{`${name}: ${score}`}</div>
      <div className="flex flex-row justify-center items-center">
        {action && <ActionIcon action={action} size={60}/>}
      </div>
    </div>
)};


function ActionButton({action = "rock", onActionSelected}){
  return(
    <button className="justify-items-center w-20 h-20 cursor-pointer hover:text-myBlue active:scale-110 sm:active:scale-100 " onClick={() => onActionSelected(action)}>
     <ActionIcon action={action} size={20}/>
    </button>
  )
}

function ShowWinner({winner = 0}){
  const text = {
    "-1" : "You win!",
    "0" : "It's a tie!",
    "1" : "You lose!",
  }
  return (
    <h2 className="text-xl sm:text-2xl font-myText text-myOcean">{text[winner]}</h2>
  )
}

function Rps() {
  const [playerAction, setPlayerAction] = useState(""); 
  const [computerAction, setComputerAction] = useState(""); 

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);

  const onActionSelected = (selectedAction) => {
    setPlayerAction(selectedAction); 
    const newComputerAction = randomAction();
    setComputerAction(newComputerAction);

    const newWinner=calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner===-1){
      setPlayerScore(playerScore+1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore+1);
    }
 }

  return (
<div className="flex flex-col bg-myOcean">
  <div className="h-screen justify-items-center content-center w-full sm:w-auto bg-myWarm sm:mx-6 sm:pb-20">
    <h1 className="text-2xl sm:text-4xl font-myHeader text-myBlue pb-8 pt-10 sm:pt-8 ">Rock paper siccors</h1>
    <div>
      <div className="flex items-center justify-center pb-4">
        <Player name="player" score={playerScore} action={playerAction}/>          
        <Player name="Computer" score={computerScore} action={computerAction}/>
      </div>
      <div className="pb-8 text-myOcean">
        <ActionButton action="rock" onActionSelected={onActionSelected}/>
        <ActionButton action="paper" onActionSelected={onActionSelected}/>
        <ActionButton action="scissors" onActionSelected={onActionSelected}/>
      </div>
    </div>
    <ShowWinner winner={winner}/>
    <ul className="flex font-bold items-center space-x-8 mt-16">
      {homeLink.map((link) => (
        <li key={link.name}>
          <HashLink
            to={link.href}
            className="px-3 py-2 text-myOcean text-md sm:text-lg font-myText hover:text-myBlue"
            onClick={() => homeLink(false)} 
          >
            {link.name}
          </HashLink>
        </li>
      ))}
     </ul>
  </div>
  
</div>
  
    
  )
}

export default Rps
