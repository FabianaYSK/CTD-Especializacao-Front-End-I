import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import formatDate from "./utils/date";
import { FiTrash2 } from "react-icons/fi";
import "./App.css";

interface FormData {
  title: string;
  date: string;
  description: string;
  category: string;
  id: string;
}

interface TaskState {
  tasks: {
    tasks: FormData[];
  };
}

export default function App() {
  const dispatch = useDispatch();
  
  const [formdata, setFormdata] = useState<FormData>({
    title: "",
    date: "",
    description: "",
    category: "",
    id: "",
  });

  const { tasks } = useSelector((state: TaskState) => state.tasks);

  return (
    <div className="container">
      <div className="form">
        <h2>Cadastrar tarefa</h2>
        <label className="info" htmlFor="title">
          Título
        </label>
        <input
          type="text"
          id="title"
          placeholder="Digite o título da sua tarefa"
          value={formdata.title}
          onChange={(event) =>
            setFormdata({ ...formdata, title: event.target.value })
          }
        />
        <label className="info" htmlFor="category">
          Categoria
        </label>
        <select
          id="category"
          value={formdata.category}
          onChange={(event) =>
            setFormdata({ ...formdata, category: event.target.value })
          }
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
          <option value="Prioridade">Prioridade</option>
          <option value="Outros">Outros</option>
        </select>
        <label className="info" htmlFor="date">
          Data
        </label>
        <input
          type="date"
          id="date"
          placeholder="Digite a data"
          value={formdata.date}
          onChange={(event) =>
            setFormdata({ ...formdata, date: event.target.value })
          }
        />
        <label className="info" htmlFor="description">
          Descrição
        </label>
        <input
          type="text"
          id="description"
          placeholder="Digite uma descrição para a sua tarefa"
          value={formdata.description}
          onChange={(event) =>
            setFormdata({ ...formdata, description: event.target.value })
          }
        />
        <button
          className="button"
          onClick={() => {
            dispatch({ type: "ADD_TASK", payload: { task: formdata } });
            setFormdata({
              title: "",
              date: "",
              description: "",
              category: "",
              id: "",
            });
          }}
        >
          Salvar
        </button>
      </div>

      <div className="component">
        <h2>Minhas tarefas</h2>
        <button onClick={() => dispatch({ type: "CLEAR_LIST" })}>
          Limpar lista
        </button>
        <ul>
          {tasks.map((todo, index) => (
            <div className="component-info" key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.category}</p>
              <p>{formatDate(todo.date)}</p>
              <p>{todo.description}</p>
              <FiTrash2
                className="icon"
                size={20}
                color={"red"}
                onClick={() =>
                  dispatch({ type: "REMOVE_TASK", payload: { index } })
                }
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
