/* import "./ChatApp.css";

import { useEffect, useRef, useState } from "react";
import { supabase } from "./supabaseClient";
import chatSub from "./supabaseSub.js";

function ChatApp() {
  useEffect(() => {
    chatSub();
    getmessages();
  }, []);

  const [messageList, setMessageList] = useState();
  const [username, setUsername] = useState();

  function handleUsername() {
    setUsername(usernameInputRef.current.value);
  }

  async function postMessage() {
    if (messageFieldRef.current.value !== "") {
      console.log(messageFieldRef.current.value);
      const { error } = await supabase.from("messages").insert([
        {
          username: `${username}`,
          msgcontent: `${messageFieldRef.current.value}`,
        },
      ]);
      getmessages();
      messageFieldRef.current.value = "";
      if (error != null) {
        console.log(error);
      }
    }
  }

  function renderMessages(messageData) {
    setMessageList(
      messageData.map((m) => (
        <li key={m.id} className="message">{`${m.msgcontent}`}</li>
      ))
    );
  }

  async function getmessages() {
    const messages = await supabase.from("messages").select();
    console.log(messages.data);
    renderMessages(messages.data);
  }
  const messageFieldRef = useRef(null);
  const usernameInputRef = useRef(null);

  return (
    <div className="chatContainer">
      <div id="username">
        <input
          type="text"
          name="usernameInput"
          id="usernameInput"
          ref={usernameInputRef}
          onChange={handleUsername}
        />
      </div>

      <div className="messagesContainer">
        <ul>{messageList}</ul>
      </div>

      <input type="text" className="messageField" ref={messageFieldRef} />

      <button className="getMessages" onClick={getmessages}>
        get messages
      </button>
      <button className="postMessage" onClick={postMessage}>
        post a message
      </button>
    </div>
  );
}

export default ChatApp;
 */