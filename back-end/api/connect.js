import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://<db_username>:<db_password>@cluster0.miift.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyCl");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
