import api from './api'

class App{

  constructor(){
    this.repositories = []
    this.formEl = document.getElementById("repo-form")
    this.listEl = document.getElementById("repo-list")
    this.inputEl = document.querySelector('input[name="repository"]')

    this.registerHandlers()
  }

  registerHandlers(){
    this.formEl.onsubmit = event => this.addRepository(event)
  }

  async addRepository(event){
    event.preventDefault()

    const repoInput = this.inputEl.value

    if(repoInput.length === 0)
      return

    const response = await api.get(`/repos/${repoInput}`)

    const {name, description, html_url, owner:{avatar_url}} = response.data

    this.repositories.push({
      name,
      description,
      avatar_url,
      html_url
    })

    this.inputEl.value = ''
    this.render()
  }

  render(){
    this.listEl.innerHTML = ""
    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img')
      let titleEl = document.createElement('strong')
      let descriptionEl = document.createElement('p')
      let linkEl = document.createElement('a')
      let listItemEl = document.createElement('li')

      imgEl.setAttribute('src', repo.avatar_url)
      titleEl.appendChild(document.createTextNode(repo.name))
      descriptionEl.appendChild(document.createTextNode(repo.description))
      linkEl.appendChild(document.createTextNode('Acessar'))
      linkEl.setAttribute('target', '_blank')
      linkEl.setAttribute('href', repo.html_url)

      listItemEl.appendChild(imgEl)
      listItemEl.appendChild(titleEl)
      listItemEl.appendChild(descriptionEl)
      listItemEl.appendChild(linkEl)

      this.listEl.appendChild(listItemEl)
    })
  }
}

new App()