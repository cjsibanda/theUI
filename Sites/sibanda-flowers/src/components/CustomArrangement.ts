export function CustomArrangement() {
  return `
  
  <section class="bg-white py-20">

    <div class="max-w-7xl mx-auto px-6">

      <div
        class="
          flex
          flex-col
          lg:flex-row
          gap-8
          items-stretch
        "
      >

        <!-- LEFT BOX -->
        <div
          class="
            flex-1
            bg-sky-500
            text-white
            rounded-2xl
            flex
            items-center
            justify-center
            p-10
          "
        >
          <h2 class="text-3xl font-bold text-center">
            <span class="italic">Custom</span> Arrangements
          </h2>
        </div>

        <!-- RIGHT BOX -->
        <div
          class="
            flex-1
            bg-white/70
            backdrop-blur-md
            border
            border-sky-100
            rounded-2xl
            p-10
            flex
            flex-col
            justify-center
          "
        >

          <!-- Title -->
          <h2 class="text-4xl font-bold text-sky-600 mb-4">
            Custom Flower Design
          </h2>

          <!-- Description -->
          <p class="text-gray-700 mb-3 text-lg">
            Let us create a custom flower arrangement for you
          </p>

          <!-- Delivery line with icon -->
          <div class="flex items-start gap-3 mb-8">
            
            <!-- Simple truck icon (SVG) -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-sky-500 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7h11v8H3V7zm11 2h4l3 3v3h-7V9zM7 15a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>

            <p class="text-sm text-sky-700 font-semibold">
              Order within 10 hours for same day delivery
            </p>
          </div>

          <!-- Button -->
          <button
            class="
              bg-sky-500
              text-white
              px-6
              py-3
              rounded-lg
              hover:bg-sky-600
              transition
              w-fit
            "
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>

  </section>

  `;
}