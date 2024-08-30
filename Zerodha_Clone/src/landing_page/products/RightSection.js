import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    leranMore,
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={leranMore} style={{ textDecoration: "none" }}>Learn More&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-6">
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
