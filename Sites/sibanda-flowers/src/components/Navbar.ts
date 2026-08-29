export function Navbar(currentPage: String) {
  const activeLink = (page: string) => {
    return currentPage === page
      ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
      : "text-white hover:text-yellow-200 transition";
  };

  return `
  <!-- Added 'relative' and 'z-50' to establish a clean stacking context -->
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

    <!-- Dropdown (Added z-50 and correct href hash routes) -->
    <div
      id="dropdown"
      class="hidden absolute right-6 top-full mt-2 bg-white text-black rounded-lg shadow-xl min-w-[180px] z-50 py-2 border border-gray-100"
    >
      <a href="#home" class="mobile-link block px-4 py-2 hover:bg-gray-100">Home</a>
      <a href="#about" class="mobile-link block px-4 py-2 hover:bg-gray-100">About</a>
      <a href="#services" class="mobile-link block px-4 py-2 hover:bg-gray-100">Services</a>
      <a href="#contact" class="mobile-link block px-4 py-2 hover:bg-gray-100">Contact</a>
    </div>

  </nav>
  `;
}