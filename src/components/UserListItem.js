import React from 'react'

class UserListItem extends React.Component{

    render(){
        return(
            <div id={this.props.key} onClick={()=>this.props.getUserInfo(this.props.user)} class="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" role="tab">
                User {this.props.index} {this.props.user.first} {this.props.user.last}
            </div>
        )
    }
}

export default UserListItem