import logo from './logo.svg';
import { useState } from "react";
import './App.css';
//tets
const defaultProjects = [{
  name: "Hawkhack",
  description: "This is a project that we worked on",
  tags: ["fun", "exciting", "scary", "spooky"]
},
{
  name: "Art",
  description: "This project is artistic",
  tags: ["artsy"]
}, {
  name: "Disney",
  description: "This project is a third project about disney",
  tags: ["shrek"]
}];

const projectMapper = (project) => {
  const projectStyle = {
    backgroundColor: "rgba(255,200,200,50)",
    width: "50%",
    marginLeft: "25%",
    borderRadius: 10
  }
  return (<>
    <br></br>
    <div style={projectStyle}>
      <p style={{ fontWeight: "bold", color:"red" }}>{project.name}</p>
      <p>{project.description}</p>
    </div>
  </>)
}

function App1() {
  const [projects, setProjects] = useState([...defaultProjects]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [errorMessage, setErrorMessage] = useState("")

  return (
    <div className="App1">
      <p>Projects</p>
      {projects.map(projectMapper)}

      <div>
        {errorMessage.length > 0 && <p>{errorMessage}</p>}
  
        <input type="text" value={name} placeholder="Name" style={{ width: "80%" }}
          onChange={(event) => { setName(event.target.value); }}/>
        <br></br>
        <br></br>
        <input type="text" value={description} placeholder="Description" style={{ width: "80%" }}
        onChange={(event) => { setDescription(event.target.value); }}/>
        <br></br>
        <br></br>
        <button style={{ fontSize: 20 }} onClick={() => {
          let _projects = [...projects];

          if (name.length > 0 && description.length > 0) {
            _projects.push({
              name: name,
              description: description
            })
            setErrorMessage("");
          }
          else {
            setErrorMessage("You must have a name and description");
            
          }

          setProjects(_projects);
          setName("")
          setDescription("")
        }}>Add Project</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div class="App">
      <h1>Registration</h1>
      <form>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname"></input>
        <br></br>
        <label for="pword">Password:</label>
        <input type="password" id="pword" name="pword"></input>
        <br></br>
        <label for="pword">Verify Password:</label>
        <input type="password" id="pword" name="pword"></input>
        <br></br>
        <label for="pword">Email:</label>
        <input type="password" id="pword" name="pword"></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default App;