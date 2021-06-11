import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tamplate';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
  static ClassName = `excel__table`

  constructor($root) {
    super($root, {
      listeners: ['mousedown'], // 'click', , 'mouseup'
    })
  }


  toHTML() {
    return createTable(20)
  }


  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const cords = $parent.getCoords()

      document.onmousemove = e => {
        const delta = e.pageX - cords.right
        const value = cords.width + delta
        $parent.$el.style.width = value + 'px'
      }

      document.onmouseup = () => {
        document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
            .forEach(el => el.style.width = $parent.$el.style.width)
        document.onmousemove = null
      }
    }
  }
}
