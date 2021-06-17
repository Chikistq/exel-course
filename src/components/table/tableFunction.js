import {range} from '@core/utils';

export function isCell(event) {
  return event.target.dataset.type === 'cell'
}

export function matrix(target, current) {
  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)

  return cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc
  }, [])
}

export function nextSelection(key, {col, row}) {
  const minV = 0
  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      col++
      break
    case 'ArrowLeft':
      col = col-1 < minV ? minV : col-1
      break
    case 'ArrowUp':
      row = row-1 < minV ? minV : row-1
      break
  }
  return `[data-id="${row}:${col}"]`
}
