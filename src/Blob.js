import React, { Component } from 'react';
import './App.css';

class Blob extends Component {               
	
  render() {
		const randColor = Math.floor(Math.random()*8 + 1)
		const randSpacingHor = Math.floor(Math.random()*1980 + 1)
		const randSpacingVert = Math.floor(Math.random()*30 + 1)
		const randDimensions = Math.floor(Math.random()*50 + 50)
    return (
      <div 
				className = {`Blob color-${randColor}`}
				style = {{
					marginLeft: randSpacingHor + 'px',
					marginTop: randSpacingVert + 'px',
					height: randDimensions + 'px',
					width: randDimensions + 'px',
					opacity: (randDimensions/100)}}></div>
    );
  }
}

export default Blob;