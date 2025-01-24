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
