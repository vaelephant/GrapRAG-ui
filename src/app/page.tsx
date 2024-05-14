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

    <>
      <h1 className="text-center mt-6">LLM Business Intelligence 基于人工智能的商业智能</h1>
      <div ref={visRef} style={{ width: "100%", height: "1200px" }} />
    </>

  );
}
