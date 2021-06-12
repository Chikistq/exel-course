import {$} from '@core/dom';

export function ResizeHandler($root, event) {
  const $resizer = $(event.target)
  const $parent = $resizer.closest('[data-type="resizable"]')
  const cords = $parent.getCoords()
  const cells = $root.findAll(`[data-col="${$parent.data.col}"]`)

  const type = $resizer.data.resize
  $resizer.css({
    opacity: 1,
    bottom: '-1000px',
    width: '1px'
  })

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = e.pageX - cords.right
      const value = cords.width + delta
      $parent.css({'width': value + 'px'})
    } else {
      const delta = e.pageY - cords.bottom
      const value = cords.height + delta
      $parent.css({height: value + 'px'})
    }
  }

  document.onmouseup = () => {
    if (type === 'col') {
      cells.forEach(el => el.style.width = $parent.$el.style.width)
      $resizer.css({
        opacity: 0,
        bottom: 0,
        width: '4px'
      })
    }
    $resizer.css({
      bottom: 0,
      width: '100%',
      opacity: 0,
    })
    document.onmousemove = null
    document.onmouseup = null
  }
}
