import logo from './logo.svg';
import './App.css';
import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";

function App() {
  return (
     <div className="App">
       <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
           Edit <code>src/App.js</code> and save to reload.
         </p> *
         
         <a
           className="App-link"
           href="https://reactjs.org"
           // href="index2.html"

           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a> */}
       </header>
      <ChatAiWidget applicationId="AD791A35-62CA-4E37-A490-79C7368C5D77" botId="bot1" />
     </div>
  );
}

export default App;
