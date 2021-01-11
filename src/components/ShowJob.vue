<template>
    <div>
        <div class="title">
            <h3>Job Title</h3>
            <p>{{title}}</p>
        </div>
        <div class="description">
            <h3>Job Description</h3>
            <p>{{description}}</p>
        </div>
        <div class="skills">
            <h3>Skills</h3>
            <li v-for="(skill, index) in skills" v-bind:key="index">
                {{skills[index]}}
            </li>
        </div>
        <br><br><br>
        <div class="button">
            <button type="button" @click="deleteJob()">Delete</button>
            <button type="button" @click="editJob()">Edit</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'ShowJob',
    props: { job: Object },
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
      deleteJob() {
        this.$emit('job-deleted', this.id)
      },
      editJob() {
        this.$emit('toggle-edit', this.job)
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