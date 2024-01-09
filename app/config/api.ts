import useAPI from "../hooks/useAPI";

import News from "../models/News";
import CatFact from "../models/CatFact";

const baseUrl = "https://catfact.ninja";

export const useCatFact = () => useAPI<CatFact>(baseUrl, "/fact");
export const useNews = () => useAPI<News>(baseUrl, "/news");