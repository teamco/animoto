/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/preferences/widget.preferences'
], function defineVersePreferencesElement(PluginElement, WidgetPreferences) {

  /**
   * Define Verse Preferences Element
   * @constructor
   * @class VersePreferencesElement
   * @param {VerseView} view
   * @param opts
   * @extends PluginElement
   * @extends WidgetPreferences
   * @returns {VersePreferencesElement}
   */
  var VersePreferencesElement = function VersePreferencesElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBasePrefsData(opts.data);

    return this;
  };

  return VersePreferencesElement.extend(
      'VersePreferencesElement', {},
      PluginElement.prototype,
      WidgetPreferences.prototype
  );
});
