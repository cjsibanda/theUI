import heroBackground from "../assets/images/hero-background.jpg";

export function Hero() {
  return `
  
  <section
    class="
      relative
      flex
      items-center
      justify-center
      py-40
      bg-cover
      bg-center
    "
    style="
      background-image: url('${heroBackground}');
    "
  >

    <div
      class="
        absolute
        inset-0
        bg-black/40
      "
    ></div>

    <div
      class="
        relative
        z-10
        flex
        flex-col
        items-center
      "
    >

      <h1
        class="
          text-5xl
          font-bold
          text-white
          mb-8
        "
      >
        Get Summer Deals!!
      </h1>

      <button
        class="
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-lg
        "
      >
        See Deals
      </button>

    </div>

  </section>
  
  `;
}