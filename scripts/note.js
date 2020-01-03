class Note {
  constructor (title, description) {
    this.title = title
    this.description = description
  }

  addNote() {
    console.log(`Successfully added a new note (${this.title}) 🥳`)
  }
}

module.exports = Note;
