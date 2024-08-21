import type { MagicItem, MagicProps } from "../interfaces/magic-props";
import axios, { type AxiosInstance } from "axios";

interface IdProps {
  id: string | undefined;
}

const baseURL: AxiosInstance = axios.create({
  baseURL: 'https://www.dnd5eapi.co',
});

async function getMagics(): Promise<MagicProps[]> {
  try {
    const response = await baseURL.get('/api/magic-items');
    
    if (!response.data) {
      throw new Error('Failed to fetch magic items');
    }

    return response.data.results;
  } catch (error) {
    throw new Error(`Error fetching magic items: ${(error as Error).message}`);
  }
}

async function getMagicByID({ id }: IdProps): Promise<MagicItem> {
  if (!id) {
    throw new Error('ID is undefined');
  }

  try {
    const response = await baseURL.get(`/api/magic-items/${id}`);
    
    if (!response.data) {
      throw new Error('Failed to fetch magic item');
    }

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching magic item: ${(error as Error).message}`);
  }
}

export { getMagics, getMagicByID }