import {useState, useEffect} from "react";
import axios from 'axios';

// function
export default function App() {
    const [numero, setNumero] = useState(10);
    const [todos, setTodos] = useState([]);

    useEffect (() => {
      alert("Executei");
      getAlgumaCoisa()
    }, []);

    function increment() {
        setNumero(numero + 1);
    }

    async function getAlgumaCoisa() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data);
    }

    return (
        <>
        <h1>{numero}</h1>
        {todos.map((todo)=>(
          <span key={todo.id}>{JSON.stringify(todo)}</span>
        ))}
        <button onClick={increment}>Incrementar</button>
        </>
    )
}

// classe
/* export default class App extends React.Component{
  render() {
    return <h1>Hello world!</h1>
  }
}
*/