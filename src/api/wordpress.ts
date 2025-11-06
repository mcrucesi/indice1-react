import axios, { type AxiosInstance } from "axios";
import type {
  WPPost,
  WPPage,
  WPCategory,
  WPPronosticoPost,
} from "../types/wordpress";

class WordPressAPI {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: import.meta.env.VITE_WP_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Posts
  async getPosts(params?: {
    page?: number;
    per_page?: number;
    categories?: number;
    search?: string;
  }) {
    const response = await this.client.get<WPPost[]>("/posts", {
      params: {
        _embed: true,
        ...params,
      },
    });

    let info: WPPost[] = [];
    if (!params?.categories) {
      response.data.map((post) => {
        if (!post.categories.includes(11)) {
          info.push(post);
        }
      });
    } else info = response.data;

    return {
      posts: info,
      total: parseInt(response.headers["x-wp-total"] || "0"),
      totalPages: parseInt(response.headers["x-wp-totalpages"] || "0"),
    };
  }

  async getPostBySlug(slug: string) {
    const response = await this.client.get<WPPost[]>("/posts", {
      params: {
        slug,
        _embed: true,
      },
    });

    return response.data[0] || null;
  }

  async getPostById(id: number) {
    const response = await this.client.get<WPPost>(`/posts/${id}`, {
      params: {
        _embed: true,
      },
    });

    return response.data;
  }

  // Pronósticos - Posts con categoría específica y campos ACF
  async getPronosticos(params?: {
    page?: number;
    per_page?: number;
    hipodromo?: string;
  }) {
    const response = await this.client.get<WPPronosticoPost[]>("/posts", {
      params: {
        _embed: true,
        categories: await this.getPronosticosCategoryId(), // ID de categoría "Pronósticos"
        ...params,
      },
    });

    return {
      pronosticos: response.data,
      total: parseInt(response.headers["x-wp-total"] || "0"),
      totalPages: parseInt(response.headers["x-wp-totalpages"] || "0"),
    };
  }

  async getPronosticoBySlug(slug: string) {
    const response = await this.client.get<WPPronosticoPost[]>("/posts", {
      params: {
        slug,
        _embed: true,
        categories: await this.getPronosticosCategoryId(),
      },
    });

    return response.data[0] || null;
  }

  // Helper para obtener ID de categoría "Pronósticos"
  private async getPronosticosCategoryId(): Promise<number | undefined> {
    try {
      const categories = await this.getCategories();
      const pronosticosCat = categories.find(
        (cat) =>
          cat.name.toLowerCase() === "pronósticos" || cat.slug === "pronosticos"
      );
      return pronosticosCat?.id;
    } catch {
      return undefined;
    }
  }

  // Pages
  async getPages() {
    const response = await this.client.get<WPPage[]>("/pages", {
      params: {
        _embed: true,
      },
    });

    return response.data;
  }

  async getPageBySlug(slug: string) {
    const response = await this.client.get<WPPage[]>("/pages", {
      params: {
        slug,
        _embed: true,
      },
    });

    return response.data[0] || null;
  }

  // Categories
  async getCategories() {
    const response = await this.client.get<WPCategory[]>("/categories");
    return response.data;
  }

  async getCategoryById(id: number) {
    const response = await this.client.get<WPCategory>(`/categories/${id}`);
    return response.data;
  }

  // Helper para obtener categorias distintas a pronosticos
  async getNotPronosticoCategories() {
    try {
      const categories = await this.getCategories();
      const pronosticosCat = categories.filter(
        (cat) =>
          cat.name.toLowerCase() !== "pronósticos" || cat.slug !== "pronosticos"
      );
      return pronosticosCat;
    } catch {
      return undefined;
    }
  }
}

export const wpAPI = new WordPressAPI();
