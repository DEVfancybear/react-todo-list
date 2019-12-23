import React, { Component } from "react";
import "./App.css";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import uuid from "uuid";
class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      id: uuid(),
      item: "",
      editItem: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearList = this.clearList.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItem
    })

  }
  handleEdit = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      editItem: true,
      id: id
    })
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-capitalize text-center text_input_app">todo input</h3>
              <Todoinput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
              <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
