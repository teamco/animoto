/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

/**
 * Aggregation of base class and mixin classes.
 * @type {(function(*, ...[*]): __Aggregate)|*|(function(): aggregate)}
 */
const aggregation = require('../../../../core/lib/extends/aggregation.js');

/**
 * @constant PluginElement
 * @type {module.PluginElement}
 */
const PluginElement = require('../../../plugin.element.js');

/**
 * @constant WidgetPreferences
 * @type {module.WidgetPreferences}
 */
const WidgetPreferences = require('../../../preferences/widget.preferences.js');

/**
 * @class EmptyPreferencesElement
 * @extends {PluginElement, WidgetPreferences}
 * @type {module.EmptyPreferencesElement}
 */
module.exports = class EmptyPreferencesElement extends aggregation(PluginElement, WidgetPreferences) {

  /**
   * @constructor
   * @param {string} [name]
   * @param {EmptyView} view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'EmptyPreferencesElement', view, false);
    this._config(view, opts, $('<div />')).build(opts);
    this.renderBasePrefsData(opts.data);
  }
};