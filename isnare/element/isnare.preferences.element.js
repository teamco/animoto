/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/preferences/widget.preferences'
], function defineIsnarePreferencesElement(PluginElement, WidgetPreferences) {

  /**
   * Define Isnare Preferences Element
   * @param view
   * @param opts
   * @returns {IsnarePreferencesElement}
   * @constructor
   * @class IsnarePreferencesElement
   * @extends PluginElement
   * @extends WidgetPreferences
   */
  var IsnarePreferencesElement = function IsnarePreferencesElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBasePrefsData(opts.data);

    return this;
  };

  return IsnarePreferencesElement.extend('IsnarePreferencesElement', {},
      PluginElement.prototype, WidgetPreferences.prototype);

});
