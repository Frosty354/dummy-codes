import { IconButton, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';
import EditIcon from '@mui/icons-material/Edit';
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
const[textDisabled,setTextDisabled]=useState(true);
  return (
    <div >
      
        
        <TextField
          name={'text'}
          value={nodeLabel}
          onChange={onChange}
        
          size='small'
          disabled={textDisabled}
          InputProps={{
            endAdornment:
            <IconButton size='small' onClick={()=>setTextDisabled(prevState=>!prevState)}><EditIcon color={'action'}/></IconButton>
          }}
          
        />
      
      <Handle type="target" position={Position.Top} id={`handle-${id}`} isConnectable={isConnectable} />
      <Handle type="source" position={Position.Bottom} id={`handle-${id}`} isConnectable={isConnectable} />
    </div>
  );
};

export default TextUpdaterNode;
