import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Card from './components/Card';


function App() {

  const[food] = useState([{
    "id": uuidv4(),
    "type": "อาหารคาว",
    "name": "ข้าวผัด",
    "img": "http://food.mthai.com/app/uploads/2015/03/1324956564.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in feugiat nunc. Mauris volutpat orci id posuere commodo. Aliquam ullamcorper lectus ac condimentum congue. Integer mattis risus vel aliquam faucibus. Nunc eu venenatis justo. Phasellus non ultricies sem, sed aliquet dui. Sed arcu tellus, rutrum sit amet convallis eget, auctor."

  }
])

  return (
    <div className="App">
      <div className="App-header">
       <h2>โหวตอาหาร</h2>
      </div>

      <div className='menu-container'>
        <Card ListMenu={food}/>

      </div>
    </div>
  );
}

export default App;
