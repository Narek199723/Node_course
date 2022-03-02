const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  console.log(notes);
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNots(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red("Note title taken"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    // console.log(e.message);
    return [];
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });
  if (notesToKeep.length < notes.length) {
    console.log(chalk.inverse.green("Note removed"));
    saveNots(notesToKeep);
  } else {
    console.log(chalk.inverse.red("No note was found "));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.yellow("Your notes"));
  notes.forEach(note => console.log(note.title));
};

const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  if (note) {
    console.log(chalk.inverse.grey(note.title));
    console.log(node.body);
  } else {
    console.log(chalk.inverse.red("Note not found"));
  }
};

const saveNots = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
