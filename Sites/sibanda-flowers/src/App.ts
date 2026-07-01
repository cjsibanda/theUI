import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";

export function App() {

  const currentPage =
    window.location.hash.replace("#", "") || "home";

  switch (currentPage) {

    case "about":
      return AboutPage();

    case "services":
      return ServicesPage();

    case "contact":
      return ContactPage();

    default:
      return HomePage();

  }

}