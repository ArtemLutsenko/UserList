import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../Store/actions'
import User from './User/User'
import  './UserList.css'

class UserList extends Component {

    componentDidMount(){
        this.props.fetchUsers()
    }
    
    render(){ 

        const displayedUsers = this.props.users
        .filter((item, i) => {
            return (i >= (this.props.currentPage - 1) * 5)&&(i < this.props.currentPage * 5)
        })
        .map((user, id) =>{
            return(
                <User key = {id} userInfo = {user}></User>
            )
        })


        const prevPaginationButton = <button onClick = {this.props.prevPage} key = 'prev' className = 'container__button prev'>prev</button>
        const nextPaginationButton = <button onClick = {this.props.nextPage} key = 'next' className = 'container__button next'>next</button>        
        const PaginationNumberButtons = () =>{
            const numberPaginationButtons = []
            for(let i =1; i <= this.props.totalPages; i++){
                let buttonClassName = 'container__button'
                if(i === this.props.currentPage){
                    buttonClassName += ' active'
                }
                numberPaginationButtons.push(
                    <button
                        key = {i + '1'}
                        className = {buttonClassName}
                        onClick = {() =>this.props.changePage(i)}
                    >
                    {i}
                    </button>
                )
            }
            return numberPaginationButtons
        }
        
        const buttons = [prevPaginationButton, ...PaginationNumberButtons(), nextPaginationButton ]

        return(
            <div className = 'container'>
                <h1>List of Users</h1>
                <div className = 'container__buttons'>{buttons}</div>                
                {displayedUsers}
                <div className = 'container__buttons'>{buttons}</div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        users:  state.users,
        totalPages: state.totalPages,
        currentPage: state.currentPage
    }
}

 const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers: () => dispatch(actionTypes.fetchUsers()),
        nextPage: ()=> dispatch(actionTypes.nextPage()),
        prevPage: () => dispatch(actionTypes.prevPage()),
        changePage: (id) => dispatch(actionTypes.changePage(id))
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(UserList)