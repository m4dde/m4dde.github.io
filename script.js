// const sections = document.querySelectorAll("section");
// const sectionId = current.getAttribute("id");
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//   let scrollY = window.scrollY;
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;

//     const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
//     sectionId = current.getAttribute("id");
    
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelector(".navigation a[href='#" + sectionId + "']").classList.add("active");
//     } else {
//       document.querySelector(".navigation a[href='#" + sectionId + "']").classList.remove("active");
//     }
//   });
// }

import React, { useState } from 'react';

const ProjectCarousel = () => {
  const projects = [
    { id: 1, title: 'Prosjekt 1', description: 'Beskrivelse' },
    { id: 2, title: 'Prosjekt 2', description: 'Beskrivelse' },
    { id: 3, title: 'Prosjekt 3', description: 'Beskrivelse' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Funksjon for å gå til neste prosjekt
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Prosjektnavigasjon</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', margin: 'auto' }}>
        <h2>{projects[currentIndex].title}</h2>
        <p>{projects[currentIndex].description}</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePrevious} style={{ marginRight: '10px' }}>
          ← Forrige
        </button>
        <button onClick={handleNext}>
          Neste →
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
