// import { NextFunction, Request, Response } from "express";
// import User from "../models/User.js";
import User from "../models/User.js";
import loadOpenAIApi from "../config/openAi-config.js";
export const generateChatCompletion = async (req, res, next) => {
    try {
        const { message } = req.body;
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res.status(401).json({ message: "User not registered or token malfunctioned!" });
        }
        // Grab chats of user
        const chats = user.chats.map(({ role, content }) => ({ role, content }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        // Load OpenAI API dynamically
        const openai = await loadOpenAIApi();
        // Get latest response
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        console.error('Error generating chat completion:', error);
        return res.status(500).json({ message: 'Something went Wrong!!', error: error.message });
    }
};
//# sourceMappingURL=chat-controllers.js.map