export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

export function showLoading () {
  return {
    id: 'loading',
    type: SHOW_LOADING
  }
}

export function hideLoading () {
  return {
    id: 'loading',
    type: HIDE_LOADING
  }
}