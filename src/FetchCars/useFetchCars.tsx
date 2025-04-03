import { useState, useEffect } from "react";
import axios from "axios";

interface Car {
  make: string;
  model: string;
  year: number;
  image_url: string;
}

interface PixabayResponse {
  hits: {
    webformatURL: string;
  }[];
}

const PIXABAY_API_URL = "https://pixabay.com/api/";
const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_KEY;


const useFetchCars = (make: string) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!make) return;

    setLoading(true);
    setError(null);

    axios
      .get<PixabayResponse>(PIXABAY_API_URL, {
        params: {
          key: PIXABAY_API_KEY,
          q: `${make} car`,
          image_type: "photo",
          per_page: 6,
        },
      })
      .then((response) => {
        const images = response.data.hits.map((hit, index) => ({
          make,
          model: `Modelo ${index + 1}`,
          year: 2020 + (index % 5),
          image_url: hit.webformatURL,
        }));

        setCars(images);
      })
      .catch(() => {
        setError("Erro ao carregar os carros.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [make]);

  return { cars, loading, error };
};

export default useFetchCars;
