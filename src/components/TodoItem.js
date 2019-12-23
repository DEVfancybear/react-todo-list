import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import './TodoItem.css';
class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props;
        return (
            <div>
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6>{title}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 succes_hover" onClick={handleEdit}><FontAwesomeIcon icon={faPen} className="text-center" size="2x" /></span>
                        <span className="mx-2 danger_hover" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} className="text-center" size="2x" /></span>
                    </div>
                </li>
            </div>
        );
    }
}

export default TodoItem;