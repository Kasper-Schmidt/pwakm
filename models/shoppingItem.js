const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let shoppingItemSchema = new Schema(
{
    shoppingItem: {type: String}
}
);

module.exports = mongoose.model("shoppingItem", shoppingItemSchema);


