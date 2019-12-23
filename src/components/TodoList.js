import React, { Component } from "react";
import { Button } from "reactstrap";
import './TodoList.css';
import TodoItem from './TodoItem';
class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div>

        <div className="container">
          <div className="row">
            <h1>Todo List</h1>
            <div className="col-12">
              {items.map((item, index) => {
                return <TodoItem
                  key={index}
                  title={item.title}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                />
              })}

            </div>
            <div className="col-12">
              <Button onClick={clearList} className="clear-item" color="danger">Clear List</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
