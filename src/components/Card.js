import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
export default function Card(props) {
  let options = props.options || {}; // safety check
  let priceOptions = Object.keys(options); // e.g., ["Half", "Full"]
 
  let dispatch = useDispatchCart();
  let data= useCart();
  const priceRef = useRef();
  const foodItem = props.foodItem;


  const [qty,setQty] = useState(1)
  const[size, setSize] = useState("")
  useState(1)

const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })


    // setBtnEnable(true)

  }

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() =>{
    setSize(priceRef.current.value)
  },[])

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img
          src={
            props.foodItem.img?.startsWith("/images/card/")
              ? props.foodItem.img
              : `/images/card/${props.foodItem.img || "default.jpg"}`
          }
          className="card-img-top"
          alt={props.foodItem.name}
          style={{height : "120px" , objectFit: "fill"}}
        />

        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded"  onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=> setSize(e.target.value)}>
              {priceOptions.length > 0 ? (
                priceOptions.map((key) => (
                  <option key={key} value={key}>
                    {key} - ₹{options[key]}
                  </option>
                ))
              ) : (
                <option disabled>No size options</option>
              )}
            </select>

            <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
          </div>
          <hr />
          <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
