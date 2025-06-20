import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTransaction } from "@/store/stores";
import Barcode from "@/assets/barcode.gif";
import TransactionSuccess from "./TransactionSuccess";

type Props = {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
  onTransaction?: () => void;
  isDisabled?: boolean;
  text?: string;
};

const Transaction = ({
  isOpen,
  setIsOpen,
  onTransaction,
  isDisabled,
  text,
}: Props) => {
  const { transaction } = useTransaction();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        disabled={isDisabled ? true : false}
        onClick={onTransaction}
        className={`${
          isDisabled ? "bg-slate-500" : "bg-violet-500 cursor-pointer"
        } w-full  p-2 font-bold rounded-md text-white `}
      >
        {text ? text : "Checkout"}
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">Transaction</DialogTitle>
          <DialogDescription>
            <hr />
            <div className="grid grid-cols-2 my-2">
              <div>Phone Number</div>
              <div>: {transaction.phoneNumber}</div>

              <div>Quota:</div>
              <div>: {transaction.quota}</div>

              <div>Price:</div>
              <div>: Rp.{transaction.price?.toLocaleString()}</div>
            </div>
            <hr />
            <div className="flex justify-center my-4">
              <img src={Barcode} alt="barcode" className="w-34 h-34" />
            </div>
            <TransactionSuccess />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Transaction;
