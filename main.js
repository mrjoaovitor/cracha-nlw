function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/mrjoaovitor'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      user.Bio.textContent = data.bio
    })
}
