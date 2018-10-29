import React from 'react';
import PropTypes from 'prop-types';

function TodoHeader(props) {


  return (
    <div>
      Todos:
    
      <div className="header">
        <form>
          <input placeholder="enter your todo"/>
          <button type="submit">Save Todo</button>
        </form>


      </div>
    </div>
  );
}

TodoHeader.propTypes = {
  thingsToDo: PropTypes.array,
}

TodoHeader.defaultProps = {
  thingsToDo: [],
}

export default TodoHeader;