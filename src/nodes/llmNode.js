// llmNode.js

import React from 'react';
import { Position } from 'reactflow';
import BaseNode from './baseNode';

export const LLMNode = ({ id, data }) => {
  
  const nodeHandles = [
    { 
      type: 'target', 
      position: Position.Left, 
      id: `${id}-system`,
      style: { top: '33.33%' } 
    },
    { 
      type: 'target', 
      position: Position.Left, 
      id: `${id}-prompt`,
      style: { top: '66.67%' }
    },
    { 
      type: 'source', 
      position: Position.Right, 
      id: `${id}-response` 
    }
  ];

  return (
    <BaseNode title='LLM' handles={nodeHandles}>
      <div style={{width: 200, height: 80, border: '1px solid black' }}>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}