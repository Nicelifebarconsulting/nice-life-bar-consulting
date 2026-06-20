# Nice Life Bar Consulting — Website

## Run locally
```
npm install
npm run dev
```

## Deploy
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → sign in with GitHub → "New Project" → select this repo → Deploy.
3. Vercel auto-detects Vite/React and builds it. You'll get a live URL in ~1 minute.
4. To add your custom domain (bought on Namecheap or elsewhere): in Vercel project settings → Domains → add your domain → copy the DNS records Vercel gives you → paste them into your domain registrar's DNS settings.

## Form
The contact form currently opens the visitor's email client with their answers
pre-filled, addressed to nicelifeconsulting@gmail.com. To make it submit silently
in the background instead, sign up at formspree.io, get a form endpoint, and swap
the `mailto:` logic in `src/App.jsx` (function `handleSubmit` in the `Brief`
component) for a `fetch()` POST to that endpoint.

## Logo
The logo image lives at `public/logo.jpeg` and is referenced as `/logo.jpeg`
in the code. Replace this file to update the logo.
