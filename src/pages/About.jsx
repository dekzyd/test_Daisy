const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl lg:text-6xl font-bold tracking-widest">
              KornaMart
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        At KornaMart, we're committed to offering high-quality products at
        affordable prices, ensuring a seamless shopping experience for our
        customers.
      </p>
      <p className="mt-6 text-2xl font-bold leading-8 max-w-2xl mx-auto">
        What set's us apart?
      </p>
      <ul className="mt-2 text-md leading-8 max-w-2xl mx-auto">
        <li>
          <span className="font-semibold">Quality Assurance: </span>
          Every product in our inventory meets strict quality standards.
        </li>
        <li>
          <span className="font-semibold">Affordable Pricing: </span>
          Get the best value for your money with our competitive prices.
        </li>
        <li>
          <span className="font-semibold">Exceptional Service:</span> Our
          dedicated team is ready to assist you at every step.
        </li>
      </ul>
      <p className="mt-6 text-2xl font-bold leading-8 max-w-2xl mx-auto">
        Categories
      </p>
      <div className="mt-2 text-md leading-8 max-w-2xl mx-auto">
        <li>Home & Living</li>
        <li>Fashion & Accessories</li>
        <li>Electronics & Gadgets</li>
        <li>Beauty & Personal Care</li>
        <li>Gifts & Special Occasions</li>
      </div>
      <p className="mt-6 text-2xl font-bold leading-8 max-w-2xl mx-auto mb-2.5">
        Get in Touch
      </p>
      <div className="mx-auto max-w-2xl">
        <li>
          <span className="font-semibold">Phone: </span>
          +234706563211.
        </li>
        <li>
          <span className="font-semibold">Email: </span>
          KornaMart@hotmail.co.uk.
        </li>
      </div>
    </>
  );
};

export default About;
