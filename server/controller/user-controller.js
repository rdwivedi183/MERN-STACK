import UserModel from "../model/user-schema.js";

export const userSignup = async (request, response) => {
    try{

        const exsist = await UserModel.findOne({ username: request.body.username});
        if(exsist) {
            return response.status(401).json({message: 'username already exist'});
        }
        const user = request.body;
        const newUser = new UserModel(user)
        await newUser.save();
        
        response.status(200).json({ message: user});
    } catch (error) {
        response.status(200).json({ message: error.message});
    }
}

export const userLogin = async (request, response) => {
    try{
        const username = request.body.username
        const password = request.body.password

        let user = await UserModel.findOne({username: username, password: password})
        if(user) {
            return response.status(200).json({data: user})
        } else {
            return response.status(401).json("Invalid request")
        }
    } catch (error) {
        response.status(500).json({ message: error.message});
    }
}
