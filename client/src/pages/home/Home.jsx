
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./Home.css"

export default function () {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
    <Feed/>
    <Rightbar/>

    </div>
    
    </>

  )
}