
const CODE = {
  A: 65,
  Z: 90
}

function toCell(rowNumber) {
  return function(_, colNumber) {
    return `
   <div class="cell" 
   data-col="${colNumber}" 
   data-id="${rowNumber}:${colNumber}" 
   data-type="cell"
   contenteditable>
   </div>`
  }
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
    <div class="row" data-type="resizable"">  
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


  const rows = []
  rows.push(createRow(null, cols))
  for (let row = 0; row < rowsCount; row++) {
    // debugger
    const cell = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('')

    rows.push(createRow(row+1, cell))
  }
  return rows.join('')
}
