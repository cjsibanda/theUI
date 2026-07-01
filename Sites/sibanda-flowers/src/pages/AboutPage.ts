import { PageLayout } from "../components/PageLayout";

export function AboutPage() {
  return PageLayout(
    "About",
    `
      <div class="max-w-4xl mx-auto py-16 px-6 text-gray-700">
        <h2 class="text-3xl font-bold mb-6 text-sky-600">
          Our Story
        </h2>

        <p class="mb-4">
          Sibanda-Flowers started with a passion for creating meaningful floral experiences...
        </p>

        <p>
          We specialize in weddings, events, and custom arrangements designed with care.
        </p>
      </div>
    `
  );
}