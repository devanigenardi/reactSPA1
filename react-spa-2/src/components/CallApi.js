import React, { useEffect, useState } from 'react'

const CallApi = () => {

    const [api, setApi] = useState([])

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        const data = await fetch ('https://jsonplaceholder.typicode.com/users')
        const dataInfo = await data.json()
        setApi(dataInfo)
    }

    

    return (
        <div>
            <h1>Json API</h1>
            <ul>
                {
                    //"slice" determines how many times you want to itearte the object
                    api.slice(0, 5).map((ele) => {
                        return (
                            <li key={ele.id}>id: {ele.id} id: {ele.id}  <ul>
                                    <li>{ele.address.street} </li>
                                    <li>{ele.address.suite} </li>
                                    <li>{ele.address.city} </li>
                                    <li>{ele.address.zipcode} 
                                        <ul>
                                        <li>{ele.address.geo.lat} </li>
                                        <li>{ele.address.geo.lng} </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )




}

export default CallApi
