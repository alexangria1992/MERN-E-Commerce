import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/homeComponents/Rating";
import Header from "./../components/Header";
import Message from "./../components/LoadingError/Error";
import products from "../data/Products";
import { useParams } from "react-router-dom";

const SingleProduct = ({ match }) => {
  const { id } = useParams();
  const product = products.find((p) => p._id === match.params.id);
  return <></>;
};

export default SingleProduct;
