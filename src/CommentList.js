class CommentList {
  constructor() {
    this.comments = []
  }

  addComments(text) {
     this.comments.push(new Comment(text))
  }

  render() {
    return this.comments.map(c => c.render()).join("")
  }
}
