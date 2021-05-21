import React, { Component, useState, Fragment } from 'react'

const Form = () =>  {

        const [data, setData] = useState({
            name: "",
            lastName: ""
        });

        const hadleInputChange = (event) => {
            setData({
                ...data, [event.target.name] : event.target.value
            })
        }

        const sendData = (e) => {
            e.preventDefault();
            console.log(`Nombre: ${data.name} Apellido: ${data.lastName}`)
        }

        return (
            <Fragment>
                <hr />
                <h3>Formulario</h3>
                <form className="row" onSubmit={sendData}>
                    <div className="col-md-8 mb-3">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Name"
                            name="name"
                            onChange={hadleInputChange}
                        />
                        <h3>{data.name}</h3>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={hadleInputChange}
                        />
                    </div>
                    <div className="col-md-8">
                        <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                    
                </form>
            </Fragment>
        )
}

export default Form

