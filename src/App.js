import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Title>Terraforming Mars</Title>
    </Container>
  );
}

export default App;
