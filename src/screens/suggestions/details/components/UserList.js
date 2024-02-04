import { Chip } from "@mui/material";


function UserList() {
    const users = ["userA", "userB", "userC"];

    return (
        <>
            {users.map(e => {
                return (<Chip variant="outlined"
                            key={e} label={e}
                            onClick={console.log(e)}/>)
            })}
        </>
    )
}

export default UserList;