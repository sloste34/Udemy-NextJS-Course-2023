import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/portfolio'>Go to Portfolio Page</Link>
        </li>
        <li>
          <Link href='/clients'>Go to Clients Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
