import React from "react";

export default function AboutSedap() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "https://i.pinimg.com/736x/65/86/5c/65865c974dce86868c642cda1ef601ec.jpg",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-2">About Sedap</h1>
            <p className="text-lg">Home / About</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Column */}
        <div className="flex gap-4 justify-center">
          <img
            src="https://i.pinimg.com/736x/72/2b/7d/722b7d8569e376c26bb546f936ee9a26.jpg"
            alt="Basket of grapes"
            className="w-1/2 object-cover rounded-md shadow-md"
          />
          <img
            src="https://i.pinimg.com/736x/d4/bc/71/d4bc7114ac1bd59cac7fa230daae97db.jpg"
            alt="Fresh vegetables"
            className="w-1/2 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Text Column */}
        <div>
          <p className="text-green-600 font-semibold mb-1">Get to Know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
            We Provide Quality  <br /> Food
          </h2>
          <p className="text-gray-600 mb-4">
            Sedap Market is the practical solution for those who crave delicious meals without the hassle. 
            We offer a variety of ready-to-eat dishes, from meat and vegetable delicacies to a range of 
            noodles—hygienically packaged and ready to enjoy anytime.
          </p>
          <p className="text-gray-600 mb-6">
            Carrying the concept of “Fast, Delicious, and Practical,” each of our products is prepared using 
            high-quality ingredients and features a signature homemade taste. Sedap Market is here to meet 
            your daily needs—whether it's a quick breakfast, a lunch at the office, or a family dinner at home.
          </p>
          <p className="text-gray-600 mb-6">
            With a constantly growing menu, we are committed to providing convenience, flavor, and satisfaction 
            in every dish. Enjoy the ease of shopping and the delight of homemade cooking—only at Sedap Market.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span><strong>Magnis Dis Nascet</strong><br />Lorem ipsum is free do sit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✔</span>
              <span><strong>Libero id Ege</strong><br />Lorem ipsum is free do sit</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
