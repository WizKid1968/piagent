"use client";

import { useState } from "react";
import { 
  Shield, 
  WifiOff, 
  DollarSign, 
  Cpu,
  Lock, 
  Zap,
  Check,
  ArrowRight,
  Server,
  Mail,
  FileText,
  Calendar,
  Home as HomeIcon,
  Code,
  Sparkles,
  Terminal,
  Globe,
  Database,
  Brain,
  Rocket,
  Briefcase,
  TrendingUp,
  Users,
  MessageSquare,
  HardDrive,
  Eye,
  Fingerprint,
  Container,
  Network,
  Clock,
  Target,
  Layers,
  Settings,
  GitBranch,
  BarChart3,
  Search,
  PenTool,
  ShoppingCart,
  Headphones,
  Heart
} from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("pro");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("entrepreneur");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  // Comprehensive Skills Library
  const skills = {
    communication: [
      { icon: Mail, name: "AgentMail", desc: "Dedicated email inbox @agentmail.to — send, receive, auto-respond like a human" },
      { icon: MessageSquare, name: "Chat Bridge", desc: "Telegram, Slack, Discord integration with context-aware responses" },
      { icon: Calendar, name: "Scheduler", desc: "Calendar management, meeting booking, reminder systems" },
    ],
    productivity: [
      { icon: FileText, name: "Document Analyst", desc: "Summarize 100-page PDFs, extract clauses, compare contracts" },
      { icon: Search, name: "Research Agent", desc: "Web search, content extraction, competitive analysis" },
      { icon: PenTool, name: "Content Creator", desc: "Write emails, reports, blog posts, social media with your voice" },
    ],
    technical: [
      { icon: Terminal, name: "Terminal Access", desc: "Execute shell commands, run scripts, deploy code" },
      { icon: Code, name: "Code Assistant", desc: "Review, debug, generate code across 20+ languages" },
      { icon: GitBranch, name: "Git Operator", desc: "Commit, push, PR reviews, branch management" },
    ],
    business: [
      { icon: BarChart3, name: "Data Analyst", desc: "CSV/Excel processing, visualization, trend analysis" },
      { icon: Database, name: "CRM Sync", desc: "HubSpot, Salesforce, Airtable integration" },
      { icon: ShoppingCart, name: "E-commerce", desc: "Order processing, inventory checks, customer follow-ups" },
    ],
    system: [
      { icon: HardDrive, name: "File System", desc: "Read/write files, organize directories, batch processing" },
      { icon: Globe, name: "Browser Control", desc: "Navigate websites, fill forms, extract data, take screenshots" },
      { icon: Clock, name: "Cron Jobs", desc: "Scheduled tasks, recurring reports, automated monitoring" },
    ]
  };

  // Use Cases by Persona
  const personas = {
    entrepreneur: {
      icon: Rocket,
      title: "The Solo Founder",
      headline: "Your First Employee That Works 24/7",
      description: "Handle investor outreach, customer support, and competitor research while you build. Your agent drafts pitch decks, manages your calendar, and never sleeps.",
      tasks: [
        "Drafts personalized cold emails to investors with follow-up sequences",
        "Monitors competitor pricing and features daily",
        "Manages customer support inbox with human-like responses",
        "Creates weekly progress reports from Git commits and updates",
        "Books meetings across time zones without the back-and-forth"
      ],
      roi: "Replaces 2-3 part-time contractors ($3,000-5,000/mo)"
    },
    sales: {
      icon: TrendingUp,
      title: "The Sales Closer",
      headline: "Never Miss a Lead Again",
      description: "Qualify prospects, research decision-makers, and craft personalized outreach at scale. Your agent knows every prospect's pain points before you call.",
      tasks: [
        "Researches prospects on LinkedIn before your calls",
        "Drafts personalized cold emails using company news/triggers",
        "Auto-qualifies inbound leads via email conversation",
        "Schedules demos directly into your calendar",
        "Follows up with stalled deals automatically"
      ],
      roi: "3x pipeline velocity, 40% more meetings booked"
    },
    marketing: {
      icon: Target,
      title: "The Growth Hacker",
      headline: "Content Machine That Sounds Like You",
      description: "Generate blog posts, social content, and email campaigns while maintaining brand voice. Research keywords, analyze competitors, optimize for SEO.",
      tasks: [
        "Writes weekly blog posts from bullet points",
        "Creates social media content calendar with scheduling",
        "Analyzes competitor content strategies",
        "Drafts email newsletters with A/B test variants",
        "Monitors brand mentions and sentiment across web"
      ],
      roi: "10x content output with consistent quality"
    },
    professional: {
      icon: Briefcase,
      title: "The Executive",
      headline: "Your Chief of Staff in a Box",
      description: "Manage inbox zero, prep for meetings, draft executive communications. Your agent knows your priorities and handles the noise so you focus on decisions.",
      tasks: [
        "Summarizes long email threads with action items",
        "Preps meeting briefs with attendee backgrounds",
        "Drafts executive communications in your voice",
        "Tracks project deadlines and sends reminders",
        "Manages expense reports and documentation"
      ],
      roi: "Reclaims 15+ hours/week of admin time"
    }
  };

  // Security Features
  const securityLayers = [
    {
      icon: Container,
      title: "Docker Containerization",
      description: "Each agent runs in isolated Docker containers with restricted permissions. Compromised? It stays contained. No system-wide access, no escape routes."
    },
    {
      icon: Network,
      title: "Air-Gap Capable",
      description: "Physically disconnect from the internet and your agent keeps working. No cloud dependencies, no telemetry, no data leakage. Military-grade isolation."
    },
    {
      icon: Fingerprint,
      title: "Zero-Trust Architecture",
      description: "Every action verified. Least-privilege principles. No default passwords. Encrypted storage at rest. Your agent can't be turned against you."
    },
    {
      icon: Eye,
      title: "Complete Audit Trail",
      description: "Every command, every file access, every email logged locally. Full transparency into what your agent does. No black boxes."
    },
    {
      icon: Lock,
      title: "Full Disk Encryption",
      description: "LUKS encryption standard. Your data is unreadable without the key. Physical theft? They get hardware, not your information."
    },
    {
      icon: Shield,
      title: "No Cloud, No Leaks",
      description: "Unlike ChatGPT, Claude, or Gemini — your documents never train public models. Proprietary data stays proprietary. Period."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$399",
      description: "Personal productivity",
      specs: ["Pi 5 (4GB RAM)", "128GB Storage", "5 Core Skills", "AgentMail inbox", "Email Support (30 days)"],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      description: "Business power user",
      specs: ["Pi 5 (8GB RAM)", "256GB NVMe SSD", "15+ Skills", "AgentMail + Custom Domain", "Priority Support (90 days)", "Docker Environment", "Auto Updates"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "Teams & organizations",
      specs: ["Pi 5 (16GB RAM)", "512GB NVMe SSD", "All Skills + Custom", "Unlimited AgentMail", "White-label Option", "1 Year Premium Support", "Onboarding Call", "VPN Integration"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <img 
                  src="/PiAgent.png" 
                  alt="PiAgent" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight">PiAgent</span>
                <span className="hidden sm:inline text-slate-500 text-sm ml-2">by OpenClaw</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['Capabilities', 'Security', 'Use Cases', 'Pricing'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-900"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#waitlist"
                className="ml-4 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white rounded-full font-medium text-sm transition-all shadow-lg shadow-violet-500/25"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-violet-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 text-sm text-slate-400 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Now accepting beta testers — Ships February 28, 2026
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              An AI Employee That{" "}
              <span className="gradient-text">Actually Works</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              PiAgent is a pre-configured AI employee that lives on your desk. 
              It sends emails, manages your calendar, writes code, researches competitors — 
              and <span className="text-white font-medium">never sends your data to the cloud</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a 
                href="#waitlist"
                className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl shadow-violet-500/20 hover:shadow-violet-500/40"
              >
                Reserve Your Agent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#capabilities"
                className="flex items-center gap-2 text-slate-400 hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-colors border border-slate-800 hover:border-slate-600"
              >
                See What It Can Do
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
              {[
                { value: "0", label: "Cloud Dependencies" },
                { value: "15+", label: "Built-in Skills" },
                { value: "24/7", label: "Autonomous Operation" },
                { value: "$0/mo", label: "Subscription Cost" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Demo Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl blur opacity-20" />
            <div className="relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center text-xs text-slate-500 font-mono">piagent@localhost:~$</div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-slate-400 mb-2">$ piagent status</div>
                <div className="text-green-400 mb-4">✓ Agent online | 15 skills loaded | 0 cloud connections</div>
                <div className="text-slate-400 mb-2">$ piagent task "Draft follow-up email to ACME Corp proposal"</div>
                <div className="text-slate-300 mb-2">→ Anzing ACME Corp... <span className="text-cyan-400">[local research]</span></div>
                <div className="text-slate-300 mb-2">→ Drafting personalized email... <span className="text-cyan-400">[AgentMail: hello@agentmail.to]</span></div>
                <div className="text-slate-300 mb-4">→ Email ready for review. <span className="text-yellow-400">[Pending approval]</span></div>
                <div className="text-slate-500 italic">Your data never left the building.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Hardware Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
              <Cpu className="w-4 h-4" />
              Pocket-Sized Power
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              An AI Agent With Arms, In Your Pocket
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              This isn't software you rent. It's a physical computer — smaller than a deck of cards — 
              running a fully autonomous AI agent that can actually <span className="text-white">do things</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Raspberry Pi 5</h3>
              <p className="text-slate-400 text-sm">
                Quad-core 2.4GHz ARM CPU, up to 16GB RAM, NVMe SSD storage. 
                Desktop power in a credit-card sized package.
              </p>
            </div>
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Arms & Hands</h3>
              <p className="text-slate-400 text-sm">
                Your agent has a terminal (bash), browser (Firefox), file system, 
                and email. It can actually execute commands, not just chat.
              </p>
            </div>
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Encased</h3>
              <p className="text-slate-400 text-sm">
                Optional custom case with active cooling. Looks professional on your desk, 
                stays cool under load, tamper-evident packaging.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">OpenClaw + Raspberry Pi = Superpowers</h3>
                <p className="text-slate-400 mb-6">
                  OpenClaw is the open-source AI agent platform. We installed it on a Raspberry Pi 5, 
                  added 15+ skills, configured security, and shipped it to you ready to work.
                </p>
                <ul className="space-y-3">
                  {[
                    "Pre-configured OpenClaw agent with your custom personality",
                    "Ollama running local LLMs (Llama 3.2, Qwen 2.5)",
                    "Docker containers for isolated, secure execution",
                    "AgentMail email system with dedicated inbox",
                    "Heartbeat system for proactive task management",
                    "Full disk encryption and air-gap capability"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-950 p-8 lg:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-slate-800">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-3xl blur-xl" />
                  <div className="relative bg-slate-900 rounded-2xl border border-slate-700 p-6 w-64">
                    <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 flex flex-col items-center justify-center p-4">
                      <div className="w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-full flex items-center justify-center mb-4">
                        <Cpu className="w-16 h-16 text-cyan-400" />
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold">Raspberry Pi 5</div>
                        <div className="text-slate-500 text-sm">8GB RAM • 256GB NVMe</div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-400 text-xs">Agent Online</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center text-slate-500 text-xs">
                      Credit card sized • ~3.4 × 2.2 inches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Cloud AI Is Eating Your Data
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                Every document you upload to ChatGPT, every email you draft in Claude, 
                every proprietary insight you share — it becomes training data. 
                Your competitive advantage? Now it's OpenAI's.
              </p>
              <ul className="space-y-4">
                {[
                  "Client contracts analyzed by third-party servers",
                  "Proprietary code sent to cloud LLMs",
                  "Patient data exposed for HIPAA violations",
                  "$20-200/month per user in subscription fees"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-slate-900 rounded-2xl border border-red-500/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="font-semibold text-red-400">The Cloud AI Risk</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Data Retention</span>
                    <span className="text-red-400">30-90 days minimum</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Training Usage</span>
                    <span className="text-red-400">Opt-out buried in settings</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800">
                    <span className="text-slate-400">Compliance</span>
                    <span className="text-red-400">SOC2, not your control</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Monthly Cost (10 users)</span>
                    <span className="text-red-400">$200-2,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">15+ Skills. Infinite Possibilities.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Your agent comes pre-loaded with enterprise-grade capabilities. 
              Mix, match, and customize for your workflow.
            </p>
          </div>
          
          {Object.entries(skills).map(([category, categorySkills], catIdx) => (
            <div key={category} className="mb-12">
              <h3 className="text-lg font-semibold text-slate-300 mb-4 capitalize flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                {category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categorySkills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="group p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/30 group-hover:to-violet-500/30 transition-all">
                        <skill.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-cyan-400 transition-colors">{skill.name}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{skill.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases by Persona */}
      <section id="use-cases" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for How You Work</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From solo founders to enterprise teams — see how PiAgent adapts to your role.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.entries(personas).map(([key, persona]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                  activeTab === key
                    ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-violet-500/25"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                <persona.icon className="w-4 h-4" />
                {persona.title}
              </button>
            ))}
          </div>
          
          {/* Active Persona Content */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                  {(() => {
                    const PersonaIcon = personas[activeTab as keyof typeof personas].icon;
                    return <PersonaIcon className="w-6 h-6 text-white" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{personas[activeTab as keyof typeof personas].headline}</h3>
                  <p className="text-slate-400">{personas[activeTab as keyof typeof personas].title}</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 text-lg">
                {personas[activeTab as keyof typeof personas].description}
              </p>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-400 font-semibold mb-1">
                  <TrendingUp className="w-4 h-4" />
                  ROI Impact
                </div>
                <p className="text-slate-300 text-sm">{personas[activeTab as keyof typeof personas].roi}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-300 mb-4">What Your Agent Does:</h4>
              {personas[activeTab as keyof typeof personas].tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-slate-300">{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AgentMail Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium mb-4">
                <Mail className="w-4 h-4" />
                AgentMail Integration
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Your Agent Has Its Own Email Address
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                Every PiAgent includes AgentMail — a dedicated email inbox designed for AI agents. 
                Your agent can send, receive, and respond to emails just like a human team member.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Professional @agentmail.to address",
                  "Two-way conversation handling",
                  "Thread-aware responses with context",
                  "Human-in-the-loop approval for sends",
                  "Custom domain support (Pro+)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 font-mono text-sm">
                <span className="text-slate-500">Example:</span>
                <div className="text-cyan-400 mt-1">sarah.agent@agentmail.to</div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                  <span className="text-slate-400 text-sm">Inbox (3 new)</span>
                  <span className="text-xs text-slate-500">sarah.agent@agentmail.to</span>
                </div>
                <div className="space-y-3">
                  {[
                    { from: "john@client.com", subject: "Re: Proposal Feedback", time: "2m ago", unread: true },
                    { from: "marketing@company.com", subject: "Campaign Stats", time: "15m ago", unread: true },
                    { from: "no-reply@github.com", subject: "PR #234 Merged", time: "1h ago", unread: false },
                  ].map((email, idx) => (
                    <div key={idx} className={`p-3 rounded-lg ${email.unread ? 'bg-slate-800/50 border-l-2 border-cyan-500' : 'bg-slate-900'}`}>
                      <div className="flex justify-between items-start mb-1">
                        <span className={`text-sm ${email.unread ? 'font-semibold text-white' : 'text-slate-400'}`}>{email.from}</span>
                        <span className="text-xs text-slate-500">{email.time}</span>
                      </div>
                      <div className={`text-sm ${email.unread ? 'text-slate-300' : 'text-slate-500'}`}>{email.subject}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <Sparkles className="w-4 h-4" />
                    <span>Agent drafted 2 responses awaiting approval</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section id="security" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Enterprise-Grade Security
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built Like a Vault, Not a Cloud App</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We didn't bolt on security — we built the entire architecture around it. 
              Defense in depth, zero trust, and complete transparency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityLayers.map((layer, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-green-500/50 transition-all hover:shadow-lg hover:shadow-green-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all">
                  <layer.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">{layer.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{layer.description}</p>
              </div>
            ))}
          </div>
          
          {/* Security Comparison */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-950 border-b border-slate-800 font-semibold text-sm">
                <div className="text-slate-400">Security Feature</div>
                <div className="text-center text-red-400">Cloud AI (ChatGPT/Claude)</div>
                <div className="text-center text-green-400">PiAgent</div>
              </div>
              {[
                { feature: "Data Leaves Your Premises", cloud: "Yes — to their servers", piagent: "Never — stays on device", winner: "piagent" },
                { feature: "Training Data Usage", cloud: "Opt-out only", piagent: "Impossible — no cloud connection", winner: "piagent" },
                { feature: "Physical Control", cloud: "None — you rent access", piagent: "Full — you own the hardware", winner: "piagent" },
                { feature: "Air-Gap Capability", cloud: "No — requires internet", piagent: "Yes — works fully offline", winner: "piagent" },
                { feature: "Audit Logs", cloud: "Theirs — limited visibility", piagent: "Yours — complete transparency", winner: "piagent" },
                { feature: "Container Isolation", cloud: "Shared infrastructure", piagent: "Dedicated Docker per agent", winner: "piagent" },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 p-4 border-b border-slate-800/50 text-sm">
                  <div className="text-slate-300">{row.feature}</div>
                  <div className="text-center text-slate-500">{row.cloud}</div>
                  <div className="text-center text-green-400 font-medium">{row.piagent}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">From Box to Business Impact in Minutes</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "We Build", 
                desc: "Our engineers assemble your Pi 5, install the hardened OS, configure Docker containers, load your selected skills, and test everything.",
                details: ["Hardware assembly & thermal testing", "Docker container hardening", "Skill configuration & calibration", "48-hour burn-in testing"]
              },
              { 
                step: "02", 
                title: "We Ship", 
                desc: "Your PiAgent arrives in secure packaging. Plug in power and ethernet. No setup wizard, no command line, no IT degree required.",
                details: ["Tamper-evident packaging", "Pre-configured WiFi credentials", "Access credentials in sealed envelope", "Quick start guide included"]
              },
              { 
                step: "03", 
                title: "You Command", 
                desc: "Open the web interface, start chatting. Your agent is ready to handle emails, research, coding, or whatever you configured.",
                details: ["Web interface at piagent.local", "Natural language commands", "Approval workflows for sensitive actions", "Mobile-friendly responsive UI"]
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-7xl font-bold text-slate-800 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, didx) => (
                    <li key={didx} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-cyan-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Persona Builder */}
      <section className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-sm font-medium mb-4">
              <Brain className="w-4 h-4" />
              Exclusive to PiAgent Professional+
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Agent Persona Builder</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              This isn't ChatGPT. This isn't a generic assistant. This is <span className="text-white font-semibold">YOUR agent</span> — 
              with a personality, memory, and relationship built specifically for you.
            </p>
          </div>

          {/* The Problem */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Generic AI Forgets. Your Agent Remembers.</h3>
              <p className="text-slate-400 mb-6">
                Every time you start a new ChatGPT session, you're training a stranger. 
                Your PiAgent? It knows your quirks, your preferences, your voice — 
                because we build its personality around YOU.
              </p>
              <div className="space-y-3">
                {[
                  { label: "ChatGPT", text: "Same personality for 100M+ users" },
                  { label: "Your PiAgent", text: "Unique personality crafted for YOU" },
                ].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${idx === 0 ? 'bg-slate-900 border-slate-800' : 'bg-fuchsia-500/10 border-fuchsia-500/30'}`}>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${idx === 0 ? 'text-slate-500' : 'text-fuchsia-400'}`}>{item.label}</span>
                    <p className={`mt-1 ${idx === 0 ? 'text-slate-400' : 'text-white'}`}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 rounded-3xl blur-xl" />
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">SOUL.md</div>
                    <div className="text-xs text-slate-500">Agent Identity Kernel</div>
                  </div>
                </div>
                <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
                  <span className="text-slate-500"># Who You Are</span>{"\n"}
                  <span className="text-fuchsia-400">You are Jarvis</span> — Alex's AI{"\n"}
                  partner with hands.{"\n\n"}
                  <span className="text-slate-500"># Communication</span>{"\n"}
                  • Direct and concise{"\n"}
                  • Witty but not corny{"\n"}
                  • Challenge bad ideas{"\n"}
                  • Use emoji sparingly{"\n\n"}
                  <span className="text-slate-500"># NEVER DO</span>{"\n"}
                  • Say "As an AI..."{"\n"}
                  • Ask "How can I help?"{"\n"}
                  • Use corporate speak
                </pre>
              </div>
            </div>
          </div>

          {/* Onboarding Process */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12">How We Build Your Agent's Personality</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Questionnaire", desc: "15-minute discovery: your style, quirks, preferences, pet peeves" },
                { step: "02", title: "SOUL.md", desc: "We craft your agent's identity, voice, and behavioral rules" },
                { step: "03", title: "USER.md", desc: "Your agent learns who YOU are — your schedule, priorities, world" },
                { step: "04", title: "Evolves", desc: "Continuous learning: your agent gets smarter about you every day" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="text-5xl font-bold text-slate-800 mb-3">{item.step}</div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Questions */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mb-20">
            <h3 className="text-xl font-bold mb-6 text-center">Sample Onboarding Questions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "Do you prefer direct answers or detailed explanations?", type: "Style" },
                { q: "Should your agent crack jokes or stay serious?", type: "Tone" },
                { q: "What time do you usually start deep work?", type: "Rhythm" },
                { q: "What words should your agent NEVER use?", type: "Boundaries" },
                { q: "How do you make decisions — data or gut?", type: "Logic" },
                { q: "What does success look like for you?", type: "Values" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="px-2 py-1 rounded bg-fuchsia-500/10 text-fuchsia-400 text-xs font-medium">{item.type}</div>
                  <span className="text-slate-300 text-sm">{item.q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Memory System */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Memory That Persists</h3>
              <p className="text-slate-400 mb-6">
                Unlike cloud AI that forgets every session, your PiAgent has a 
                <span className="text-white"> four-layer memory system</span> that gets smarter over time.
              </p>
              <div className="space-y-4">
                {[
                  { layer: "Session", desc: "Current conversation context", color: "cyan" },
                  { layer: "Working", desc: "Daily notes and recent preferences", color: "violet" },
                  { layer: "Long-term", desc: "Core values and relationship patterns", color: "fuchsia" },
                  { layer: "Semantic", desc: "Searchable knowledge (RAG)", color: "green" },
                ].map((mem, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className={`w-3 h-3 rounded-full bg-${mem.color}-500`} />
                    <span className="font-medium w-24">{mem.layer}</span>
                    <span className="text-slate-400 text-sm">{mem.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-slate-900 rounded-2xl border border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-800">
                  <Database className="w-5 h-5 text-cyan-400" />
                  <span className="font-semibold">MEMORY.md</span>
                </div>
                <pre className="text-xs text-slate-400 font-mono overflow-x-auto">
                  <span className="text-slate-600"># Learned Preferences</span>{"\n"}
                  • Prefers bullet points over paragraphs{"\n"}
                  • "Urgent" means within 2 hours, not now{"\n"}
                  • Hates being asked "How can I help?"{"\n"}
                  • Loves when agent challenges bad ideas{"\n\n"}
                  <span className="text-slate-600"># Active Projects</span>{"\n"}
                  • Series A fundraising (priority: high){"\n"}
                  • Product launch March 15{"\n\n"}
                  <span className="text-slate-600"># Key Contacts</span>{"\n"}
                  • Sarah (investor) — needs formal tone{"\n"}
                  • Mike (cofounder) — casual is fine
                </pre>
              </div>
            </div>
          </div>

          {/* Heartbeat System */}
          <div className="bg-gradient-to-r from-cyan-900/20 to-violet-900/20 rounded-2xl border border-cyan-500/20 p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
                  <Clock className="w-4 h-4" />
                  Heartbeat System
                </div>
                <h3 className="text-2xl font-bold mb-4">Proactive, Not Reactive</h3>
                <p className="text-slate-400 mb-6">
                  Most AI waits for commands. Your PiAgent has a <span className="text-white">heartbeat</span> — 
                  it wakes up on a schedule, checks its responsibilities, and alerts you when something needs attention.
                </p>
                <ul className="space-y-3">
                  {[
                    "Checks email for urgent messages every 30 min",
                    "Preps meeting briefs before your calls",
                    "Follows up on sent emails automatically",
                    "Monitors competitors and alerts on changes",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-950 rounded-xl border border-slate-800 p-4">
                <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                  <span>HEARTBEAT.md</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Active</span>
                </div>
                <pre className="text-xs text-slate-300 font-mono">
                  <span className="text-slate-500">## Morning Check (8 AM)</span>{"\n"}
                  - [ ] Check calendar for today's meetings{"\n"}
                  - [ ] Review overnight emails{"\n"}
                  - [ ] Check GitHub PRs needing review{"\n\n"}
                  <span className="text-slate-500">## Afternoon (2 PM)</span>{"\n"}
                  - [ ] Follow up on emails sent 24h ago{"\n"}
                  - [ ] Check competitor pricing alerts{"\n\n"}
                  <span className="text-green-400">✓ Last run: 2 min ago</span>{"\n"}
                  <span className="text-yellow-400">⚠ 2 items need attention</span>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Invest Once. Own Forever.</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              No subscriptions. No per-seat fees. No API usage costs. 
              Buy the hardware once, your agent works for years.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((tier, idx) => (
              <div 
                key={idx}
                className={`relative p-6 rounded-2xl border ${
                  tier.popular 
                    ? "bg-gradient-to-b from-violet-900/20 to-slate-900 border-violet-500/50 shadow-xl shadow-violet-500/10" 
                    : "bg-slate-900 border-slate-800"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-xs font-semibold text-white">
                    Best Value
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-slate-500">one-time</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.specs.map((spec, sidx) => (
                    <li key={sidx} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => { setPlan(tier.name.toLowerCase()); document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className={`w-full py-3 rounded-full font-medium transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white shadow-lg shadow-violet-500/25"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              All plans include free shipping, 30-day money-back guarantee, and 1-year hardware warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the Beta Program</h2>
          <p className="text-slate-400 text-lg mb-8">
            First 100 customers get <span className="text-white font-semibold">25% off</span> and early access to new skills. 
            Beta units ship February 28, 2026.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="px-5 py-4 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="starter">Starter ($399)</option>
                  <option value="pro">Professional ($599)</option>
                  <option value="enterprise">Enterprise ($999)</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-lg transition-all shadow-xl shadow-violet-500/25"
              >
                {loading ? "Joining..." : "Join Beta — Save 25%"}
              </button>
              <p className="text-sm text-slate-500">
                No spam. Unsubscribe anytime. Your email stays private (obviously).
              </p>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-900/20 to-slate-900 border border-cyan-500/30">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-slate-400">
                We'll email you when beta units are ready. Early adopters get 25% off.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Can I really run this without internet?", a: "Yes. PiAgent works completely offline. The LLM runs locally on the Pi 5. You only need internet for initial setup (optional) and if you want email functionality." },
              { q: "What happens if someone steals the device?", a: "Full disk encryption (LUKS) protects your data. Without the decryption key, the hardware is useless to thieves." },
              { q: "How is this different from running OpenClaw myself?", a: "We do the hard work: hardware assembly, security hardening, Docker configuration, skill installation, and testing. You get a plug-and-play solution instead of a weekend project." },
              { q: "Can I add my own skills?", a: "Absolutely. PiAgent is built on OpenClaw, so you can install community skills or build your own. Enterprise plans include custom skill development." },
              { q: "What LLM does it use?", a: "We ship with optimized local models (Llama 3.2, Qwen 2.5) running via Ollama. You can also configure cloud API endpoints if needed." },
            ].map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="font-semibold mb-2">{faq.q}</h4>
                <p className="text-slate-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <img 
                  src="/PiAgent.png" 
                  alt="PiAgent" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-xl">PiAgent</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2025 PiAgent. Built on OpenClaw. Your data belongs to you.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">GitHub</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
