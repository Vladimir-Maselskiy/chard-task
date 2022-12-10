import styles from '../styles/Home.module.css';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { WithoutShopify } from '../components/WithoutShopify/WithoutShopify';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <MainContainer>
          <WithoutShopify />
        </MainContainer>
      </main>
    </div>
  );
}
