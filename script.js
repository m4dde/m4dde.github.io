/*const sections = document.querySelectorAll("#section");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
    let scrollY = window.scrollYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;

        const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - 50;
        sectionId = current.Attribute("section"); 

    if (scrollY > sectionTop && scrollY <= sectionTop) + sectionHeight) {
    document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
     } else {
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
     }
    });
}*/

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.scrollYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;

    const sectionTop = (current.getBoundingClientRect().top + window.scrollYOffset) - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sections + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sections + "]").classList.remove("active");
    }
  });
}



