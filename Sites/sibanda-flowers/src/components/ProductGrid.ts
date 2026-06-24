import arrangement1 from "../assets/images/products/arrangement1.jpg";
import arrangement2 from "../assets/images/products/arrangement2.jpg";
import arrangement3 from "../assets/images/products/arrangement3.jpg";
import arrangement4 from "../assets/images/products/arrangement4.jpg";
import arrangement5 from "../assets/images/products/arrangement5.jpg";
import arrangement6 from "../assets/images/products/arrangement6.jpg";

const products = [
  {
    image: arrangement1,
    name: "Summer Roses",
    description: "Fresh cut roses in a decorative vase.",
    price: "$59.99"
  },
  {
    image: arrangement2,
    name: "Sunshine Bouquet",
    description: "Bright yellow blooms perfect for summer.",
    price: "$69.99"
  },
  {
    image: arrangement3,
    name: "Elegant White",
    description: "Premium white flowers for special occasions.",
    price: "$74.99"
  },
  {
    image: arrangement4,
    name: "Garden Mix",
    description: "A colorful assortment of seasonal flowers.",
    price: "$64.99"
  },
  {
    image: arrangement5,
    name: "Pink Delight",
    description: "Soft pink arrangements with lush greenery.",
    price: "$79.99"
  },
  {
    image: arrangement6,
    name: "Luxury Collection",
    description: "Our most premium flower arrangement.",
    price: "$99.99"
  }
];

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

        ${products.map(product => createCard(product)).join("")}

      </div>

    </div>

  </section>

  `;
}

function createCard(product: {
  image: string;
  name: string;
  description: string;
  price: string;
}) {
  return `
  
    <div
      class="
        bg-white
        rounded-xl
        shadow-md
        overflow-hidden
      "
    >

      <img
        src="${product.image}"
        alt="${product.name}"
        class="
          w-full
          h-64
          object-cover
        "
      />

      <div class="p-6">

        <h3
          class="
            text-2xl
            font-bold
            mb-2
          "
        >
          ${product.name}
        </h3>

        <p
          class="
            text-gray-600
            mb-4
          "
        >
          ${product.description}
        </p>

        <p
          class="
            text-xl
            font-semibold
            text-sky-600
            mb-6
          "
        >
          ${product.price}
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