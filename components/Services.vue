<template>
  <section>
    <div class="container mx-auto py-10 space-y-10">
      <div>
        <h2>Teake the load in smartly social media</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          optio ea, natus explicabo animi dolorem. Repudiandae cum similique
          tempora, voluptatibus necessitatibus, fugiat tempore vel voluptate
          placeat ea repellendus molestiae! Veniam!
        </p>
      </div>

      <div class="flex justify-center">
        <div class="flex sm:justify-between width_500">
          <serviceCard
            v-for="(card, index) in serviceCards"
            :key="index"
            :description="card.description"
            :link="card.link"
            :title="card.title">
            <template #icon>
              <img :src="card.icon" alt="card-icon" width="45" height="25">
            </template>
          </serviceCard>
        </div>
      </div>

      <div>

        <div class="grid grid-cols-12 gap-12">
          <div class="col-span-6 overflow-hidden  ">
            <img class="object-cover rounded-xl" src="https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
          </div>

          <div class="col-span-6 flex justify-center flex-col gap-4">
            <h3 class="text-3xl max-w-sm">Lorem, ipsum dolor.</h3>
            <p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, exercitationem!</p>
          </div>
        </div>

        <div class="grid grid-cols-12 gap-12">
          <div class="col-span-6 flex justify-center flex-col gap-4">
            <h3 class="text-3xl max-w-sm">Lorem, ipsum dolor.</h3>
            <p class="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, exercitationem!</p>
          </div>

          <div class="col-span-6 overflow-hidden ">
            <img class="object-cover rounded-xl" src="https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="">
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const serviceCards = ref([
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/180/180872.png',
    description: 'Lorem ipsum dolor sit amet 1',
    title: 'One',
    link: '#'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/180/180874.png',
    description: 'Lorem ipsum dolor sit amet 2',
    title: 'Two',
    link: '#'
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/180/180889.png',
    description: 'Lorem ipsum dolor sit amet 3',
    title: 'Three',
    link: '#'
  },

])
</script>