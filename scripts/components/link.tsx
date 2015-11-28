import * as React from 'react';

type Properties = {
  active: boolean,
  children?: JSX.Element,
  onClick: Function
}

export class Link extends React.Component<Properties, {}> {
  constructor(props) {
    super(props);
  }

  render() {

    const {active, onClick, children} = this.props;

    if (active) {
      return <span>{children}</span>
    }

    return (
      <a href="#" onClick={(e) => {
        e.preventDefault();
        onClick();
      }}>
        {children}
      </a>
    );
  }
}
