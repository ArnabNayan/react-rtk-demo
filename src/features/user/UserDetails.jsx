
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector(state => state.user.users.find(user => user.id === parseInt(id)));

  return (
    <div>
      <h2 className="text-yellow-500 font-medium text-5xl text-center border-b-2 border-b-yellow-500">User Details</h2>
      {user && (
    //     <div>
    //     <p>Name: {user.name}</p>
    //     <p>Email: {user.email}</p>
    //     {/* Add more details as needed */}
    //   </div>

    <div className="mx-auto hero h-screen bg-fuchsia-100 ">
  <div className="hero-content flex-col lg:flex-row bg-yellow-300">
  <img className="h-72 w-64 hover:scale-110" src={user.image} alt={`User ${user.id}`} />
    <div>
      <h1 className="text-2xl font-bold">Name:{user.name}</h1>
      <h1 className="text-2xl font-bold">Email:{user.email}</h1>
      <h1 className="text-2xl font-bold">City:{user.city}</h1>
      <h1 className="text-2xl font-bold">Job:{user.job}</h1>
    
      <Link to={`/`}>
     <button className="btn btn-neutral text-sm text-slate-100 mt-5">Back to the Previous</button>
   </Link>
    </div>
   
  </div>
  
</div>
 
      )}
    </div>
   
  );
};

export default UserDetails;