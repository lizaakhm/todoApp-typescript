import {TodoItemsContainer} from "./TodoItem.style"
import Todo from "./TodoMassive"
import dayjs from "dayjs";

interface TodoItemProps {

    item:Todo;
    removeBtn: (id : number) => void
    togglecheckbox: (id:number) => void
}

const TodoItem = (props: TodoItemProps) => {
const {item, removeBtn, togglecheckbox} = props
    return <TodoItemsContainer>
  
        <input type="checkbox" checked={item.isComplited} onChange={() => togglecheckbox(item.id)}/>
        <p style={{width:"90px", textDecoration : item.isComplited ? "line-through" : "none", marginRight:"150px"}}>{item.title}</p>
        
        <span style={{marginRight:"13px"}}>{dayjs(item.createdAt).format("HH:mm")}</span>
        <button style = {{ border: `2px solid ${item.borderColor}`}} onClick={() => removeBtn(item.id)} >X</button>
      
      
        </TodoItemsContainer>
}

export default TodoItem 
