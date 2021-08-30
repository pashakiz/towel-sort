
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return []
  return matrix.reduce((arr, row, i) => i%2 ? arr.concat(row.reverse()) : arr.concat(row))
}
