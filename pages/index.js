import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import styles from "../styles/Home.module.css";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout title="Home" className={styles.container}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
