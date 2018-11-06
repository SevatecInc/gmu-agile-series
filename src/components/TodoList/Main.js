import React from 'react';
import PropTypes from 'prop-types';

function TodoList(props) {

  const {items} = props;

  if(!items.length) {
    return <div className="empty-message">Nothing to see here.</div>
  }

  return (
    <ul className="list-items">
    {
      items.map(item => <li key={item} className="item">{item}</li>)
    }
    </ul>
  );
}

TodoList.propTypes = {
  items: PropTypes.array,
}

TodoList.defaultProps = {
  items: [],
}

export default TodoList;