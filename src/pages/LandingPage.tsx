import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { ChatbotWidget } from '../components/ChatbotWidget';
import { CartDrawer } from '../components/CartDrawer';
import { FaqSection } from '../components/FaqSection';
import { FeatureSection } from '../components/FeatureSection';
import { Footer } from '../components/Footer';
import { GallerySection } from '../components/GallerySection';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { NewsletterSection } from '../components/NewsletterSection';
import { OrderModal } from '../components/OrderModal';
import { SpecificationSection } from '../components/SpecificationSection';
import { TestimonialSection } from '../components/TestimonialSection';
import { product } from '../data/product';
import { useAnalytics } from '../hooks/useAnalytics';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { storageKeys } from '../utils/storageKeys';

export function LandingPage() {
  const { track } = useAnalytics();
  const [isDark, setIsDark] = useLocalStorage(storageKeys.darkMode, false);
  const [isFavorite, setIsFavorite] = useLocalStorage(storageKeys.favorite, false);
  const [cart, setCart] = useLocalStorage<string[]>(storageKeys.cart, []);
  const [viewedProducts, setViewedProducts] = useLocalStorage<string[]>(storageKeys.viewedProducts, []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    if (!viewedProducts.includes(product.id)) {
      setViewedProducts((current) => [...current, product.id]);
    }
  }, [setViewedProducts, viewedProducts]);

  const toggleFavorite = () => {
    const nextFavorite = !isFavorite;
    setIsFavorite(nextFavorite);
    track('favorite_toggle', { productId: product.id, next: nextFavorite });
    toast.success(nextFavorite ? 'Đã thêm vào yêu thích.' : 'Đã bỏ khỏi yêu thích.');
  };

  const addToCart = () => {
    setCart((current) => [...current, product.id]);
    track('cart_add', { productId: product.id });
    toast.success('Đã thêm AI Smart Watch X Pro vào giỏ hàng.');
    setIsCartOpen(true);
  };

  const decreaseCart = () => {
    setCart((current) => current.slice(0, Math.max(current.length - 1, 0)));
  };

  const preorder = () => {
    track('cta_click', { target: 'preorder' });
    if (cart.length === 0) {
      setCart([product.id]);
    }
    setIsOrderOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar isDark={isDark} cartCount={cart.length} onToggleDark={() => setIsDark((current) => !current)} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <Hero
          isFavorite={isFavorite}
          onPreorder={preorder}
          onToggleFavorite={toggleFavorite}
          onAddToCart={addToCart}
        />
        <FeatureSection />
        <SpecificationSection />
        <GallerySection />
        <TestimonialSection />
        <FaqSection />
        <NewsletterSection onSubmitEvent={(email) => track('newsletter_submit', { email })} />
      </main>
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        count={cart.length}
        onClose={() => setIsCartOpen(false)}
        onDecrease={decreaseCart}
        onIncrease={addToCart}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsOrderOpen(true);
        }}
      />
      <OrderModal
        isOpen={isOrderOpen}
        quantity={Math.max(cart.length, 1)}
        onClose={() => setIsOrderOpen(false)}
        onSubmitted={(email) => track('newsletter_submit', { email, source: 'order_form' })}
      />
      <ChatbotWidget onOpen={() => track('chatbot_open', { productId: product.id })} />
    </div>
  );
}
