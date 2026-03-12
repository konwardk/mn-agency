import { HeroCarousel } from '@/components/home/HeroCarousel';
import { ArrowRight, Leaf, ShieldCheck, Sun, Zap, Info, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      {/* Solar Solutions Section (Primary Focus) */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold border border-accent/20">
                <Zap className="w-4 h-4" />
                Solar Solutions for Everyone
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Power Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">Home, Office, or Farm</span> with Solar.
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Transitioning to renewable energy has never been easier. Whether you're looking to reduce your household bills, power a commercial office, or scale an agricultural operation, MNAGENCY provides high-efficiency solar panels tailored to your needs.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "Residential rooftop systems for smart homes",
                  "Commercial-grade installations for office complexes",
                  "Subsidized agricultural solar for farms",
                  "Professional installation and 24/7 monitoring"
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

      {/* PM Surya Ghar Subsidy Section */}
      <section className="py-24 bg-white dark:bg-zinc-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-zinc-50 dark:bg-zinc-950 rounded-[2.5rem] p-8 md:p-16 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Image src="/images/next.svg" width={200} height={200} alt="Background" className="dark:invert" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-bold border border-blue-200 dark:border-blue-800">
                  <Info className="w-4 h-4" />
                  Government Scheme: PM Surya Ghar
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white leading-tight">
                  PM Surya Ghar: <span className="text-primary">Muft Bijli Yojana</span>
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Launched by the Government of India, this scheme provides subsidies of up to **₹78,000** for rooftop solar installations, enabling households to get up to **300 units of free electricity** every month.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="text-3xl font-bold text-primary mb-1">₹30,000</div>
                    <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Per kW Subsidy</div>
                    <p className="text-xs text-zinc-400 mt-2">Up to 2kW installation</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                    <div className="text-3xl font-bold text-primary mb-1">₹78,000</div>
                    <div className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Max Subsidy</div>
                    <p className="text-xs text-zinc-400 mt-2">For systems 3kW and above</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="https://pmsuryaghar.gov.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                  >
                    Apply on Official Portal
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all"
                  >
                    Consult Our Experts
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-5 relative">
                <div className="aspect-square relative rounded-3xl overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl">
                  <Image 
                    fill 
                    src="/images/solaronfield.jpg" 
                    alt="PM Surya Ghar Scheme" 
                    className="object-cover"
                  />
                </div>
                {/* Benefits Tag */}
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl border-4 border-white dark:border-zinc-950 max-w-[200px]">
                  <div className="text-2xl font-bold text-zinc-950">300 Units</div>
                  <div className="text-sm font-medium text-zinc-800">Free Electricity Monthly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features/Highlights Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-950 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 dark:text-white mb-6">
              Empowering Your Home & Farm
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              MNAGENCY integrates state-of-the-art solar energy solutions with high-quality agricultural products, helping communities grow smarter and greener.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Solar (Priority) */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950 rounded-xl flex items-center justify-center mb-6 text-accent">
                <Sun className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-zinc-900 dark:text-white">Subsidized Solar</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Reduce energy costs with our high-efficiency solar panels. We facilitate government subsidies like PM Surya Ghar to make clean energy affordable.
              </p>
              <Link href="/services" className="text-accent font-semibold hover:underline inline-flex items-center gap-1">
                Calculate Savings &rarr;
              </Link>
            </div>

            {/* Feature 2 - Agriculture */}
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

            {/* Feature 3 - Expertise */}
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

      {/* Featured Agricultural Products Section (Secondary) */}
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
                image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "High-Yield Hybrid Corn Seeds",
                category: "Seeds",
                price: "Seasonal Discount",
                image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop"
              },
              {
                title: "Organic Crop Protector",
                category: "Plant Health",
                price: "Eco-Certified",
                image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop"
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
