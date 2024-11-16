import { useState } from "react"

export default function DataRenderingPractice() {

    const [ users, setUsers ] = useState([
        { user: 'George', active: false, age: 36 },
        { user: 'Hagop', active: true, age: 37 },
        { user: 'Elizabeth', active: true, age: 41 }
    ])

    return (
        <>
            <h1>9.DataRenderingPractice.js component</h1>

            <h2>DataRenderingPractice component</h2>
            <h3>This is the user object that we're dealing with</h3>
            <p>{`{ user: 'George', active: false, age: 34 },`}</p>
            <p>{`{ user: 'Hagop', active: true, age: 36 },`}</p>
            <p>{`{ user: 'Elizabeth', active: true, age: 40 }`}</p>
            <br />

            {/* Print the literal JSX line as text of "if" statement */}
            <h3>Checking if statement.</h3>
            <code>{"<p>{users[2].user} is {users[2].active && <em>Active</em>}</p> <br />"}</code>
            <p>{users[2].user} is {users[2].active && <em>Active</em>}</p>
            <br />


            {/* Print the literal JSX line as text of "if/else" statement */}
            <h3>Checking if/else statement using Ternary operator</h3>
            <code>{"<p>{users[0].user} is {users[0].active ? <em>Active</em> : <em>Inactive</em>}</p>"}</code>
            <p>{users[0].user} is {users[0].active ? <em>Active</em> : <em>Inactive</em>}</p>
            <br />


            <h4>Crating a table out of the data above</h4>
            <table className="borderOne">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Active</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user?.user}</td>
                                <td>{user?.active ? <strong><i>Active</i></strong> : <strong><i>Inactive</i></strong>}</td>
                                <td>{user?.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}