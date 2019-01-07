/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

import {PluginElement} from '../../../plugin.element';
import {WidgetPreferences} from '../../../preferences/widget.preferences';
import {aggregation} from '../../../../lib/extends/aggregation';

/**
 * @class EmptyPreferencesElement
 * @extends {PluginElement, WidgetPreferences}
 */
export class EmptyPreferencesElement extends aggregation(PluginElement, WidgetPreferences) {

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
}