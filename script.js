'use strict'
const links = {
  github: 'lodesousa',
  youtube: 'lorena',
  facebook: 'losousa',
  instagram: 'lodesousa',
  twitter: 'programmertobe'
}

function changeLinks() {
  // essa função para testar se esta indo
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
    //alert(li.children[0].href)
  }
}

changeLinks()

function getGithubInfo() {
  const url = `https://api.github.com/users/${links.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userPhoto.src = data.avatar_url
      gitProfile.href = data.html_url
      userLogin.textContent = data.login
    })
}
getGithubInfo()
