document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = carousel.querySelectorAll(".img-port");
  const prevButton = document.querySelector(".arrow-left");
  const nextButton = document.querySelector(".arrow-right");
  let currentSlide = 0;

  console.log("Número de slides:", slides.length);

  // Função para mostrar o slide atual
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
      if (i === index) {
        slide.classList.add("currentItem");
      } else {
        slide.classList.remove("currentItem");
      }
    });
    console.log("Slide atual:", index);
  }

  function nextSlide() {
    console.log("Clicou em próximo slide");
    if (currentSlide === slides.length - 1) {
      // Se for o último slide, mover o primeiro slide para o final
      carousel.appendChild(slides[0]);
    } else {
      currentSlide++;
    }
    showSlide(currentSlide);
    console.log("Slide atual após nextSlide:", currentSlide);
  }

  function prevSlide() {
    console.log("Clicou em slide anterior");
    if (currentSlide === 0) {
      // Se for o primeiro slide, mover o último slide para o início
      carousel.insertBefore(slides[slides.length - 1], slides[0]);
    } else {
      currentSlide--;
    }
    showSlide(currentSlide);
    console.log("Slide atual após prevSlide:", currentSlide);
  }

  // Adiciona os ouvintes de eventos aos botões de seta
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Mostra o primeiro slide ao carregar a página
  showSlide(currentSlide);
});

