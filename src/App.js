import logo from './logo.svg';
import './App.css';
import ItemsSelect from './Components/ItemsSelect';
import { Cart } from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    {/* <ItemsSelect></ItemsSelect> */}
    <Cart></Cart>
    </div>
  );
}

export default App;
