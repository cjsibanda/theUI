export function Navbar() {
  return `
  
  <nav class="bg-sky-500 text-white px-6 py-4">
  
    <div class="flex items-center justify-between">
    
      <!-- Logo -->
      <div class="font-bold leading-none">
        <div>SIBANDA</div>
        <div>FLOWERS</div>
      </div>

      <!-- Search -->
      <div class="w-1/3">
        <input
          type="text"
          placeholder="text"
          class="w-full rounded-lg px-4 py-2 text-black bg-white"
        />
      </div>

      <!-- Right Side -->
      <div class="relative flex items-center gap-6">

        <!-- Cart -->
        <button>
          🛒
        </button>

        <!-- Menu -->
        <div>
          <button
            id="menu-button"
            class="text-2xl"
          >
            ☰
          </button>

          <div
            id="dropdown"
            class="hidden absolute right-0 mt-2 bg-white text-black rounded shadow-lg min-w-[180px]"
          >
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Home</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">About</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Services</a>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Contact</a>
          </div>
        </div>

      </div>

    </div>

  </nav>
  
  `;
}