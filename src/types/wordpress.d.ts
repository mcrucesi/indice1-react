// WordPress REST API Types
export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WPAuthor[];
    "wp:featuredmedia"?: WPMedia[];
    "wp:term"?: WPTerm[][];
  };
  acf?: WPAcfPronostico;
}

export interface WPPage {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: WPMedia[];
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface WPAuthor {
  id: number;
  name: string;
  description: string;
  avatar_urls: {
    [key: string]: string;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WPApiResponse<T> {
  data: T;
  headers: {
    "x-wp-total": string;
    "x-wp-totalpages": string;
  };
}

// Tipos para Pronósticos con ACF
export interface WPPronosticoACF {
  hipodromo: string;        // Nombre del hipódromo
  date: string;             // Fecha del pronóstico
  programa: string;         // URL del PDF del programa
  pronostico: string;       // URL de la imagen del pronóstico
}

export interface WPPronosticoPost extends WPPost {
  acf: PronosticoACF;
}
