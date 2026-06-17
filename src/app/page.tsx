import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import PurchaseNotifications from '@/components/PurchaseNotifications';

export default function Home() {
  return (
    <main>
      <CategoriesSection />
      <HeroSection />
      <PurchaseNotifications />
    </main>
  );
}
