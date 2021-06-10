import React, {Component} from 'react'
import './index.css'

export default class Footer extends Component {
    
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAllDone = () => {
        this.props.clearAllDone()

    }
    render(){
        const {todos} = this.props
        const doneCount = todos.reduce((acc, todo) => acc + (todo.done ? 1:0), 0)
        const total = todos.length
        return (
            <div className='todo-footer'>
                <label>
                    <input type='checkbox' onChange={this.handleCheckAll} checked = {doneCount === total && total !== 0} />
                </label>
                <span>
                    <span>{doneCount}</span> / {total} Complete
                </span>
                <button onClick={this.handleClearAllDone} className='btn btn-danger'>Clear finished tasks</button>
            </div>
        )
    }
        
    
}   