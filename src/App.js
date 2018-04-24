import React, { Component } from 'react';
import Blob from './Blob'

class App extends Component {
  render() {
		const blobs = [];
		for (var i=0; i < 20; i++) {
         blobs.push({id: i})
    }
		
    return (
      <div className="App">
				{blobs.map(blob => <Blob key={blob.id} />)}
      </div>
    );
  }
}

export default App;
