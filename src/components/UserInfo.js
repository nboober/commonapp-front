import React from 'react'

class UserInfo extends React.Component{
    render(){
        return(      
            <>    
            <h2>User Detail</h2>  
            <div>
                <h4>First Name</h4>
                <p>{this.props.info.first}</p>
                <h4>Last Name</h4>
                <p>{this.props.info.last}</p>
                <h4>Email</h4>
                <p>{this.props.info.email}</p>
                <h4>Phone Number</h4>
                <p>{this.props.info ? this.props.info.phone.phone.toString() : null}</p>
            </div>
            </>
        )
    }
}

export default UserInfo