export default function CheckPage({ params }) {
  const { slug } = params;
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>/check/{slug}</h1>
      <p>Next.js (App Router) работает! Это тестовая страница Programmatic SEO.</p>
    </main>
  );
}
