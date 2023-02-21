import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  return { setOpen, open };
};

export default useModal;
