/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {PluginElement} from '../../../plugin.element';
import {BaseRules} from '../../../rules/widget/rules';
import {aggregation} from '../../../../lib/extends/aggregation';

/**
 * @class EmptyRulesElement
 * @extends {PluginElement, BaseRules}
 */
export class EmptyRulesElement extends aggregation(PluginElement, BaseRules) {

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
}
