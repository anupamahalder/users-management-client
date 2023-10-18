import { useLoaderData } from "react-router-dom";

const Users = () => { 
    const users = useLoaderData();
    // sending a parameter to uniquely identify the item 
    const handleDelete = _id =>{
            console.log('delete',_id);
    }
    return (
        <div className="mx-auto py-10 w-full px-20">
            <h2>Total users: {users.length}</h2>
            {
                users.map(user => <div className="flex gap-3" key={user._id}>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                    {/* to pass parameter and avoid automatic calling we will take arrow function  */}
                    <button onClick={()=> handleDelete(user._id)} className="bg-gray-200 px-1 rounded-md">X</button>
                </div>)
            }
        </div>
    );
};

export default Users;