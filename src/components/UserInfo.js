import React from 'react'

class UserInfo extends React.Component{
    render(){
        return(      
            <div>    
                <h2>User Detail</h2>  

                <div className="card" style={{width: '18rem', height: '21rem'}}>

                    <div class="card-body">

                        <h5 class="card-title">First Name</h5>
                        <p class="card-text">{this.props.info.first}</p>

                        <h5 class="card-title">Last Name</h5>
                        <p class="card-text">{this.props.info.last}</p>

                        <h5 class="card-title">Email</h5>
                        <p class="card-text">{this.props.info.email}</p>

                        <h5 class="card-title">Phone</h5>
                        <p class="card-text">{this.props.info ? this.props.info.phone.phone.toString() : null}</p>
                    
                    </div>
                </div>
                
            </div>

        )
    }
}

export default UserInfo