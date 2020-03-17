import React from 'react'
import UserListItem from '../components/UserListItem'

class UsersListContainer extends React.Component{
    render(){
        return(
            <div className="col-4">
                <h2>Users List</h2>
                <div className="list-group" id="list-tab" role="tablist">
                    {this.props.users ? this.props.users.map((user, index) => {
                        return <UserListItem key={user.email} user={user} index={index + 1} getUserInfo={this.props.getUserInfo}/>
                    }) : null}
                </div>
            </div>
        )
    }
}

export default UsersListContainer