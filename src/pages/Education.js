import React, { useEffect, useState } from 'react';
// import ED2 from '../assets/images/Eduction/ed2.png';
import ED5 from '../assets/images/Eduction/E3.png';
import ED6 from '../assets/images/Eduction/E4.png';
import ED7 from '../assets/images/Eduction/E5.png';
import ED8 from '../assets/images/Work/Work2.png';
import WorkingHome from '../components/Working_Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationCard = () => {
  const [imageLoaded, setImageLoaded] = useState({
    ED5: false,
    ED7: false,
    ED6: false,
  });

  const handleImageLoad = (key) => {
    setImageLoaded((prev) => ({ ...prev, [key]: true }));
  };

  const cards = [
    {
      src: ED5,
      alt: "Dishing Diversity Through Our House of Brands",
      title: "Dishing Diversity Through Our House of Brands",
      desc: "Food & You is an exciting culinary destination, offering distinct brands in the school canteen, which embody unique culinary concepts. Each brand provides a diverse menu of mouth-watering options, from local comfort food to international cuisines.",
      key: "ED5",
      duration: 1000,
    },
    {
      src: ED7,
      alt: "Health & Wellbeing",
      title: "Health & Wellbeing",
      desc: "We work closely with nutritionists to design vibrant meals and snacks that fuel student-athletes with energy-boosting nutrients and flavors, helping them stay motivated.",
      key: "ED7",
      duration: 1500,
    },
    {
      src: ED6,
      alt: "Technology as an Enabler",
      title: "Technology as an Enabler",
      desc: "We leverage digital solutions to streamline processes such as ordering and payment, enhancing the student experience and adapting our services to their needs.",
      key: "ED6",
      duration: 2000,
    },
  ];

  return (
    <div className="container pt-5 mt-5">
      <div className="row px-2">
        {cards.map(({ src, alt, title, desc, key, duration }) => (
          <div
            className="col-md me-lg-3 me-md-3 mb-3 zoom-in"
            data-aos="fade-up"
            data-aos-duration={duration} // Dynamic duration
            key={key}
          >
            <div className={`image-container ${imageLoaded[key] ? "loaded" : "loading"}`}>
              <img
                src={src}
                alt={alt}
                className="img-fluid pt-2 pt-md-3 pt-lg-3 pb-md-4 pb-lg-4"
                onLoad={() => handleImageLoad(key)}
              />
            </div>
            <h2 className="display-6 fw-bold pt-4">{title}</h2>
            <p className="fs-5">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


const Success = () => (
  <div
    className='container mt-4 mt-md-4 mt-lg-4 mb-lg-5 mb-md-5 px-4 pb-5'
  >
    <div className='row pt-lg-5'>
      <div className='col-lg-5 col-md align-self-center'>
        <img src={ED8} className="img-fluid" alt="Unlock the Key to Student Success" />
      </div>
      <div className='col-lg col-md ms-lg-5'>
        <h2 className='display-5 fw-bold pb-3'>Unlock the Key to Student <br /> Success</h2>
        <p className='fs-5'>
          There are campuses, and then there are Fusion Spice-managed campuses. What sets us apart is our deep understanding of what works best for students and faculty. Our global insights, extensive experience, and commitment to delighting our clients drive the difference.
        </p>
        <p className='fs-5'>
          Explore how Fusion Spice’s transformative services are reshaping campus experiences. From innovative dining solutions to dynamic student events, we ensure every aspect of campus life is safe, healthy, exciting, and productive.
        </p>
        <p className='fs-5'>
          Dive into behind-the-scenes stories of our chefs, discover new trends in campus dining, and see how our solutions make a tangible impact. Get a glimpse of our success stories and upcoming projects that are set to redefine campus life.
        </p>
      </div>
    </div>
  </div>
);

const HappyUs = () => (
  <div
    className="container my-5 px-lg-5 pt-lg-5"
    data-aos="fade-up"
    data-aos-duration="2000"
  >
    <div className='row'>
      <div className='col'>
        <h2 className='display-4 fw-bold py-md-4 py-lg-4'>Happy Clients, Happy Us</h2>
        <p className='display-6 pt-4 pt-lg-0 pt-md-0'>We are delighted to unveil a transformative collaboration with Fusion Spice that will reshape our educational landscape.</p>

      </div>
    </div>
  </div>
);

function Education() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

        <WorkingHome
          img={<img src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXAlMjBvZiUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D" className="img-fluid rounded w-100" alt="Working Together to Support Every Student’s Journey" />}
          head="Nurturing Growth-Centric Educational Communities"
          Bname="Contact Us"
          link="/contact"
        />

      <div className='container '>
        <div className='row'>
          <h1 className='display-3 pb-5 pt-5'>Collaborating with Schools and Colleges to Enhance Campus Well-being</h1>
          <p className='fs-5'>Fusion Spice collaborates with schools and universities across India to offer nutritious and contemporary dining experiences, state-of-the-art digital campus environments, and top-tier facilities. We are dedicated to understanding the factors that influence students' choices and behaviors, enabling us to equip educators with the essential support and resources needed to enhance campus life every day.</p>
          <p className='fs-5'>At Fusion Spice, we go beyond traditional dining services by offering mobile ordering, delivery, next-gen vending options, and dynamic retail experiences. With cutting-edge digital technology, including custom mobile dining apps, contactless payment systems, and real-time menu updates, we make campus dining more seamless and efficient than ever. Our innovative solutions are designed to meet the needs of fast-paced, tech-savvy students, ensuring a convenient and modern dining experience that aligns with their lifestyles.</p>
          <p className='fs-5'>Our mission is to foster optimal campus environments that enable students to excel both academically and socially. Through proactive maintenance, we maximize the longevity of campus infrastructure, ensuring that classrooms, dormitories, and recreational facilities are always well-maintained. Our commitment to sustainability, including energy-efficient operations and waste reduction initiatives, helps create a greener, more eco-conscious campus that supports long-term environmental well-being.</p>
          <p className='fs-5'>At Fusion Spice, our greatest joy comes from exceeding the expectations of students, faculty, and staff. We take immense pride in improving the quality of life for campus communities by delivering comforting, safe, and healthy experiences every day, ensuring that everyone feels valued and supported in their daily interactions.</p>
        </div>

      </div>
      <EducationCard />
      <Success />
      <HappyUs />
    </>
  );
}

export default Education;
