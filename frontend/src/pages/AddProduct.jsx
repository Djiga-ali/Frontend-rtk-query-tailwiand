import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../app/features/category/categorySlice";
import { useAddNewProductMutation } from "../app/features/product/productSlice";
import { useGetAllAttributesQuery } from "../app/features/attribute/attributeSlice";
import { useGetAllShopQuery } from "../app/features/shop/shopSlice";

const AddProduct = () => {
  const [addNewProduct, { isLoading, isSuccess, isError, error }] =
    useAddNewProductMutation();

  const navigate = useNavigate();

  const { data: categories } = useGetCategoriesQuery("categoryList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  //   console.log("categories:", categories);
  const { data: ProductAttributes } = useGetAllAttributesQuery();
  //   console.log("ProductAttributes:", ProductAttributes);
  const { data: Shops } = useGetAllShopQuery();
  //   console.log("Shops:", Shops);

  const [name, setName] = useState("");
  const [shop, setShop] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [attributes, setAttributes] = useState([]);

  const onNameChanged = (e) => setName(e.target.value);
  const onShopChanged = (e) => setShop(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onLanguageChanged = (e) => setLanguage(e.target.value);
  const onAttributesChanged = (e) => setAttributes(e.target.value);
  const onCategoryIdChanged = (e) => setCategoryId(e.target.value);

  const productData = {
    name,
    shop,
    language,
    description,
    attributes,
    category: categoryId,
  };

  // console.log("productData:", productData);

  const addProduct = async (e) => {
    e.preventDefault();

    const sentData = await addNewProduct(productData);
    console.log("sentData:", sentData);
  };

  useEffect(() => {
    if (isSuccess) {
      setName("");
      setShop("");
      setDescription("");
      setLanguage("");
      setAttributes([]);
      setCategoryId("");
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
                {/* <div>
                  <label
                    htmlFor="ColorNameChanged"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Shop
                  </label>
                  <input
                    type="text"
                    name="shop"
                    id="shop"
                    value={shop}
                    onChange={onShopChanged}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your first name"
                    required=""
                  />
                </div> */}

                <div>
                  <label
                    htmlFor="language"
                    className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Language
                  </label>
                  <input
                    type="text"
                    name="language"
                    id="language"
                    value={language}
                    onChange={onLanguageChanged}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    cols="50"
                    value={description}
                    onChange={onDescriptionChanged}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></textarea>
                  {/* <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={onDescriptionChanged}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required=""
                  /> */}
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Shop
                  </label>
                  <select name="" id="" value={shop} onChange={onShopChanged}>
                    <option value="">Choose shop</option>
                    {Shops?.map((shop) => (
                      <option
                        key={shop._id}
                        value={shop._id}
                        className="text-black"
                      >
                        {shop.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
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
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Attributes
                  </label>
                  <select
                    name=""
                    id=""
                    value={attributes}
                    onChange={onAttributesChanged}
                    multiple
                  >
                    {ProductAttributes?.map((productAttr) => (
                      <option
                        key={productAttr?._id}
                        value={productAttr?._id}
                        className="text-black"
                      >
                        {productAttr?.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>
                    Pick all your favorite vegetables:
                    <select
                      name="selectedVegetables"
                      multiple={true}
                      //   defaultValue={}
                    >
                      {ProductAttributes?.map((productAttr) => (
                        <option key={productAttr?._id} value={productAttr?._id}>
                          {productAttr?.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-400 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  // disabled={!canSave}
                >
                  Add new product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
