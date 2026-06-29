import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

export function App() {

  const page =
    window.location.hash === "#about"
      ? AboutPage()
      : HomePage();

  return `

    ${Navbar()}

    ${page}

  `;
}