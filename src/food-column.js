import React, { Component } from 'react';
import { carbPercentages } from './foods';

class FoodColumn extends Component {
  render() {
    const { choices, column, unit } = this.props;

    return (
      <div className='foodcolumn flex-box column'>
        <div className='column-title'>{column}</div>
        <div>
          {choices.map((choice, i) => {
            return <div key={i} className='food'>{choice}</div>
          })}
        </div>
      </div>
    );
  }
}

export default FoodColumn;
