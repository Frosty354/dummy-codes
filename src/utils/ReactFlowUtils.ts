import { Node, Edge } from 'reactflow';

const findParentNode = (nodes: (Node[]), edges: Edge[], childNodeId: string): Node | null => {
  const parentEdge = edges.find((edge) => edge.target === childNodeId);

  if (!parentEdge) {
    return null; // No parent edge found
  }

  const parentNodeId = parentEdge.source;
  const parentNode = nodes.find((node) => node.id === parentNodeId);

  return parentNode || null;
};

const getChildNodeIds = (nodeId: any, nodes: any, edges: any[]):string [] => {
  const childNodeIds = [];
  const childEdges = edges.filter((edge) => edge.source === nodeId);

  for (const childEdge of childEdges) {
    childNodeIds.push(childEdge.target);
    childNodeIds.push(...getChildNodeIds(childEdge.target, nodes, edges));
  }

  return childNodeIds;
};

const buildFlowTree = (nodes:Node[],edges:Edge[]): Object=>{
    const tree={};
    return tree;
}
export { findParentNode,buildFlowTree,getChildNodeIds}