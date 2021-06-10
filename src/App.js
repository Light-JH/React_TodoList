import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import List from './component/List'
import './App.css'


export default class App extends Component{
  // error- id = "001"
  state = {
    todos:[{id:"001", Name:'Breakfest', done:true}, 
          {id:"002", Name:'Lunch', done:true},
          {id:"003", Name:'Dinner', done:false}
        ]}
  
  // addTodo function for Header pass parameter 
  addTodo = (todoObj) => 
        {
    // get initial state
    const {todos} = this.state
    //add new todo
    const newTodos = [todoObj,...todos]
    //update state 
    this.setState({todos:newTodos})
    }
  // addToDo pass to header so APP can pass new input to APP

  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map(todoObj => {
      if (todoObj.id === id) return {...todoObj,done:done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  checkAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return{...todoObj, done:done}
    } )
    this.setState({todos:newTodos})
  }

  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done 
    })
    this.setState({todos:newTodos})
  }
  render(){
    const {todos} = this.state
    return (
      <div className = 'todo-container'>
        <div className='todo-wrap'>
          <Header addTodo = {this.addTodo}/>    
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos}  checkAllTodo = {this.checkAllTodo} clearAllDone = {this.clearAllDone}/>
        </div>
      </div>
    )
  }
}  

