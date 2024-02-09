const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        msg: 'User created Successfully',
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({
        username,
        password
    })

    if (user) {

        res.json({
            username
        })
    } else {
        res.json({
            msg: "Invalid username or password",
            username, password

        }).status(403)
    }

});





module.exports = router