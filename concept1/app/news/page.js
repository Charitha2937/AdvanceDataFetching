export const revalidate = 20; // ISR (rebuild every 20 sec)

export default async function News() {
  console.log("News Page rendered (HYBRID - ISR)");

  const res = await fetch("https://api.github.com/zen"); // stable API
  const data = await res.text();

  return (
    <div>
      <h1>News (ISR)</h1>
      <p>Zen Message: {data}</p>
      <p>Regenerates every 20 seconds.</p>
    </div>
  );
}
