<template>
    <div>
        <div class="title">
            <h3>Job Title</h3>
            <label>
                <input type="text" v-model="title">
            </label><br><br>
        </div>
        <div class="description">
            <h3>Job Description</h3>
            <label>
                <input type="text" v-model="description">
            </label><br><br>
        </div>
        <div class="skills">
            <h3>Skills</h3>
            <li v-for="(skill, index) in skills" v-bind:key="index">
                <label>
                    <input type="text" v-model="skills[index]">
                </label><br>
            </li>
        </div>
        <br><br><br>
        <div class="button">
            <button v-if="create===true" type="button" @click="save()">Save</button>
            <button v-else type="button" @click="update()">Update</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'EditJob',
    props: { job: Object, create: Boolean },
    data() {
      return {
        title: this.job.title,
        description: this.job.description,
        skills: this.job.skills,
        id: this.job.id
      }
    },
    watch: {},
    methods: {
      save() {
        // emit with job object
        const jobObj = {
          title: this.title,
          description: this.description,
          skills: this.skills
        }
        this.$emit('job-saved', jobObj)
        // clear all elements
        this.title = ""
        this.description = ""
        this.skills = [""]
      },
      update() {
        const newJobObj = {
          title: this.title,
          description: this.description,
          skills: this.skills,
          id: this.id
        }
        this.$emit('job-updated', newJobObj)
      }
    }
  }
</script>

<style scoped>
    .title {
        width: 30%;
        float: left;
    }

    .description {
        width: 30%;
        float: left;
    }

    .skills {
        width: 30%;
        float: left;
    }

    .button {
        width: 10%;
        float: left;
    }
</style>