import React from "react";
import { DraggableNode } from "./draggableNode";

const toolConfig = [
  { type: "customInput", 
   label: "Input", 
   category: "Start" 
},

  { type: "trigger", 
   label: "Trigger", 
   category: "Start" 
},

  { type: "start", 
    label: "Start", 
    category: "Start" 
   },
  { type: "browser", 
   label: "Browser", 
   category: "Start" 
},
  { type: "customOutput", 
   label: "Output", 
   category: 
   "Start" 
},
  { type: "note", 
   label: "Note",
    category: "Start" 
   },
  { type: "group",
    label: "Group", 
    category: "Start"
    },

];

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-search text-gray-400"
    viewBox="0 0 16 16"
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
);

export const PipelineToolbar = () => {
  const activeTab = "Start";

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-20 w-full max-w-full mx-auto">
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search Nodes"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex border-b border-gray-200 mb-4">
        <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
          Start
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          Objects
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          Knowledge
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
          AI
        </button>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {toolConfig
          .filter((tool) => tool.category === activeTab)
          .map(({ type, label }) => (
            <DraggableNode key={type} type={type} label={label} />
          ))}
      </div>
    </div>
  );
};
