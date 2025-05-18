import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-start space-y-4">
            <Logo width="120px" />
            <p className="text-sm text-gray-400">
              &copy; 2023 DevUI. All Rights Reserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Legals</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-blue-400 transition"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        <p>&copy; 2023 DevUI, All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default Footer;
