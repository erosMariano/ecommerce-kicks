import { createContext, useCallback, useEffect, useState } from "react";

interface ProductProviderProps {
  children: React.ReactNode;
}

interface ProductList {
  id: string;
  title: string;
  description: string;
  sizeSelected: number;
  quantity: number;
  urlImage: string;
  color: string;
}

interface ProductContext {
  quantity: number;
  addQuantity: () => void;

  productList: ProductList[];
  addProductInCart: (product: ProductList) => void;
}
export const ProductContext = createContext<ProductContext>({
  quantity: 0,
  addQuantity: () => {},
  addProductInCart: (product: ProductList) => {},

  productList: [],
});

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [quantity, setQuantity] = useState(0);

  const [productList, setProductList] = useState<ProductList[]>([]);

  const handleAddQuantity = useCallback((): void => {
    setQuantity((value) => value + 1);
  }, []);

  function handleAddProductInCart(products: ProductList) {
    const verifyProductExists = productList.filter((product) => {
      return product.id === products.id;
    });

    if (verifyProductExists.length < 1) {
      const data: ProductList = {
        id: products.id,
        description: products.description,
        quantity: products.quantity,
        sizeSelected: products.sizeSelected,
        title: products.title,
        urlImage: products.urlImage,
        color: products.color,
      };

      setProductList((prevState) => [...prevState, data]);
    } else {
      updateProduct(verifyProductExists[0]);
    }
  }

  function updateProduct(newProduct: ProductList) {
    setProductList((prevProductList) => {
      return prevProductList.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        }
        return product;
      });
    });
  }

  return (
    <ProductContext.Provider
      value={{
        quantity: quantity,
        addQuantity: handleAddQuantity,
        productList: productList,
        addProductInCart: handleAddProductInCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
