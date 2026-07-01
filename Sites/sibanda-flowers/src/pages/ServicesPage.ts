import { PageLayout } from "../components/PageLayout";
import { ServiceCard } from "../components/ServiceCard";
import { servicesData } from "../data/servicesData";

export function ServicesPage() {

  const servicesHTML = servicesData
    .map(service =>
      ServiceCard(service.title, service.description)
    )
    .join("");

  return PageLayout(
    "Services",
    `

      <div class="max-w-7xl mx-auto px-6 py-16">

        <!-- Section Header -->
        <div class="text-center mb-12">

          <h2 class="text-3xl font-bold text-sky-600 mb-4">
            What We Offer
          </h2>

          <p class="text-gray-600 max-w-2xl mx-auto">
            Professional floral services designed for every occasion.
          </p>

        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          ${servicesHTML}

        </div>

      </div>

    `
  );
}