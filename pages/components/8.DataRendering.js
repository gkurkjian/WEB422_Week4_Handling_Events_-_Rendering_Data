import { useState, useEffect } from "react"
export default function DataRendering() {

    const [ users, setUsers ] = useState([
        { user: "fred", active: false, age: 40 },
        { user: 'pebbles', active: false, age: 1 },
        { user: 'barney', active: true, age: 36 },
    ])

    return (
        <>
            <h1>8.DataRendering.js component</h1>
            
            <h2>This is the array that we&apos;re dealing with</h2><br />
            <p>{`{ user: "fred", active: false, age: 40 },`}</p><br />
            <p>{`{ user: 'pebbles', active: false, age: 1 },`}</p><br />
            <p>{`{ user: 'barney', active: true, age: 36 }`}</p><br />


            {/* if statement */}
            <h3>Checking if statement.</h3><br />

            {/* Print the literal JSX line as text of "if" statement */}
            <code>{"<p>{users[2].user} is {users[2].active && <em>Active</em>}</p>"}</code><br />
            <p>{users[2].user} is {users[2].active && <em>Active</em>}</p><br />

            <h3>Checking if/else statement using Ternary operator</h3>
            {/* Print the literal JSX line as text of "if/else" statement */}
            <code>{"<p>{users[0].user} is {users[0].active ? <em>Active</em> : <em>Inactive</em>}</p>"}</code>
            <p>{users[0].user} is {users[0].active ? <em>Active</em> : <em>Inactive</em>}</p><br />

            <h4>This is crating a table out of the data above</h4>
            <table className="borderOne">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Active</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                   {users.map((user, index) => {  // without index, it'll give error in inspect
                    return (
                        <tr key={index}>
                            <td>{user?.user}</td>
                            <td>{user?.active ? <strong>true</strong> : <strong>false</strong>}</td>
                            <td>{user?.age}</td>
                        </tr>
                    )
                   })}
                </tbody>

            </table>
        </>
    )
};