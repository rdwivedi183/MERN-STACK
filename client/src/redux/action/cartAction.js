import axios from 'axios';
import * as actionTypes from '../constants/productConstant';

const URL = "http://localhost:8000";

export const addToCart = (id, quanitity) =>  async(dispatch) => {
    try {
      const { data } =  await axios.get(`${URL}/product/${id}`);

      dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quanitity }});
    } catch (error) {
        dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id});
}