import app from "./server.js" //import app
import mongodb from "mongodb" //import mongodb
import reviewsDAO from "./dao/reviewsDAO.js"

const MongoClient= mongodb.MongoClient //create an instance of MongoClient
const mongo_username = process.env["mongo_username"] //get the username from the environment variable
const mongo_password= process.env["MONGO_PASSWORD"] //get the password from the environment variable
// process.env.REVIEWS_DB_NS = process.env.REVIEWS_DB_NS || "reviews" //set default database name
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.xnb9grp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const port = 8000 //set the port

MongoClient.connect (
    uri,             //uri is the connection string
  {
    maxPoolSize: 50, //set the max pool size
    wtimeoutMS: 2500, //set the write timeout means the time to wait for the write operation to complete
    useNewUrlParser: true //use the new url parser means the new way to parse the url
    })
.catch(err => {
   console.error(err.stack) //print the error that help to debug the code
  process.exit(1)
  })
.then (async client => {        //async means the function will return a promise
      app.listen(port,  () => {
        console.log(`listening on port ${port}`)
      })
})