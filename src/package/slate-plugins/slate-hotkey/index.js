import isHotKey from 'is-hotkey'

/**
 * A Slate plugin for keyboard hot key support.
 *
 * @param {Object} opts
 * @return {Object}
 */

const HotKey = ({ command, key }) => {
  const trigger = isHotKey(key)

  /**
   * on key down.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   * @return {Value}
   */

  function onKeyDown(event, editor, next) {
    if (!trigger(event)) return next()

    event.preventDefault()
    editor.command(command)
  }

  return { onKeyDown }
}

/**
 * Export
 *
 * @type {Function}
 */

export default HotKey
