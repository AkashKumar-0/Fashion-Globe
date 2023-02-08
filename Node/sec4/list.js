const fs = require("fs");

//this is async rqst for getting the file name
// fs.readdir("./", function (err, files) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// });
// console.log("reading files....");

// fs.readFile("./readme.md", "UTF-8", (err, ipsum) => {
//   console.log(ipsum);
// });
// console.log("reading the file....");

/**
 * creation and appendation of text file
 */
// let md = `
//    This is new file
//    =======================
//    ES5 template Strings are cool. They honor Whitespace

//    * Template Strings
//    * Node File System
//    * Readline CLIs
// `;
// fs.writeFile("javascript.md", md.trim(), function (err) {
//   if (err) throw err;
//   fs.appendFileSync("javascript.md", "\n\n### Node.js Everyone!");
//   console.log("markdown has crreated");
// });

/**
 * dir creation
 */
// if (fs.existsSync("your-files-here")) {
//   console.log("dir is already there");
// } else {
//   fs.mkdir("your-files-here", function (err) {
//     if (err) throw err;
//     console.log("directed has been created");
//   });
// }

/**
 * renaming and removing : idk why it's showing wrong
 */
// fs.rename("./your-files-here/notes.md ", "./note.md", function (err) {
//   if (err) throw err;
//   console.log("renamed");
// });

// fs.unlinkSync("./your-files-here/notes.md");

// we can also rename dir same as files
//but to remove ; fs.rmdir('',func(){})
