export function ServiceCard(title: string, description: string) {
  return `
  
    <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      <h3 class="text-xl font-bold text-sky-600 mb-2">
        ${title}
      </h3>

      <p class="text-gray-600">
        ${description}
      </p>

    </div>

  `;
}