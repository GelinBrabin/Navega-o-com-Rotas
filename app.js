const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const alunosRouter = require("./routes/alunos");
app.use("/alunos", alunosRouter);

const aboutRouter = require("./routes/about");
app.use("/about", aboutRouter);

app.listen(3000, () => {
    console.log("Servidor em execução na porta 3000");
});