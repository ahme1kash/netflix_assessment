const express = require("express")
const connect = require("./config/db")
const cors = require("cors")
const app = express();
const morgan = require("morgan")
require("colors")
const PORT = process.env.PORT || 3000;

const dotenv = require("dotenv");
dotenv.config();

//  Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.listen(PORT, async () => {
    if (await connect()) {
        console.log("Server Status👇\n".blue.bold);
        console.log(await connect());
        console.log(`Server Up and Running at port ${PORT}`.yellow.bold);
    }
});

app.get("/", (req, res) => {
    return res
        .status(200)
        .send("<h1 style='color:red'> Netflix Assessment MERN Stack assignment</h1>");
});
