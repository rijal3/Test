export default function Home() {
  return (
    <main className="container">
      <h1>Welcome to <span className="highlight">Next.js</span></h1>
      <p>Get started by editing <code>page.tsx</code></p>
      <div className="grid">
        <a href="https://nextjs.org/docs" className="card">
          <h2>Docs →</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        <a href="https://nextjs.org/learn" className="card">
          <h2>Learn →</h2>
          <p>Learn about Next.js in an interactive course.</p>
        </a>
      </div>
    </main>
  );
}