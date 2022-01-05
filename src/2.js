const express = require("express");
const res = require("express/lib/response");
const app = express();
const { selectuser } = require("./1.js")
app.get("/users", async (req, res) => {
    // let obj = { messages: "jadhav sachian afbcaksbckja" };
    const list = await selectuser();
    res.json(list);

});
app.listen(4000, () => console.log("server started"));