import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'minsu', name: 'Kim Minsu' },
    { id: 'manu', name: 'Manuel' },
    { id: 'chulsu', name: 'KIM Chulsu' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
