
const CODE = {
  A: 65,
  Z: 90
}

function toCell(el) {
  return `
    <div class="cell" contenteditable>${el}</div>
    `
}

function toColumn(el) {
  return `
    <div class="collum">${el}</div>
    `
}

function createRow(number = '', content) {
  return `
    <div class="row">  
      <div class="row-info">${number}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODE.A + index)
}

export function createTable(rowsCount = '15') {
  const colsCount = CODE.Z - CODE.A +1
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  const cell = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')

  const rows = []
  rows.push(createRow('', cols))
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i+1, cell))
  }
  return rows.join('')
}
