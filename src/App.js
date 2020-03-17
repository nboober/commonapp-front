import React from 'react';
import NavBar from './components/NavBar'
import UsersContainer from './containers/UsersListContainer'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      users: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/users')
    .then(respsonse => respsonse.json())
    .then(usersArray => {
      this.setState({
        users: usersArray
      })
    })
  }

  render(){
    return(
      <div>
        <NavBar/>
        <UsersContainer users={this.state.users}/>
      </div>
    )
  }
}

export default App;
