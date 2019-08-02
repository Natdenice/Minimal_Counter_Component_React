import React from 'react';
import Counter from './Counter';
import Title from './Title';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Title />
        <Counter />
      </Container>
    </div>
  );
};

export default App;
