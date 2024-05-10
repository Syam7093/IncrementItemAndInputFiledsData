import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    maindata();
  }, []);

  const [data, setdata] = useState([]);
  const [cart, setcart] = useState([]);
  const [inc,setincrement]=useState(1)
 
  const maindata = async () => {
    const alladata = await axios.get("https://fakestoreapi.com/products");
   
    const all=alladata.data.map((e)=>{
        return {...e,inc:1}
    })
  
    setdata(all);
  };

  const cartdata = (e) => {
   

    const cartitem = data.filter((m) => {
      return m !== e;
    });
   
    setcart([...cart, e]);
  };



  const increment=(id)=>{
   
   
    const some=cart.map((e)=>{
        console.log(e.id===id,"sai")
        if(e.id===id)
            {
                return {...e,inc:e.inc+1}  
            }
            else{
                return e
            }
        
    })
    setcart(some)
    console.log(some,"somess")
  }
  const decrement=(id)=>{
    const some=cart.map((e)=>{
        console.log(e.id===id,"sai")
        if(e.id===id)
            {
                return {...e,inc:e.inc-1}  
            }
            else{
                return e
            }
        
    })
    setcart(some)
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {data.map((e) => {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "5px",
                borderRadius: "5px",
              }}
            >
              <div
                onClick={() => {
                  cartdata(e);
                }}
              >
                <img src={e.image} width={"110px"} height={"100px"}></img>
                <button style={{ fontWeight: "bold" }}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={handleShow}>cart {cart.length === 0 ? "" : cart.length}</button>

      <>
      {/* <Button variant="primary" >
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        
       {
        cart.map((e)=>{
            return(
                <div style={{padding:"20px"}}>
                    <img src={e.image} height={"70px"} width={"70px"}></img>
                    <button  style={{borderRadius:"5px", width:"30px",fontWeight:"bold",height:"30px"}} onClick={()=>{
decrement(e.id)
                    }}>-</button>
                    <span>{e.inc}</span>
                    <button  style={{borderRadius:"5px",width:"30px",fontWeight:"bold"}} onClick={()=>{
                        increment(e.id)
                    }}>+</button>
                </div>
            )
        })
       }
        
      </Modal>
    </>
    </div>
  );
};
