import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    max-height: 450px;
    margin: 3em auto;
    padding 1em;
    align-items: center;
`;

const Description = styled.div`
    text-align: center;     
`

const Big = styled.span`
    font-weight: 800;
    font-size: 30px;
`

const App = () => 
    <Container>
        <Description>
            <Big>Under Construction</Big>
        </Description>
    </Container>

export default App;
