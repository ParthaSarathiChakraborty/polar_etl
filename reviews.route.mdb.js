
import express from "express" //import express"

const router = express.Router()
//create an instance of express.Router()
router.route("/").get((req , res) => res.send("hello world"))

export default router
