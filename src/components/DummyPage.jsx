import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit"

// usercontext for userid
import User_context from './User_context'

const DummyPage = () => {

  // let userID = localStorage.getItem('userId') 
  // console.log("im userid")
  // console.log(userID)

  //  const [userID,setUserID] = useState("")

  const { userID } = useContext(User_context)

  useEffect(() => {
    console.log("Calling fetch items")
    console.log(userID)
    // let userID = sessionStorage.getItem('userId')
    // console.log(userID)

    // setUserID(localStorage.getItem('userId'))
    // console.log(userID)

    fetchItems();

  },[userID]);




  const [items, setItems] = useState([]);
  const [Final_out, setFinal_out] = useState([]);

  const fetchItems = async () => {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const data = await fetch("http://127.0.0.1:8000/reclist?userId=" + userID);
    console.log(data);
    const items = await data.json();

    console.log(items);
    // setItems(items);
    setFinal_out(items)

  };

  // setFinal_out(items)
  console.log("im final out")
  console.log(Final_out)




  return (
    <>
      {
      Final_out.length>1 ? <div>

      <MDBContainer fluid className="my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Recommended Items for UserID {userID} </strong>
        </h4>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                {Final_out.length>1 && <MDBCardImage
                  src={`data:image/png;base64,${Final_out[0]["product_img"]}`}
                  fluid
                  className="w-100"
                />}
                
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name : {Final_out[0]["product_name"]}</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Description : {Final_out[0]["Product_description"]}</p>
                </a>
                <h6 className="mb-3">Price : {Final_out[0]["Product_price"]}</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                {
                  Final_out.length>1 &&  <MDBCardImage
                  src={`data:image/png;base64,${Final_out[1]["product_img"]}`}
                  fluid
                  className="w-100"
                />
                }
               
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Eco</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name : {Final_out[1]["product_name"]}</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Description : {Final_out[1]["Product_description"]}</p>
                </a>
                <h6 className="mb-3">Price : {Final_out[1]["Product_price"]}</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                {Final_out.length>1 && <MDBCardImage
                  src={`data:image/png;base64,${Final_out[2]["product_img"]}`}
                  fluid
                  className="w-100"
                />}
                
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name : {Final_out[2]["product_name"]}</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Description : {Final_out[2]["Product_description"]}</p>
                </a>
                <h6 className="mb-3">
                  <s>2800</s>
                  <strong className="ms-2 text-danger">Price : {Final_out[2]["Product_price"]}</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                {Final_out.length>1 && <MDBCardImage
                  src={`data:image/png;base64,${Final_out[3]["product_img"]}`}
                  fluid
                  className="w-100"
                />}
                
                <a href="#!">
                  <div className="mask">
                    <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name : {Final_out[3]["product_name"]}</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Description : {Final_out[3]["Product_description"]}</p>
                </a>
                <h6 className="mb-3">
                  <s>1200</s>
                  <strong className="ms-2 text-danger">Price : {Final_out[3]["Product_price"]}</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                {Final_out.length>1 && <MDBCardImage
                  src={`data:image/png;base64,${Final_out[4]["product_img"]}`}
                  fluid
                  className="w-100"
                />}
                
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100"></div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name : {Final_out[4]["product_name"]}</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Description : {Final_out[4]["Product_description"]}</p>
                </a>
                <h6 className="mb-3">Price : {Final_out[4]["Product_price"]}</h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          {/* <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                {Final_out.length>1 && <MDBCardImage
                  src={`data:image/png;base64,${Final_out[4]["product_img"]}`}
                  fluid
                  className="w-100"
                />}
                
                <a href="#!">
                  <div className="mask">
                    <div class="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <a href="#!" className="text-reset">
                  <h5 className="card-title mb-3">Product name</h5>
                </a>
                <a href="#!" className="text-reset">
                  <p>Category</p>
                </a>
                <h6 className="mb-3">
                  <s>$61.99</s>
                  <strong className="ms-2 text-danger">$50.99</strong>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </div> : <></>
    }
    </>
    





  )
}

export default DummyPage