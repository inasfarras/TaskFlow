'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Author {
  name: string;
  role: string;
  image: string;
}

interface Testimonial {
  content: string;
  author: Author;
}

const testimonials: Testimonial[] = [
  {
    content: "TaskFlow has transformed how our team collaborates. The automation features have saved us countless hours.",
    author: {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "https://picsum.photos/seed/sarah/200"
    }
  },
  {
    content: "The analytics dashboard gives us incredible insights into our team's performance. Highly recommended!",
    author: {
      name: "Michael Chen",
      role: "Team Lead at InnovateCo",
      image: "https://picsum.photos/seed/michael/200"
    }
  },
  {
    content: "We've seen a 40% increase in productivity since switching to TaskFlow. The real-time collaboration is game-changing.",
    author: {
      name: "Emily Rodriguez",
      role: "Project Director at GrowthLabs",
      image: "https://picsum.photos/seed/emily/200"
    }
  }
];

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loved by teams worldwide
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col"
            >
              {/* Quote icon */}
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-blue-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              {/* Testimonial content */}
              <p className="mt-4 text-lg text-gray-600 flex-grow">{testimonial.content}</p>

              {/* Author info */}
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <div className="relative h-12 w-12">
                    <Image
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">{testimonial.author.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.author.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 