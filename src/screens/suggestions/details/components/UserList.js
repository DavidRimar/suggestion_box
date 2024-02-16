import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserList() {
    const navigate = useNavigate();
    const users = [{id: 1, name: 'Bukayo Saka'},
                   {id: 2, name: 'Martin Odegaard'},
                   {id: 3, name: 'Gabriel Martinelli'}];

    return (
        <>
            {users.map(user => {
                return (<Chip variant="outlined"
                            key={user.id} label={user.name}
                            onClick={() => {
                                navigate(`/user/${user.id}`)
                            }}/>)
            })}
        </>
    )
}

export default UserList;