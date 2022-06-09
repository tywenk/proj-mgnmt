const express = require("express")
require("dotenv").config()
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")

const port = process.env.PORT || 5200

const app = express()
app.listen(port, console.log(`Server Running on Port ${port}`))
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
)
