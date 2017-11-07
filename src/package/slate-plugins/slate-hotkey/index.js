import isHotKey from 'is-hotkey'

/**
 * A Slate plugin for keyboard hot key support.
 * 
 * @param {Object} opts
 * @return {Object}
 */

const HotKey = ({ transform, key }) => {
  const trigger = isHotKey(key)

  /**
   * on key down.
   * 
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   * @return {Value}
   */

  function onKeyDown(event, change, editor) {
    if (trigger(event)) {
      return change.call(transform, event, editor)
    }
  }

  return { onKeyDown }
}

/**
 * Export
 * 
 * @type {Function}
 */

export default HotKey