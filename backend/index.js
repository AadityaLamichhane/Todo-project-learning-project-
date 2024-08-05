const express = require("express");
const zod = require("zod")
const cors = require('cors');
const {createTodo, updateTodo} = require('./type.js');
const app = express();


app.use(express.json());

app.use(cors());
const {todo} = require("./db.js");
const {update} = require("./db.js");
const port= 5000;


app.post('/todo',async (req,res)=>{
    let data ;
    try {
        const createPayload = req.body;
         data = createTodo.safeParse(createPayload);
     
    }
    catch(error)
    {   
         console.log(`Error ${error}`);
         return res.status(411,({
            massage:"Something was wrong "
        }));

    }
    try{
        await todo.create({
            title:data.data.title,
            description:data.data.description,
        });
     
    }catch(err){
        console.log(`Error ${err}`);
        return res.status(411).json({
            message: "Error writing data to the database"
        })
    }
    return res.json({
      message:  "Successfully created the todo "
    })
     
    
});



app.get('/todo',async (req,res)=>{
    const todocollection =  await todo.find();
    res.json(todocollection);

    

});


app.put('/completed',async (req,res)=>{
    const updatePayload = req.body;
    const parsedpayload = updateTodo.safeParse(updatePayload)
    if(!parsedpayload.success){
        return res.status(411).json({
            massage:"Wrong inputs"
        })
    }
    await todo.updateOne({

        _id : req.body.id
    },{
        completed:true
    });

//use the updateOne by getting the id of the row we want to aces that is the id of the todo 
//
   
    res.status(200).json({massage:"Successfullt updated"});

});
app.listen(port,()=>{
    console.log("listenin to the port");
})

// expected values
// Body 
// title:string 
// description:String 

