import { Children } from "react";
import Button from "../Elements/Button/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs border-yellow-300 border-4 rounded-lg shadow bg-slate-300 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="product" className="p-1 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-2 pb-2 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight  text-slate-700">
          {name}
        </h5>
      </a>
      <p className="text-base text-slate-600">{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex justify-between items-center mx-2 mb-2">
      <span className="text-lg font-bold text-slate-700">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-600 " onClick={() => handleAddToCart(id)}>
        Add to cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
