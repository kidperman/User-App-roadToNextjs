//Basic React Component

import React from 'react'
import Users from '../components/Users';


async function FetchUsers(){
 const res =  await fetch("https://reqres.in/api/users");
 const data = await res.json()
 return data.data; 
}


async function Index() {
  const users = await FetchUsers();
  return (
    <div>
      <Users users={users} />
    </div>
  )
}

export default Index