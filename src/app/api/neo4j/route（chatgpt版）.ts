import { NextRequest } from 'next/server';
import neo4j, { Driver, auth, Session } from 'neo4j-driver';

// Define types for the node and edge objects
interface Node {
  id: number;
  label: string;
  title: string;
}

interface Edge {
  from: number;
  to: number;
  label: string;
  arrows: string;
}

export async function GET(req: NextRequest): Promise<Response> {
  let driver: Driver | null = null;
  let session: Session | null = null;

  try {
    // Initialize the Neo4j driver
    driver = neo4j.driver('bolt://localhost:7687', auth.basic('neo4j', 'txys666666'));
    session = driver.session();

    // Query to fetch nodes
    const nodeQuery = 'MATCH (n) RETURN n LIMIT 25';
    const nodes = await session.run(nodeQuery);
    const formattedNodes = nodes.records.map(record => ({
      id: record.get('n').identity.low,
      label: record.get('n').labels[0],
      title: record.get('n').properties.title,
    }));

    // Query to fetch edges
    const edgeQuery = 'MATCH ()-[r]->() RETURN r LIMIT 25';
    const edges = await session.run(edgeQuery);
    const formattedEdges = edges.records.map(record => ({
      from: record.get('r').start.low,
      to: record.get('r').end.low,
      label: record.get('r').type,
      arrows: 'to',
    }));

    // Return nodes and edges
    return new Response(JSON.stringify({ nodes: formattedNodes, edges: formattedEdges }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Database connection or query error', error);
    return new Response(JSON.stringify({ error: 'Failed to connect to Neo4j: ' + error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    // Close the session and driver
    if (session) {
      await session.close();
    }
    if (driver) {
      await driver.close();
    }
  }
}
