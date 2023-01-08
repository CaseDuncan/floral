import React from "react";
import { data } from "../../data/Data";

const Collections = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {data.map((item) => {
          return (
            <div className="col-md-3 mx-2 mb-3 offset-md-3">
              <div className="card" style={{ width: "18rem" }} key={item.id}>
                      <img src={item.image_url} className="card-img-top" alt={item.name}/>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="card-text">{item.name}</p>
                    {/* <p className="fw-bold">Ksh. {item.price}</p> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
