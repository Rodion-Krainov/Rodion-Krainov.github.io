import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <head ><title>Frontend Web Development Project</title></head>
      <body>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
      <Footer />
      </body>
      </html>
  );
}