import './App.css';
import {ChatEngine, } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="9f52d563-a0eb-4ab0-921d-abda575e4b9a"
        userName="tekerau"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed{ ... chatAppProps}/>}
        />
    </div>
  );
}

export default App;
