import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop" >
        <Folder name="Music">
          <File name="great.mp3"/>
          <File name="dj.mp3"/>
        </Folder>
        <File name="dogs.jpg"/>
        <File name="cats.png"/> 
      </Folder>
      <Folder name="Applications"/>

    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen]= useState(true);
  const { name, children} = props;
  console.log(name, children);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <span onClick={handleClick}>{name}</span>
    <div style={{marginLeft:'17px'}}>
      {isOpen ? children : null}
    </div>

    </div>
};

const File = (props) => {
  return <div>{props.name}</div>
}

export default App;
