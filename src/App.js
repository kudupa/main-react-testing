import "./App.css";
import { Application } from "./components/application/Application";
import Counter from "./components/counter/Counter";
import FileUpload from "./components/fileupload/FileUpload";
import { MuiMode } from "./components/mui/Mui";
import Skills from "./components/skills/Skills";
import { Users } from "./components/users/Users";
import { AppProviders } from "./providers/AppProviders";

const mySkills = ["Javascript", "Python"];

function App() {
  return (
    // <div className="App">
    //   {/* <Application />
    //   <Skills skills={mySkills} /> */}
    //  <Counter />
    //   <FileUpload />
    // </div>
    // <AppProviders>
    //   <div className="App">
    //     <MuiMode />
    //   </div>
    // </AppProviders>
    <Users />
  );
}

export default App;
