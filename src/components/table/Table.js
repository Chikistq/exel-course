import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  static ClassName = `excel__table`


  toHTML() {
    return `
            <div class="row">
                <div class="row-info">

                </div>
                <div class="row-data">
                    <div class="collum">A</div>
                    <div class="collum">B</div>
                    <div class="collum">C</div>
                </div>
            </div>
            <div class="row">
                <div class="row-info">
                    1
                </div>
                <div class="row-data">
                    <div class="cell selected" contenteditable="true">s</div>
                    <div class="cell" contenteditable="true">s</div>
                    <div class="cell" contenteditable="true">s</div>
                </div>
            </div>
`
  }
}
