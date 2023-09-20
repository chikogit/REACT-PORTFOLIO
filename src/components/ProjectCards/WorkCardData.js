// Importing project images using their file paths
import proj1 from "../../assets/Project1.png";
import proj2 from "../../assets/Project2.png";
import proj3 from "../../assets/Project4.png";

// An array of objects representing project card data
const ProjectCardData = [
  {
    // Object for the first project card
    imgsrc: proj1, // Image source for the project logo
    title: "Technically Social API", // Title of the project
    text: "This social network API is a platform that enables users to engage and interact with a set of features, fostering connections and facilitating seamless communication. With a range of functionalities, users can create, update, and delete user profiles, thoughts, reactions, and establish meaningful friend connections.", // Description of the project
    view: "https://photos.app.goo.gl/JyFSGB6EPSSf5iFi8", // Link to view the project
    source: "https://github.com/Jadyngg19/Technically-Social-API", // Link to view the project's source code
  },
  {
    // Object for the second project card
    imgsrc: proj2, // Image source for the project logo
    title: "My Personal Notepad", // Title of the project
    text: "This note-taking application offers a user-friendly interface combined with powerful features for creating, editing, and managing your notes efficiently. It strives to simplify the note-taking process, boost organization, and foster collaboration, making it an indispensable tool for anyone seeking to streamline their workflow and capture ideas effectively.", // Description of the project
    view: "https://my-personal-notepad.herokuapp.com/", // Link to view the project
    source: "https://github.com/Jadyngg19/My-Personal-Notepad", // Link to view the project's source code
  },
  {
    // Object for the third project card
    imgsrc: proj3, // Image source for the project logo
    title: "Coder's Corner", // Title of the project
    text: "Coder's Corner is a feature-rich CMS-style blog site that caters to the needs of tech enthusiasts, developers, and anyone passionate about coding. It provides a dynamic platform where users can effortlessly create, read, update, and delete their blog posts, fostering an environment that encourages knowledge sharing and collaboration.", // Description of the project
    view: "https://coders-corner.herokuapp.com/", // Link to view the project
    source: "https://github.com/Jadyngg19/Coders-Corner", // Link to view the project's source code
  },
];

// Exporting the ProjectCardData array to be used elsewhere in the application
export default ProjectCardData;