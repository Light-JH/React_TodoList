
import React, {Component} from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
     //对接受的props进行类型，必要性的限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }
    handleKeyUp = (event) => {
        //get event keyCode, target, not this.event 
        const {keyCode, target} = event
        //check if press enter 
        if (keyCode !== 13) return 
        //check if input empty and press enter 
        if (target.value.trim() === "") {
            alert('Cannot be empty')
            return 
        }
        //get a todo object  
          
        const todoObj = {id:nanoid(), Name:target.value, done:false}
        //pass argument to APP 通知app拿到新的todo Obj
        this.props.addTodo(todoObj)
        target.value=''
    }
    render(){
        return (
            <div className='todo-header'>
               <input onKeyUp={this.handleKeyUp} type='text' placeholder='Type tasks you want to add and press enter'/>
            </div>
        )
    }   
}

