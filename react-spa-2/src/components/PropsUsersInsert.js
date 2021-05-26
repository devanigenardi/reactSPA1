import React, { useState } from 'react'

import PropsUser from './PropsUsers'

const PropsUsersInsert = () => {

    const Foxtag = [
        {id: 0, FoxName: "red fox", FoxAge: 25, FoxDescription: "Lorem Ipsum is simply dummy text!", url: "Nature"},
        {id: 1, FoxName: "silver fox", FoxAge: 22, FoxDescription: "Lorem Ipsum is simply dummy text!", url: "Animals"},
        {id: 2, FoxName: "geay fox", FoxAge: 21, FoxDescription: "Lorem Ipsum is simply dummy text!", url: "Fox"}
    ]

    //state

    const [foxes, setFoxes] = useState(Foxtag)

    return (
        <div>
            <PropsUser foxes={foxes} />
        </div>
    )
}

export default PropsUsersInsert;