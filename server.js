const express = require("express");
const app = express();
var cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");

/*Services */
const addClass=require("./services/addClass")
const searchClass=require("./services/searchClass")
const getCounter=require("./services/getCounter")
const classPage = require("./services/classPage")
const createSession = require("./services/createSession")
const tutorRequests =require("./services/tutorRequests");
const populate  = require("./services/populate");
/* */

mongoose.set("useFindAndModify", false);
mongoose.connect(
    keys.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Connected.db");
    }
);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    })
);

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(cors());
app.use(cookieParser("foo"));
app.use(
    expressSession({
        resave: true,
        saveUninitialized: true,
        secret: "foo",
        cookie: {
            expires: false,
            secure: true,
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

/*API Calls */
app.use("/api/addclass",addClass)
app.use("/api/searchclass",searchClass)
app.use("/api/getcounter",getCounter)
app.use("/api/classpage",classPage)
app.use("/api/createsession",createSession)
app.use("/api/tr",tutorRequests)
app.use("/api/populate",populate)
/* */


const port = process.env.PORT || 5000;
require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
    });
}
app.use(express.static("client/build"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "public", "index.html")); // relative path
});

app.listen(port, () => {
    console.log(port);
});
