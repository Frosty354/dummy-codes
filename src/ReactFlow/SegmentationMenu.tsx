import {  SelectChangeEvent } from '@mui/material'
import React, { SetStateAction, useState } from 'react'
import { Handle, Position } from 'reactflow';

interface EditableNodeProps {
    data: {
      label: string;
      level:number;
    };
    isConnectable: boolean;
    id: string;
  }

  

const SegmentationMenu=({id,isConnectable,data}:EditableNodeProps) => {
    const [selectSegment, setSelectSegment] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectSegment(event.target.value);
  };
  return (
    <div>
        
           <div>
                <label id="demo-simple-select-label">Select Segmentation</label>
                <select    
                value={selectSegment}
                onChange={handleChange}
                >
                    <option value={'application'}>Application</option>
                    <option value={'industry'}>Industry</option>
                    <option value={'region'}>Region</option>
                </select>
           </div>
        
        <Handle type="target" position={Position.Top} id={`handle-${id}`} isConnectable={isConnectable} />
        <Handle type="source" position={Position.Bottom} id={`handle-${id}`} isConnectable={isConnectable} />
  </div>
  )
}

export default SegmentationMenu