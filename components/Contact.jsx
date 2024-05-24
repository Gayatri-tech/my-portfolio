"use client";

import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="md:text-3xl font-bold mb-4 text-xl">Contact</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-2">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
