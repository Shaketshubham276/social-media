import "./friend.css"

export default function Friend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture? PF+user.profilePicture : PF+ "person/noavatar.jpg"} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}
