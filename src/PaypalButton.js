import React from 'react';
import {PayPalButtons} from '@paypal/react-paypal-js';

function PayPalButtonCustom(props){
    return (
        <PayPalButtons
            createOrder={(data, actions)=>{
                return actions.order.create({
                    purchase_units: [
                        {
                            description : props.invoice,
                            amount : {
                                value : props.totalValue
                            },
                            custom_id: '19',
                            item_category: 'Pantalones',
                        }
                    ]
                })
            }}
            onApprove={ async(data, actions)=>{
                const order =  await actions.order.capture()
                console.log("order",order);
            }}
        />
    );
}

export default PayPalButtonCustom;