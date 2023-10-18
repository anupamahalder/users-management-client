
const Home = () => {
    const handleAddUser = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);

        // create an object 
        const user = {name, email};

        // send data to server using post method 
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-Type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                form.reset();
                alert('User added successfully!');
            }
        })
    }
    return (
        <div className="w-full h-screen">
            <h1 className="py-10 text-center text-2xl text-blue-700 font-bold">User Management with CRUD operation</h1>
            <form onSubmit={handleAddUser}
            className="bg-red-200 rounded-lg w-[500px] py-6 px-10 mx-auto">
                <input className="p-2 rounded-md" type="text" name="name" placeholder="Enter Your name"/><br /> <br />
                <input className="p-2 rounded-md" type="email" name="email" placeholder="Enter your email"/><br /><br />
                <input className="mx-auto bg-green-500 rounded-xl py-2 px-3" type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Home;