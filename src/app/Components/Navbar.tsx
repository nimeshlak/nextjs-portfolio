'use client'; // Mark this component as a Client Component
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import HomeIcon from '@/app/assets/home.png';
import WorkIcon from '@/app/assets/work.png';
import BlogIcon from '@/app/assets/blog.png';
import ContactIcon from '@/app/assets/contact.png';
import Home from '@/app/home/page';

// Dynamically import components
const HomePage = dynamic(() => import('@/app/home/page'));
const WorkPage = dynamic(() => import('@/app/work/page'));
const BlogPage = dynamic(() => import('@/app/blog/page'));
const ContactPage = dynamic(() => import('@/app/contact/page'));

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState('home'); // Track active component

  return (
    <div>
      {/* Navbar */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2  max-w-md mx-auto p-4">
        <ul className="bg-black flex justify-center space-x-10 p-3 rounded-full shadow-lg w-[300px]">
          <li>
            <button onClick={() => setActiveComponent('home')}>
              <Image
                src={HomeIcon}
                alt="Home Icon"
                width={24}
                height={24}
                className="hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"
              />
            </button>
          </li>
          <li>
            <button onClick={() => setActiveComponent('work')}>
              <Image
                src={WorkIcon}
                alt="Work Icon"
                width={24}
                height={24}
                className="hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"
              />
            </button>
          </li>
          <li>
            <button onClick={() => setActiveComponent('blog')}>
              <Image
                src={BlogIcon}
                alt="Blog Icon"
                width={24}
                height={24}
                className="hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"
              />
            </button>
          </li>
          <li>
            <button onClick={() => setActiveComponent('contact')}>
              <Image
                src={ContactIcon}
                alt="Contact Icon"
                width={24}
                height={24}
                className="hover:scale-125 transition-transform duration-200 ease-in-out cursor-pointer"
              />
            </button>
          </li>
        </ul>
      </div>

      {/* Render Active Component */}
      <div className="p-4">
        {activeComponent === 'home' && <Home />}
        {activeComponent === 'work' && <WorkPage />}
        {activeComponent === 'blog' && <BlogPage />}
        {activeComponent === 'contact' && <ContactPage />}
      </div>
    </div>
  );
};

export default Navbar;