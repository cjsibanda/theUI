import { PageLayout } from "../components/PageLayout";

export function ContactPage() {
  return PageLayout(
    "Contact",
    `
      <section class="max-w-3xl mx-auto px-6 py-20">

        <!-- Intro -->
        <div class="text-center mb-12">

          <h2
            class="
              text-4xl
              font-bold
              text-sky-600
              mb-6
            "
          >
            Get In Touch
          </h2>

          <p
            class="
              text-lg
              text-gray-700
              leading-8
              max-w-2xl
              mx-auto
            "
          >
            Whether you want to talk about a special occasion or simply say hello,
            we'd love to hear from you. Please get in touch by filling out the
            contact form below and we'll get back to you shortly.
          </p>

        </div>

        <!-- Contact Form Card -->
        <div
          class="
            bg-white
            rounded-2xl
            border
            border-gray-200
            shadow-xl
            p-8
            md:p-10
          "
        >

          <form class="space-y-6">

            <!-- Name -->
            <div>

              <label
                for="name"
                class="
                  block
                  text-sm
                  font-semibold
                  text-gray-800
                  mb-2
                "
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="John Smith"
                class="
                  w-full
                  rounded-lg
                  border
                  border-gray-400
                  bg-white
                  px-4
                  py-3
                  text-gray-800
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-400
                  focus:border-sky-400
                  transition
                "
              />

            </div>

            <!-- Email -->
            <div>

              <label
                for="email"
                class="
                  block
                  text-sm
                  font-semibold
                  text-gray-800
                  mb-2
                "
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="john@email.com"
                class="
                  w-full
                  rounded-lg
                  border
                  border-gray-400
                  bg-white
                  px-4
                  py-3
                  text-gray-800
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-400
                  focus:border-sky-400
                  transition
                "
              />

            </div>

            <!-- Message -->
            <div>

              <label
                for="message"
                class="
                  block
                  text-sm
                  font-semibold
                  text-gray-800
                  mb-2
                "
              >
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="How can we help you?"
                class="
                  w-full
                  rounded-lg
                  border
                  border-gray-400
                  bg-white
                  px-4
                  py-3
                  text-gray-800
                  placeholder:text-gray-500
                  resize-none
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-400
                  focus:border-sky-400
                  transition
                "
              ></textarea>

            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="
                w-full
                bg-sky-600
                hover:bg-sky-700
                text-white
                font-semibold
                tracking-wide
                py-4
                rounded-xl
                shadow-lg
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </section>
    `
  );
}