import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        // create an user object
        const updatedUser = {name, email};
        // send data to server so we have to create a put api in backend
        fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                alert('User updated successfully!');
            }
        })
    }
    return (
        <div className="w-full h-screen">
            <h3>Update information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}
            className="bg-red-200 rounded-lg w-[500px] py-6 px-10 mx-auto">
                {/* here default value will be our loaded user's value  */}
                <input className="p-2 rounded-md" type="text" name="name" placeholder="Enter Your name" defaultValue={loadedUser?.name} /><br /> <br />
                <input className="p-2 rounded-md" type="email" name="email" placeholder="Enter your email" defaultValue={loadedUser?.email} /><br /><br />
                <input className="mx-auto cursor-pointer bg-green-500 rounded-xl py-2 px-3" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;