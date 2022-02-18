import './App.css';
import AppContext from './context/AppContext';
import Router from './HOC/router/Router.jsx';


function App() {
  return (
      <AppContext>
        <Router/>
      </AppContext>
  )
}

export default App;
