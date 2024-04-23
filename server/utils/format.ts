import moment from "moment";

export function formatDate(dateString: string) {
  return moment(dateString).format('YYYY-MM-DD HH:mm:ss')
}

export function formatMoney(money: number = 0) {
  return (money / 100).toFixed(2)
}
