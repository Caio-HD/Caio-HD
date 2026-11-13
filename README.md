<div align="center">
  <img src="./assets/header.svg" width="100%" alt="Caio Dias, Full Stack Developer and AI Agents" />
</div>

<div align="center">

<a href="https://linkedin.com/in/caiohsdias"><img src="https://img.shields.io/badge/LinkedIn-0B1220?style=for-the-badge&logo=linkedin&logoColor=5EEAD4" alt="LinkedIn" /></a>
<a href="mailto:caio.h.s.dias@gmail.com"><img src="https://img.shields.io/badge/Email-0B1220?style=for-the-badge&logo=gmail&logoColor=5EEAD4" alt="Email" /></a>
<a href="https://zenrick.dev"><img src="https://img.shields.io/badge/Zenrick-0B1220?style=for-the-badge&logo=googlechrome&logoColor=5EEAD4" alt="Zenrick website" /></a>
<a href="https://sementia.com.br"><img src="https://img.shields.io/badge/Sementia-0B1220?style=for-the-badge&logo=leaflet&logoColor=5EEAD4" alt="Sementia website" /></a>
<a href="https://www.hackerrank.com/profile/caio_h_s_dias"><img src="https://img.shields.io/badge/HackerRank-0B1220?style=for-the-badge&logo=hackerrank&logoColor=5EEAD4" alt="HackerRank" /></a>

<img src="https://img.shields.io/badge/Open_to-Remote_·_Contractor_·_Full--time-14B8A6?style=flat-square" alt="Open to remote, contractor and full-time" />
<img src="https://img.shields.io/badge/English-C1_(advanced)-3B82F6?style=flat-square" alt="English C1" />
<img src="https://img.shields.io/badge/Timezone-UTC--3-64748B?style=flat-square" alt="Timezone UTC-3" />

</div>

## 👋 About me

Full Stack Developer based in São Paulo, Brazil. I build the internal platforms a support team runs on, and I spend my free time making teams of AI agents work together on real software.

At **Lukos Tecnologia** (ERP and point-of-sale software for fuel stations and retail) I built the WhatsApp support CRM, an AI agent that takes the first pass on every new ticket, and the .NET installer that puts the POS system in customers' stores. Outside work I run **Zenrick**, my own platform for coordinating AI coding agents, and I co-founded **Sementia**, which builds sales and automation systems for small businesses.

## 📊 Impact at a glance

<div align="center">

| 🎫 Tickets | 💬 Messages | 🤖 AI agent | 🚀 Deploys | 🧩 Services | 📝 Commits |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **~6.7k**<br><sub>per 90 days in the CRM</sub> | **~120k**<br><sub>WhatsApp messages / 90 days</sub> | **~100/day**<br><sub>tickets handled by LUK</sub> | **~20/week**<br><sub>to production</sub> | **16**<br><sub>running in production</sub> | **~2,000**<br><sub>in 15 months at Lukos</sub> |

</div>

## 💼 What I'm building

<details open>
<summary><b>Lukos Tecnologia</b> · Full Stack Developer · <i>click to collapse</i></summary>
<br />

- **Support CRM** used by 16 agents across N1, N2 and N3, on top of the company panel. React, TypeScript, Express, Prisma and SQL Server.
- **LUK**, a level-0 AI support agent with N1 permissions, kill switch, rate caps and a full audit trail. It handles every new ticket first and escalates only what it can't solve yet.
- **AI with human approval:** handoff summaries for N2 and AI replies that wait for Send / Edit / Cancel before reaching the customer.
- **.NET 10 POS installer** with 600+ tests (xUnit, BDD, UI automation). SQL Server crash detection dropped from ~9 minutes to ~1.
- **Production:** 16 services on Docker and Dokploy, MCP servers and a RAG knowledge base over SQL Server.

</details>

<details>
<summary><b>Zenrick</b> · Founder · my platform for teams of AI agents · <i>click to expand</i></summary>
<br />

Shared memory, task routing and human approval gates for up to 17 AI coding agents working in parallel. Source is private; happy to walk through the architecture in an interview.

| Project | What it does | Stack |
|---|---|---|
| **NexusCore** | Shared memory and coordination for AI agents: hybrid search (vectors, full text, trigrams), work leases, a message board across machines and an MCP server. | `NestJS` `PostgreSQL` `pgvector` `Redis` `MinIO` `MCP` |
| **ZenKit** | Installable kit of agents, skills and rules for Claude Code and Cursor. Routes each task to the cheapest capable model and reviews every diff before merge. | `TypeScript` `MCP` |
| **Kyron** | Personal assistant on WhatsApp that answers with sources from shared memory and sends proactive briefs. | `Python` `LLMs` `Evolution API` |
| **Pixion** | AI image product: Android app, web app and a GPU engine for generation, upscaling and background removal. | `Kotlin` `Next.js` `FastAPI` `Stable Diffusion` |
| **Infrastructure** | Linux hosts on a private mesh, containers, reverse proxy, object storage, backups and monitoring. | `Docker` `Traefik` `Dokploy` `Tailscale` |

