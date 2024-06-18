"use client";
import { useState } from "react";

export default function AddProduct() {
  const [modal, setModal] = useState(false);

  function handleChange() {
    setModal(!modal);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div>
      <button
        onClick={handleChange}
        className="bg-primary text-white py-2 px-4 rounded"
      >
        Add new
      </button>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
            <h3 className="text-lg font-semibold mb-4">Add New</h3>
            <form action="">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="id"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="makanan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Makanan
                  </label>
                  <input
                    type="text"
                    id="makanan"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="kedai"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kedai
                  </label>
                  <input
                    type="text"
                    id="kedai"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="harga"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Harga
                  </label>
                  <input
                    type="text"
                    id="harga"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="lokasi"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Lokasi
                  </label>
                  <input
                    type="text"
                    id="lokasi"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nomor-whatsapp"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nomor Whatsapp
                  </label>
                  <input
                    type="text"
                    id="nomor-whatsapp"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                >
                  SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  placeholder="Enter a detailed description"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
