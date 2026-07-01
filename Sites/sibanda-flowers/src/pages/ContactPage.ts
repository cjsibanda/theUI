import { PageLayout } from "../components/PageLayout";

export function ContactPage() {
  return PageLayout(
    "Contact",
    `
      <div class="max-w-2xl mx-auto py-16 px-6">

        <form class="space-y-4">

          <input class="w-full p-3 border rounded" placeholder="Name" />
          <input class="w-full p-3 border rounded" placeholder="Email" />
          <textarea class="w-full p-3 border rounded" placeholder="Message"></textarea>

          <button class="bg-sky-500 text-white px-6 py-3 rounded-lg">
            Send Message
          </button>

        </form>

      </div>
    `
  );
}