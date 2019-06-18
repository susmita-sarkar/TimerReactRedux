import { createStore } from "redux";
import { changeTime } from "../reducers/Reducers";

export const createMystore = () => createStore(changeTime);
