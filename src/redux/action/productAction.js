import axios from "axios";
import {
  GET_PRODUCTS_SUCCES,
  GET_PRODUCTS_FAIL,
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
