import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './components/main.css'
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Image Gallery</title>
        
      </Head>

      <main>
        <Container maxWidth="lg">
         
          <Gallery />
        </Container>
      </main>
    </div>
  );
}
