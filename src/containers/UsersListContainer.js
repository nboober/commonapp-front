import React from 'react'
import UserListItem from '../components/UserListItem'

class UsersListContainer extends React.Component{
    render(){
        return(
            <div>
                <h2>Users List</h2>
                {this.props.users ? this.props.users.map((user, index) => {
                    return <UserListItem key={user.email} user={user} index={index + 1} getUserInfo={this.props.getUserInfo}/>
                }) : null}
            </div>
        )
    }
}

export default UsersListContainer