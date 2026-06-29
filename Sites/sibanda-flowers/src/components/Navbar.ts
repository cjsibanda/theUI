export function Navbar() {
  return `
  
  <nav class="bg-sky-500 text-white py-4">

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

          <a href="#" class="text-yellow-300 border-b-2 border-yellow-300 pb-1">
            Home
          </a>

          <a href="#about" class="text-white hover:text-yellow-200 transition">
            About
          </a>

          <a href="#services" class="text-white hover:text-yellow-200 transition">
            Services
          </a>

          <a href="#contact" class="text-white hover:text-yellow-200 transition">
            Contact
          </a>

        </div>

        <!-- Cart -->
        <button class="text-xl">
          🛒
        </button>

        <!-- Mobile Menu -->
        <button id="menu-button" class="text-2xl md:hidden">
          ☰
        </button>

      </div>

    </div>

    <!-- Dropdown -->
    <div
      id="dropdown"
      class="hidden absolute right-6 top-16 bg-white text-black rounded-lg shadow-lg min-w-[180px]"
    >
      <a href="#" class="block px-4 py-2 hover:bg-gray-100">Home</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-100">About</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-100">Services</a>
      <a href="#" class="block px-4 py-2 hover:bg-gray-100">Contact</a>
    </div>

  </nav>

  `;
}