import React from 'react'

const User = (props) =>{
    return(
        <div>
            {props.userInfo.id}
            {props.userInfo.name}
            {props.userInfo.surname}
            {props.userInfo.desc}
        </div>
    )
}

export default User