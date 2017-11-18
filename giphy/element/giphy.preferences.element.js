/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/preferences/widget.preferences'
], function defineGiphyPreferencesElement(PluginElement, WidgetPreferences) {

  /**
   * Define Giphy Preferences Element
   * @param view
   * @param opts
   * @returns {GiphyPreferencesElement}
   * @constructor
   * @class GiphyPreferencesElement
   * @extends PluginElement
   * @extends WidgetPreferences
   */
  var GiphyPreferencesElement = function GiphyPreferencesElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBasePrefsData(opts.data);

    return this;
  };

  return GiphyPreferencesElement.extend('GiphyPreferencesElement', {},
      PluginElement.prototype, WidgetPreferences.prototype);

});
