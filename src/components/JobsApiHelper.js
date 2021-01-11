const URI_VAR = 'www.iqtp.com/fakeAPI/post'

export const fetchGetAllJobs = () => {
  fetch(URI_VAR, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      return response
    })
}

export const fetchGetJob = (val) => {
  fetch(URI_VAR + '/' + val, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response
    })
}

export const fetchDeleteJob = (val) => {
  fetch(URI_VAR, {
    method: 'DELETE',
    body: val,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response
    })
}

export const fetchCreateJob = (val) => {
  fetch(URI_VAR, {
    method: 'POST',
    body: val,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response
    })
}

export const fetchUpdateJob = (val) => {
  fetch(URI_VAR, {
    method: 'PATCH',
    body: val,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response
    })
}