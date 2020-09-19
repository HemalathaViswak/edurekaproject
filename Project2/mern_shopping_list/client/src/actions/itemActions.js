import * as actions from "../actions/types";
import axios from "axios";
export const getItems = () => (dispatch) => {
  // return {
  //     type: actions.GET_ITEMS
  // }
  dispatch(setItemsLoading);
  axios.get("/api/items").then((res) =>
    dispatch({
      type: actions.GET_ITEMS,
      payload: res.data,
    })
  );
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`/api/items/deleteItem/${id}`)
    .then((res) => dispatch({ type: actions.DELETE_ITEM, payload: id }));
};

export const addItem = (item) => (dispatch) => {
  axios.post("/api/items/addItem", item).then((res) =>
    dispatch({
      type: actions.ADD_ITEM,
      payload: res.data,
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: actions.ITEMS_LOADING,
  };
};
