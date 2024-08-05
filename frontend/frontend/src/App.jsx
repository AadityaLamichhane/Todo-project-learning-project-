import { useState } from 'react'
import './App.css'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todo'
     function App() {
      const [todos,setTodos] = useState([]);
      console.log(`before get fetch todos : \n ${todos}`)
      //Without using the useeffect
  fetch(" http://localhost:5000/todo",{method:"GET"}).then(async(res)=>{
    const data = await res.json();
    const fetchedTodos = Array.isArray(data) ? data : JSON.parse(data);
   console.log(fetchedTodos);
    setTodos(fetchedTodos);
  })
  
  return (
    

   <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
   </div>
  );

}
//Hitting the backend and fetching the todo from the json file 

export default App
