const express = require("express");
const port = 3009;
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { getUsers, createUsers, editUsers, login } = require("./controller/users");
const { getAbsence, clockIn, clockOut } = require("./controller/absence");
app.use(cors());
app.use(bodyParser.json());

router.get("/users", getUsers);
router.post("/users", createUsers);
router.put("/users", editUsers);
router.post("/users/login", login);
router.get("/absence", getAbsence);
router.post("/absence/clockin", clockIn);
router.post("/absence/clockout", clockOut);

app.use(router);
app.listen(port, () => console.log(`server running in port ${port}`));
