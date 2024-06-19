import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";


const PORT = process.env.PORT || 6060;

// Connections and listeners
connectToDatabase().then(() =>{
    app.listen(PORT, () => {
      console.log(`Server is serving at 🤟🏻 ${PORT} `);
    })
}).catch((error) => console.log(error));
