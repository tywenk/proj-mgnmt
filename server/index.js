const express = require("express")
const colors = require("colors")
require("dotenv").config()
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const connectDB = require("./config/db")

const port = process.env.PORT || 5200

const app = express()

connectDB()

app.listen(port, console.log(`Server Running on Port ${port}`))
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
)
