import "./App.css";
import Router from "./HOC/router/Router.jsx";
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
