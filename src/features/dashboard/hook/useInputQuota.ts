import { useTransaction } from "@/store/stores";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { FormQuota, Quota } from "../types/kuota";

export const useInputQuota = () => {
  const [data, setData] = useState<Quota[]>();
  const { setTransaction } = useTransaction();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<number | null>(null);
  const {
    setValue,
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormQuota>({
    defaultValues: {
      phoneNumber: null,
      price: null,
      quota: "",
    },
  });

  useEffect(() => {
    axios
      .get(`${baseUrl}/packages`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [baseUrl]);

  const handleButton = (price: number, quota: string, active: number) => {
    setValue("price", price);
    setValue("quota", quota);
    setActive(active);
  };

  const onSubmit = (data: FormQuota) => {
    setIsOpen(true);
    setTransaction(data);
    reset({
      phoneNumber: null,
      price: null,
      quota: "",
    });
    setActive(0);
  };

  const onTransaction = handleSubmit(onSubmit);

  return {
    data,
    active,
    register,
    handleButton,
    reset,
    watch,
    errors,
    onTransaction,
    isOpen,
    setIsOpen,
    setActive,
  };
};
