import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  removeItem = (id) => {
    this.props.deleteItem(id);
  };
  render() {
    const { items } = this.props.item;
    return (
      <div>
        <Container>
          <ListGroup>
            <TransitionGroup className="shoppingList">
              {items.map(({ _id, name }) => (
                <CSSTransition key={_id} classNames="fade">
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      color="danger"
                      onClick={() => this.removeItem(_id)}
                      size="sm"
                    >
                      X
                    </Button>
                    {name}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        </Container>
      </div>
    );
  }
}
ShoppingList.protoTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
