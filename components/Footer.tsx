import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 mb-6 block">
              Nexus<span className="text-blue-600">.</span>
            </Link>
            <p className="text-slate-500 max-w-xs mb-8 leading-relaxed">
              Empowering the next generation of SaaS founders with minimalist tools and powerful infrastructure.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Github size={20} />
              </Link>
              <Link href="#" className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Integrations</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Nexus Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-slate-400 text-sm hover:text-slate-600 transition-colors">Status</Link>
            <Link href="#" className="text-slate-400 text-sm hover:text-slate-600 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
