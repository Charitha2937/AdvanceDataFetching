export const revalidate = false; // SSG

export default function About() {
  console.log("About Page rendered (STATIC - SSG)");

  return (
    <div>
      <h1>About Page (Static)</h1>
      <p>This page is rendered at build time.</p>
    </div>
  );
}
