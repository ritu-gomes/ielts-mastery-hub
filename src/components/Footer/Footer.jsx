import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-red-500 bg-opacity-70 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo/Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-red-500">IELTS Mastery Hub</h3>
            <p className="mt-2 text-gray-300">Empowering your IELTS success with AI-driven tools.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-red-500">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-red-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-red-500">Contact Us</h4>
            <ul className="mt-2 space-y-2">
              <li>Email: <a href="mailto:support@ieltsmasteryhub.com" className="hover:text-red-400 transition-colors">support@ieltsmasteryhub.com</a></li>
              <li>Phone: <span className="text-gray-300">+1 (555) 123-4567</span></li>
              <li>Follow us:
                <div className="flex justify-center md:justify-start gap-4 mt-2">
                  <a href="#" className="hover:text-red-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-red-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-blue-800 pt-4">
          <p className="text-gray-300">Copyright © {new Date().getFullYear()} IELTS Mastery Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;