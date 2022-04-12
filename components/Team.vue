<template>
  <section class="w-full text-center">
    <WaveTop/>

    <div class="container mx-auto">

      <div class="w-full pt-16">
        <h1>Team</h1>
      </div>

      <div class="w-full flex flex-wrap justify-center items-center">
        <div class="w-full">
          <h2>Core</h2>
        </div>
        <div class="flex flex-wrap justify-center items-center" v-for="member in members.core">

          <a class="w-full md:flex-1 p-8" :href="member.link" target="_blank">
            <div class="flex justify-cemter items-center p-2">
              <img class="rounded-full" :src="member.img" alt="">
            </div>
            <h3>{{ member.name }}</h3>
            <p>{{ member.bio }}</p>
          </a>

        </div>
      </div>

      <div class="w-full flex flex-wrap justify-center items-center">
        <div class="w-full">
          <h2>Employees</h2>
        </div>
        <div class="flex flex-wrap justify-center items-center" v-for="member in members.team">

          <a class="w-full md:flex-1 p-8" :href="member.link" target="_blank">
            <div class="flex justify-cemter items-center p-2">
              <img class="rounded-full" :src="member.img" alt="">
            </div>
            <h3>{{ member.name }}</h3>
            <p>{{ member.bio }}</p>
          </a>

        </div>
      </div>
    </div>


    <!-- <div class="w-full">
      <h2>Contributor</h2>
    </div>
    <div class="flex flex-wrap justify-center items-center" v-for="member in contributor">

      <div class="p-2">
        <div class="flex justify-cemter items-centerp-2">
          <img class="rounded-full" :src="member.img" alt="">
        </div>
        <h3>{{ member.name }}</h3>
        <p>{{ member.bio }}</p>
      </div>

    </div>

    <div class="w-full">
      <h2>Advisor</h2>
    </div>
    <div class="flex flex-wrap justify-center items-center" v-for="member in advisor">

      <div class="p-2">
        <div class="flex justify-cemter items-centerp-2">
          <img class="rounded-full" :src="member.img" alt="">
        </div>
        <h3>{{ member.name }}</h3>
        <p>{{ member.bio }}</p>
      </div>

    </div> -->

  </section>
</template>

<script>
import WaveTop from '@/assets/svg/wave-top.svg'

export default {
  data() {
    return {
      members: {
        core: [
          {
            img: 'https://media-exp1.licdn.com/dms/image/D4D03AQEUc4otxkjB9g/profile-displayphoto-shrink_200_200/0/1640109511551?e=1655337600&v=beta&t=TQv9tW1WASAYKt4kh7qH_95pLZky8HnA-hfJ9S2Ak9Q',
            name: 'Christopher Müller',
            bio: 'CEO',
            link: 'https://www.linkedin.com/in/chris5000/'
          },
          {
            img: 'https://media-exp1.licdn.com/dms/image/C4D03AQGBEr_2eyx4vg/profile-displayphoto-shrink_200_200/0/1616572674152?e=1655337600&v=beta&t=I6RuMf-0s3uYZ49J622hwbUDfaN7aLlOeMHOloJkSoo',
            name: 'Marcus Lawton',
            bio: 'COO',
            link: 'https://www.linkedin.com/in/marcuslawtonrecruiter/'
          },
          {
            img: 'https://media-exp1.licdn.com/dms/image/C4D03AQHDEyIDKKa5YA/profile-displayphoto-shrink_200_200/0/1640393086649?e=1655337600&v=beta&t=t5CgM77RLxfjEPH__ItTMOe746DTsVsPh5KNjK2iEH8',
            name: 'Navneet Singhrol',
            bio: 'BD',
            link: 'https://www.linkedin.com/in/navneet-singhrol/'
          },
        ],
        team: [
          {
            img: 'https://avatars.githubusercontent.com/u/93404834?v=4',
            name: 'Lev Wang',
            bio: 'Lead Developer',
            link: 'https://github.com/LevDev2017'
          },
          {
            img: 'https://media-exp1.licdn.com/dms/image/C5603AQFDBFnryPFydA/profile-displayphoto-shrink_200_200/0/1635010470004?e=1655337600&v=beta&t=dAb_zNo22_bORKy3BM5wlrgp0kuLpVqXGRoIIMdK-z8',
            name: 'Steve Chin',
            bio: 'CM',
            link: 'https://www.linkedin.com/in/steve-chin-005176a3/'
          },
        ]
      },
    }
  },
  components: {
    WaveTop,
  }
}
</script>

<style lang="css" scoped>
</style>
