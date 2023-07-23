// listado de usuarios (componente)
"use client";
import { useRouter } from "next/Navigation";

function Users({ users }) {
    const router = useRouter()


  return (
    <ul className="list-group">
      {
        users.map((users) => (
          <li style={{cursor: "pointer"}} key={users.id} className="hvr-grow list-group-item d-flex justify-content-between align-items-center"
            onClick={()=>{
                router.push(`/users/${users.id}`)
            }}
          >
            <div>
              <h5>{users.id}.- {users.first_name} {users.last_name}</h5>
              <p>{users.email}</p>
            </div>
            <img src={users.avatar} alt="foto avatar" style={{borderRadius: "50%"}} />
          </li>
        ))
      }
    </ul>
  )
}

export default Users