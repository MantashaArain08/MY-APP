import React, { useMemo, useState } from 'react'

function Theme() {
  const [search, setsearch] = useState("");
  const [theme, settheme] = useState(0);

  const Users = ["Aisha","Maryam","Kiran","Lubna","Khadija","Komal","Seema","Rumana","kainat","Johum"];
  const  listUser = useMemo(() => Users.filter((e) => 
    e.toLowerCase().includes(search.toLowerCase())
  ), [search])

  return (

      <div style={{
        width : '100%',
        height : '100vh',
        backgroundColor : theme === "light" ? '#f9f9f9' : '#242424',
        color : theme === "light" ? '#242424' : '#f9f9f9'
      }}>
        <div>
          <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} />
          <button onClick={() => settheme(theme === "light" ? 'dark' : 'light')}>Change Theme</button>
        </div>

        <ul>
          {listUser.map((Users,index) =>
          <li key = {index}> {Users} </li>
        )}
        </ul>

      </div>
  )
}

export default Theme