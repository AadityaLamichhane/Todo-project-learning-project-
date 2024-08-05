import { useState } from 'react'
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    async function handleonclick()
    {
        console.log(` In create todo.jsx This is title : ${title} \n this is the description : ${description}`);
        
          try {
                const response = await fetch("http://localhost:5000/todo", {
                    method: "POST",
                    body:JSON.stringify( {
                        'title': title,
                        'description': description,
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
    
                const data = await response.json();
                console.log(data); 
            } 
            catch (error) {
                console.error('Error:', error);
            }
       
    
    }

    return <div>
        { /* e.target is used to get the current dom we are making function with  */}
        <input type="text" onChange = {
                                    function(e){
                                        
                                    setTitle(e.target.value);
                                    }}
         style = {
             {
                height: 10, padding:10 
            } 
             } placeholder="Todo"></input>

        {/* changing tha value */}
        <input   style = {
             {
                height: 10, padding:10 
            } 
             }
             type="text" placeholder = "description" onChange={
            function(e){
                
            setDescription(e.target.value);
        }
        }
        ></input>
        <button onClick={handleonclick}>Add todo</button>
        </div>


    
}
