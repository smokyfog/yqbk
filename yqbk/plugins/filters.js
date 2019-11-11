import Vue from 'vue'
// 时间格式化
export function formatDate (val) {
  return val ? new Date(val).toLocaleString() : '未知'
}

const filters = {
  formatDate
}

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})
export default filters
