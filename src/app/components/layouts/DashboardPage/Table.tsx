"use client";
import AddProduct from "@/app/(admin)/dashboard/addProduct";
import Icon from "@/app/components/atom/Icon";
import { getData } from "@/services/products";
import { useEffect, useState } from "react";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import app from "../../../lib/firebase/init";

const firestore = getFirestore(app);

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  nomor: string;
  stall: string;
  location: string;
};

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function Table(props: ProductPageProps) {
  const { params } = props;
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await getData("http://localhost:3000/api/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openEditModal = (product: Product) => {
    setProductToEdit(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setProductToEdit(null);
    setModalOpen(false);
    fetchProducts();
  };

  const handleDeleteProduct = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmed) {
      const productDoc = doc(firestore, "products", id);
      try {
        await deleteDoc(productDoc);
        fetchProducts(); // Refresh the product list after deletion
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  // Pagination handlers
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="w-3/4 mx-auto">
      <div className="relative my-4 ml-20 overflow-x-auto shadow-md sm:rounded-lg">
        <div className="py-4">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-primary text-white py-2 px-4 rounded"
          >
            Add Product
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Produk Kuliner Kami
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Daftar produk kuliner dari UMKM Lokal yang dirancang untuk
              membantu Anda menikmati makanan, menjelajahi cita rasa baru,
              mendukung ekonomi lokal, dan banyak lagi.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Makanan
              </th>
              <th scope="col" className="px-6 py-3">
                Kedai
              </th>
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Lokasi
              </th>
              <th scope="col" className="px-6 py-3">
                Nomor Whatsapp
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.length > 0 &&
              currentProducts.map((product: Product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">{product.stall}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td className="px-6 py-4">{product.location}</td>
                  <td className="px-6 py-4">{product.nomor}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      className="font-medium text-white bg-red-600 px-3 py-2 rounded-md"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="font-medium text-white bg-yellow-300 px-3 py-2 rounded-md ml-2"
                      onClick={() => openEditModal(product)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t mt-5 md:mt-8  border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
            >
              Sebelumnya
            </button>
            <button
              onClick={handleNextPage}
              disabled={indexOfLastProduct >= products.length}
              className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${
                indexOfLastProduct >= products.length
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-50"
              }`}
            >
              Selanjutnya
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Menampilkan{" "}
                <span className="font-medium">{indexOfFirstProduct + 1}</span>{" "}
                hingga{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastProduct, products.length)}
                </span>{" "}
                dari <span className="font-medium">{products.length}</span>{" "}
                makanan
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-50 focus:outline-offset-0"
                  }`}
                >
                  <span className="sr-only">Sebelumnya</span>
                  <Icon name="prev" width={12} height={12} />
                </button>
                {/* Render page numbers */}
                {Array.from(
                  { length: Math.ceil(products.length / productsPerPage) },
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        currentPage === index + 1
                          ? "bg-primary text-white focus:outline-offset-0"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
                <button
                  onClick={handleNextPage}
                  disabled={indexOfLastProduct >= products.length}
                  className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                    indexOfLastProduct >= products.length
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-50 focus:outline-offset-0"
                  }`}
                >
                  <span className="sr-only">Selanjutnya</span>
                  <Icon name="next" width={12} height={12} />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <AddProduct
          productToEdit={productToEdit}
          closeModal={closeModal}
          isEditMode={!!productToEdit}
        />
      )}
    </div>
  );
}
