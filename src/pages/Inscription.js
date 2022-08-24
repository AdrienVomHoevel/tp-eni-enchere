import React from "react";
import EniEnchere from "../components/EniEnchere";
import { useForm } from "react-hook-form";

const Inscription = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data =>
    console.log(data)
    )

  return (
    <div>
      <EniEnchere />

    </div>
  );
};

export default Inscription;
