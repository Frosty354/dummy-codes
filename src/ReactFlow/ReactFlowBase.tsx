//@ts-nocheck
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  NodeChange,getConnectedEdges,getIncomers,getOutgoers
} from 'reactflow';
import 'reactflow/dist/style.css';
import ContextMenu from './ContextMenu';
import  {  applyEdgeChanges, applyNodeChanges } from 'reactflow';
import TextUpdaterNode from './TextUpdaterNode'

import './styles.css'
import DownloadButton from './DownloadButton';
import { findParentNode, getChildNodeIds } from '../utils/ReactFlowUtils';
import SegmentationMenu from './SegmentationMenu';
import { v4 as uuidv4 } from 'uuid';

//parent node canont be deleted
//hint screen

const initialValues={
    "initialEdges": [
    ],
    "initialNodes": [
      {
        "id": "3e7ce7b1-89a5-4594-9159-a5e0e48cf13b",
        "position": {
            "x": 0,
            "y": 0
        },
        "data": {
          //comes from create project
            "label": "{{ProjectName}}",
            "level": 0
        },
        
    }
        
    ]
}

let id = 1;
const getId = () => `${uuidv4()}`;


const ReactFlowBase = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes] = useNodesState(initialValues.initialNodes);
  const [edges, setEdges] = useEdgesState(initialValues.initialEdges);
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


  const findLevel=(parentNodeId)=>{
    const parentNode = nodes.find((node) => node.id === parentNodeId);
    const parentLevel=parentNode?parentNode.data.level||0:0;
    return parentLevel
  }

  const onConnectEnd = useCallback(
    (event:any) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains('react-flow__pane');

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const parentNodeId = connectingNodeId.current;

        // Calculate the level of the new node based on its parent
        
        const newLevel=findLevel(parentNodeId)+1
       
        const newNode = {
          id:id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}`,level:newLevel, },
          origin: [0.5, 0.0],
          // source: connectingNodeId.current,
          // target:id
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id }),
        );
      }
    },
    [screenToFlowPosition,nodes],
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
  const onPaneClick = useCallback(() => 
  setMenu({}), [setMenu]);
  const nodeTypes = useMemo(
    () => ({
      default: (props) => {
        
        const { id, data,isConnectable } = props;
        
          if(data.level%2){
            return <SegmentationMenu data={data} id={id} isConnectable={isConnectable}/>
          }
          else return <TextUpdaterNode data={data} id={id} isConnectable={isConnectable} />;
        
      },
    }),
    []
  );

  // [
  //   nodes,edges,
  //   structure:{
  //   id,
  //   data,
  //   children:[
  //     {
  //     id,
  //     data,
  //     children:[]
  //   },
  //   {
  //     id,
  //     data,
  //     children:[]
  //   },
  //   {
  //     id,
  //     data,
  //     children:[]
  //   }]
  // }]
const onNodesDelete=useCallback(
  (deleted)=>{
    let childNodeIds=[]
      deleted.forEach((item)=>{
         childNodeIds=getChildNodeIds(item.id,nodes,edges)
      })
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          
          const outgoers = getOutgoers(node, nodes, edges);
          console.log("outgoers",outgoers)
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({ id: `${source}->${target}`, source, target }))
          );

          return [...remainingEdges];
        }, edges)
        
      );

      const remainingNodes = nodes.filter(node => !childNodeIds.includes(node.id));
      setNodes(remainingNodes);
      
  },[nodes,edges])

// useEffect(()=>{
//   console.log("check nodes",nodes)
  
// console.log("check edges",edges)
// },[nodes])
  return (
    <div style={{height:'100vh'}} ref={reactFlowWrapper}>
      <ReactFlow
      ref={ref}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodesDelete={onNodesDelete}
      onConnectStart={onConnectStart}
      onConnectEnd={onConnectEnd}
      onPaneClick={onPaneClick}
      onNodeContextMenu={onNodeContextMenu}
      nodeTypes={nodeTypes}
      onNodeClick={(event: React.MouseEvent, node: Node)=>{
        
        // console.log("Parent node",findParentNode(nodes,edges,node.id))
        // console.log('get all child nodes',getChildNodeIds(node.id,nodes,edges))
      }}
      fitView
      
    >
      <Background />

      
      {menu && <ContextMenu  onClick={onPaneClick} {...menu} />}
      <DownloadButton />
    </ReactFlow>
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <ReactFlowBase />
  </ReactFlowProvider>
);
