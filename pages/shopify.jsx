import styles from '../styles/Home.module.css';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { Shopify } from '../components/Shopify/Shopify';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <MainContainer>
          <Shopify />
        </MainContainer>
      </main>
    </div>
  );
}
