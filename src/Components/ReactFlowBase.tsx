//@ts-nocheck
import React, { useCallback, useMemo, useRef, useState } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Connection,
  Edge,
  Background,
  EdgeChange,
  NodeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';
import ContextMenu from '../ReactFlow/ContextMenu';
import  {  applyEdgeChanges, applyNodeChanges } from 'reactflow';
import TextUpdaterNode from '../ReactFlow/TextUpdaterNode'

const initialNodes = [
  { 
    id: 'node-1', 
    type: 'input',
    // type:'textupdater'
    position: { x: 0, y: 0 }, 
    data: { label: 'Parent Node' } 
  },
];

let id = 1;
const getId = () => `${id++}`;

const AddNodeOnEdgeDrop = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [menu, setMenu] = useState<{ id?: string; top: number; left?: number; right?: number; bottom?: number }>();
  const ref = useRef<any>(null);
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback(
    (params: Edge | Connection) => {
      // reset the start node on connections
      connectingNodeId.current = null;
      setEdges((eds) => addEdge(params, eds))
    },
    [],
  );

  const onConnectStart = useCallback((_:any, { nodeId }:any) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event:any) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id:id,
          // type:'textUpdater',
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id }),
        );
      }
    },
    [screenToFlowPosition],
  );
  const onNodeContextMenu = useCallback(
    (event: { preventDefault: () => void; clientY: number; clientX: number; }, node: { id: any; }) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = ref.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: (event.clientY < pane.height - 200 && event.clientY) as number,
        left: (event.clientX < pane.width - 200 && event.clientX) as number,
        right: (event.clientX >= pane.width - 200 && pane.width - event.clientX) as number,
        bottom:
         ( event.clientY >= pane.height - 200 && pane.height - event.clientY) as number,
      });
    },
    [setMenu],
  );
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onPaneClick = useCallback(() => setMenu({}), [setMenu]);
  const nodeTypes = useMemo(
    ()=> ({
      textUpdater: TextUpdaterNode
    }) ,[])
  return (
    <div style={{height:'100vh'}} ref={reactFlowWrapper}>
      <ReactFlow
      ref={ref}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onConnectStart={onConnectStart}
      onConnectEnd={onConnectEnd}
      onPaneClick={onPaneClick}
      onNodeContextMenu={onNodeContextMenu}
      nodeTypes={nodeTypes}
      onNodeClick={(event: React.MouseEvent, node: Node)=>{
        console.log(node)
      }}
      fitView
      
    >
      <Background />

      
      {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
    </ReactFlow>
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <AddNodeOnEdgeDrop />
  </ReactFlowProvider>
);
