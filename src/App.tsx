import InputText from "./Input"
import TodoList from "./todo"
import {AppContainer} from "./App.style"
import {useState} from "react"
import Todo from "./TodoMassive"
import dayjs from "dayjs";
// import GenerateColors from "./TodoItem"

function App() {
  const [todos, setTodos] = useState <Todo[]>([]);
  const [text, setText] = useState ("");

  const Colors = ["red", "orange", "yellow", "green", "blue", "purple" ]


  const GenerateColors = () => {
    const randomIndex = Math.floor(Math.random() * Colors.length)
    return Colors [randomIndex]
  }

  const removeBtn = (id:number) => {
     const newtodos = todos.filter((todo) => todo.id !==id );
     setTodos(newtodos)
  }
  const inputCange = (e : any) => {
    setText(e.target.value);

  }
  const inputEnter = (e : any) => {
    if(e.key === "Enter"){
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title : text,
          isComplited: false,
          createdAt: dayjs().format("HH:mm"),
          borderColor: GenerateColors()
        },
      ]);
      setText("")
    }
  }

  const togglecheckbox = (id:number) => {
    setTodos(
      todos.map((todo) =>
      todo.id === id ? {...todo, isComplited: !todo.isComplited} : todo)
    )
  }

  return (
    <AppContainer>
      <InputText  onchange={inputCange} onSubmit={inputEnter} value={text} />
      <TodoList items ={todos} removeBtn={removeBtn} togglecheckbox={togglecheckbox} />
    </AppContainer>
  );
}



export default App;
