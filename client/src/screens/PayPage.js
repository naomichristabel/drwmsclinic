import React, { useEffect } from "react";

const PayPage = () => {

    useEffect(() => {
        const Script = document.createElement('script');
        const Form = document.getElementById('payForm');
        Script.setAttribute('src','https://checkout.razorpay.com/v1/payment-button.js')
        
        //test button redirect to prod website
        Script.setAttribute('data-payment_button_id','pl_Jd11rjogQSLTDq')
       
        //test button redirect to localhost
        //Script.setAttribute('data-payment_button_id','pl_Jd0vqHpEaeB2Qq')
        
        //prod button to prod website
        //Script.setAttribute('data-payment_button_id','pl_Jcw8qjXhqDSb76')
        
        Script.async = true;
        Form.appendChild(Script);
      return () => {
          Form.removeChild(Script);
        }
      }, []);

  return (
    <section className="service_section layout_padding">
      <div className="container py_mobile_45">
        <div className="heading_container heading_center">
          <h2> Make Payment </h2>
          <form id="payForm"></form>
        </div>
      </div>
    </section>
  );
};

export default PayPage;
