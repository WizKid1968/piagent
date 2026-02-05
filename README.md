# PiAgent

**Your AI Agent, In a Box. Private. Local. Yours.**

PiAgent ships pre-configured Raspberry Pi 5 computers running custom OpenClaw AI agents. No cloud required. No subscriptions. Complete privacy.

![PiAgent Landing Page](https://angelaiassist.github.io/piagent/)

## What is PiAgent?

PiAgent is a turnkey local AI solution for people who want the power of AI without sacrificing privacy or dealing with recurring subscription fees.

Each PiAgent includes:
- Raspberry Pi 5 (4GB/8GB/16GB RAM options)
- Pre-configured OpenClaw AI agent
- Local LLM inference (Ollama)
- Ready-to-use skills (Personal Assistant, Document Analyst, Email Manager, etc.)
- Web interface for interaction
- Full disk encryption

## Key Benefits

- 🔒 **Complete Privacy** — Your data never leaves the device
- 🌐 **Works Offline** — No internet required
- 💰 **No Subscriptions** — Buy once, own forever
- ⚡ **Zero Latency** — Local inference, instant responses
- 🔧 **Fully Hackable** — Open source, customizable
- 🏢 **Enterprise Ready** — Air-gap capable, physically secure

## Pricing

| Plan | Price | Specs |
|------|-------|-------|
| Starter | $399 | Pi 5 (4GB), 128GB, 1 Skill |
| Professional | $599 | Pi 5 (8GB), 256GB NVMe, 3 Skills |
| Enterprise | $999 | Pi 5 (16GB), 512GB NVMe, Unlimited Skills |

Early adopters get 25% off!

## Tech Stack

- **Hardware:** Raspberry Pi 5 + NVMe SSD
- **OS:** Debian-based PiAgent OS
- **AI Runtime:** Ollama for local LLM inference
- **Agent Framework:** OpenClaw
- **Models:** Llama 3.2, Qwen 2.5, Gemma (local)

## Repository Structure

```
piagent-landing/
├── src/
│   └── app/
│       ├── layout.tsx    # Root layout with metadata
│       ├── page.tsx      # Landing page component
│       └── globals.css   # Tailwind CSS styles
├── dist/                 # Static export (GitHub Pages)
├── next.config.ts        # Next.js config with static export
└── package.json
```

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# The static site is exported to /dist
```

## Deployment

This site is configured for GitHub Pages deployment:

1. Build: `npm run build`
2. The `dist/` folder contains the static site
3. Configure GitHub Pages to serve from `dist/` branch or folder

## Links

- 🌐 **Live Site:** https://angelaiassist.github.io/piagent/
- 📧 **Contact:** angelaiassist@gmail.com

## License

MIT License - See LICENSE file for details.

---

*Built with Next.js, Tailwind CSS, and OpenClaw.*
