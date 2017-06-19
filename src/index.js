$(document).ready(function(){
  new App()
})

class App {
  constructor() {
    this.form = document.getElementById("note-form")
    this.container = document.getElementById("list")
    this.input = document.getElementById("input")
    this.form.addEventListener("submit", this.OnSubmit.bind(this))

    this.commentList = new CommentList()
  }

  OnSubmit() {
    event.preventDefault()
    const text = this.input.value
    this.commentList.addComments(text)
    this.input.value = ""
    this.render()
  }

  render() {
    this.container.innerHTML = this.commentList.render()
  }
}
