function formatCurrency(value) {
    if (!value) return "";
  return `${Number(value).toLocaleString("vi-VN")} VND`;
}

export default formatCurrency