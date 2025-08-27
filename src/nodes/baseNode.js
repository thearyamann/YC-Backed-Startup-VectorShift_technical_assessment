//baseNode.js

import React from 'react';
import { Handle } from 'reactflow'


function BaseNode({title, children, handles = []}) {

return (
  <div className="base-node">
<div className="node-title">{title}</div>
      <div className="node-content">{children}</div>
   {handles && handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}


</div>
)
}
export default BaseNode;
