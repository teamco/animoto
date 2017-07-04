/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element'
], function defineFapaTvElement(PluginElement) {

  /**
   * Define FapaTv Element
   * @param view
   * @param opts
   * @returns {FapaTvElement}
   * @constructor
   * @class FapaTvElement
   * @extends PluginElement
   */
  var FapaTvElement = function FapaTvElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('fapa.tv', {resource: '/widgets'});

    return this;
  };

  return FapaTvElement.extend('FapaTvElement', {

    /**
     * Render Embedded content
     * @memberOf FapaTvElement
     * @param {string} url
     */
    renderEmbeddedContent: function renderEmbeddedContent(url) {
      this.$.append(
          this.renderIframe(url)
      );
    }

  }, PluginElement.prototype);

});
