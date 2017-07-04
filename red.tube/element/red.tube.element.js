/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

define([
  'plugins/plugin.element'
], function defineRedTubeElement(PluginElement) {

  /**
   * Define RedTube Element
   * @param view
   * @param opts
   * @returns {RedTubeElement}
   * @constructor
   * @class RedTubeElement
   * @extends PluginElement
   */
  var RedTubeElement = function RedTubeElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('red.tube', {resource: '/widgets'});

    return this;
  };

  return RedTubeElement.extend('RedTubeElement', {

    /**
     * Render Embedded content
     * @memberOf RedTubeElement
     * @param {string} url
     */
    renderEmbeddedContent: function renderEmbeddedContent(url) {
      this.$.append(
          this.renderIframe(url)
      );
    }

  }, PluginElement.prototype);

});
