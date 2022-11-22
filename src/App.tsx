import React from 'react';
import './App.css';
import { Accordion } from './Accordion-Component';
import { accordionData } from './content'
import './styles.css';
const App = () => {
  return (
    <div className='outer-container'>
      {
        accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content}></Accordion>
        ))}

    </div>
  );
}

export default App;
