import React, { useState }  from "react";
import axios from 'axios'

const Fetchdata = ()=>{
    const [user , setUser] = useState([]);

    function fetchuser(){
        axios.get("https://reqres.in/api/users")
        .then(response => setUser(response.data.data))
        
        .catch(err=> console.log(err))
    }
    console.log(user);

    return(
        <div>
            <h1>Blue Whale</h1>
            <button onClick={fetchuser} >Get User data</button>

            {
                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Avatar</th>
                        </tr>
                        {
                           user.length > 0  ?
                            (
                                user.map((item)=>(
                                    <tr key={item.id}>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td><img src={item.avatar}></img></td>
                                    </tr>
                                ))

                            ) : (<tr>
                                    <td>No data found</td>
                                </tr>)
                        }
                        
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Fetchdata;