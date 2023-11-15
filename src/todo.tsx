
import TodoItem from "./TodoItem"
import Todo from "./TodoMassive"


interface todoListprops{
    items: Todo[];
    removeBtn : (id: number) => void;
    togglecheckbox : (id:number) => void
}
const TodoList = (props: todoListprops) => {
    const {items, removeBtn,togglecheckbox} = props
    return <div>
        {items.map( (item) => (
             <TodoItem key={item.id} item={item} removeBtn={removeBtn} togglecheckbox={togglecheckbox}/>
             
             
             ))}
    </div>
}

export default TodoList