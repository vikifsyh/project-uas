"use client";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import app from "../../lib/firebase/init";

const firestore = getFirestore(app);

type Product = {
  id: string;
  desc: string;
  image: string;
  img: string;
  location: string;
  name: string;
  nomor: string;
  price: string;
  stall: string;
};

type AddProductProps = {
  productToEdit?: Product;
  closeModal: () => void;
  isEditMode: boolean;
};

export default function AddProduct({
  productToEdit,
  closeModal,
  isEditMode,
}: AddProductProps) {
  const [product, setProduct] = useState<Product>({
    id: "",
    desc: "",
    image: "",
    img: "/img/stall.png",
    location: "",
    name: "",
    nomor: "",
    price: "",
    stall: "",
  });

  useEffect(() => {
    if (isEditMode && productToEdit) {
      setProduct(productToEdit);
    }
  }, [isEditMode, productToEdit]);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct((prevProduct: any) => ({
          ...prevProduct,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateData = async (event: any) => {
    event.preventDefault();
    const col = collection(firestore, "products");
    try {
      await addDoc(col, {
        desc: product.desc,
        image: product.image,
        img: product.img,
        location: product.location,
        name: product.name,
        nomor: product.nomor,
        price: product.price,
        stall: product.stall,
      });
      closeModal();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleUpdateData = async (event: any) => {
    event.preventDefault();
    const productDoc = doc(firestore, "products", product.id);
    try {
      await updateDoc(productDoc, {
        desc: product.desc,
        image: product.image,
        img: product.img,
        location: product.location,
        name: product.name,
        nomor: product.nomor,
        price: product.price,
        stall: product.stall,
      });
      closeModal();
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
        <h3 className="text-lg font-semibold mb-4">
          {isEditMode ? "Edit Product" : "Add New Product"}
        </h3>
        <form onSubmit={isEditMode ? handleUpdateData : handleCreateData}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="stall"
                className="block text-sm font-medium text-gray-700"
              >
                Stall
              </label>
              <input
                type="text"
                id="stall"
                name="stall"
                value={product.stall}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={product.location}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="nomor"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor Whatsapp
              </label>
              <input
                type="text"
                id="nomor"
                name="nomor"
                value={product.nomor}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG, or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="desc"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows={4}
              value={product.desc}
              onChange={handleChange}
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
              {isEditMode ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
