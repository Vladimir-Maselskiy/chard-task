import { MainContainer } from '../components/MainContainer/MainContainer';
import { GmailConnect } from '../components/GmailConnect/GmailConnect';

export default function Home() {
  return (
    <main>
      <MainContainer>
        <GmailConnect />
      </MainContainer>
    </main>
  );
}
