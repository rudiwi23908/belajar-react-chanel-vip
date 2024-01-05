import Button from "../components/Elements/Button/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { Fragment, useState } from "react";
import Counter from "../components/Fragments/Counter";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Domba Super",
    price: 1000000,
    image: "/img/sheep.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, error distinctio. Numquam ducimus eum accusamus quod nobis possimus quas unde alias officiis, distinctio corrupti ratione officia recusandae dicta, maxime excepturi?",
  },
  {
    id: 2,
    name: "Domba Standard",
    price: 500000,
    image: "/img/sheep.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, error distinctio. Numquam ducimus eum accusamus quod nobis possimus quas unde alias officiis, distinctio corrupti ratione officia recusandae dicta, maxime excepturi?",
  },
  {
    id: 3,
    name: "Domba Premium",
    price: 800000,
    image: "/img/sheep.png",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quaerat!",
  },
];

const email = localStorage.getItem("email");

export const ProductsPage = () => {
  const [cart, setCart] = useState([
    // {
    //   id: 1,
    //   qty: 1,
    // },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-end h-10 bg-blue-600 text-white text-xl items-center px-10 ">
        {email}
        <Button classname="bg-pink-500 ml-5" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
      <div className="flex gap-1 pt-3 px-3 justify-between">
        <div className="w-8/12 flex gap-2 h-full">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}></CardProduct.Header>
              <CardProduct.Body name={product.name}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              ></CardProduct.Footer>
            </CardProduct>
          ))}
        </div>

        <div className="w-4/12 rounded-md border-4 border-yellow-300">
          <h1 className="text-3xl font-bold text-blue-600 text-center mb-2">
            Cart
          </h1>
          <table className="w-full">
            <thead className="border-b-2 border-yellow-400 ">
              <tr className="">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id} className="w-full">
                    <td>{product.name}</td>
                    <td>
                      Rp
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b> Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center ">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};
