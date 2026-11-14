// Builds assets/activity.svg: monthly contributions for the last 12 months.
import { writeFileSync } from "node:fs";

const user = process.env.GH_USER || "Caio-HD";
const token = process.env.GITHUB_TOKEN;
const query = `{user(login:"${user}"){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionCount}}}}}}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
});
if (!res.ok) throw new Error(`GitHub API ${res.status}`);
const cal = (await res.json()).data.user.contributionsCollection.contributionCalendar;

const byMonth = new Map();
for (const w of cal.weeks) for (const d of w.contributionDays) {
  const k = d.date.slice(0, 7);
  byMonth.set(k, (byMonth.get(k) || 0) + d.contributionCount);
}
const months = [...byMonth.entries()].slice(-12);
const names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const fmt = (n) => n.toLocaleString("en-US");

const W = 840, H = 300, left = 40, right = 20, top = 92, base = 250;
const max = Math.max(...months.map(([, v]) => v), 1);
const slot = (W - left - right) / months.length, bw = slot * 0.56;

const bars = months.map(([k, v], i) => {
  const h = Math.max(3, (v / max) * (base - top));
  const x = left + i * slot + (slot - bw) / 2, y = base - h;
  const label = names[Number(k.slice(5)) - 1];
  return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" rx="5" fill="url(#g)"><animate attributeName="height" from="0" to="${h.toFixed(1)}" dur="0.8s" fill="freeze"/><animate attributeName="y" from="${base}" to="${y.toFixed(1)}" dur="0.8s" fill="freeze"/></rect>
  <text x="${(x + bw / 2).toFixed(1)}" y="${(y - 8).toFixed(1)}" class="v">${fmt(v)}</text>
  <text x="${(x + bw / 2).toFixed(1)}" y="${base + 22}" class="m">${label}</text>`;
}).join("\n  ");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${fmt(cal.totalContributions)} contributions in the last year">
  <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5EEAD4"/><stop offset="1" stop-color="#0F766E"/></linearGradient></defs>
  <style>text{font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif}.t{fill:#e6edf3;font-size:30px;font-weight:700}.s{fill:#8b949e;font-size:14px}.v{fill:#c9d1d9;font-size:12px;text-anchor:middle}.m{fill:#8b949e;font-size:13px;text-anchor:middle}</style>
  <rect width="${W}" height="${H}" rx="14" fill="#0d1117" stroke="#30363d"/>
  <text x="${left}" y="50" class="t">${fmt(cal.totalContributions)}</text>
  <text x="${left}" y="74" class="s">contributions in the last 12 months · most in private repositories</text>
  <line x1="${left}" y1="${base}" x2="${W - right}" y2="${base}" stroke="#30363d"/>
  ${bars}
</svg>
`;
writeFileSync("assets/activity.svg", svg);
console.log(`activity.svg: ${cal.totalContributions} contributions, ${months.length} months`);
