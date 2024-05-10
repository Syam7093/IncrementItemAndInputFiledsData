import React, { useState } from 'react';
import data from "./items.json";
import "../App.css";

const ItemsSelect = () => {
    const [state, setState] = useState('All');
    const [gender, setGender] = useState('All');
    const [status, setStatus] = useState('All');
    const [show,setshow]=useState(false)
    const [search,setsearch]=useState('')
    console.log(state,"manam")

    const filterData = data.filter((item) => {
        const res=(gender =="All" ||item.gender === gender) && ( status =="All" ||item.status === status) && ( state =="All" ||item.state === state)&&(item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        return res
    });

    console.log(filterData, "Filtered Data");

    return (
        <div>
            <div>
                <select id="stateSelect" onChange={(e) => setState(e.target.value)}>
                    <option value="All">All</option>
                    <option value="New York">New York</option>
                    <option value="California">California</option>
                    <option value="Texas">Texas</option>
                    <option value="Florida">Florida</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Georgia">Georgia</option>
                    <option value="North Carolina">North Carolina</option>
                </select>
                <select onChange={(e) => setGender(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select onChange={(e) => {setStatus(e.target.value)
                    if(e.target.value==="Active")
                        {
                            setshow(true)
                        }
                    else{
                        setshow(false)
                    }
                }}>
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <input type="search" onChange={(e)=>{
                    setsearch(e.target.value)
                }}></input>

                <table id="customers">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            {show&& <th>Paid</th>}
                            <th>State</th>
                            <th>Contact</th>
                            <th>Status</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {filterData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                {show&& <td>{item.id}</td>}
                                <td>{item.state}</td>
                                <td>{item.contact}</td>
                                <td>{item.status}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemsSelect;
