import { Zap, Shield, BarChart3, Users, Globe, Cpu } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Built on top of the latest edge computing technologies for sub-millisecond latency.",
    icon: Zap,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and automated threat detection keep your data safe 24/7.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Real-time Analytics",
    description: "Deep insights into your performance with interactive charts and custom reporting.",
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Team Collaboration",
    description: "Seamlessly work together with shared workspaces and granular permission control.",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Global Scale",
    description: "Deploy to over 200+ regions worldwide with a single click and automatic scaling.",
    icon: Globe,
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "AI Powered",
    description: "Leverage machine learning to automate repetitive tasks and optimize workflows.",
    icon: Cpu,
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Powerful Features</h2>
          <p className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Everything you need to <span className="gradient-text">succeed.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
