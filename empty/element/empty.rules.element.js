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
 * @constant BaseWidgetRules
 * @type {module.BaseWidgetRules}
 */
const BaseWidgetRules = require('../../../rules/widget/widget.base.rules.js');

/**
 * @class EmptyRulesElement
 * @extends {PluginElement, BaseWidgetRules}
 * @type {module.EmptyRulesElement}
 */
module.exports = class EmptyRulesElement extends aggregation(PluginElement, BaseWidgetRules) {

  /**
   * @constructor
   * @param {string} [name]
   * @param {EmptyView} view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'EmptyRulesElement', view, false);
    this._config(view, opts, $('<div />')).build(opts);
    this.renderBaseRulesData(opts.data, opts.rules.widget, opts.rules.content);
  }
};
