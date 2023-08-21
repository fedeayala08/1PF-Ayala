import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState, authFeatureKey } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectAuthUser = createSelector(selectAuthState, (state) => state.authUser);

export const selectIfAuthUserRoleIsAdmin= createSelector(selectAuthState,(state)=> state.authUser?.role==='ADMINISTRADOR');