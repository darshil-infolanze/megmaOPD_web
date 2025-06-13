import React from "react";

const FeatureCard = ({ image, title, description = [] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-200">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      {/* Title */}
      <h3 className="text-[18px] font-bold text-black mb-4">{title}</h3>

      {/* Description */}
      <ul className="list-none space-y-2 text-[15px] text-black">
        {Array.isArray(description) && description.length > 0 ? (
          description.map((item, index) => (
            <li key={index}>
              {item.bold && <strong>{item.bold}</strong>}
              {item.text}
            </li>
          ))
        ) : (
          <li>No description available.</li>
        )}
      </ul>
    </div>
  );
};

export default FeatureCard;
