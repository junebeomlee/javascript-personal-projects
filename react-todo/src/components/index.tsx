import { Todo } from "../types/todo";
import styles from "./index.module.css";

interface TodoProps {
    todo: Todo;
    onChangeTodoByIsDone: (todo: Todo) => void;
}

export const TodoComponent = ({todo, onChangeTodoByIsDone}: TodoProps) => {
    
    function handleChangeTodoByIsDone() {
        return onChangeTodoByIsDone(todo);
    }

    // 역할에 대해서 type을 정의하면 어떨까?
    return (
        <div className={styles.todoList}>
            <div>{todo.title}</div>
            <div>수정</div>
            <div>삭제</div>
            <input type="checkbox" checked={todo.isDone} onChange={handleChangeTodoByIsDone}/>
        </div>
    );
}
