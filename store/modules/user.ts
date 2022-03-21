import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { cookies } from '../../services/fakeData';
import { User } from '../../domain/user';
import { Product } from '../../domain/product';

export interface UserSate {
  user: User;
  cart: { products: Product[] };
  cookies: Product[];
  orders: [];
}

export const state = (): UserSate => ({
  user: {
    id: '',
    name: '',
    email: '',
    preferences: [],
    allergies: [],
  },
  cart: { products: [] },
  cookies,
  orders: [],
});

export const getters: GetterTree<UserSate, UserSate> = {
  user: (state: UserSate) => state.user,
};

export const mutations: MutationTree<UserSate> = {
  setUser(state: UserSate, payload) {
    state.user = payload;
  },
  setCart(state: UserSate, payload) {
    state.cart = payload;
  },
  setOrders(state: UserSate, payload) {
    state.orders = payload;
  },
  emptyCart(state: UserSate) {
    state.cart = { products: [] };
  },
};

export const actions: ActionTree<UserSate, UserSate> = {
  updateUser({ commit }, payload) {
    commit('setUser', payload);
  },
  updateCart({ commit }, payload) {
    commit('setCart', payload);
  },
  updateOrders({ commit }, payload) {
    commit('setOrders', payload);
  },
  emptyCart({ commit }) {
    commit('emptyCart');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
