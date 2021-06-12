import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tamplate';
import {ResizeHandler} from '@/components/table/tabl-resize';

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
      ResizeHandler(this.$root, event)
    }
  }
}
