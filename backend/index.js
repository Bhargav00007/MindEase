const bodyParser = require('body-parser');
const express = require("express")
const app = express();
const userRouter = require("./routes/index");
const cors = require("cors");


app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

// const cors = require("cors");

app.use("/user/", userRouter)



const PORT = 5555;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
