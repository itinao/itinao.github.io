<template>
  <section id="page-top">
    <div class="container-fluid p-0">
      <section id="about" class="resume-section p-3 p-lg-5 d-flex d-column">
        <Presentation />
      </section>

      <section id="experience" class="resume-section p-3 p-lg-5 d-flex flex-column">
        <Experience />
      </section>

      <section id="skills" class="resume-section p-3 p-lg-5 d-flex flex-column">
        <Skills />
      </section>
    </div>
  </section>
</template>

<script lang="ts">
// @ts-ignore
import Presentation from '@/components/Sections/Presentation'
// @ts-ignore
import Experience from '@/components/Sections/Experience'
// @ts-ignore
import Skills from '@/components/Sections/Skills'

export default {
  components: {
    Presentation,
    Experience,
    Skills
  },
  methods: {}
}
</script>

<style>
</style>
