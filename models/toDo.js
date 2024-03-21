const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let toDoSchema = new Schema(
{
    toDo: {type: String}
}
);

module.exports = mongoose.model("toDo", toDoSchema);

