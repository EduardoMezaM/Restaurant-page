export function displayAbout() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <section class="about-section">
      <h1>About Us</h1>
      <p>
        Founded in 2010, Our Restaurant has been dedicated to serving fresh, delicious food made from locally sourced ingredients. 
        Our passion for quality and community drives everything we do.
      </p>
      <p>
        Our chefs combine traditional recipes with modern twists to bring you unique flavors that satisfy every palate. 
        We believe dining should be an experience — one that brings people together in a warm and welcoming space.
      </p>
      <p>
        Thank you for choosing us. We look forward to serving you soon!
      </p>
    </section>
  `;
}
