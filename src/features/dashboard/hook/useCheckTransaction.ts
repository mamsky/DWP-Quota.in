import { useTransaction } from "@/store/stores";
import { useEffect, useState } from "react";

export const useCheckTransaction = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { transaction } = useTransaction();
  const phoneNumber = transaction.phoneNumber;
  const price = transaction.price;
  const quota = transaction.quota;
  useEffect(() => {
    if (phoneNumber !== null && price != null && quota != "") {
      setIsDisabled(true);
    }
  }, [phoneNumber, price, quota]);

  return {
    phoneNumber,
    price,
    quota,
    isDisabled,
  };
};
