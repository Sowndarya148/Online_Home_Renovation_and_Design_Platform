import   React from 'react';
import FooterPage from './FooterPage';
import {  Link } from "react-router-dom";
// import profile1 from 'src\assests\profile1.jpg';
// import profile2 from 'C:\Users\sownd\Desktop\homereno\homereno\src\assests\profile2.jpeg';

const HomePage = () => {
  const TestimonialsData = [
    {
      image: "https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
      name: 'John Alendon',
      comment:
        'I am extremely satisfied with the home renovation services provided by this company. They transformed my old house into a modern and elegant living space, exceeding my expectations',
    },
    {
      image: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?size=626&ext=jpg&ga=GA1.2.75649200.1688809125&semt=sph",
      name: 'Natasha',
      comment:
        'The experts at Home Renovation provided expert advice and creative solutions for our home makeover. Their dedication and hard work made the renovation process stress-free and enjoyable',
    },
    {
      image: "https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?size=626&ext=jpg&ga=GA1.1.75649200.1688809125&semt=sph",
      name: 'Alexiya',
      comment:
        'The designers and contractors at Home Renovation are top-notch professionals. They brought new life to our living room and turned it into a cozy and inviting space.',
    },
    // {
    //   image: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&ga=GA1.2.75649200.1688809125&semt=sph",
    //   comment:
    //     'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //   name: 'John Alendon',
    // },
    // {
    //   image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.75649200.1688809125&semt=sph",
    //   comment:
    //     'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //   name: 'Natasha',
    // },
    // {
    //   image: "https://img.freepik.com/free-photo/young-handsome-repairman-blue-overall-yellow-helmet-holding-toolbox-wrench-bearded-plumber-standing-isolated-color-wall-man-working-holds-toolbox-with-instrument_176532-13862.jpg?size=626&ext=jpg&ga=GA1.1.75649200.1688809125",
    //   comment:
    //     'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    //   name: 'Alex Hormonzi',
    // },
  ];

  return (
    <div className="home-container">
      {/* Container 1 */}
      <div className="container-1">
        <div className="background-image">
          {/* Add your background image here */}
          <img src='https://img.freepik.com/free-vector/renovation-workers-repairing-apartment-repairmen-overalls-decorating-painting-walls-vector-illustration-excursion-people-culture-concept_74855-10144.jpg?size=626&ext=jpg&ga=GA1.1.75649200.1688809125&semt=ais' alt='home renovation'></img>
        </div>
        <div className="welcome-content">
          <h1>Welcome to Home Renovation</h1>
          <h2>Transforming houses into your dream homes
            
          </h2>
          <div className="buttons">
            {/* <button>View Services</button>  */}
            <button><Link to="/register">Register</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div className="container-2">
        <h2>Contact Our Best Professionals,Contrators,Interior designers and Architect</h2>
        <div className="card-container">
          {/* Card 1 */}
          {/* <div className="card">
            <img src="C:\Users\sownd\Desktop\homereno\homereno\src\assests\profile1.jpg" alt="contractor" />
            <h3>Contractor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla blandit dolor vitae blandit.
            </p>
          </div> */}
          {/* Card 2 */}
          {/* <div className="card">
            <img src="C:\Users\sownd\Desktop\homereno\homereno\src\assests\profile2.jpeg" alt="interior designer" />
            <h3>Interior Designer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla blandit dolor vitae blandit.
            </p>
          </div> */}
          {/* Card 3 */}
          <div className="card">
            <img src="https://t3.ftcdn.net/jpg/05/14/73/66/240_F_514736696_0bvWz8ZxyUpetRaKggjGymvbxINA1Eum.jpg" alt="professional" />
            {/* <h3>Professional</h3> */}
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              fringilla blandit dolor vitae blandit.
            </p> */}
          </div>
        </div>
      </div>
      

      {/* Container 3 - Testimonials Section */}
      <div className="container-3">
        <h2>Testimonials</h2>
        <div className="testimonial-container">
          {TestimonialsData.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.comment}</p>
            </div>
            
          ))}
        </div>
      </div>
      <FooterPage/>
    </div>
  );
};

export default HomePage;
