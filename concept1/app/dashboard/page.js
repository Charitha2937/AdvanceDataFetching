export const dynamic = "force-dynamic"; // SSR

export default async function Dashboard() {
  console.log("Dashboard Page rendered (DYNAMIC - SSR)");

  const res = await fetch("https://api.github.com", { cache: "no-store" });
  const data = await res.json();

  return (
    <div>
      <h1>Dashboard (SSR)</h1>
      <p>GitHub API current_user_url: {data.current_user_url}</p>
    </div>
  );
}
