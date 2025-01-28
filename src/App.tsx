import todoListData from "./data/todolist.json";
import {Children} from "react";
import { TodoComponent } from "./components";
import Style from "./app.module.css";
import {useState} from "react";
import { Todo } from "./types/todo";

/**
 * 네이밍 컨벤션
 * todo, todoCompoennt, todoList, todoCompoentProps, ... 중복적인 요소가 많음
 * todoList가 단일인지 복수인지 관리하기 어려움
 * */ 
export default function() {
  const [todos, setTodos] = useState<Todo[]>(todoListData);

  // 그냥 postTodo는 어떤 역할일까?
  function handlePostTodo(todo: Todo) {
    // 이름이 중복일 경우
    const changedTodo = [...todos, todo];
    return setTodos(changedTodo)
  }
  
  // handle, on 등의 접미사
  function handleChangeTodoByIsDone(selectedTodo: Todo) {
    const changedTodos = [...todos];
    const changedTodo = changedTodos.find(todo => todo === selectedTodo);
    
    if(!changedTodo) {
      // 에러 코드로 관리하기
      return console.error("선택된 todo를 찾을 수 없습니다.");
    }

    changedTodo.isDone = !changedTodo.isDone;
    return setTodos(changedTodos);
  }
	
  return (
    <div className={Style.column}>
      {
          Children.toArray(
            todos.map(todo => <TodoComponent todo={todo} onChangeTodoByIsDone={handleChangeTodoByIsDone}/>)
        )
      }
    </div>
    );
}