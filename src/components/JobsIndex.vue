<template>
    <div>
        <div>
            <h2 class="edit">Create a Job</h2>
            <EditJob
                :job="{title: '', description: '', skills: ['']}"
                :create="true"
                v-on:job-saved="createJob($event)">
            </EditJob>
        </div>
        <br><br><br><br>
        <div class="show-header">
            <h2 class="show">Existing Jobs</h2>
            <br>
            <label class="filter">Filter
                <input
                    type="text"
                    placeholder="enter a skill here"
                    v-model="filterQuery"
                    @input="onInput">
            </label>
            <br>
            <h5 v-if="filterQuery !== ''">
                Filtering skills, showing {{filteredJobs.length}} of {{allJobs.length}} jobs
            </h5>
            <br v-else>
        </div>
        <li v-for="job in filteredJobs" v-bind:key="job.id">
            <EditJob
                v-if="job === jobBeingEdited"
                :job="jobBeingEdited"
                v-on:job-updated="updateJob($event)">
            </EditJob>
            <ShowJob
                v-else
                :job='job'
                v-on:job-deleted="deleteJob($event)"
                v-on:toggle-edit="toggleEdit($event)">
            </ShowJob>
        </li>
    </div>
</template>

<script>
  import EditJob from "./EditJob";
  import ShowJob from "./ShowJob";
  import {fetchGetAllJobs, fetchDeleteJob, fetchUpdateJob, fetchCreateJob, fetchGetJob} from "./JobsApiHelper"

  export default {
    name: 'JobsIndex',
    components: {
      EditJob,
      ShowJob
    },
    data() {
      return {
        allJobs: null,
        jobBeingEdited: null,
        filterQuery: '',
        filteredJobs: null
      }
    },
    mounted: function() {
      this.allJobs = fetchGetAllJobs().jobs
      this.filteredJobs = this.allJobs
    },
    methods: {
      deleteJob(e) {
        fetchDeleteJob({job: e})
        this.allJobs = fetchGetAllJobs().jobs
      },
      toggleEdit(e) {
        this.jobBeingEdited = e
      },
      updateJob(e) {
        const isMatchingId = (i) => i.id === e.id
        const arrIndex = this.allJobs.findIndex(isMatchingId)
        fetchUpdateJob({job: e})
        const resp = fetchGetJob(e.id)
        this.allJobs[arrIndex] = resp.job
        this.jobBeingEdited = null
      },
      createJob(e) {
        const resp = fetchCreateJob({job: e})
        this.allJobs.push(resp.job)
      },
      onInput() {
        let filterResults = []
          for (let i = 0; i < this.allJobs.length; i++) {
            for (let j = 0; j < this.allJobs[i].skills.length; j++) {
              const lowerSkill = this.allJobs[i].skills[j].toLowerCase()
              if (lowerSkill.includes(this.filterQuery.toLowerCase())) {
                filterResults.push(this.allJobs[i])
                break
              }
            }
        if (this.filterQuery === '') {
          this.filteredJobs = this.allJobs
        } else {
        this.filteredJobs = filterResults}
          }
      }
    }
  }
</script>

<style scoped>
    .edit {
        text-align: center;
    }

    .show-header {
        width: 100%
    }

    .show {
        text-align: center;
    }

    .filter {
        text-align: center;
    }
</style>