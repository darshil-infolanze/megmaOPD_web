import React from "react";

const services = [
  {
    title: "Online Courses",
    description:
      "Access a wide range of courses across various domains designed by industry experts and educators.",
    icon: "🎓",
  },
  {
    title: "Certifications",
    description:
      "Earn recognized certificates that showcase your skills and boost your career opportunities.",
    icon: "📜",
  },
  {
    title: "Live Classes",
    description:
      "Join live sessions with instructors to interact, ask questions, and deepen your understanding in real time.",
    icon: "🧑‍🏫",
  },
  {
    title: "Mentorship",
    description:
      "Get personal guidance from experienced mentors who help you set goals and stay on track.",
    icon: "🤝",
  },
  {
    title: "Career Support",
    description:
      "Resume building, mock interviews, and job search support to help you transition into a new career.",
    icon: "💼",
  },
  {
    title: "Community Access",
    description:
      "Join a vibrant community of learners and professionals to collaborate, network, and grow together.",
    icon: "🌐",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          Everything you need to learn, grow, and succeed — all in one place.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4 text-indigo-500">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
