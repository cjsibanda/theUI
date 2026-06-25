export function Footer() {
  return `
  
  <footer class="bg-sky-600 text-white pt-16 pb-8 mt-20">

    <div class="max-w-7xl mx-auto px-6">

      <!-- TOP GRID -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

        <!-- Business Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">
            Sibanda-Flowers - Wedding & Event Florist
          </h3>

          <p class="text-sm leading-relaxed text-white/90">
            1234 Main Street, Unit 1A<br/>
            Toronto, ON A1B 2C3<br/>
            Phone: (647) 123-4567
          </p>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            Follow Us
          </h3>

          <div class="flex gap-4">

            <!-- Facebook -->
            <a href="#" class="hover:text-sky-200 text-xl">
              📘
            </a>

            <!-- Instagram -->
            <a href="#" class="hover:text-sky-200 text-xl">
              📸
            </a>

            <!-- Yelp -->
            <a href="#" class="hover:text-sky-200 text-xl">
              ⭐
            </a>

          </div>
        </div>

        <!-- Payments -->
        <div>
          <h3 class="text-lg font-semibold mb-4">
            ALL PRICES SHOWN IN CANADIAN DOLLARS
          </h3>

          <div class="flex flex-wrap gap-3 text-sm">

            <span class="bg-white text-sky-600 px-3 py-1 rounded">
              AmEx
            </span>

            <span class="bg-white text-sky-600 px-3 py-1 rounded">
              Mastercard
            </span>

            <span class="bg-white text-sky-600 px-3 py-1 rounded">
              Visa
            </span>

            <span class="bg-white text-sky-600 px-3 py-1 rounded">
              Discover
            </span>

            <span class="bg-white text-sky-600 px-3 py-1 rounded">
              Visa Credit
            </span>

            <span class="bg-white text-sky-600 px-3 py-1 rounded">
              Mastercard Credit
            </span>

          </div>
        </div>

      </div>

      <!-- BOTTOM BAR -->
      <div class="border-t border-white/30 pt-6 text-center text-sm text-white/80">
        © 2026 Sibanda-Flowers
      </div>

    </div>

  </footer>

  `;
}