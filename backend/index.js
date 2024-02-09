const bodyParser = require('body-parser');
const express = require("express")
const app = express();
const userRouter = require("./routes/index");


app.use(bodyParser.json());
app.use(express.json())

// const cors = require("cors");

app.use("/user/", userRouter)



const PORT = 5555;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
