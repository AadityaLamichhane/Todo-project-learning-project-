const zod = require("zod");
//Creating the creating the template for the todo 

const createTodo = zod.object({
    title:zod.string(),
    description:zod.string()
})
const updateTodo = zod.object({
    id :zod.string(),
})
module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo,
}
