import React from 'react';

const Accordion = ({ items }) => {
  // creates a new array called item > renderedItems out of the Items list of stuff
  const renderedItems = items.map((item) => {
    // using React.Fragment instead of div makes the extra border around the element go away.
    // It's now a JSX element instead of an HTML one.
    return (
      <React.Fragment key={item.title}>
        <div className='title active'></div>
        <i className='dropdown icon'></i>
        {item.title}
        <div className='content active'>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
