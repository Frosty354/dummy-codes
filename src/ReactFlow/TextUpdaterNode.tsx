import React, { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

interface EditableNodeProps {
  data: {
    label: string;
  };
  isConnectable: boolean;
  id: string;
}

const TextUpdaterNode: React.FC<EditableNodeProps> = ({ data, isConnectable, id }) => {
  const [nodeLabel,setNodeLabel]=useState(data.label)
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setNodeLabel(evt.target.value);
    // Here, you can update the node data with the new value
    // For example, you can call a function to update the node data in the parent component
  }, []);

  return (
    <div className="editable-node">
      <div>
        <input
          placeholder="Enter label"
          id="text"
          name="text"
          value={nodeLabel}
          onChange={onChange}
          className="nodrag"
        />
      </div>
      <Handle type="target" position={Position.Top} id={`handle-${id}`} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Bottom} id={`handle-${id}`} isConnectable={isConnectable} />
    </div>
  );
};

export default TextUpdaterNode;
