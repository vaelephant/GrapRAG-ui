import { NextRequest, NextResponse } from 'next/server';
import neo4j, { Driver, auth, Session, Record } from 'neo4j-driver';

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

export async function GET(req: NextRequest): Promise<NextResponse> {
  let driver: Driver | null = null;
  let session: Session | null = null;

  try {
    // Initialize the Neo4j driver
    driver = neo4j.driver('bolt://113.250.13.252:7687', auth.basic('neo4j', 'txys666666'));
    session = driver.session();

    // Run the Cypher query
    const result = await session.run('MATCH (n)-[r]->(m) RETURN n, r, m LIMIT 50');
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    result.records.forEach((record: Record) => {
      const nodeN: Node = {
      //   id: record.get('n').identity.toInt(),
      //   label: record.get('n').labels[0],
      //  title: JSON.stringify(record.get('n').properties)
      id: record.get('n').identity.toInt(),
      label: record.get('n').properties['name'],  // 使用节点的 'name' 属性作为 label
      title: JSON.stringify(record.get('n').properties)


      };
      const nodeM: Node = {
        // id: record.get('m').identity.toInt(),
        // label: record.get('m').labels[0],
        // title: JSON.stringify(record.get('m').properties)
        id: record.get('m').identity.toInt(),
        label: record.get('m').properties['name'],  // 使用节点的 'name' 属性作为 label
        title: JSON.stringify(record.get('m').properties)


      };

      // Check for duplicate nodes before adding
      if (!nodes.find(node => node.id === nodeN.id)) {
        nodes.push(nodeN);
      }
      if (!nodes.find(node => node.id === nodeM.id)) {
        nodes.push(nodeM);
      }

      const edge: Edge = {
        from: nodeN.id,
        to: nodeM.id,
        label: record.get('r').type,
        arrows: 'to'
      };
      edges.push(edge);
    });

    // Send the response with nodes and edges
    return new NextResponse(JSON.stringify({ nodes, edges }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.error('Database connection or query error', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to connect to Neo4j: ' + error.message }), {
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
