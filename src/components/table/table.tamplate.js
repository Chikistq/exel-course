import {debug} from 'webpack';

const CODE = {
  A: 65,
  Z: 90
}

// function createCell() {
//   return `
//     <div class="cell" contenteditable>s</div>
//     `
// }

function toColumn(el) {
  return `
    <div class="collum">${el}</div>
    `
}

function createRow(content) {
  return `
    <div class="row">  
      <div class="row-info"></div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODE.A + index)
}

export function createTable(rowsCount = '15') {
  const colsCount = CODE.Z - CODE.A
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  const rows = []
  rows.push(createRow(cols))
  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow())
  }
  return rows.join('')
}
