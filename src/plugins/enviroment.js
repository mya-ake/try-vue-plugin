const getBrowser = () => {
  const userAgent = window.navigator.userAgent

  if (/msie|trident/i.test(userAgent) === true) {
    return 'ie'
  } else if (/edge/i.test(userAgent) === true) {
    return 'edge'
  } else if (/googlebot/i.test(userAgent) === true) {
    return 'googlebot'
  } else if (/vivaldi/i.test(userAgent) === true) {
    return 'vivaldi'
  } else if (/chrome/i.test(userAgent) === true) {
    return 'chrome'
  } else if (/safari/i.test(userAgent) === true) {
    return 'safari'
  } else if (/firefox/i.test(userAgent) === true) {
    return 'firefox'
  } else if (/opera/i.test(userAgent) === true) {
    return 'opera'
  } else {
    return 'other'
  }
}


const install = (Vue, options) => {
  Object.defineProperty(Vue.prototype, '$enviroment', {
    get() {
      return {
        name: 'Enviroment',
        browser: getBrowser(),
      }
    }
  })

  console.log('installed')
}

export default {
  install,
}
