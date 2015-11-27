import * as React from 'react';
import {render} from 'react-dom';
import {Todo} from './todo';

type Properties = {
  todos: any,
  onTodoClick: any
}

export class TodoList extends React.Component<Properties, {}> {

  constructor(props) {
    super(props);
  }
  render() {
    const {todos, onTodoClick} = this.props;
    return (
      <div>
        <ul>
          {
            todos
              .map((todo, id) => (
                  <Todo key={todo.id}
                        completed={todo.completed}
                        text={todo.text}
                        onClick={() => onTodoClick(todo.id)}/>
                )
              )
          }
        </ul>
      </div>
    );
  }
}
