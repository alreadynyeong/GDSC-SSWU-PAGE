import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers, Store } from "redux";

const rootReducer = (state: any, action: AnyAction): CombinedState<any> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({});
      return combinedReducer(state, action);
    }
  }
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

const makeStore: MakeStore<EnhancedStore> = () => store;

export const wrapper = createWrapper<Store>(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;
