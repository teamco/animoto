/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/preferences/widget.preferences'
], function defineDailyMotionPreferencesElement(PluginElement,
    WidgetPreferences) {

  /**
   * Define DailyMotion Preferences Element
   * @param view
   * @param opts
   * @returns {DailyMotionPreferencesElement}
   * @constructor
   * @class DailyMotionPreferencesElement
   * @extends PluginElement
   * @extends WidgetPreferences
   */
  var DailyMotionPreferencesElement = function DailyMotionPreferencesElement(view,
      opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBasePrefsData(opts.data);

    return this;
  };

  return DailyMotionPreferencesElement.extend('DailyMotionPreferencesElement',
      {}, PluginElement.prototype, WidgetPreferences.prototype);

});
