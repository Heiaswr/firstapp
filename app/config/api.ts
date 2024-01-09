import useAPI from "../hooks/useAPI";

import News from "../models/News";
import CatFact from "../models/CatFact";

const baseUrl = "https://catfact.ninja";
const secondUrl = "https://tournament-ffc44-default-rtdb.europe-west1.firebasedatabase.app";

export const useCatFact = () => useAPI<CatFact>(baseUrl, "/fact");
export const useNews = () => useAPI<News[]>(secondUrl, "/");