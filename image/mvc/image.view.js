/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant EmptyView
 * @type {module.EmptyView}
 */
const EmptyView = require('../../empty/mvc/empty.view.js');

/**
 * @constant ContentElement
 * @type {module.ImageElement}
 */
const ContentElement = require('../element/image.element.js');

/**
 * @constant PreferencesElement
 * @type {module.ImagePreferencesElement}
 */
const PreferencesElement = require('../element/image.preferences.element.js');

/**
 * @constant RulesElement
 * @type {module.ImageRulesElement}
 */
const RulesElement = require('../element/image.rules.element.js');

/**
 * @class ImageView
 * @extends EmptyView
 * @type {module.ImageView}
 */
module.exports = class ImageView extends EmptyView {

  /**
   * @constructor
   * @param {string} name
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'ImageView', scope, false);
  }

  /**
   * @memberOf ImageView
   * @return {{
   *  Content: module.ImageElement,
   *  Preferences: module.ImagePreferencesElement,
   *  Rules: module.ImageRulesElement
   * }}
   */
  static getElements() {
    return {
      Content: ContentElement,
      Preferences: PreferencesElement,
      Rules: RulesElement
    };
  }
};