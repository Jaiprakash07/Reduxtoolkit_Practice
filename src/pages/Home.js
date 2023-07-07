import React from "react";
import Product from "../components/Product";

function Home() {
    return (
        <>
        <div>
            <div>
                <h2 className="text-center pt-4">Redux_Toolkit Store</h2>
            </div>
            <div className="pt-4 mx-auto" style={{width: '80%'}}>
                <Product />
            </div>
        </div>
        </>
    )
}

export default Home;