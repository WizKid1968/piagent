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
  Sparkles
} from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("pro");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  const features = [
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Your data never leaves the device. No cloud processing, no data mining, no surveillance."
    },
    {
      icon: WifiOff,
      title: "Works Offline",
      description: "Internet connection optional. Your agent runs entirely on-device, anywhere, anytime."
    },
    {
      icon: DollarSign,
      title: "No Subscriptions",
      description: "Buy once, own forever. No monthly fees, no API costs, no usage limits."
    },
    {
      icon: Cpu,
      title: "OpenClaw Powered",
      description: "Built on the extensible OpenClaw agent architecture. Add skills, customize behavior."
    },
    {
      icon: Lock,
      title: "Physically Secure",
      description: "You own the hardware. Air-gap capable. Full disk encryption standard."
    },
    {
      icon: Zap,
      title: "Zero Latency",
      description: "No network round-trips. Instant responses. Local inference at 8+ tokens/sec."
    }
  ];

  const skills = [
    { icon: Sparkles, name: "Personal Assistant", desc: "Calendar, reminders, notes, tasks" },
    { icon: FileText, name: "Document Analyst", desc: "Summarize, extract, compare documents" },
    { icon: Mail, name: "Email Manager", desc: "Draft, organize, auto-respond" },
    { icon: Server, name: "Research Assistant", desc: "Search, summarize, cite sources" },
    { icon: Code, name: "Code Helper", desc: "Review, explain, debug code" },
    { icon: HomeIcon, name: "Home Automator", desc: "IoT control, scripts, routines" },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$399",
      description: "Perfect for personal use",
      specs: ["Pi 5 (4GB RAM)", "128GB Storage", "1 Pre-configured Skill", "Email Support (30 days)"],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      description: "Best for power users",
      specs: ["Pi 5 (8GB RAM)", "256GB NVMe Storage", "3 Custom Skills", "Priority Support (90 days)", "Auto Updates"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "For teams & organizations",
      specs: ["Pi 5 (16GB RAM)", "512GB NVMe Storage", "Unlimited Skills", "White-label Option", "1 Year Premium Support", "Onboarding Call"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">PiAgent</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
              <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
              <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
              <a href="#waitlist" className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white px-4 py-2 rounded-full font-medium transition-all">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-slate-400 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now accepting early adopters
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Your AI Agent,{" "}
            <span className="gradient-text">In a Box</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-10">
            Pre-configured Raspberry Pi 5 computers running custom OpenClaw AI agents. 
            Private. Local. Yours. No subscriptions. No cloud required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#waitlist"
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all glow-cyan"
            >
              Reserve Yours
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#features"
              className="flex items-center gap-2 text-slate-400 hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-colors border border-slate-800 hover:border-slate-600"
            >
              Learn More
            </a>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Ships Pre-Configured
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              30-Day Guarantee
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              Free Shipping
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why PiAgent?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Cloud AI services own your data. We don't. PiAgent puts you back in control.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all hover:glow-cyan"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-violet-500/30 transition-all">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready-to-Use Skills</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Pre-configured agents for common tasks. Or build your own with our skill SDK.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <skill.icon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{skill.name}</h3>
                  <p className="text-sm text-slate-400">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500">
              + More skills available in the skill store. Custom skill development available for Enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Plug-and-Play Simple</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              No setup required. We do the hard work so you don't have to.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "We Build", desc: "We assemble, configure, and test your PiAgent with your selected skills." },
              { step: "02", title: "We Ship", desc: "Your PiAgent arrives pre-configured. Just plug in power and ethernet." },
              { step: "03", title: "You Use", desc: "Start chatting with your agent immediately via web interface or API." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl font-bold text-slate-800 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Buy once, own forever. No subscriptions. No surprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((tier, idx) => (
              <div 
                key={idx}
                className={`relative p-6 rounded-2xl border ${
                  tier.popular 
                    ? "bg-gradient-to-b from-violet-900/20 to-slate-900 border-violet-500/50 glow-violet" 
                    : "bg-slate-900 border-slate-800"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{tier.description}</p>
                <div className="text-4xl font-bold mb-6">{tier.price}</div>
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
                      ? "bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  Select {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-slate-400 text-lg mb-8">
            Be among the first to get your PiAgent. Early adopters receive 25% off.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 rounded-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="px-5 py-4 rounded-full bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="starter">Starter ($399)</option>
                  <option value="pro">Professional ($599)</option>
                  <option value="enterprise">Enterprise ($999)</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full font-semibold text-lg transition-all glow-cyan"
              >
                {loading ? "Joining..." : "Join Waitlist — 25% Off"}
              </button>
              <p className="text-sm text-slate-500">
                No spam. Unsubscribe anytime. We respect your privacy (obviously).
              </p>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-gradient-to-b from-cyan-900/20 to-slate-900 border border-cyan-500/30">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-slate-400">
                We'll email you when PiAgent is ready. Early adopters get 25% off.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">PiAgent</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2025 PiAgent. Built with OpenClaw. Your data belongs to you.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
