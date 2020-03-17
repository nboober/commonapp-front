import React from 'react'

class UserInfo extends React.Component{
    render(){
        this.props.info ? console.log(this.props.info.phone.phone.toString()) : console.log("hello")
        return(
            
            <div>
                <h2>First Name</h2>
                <p>{this.props.info.first}</p>
                <h2>Last Name</h2>
                <p>{this.props.info.last}</p>
                <h2>Email</h2>
                <p>{this.props.info.email}</p>
                <h2>Phone Number</h2>
                <p>{this.props.info ? this.props.info.phone.phone.toString() : null}</p>
            </div>
        )
    }
}

export default UserInfo