import "@/app/ui/global.css";
import { inter } from '@/app/ui/fonts';

//add meta data
export const metadata = {
  title: 'Pick-up',
  description: 'Pick-up',
  keywords: 'Pick-up',
  icons: {
    icon: '/opengraph-image.png',
  }
}
export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className={`${ inter.className} antialiased`}>{children}</body>
    </html>
  );
}
