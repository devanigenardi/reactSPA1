import React, { Fragment } from 'react'

const PropsUser = (props) => {
    console.log(props.foxes)
    return (
        <Fragment>
            <div className="container mx-auto mt-4">
                <div className="row">    
                    {
                        props.foxes.length > 0 ?
                        props.foxes.map((ele) => (
                            <div key={ele.id}  className="col-md-4">
                                <div className="card">
                                    <img src={`https://source.unsplash.com/1600x900/?${ele.url}`} className="card-img-top" />
                                    <div className="card-body">
                                        <h5>Fox name: {ele.FoxName}</h5>
                                        <strong>Fox age</strong>: {ele.FoxAge}
                                        <p>{ele.FoxDescription}</p>
                                    </div>
                                </div>
                            </div>
                        )) : <p>no hay usuarios</p>
                    }
                </div>
            </div>
            <hr/>
        </Fragment>
    )
}

export default PropsUser