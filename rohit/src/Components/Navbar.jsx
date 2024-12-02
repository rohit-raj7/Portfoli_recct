import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Testimonails" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>
        <div className="cursor-pointer">
          <p onClick={() => setShowMobileMenu(true)} className="md:hidden w-13 h-13 text-3xl text-white rounded-full cursor-pointer">&#8801;</p>
        </div>
      </div>
      {/* Mobile Menu and Overlay */}
      {showMobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="fixed top-0 right-0 w-30 h-screen bg-gray-300 z-30">
            <div className="flex justify-end p-6 cursor-pointer">
              <p
                onClick={() => setShowMobileMenu(false)}
                className="md:hidden w-12 h-12 text-2xl text-black rounded-full"
              >
                &#10005;
              </p>
            </div>
            <ul className="flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium">             
               <a href="#Header " className="px-4 py-2 rounded-full inline-block">Home</a>
             <a href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
             <a href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
             <a href="#Testimonails" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
          </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
