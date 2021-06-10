import React, {Component} from 'react'
import './index.css'


export default class Item extends Component {
    state = {mouse:false}

    handleMouse=(flag) => {
        return ()=> {
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)  
        }
    }
// 拿到id告诉App删除
    handleDelete = (id) => { 
        return () => {
            if(window.confirm('are you sure to delete the task?'))
                {this.props.deleteTodo(id)}
        }

    }
    
    render(){
        const {id, Name,done} = this.props  
        const {mouse} = this.state
        return (   
            // handleMouse need to return function            
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type = 'checkbox' checked={done} onChange={this.handleCheck(id)} />
                    <span>{Name}</span>
                </label>
                <button onClick = {this.handleDelete(id)} className='btn btn-danger' style={{display: mouse ? 'block': 'none'}}>delete</button>
            </li>
        )
    }    
}