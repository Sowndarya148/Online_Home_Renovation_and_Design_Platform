import React from "react";
import "../styles/services.css"
import {Link} from 'react-router-dom'
// import FooterPage from './FooterPage';

const Services=()=>{
    const ServicesData = [
        {
          id: 1,
          title: "Kitchen Remodeling",
          desc: "Transform your kitchen into a beautiful and functional space with our professional remodeling services.",
          cover:"https://img.freepik.com/free-vector/renovation-repair-works-isometric-composition-with-character-handyman-assembling-furniture-kitchen_1284-63242.jpg?size=626&ext=jpg&ga=GA1.2.75649200.1688809125&semt=ais",
        },
        {
          id: 2,
          title: "Bathroom Renovation",
          desc: "Create a luxurious and relaxing bathroom retreat with our expert renovation solutions.",
          cover: "https://img.freepik.com/free-vector/plumber-concept-with-career-work-symbols-isometric-vector-illustration_1284-81752.jpg?size=626&ext=jpg&ga=GA1.1.75649200.1688809125&semt=ais",
        },
        {
          id: 3,
          title: "Flooring Installation",
          desc: "Upgrade your home with high-quality flooring installation services tailored to your preferences.",
          cover: "https://img.freepik.com/premium-vector/laying-tiles-home-worker-installing-small-ceramic-tiles-bathroom-floor-applying-mortar-with-trowel-isometric-vector-illustration_589019-2333.jpg?size=626&ext=jpg&ga=GA1.1.75649200.1688809125&semt=ais",
        },
        {
          id: 4,
          title: "Interior Works",
          desc: "The most precious wealth your have is your Health.Keep you fit and fine with the top health specialist",
          cover: "https://img.freepik.com/free-vector/room-repair-isometric-composition-with-interior-elements_1284-27121.jpg?size=626&ext=jpg&ga=GA1.2.75649200.1688809125&semt=ais",
        },
        {
          id: 5,
          title: "Adding or renovating a room",
          desc: "The foresee the future your always wanted your patner and career",
          cover:"https://img.freepik.com/free-vector/renovation-isometric-composition_1284-18093.jpg?size=626&ext=jpg&ga=GA1.1.75649200.1688809125&semt=ais",
        },
        {
            id: 6,
            title: "Roofing repairs or replacement",
            desc: "Show you right, keep you and your properties safe from the threats and other thief by all means.",
            cover:"https://img.freepik.com/free-vector/roofing-services-abstract-concept_335657-3164.jpg?size=626&ext=jpg&ga=GA1.2.75649200.1688809125&semt=ais",
        },
      ]
      return (
        <>
            <section className="services topMarign">
                <div className="conatiner">
                    <div className="heading">
                        <h1 className="top">Type of Our Services</h1>
                    </div>
                    <div className="contain grid topMargin">
                        {ServicesData.map((val) => {
                            return (
                                <div className="box" key={val.id}>
                                    {/* Use Link component to navigate to the contact page */}
                                    <Link to="/contact">
                                        <div className="img">
                                            <img src={val.cover} alt={val.title} />
                                        </div>
                                    </Link>
                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <p className="para">{val.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;





