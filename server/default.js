import { products } from "./constants/data.js";
import ProductModel from "./model/product-schema.js";

const DefaultData = async () => {
    try {
        await ProductModel.insertMany(products);

        console.log('data import successfully');

    } catch (error) {
        console.log(`Error while inserting default data ${error.message}`)
    }
}

export default DefaultData;