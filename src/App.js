import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import MyPicture from './MyPicture.jpg';
import product from './product';

<img src={product.image} alt={product.name} style={{ width: '150px' }} />



const firstName = "Taha";

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card style={{ width: '18rem', padding: '20px', textAlign: 'center' }}>
        <Image />
        <Name />
        <Price />
        <Description />
      </Card>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3>
          Hello, {firstName ? firstName : "there"}!
        </h3>
        {firstName && (
          <img src={MyPicture} alt="My pic" style={{ marginTop: '10px', width: '100px', borderRadius: '50%' }} />
        )}

      </div>
    </div>
  );
}

export default App;
