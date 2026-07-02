import heroBackground from "../assets/images/hero-background.jpg";

export function PageHero(title: string) {
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

    <!-- Dark Overlay -->
    <div
      class="
        absolute
        inset-0
        bg-black/40
      "
    ></div>

    <!-- Content -->
    <div
      class="
        relative
        z-10
        text-center
      "
    >

      <h1
        class="
          text-5xl
          md:text-6xl
          font-bold
          text-white
        "
      >
        ${title}
      </h1>

    </div>

  </section>

  `;
}