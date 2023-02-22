import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ListMenu from './components/ListMenu';



function App() {

  const foodAll = [{
    "type": "อาหารหวาน",
    "name": "ไดฟูกุ",
    "img": "https://chillchilljapan.com/wp-content/uploads/2021/08/pixta_37850788_M.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in feugiat nunc. Mauris volutpat orci id posuere commodo. Aliquam ullamcorper lectus ac condimentum congue. Integer mattis risus vel aliquam faucibus. Nunc eu venenatis justo. Phasellus non ultricies sem, sed aliquet dui. Sed arcu tellus, rutrum sit amet convallis eget, auctor."
  
   }, {
    "type": "อาหารหวาน",
    "name": "ดังโงะ",
    "img": "https://chillchilljapan.com/wp-content/uploads/2021/08/pixta_37895415_M.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  }, {
    "type": "เครื่องดื่ม",
    "name": "ชานมไข่มุก",
    "img": "https://cdn-cms.pgimgs.com/static/2020/03/114784014_xl.jpg",
    "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum lacinia ipsum nec tristique. Fusce a urna neque. Phasellus pellentesque lacinia justo, quis laoreet diam interdum ut. In congue lacus non neque molestie scelerisque. Vestibulum imperdiet, magna nec ornare tristique, quam mauris lobortis tellus, et ullamcorper nibh enim et lorem."
  }
]

  return (
    <div className="App">
      <div className="App-header">
       <h1>โหวตอาหาร</h1>
      </div>

      <div className='menu-container'>
        <ListMenu data={foodAll}/>

      </div>
    </div>
  );
}

export default App;