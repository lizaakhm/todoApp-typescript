import { ChangeEvent } from "react"
import {StyledInput} from "./Input.style"

interface inputProps {
    value : string
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const  InputText = (props:inputProps) => {
    const {onSubmit, onchange, value} = props
    return <StyledInput type="text" placeholder="create new task"   onChange={onchange} onKeyDown={onSubmit}
    value={value}/>
    
}

export default InputText

