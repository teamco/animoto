/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element'
], function defineIssuuElement(PluginElement) {

  /**
   * Define Issuu Element
   * @param view
   * @param opts
   * @returns {IssuuElement}
   * @constructor
   * @class IssuuElement
   * @extends PluginElement
   */
  var IssuuElement = function IssuuElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('issuu', {resource: '/widgets'});

    return this;
  };

  return IssuuElement.extend('IssuuElement', {

    /**
     * Render Embedded content
     * @memberOf IssuuElement
     * @param {string} embed
     */
    renderEmbeddedContent: function renderEmbeddedContent(embed) {
      this.$.append(
          embed.type === 'iframe' ?
              this.renderIframe(embed.code) :
              embed.code
      );
    }

  }, PluginElement.prototype);

});
