import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone, Sun } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="flex items-center justify-center bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors">
                <Sun className="h-5 w-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white flex items-center">
                MN<span className="text-primary">AGENCY</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              Leading provider of government-subsidized solar solutions and high-quality agricultural products. Empowering homes and farms with sustainable energy and modern farming solutions.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 hover:border-primary/50 hover:text-primary transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors inline-block">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors inline-block">Solar Solutions</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors inline-block">Agriculture</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors inline-block">About Us</Link>
              </li>
              <li>
                <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-block">PM Surya Ghar Yojana</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Tetelitol, Bengenakhowa<br />Golaghat, 785621</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+91 94350 54692<br />+91 93655 28209</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>mna52172@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-semibold text-lg">Business Hours</h3>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm space-y-2">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Monday - Friday</span>
                <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Saturday</span>
                <span className="text-white font-medium">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-zinc-400">Sunday</span>
                <span className="text-primary font-medium">Closed</span>
              </div>
            </div>
            
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-4 flex items-start gap-3">
              <Sun className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-accent-foreground/80 leading-relaxed">
                <span className="font-semibold block text-accent mb-1">Solar Inquiries</span>
                Specialist available Mon-Fri during business hours. Call ahead for consultations.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} MNAGENCY. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
