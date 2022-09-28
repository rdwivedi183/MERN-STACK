import axios from "axios";
import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_DETAILS_REQUEST,
  GET_PRODUCTS_SUCCES_DETAILS_SUCCESS,
  GET_PRODUCTS_SUCCES_DETAILS_FAIL
} from "../constants/productConstant";

const URL = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    let { data } = await axios.get(`${URL}/products`);

    dispatch({ type: GET_PRODUCTS_SUCCES, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {

    dispatch({ type: GET_PRODUCTS_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: GET_PRODUCTS_SUCCES_DETAILS_SUCCESS, payload: data})

  } catch (error) {
    dispatch({ type: GET_PRODUCTS_SUCCES_DETAILS_FAIL, payload: error.message });
  }
}
