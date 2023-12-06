import useContentful from './utils/useContentful.jsx';
import Header from "./components/Header.jsx"

import "./App.css";

const query = `
  // add your contentful query here!
`;

function App() {
  let { data, errors } = useContentful(query);

  if (errors) return (
    <span style={{color: "red"}}>
      {errors?.map((error) => error.message).join(",")}
    </span>
  )
    
  if (!data) return <span>Loading...</span>;

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="container">
        <p>This is a starter for a vite project with contentful hook.</p>
        <p>Add your graphQL query in this file on like 6-8.</p>
        <p>The code in ./utils/useContentful.jsx is based on <a href="https://www.contentful.com/developers/videos/learn-graphql">these tutorials</a></p>
      </div>
    </div>
  );
}

export default App;
