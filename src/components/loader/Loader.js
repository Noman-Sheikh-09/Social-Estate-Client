import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
export default function Loader(loading) {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'20vh' }}
        >
            <MoonLoader

                color={'#003366'}
                loading={loading}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}
