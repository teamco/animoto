/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

/**
 * @constant PluginElement
 * @type {module.PluginElement}
 */
const PluginElement = require('../../../plugin.element.js');

/**
 * @class EmptyElement
 * @extends PluginElement
 * @type {module.EmptyElement}
 */
module.exports = class EmptyElement extends PluginElement {

  /**
   * @param {string} [name]
   * @param {EmptyView} view
   * @param opts
   * @constructor
   */
  constructor(name, view, opts) {
    super(name || 'EmptyElement', view, false);
    this.configElement(view, opts)
  }

  /**
   * @memberOf EmptyElement
   * @param view
   * @param opts
   */
  configElement(view, opts) {
    this._config(view, opts, $('<content />')).build(opts);
    this.addCSS('empty', {resource: '/widgets'});
  }
};
