import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import uuid from "uuid/dist/v4";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: this.state.name,
    };

    this.props.addItem(newItem);
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color="danger"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {" "}
            Add To Shopping List
            <ModalBody>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Label for="item">Item</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Add Item"
                    onChange={this.onChange}
                  />
                  <Button color="primary">Add Item to Shopping List</Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </ModalHeader>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
