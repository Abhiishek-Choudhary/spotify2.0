"use client"

import { Price, ProductWithPrice } from "@/types";
import Modal from "./Modal"
import Button from "./Button";
import { useState } from "react";
import { useUser } from "@/hooks/useUser";
import toast from "react-hot-toast";
import { postData } from "@/libs/helpers";
import { getStripe } from "@/libs/stripeClient";
import useSubscribeModal from "@/hooks/useSubscripeModal";

interface SubscribeModalProps{
    products: ProductWithPrice[];
}

const formatPrice = (price: Price)=>{
    const priceString = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: price.currency,
        minimumFractionDigits: 0
    }).format((price?.unit_amount || 0)/100);

    return priceString;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({
    products
}) => {
    const subscribeModal = useSubscribeModal();
    const { user, isLoading, subscription } = useUser(); 
    const[priceIdLoading, setPriceIdLoading] = useState<string>();

    const onChange = (open: boolean) => {
        if(!open){
            subscribeModal.onClose();
        }
    }

    const handleCheckout = async(price: Price) => {
         setPriceIdLoading(price.id);

         if(!user){
            setPriceIdLoading(undefined);
            return toast.error('Must be Logged in');
         }

         if(subscription){
            setPriceIdLoading(undefined);
            return toast('Already Subscribed');
         }

         try{
            const {sessionId} = await postData({
                url: 'api/create-checkout-session',
                data: { price }
            });

            const stripe = await getStripe();
            stripe?.redirectToCheckout({ sessionId });
         }catch(error){
            toast.error((error as Error)?.message)
         }finally{
            setPriceIdLoading(undefined);
         }
    };

    let content = (
        <div className="text-center">
           No products available.
        </div>
    );

    if(products.length){
        content=(
            <div>
                {products.map((product)=>{
                    if(!product.prices?.length){
                        return(
                            <div key={product.id}>
                                No prices available
                            </div>
                        );
                    }

                    return product.prices.map((price) => (
                        <Button key={price.id} onClick={()=>handleCheckout(price)} 
                                disabled={isLoading || price.id===priceIdLoading}
                                className="mb-4"
                        >
                             {`Subscribe for ${formatPrice(price)} a ${price.interval}`}
                        </Button>
                    ))
                })}
            </div>
        )
    }

    if(subscription){
        content = (
            <div className="text-center">
               Already Subscribed
            </div>
        )
    }

    return (
        <Modal title="Only for Premium Users"
               description="Listen to music with spotify Premium"
               isOpen={subscribeModal.isOpen}
               onChange={onChange}
        >
            Subscription
        </Modal>
    )
}

export default SubscribeModal;