import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';


//@ts-ignore
function TextUpdaterNode({ data, isConnectable,id }) {
  const onChange = useCallback((evt: { target: { value: any; }; }) => {
   
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node">
     
      <div>
        
        <input placeholder="enter" id="text" name="text" onChange={onChange} className="nodrag" />
      </div>
      
      <Handle type="source" position={Position.Bottom} id={id} isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
