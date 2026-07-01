export function ServiceCard(
  title: string,
  description: string,
  icon: string,
  featured: boolean
) {
  return `
  
    <div
      class="
        relative
        bg-white
        rounded-xl
        p-6
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:shadow-sky-200/40
        border
        border-transparent
        hover:border-sky-200
      "
    >

      ${
        featured
          ? `
        <div class="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      `
          : ""
      }

      <!-- Icon -->
      <div class="text-4xl mb-4">
        ${icon}
      </div>

      <!-- Title -->
      <h3 class="text-xl font-bold text-sky-600 mb-2">
        ${title}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 leading-relaxed">
        ${description}
      </p>

    </div>

  `;
}