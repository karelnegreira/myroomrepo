"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

enum STEPS {
  location = 0, 
  DATE = 1, 
  INFO = 2
}

const SearchModal = () => {
    const searchModal = useSearchModal();
    const router = useRouter();
    const params = useSearchParams();

    const [step, nextStep] = useState(STEPS.location); 

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