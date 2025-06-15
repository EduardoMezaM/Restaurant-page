export function displayMenu(){
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
  <h2>Our Menu</h2>

  <div class="menu-category">
    <h3>Burgers</h3>
    <div class="menu-item">
      <h4>Classic Cheeseburger</h4>
      <p>Juicy beef patty, cheddar cheese, lettuce, tomato, onion, and house sauce on a toasted bun.</p>
      <span class="price">$8.99</span>
    </div>
    <div class="menu-item">
      <h4>BBQ Bacon Burger</h4>
      <p>Beef patty, crispy bacon, onion rings, cheddar, and smoky BBQ sauce.</p>
      <span class="price">$10.49</span>
    </div>
    <div class="menu-item">
      <h4>Spicy Jalapeño Burger</h4>
      <p>Beef patty, pepper jack cheese, jalapeños, chipotle mayo, and fresh greens.</p>
      <span class="price">$9.99</span>
    </div>
  </div>

  <div class="menu-category">
    <h3>Fries</h3>
    <div class="menu-item">
      <h4>Classic French Fries</h4>
      <p>Golden, crispy fries served with ketchup or house-made aioli.</p>
      <span class="price">$3.49</span>
    </div>
    <div class="menu-item">
      <h4>Loaded Fries</h4>
      <p>Fries topped with cheese, bacon bits, and ranch drizzle.</p>
      <span class="price">$5.99</span>
    </div>
    <div class="menu-item">
      <h4>Spicy Cajun Fries</h4>
      <p>Fries tossed in our signature Cajun seasoning blend.</p>
      <span class="price">$4.49</span>
    </div>
  </div>

  <div class="menu-category">
    <h3>Wings</h3>
    <div class="menu-item">
      <h4>Buffalo Wings</h4>
      <p>Classic buffalo sauce with your choice of ranch or blue cheese dip.</p>
      <span class="price">$9.99 (10 pcs)</span>
    </div>
    <div class="menu-item">
      <h4>Honey BBQ Wings</h4>
      <p>Sweet and smoky BBQ glaze with a hint of honey.</p>
      <span class="price">$9.99 (10 pcs)</span>
    </div>
    <div class="menu-item">
      <h4>Spicy Garlic Wings</h4>
      <p>Bold garlic flavor with a fiery kick.</p>
      <span class="price">$9.99 (10 pcs)</span>
    </div>
  </div>
`;

content.appendChild(menu);

}