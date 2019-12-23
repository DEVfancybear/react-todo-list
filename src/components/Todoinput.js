import React, { Component } from 'react';
import {
    Card, Button, Row, Col, InputGroup, InputGroupAddon, Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import './Todoinput.css';


class Todoinput extends Component {

    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props
        return (
            <div>
                <Row>
                    <Col sm="12">
                        <Card body>
                            <form onSubmit={handleSubmit}>
                                <InputGroup className="bg-primary input-group-text text-white">
                                    <InputGroupAddon className="search-card" addonType="prepend"><FontAwesomeIcon icon={faBook} className="text-center" size="2x" /></InputGroupAddon>
                                    <Input value={item} onChange={handleChange} placeholder="Add A Todo Item" />
                                </InputGroup>
                                <Button className="but-add-todo" color={
                                    editItem ? "success" : "primary"
                                }>{editItem ? "Edit Item" : "Add Item"}</Button>
                            </form>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Todoinput;