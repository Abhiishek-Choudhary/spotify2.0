"use client"

import { useEffect, useState } from "react"

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
    const [isMounted, SetIsMounted] = useState(false);

    useEffect(() => {
       SetIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

  return (
    <>
     <AuthModal />
     <UploadModal />
    </>
  )
}

export default ModalProvider