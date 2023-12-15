import React from "react";
import { FormField } from "../../components";
import axios from "axios";

export default function Post() {
  const [form, setForm] = React.useState({ prompt: "", image: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await axios.post("https://demo.imagineapi.dev/items/images/", {
      headers: {
        Authorization: "Bearer u667iLDO2Xfu0-qpv_nu82EeeDtYGlsf", // <<<< TODO: remember to change this
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const data = await res.data;
    if (data) {
      setForm((state) => ({ ...state, prompt: "", image: `data:image/jpeg;base64,${data.photo}` }));
    }
  }

  function OnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormField required name="prompt" placeholder="Imagine.." value={form.prompt} onChange={OnChange} />
        <button type="submit">Submit</button>
      </form>
      {form.image && <img src={form.image} alt="" />}
    </div>
  );
}
