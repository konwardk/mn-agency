import { HeroCarousel } from '@/components/home/HeroCarousel';
import { ArrowRight, Leaf, ShieldCheck, Sun, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />
      
      {/* Features/Highlights Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              Empowering Agriculture with Modern Solutions
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              MNAGENCY provides high-quality agricultural products and state-of-the-art solar energy solutions, helping communities grow smarter and greener.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-950 rounded-xl flex items-center justify-center mb-6 text-primary">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-zinc-900 dark:text-white">Premium Fertilizers</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Scientifically formulated fertilizers and soil enhancers designed to maximize crop yield and promote sustainable farming practices.
              </p>
              <Link href="/products" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                View Products &rarr;
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950 rounded-xl flex items-center justify-center mb-6 text-accent">
                <Sun className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-zinc-900 dark:text-white">Subsidized Solar</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Reduce energy costs with our high-efficiency solar panels. We facilitate government subsidies to make clean energy affordable.
              </p>
              <Link href="/services" className="text-accent font-semibold hover:underline inline-flex items-center gap-1">
                Learn More &rarr;
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-zinc-900 dark:text-white">Trusted Expertise</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Years of industry experience ensuring you receive the best guidance, products, and support for all your agricultural and energy needs.
              </p>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1">
                About Us &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agricultural Products Section */}
      <section className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-semibold mb-6">
                <SproutIcon className="w-4 h-4" />
                Featured Catalog
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
                Top Grade Agricultural Supplies
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Ensure a bountiful harvest with our industry-leading seeds, organic fertilizers, and crop protection solutions. We source only the best for your fields.
              </p>
            </div>
            <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shrink-0">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium NPK Fertilizer Blend",
                category: "Fertilizers",
                price: "Bulk Pricing Available",
                image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "High-Yield Hybrid Corn Seeds",
                category: "Seeds",
                price: "Seasonal Discount",
                image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Organic Crop Protector",
                category: "Plant Health",
                price: "Eco-Certified",
                image: "https://images.unsplash.com/photo-1563514227147-6d27139a3285?q=80&w=1000&auto=format&fit=crop"
              }
            ].map((product, idx) => (
              <div key={idx} className="group flex flex-col bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 transition-colors">
                <div className="relative h-64 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <Image fill src={product.image} alt={product.title} className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold rounded-full z-10 text-zinc-900 dark:text-zinc-100 shadow-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6 flex-1">{product.price}</p>
                  <button className="flex items-center justify-between w-full pt-4 border-t border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                    Inquire Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Subsidized Solar Section */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold border border-accent/20">
                <Zap className="w-4 h-4" />
                Government Subsidized Energy
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Power Your Farm with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">Affordable Solar</span> Solutions.
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Transitioning to renewable energy has never been easier or more cost-effective. As a certified vendor, MNAGENCY helps you navigate government subsidies to install high-efficiency solar panels on your property for a fraction of the cost.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Up to 50% coverage through government grants",
                  "Significantly lower utility bills year-round",
                  "Professional installation and maintenance",
                  "Robust panels designed for agricultural environments"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-zinc-300 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-zinc-950 font-bold hover:bg-accent/90 transition-transform hover:-translate-y-1 shadow-lg shadow-accent/20">
                  Calculate Savings
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/10 backdrop-blur-sm">
                  Schedule Consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[3/4] lg:aspect-square shadow-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-transparent to-accent/10 z-10" />
                <Image 
                  fill
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop" 
                  alt="Solar panels on a farm"
                  className="object-cover"
                />
                
                {/* Floating Metric Badge */}
                <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 z-20 shadow-xl max-w-xs transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-accent rounded-xl">
                      <Sun className="w-6 h-6 text-zinc-950" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-zinc-300">Average Savings</div>
                      <div className="text-2xl font-bold text-white">40-60%</div>
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400 mt-3 pt-3 border-t border-white/10">
                    Based on recent agricultural installations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Helper icon component for standardizing the Sprout leaf size differently if needed
function SproutIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}
