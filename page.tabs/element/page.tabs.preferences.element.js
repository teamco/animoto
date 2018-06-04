/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

/**
 * @constant EmptyPreferencesElement
 * @type {module.EmptyPreferencesElement}
 */
const EmptyPreferencesElement = require('../../empty/element/empty.preferences.element.js');

/**
 * @class PageTabsPreferencesElement
 * @extends EmptyPreferencesElement
 * @type {module.PageTabsPreferencesElement}
 */
module.exports = class PageTabsPreferencesElement extends EmptyPreferencesElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param {PageTabsView} view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'PageTabsPreferencesElement', view, opts);
  }
};