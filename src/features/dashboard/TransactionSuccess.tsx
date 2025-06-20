import PaymentSuccessfully from "@/assets/payment-success.gif";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTransaction } from "@/store/stores";
import { useEffect, useState } from "react";
const TransactionSuccess = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(5);
  const { resetTransaction } = useTransaction();

  const handleTransaction = () => {
    setIsOpen(!isOpen);
    resetTransaction();
    window.location.reload();
  };

  useEffect(() => {
    if (isOpen) {
      if (countdown == 0) {
        resetTransaction();
        window.location.reload();
      }

      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown, resetTransaction, isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-full bg-violet-500 p-2 font-bold rounded-md text-white cursor-pointer">
        Payment Status
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl text-center">
            Payment Success
          </DialogTitle>
          <DialogDescription>
            <h1 className="my-4 text-center">
              will be closed automatically in {countdown}
            </h1>
            <div className="flex justify-center">
              <img
                src={PaymentSuccessfully}
                alt="Payment Success"
                className="w-24"
              />
            </div>
          </DialogDescription>
          <DialogFooter>
            <button
              onClick={handleTransaction}
              className="w-full bg-blue-500 p-2 font-bold text-xl rounded-md cursor-pointer text-white"
            >
              Close
            </button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionSuccess;
