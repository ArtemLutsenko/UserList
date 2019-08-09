import React from 'react'
import './User.css'

const User = (props) =>{
    return(
        <div className = 'userlist'>
            <div className= 'userlist__image'></div>
            <p><strong>id: </strong>{props.userInfo.id}</p>
            <p><strong>Name:  </strong>{props.userInfo.name}  <strong>Surname:  </strong>{props.userInfo.surname}</p>
            <p><strong>Description:  </strong>{props.userInfo.desc} </p>
        </div>
    )
}

export default User