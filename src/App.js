import './App.css';
import Card from 'react-bootstrap/Card';
import Name from './Name';
import Price from './Price';
import Description from './Decription';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from './product';
import React from 'react';
import Image from './Image';
function App() {
  const firstName="ferdaoues"
  return (
    <div className="App">
      <h1>{firstName?`Hello,${firstName}`:`Hello there`}</h1>
      <Card style={{ width: '18rem' }}>
      <Card.Img src={product.image}/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
         <Description/>
        </Card.Text>
        <Price/>
      </Card.Body>
    </Card>
      
    </div>
  
  );
}

export default App;
