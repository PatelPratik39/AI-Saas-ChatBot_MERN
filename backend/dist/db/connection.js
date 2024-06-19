import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log(error);
        throw new Error("MongoDB connection failed!!");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Could not disconnect from MongoDB!!");
    }
}
export { connectToDatabase, disconnectFromDatabase };
// import {connect, disconnect} from "mongoose"; 
// async function connectToDatabase() {
//     try {
//         await connect(process.env.MONGODB_URL)
//     } catch (error) {
//         console.log(error);
//         throw new Error("MongoDB connection failed!!")
//     }
// }
// async function disconnectFromDatabase() {
//     try {
//         await disconnect();
//     } catch (error) {
//         console.log(error);
//         throw new Error("Could not disconnect from MongoDB!!");
//     }
// }
// export {connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map