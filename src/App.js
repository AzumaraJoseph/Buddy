import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>

    </>

  );
};

export default App;



<ScrollingText text={scrollingText} />

<SalesOffComponent />

<div className="serve">
    <img src="/assets/img/serveImg.png" alt="Serve You" />;
</div>





SalesOffComponent
// import React, { useState, useEffect } from 'react';
// import './SalesOffComponent.css'; // Import your CSS file

// const SalesOffComponent = () => {
//     // const images = [
//     //     process.env.PUBLIC_URL + '/assets/img/sales_off_1.png',
//     //     process.env.PUBLIC_URL + '/assets/img/sales_off_2.png',
//     //     process.env.PUBLIC_URL + '/assets/img/sales_off_3.png',
//     //     process.env.PUBLIC_URL + '/assets/img/sales_off_4.png',

//     // ];

//     // const [currentImage, setCurrentImage] = useState(0);

//     // useEffect(() => {
//     //     const interval = setInterval(() => {
//     //         setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     //     }, 3000);
//     //     return () => clearInterval(interval);
//     // }, []);

//     // return (
//     //     <div className="salesOff-container">
//     //         <div className="salesOff-left-content">
//     //             <h1>Black Friday</h1>
//     //             <h2>Sales Off</h2>
//     //             <p>Enjoy our promo of 15% off for every purchase made today, offer ends by 11:59pm</p>
//     //             <button>Order Now</button>
//     //             <div className="brand">
//     //                 Tailore
//     //                 <span className="indicator-span"> {/* Added span for indicators */}
//     //                     {images.map((_, index) => (
//     //                         <div
//     //                             key={index}
//     //                             className={`indicator ${index === currentImage ? 'active' : ''}`}
//     //                         ></div>
//     //                     ))}
//     //                 </span>
//     //             </div>
//     //         </div>
//     //         <div className="salesOff-right-content">
//     //             {/* <div className="image-slider">
//     //                 <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
//     //             </div> */}
//     //             <div className="image-slider">
//     //             {images.map((image, index) => (
//     //                 <img
//     //                     key={index}
//     //                     src={image}
//     //                     alt={`pic ${index + 1}`}
//     //                     className={`image ${index === currentImage ? 'active' : ''}`}
//     //                 />
//     //             ))}
//     //         </div>
//     //         </div>
//     //     </div>
//     // );

//     const slides = [ // Array of slide objects
//         {
//             image: process.env.PUBLIC_URL + '/assets/img/sales_off_1.png',
//             title: 'Black Friday Sales Off',
//             // subtitle: '',
//             description: 'Enjoy our promo of 15% off for every purchase made today, offer ends by 11:59pm',
//         },
//         {
//             image: process.env.PUBLIC_URL + '/assets/img/sales_off_2.png',
//             title: 'Checkout Latest Designs Deals',
//             // subtitle: '',
//             description: 'Experience innovation at its finest',
//         },
//         {
//             image: process.env.PUBLIC_URL + '/assets/img/sales_off_3.png',
//             title: 'Dress Smart Using our Dress Clearance',
//             // subtitle: '',
//             description: 'Enjoy our promo of 15% off for every purchase made today, offer ends by 11:59pm',
//         },
//         {
//             image: process.env.PUBLIC_URL + '/assets/img/sales_off_4.png',
//             title: 'Get Quality Dresses Here Savings',
//             // subtitle: '',
//             description: 'We offer premium or nothing, our dresses are rated 100%',
//         },
//     ];

//     const [currentSlide, setCurrentSlide] = useState(0); // Use slide index

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//         }, 3000);
//         return () => clearInterval(interval);
//     }, []);

//     const currentContent = slides[currentSlide]; // Get content for current slide

//     return (
//         <div className="salesOff-container">
//             <div className="salesOff-left-content">
//                 <h1>{currentContent.title}</h1> {/* Dynamic content */}
//                 <h2>{currentContent.subtitle}</h2>
//                 <p>{currentContent.description}</p>
//                 <button>Order Now</button>
//                 <div className="brand">
//                     Tailore
//                     <span className="indicator-span">
//                         {slides.map((_, index) => (
//                             <div
//                                 key={index}
//                                 className={`indicator ${index === currentSlide ? 'active' : ''}`}
//                             ></div>
//                         ))}
//                     </span>
//                 </div>
//             </div>
//             <div className="salesOff-right-content">
//                 <div className="image-slider">
//                     {slides.map((slide, index) => ( // Use slide object
//                         <img
//                             key={index}
//                             src={slide.image} // Access image from slide object
//                             alt={`pic ${index + 1}`}
//                             className={`image ${index === currentSlide ? 'active' : ''}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SalesOffComponent;



