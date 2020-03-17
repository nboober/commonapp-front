import React from 'react'

class UserListItem extends React.Component{
    render(){
        return(
            <div onClick={()=>this.props.getUserInfo(this.props.user)} >
                User {this.props.index} {this.props.user.first} {this.props.user.last}
            </div>
        )
    }
}

export default UserListItem