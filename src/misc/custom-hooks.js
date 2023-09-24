import { useCallback, useState } from "react";

export function useModalState (daefaultValue =false){

    const [isOpen ,setIsOpen]= useState(daefaultValue);

    const open = useCallback(()=>{ setIsOpen(true),[]});
    const close = useCallback(()=>{ setIsOpen(false),[]});
    
    return {isOpen ,open ,close}
}