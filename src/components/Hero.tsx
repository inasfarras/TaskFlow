'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppMockup from './AppMockup';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-full"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-[1.15]">
                <span className="block mb-1">Streamline Your</span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight pb-1">
                  Project{' '}
                  <span className="inline-block">Management</span>
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 sm:text-xl max-w-xl">
                TaskFlow helps teams collaborate seamlessly, automate workflows, and achieve more together. Experience the future of project management.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                  >
                    Get Started
                  </a>
                </div>
                <div className="rounded-md">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-white text-blue-600 hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full"
            >
              <AppMockup />
              {/* Purple gradient background effect */}
              <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-purple-600/30 via-blue-600/30 to-purple-600/30 rounded-xl blur-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 