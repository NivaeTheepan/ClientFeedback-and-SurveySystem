const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    q1: {
        type: String,
        required: true
    },
    q2: {
        type: String,
        required: true
    },
    q3: {
        type: String,
        required: true
    },
    q4: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        points: Number,
    },
    {collection: "users"}
)

const Feedback = mongoose.model("Feedback", feedbackSchema)
const User = mongoose.model("User", userSchema)
//User.createIndexes()
const express = require('express');
const app = express();
const cors = require("cors");
const { Collection } = require("mongodb");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

// Testing purposes only, use http://localhost:5000 to test if it works
//app.get("/", (req, resp) => { resp.send("App is Working"); })
app.get("/", (req, resp) => { resp.send("gigachad zyzz W rizz rn"); })

app.post("/feedback", async (req, resp) => {
    try {
        console.log("Name: " + req.body.name)
        console.log("Email: " + req.body.email)

        const user = await User.findOne({name: req.body.name, email: req.body.email})

        if (user) {
            console.log("user found")

            const feedback = new Feedback({
                name: req.body.name,
                email: req.body.email,
                q1: req.body.q1,
                q2: req.body.q2,
                q3: req.body.q3,
                q4: req.body.q4
            })
            await feedback.save()

            console.log("feedback saved")

            user.points += 10;
            await user.save()
            console.log("updated user points")

            resp.send(req.body)
        } else {
            console.log("user not found")
        }
    } catch (e) {
        console.log(e)
        resp.send("ocky way gta 6 garten of banban rizzing up goated looksmax livvy dunne dawg L rizz goated bussing fanum ya cut g whopper whopper whopper skibiddi toilet")
    }
})

app.listen(5000);