import "./message.css"

export default function Message({own}) {
  return (
    <div className={own?"message own":"message"}>
        <div className="messageTop" >
            <img className="messageImg" src="/assets/person/2.jpg" alt="" />
        </div>
        <p className="messageText">Hello this is a message</p>
        <div className="messageBottom">
            1 hour ago
        </div>
    </div>
  )
}
