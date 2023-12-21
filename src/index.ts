import express from "express";
import { createConnection } from "./db/mongoConnection";
import blogRouter from "./routers/blog.router";
const app = express();

createConnection();

app.use("/api/v1", blogRouter);

app.listen(3000, () => {
	console.log("Listening on port 3000");
});
