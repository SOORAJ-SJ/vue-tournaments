import api from "./api";

export const batchGet = (range) => api.get(`:batchGet?ranges=${range}`)

export const getRange = (range) => api.get(`/${range}`)