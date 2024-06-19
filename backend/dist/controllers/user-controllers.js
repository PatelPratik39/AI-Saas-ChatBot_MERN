import User from "../models/User.js";
export const getAllUsers = async (req, res, next) => {
    //get All users
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error", cause: error.message });
    }
};
export const userSignUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        return res.status(200).json({ message: "OK", user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map