import { useContext, useState } from "react"
import { UserContext } from "./UserContext"
import Dropdown from "../components/Dropdown"
function Profile() {
    const [user, setUser] = useContext(UserContext)
    const [displaySubMenu, setDisplaySubMenu] = useState(false)
    return (
        <div className="Profile" 
            onClick={() => setDisplaySubMenu(!displaySubMenu)}
            onMouseEnter={() => setDisplaySubMenu(true)}
            onMouseLeave={() => setDisplaySubMenu(false)}
        >
            {user.isAuthenticated &&
                <>
                    <img className="profile-img" src={user.profileImage} alt="" />
                    <p id="profile-name">{user.name}</p>
                    <Dropdown 
                        display={displaySubMenu}
                    />
                </>

            }

        </div>
    )
}

export default Profile