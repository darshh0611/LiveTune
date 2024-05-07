import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <h5 className="text-lg font-bold">Quick Links</h5>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                        <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-lg font-bold">Follow Us</h5>
                    <div className="mt-2 flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div>
                    <h5 className="text-lg font-bold">Contact Us</h5>
                    <p className="mt-2">Email: support@livetune.com</p>
                    <p>Phone: +1 234 567 8900</p>
                </div>
                <div>
                    <h5 className="text-lg font-bold">Newsletter</h5>
                    <form className="mt-2">
                        <input type="email" placeholder="Your email" className="p-2 mr-2 w-full" />
                        <button type="submit" className="p-2 bg-orange-500 hover:bg-orange-700">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="text-center text-sm mt-4">
                © 2024 LiveTune. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
