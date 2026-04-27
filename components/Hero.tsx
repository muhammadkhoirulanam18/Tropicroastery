import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v2.0 is now live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
          Scale your SaaS without the <span className="gradient-text">complexity.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The all-in-one platform to manage your infrastructure, automate workflows, and accelerate growth with minimalist design.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group">
            Start Free Trial
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
            <Play size={18} fill="currentColor" />
            Watch Demo
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-card rounded-[2rem] p-2 sm:p-4 overflow-hidden">
             <div className="bg-slate-50 rounded-[1.5rem] border border-slate-200/50 aspect-video flex items-center justify-center">
                {/* Using a placeholder-like styling for the "app screenshot" */}
                <div className="w-full h-full bg-linear-to-br from-slate-50 to-slate-100 p-8 flex flex-col gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="grid grid-cols-12 gap-4 h-full">
                    <div className="col-span-3 bg-white rounded-xl shadow-sm border border-slate-200/50" />
                    <div className="col-span-9 space-y-4">
                       <div className="h-8 bg-white rounded-xl shadow-sm border border-slate-200/50 w-1/3" />
                       <div className="grid grid-cols-3 gap-4">
                          <div className="h-32 bg-white rounded-xl shadow-sm border border-slate-200/50" />
                          <div className="h-32 bg-white rounded-xl shadow-sm border border-slate-200/50" />
                          <div className="h-32 bg-white rounded-xl shadow-sm border border-slate-200/50" />
                       </div>
                       <div className="h-full bg-white rounded-xl shadow-sm border border-slate-200/50" />
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
