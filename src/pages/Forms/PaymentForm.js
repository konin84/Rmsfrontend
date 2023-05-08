import React, { useState, useEffect } from "react";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import * as authService from "../../services/authServices";
import * as userService from "../../services/userService";
import * as houseService from "../../services/houseService";

import jwt_decode from "jwt-decode";
import { Grid } from "@material-ui/core";

export default function PaymentForm(props) {
  const { addOrEdit, recordForEdit } = props;
  const [data, setData] = useState([]);
  const [houseData, setHouseData] = useState([]);

  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
  const [user, setUser] = useState(jwt_decode(currentUser.access));

  //

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("paymentMethod" in fieldValues)
      temp.paymentMethod = fieldValues.length !==0 ? "" : "This field is required.";
    if ("amount" in fieldValues)
      temp.amount = fieldValues.amount ? "" : "This field is required.";
   
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const paymentType = [
    { id: "Other", title: "Bank Transfer" },
    { id: "Cash", title: "Cash" },
    { id: "Cheque", title: "Cheque" },
    { id: "Momo", title: "Momo" }

  ];

  console.log('PAYMENT TYPE', paymentType)
  const myAgent = () => {
      userService.tenantRealtor().then((res) => {
        console.log('USER', res.data)
        setData(res.data);
      });
   
  };
  const myHouse = () => {
        houseService.tenantHouse().then((res) => {
        console.log('HOUSE', res.data)
        setHouseData(res.data);
      });
   
  };

  const house = [
    houseData.map((h) => {
      return { id: h.reference, title: h.reference  };
    }),
  ];
  const agent = [
    data.map((r) => {
      return { id: r.email, title: r.first_name + " " + r.last_name };
    }),
  ];

  console.log('AGENT INFO', agent)
  console.log('LOG IN USER', user)
  console.log('MY HOUSE DATA', houseData)

  const initialeValues = {
    tenant: user.email,
    paymentMethod: "",
    house: "",
    realtor:"",
    amount: "",
  };

  const { values, setValues, errors, setErrors, handleInputChange } = useForm(
    initialeValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Data", values);
    if (validate()) {
      addOrEdit(values);
  }
    
  
  };

  useEffect(() => {
    myAgent();
    myHouse();
    if (recordForEdit !== null) {
      setValues({ ...recordForEdit });
    }
  },[]);

  return (
    <div>
      <div className="container">

      <Form onSubmit={handleSubmit}>

      <Grid container>
        <Grid item xs={6}>
            
            <Controls.Select
              options={paymentType}
              onChange={handleInputChange}
              value={values.paymentMethod}
              name="paymentMethod"
              label='Payment Method'
              required
                />
            <Controls.Select
                name="house"
                label="Select the House"
                options={house[0]}
                onChange={handleInputChange}
                value={values.house}
                required
            /> 

            </Grid>

             <Grid item xs={6}> 

              <Controls.Select
                name="realtor"
                label="Select Your agent"
                options={agent[0]}
                onChange={handleInputChange}
                value={values.realtor}
                required
                />  

              <Controls.Input
                name="amount"                   
                onChange={handleInputChange}
                value={values.amount}
                label="Amount"
                error={errors.amount}
              />
                 
                 <div className="mx-3 md:flex mt-2">
                <div className="md:w-full">
                  <button
                    className="w-full bg-gray-900 text-white 
                    font-bold mr-8 py-2  border-b-4 hover:border-b-2 
                     border-gray-500 hover:border-gray-100 rounded-md"
                    type="submit"
                  >
                    Save data
                  </button>
                </div>
              </div>

                </Grid> 
              
                
            </Grid>


      
       

      </Form>

      </div>
    </div>
  );
}
