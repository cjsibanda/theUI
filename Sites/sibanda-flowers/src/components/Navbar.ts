export function Navbar(currentPage: string) {
  const activeLink = (page: string) => {
    return currentPage === page
      ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
      : "text-white hover:text-yellow-200 transition";
  };

  return `
  <!-- CENTERED CONTAINER with relative positioning & z-index -->
  <nav class="bg-sky-500 text-white py-4 relative z-50">

    <!-- CENTERED CONTAINER -->
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">

      <!-- LEFT: LOGO + SEARCH -->
      <div class="flex items-center gap-6 flex-1">

        <!-- Logo -->
        <div class="font-bold leading-tight flex-shrink-0">
          <div>SIBANDA</div>
          <div>FLOWERS</div>
        </div>

        <!-- Search -->
        <div class="hidden md:block flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search flowers..."
            class="
              w-full
              rounded-2xl
              px-5
              py-2.5
              text-black
              bg-white
              focus:outline-none
            "
          />
        </div>

      </div>

      <!-- RIGHT: LINKS + ACTIONS -->
      <div class="flex items-center gap-8">

        <!-- Links -->
        <div class="hidden md:flex items-center gap-6 font-semibold text-lg whitespace-nowrap">

          <a href="#home" class="${activeLink("home")}">
            Home
          </a>

          <a href="#about" class="${activeLink("about")}">
            About
          </a>

          <a href="#services" class="${activeLink("services")}">
            Services
          </a>

          <a href="#contact" class="${activeLink("contact")}">
            Contact
          </a>

        </div>

        <!-- Cart -->
        <button class="text-xl">
          🛒
        </button>

        <!-- Mobile Menu Button -->
        <button id="menu-button" class="text-2xl md:hidden focus:outline-none" aria-label="Toggle Menu">
          ☰
        </button>

      </div>

    </div>

    <!-- Dropdown (Option 1: Modern Sky Blue Theme) -->
    <div
      id="dropdown"
      class="hidden absolute right-6 top-full mt-2 w-56 bg-sky-600 text-white rounded-2xl shadow-2xl z-50 p-2 border border-sky-400/30 backdrop-blur-md"
    >
      <div class="flex flex-col gap-1 font-medium">
        <a 
          href="#home" 
          class="mobile-link flex items-center justify-between px-4 py-2.5 rounded-xl transition ${currentPage === 'home' ? 'bg-sky-700 text-yellow-300 font-bold' : 'hover:bg-sky-500/80 hover:text-yellow-200'}"
        >
          <span>Home</span>
          ${currentPage === 'home' ? '<span class="text-xs">●</span>' : ''}
        </a>

        <a 
          href="#about" 
          class="mobile-link flex items-center justify-between px-4 py-2.5 rounded-xl transition ${currentPage === 'about' ? 'bg-sky-700 text-yellow-300 font-bold' : 'hover:bg-sky-500/80 hover:text-yellow-200'}"
        >
          <span>About</span>
          ${currentPage === 'about' ? '<span class="text-xs">●</span>' : ''}
        </a>

        <a 
          href="#services" 
          class="mobile-link flex items-center justify-between px-4 py-2.5 rounded-xl transition ${currentPage === 'services' ? 'bg-sky-700 text-yellow-300 font-bold' : 'hover:bg-sky-500/80 hover:text-yellow-200'}"
        >
          <span>Services</span>
          ${currentPage === 'services' ? '<span class="text-xs">●</span>' : ''}
        </a>

        <a 
          href="#contact" 
          class="mobile-link flex items-center justify-between px-4 py-2.5 rounded-xl transition ${currentPage === 'contact' ? 'bg-sky-700 text-yellow-300 font-bold' : 'hover:bg-sky-500/80 hover:text-yellow-200'}"
        >
          <span>Contact</span>
          ${currentPage === 'contact' ? '<span class="text-xs">●</span>' : ''}
        </a>
      </div>
    </div>

  </nav>
  `;
}