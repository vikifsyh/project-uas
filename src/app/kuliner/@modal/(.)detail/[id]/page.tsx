import Icon from "@/app/components/atom/Icon";
import Modal from "@/app/components/core/Modal";
import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );

  return (
    <Modal>
      <div className="md:flex gap-5 md:justify-between">
        <div className="max-w-xl">
          <Image
            src={product.data.image}
            alt={product.data.name}
            width={1000}
            height={1000}
            className="w-full object-cover object-center rounded-[4px] h-[200px] sm:h-[300px]"
          />
        </div>
        <div className="max-w-md">
          <div className="lg:p-4 mt-2">
            <h2 className="text-lg lg:text-xl text-baseBlack font-semibold">
              {product.data.name}
            </h2>
            <p className="text-sm md:text-base text-gray-500 mt-5">
              {product.data.desc}
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6">
                  <Image
                    alt={product.data.img}
                    src={product.data.img}
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="text-base lg:text-lg text-baseBlack font-semibold">
                  {product.data.stall}
                </p>
              </div>

              <div className="flex items-center">
                <Icon name="location" width={20} height={20} />
                <p className="text-sm md:text-base text-gray-500">
                  {product.data.location}
                </p>
              </div>
            </div>
            <p className="text-xl lg:text-2xl text-primary mt-5">
              <span className="text-sm">Rp.</span>
              {product.data.price}
            </p>
            <Link
              href={`https://wa.me/${product.data.nomor}`}
              className="mt-2 md:mt-6 px-3 py-2 bg-primary text-baseWhite text-sm rounded-md w-full block text-center hover:scale-105"
            >
              Pesan
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}
