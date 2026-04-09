import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="bg-[#0f172a] text-gray-300 py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          <div className="flex flex-col items-start space-y-5">
            <Logo width="120px" />
            <p className="text-sm leading-relaxed text-gray-400">
              Building the future of blogging with modern tech stacks. Share your stories with the world.
            </p>
          </div>

       
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Features</Link></li>
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Pricing</Link></li>
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Affiliate Program</Link></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Account</Link></li>
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Help Center</Link></li>
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Legals</h3>
            <ul className="space-y-4 text-sm">
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Terms & Conditions</Link></li>
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Privacy Policy</Link></li>
              <li><Link className="hover:text-indigo-400 transition-colors duration-200" to="/">Licensing</Link></li>
            </ul>
          </div>

        </div>

      
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 ChaiBlog. All Rights Reserved by Abdul Kreem Shah.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">GitHub</span>
            <span className="hover:text-white cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
