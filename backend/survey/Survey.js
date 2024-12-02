const mongoose = require("mongoose")

const surveySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
    },
    q5: {
        type: String,
        required: true
    },
    q6: {
        type: String,
        required: true
    },
    q7: {
        type: String,
        required: true
    },
    q8: {
        type: String,
        required: true
    },
    q9: {
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

const Survey = mongoose.model("Survey", surveySchema)
const User = mongoose.model("User", userSchema)
//User.createIndexes()
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5001");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.send("App is Working");
    // You can check backend is working or not by
    // entering http://loacalhost:5001
    // If you see App is working means
    // backend working properly
})

/*app.post("/survey", async (req, resp) => {
    try {
        console.log(req.body)
        const survey = new Survey(req.body);
        let result = await survey.save();
        result = result.toObject();
        if (result) {
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("Brev you ohio rizz in this town dab on that boomer")
        }
    } catch (e) {
        console.log(e)
        resp.send("ocky way gta 6 garten of banban rizzing up goated looksmax livvy dunne dawg L rizz goated bussing fanum ya cut g whopper whopper whopper skibiddi toilet")
    }
})*/

app.post("/survey", async (req, resp) => {
    try {
        console.log("Name: " + req.body.name)
        console.log("Email: " + req.body.email)

        const user = await User.findOne({name: req.body.name, email: req.body.email})

        if (user) {
            console.log("user found")

            const survey = new Survey({
                name: req.body.name,
                email: req.body.email,
                q1: req.body.q1,
                q2: req.body.q2,
                q3: req.body.q3,
                q4: req.body.q4,
                q5: req.body.q5,
                q6: req.body.q6,
                q7: req.body.q7,
                q8: req.body.q8,
                q9: req.body.q9
            })
            await survey.save()

            console.log("survey saved")

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

app.listen(5001);