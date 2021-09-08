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
  const direction = isOpen ? 'down' : 'right';
  console.log(name, children);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <span onClick={handleClick}>
      <i className="blue folder icon"></i>
      <i className= {`caret ${direction} icon`}></i>
      </span>
      {name}
    <div style={{marginLeft:'17px'}}>
      {isOpen ? children : null}
    </div>

    </div>
};

const File = (props) => {
  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp3: 'headphones',
    jpg: 'file image',
    png: 'file image outline'
  };
  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {props.name}
    </div>
}

export default App;
