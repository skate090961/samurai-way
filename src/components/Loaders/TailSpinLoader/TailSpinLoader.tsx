import React from 'react'
import {TailSpin} from "react-loader-spinner"

const TailSpinLoader = () => {
    return (
            <TailSpin
                height="80"
                width="80"
                color="#00a3ff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{justifyContent: 'center', position: 'fixed', top: '40%', width: '100%'}}
                wrapperClass=""
                visible={true}
            />
    )
}

export default TailSpinLoader