<a href="https://zenrick.dev"><img src="https://img.shields.io/badge/Visit_zenrick.dev-14B8A6?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Visit zenrick.dev" /></a>
<a href="https://zenrick.dev/zenkit"><img src="https://img.shields.io/badge/About_ZenKit-3B82F6?style=for-the-badge&logo=readthedocs&logoColor=white" alt="About ZenKit" /></a>

</details>

<details>
<summary><b>Sementia</b> · Co-founder · sales and automation for small businesses · <i>click to expand</i></summary>
<br />

- **B2B prospecting platform:** search over Brazil's public company registry, daily automatic prospecting, sales kanban and email and WhatsApp campaigns.
- **AI qualification agent** that talks to leads around the clock and hands sales a qualified contact.
- White-label versions running for clients, each with its own data, brand and deployment.

`Next.js` `React` `Supabase` `PostgreSQL` `pg-boss` `Anthropic SDK` `MCP`

<a href="https://sementia.com.br"><img src="https://img.shields.io/badge/Visit_sementia.com.br-14B8A6?style=for-the-badge&logo=leaflet&logoColor=white" alt="Visit sementia.com.br" /></a>

</details>

## 🛠️ Public projects

<table>
<tr>
<td width="50%" valign="top">

### 🔎 vektor-job-engine
Collects remote job postings from 8 boards, parses salaries in USD and BRL and keeps only the ones that fit: stack, seniority, years asked and salary floor. **82 tests, zero dependencies.**

`TypeScript` `Node.js`

<a href="https://github.com/Caio-HD/vektor-job-engine"><img src="https://img.shields.io/badge/View_code-0B1220?style=for-the-badge&logo=github&logoColor=5EEAD4" alt="View code" /></a>
<a href="https://vektor.zenrick.dev"><img src="https://img.shields.io/badge/Live_product-14B8A6?style=for-the-badge&logo=vercel&logoColor=white" alt="Live product" /></a>

</td>
<td width="50%" valign="top">

### 💰 wallethub-snapshot
Personal finance app I use for my own money: imports bank statements (OFX and CSV), reconciles transactions and sorts them into categories. Multi-tenant by organization.

`NestJS` `React` `PostgreSQL` `Redis`

<a href="https://github.com/Caio-HD/wallethub-snapshot"><img src="https://img.shields.io/badge/View_code-0B1220?style=for-the-badge&logo=github&logoColor=5EEAD4" alt="View code" /></a>

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🧭 Vektor
Career platform I run in production: live meeting copilot, a drill engine with 31 question families, and job collection and scoring. **431 automated tests.** Private source, public product.

`Next.js` `TypeScript` `PostgreSQL`

<a href="https://vektor.zenrick.dev"><img src="https://img.shields.io/badge/Open_Vektor-14B8A6?style=for-the-badge&logo=vercel&logoColor=white" alt="Open Vektor" /></a>

</td>
<td width="50%" valign="top">

### 📦 zenkit-releases
Signed executor and launcher binaries for ZenKit. Shows how the kit is distributed: versioned releases with hash and signature checks.

`Releases` `Code signing`

<a href="https://github.com/Caio-HD/zenkit-releases"><img src="https://img.shields.io/badge/View_releases-0B1220?style=for-the-badge&logo=github&logoColor=5EEAD4" alt="View releases" /></a>

</td>
</tr>
</table>

## 🧰 Tech stack

**Languages**<br />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
<img src="https://img.shields.io/badge/C%23-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt="C#" />

**Frontend**<br />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />

**Backend**<br />
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
<img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET" />
<img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />

**Data**<br />
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server" />
<img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
<img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />

**AI and agents**<br />
<img src="https://img.shields.io/badge/Claude-D97757?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude" />
<img src="https://img.shields.io/badge/MCP-0B1220?style=for-the-badge&logo=modelcontextprotocol&logoColor=5EEAD4" alt="Model Context Protocol" />
<img src="https://img.shields.io/badge/RAG_·_pgvector-0B1220?style=for-the-badge&logo=postgresql&logoColor=5EEAD4" alt="RAG with pgvector" />

**DevOps**<br />
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
<img src="https://img.shields.io/badge/Dokploy-0B1220?style=for-the-badge&logo=docker&logoColor=5EEAD4" alt="Dokploy" />
<img src="https://img.shields.io/badge/Traefik-24A1C1?style=for-the-badge&logo=traefikproxy&logoColor=white" alt="Traefik" />
<img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
<img src="https://img.shields.io/badge/Tailscale-242424?style=for-the-badge&logo=tailscale&logoColor=white" alt="Tailscale" />

**Testing**<br />
<img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" />
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
<img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Playwright" />
<img src="https://img.shields.io/badge/xUnit-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt="xUnit" />

## 📫 Let's talk

<div align="center">

Looking for a **remote full stack role**, contractor first and full-time welcome.<br />
The fastest way to reach me is LinkedIn or email.

<a href="https://linkedin.com/in/caiohsdias"><img src="https://img.shields.io/badge/Connect_on_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Connect on LinkedIn" /></a>
<a href="mailto:caio.h.s.dias@gmail.com"><img src="https://img.shields.io/badge/Send_an_email-14B8A6?style=for-the-badge&logo=gmail&logoColor=white" alt="Send an email" /></a>

</div>

<br />
<div align="center">
  <img src="./assets/footer.svg" width="100%" alt="Thanks for stopping by" />
</div>
