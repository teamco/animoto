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
 * @constant BaseRules
 * @type {module.BaseRules}
 */
const BaseRules = require('../../../rules/widget/rules');

/**
 * @class EmptyRulesElement
 * @extends BaseRules
 * @type {module.EmptyRulesElement}
 */
module.exports = class EmptyRulesElement extends PluginElement {

  /**
   * @constructor
   * @param {string} [name]
   * @param {EmptyView} view
   * @param opts
   */
  constructor(name, view, opts) {
    super(name || 'EmptyRulesElement', view, false);

    /**
     * @property EmptyRulesElement
     * @type {module.BaseRules}
     */
    this.rules = new BaseRules('BaseRules', this);

    this._config(view, opts, $('<div />')).build(opts);
    this.rules.renderBaseRulesData(opts.data, opts.rules.widget, opts.rules.content);
  }
};
