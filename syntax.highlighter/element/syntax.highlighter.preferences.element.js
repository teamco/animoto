/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element',
  'plugins/preferences/widget.preferences'
], function defineSyntaxHighlighterPreferencesElement(PluginElement,
    WidgetPreferences) {

  /**
   * Define SyntaxHighlighter Preferences Element
   * @constructor
   * @class SyntaxHighlighterPreferencesElement
   * @param {SyntaxHighlighterView} view
   * @param opts
   * @extends PluginElement
   * @extends WidgetPreferences
   * @returns {SyntaxHighlighterPreferencesElement}
   */
  var SyntaxHighlighterPreferencesElement = function SyntaxHighlighterPreferencesElement(view,
      opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.renderBasePrefsData(opts.data);

    return this;
  };

  return SyntaxHighlighterPreferencesElement.extend(
      'SyntaxHighlighterPreferencesElement', {}, PluginElement.prototype,
      WidgetPreferences.prototype);

});
