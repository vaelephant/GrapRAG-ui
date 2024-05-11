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

    // Perform a simple test query to check the connection
    await session.run('RETURN 1');
    console.log("Connected successfully to Neo4j.");

    // Since the query was successful, proceed with other operations or just confirm the connection
    return new Response(JSON.stringify({ message: "Connected successfully to Neo4j." }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error:any) {
    console.error('Database connection or query error', error);
    // If there's an error, it could be due to a connection issue or a query execution problem
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
