/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element',
  'plugins/preferences/widget.preferences'
], function defineElevenChannelUaPreferencesElement(PluginElement,
    WidgetPreferences) {

  /**
   * Define ElevenChannelUa Preferences Element
   * @param view
   * @param opts
   * @returns {ElevenChannelUaPreferencesElement}
   * @constructor
   * @class ElevenChannelUaPreferencesElement
   * @extends PluginElement
   * @extends WidgetPreferences
   */
  var ElevenChannelUaPreferencesElement = function ElevenChannelUaPreferencesElement(view,
      opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBasePrefsData(opts.data);

    return this;
  };

  return ElevenChannelUaPreferencesElement.extend(
      'ElevenChannelUaPreferencesElement', {}, PluginElement.prototype,
      WidgetPreferences.prototype);

});
