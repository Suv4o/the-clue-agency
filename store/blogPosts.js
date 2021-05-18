export const state = () => ({
  documentPosts: ""
});

export const mutations = {
  UPDATE_DOCUMENT_POSTS(state, value) {
    state.documentPosts = JSON.parse(value);
  }
};

export const actions = {};

export const getters = {};
