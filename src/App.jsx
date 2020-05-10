import React from 'react';
import Button from './components/Button';
import Block from './components/Block';

function App() {
  return (
    <div className="App">
      <Block>
        <p>Hello World</p>
        <Button size="large" type="primary">Some text</Button>
      </Block>

    </div>
  );
}

export default App;
