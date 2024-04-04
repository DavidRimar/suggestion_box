import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserList({users}) {
    const navigate = useNavigate();
    console.log("users: ", users);
    return (
        <>
            {users?.map(user => {
                return (<Chip variant="outlined"
                            key={user?.id} label={user?.name}
                            onClick={() => {
                                navigate(`/user/${user.id}`)
                            }}/>)
            })}
        </>
    )
}

export default UserList;