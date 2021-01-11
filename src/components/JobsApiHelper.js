export const fetchGetAllJobs = () => {
  return {jobs: [
    {title: true, description: true, skills: ["golang", "java", "ruby"], id: 1},
    {title: true, description: true, skills: ["C++", "javascript", "ruby"], id: 2},
    {title: true, description: true, skills: ["python", "go", 'rails'], id: 3}
  ]}
}

export const fetchGetJob = (val) => {
  console.log(val.job)
  return{job: {title: 'hello', description: 'goodbye', skills: ['C', 'C#', 'C++']}}
}

export const fetchDeleteJob = (val) => {
  console.log(val)
  return {}
}

export const fetchCreateJob = (val) => {
  console.log(val)
  const newJob = {job: {id: 300, title: val.job.title, description: val.job.description, skills: val.job.skills}}
  return newJob
}

export const fetchUpdateJob = (val) => {
  return val
}

