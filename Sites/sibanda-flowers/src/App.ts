import { Navbar } from "./components/Navbar";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";

export function App() {

  const currentPage =
    window.location.hash.replace("#", "") || "home";

  let page = "";

  switch (currentPage) {

  case "about":
    page = AboutPage();
    break;

  case "services":
    page = ServicesPage();
    break;

  case "contact":
    page = ContactPage();
    break;

  default:
    page = HomePage();


  }
  

  return `

    ${Navbar(currentPage)}

    ${page}

  `;
}