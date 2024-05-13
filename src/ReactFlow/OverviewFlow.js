import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';

import {
  nodes as initialNodes,
  edges as initialEdges,
} from './SecondaryFlow/initial-elements';
import AnnotationNode from './SecondaryFlow/AnnotationNode';
import ToolbarNode from './SecondaryFlow/ToolbarNode';
import ResizerNode from './SecondaryFlow/ResizerNode';
import CircleNode from './SecondaryFlow/CircleNode';
import TextNode from './SecondaryFlow/TextNode';
import ButtonEdge from './SecondaryFlow/ButtonEdge';

import 'reactflow/dist/style.css';
import './SecondaryFlow/overview.css';

const nodeTypes = {
  annotation: AnnotationNode,
  tools: ToolbarNode,
  resizer: ResizerNode,
  circle: CircleNode,
  textinput: TextNode,
};

const edgeTypes = {
  button: ButtonEdge,
};

const nodeClassName = (node) => node.type;

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  return (
    <div style={{height:'100vh'}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        className="overview"
      >
        <MiniMap zoomable pannable nodeClassName={nodeClassName} />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default OverviewFlow;
