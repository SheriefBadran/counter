import * as React from 'react';
import {render} from 'react-dom';
import {connect} from 'react-redux';
import actions from '../actions/counter';
import store from '../store/configureStore';
import {Link} from './link';

type Properties = {
  filter: string,
  children?: JSX.Element, // Children props must be optional since the children props are not declare the "normal" way
}

type State = {
  filter: string
}

export class FilterLink extends React.Component<Properties, State> {
  private unsubscribe: Function;

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log('force update');
      this.forceUpdate();
    });
  };

  componentWillUnmount() {
    console.log('unsubscribe');
    this.unsubscribe();
  }

  render() {
    const {children, filter} = this.props;
    this.state = store.getState();

    return (
      <Link active={filter === this.state.filter} onClick={() => {store.dispatch({
          type: 'SET_FILTER',
          filter: filter
        })
      }}>
        {children}
      </Link>
    );
  }
}
