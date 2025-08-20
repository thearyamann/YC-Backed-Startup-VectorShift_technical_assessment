// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };


  const nodeHandles = [
    { 
      type: 'target', 
      position: Position.Left, 
      id: `${id}-value` 
    }
  ];

  return (
    <BaseNode title='Output' handles={nodeHandles}>
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
            value={outputType} 
            onChange={handleTypeChange}
            style={{width: '100%'}}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}