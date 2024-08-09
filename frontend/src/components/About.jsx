import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          We are a team of passionate developers dedicated to creating amazing web experiences. Our mission is to deliver high-quality applications that meet our clients' needs and exceed their expectations.
        </p>
        <p className="text-gray-600">
          Our team specializes in modern web technologies and we are committed to staying up-to-date with the latest trends and best practices in the industry. We believe in the power of collaboration and strive to foster a culture of continuous learning and improvement.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
