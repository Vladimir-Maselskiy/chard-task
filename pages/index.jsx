import styles from '../styles/Home.module.css';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { Wellcome } from '../components/Wellcome/Wellcome';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <MainContainer>
          <Wellcome />
        </MainContainer>
      </main>
    </div>
  );
}
