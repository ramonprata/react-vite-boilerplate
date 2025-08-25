import { HorizontalCardList } from "@shared/components";
import ProductCard from "./ProductCard";
import styles from "./styles/HighlightedProducts.module.scss";
import { useLoadHighlightedProducts } from "../hooks/useLoadProducts";
import ProductsLoading from "./ProductsLoading";
import { Link } from "react-router-dom";

const HighlightedProducts = () => {
  const { data: highlightedProducts, isLoading } = useLoadHighlightedProducts();

  if (isLoading) {
    return <ProductsLoading />;
  }

  if (!highlightedProducts) {
    return <div>No highlighted products found.</div>;
  }

  const cards = highlightedProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className={styles.highlightedProducts}>
      <HorizontalCardList cards={cards} />
      <Link className={styles.seeAllLink} to="/products">
        See All Products
      </Link>
    </div>
  );
};

export default HighlightedProducts;
