import logo from './logo.svg';
import './App.css';
// import CakeShop from './components/CakeShop';
import CakeShopWithHooks from './components/CakeShopWithHooks';
import {store} from './redux/store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      {/* <CakeShop/> */}
      <CakeShopWithHooks/>
    </div>
      </Provider>
  );
}

export default App;
