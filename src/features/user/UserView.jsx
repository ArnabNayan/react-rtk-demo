import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'
import { Link } from "react-router-dom";


const UserView = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <h2 data-aos="flip-right"
      data-aos-delay="2000" className="text-yellow-500 font-medium text-5xl text-center border-b-2 border-b-yellow-500">List of Users</h2>
            {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
     
      {!user.loading && user.users.length ? (
  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 ">
    {user.users.map(user => (
      <div data-aos="zoom-in"
      data-aos-duration="1000"  key={user.id} className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img className="h-52 w-72 hover:scale-110" src={user.image} alt={`User ${user.id}`} />
        </figure>
        <div className="card-body items-center text-center">
          <h2  className="card-title font-serif text-xl">{user.name}</h2>
          <p  className="text-lg font-medium">{user.email}</p>
          <div  className="card-actions">
            <Link to={`/user/${user.id}`}>
              <button className="btn btn-warning text-sm text-slate-100">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
) : null}
    
        </div>
    );
};
export default UserView

 // <li key={user.id}>
            //       <img src={user.image} alt={`User ${user.id}`} />
            //       <Link to={`/user/${user.id}`}> <button className="btn btn-warning text-sm text-slate-100">View Recipies</button></Link>
            // </li>