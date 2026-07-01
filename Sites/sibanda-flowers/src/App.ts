import { Navbar } from "./components/Navbar";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

export function App() {

  const currentPage =
    window.location.hash.replace("#", "") || "home";

  let page = "";

  switch (currentPage) {

    case "about":
      page = AboutPage();
      break;

    default:
      page = HomePage();

  }

  return `

    ${Navbar(currentPage)}

    ${page}

  `;
}