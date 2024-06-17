import "./Header.css";

import reactIcon from "../../assets/react-core-concepts.png";

const firstWord = ['Fundamental', 'Core', 'Crucial'];

function genRandomIndex(max){
  return Math.floor(Math.random() * (max+1));
}

export default function Header(){
  const firstW = firstWord[genRandomIndex(2)];
  return (
    <header>
        <img src={reactIcon} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {firstW} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}