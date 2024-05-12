class Note {
    constructor(id, title, text) {
      this.id = id;
      this.title = title;
      this.text = text;
    }
  }
  
  class App {
    constructor() {
      this.notes = [];
  
      this.$activeForm = document.querySelector(".active-form");
      this.$inactiveForm = document.querySelector(".inactive-form");
      this.$noteTitle = document.querySelector("#note-title");
      this.$noteText = document.querySelector("#note-text");
  
      this.addEventListeners();
    }
  
    addEventListeners() {
      document.body.addEventListener("click", (event) => {
        this.handleFormClick(event);
      });
    }
  
    handleFormClick(event) {
      const isActiveFormClickedOn = this.$activeForm.contains(event.target);
      const isInactiveFormClickedOn = this.$inactiveForm.contains(event.target);
      console.log(this.$noteTitle.value);
      console.log(this.$noteText.value);
      if (isInactiveFormClickedOn) {
        this.openActiveForm();
      } else if (!isInactiveFormClickedOn && !isActiveFormClickedOn) {
        this.closeActiveForm();
      }
    }
  
    openActiveForm() {
      this.$inactiveForm.style.display = "none";
      this.$activeForm.style.display = "block";
      this.$noteText.focus();
    }
  
    closeActiveForm() {
      this.$inactiveForm.style.display = "block";
      this.$activeForm.style.display = "none";
    }
  
    addNote(id, { title, text }) {
      const newNote = new Note(id, title, text);
      this.notes = [...this.notes, newNote];
    }
  
    editNote(id, { title, text }) {
      this.notes = this.notes.map((note) => {
        if (note.id == id) {
          note.title = title;
          note.text = text;
        }
        return note;
      });
    }
  
    displayNotes() {
      this.notes.map((note) =>
        console.log(`
          ID: ${note.id}
          Title: ${note.title}
          Text: ${note.text}
          `)
      );
    }
  
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id != id);
    }
  }
  
  const app = new App();
