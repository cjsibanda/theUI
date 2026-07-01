import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";

export function PageLayout(title: string, content: string) {
  return `
  
    ${Navbar(title.toLowerCase())}

    ${PageHero(title)}

    <main class="bg-white">
      ${content}
    </main>

    ${Footer()}

  `;
}