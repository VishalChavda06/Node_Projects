import express from "express"
import dotenv from "dotenv"

const app = express()

dotenv.config({
  path: "./.env"
});

app.use(express.urlencoded())

app.set("view engine", "ejs")

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server start by on ${PORT}`)
});

// Todo-list Array
let todoLists = []

app.get("/", (req, res) => {
  return res.render("index", { todoLists: todoLists })
})

app.get("/todo", (req, res) => {
  return res.render("todo")
})

// Task Post Required
app.post("/todoForm", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let date = req.body.date;
  let task_level = req.body.task_level

  let todoList = {
    title: title,
    description: description,
    date: date,
    task_level: task_level
  };

  todoLists.push(todoList)
  console.log(todoLists);
  console.log("TodoList are successfully added..!!");

  return res.redirect("/")
})


