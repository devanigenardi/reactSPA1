import React, { Component, Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const FormHooks = () => {

    const {register,handleSubmit, formState: { errors }} = useForm();

    const [Entries, setEntries] = useState([]);
    
    
    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
        setEntries([
            ...Entries, data
        ])
    }

    return (
        <Fragment>
            <div>
                <hr />
                <h3>React Form Hooks</h3>
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-8 mb-3">
                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            className="form-control"
                            {...register("userName", { 
                                required:{
                                    value: true,
                                    message: 'Title required' 
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Five characters maximun'
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Two characters minimun'
                                }
                            })} 
                        />
                         <span className="text-danger text-small d-block mb-2">
                            {errors.userName &&  errors.userName.message}
                        </span>
                    </div>
                    <div className="col-md-8 mb-3">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="form-control"
                            {...register("lastName", { 
                                required:{
                                    value: true,
                                    message: 'Title required' 
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Five characters maximun'
                                },
                                minLength: {
                                    value: 2,
                                    message: 'Two characters minimun'
                                }
                            })} 
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors.lastName &&  errors.lastName.message}
                        </span>
                    </div>
                    <div className="col-md-8">
                        <button className="btn btn-primary" type="submit">Send</button>
                    </div>
                    <div>
                        <ul className="list-group mt-3">
                            {
                                Entries.map((e, pos) => <li  key={pos} className="list-group">{e.userName} - {e.lastName} | user num: {pos + 1}</li>)
                            }
                        </ul>
                    </div>
                </form>
                <hr />
            </div>
        </Fragment>
    )
};

export default FormHooks;

