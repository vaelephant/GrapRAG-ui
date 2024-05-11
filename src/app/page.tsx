"use client";

import { useEffect, useRef } from 'react';
import useSWR from 'swr';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';

// 定义节点和边的接口
interface Node {
  id: number;
  label: string;
  title?: string;
}

interface Edge {
  from: number;
  to: number;
  label: string;
  arrows: string;
}

interface GraphData {
  nodes: Node[];
  edges: Edge[];
}

function fetchData(url: string): Promise<GraphData> {
  return fetch(url).then(response => response.json());
}

export default function Home() {
  const { data, error } = useSWR<GraphData, Error>('/api/neo4j', fetchData);
  const visRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data && visRef.current) {
      const { nodes, edges } = data;
      const graph = {
        nodes: new DataSet<Node>(nodes),
        edges: new DataSet<Edge>(edges)
      };
      const options = {};
      new Network(visRef.current, graph, options);
    }
  }, [data]);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Neo4j Graph Data</h1>
      <div ref={visRef} style={{ height: "1500px" }} />
    </div>
  );
}
