import styles from '../styles/Home.module.css';
import { MainContainer } from '../components/MainContainer/MainContainer';
import { Wellcome } from '../components/Wellcome/Wellcome';
import { useContext } from 'react';
import { useAppContext } from '../context/state';
// import { AppContext } from '../context/state';

export default function Home() {
  const ctx = useAppContext();
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
