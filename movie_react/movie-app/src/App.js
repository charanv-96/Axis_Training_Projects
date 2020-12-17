import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import MovieListComponent from './components/MovieListComponent'
import TicketListComponent from './components/TicketListComponent'
import UserListComponent from './components/UserListComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateMovieComponent from './components/CreateMovieComponent';
import CreateUserComponent from './components/CreateUserComponent';
import CreateTicketComponent from './components/CreateTicketComponent';
import store from './store';
import Login from './components/loginComponent';
import { Provider } from 'react-redux'

function App() {
  return (

    

    <div>
      <Router>

            
              <Provider store={store}>
                <Login />
              </Provider>
            {/* <FooterComponent /> */}

      </Router>

    </div>
  );
}

export default App;
