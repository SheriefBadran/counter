import * as React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import actions from '../actions/counter';
import store from '../store/configureStore';

type Properties = {
  filter: string,
  children?: JSX.Element, // Children props must be optional since the children props are not declare the "normal" way
  currentActive: string,
  onClick: Function
}

export class FilterLink extends React.Component<Properties, {}> {
  constructor(props) {
    super(props);
  };

  render() {
    const {children, filter, currentActive, onClick} = this.props;
    if (currentActive === filter) {
      console.log('render active: ', children);
      return <span>{children}</span>;
    }

    return (
      <a href="#" onClick={(e) => {
        e.preventDefault();
        onClick(filter);
      }}>
        {children}
      </a>
    )
  }
}
