
const CODE = {
  A: 65,
  Z: 90
}

function toCell(el, index) {
  return `<div class="cell" data-col="${index}" contenteditable>${el}</div>`
}
function toColumn(el, index) {
  return `
    <div class="collum" data-type="resizable" data-col="${index}">
        ${el}
        <div class="col-resize" data-resize="col"></div>
    </div>
    `
}

function createRow(number = '', content) {
  const resizer = number
        ? `<div class="row-resize" data-resize="row"></div>`
        : ''

  return `
    <div class="row">  
      <div class="row-info">
        ${number}
        ${resizer}
      </div>
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
