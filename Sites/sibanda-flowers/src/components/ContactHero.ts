export function ContactHero() {
  return `
  
  <section
    class="
      relative
      h-[500px]
      bg-cover
      bg-center
      flex
      items-center
      justify-center
    "
    style="background-image: url('/src/assets/images/hero/hero.jpg');"
  >

    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative text-center text-white">

      <h1 class="text-5xl md:text-6xl font-bold">
        Contact
      </h1>

    </div>

  </section>

  `;
}