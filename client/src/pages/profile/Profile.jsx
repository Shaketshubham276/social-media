
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.css"
import axios from "axios"
import { useState,useEffect } from "react"
import {useParams} from "react-router"

export default function () {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser]=useState({})
    const username=useParams().username
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?username=${username}`);
            setUser(res.data)
            console.log(res)

        };
        fetchUser();
    },[username] )
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src={user.coverPicture ?PF+user.coverPicture : PF+"person/nobackground.avif"} alt="" />
                            <img className="profileUserImg" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noavatar.jpg"} alt="" />

                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName"> {user.username}</h4>
                            <p className="profileInfoDesc">{user.desc}</p>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>

                </div>


            </div>

        </>

    )
}
