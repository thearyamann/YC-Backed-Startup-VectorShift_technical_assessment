// /src/nodes/TextNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './BaseNode'; 


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const nodeHandles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`
    }
  ];

  return (

    <BaseNode title='Text' handles={nodeHandles}>
      <label>
        Text:
        <input 
          type="text" 
          value={currText} 
          onChange={(e) => setCurrText(e.target.value)} 
          style={{width: '100%'}}
        />
      </label>
    </BaseNode>
  );
}