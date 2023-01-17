<template>
  <header class="min-h-[60vh] bg-orange-300">
    <app-menu />
    <div class="max-w-xl mx-auto mt-20 relative space-y-6 py-10">
      <h1 class="text-5xl text-center text-neutral-800">
        The best use of social marketing
      </h1>
      <p class="text-center text-xs max-w-sm mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        maiores! Placeat nostrum fugiat maxime consequatur inventore molestiae
        modi, cupiditate sit.
      </p>

      <div class="text-xs flex-center gap-4">
        <a
          href="#"
          class="
            bg-indigo-900
            text-white
            px-3
            py-2
            border-2 border-transparent
            rounded
          "
        >
          Start 14 Days Trial
        </a>
        <a
          href="#"
          class="
            bg-transparent
            text-neutral-700
            px-3
            py-2
            border-2 border-indigo-900
            flex-center
            gap-2
            rounded
          "
        >
          <svg style="width: 12px; height: 12px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13,2.05V4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03V2.05M5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37L5.67,19.74M7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74M5.69,7.1L4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1M4.06,13H2.06C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13M10,16.5L16,12L10,7.5V16.5Z"
            />
          </svg>
          <span>Watch A Demo</span>
        </a>
      </div>
    </div>

    <div class="flex-center gap-4">
      <p class="flex-center">
        <svg class="text-current text-green-700" style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
          />
        </svg>
        Trustpilot
      </p>
      <div class="flex-center gap-2">
        <div class="flex-center">
          <svg v-for="i in 5" :key="i" class="w-2 h-2 text-current text-orange-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
          />
        </svg>
        </div>
        <p class="text-[8px]">
          484+ (5 Stars)
        </p>
      </div>
    </div>
  </header>
</template>