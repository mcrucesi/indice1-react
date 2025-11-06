import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Inicio';
import { Blog } from './pages/Blog';
import { Post } from './pages/Post';
import { Galeria } from './pages/Galeria';
import { Nosotros } from './pages/Nosotros';
import { PronosticosList } from './pages/Pronosticos';
import { PronosticoDetail } from './pages/Pronostico';
import { CookieConsent } from './components/CookieConsent';
import { Privacidad } from './pages/Privacidad';

// Configuración de React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/noticias" element={<Blog />} />
                <Route path="/noticia/:slug" element={<Post />} />
                <Route path="/post/:slug" element={<Post />} />
                <Route path="/pronosticos" element={<PronosticosList />} />
                <Route path="/pronostico/:slug" element={<PronosticoDetail />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/privacidad" element={<Privacidad />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;