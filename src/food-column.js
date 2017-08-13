import React, { Component } from 'react';

class FoodColumn extends Component {
  render() {
    const { choices } = this.props;

    return (
      <div className='foodcolumn flex-box column'>
        {choices.map((choice, i) => {
          return <div key={i} className='food'>{choice}</div>
        })}
      </div>
    );
  }
}

export default FoodColumn;
