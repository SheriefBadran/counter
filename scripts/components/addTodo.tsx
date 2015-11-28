import * as React from 'react';

type Properties = {
  onAddClick: Function
}

export class AddTodo extends React.Component<Properties, {}> {

  constructor(props) {
    super(props);
  }

  render() {
    const {onAddClick} = this.props;
    let input;
    return(
      <div>
        <input ref={(node) => {input = node;}} />
        <button onClick={() => {
          onAddClick(input.value);
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    )
  }
}
