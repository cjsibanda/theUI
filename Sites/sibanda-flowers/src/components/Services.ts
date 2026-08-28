export function Services() {
  return `
  
  <section class="bg-sky-500 py-20 text-white">

    <div class="max-w-7xl mx-auto px-6">

      <!-- HEADER SECTION -->
      <div class="text-center mb-14">

        <!-- Gold stars -->
        <div class="flex justify-center gap-2 text-yellow-300 text-2xl mb-4">
          ⭐ ⭐ ⭐
        </div>

        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Flowers for All Occasions
        </h2>

        <p class="text-white/90 max-w-2xl mx-auto text-lg">
          Get to learn more about Sibanda-Flowers from beautiful flower arrangements to weddings and events
        </p>

      </div>

      <!-- CARDS GRID -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

        <!-- LEFT COLUMN (3 stacked on md+) -->
        <div class="flex flex-col gap-6">

          ${serviceCard("Prom & Graduation")}
          ${serviceCard("Weddings")}
          ${serviceCard("Anniversaries")}

        </div>

        <!-- RIGHT COLUMN (3 stacked on md+) -->
        <div class="flex flex-col gap-6">

          ${serviceCard("Corporate Events")}
          ${serviceCard("Sympathy & Funerals")}
          ${serviceCard("New Baby & Baby Showers")}

        </div>

      </div>

    </div>

  </section>

  `;
}

function serviceCard(title: string) {
  return `
  
    <div
      class="
        bg-white
        text-black
        rounded-xl
        p-6
        shadow-md
        shadow-yellow-200/40
        hover:shadow-yellow-300/60
        transition
      "
    >

      <h3 class="text-xl font-bold mb-2 text-sky-600">
        ${title}
      </h3>

      <p class="text-gray-600">
        Contact us for more information and to schedule an appointment.
      </p>

    </div>

  `;
}