import { useContext, useEffect, useState } from "react"
import ChatOnline from "../../components/chatonline/ChatOnline"
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

export default function Messenger() {
    const [conversations,setConversations]=useState([]);
    const [currentChat,setCurrentChat]=useState(null);
    const [messages,setMessages]=useState(null);

    
    const {user}=useContext(AuthContext);

    useEffect(()=>{
        const getConversations=async()=>{
            try{
                // The below command helps to link with the backend /conversations/:user._id
                const res=await axios.get("/conversations/"+user._id)
                setConversations(res.data)
            }
            catch(err){
                console.log(err)
            }
            
        }
        getConversations();
    },[user._id])


    return (
        <>
            <Topbar />

            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        {conversations.map(c=>(
                            <Conversation key={c._id} conversation={c} currentUser={user}/>
                        ))}
                        
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ?
                        <>
                        <div className="chatBoxTop">
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="Write something..." ></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
                        </>:
                        <span className="noConversationText">Open a Conversation to start a chat</span>} 
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                    </div>
                </div>
            </div>

        </>
    )
}
