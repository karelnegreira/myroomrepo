"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

enum STEPS {
  LOCATION = 0, 
  DATE = 1, 
  INFO = 2
}

const SearchModal = () => {
    const searchModal = useSearchModal();
    const router = useRouter();
    const params = useSearchParams();

    const [step, nextStep] = useState(STEPS.LOCATION); 
    const [guestCount, setGuestCount] = useState(1);
    const [roomCount, setRoomCount] = useState(1);
    const [bathroomCount, setBathroomCount] = useState(1);

  return (
    <Modal 
        isOpen={searchModal.isOpen}
        onClose={searchModal.onClose}
        onSubmit={searchModal.onOpen}
        title="Filters"
        actionLabel="Search"
    />
  );
}

export default SearchModal