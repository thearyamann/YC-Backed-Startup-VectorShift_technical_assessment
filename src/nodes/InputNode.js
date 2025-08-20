// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  
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
        <label style={{display: 'block', marginBottom: '10px'}}>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={(e) => setCurrName(e.target.value)}
            style={{width: '100%', boxSizing: 'border-box'}}
          />
        </label>
        <label style={{display: 'block'}}>
          Type:
          <select 
            value={inputType} 
            onChange={(e) => setInputType(e.target.value)}
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