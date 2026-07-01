import { PageLayout } from "../components/PageLayout";

export function ServicesPage() {
  return PageLayout(
    "Services",
    `
      <div class="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div class="p-6 bg-sky-50 rounded-xl shadow">
          Wedding Flowers
        </div>

        <div class="p-6 bg-sky-50 rounded-xl shadow">
          Event Decorations
        </div>

        <div class="p-6 bg-sky-50 rounded-xl shadow">
          Custom Bouquets
        </div>

      </div>
    `
  );
}