// toolbar.js

import { DraggableNode } from './draggableNode';

const toolConfig = [{
   type:"customInput",
   label:"Input"
},
{
   type:"llm",
   label:"LLM"
},
{
   type:"customOutput",
   label:"Output"
},
{
   type:"text",
   label:"Text"
},
{
   type:"aws",
   label:"AWS"
},
]

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {toolConfig.map(({type,label})=>(<DraggableNode type={type} label={label} />))
}
            </div>
        </div>
    );
};
