export function displayHome(){
    const content = document.getElementById('content');
    content.innerHTML = `
    <section class="home-section">
      <h1>Welcome to Our Restaurant</h1>
      <p>
        Experience the best flavors and freshest ingredients in a warm, friendly atmosphere. 
        Whether you’re craving a classic burger or our famous spicy wings, we’ve got something for everyone.
      </p>
      <p>
        Visit us today and enjoy great food, great company, and great memories!
      </p>
    </section>
  `;
}
