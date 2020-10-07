import { combineReducers } from "redux";

import authReducer from "./authReducer";
import TrendingReducer from "./TrendingReducer";
import MovieReducer from "./MovieReducer";
import TvShowReducer from "./TvShowReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  auth: authReducer,
  trending: TrendingReducer,
  movie: MovieReducer,
  tvShow: TvShowReducer,
  search: searchReducer,
});
