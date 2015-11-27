import * as React from 'react';
import {FilterLink} from './filterLink';

type Properties = {
  filter: string,
  onFilterClick: Function
};

export class FilterPanel extends React.Component<Properties, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const {filter, onFilterClick} = this.props;
    return(
      <p>
        Show:
        {' '}
        <FilterLink filter='SHOW_ALL' onClick={onFilterClick} currentActive={filter}>
          All
        </FilterLink>

        {' '}
        <FilterLink filter='SHOW_ACTIVE' onClick={onFilterClick} currentActive={filter}>
          Active
        </FilterLink>

        {' '}
        <FilterLink filter='SHOW_COMPLETED' onClick={onFilterClick} currentActive={filter}>
          Completed
        </FilterLink>
      </p>
    );
  }
}
