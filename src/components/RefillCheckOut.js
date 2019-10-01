import React, { useState, useRef, useEffect, Component } from 'react';
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { PayPalButton } from "react-paypal-button-v2";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from 'react-router-dom';
import axiosWithAuth from '../Utils/axiosWithAuth'
import plan from './plan.png'
import bg_A1_Rectangle_2_pattern from './bg_A1_Rectangle_2_pattern@2x.png'
import uploadingPlan from './uploadingPlan.png'

import paypalbtn from './paypalbtn.png'


import "../App.css"
import "../index.css"

import {
    Form,
    FormInput,
    FormTextarea,
    FormGroup,
    Col,
    // Card,
    CardHeader,
    CardBody,
    Container,
    Button,
    Row
  } from "shards-react";

  import {
    Carousel,
    Card
  } from 'react-bootstrap'



const RefillCheckOut = ({ history }) => {
  

      return (
        
          <div>
            {console.log(`written by Jason Yoo https://www.linkedin.com/in/jasonyoo1/ `)}
<br></br>
{/* <Card >
      <Card.Img src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay style={{width: "90%", margin: 'auto'}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Container className="refillContainer">
       <Row >
         <Col className =' refillLeft' sm="4">
         <br></br>
        <br></br>
           <h3 className='refillText'>Refill</h3>
           <p className='refillText'>1. Pay to refill your Plan<br/><br/>
           2. Enter SIM card phone number<br/><br/>
           3. ENJOY! </p>
           <div className= "payPalBtnRefill">
         <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="85ZW2K2LS9RCA"/>
          <input type="image" width="100%" src={paypalbtn} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
          </form>
          <br></br>
        <br></br>
        </div>
         </Col>
         <Col sm="4">
           <Form >
            <FormGroup className = 'refillFormGroup'>
            <br></br>
        <br></br>
              <Row className="activateBtn">
              <Card style={{ margin: 'auto', width: '15rem' }}>
            <h3 className='paraText'>Plan 1</h3>
             <p className='paraText' >Texts: 70</p>
            <p className='paraText' id ='paraborder'>DATA: 5 MB</p>
            <p className='paraText' id ='paraborder'>30 Days</p>
            <h3 className= 'paraText' id =''>$ 14.99</h3>
           </Card>
            </Row>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  </Card.ImgOverlay>
</Card> */}

<Card  style={{height: '10%'}}>
      <Card.Img src= {bg_A1_Rectangle_2_pattern } />
      <Card.ImgOverlay>
        <br></br>
        <br></br>
        {/* <br></br> */}
        {/* <br></br> */}
        <Container className="refillContainer">
       <Row >
       <Col id='activateCheckoutCon' sm="4">
           {/* <h2>Account</h2>
           <p>Enter your 10 cellphone number you recieved when activating your SiM card or enter the 19 digit code located on the SIM. Do not enter the letters.(Numbers Only)</p> */}
           <Form >
            <FormGroup className = 'refillFormGroup'>
              <Row className="activateBtn">
              <Card style={{ margin: 'auto', width: '15rem' }}>
            <h3 className='paraText'>Security Plan</h3>
             <p className='paraText' ><span role="img" aria-label="sheep">✔️</span> Texts something else </p>
            <p className='paraText' id ='paraborder'><span role="img" aria-label="sheep">✔️</span> DATA something else </p>
            <p className='paraText' id ='paraborder'><span role="img" aria-label="sheep">✔️</span> 30 Days</p>
            {/* <br></br> */}
            <h3 className= 'paraText'>$ 14.99</h3>
           </Card>
           <div className = 'checkoutPay'>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="94VU4QSDD9QZL"/>
            <input type="image" width="100%" src={paypalbtn} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
            </form>

            </div>
            </Row>
            </FormGroup>
          </Form>
        </Col>
         <Col id='activateCheckoutCon' sm="4">
           {/* <h2>Account</h2>
           <p>Enter your 10 cellphone number you recieved when activating your SiM card or enter the 19 digit code located on the SIM. Do not enter the letters.(Numbers Only)</p> */}
           <Form >
            <FormGroup className = 'refillFormGroup'>
              <Row className="activateBtn">
              <Card style={{ margin: 'auto', width: '15rem' }}>
            <h3 className='paraText'>Caregiver Plan</h3>
             <p className='paraText' > <span role="img" aria-label="sheep">✔️</span> Texts something else </p>
            <p className='paraText' id ='paraborder'><span role="img" aria-label="sheep">✔️</span> DATA something else </p>
            <p className='paraText' id ='paraborder'> <span role="img" aria-label="sheep">✔️</span> 30 days </p>
            <h3 className= 'paraText'>$ 5.99</h3>
           </Card>
           <div className = 'checkoutPay'>

            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="HECCT5GQ82F4S"/>
            <input type="image" width="100%" src={paypalbtn} border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
            </form>


               </div>
            </Row>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  </Card.ImgOverlay>
</Card>



    </div>
      );
    }

  export default RefillCheckOut

