export function ProductGrid() {
  return `
  
  <section class="bg-sky-100 py-16">

    <div class="max-w-7xl mx-auto px-6">

      <!-- Section Header -->
      <h2
        class="
          text-4xl
          font-bold
          text-center
          text-sky-600
          mb-10
        "
      >
        Shop Arrangements
      </h2>

      <!-- Grid -->
      <div
        class="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >

        ${createCard()}
        ${createCard()}
        ${createCard()}
        ${createCard()}
        ${createCard()}
        ${createCard()}

      </div>

    </div>

  </section>

  `;
}

function createCard() {
  return `
  
    <div
      class="
        bg-white
        rounded-xl
        shadow-md
        overflow-hidden
      "
    >

      <!-- Image Placeholder -->
      <div
        class="
          h-64
          bg-gray-200
          flex
          items-center
          justify-center
        "
      >
        Image Placeholder
      </div>

      <!-- Content -->
      <div class="p-6">

        <h3
          class="
            text-2xl
            font-bold
            mb-2
          "
        >
          Flower 1
        </h3>

        <p
          class="
            text-gray-600
            mb-4
          "
        >
          Fresh cut roses
        </p>

        <p
          class="
            text-xl
            font-semibold
            text-sky-600
            mb-6
          "
        >
          $59.99
        </p>

        <button
          class="
            w-full
            bg-sky-500
            text-white
            py-3
            rounded-lg
            hover:bg-sky-600
            transition
          "
        >
          Buy
        </button>

      </div>

    </div>

  `;
}