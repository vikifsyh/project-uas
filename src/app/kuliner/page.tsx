// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { getData } from "../services/products";
// import Link from "next/link";
// import Icon from "../components/atom/Icon";
// import Loading from "./loading";

// type ProductPageProps = { params: { slug: string } };

// export default function ProductPage(props: ProductPageProps) {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 8;
//   const { params } = props;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getData("http://localhost:3000/api/product");
//         setProducts(data.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const totalItems = products.flatMap((product: any) => product.makanan).length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const currentItems = products
//     .flatMap((product: any) => product.makanan)
//     .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   // const handleBeliClick = (nomor: string) => {
//   //   window.location.href = `https://wa.me/${nomor}`;
//   // };

//   // Loading UI
//   if (loading) {
//     return (
//       <>
//         <Loading />
//       </>
//     );
//   }

//   const handleBeliClick = (nomor: string) => {
//     window.location.href = `https://wa.me/${nomor}`;
//   };

//   return (
//     <div className="lg:mx-[100px] lg:my-14 m-5">
//       <div className="bg-gradient-to-r from-primary to-secondary text-white text-center p-4 rounded-lg mb-8">
//         <h2 className="text-xl lg:text-3xl font-bold">
//           Selamat Datang di Santapan Kuliner Kami!
//         </h2>
//         <p className="mt-2">
//           Temukan dan nikmati berbagai hidangan lezat kami yang dibuat dengan
//           penuh cinta.
//         </p>
//       </div>
//       {/* Page Header */}
//       <div className="mb-8 text-center">
//         <h1 className="lg:text-2xl text-lg font-semibold text-baseBlack">
//           Sajian Kuliner
//         </h1>
//         <p className="text-gray-600 mt-2">
//           Nikmati berbagai hidangan lezat kami. Setiap hidangan dibuat dengan
//           bahan berkualitas dan cinta.
//         </p>
//       </div>
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mt-5 lg:mt-10">
//         {currentItems.map((food: any) => (
//           <Link
//             href={`/kuliner/detail/${food.id}`}
//             key={food.id}
//             className="bg-white shadow-md rounded-lg"
//           >
//             <Image
//               src={food.image}
//               alt={food.name}
//               width={1000}
//               height={1000}
//               className="w-full object-cover object-center rounded-t-[4px] h-[200px] sm:h-[300px]"
//             />

//             <div className="mt-4 p-2 lg:p-4">
//               <h2 className="text-sm lg:text-xl text-baseBlack">{food.name}</h2>
//               <p className="text-sm lg:text-xl text-primary">
//                 <span className="text-[10px] md:text-sm">Rp.</span>
//                 {food.price.toLocaleString()}
//               </p>
//               <button
//                 onClick={() => handleBeliClick(food.nomor)}
//                 className="mt-2 md:mt-4 px-3 p-2 bg-primary text-baseWhite text-sm rounded-md w-full hover:scale-105"
//               >
//                 Pesan
//               </button>
//             </div>
//           </Link>
//         ))}
//       </div>
//       {/* Pagination controls */}
//       <div className="flex items-center justify-between border-t mt-5 md:mt-8 rounded-sm bg-white px-4 py-3 sm:px-6 ">
//         <div className="flex flex-1 justify-between sm:hidden">
//           <button
//             onClick={handlePrevious}
//             disabled={currentPage === 1}
//             className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Sebelumnya
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={currentPage === totalPages}
//             className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//           >
//             Selanjutnya
//           </button>
//         </div>
//         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//           <div>
//             <p className="text-sm text-gray-700">
//               Menampilkan
//               <span className="font-medium">
//                 {" "}
//                 {(currentPage - 1) * itemsPerPage + 1}{" "}
//               </span>
//               hingga
//               <span className="font-medium">
//                 {" "}
//                 {Math.min(currentPage * itemsPerPage, totalItems)}{" "}
//               </span>
//               dari
//               <span className="font-medium"> {totalItems} </span>
//               makanan
//             </p>
//           </div>
//           <div>
//             <nav
//               className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//               aria-label="Pagination"
//             >
//               <button
//                 onClick={handlePrevious}
//                 disabled={currentPage === 1}
//                 className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//               >
//                 <span className="sr-only">Previous</span>
//                 <Icon name="prev" width={12} height={12} />
//               </button>
//               {Array.from({ length: totalPages }, (_, index) => (
//                 <Link key={index + 1} href={`/kuliner?page=${index + 1}`}>
//                   <button
//                     onClick={() => handlePageChange(index + 1)}
//                     className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
//                       index + 1 === currentPage
//                         ? "z-10 bg-primary text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         : "text-baseBlack ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 </Link>
//               ))}
//               <button
//                 onClick={handleNext}
//                 disabled={currentPage === totalPages}
//                 className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//               >
//                 <span className="sr-only">Next</span>
//                 <Icon name="next" width={12} height={12} />
//               </button>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "../components/atom/Icon";
import Loading from "./loading";
import { getData } from "@/services/products";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  nomor: string;
};

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [loading, setLoading] = useState(true);

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

  // Loading UI
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="lg:mx-[100px] lg:my-14 m-5">
      <div className="bg-gradient-to-r from-primary to-secondary text-white text-center p-4 rounded-lg mb-8">
        <h2 className="text-xl lg:text-3xl font-bold">
          Temukan Sensasi Kuliner Kami!
        </h2>
        <p className="mt-2">
          Nikmati ragam hidangan lezat kami yang dibuat dengan bahan berkualitas
          dan penuh cinta.
        </p>
      </div>
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="lg:text-2xl text-lg font-semibold text-baseBlack">
          Sajian Kuliner
        </h1>
        <p className="text-gray-600 mt-2">
          Nikmati berbagai hidangan lezat kami. Setiap hidangan dibuat dengan
          bahan berkualitas dan cinta.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7 mt-5 lg:mt-10">
        {currentProducts.length > 0 &&
          currentProducts.map((product: Product) => (
            <Link
              href={`/kuliner/detail/${product.id}`}
              key={product.id}
              className="bg-white shadow-md rounded-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={1000}
                height={1000}
                className="w-full object-cover object-center rounded-t-[4px] h-[200px] sm:h-[300px]"
              />

              <div className="mt-4 p-2 lg:p-4">
                <h2 className="text-sm lg:text-xl text-baseBlack">
                  {product.name}
                </h2>
                <p className="text-sm lg:text-xl text-primary">
                  <span className="text-[10px] md:text-sm">Rp.</span>
                  {product.price.toLocaleString()}
                </p>
                <Link
                  href={`https://wa.me/${product.nomor}`}
                  className="mt-2 md:mt-6 px-3 py-2 bg-primary text-baseWhite text-sm rounded-md w-full block text-center hover:scale-105"
                >
                  Pesan
                </Link>
              </div>
            </Link>
          ))}
      </div>

      {/* Pagination */}
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
  );
}
