   import React from 'react'
 import { useLocation } from 'react-router-dom'
 import {v4 as uuidv4} from 'uuid';
 import CryptoJS from 'crypto-js'
import { SUCCESS_ROUTE ,FAILURE_ROUTE} from '../../constants/route';
const baseurl=import.meta.env.VITE_APP_URL

const Payment = () => {
        const location=useLocation()
        console.log(location.state?.totalAmount)
        let totalAmount=location.state?.totalAmount;
         let transaction_uuid=uuidv4()
        let message=`total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`
        var hash = CryptoJS.HmacSHA256(message, "8gBm/:&EnhH.1/q");
 var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
 console.log(hashInBase64);

  return (
    <div>   
 <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"  className='text-center w-100 h-60  bg-amber-200 ml-150 mt-20' method="POST">
 Amount:<input type="text" className='border mt-20' id="amount" name="amount"  value={totalAmount} required/>
 <br/>
 <input type="hidden" id="tax_amount" name="tax_amount"  value ="0" required/>
 <input type="hidden" id="total_amount" name="total_amount" value={totalAmount} required/>
 <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} required/>
 <input type="hidden" id="product_code" name="product_code" value ="EPAYTEST" required/>
 <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required/>
 <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required/>
<input type="hidden" id="success_url" name="success_url" value={`${baseurl}${SUCCESS_ROUTE}`} required/>
 <input type="hidden" id="failure_url" name="failure_url" value={`${baseurl}${FAILURE_ROUTE}`} required/>
 <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required/>
 <input type="hidden" id="signature" name="signature" value={hashInBase64} required/>

 <input  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-20 ml-10' type="submit" value="PayViaToE-sewa"/>
 </form>

 </div>
    
  )
}

export default Payment;