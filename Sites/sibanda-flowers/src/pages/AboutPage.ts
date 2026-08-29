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
          Welcome to Sibanda Flowers! Sibanda-Flowers started with a passion for creating meaningful floral experiences.
          Flowers are not just a purchase - they are an experience. Our flowers and designs are the best and the freshest.
        </p>

        <p>
          We specialize in weddings, events, and custom arrangements designed with care. We
          started out business many years ago and we been commited to supporting local growers
          in the GTA area. We pride ourselves with using the freshest and high-quality flowers.
          We are passionate about flowers and we love being part of your special occasions.
          No matter that occasion, we have the flowers that will make your day.
        </p>
      </div>
    `
  );
}