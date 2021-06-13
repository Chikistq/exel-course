import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.tamplate';
import {ResizeHandler} from '@/components/table/tabl-resize';
import {TableSelection} from '@/components/table/TableSelection';

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
  prepare() {
    this.selection = new TableSelection()
    console.log(this.selection)
  }

  init() {
    super.init()
    const cell = this.$root.find('[data-id = "0:0"]')
    this.selection.select(cell)
  }


  onMousedown(event) {
    if (event.target.dataset.resize) {
      ResizeHandler(this.$root, event)
    }
  }
}
