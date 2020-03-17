import React from 'react';
import NavBar from './components/NavBar'
import UsersContainer from './containers/UsersListContainer'
import UserInfo from './components/UserInfo'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      users: [],
      selectUserInfo: ""
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

  getUserInfo = (user) => {
    this.setState({
      selectUserInfo: user
    })
  }

  render(){
    return(
      <div>
        <NavBar/>
        <UsersContainer users={this.state.users} getUserInfo={this.getUserInfo}/>
        <UserInfo info={this.state.selectUserInfo} />
      </div>
    )
  }
}

export default App;
