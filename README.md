Customer Support Platform
Next-Generation, Multi-Tenant, Customer Support System

A modern customer support platform combining ticketing, multichannel inbox, (Future Development- AI copilots, knowledge base automation, chatbot builder, workflow automation, analytics,) and more — built for enterprise scale and SaaS multi-tenancy.

🌐 Live Demo (Netlify Deployment)

The project is deployed on Netlify for preview and testing: (Only UI)

🔗 Live URL: https://cust-support-app.netlify.app/

(Replace with your actual link once deployed)

🌟 Key Capabilities
🔥 Core Modules (v1–v2)
A. Authentication & User Management

Email/password login

MFA/2FA

SSO (Google, Microsoft, Slack, GitHub)

Role-based access control (RBAC)

Organization / tenant switching

API keys for integrations

Session/device management

🔥 B. Multichannel Inbox

Unified inbox for all communication channels:

Website chat widget

Email

WhatsApp

Instagram DM

Facebook Messenger

X (Twitter)


🔥 C. Ticketing System

Core: Create/manage tickets

Status: Open/Pending/Resolved/Closed

Priorities & Tags

Departments

SLA tracking

Canned responses

Ticket merging


🔮 Future Roadmap (v3–v10)

Automated knowledge base updates

Voice AI support (callbots)

CRM integrations

AI Chatbot Builder


🏗️ Tech Stack
Frontend

React (Latest)

TypeScript

Next.js or Vite

Redux Toolkit (global state: theme, user, settings)

TanStack Query (server caching)

TailwindCSS

React Hook Form + Zod

React.lazy + Suspense (code splitting)


📁 Suggested Folder Structure
/src
  /app
    /auth
    /dashboard
    /tickets
    /settings
    /chat
  /components
    /ui
    /forms
    /layout
  /modules
    /auth
    /tickets
    /inbox
    /chatbot
    /knowledge-base
  /hooks
  /lib
  /store (Redux)
  /services (API + Query)
  /types
  /utils
  /styles


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
