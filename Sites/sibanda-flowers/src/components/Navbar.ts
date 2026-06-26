export function Navbar() {
  return `
  
  <nav class="bg-sky-500 text-white px-6 py-4">

    <div class="flex items-center justify-between">

      <!-- LEFT: LOGO + SEARCH -->
      <div class="flex items-center gap-6">

        <!-- Logo -->
        <div class="font-bold leading-none">
          <div>SIBANDA</div>
          <div>FLOWERS</div>
        </div>

        
        <div class="hidden md:block w-1/4">
          <input
            type="text"
            placeholder="Search flowers..."
            class="w-full rounded-2xl px-4 py-2 text-black bg-white"
          />
        </div>

      </div>

      
      <div class="hidden md:flex items-center gap-8 font-medium">

        <a href="#" class="text-yellow-300">
          Home
        </a>

        <a href="#" class="hover:text-yellow-200 text-white">
          About
        </a>

        <a href="#" class="hover:text-yellow-200 text-white">
          Services
        </a>

        <a href="#" class="hover:text-yellow-200 text-white">
          Contact
        </a>

      </div>

      <!-- RIGHT SIDE -->
      <div class="flex items-center gap-6">

        <!-- Cart -->
        <button class="text-xl">
          🛒
        </button>

        <!-- Mobile Menu Button -->
        <button
          id="menu-button"
          class="text-2xl md:hidden"
        >
          ☰
        </button>

        <!-- Dropdown (mobile only) -->
        <div
          id="dropdown"
          class="hidden absolute right-6 top-16 bg-white text-black rounded-lg shadow-lg min-w-[180px]"
        >

          <a href="#" class="block px-4 py-2 hover:bg-gray-100">
            Home
          </a>

          <a href="#" class="block px-4 py-2 hover:bg-gray-100">
            About
          </a>

          <a href="#" class="block px-4 py-2 hover:bg-gray-100">
            Services
          </a>

          <a href="#" class="block px-4 py-2 hover:bg-gray-100">
            Contact
          </a>

        </div>

      </div>

    </div>

  </nav>

  `;
}