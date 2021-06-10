import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';



let marked = require("marked");

//let marked = require("marked"); //Used code 'npm install marked --save'

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true
  })
  
  const initialMarkdown = `Welcome to my React Markdown Previewer!
  # Here's a Heading
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  How about an embedded image?
  ![Chun Li Gif](https://www.fightersgeneration.com/nz7/char/chunli-sf4-stance-by-gravelee.gif#chunli)
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbererd lists too.
  1. Use just 1s if you want!
  1. Or not?
  `
  
  class App extends React.Component {
    constructor(props){  
      super(props)
      this.state = {
        markdown:  initialMarkdown 
      };
    }
  
    updateMarkdown(markdown) {
      this.setState({ markdown });
    }
  
    render() {
  
      var inputStyle = {
        width: "400px",
        height: "150vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding:"10px"
      };
      var outputStyle = {
        width: "400px",
        height: "150vh",
        backgroundColor: "#DCDCDC",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px",
      };
  
      return (
        <div className="App">
  
  
          <div className="container">
            <div className="row mt-4">
              <div className="col text-center">
                <h1>
                  <span class="badge badge-secondary">Markdown Previewer</span>
                </h1>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="col text-center">
  
                  <h4><span class="badge badge-pill badge-warning">Markdown Input</span>
                  </h4>
                </div>
                <div className="mark-input">
                  <textarea
                    id="editor"  
                    className="input"
                    style={inputStyle}
                    value={this.state.markdown}
                    onChange={(e) => {
                      this.updateMarkdown(e.target.value);
                    }}
                    > 
                    {console.log(this.state.markdown)}
                    </textarea>
                </div>
  
              </div>
  
  
  
              <div className="col-md-6">
                <div className="col text-center">
  
                  <h4>
                    <span class="badge badge-pill badge-success">...and the Preview</span>
                  </h4>
                </div>
  
                <div className="mark-output"
                  id="preview"
                  style={outputStyle}
                  dangerouslySetInnerHTML={{
                    __html: marked(this.state.markdown),
                  }}
                  >
                  
                </div>
                    
              </div>
  
            </div>
  
          </div>
        </div>
      );
    }
  }
  
  
  
  ReactDOM.render(<App />,
  document.getElementById("root"))

export default App;
