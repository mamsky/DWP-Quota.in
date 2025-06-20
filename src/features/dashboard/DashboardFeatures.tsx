import { useTransaction } from "@/store/stores";
import { imageUrl } from "@/utils/imageUrl";
import { providerCard } from "@/utils/provider-card";
import { useEffect } from "react";
import { useCheckTransaction } from "./hook/useCheckTransaction";
import { useInputQuota } from "./hook/useInputQuota";
import Transaction from "./Transaction";

const DashboardFeatures = () => {
  const {
    data,
    handleButton,
    active,
    register,
    errors,
    isOpen,
    setIsOpen,
    onTransaction,
    watch,
    setActive,
  } = useInputQuota();
  const { transaction } = useTransaction();
  const { isDisabled } = useCheckTransaction();

  const phoneNumber = watch("phoneNumber")?.toString();
  const provider = providerCard(phoneNumber || "");
  const imagesUrl = imageUrl(provider);

  const filterData =
    provider == "" ? data : data?.filter((fill) => fill.provider == provider);

  useEffect(() => {
    if (provider == "") {
      setActive(0);
    }
  }, [provider, setActive]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br pt-10 from-violet-500 to-white ">
      <div className="flex flex-col gap-4 justify-center items-center h-full bg-gradient-to-br from-violet-500 to-white">
        <div className="backdrop-blur-xl bg-white/50 shadow-xl p-2 mx-2 rounded-2xl w-full max-w-xl flex gap-2">
          <img
            src={imagesUrl}
            alt="Telkomsel"
            className="w-16 h-16 object-contain"
          />
          <input
            disabled={transaction.phoneNumber !== null ? true : false}
            type="number"
            placeholder="081122334455"
            {...register("phoneNumber", {
              required: "Nomor Hp Required",
              minLength: { value: 10, message: "Min 10 angka" },
            })}
            className="w-full p-2 rounded-lg border border-gray-500 "
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="backdrop-blur-xl p-4 bg-white/50 shadow-xlp-6 mx-2 mb-20 rounded-2xl w-full max-w-xl flex flex-col gap-2">
          {filterData?.map((datas) => (
            <button
              key={datas.id}
              disabled={provider == "" ? true : false}
              onClick={() =>
                handleButton(
                  datas.price,
                  datas.name + " " + datas.validity,
                  datas.id
                )
              }
              className={`border hover:bg-white/40 cursor-pointer flex justify-between w-full p-2 rounded-md ${
                active == datas.id ? "bg-white" : ""
              } `}
            >
              <h1>
                {datas.name} | {datas.validity}
              </h1>
              <h1>Rp. {datas.price}</h1>
            </button>
          ))}
          <Transaction
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onTransaction={onTransaction}
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardFeatures;
