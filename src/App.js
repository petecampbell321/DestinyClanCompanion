import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { addUsers } from './actions/users';

import Header from './components/Header';
import UserList from './components/UserList';

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/bungietest')
      .catch(function (error) {
        console.log('Error status code: ' + error.response.status);
        console.log(error.message);
        console.log(error.response.headers)
        console.log(error.response.data.Message);
      })
      .then(response => {
        console.log(response.data.Response[0]);
        store.dispatch(addUsers(response.data.Response));
      });
  };

  render() {
    return (
      <div>
        <Header/>
        <UserList />
      </div>
    );
  };
  
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root'));