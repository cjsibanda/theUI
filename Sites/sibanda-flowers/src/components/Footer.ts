export function Footer() {
  return `
  
  <footer class="bg-sky-600 text-white pt-16 pb-8 mt-20">

    <div class="max-w-7xl mx-auto px-6">

      <!-- TOP GRID -->
      <div
        class="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
          mb-14
        "
      >

        <!-- Business Info -->
        <div>

          <h3
            class="
              text-2xl
              font-bold
              tracking-wide
              mb-2
            "
          >
            SIBANDA FLOWERS
          </h3>

          <p class="text-yellow-300 font-medium mb-6">
            Wedding & Event Florist
          </p>

          <div
            class="
              space-y-3
              text-white/90
            "
          >

            <p>
              <i class="fa-solid fa-location-dot w-6"></i>
              1234 Main Street, Unit 1A
            </p>

            <p>
              Toronto, ON A1B 2C3
            </p>

            <p>
              <i class="fa-solid fa-phone w-6"></i>
              (647) 123-4567
            </p>

          </div>

        </div>

        <!-- Quick Links -->
        <div>

          <h3
            class="
              text-lg
              font-semibold
              mb-6
            "
          >
            Quick Links
          </h3>

          <div class="flex flex-col gap-3">

            <a href="#home" class="hover:text-yellow-300 transition">
              Home
            </a>

            <a href="#about" class="hover:text-yellow-300 transition">
              About
            </a>

            <a href="#services" class="hover:text-yellow-300 transition">
              Services
            </a>

            <a href="#contact" class="hover:text-yellow-300 transition">
              Contact
            </a>

          </div>

        </div>

        <!-- Social Media -->
        <div>

          <h3
            class="
              text-lg
              font-semibold
              mb-6
            "
          >
            Follow Us
          </h3>

          <div class="flex gap-4">

            <a
              href="#"
              aria-label="Facebook"
              class="
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                bg-white/10
                text-2xl
                transition-all
                duration-300
                hover:bg-white
                hover:text-sky-600
                hover:scale-110
              "
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              class="
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                bg-white/10
                text-2xl
                transition-all
                duration-300
                hover:bg-white
                hover:text-sky-600
                hover:scale-110
              "
           >
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              aria-label="X"
              class="
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                bg-white/10
                text-2xl
                transition-all
                duration-300
                hover:bg-white
                hover:text-sky-600
                hover:scale-110
              "
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>

          </div>

        </div>

        <!-- Payments -->
        <div>

          <h3
            class="
              text-lg
              font-semibold
              mb-6
            "
          >
            Accepted Payments
          </h3>

          <p class="text-sm text-white/80 mb-5">
            All prices shown in Canadian dollars.
          </p>

          <div
            class="
              flex
              flex-wrap
              gap-5
              text-5xl
            "
         >

            <i class="fa-brands fa-cc-visa"></i>

            <i class="fa-brands fa-cc-mastercard"></i>

            <i class="fa-brands fa-cc-amex"></i>

            <i class="fa-brands fa-cc-discover"></i>

          </div>

        </div>

      </div>

      <!-- BOTTOM BAR -->
      <div
          class="
            border-t
            border-white/15
            pt-8
            text-center
          "
       >

          <p
            class="
              text-sm
              text-white/90
              mb-2
          "
          >
            © 2026 Sibanda Flowers. All rights reserved.
          </p>

          <p
            class="
              text-sm
              text-white/70
            "
          >
            Beautiful flowers for weddings, events & life's special moments.
          </p>

        </div>

    </div>

  </footer>

  `;
}