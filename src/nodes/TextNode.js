//textnode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './'; 

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };


  const nodeHandles = [
    { 
      type: 'source', 
      position: Position.Right, 
      id: `${id}-value` 
    }
  ];

  return (

    <BaseNode title='Input' handles={nodeHandles}>
      <div>
        <label style={{width: 200, height: 80, border: '1px solid black'}}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            style={{width: '100%', boxSizing: 'border-box'}}
          />
        </label>
        <label style={{display: 'block'}}>
          Type:
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            style={{width: '100%'}}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}

