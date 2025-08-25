import { useLoadProducts } from "../hooks/useLoadProducts";
import FavoritesCounter from "./FavoritesCounter";
import ProductsList from "./ProductsList";
import ProductsLoading from "./ProductsLoading";
import styles from "./styles/ProductsPage.module.scss";

function ProductsPage() {
  const { data: products, isLoading } = useLoadProducts();

  const lastUpdate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());

  if (isLoading) {
    return <ProductsLoading />;
  }

  if (!products) {
    return <div>No products found</div>;
  }

  return (
    <main>
      <section className={styles.headerSection}>
        <div>
          <h3>Products </h3>
          <p>{lastUpdate}</p>
        </div>
        <FavoritesCounter />
      </section>
      <ProductsList products={products} />
    </main>
  );
}

export default ProductsPage;
