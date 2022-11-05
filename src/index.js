const express = require("express");
const port = 3005;
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { getUsers, createUsers, editUsers } = require("./controller/users");
app.use(cors());
app.use(bodyParser.json());

router.get("/", getUsers);
router.post("/", createUsers);
router.put("/:id", editUsers);
app.use(router);
app.listen(port, () => console.log(`server running in port ${port}`));
