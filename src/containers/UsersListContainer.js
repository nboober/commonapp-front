import React from 'react'
import UserListItem from '../components/UserListItem'

class UsersListContainer extends React.Component{
    render(){
        return(
            <div>
                Users List
                {this.props.users ? this.props.users.map(user => {
                    return <UserListItem user={user} />
                }) : null}
            </div>
        )
    }
}

export default UsersListContainer