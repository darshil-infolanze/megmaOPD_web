import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import TeamImage from '../assets/team-banner.jpg';

// Animation variant
const FadeIn = (delay = 0.2) => ({
  initial: { opacity: 0.3, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: 'easeInOut' },
  },
});

const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Lead Instructor',
    img: 'https://i.pravatar.cc/150?img=1',
    linkedin: '#',
    twitter: '#',
    email: '#',
  },
  {
    name: 'Jamie Lee',
    role: 'Product Designer',
    img: 'https://i.pravatar.cc/150?img=2',
    linkedin: '#',
    twitter: '#',
    email: '#',
  },
  {
    name: 'Riya Singh',
    role: 'Curriculum Developer',
    img: 'https://i.pravatar.cc/150?img=3',
    linkedin: '#',
    twitter: '#',
    email: '#',
  },
];

const OurTeam = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Banner Section */}
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-4 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold">
            Meet the Team <br /> Behind the Magic
          </h1>
          <p className="text-gray-600">
            Passionate. Experienced. Dedicated. Our team brings online education to life.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <img
            src={TeamImage}
            alt="Team"
            className="w-[300px] md:w-[400px] object-cover drop-shadow"
          />
        </motion.div>
      </div>

      {/* Team Cards */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Amazing Team
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                variants={FadeIn(0.2 + idx * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <div className="flex justify-center gap-4 text-indigo-600 text-lg">
                  <a href={member.linkedin}><FaLinkedin /></a>
                  <a href={member.twitter}><FaTwitter /></a>
                  <a href={member.email}><FaEnvelope /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
