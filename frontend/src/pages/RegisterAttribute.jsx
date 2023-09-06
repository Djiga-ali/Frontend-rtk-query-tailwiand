import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAddNewProductsAttributesMutation } from "../app/features/attribute/attributeSlice";
import { useGetCategoriesQuery } from "../app/features/category/categorySlice";

const RegisterAttribute = () => {
  const [addNewProductsAttributes, { isLoading, isSuccess, isError, error }] =
    useAddNewProductsAttributesMutation();

  const navigate = useNavigate();

  //   const { data: categories } = useGetCategoriesQuery("categoryList", {
  //     pollingInterval: 15000,
  //     refetchOnFocus: true,
  //     refetchOnMountOrArgChange: true,
  //   });
  //   console.log("categories:", categories);

  const [name, setName] = useState("");
  const [productColorName, setProductColorName] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  //   const [categoryId, setCategoryId] = useState(false);
  const [images, setImages] = useState([]);

  //handle and convert it in base 64
  const handleImage = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const onNameChanged = (e) => setName(e.target.value);
  const onProductColorNameChanged = (e) => setProductColorName(e.target.value);
  const onPriceChanged = (e) => setPrice(e.target.value);
  const onSizeChanged = (e) => setSize(e.target.value);
  //   const onCategoryIdChanged = (e) => setCategoryId(e.target.value);

  const productAttributes = {
    name,
    productColorName,
    price,
    size,
    // category: categoryId,
    images,
  };

  // console.log("productData:", productData);

  const addProduct = async (e) => {
    e.preventDefault();

    const sentData = await addNewProductsAttributes(productAttributes);
    console.log("sentData:", sentData);
  };

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setProductColorName("");
      setPrice("");
      setSize("");
      //   setCategoryId("");
      setImages([]);
      navigate("/");
    }
  }, [isSuccess, navigate]);

  return (
    <div className="flex-1 w-full ">
      <div></div>
      {isLoading ? (
        <p>loading .... </p>
      ) : (
        <div className="w-full flex flex-col  mt-40 items-center justify-center   md:h-screen lg:py-0  ">
          <Link
            to="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </Link>
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              {isError && (
                <p className="text-red-400">{error?.data?.message}</p>
              )}
              <form className="space-y-4 md:space-y-6" onSubmit={addProduct}>
                <div>
                  <label
                    htmlFor="images"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product images
                  </label>
                  <input
                    type="file"
                    name="images"
                    id="images"
                    onChange={handleImage}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your first name"
                    required=""
                    multiple={true}
                    min="1"
                    max="1"
                  />
                  {images &&
                    images.map((img) => (
                      <div key={img.public_id}>
                        <img className="w-10 h-10" src={img} alt="" />{" "}
                      </div>
                    ))}
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={onNameChanged}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your first name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="ColorNameChanged"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Color Name
                  </label>
                  <input
                    type="text"
                    name="ColorNameChanged"
                    id="ColorNameChanged"
                    value={productColorName}
                    onChange={onProductColorNameChanged}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your first name"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="price"
                    className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={onPriceChanged}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="size"
                    className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Size
                  </label>
                  <input
                    type="text"
                    name="size"
                    id="size"
                    value={size}
                    onChange={onSizeChanged}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                    multiple
                  />
                </div>
                {/* <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    name=""
                    id=""
                    value={categoryId}
                    onChange={onCategoryIdChanged}
                  >
                    <option value="">Choose category</option>
                    {categories?.map((category) => (
                      <option
                        key={category._id}
                        value={category._id}
                        className="text-black"
                      >
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div> */}

                <button
                  type="submit"
                  className="w-full text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  // disabled={!canSave}
                >
                  Add product attributes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterAttribute;
