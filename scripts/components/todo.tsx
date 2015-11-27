import * as React from 'react';

type Properties = {
    key: number,
    onClick: any,
    completed: boolean,
    text: string
};

export class Todo extends React.Component<Properties, {}> {
  constructor(props) {
    super(props);
    console.log('todo is called');
  };

  render() {
    const {onClick, completed, text, key} = this.props;
    console.log('todo is rendered: ', text);
    return (
      <li key={key} onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
      </li>
    );
  }
}
