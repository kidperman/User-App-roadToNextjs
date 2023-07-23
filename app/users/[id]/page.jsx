import Link from "next/link";

async function getUsers(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data;
}

async function users({ params }) {

  const user = await getUsers(params.id)

  return (
    <div className="row">
      <div col-md-6 offset-md-5>
        <div className="card">
          <div className="card-header text-center mb-3">
             <h1>Detalles de {user.first_name}</h1>
             <img style={{borderRadious: "30"}} src={user.avatar} alt="Foto Usuario" />
          </div>
          <div className="card-body text-center">
            <div text-center>
              <div >
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column mt-3">
      <Link type="button" className="btn btn-light" href="/">Regresar</Link>
      </div>
    </div>
    
  )
}

export default users

