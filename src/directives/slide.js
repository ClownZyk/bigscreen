const slide = {
  inserted: (el, { value }) => {
    // console.log(el, value)
    // // 获取el元素高度
    // console.log(el.offsetHeight)
    // setTimeout(() => {
    //   console.log(el.offsetHeight)containerSize
    // }, 1000)
  },
  componentUpdated(el, bindings) {
    const { value = 1, modifiers } = bindings
    const { horizontal = false } = modifiers
    const containerSize = horizontal ? el.offsetWidth : el.offsetHeight
    const wrapEl = el.children[0]
    const wrapSize = horizontal ? wrapEl.offsetWidth : wrapEl.offsetHeight
    const direction = horizontal ? 'translateX' : 'translateY'
    const count = wrapEl.children.length
    const animation = wrapEl.animate(
      [
        {
          transform: `${direction}(0px)`,
          offset: 0
        },
        {
          transform: `${direction}(-${Math.max(wrapSize - containerSize, 0)}px)`,
          offset: 0.95
        },
        {
          transform: `${direction}(0px)`,
          offset: 1
        }
      ],
      {
        duration: count * value * 1000,
        iterations: Infinity
      }
    )
    el.handler = () => {
      if (animation.playState === 'running') {
        animation.pause()
      } else {
        animation.play()
      }
    }
    el.addEventListener('mouseenter', el.handler)
    el.addEventListener('mouseleave', el.handler)
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener('mouseenter', el.handler)
    el.removeEventListener('mouseleave', el.handler)
  }
}

export default slide
