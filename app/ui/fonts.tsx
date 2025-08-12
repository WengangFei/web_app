// this file is used to load the fonts from Google Fonts

import { Roboto_Mono } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const inter = Roboto_Mono({ subsets: ['latin'], weight: ['500', '700'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });