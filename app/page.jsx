//Basic React Component

import React from 'react'

async function FetchUsers(){
 const res =  await fetch("https://reqres.in/api/users");
 const data = await res.json()
 return data.data; 
}


async function Index() {
  const users = await FetchUsers();
  return (
    <div>
      <h1>Esta es la página de Index</h1>
      <div>
        {JSON.stringify(users)}
      </div>
    </div>
  )
}

export default Index