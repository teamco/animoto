/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineEspresoTvElement(PluginElement) {

  /**
   * Define EspresoTv Element
   * @param view
   * @param opts
   * @returns {EspresoTvElement}
   * @constructor
   * @class EspresoTvElement
   * @extends PluginElement
   */
  var EspresoTvElement = function EspresoTvElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('espreso.tv', {resource: '/widgets'});

    return this;
  };

  return EspresoTvElement.extend('EspresoTvElement', {

    /**
     * Render Embedded content
     * @memberOf EspresoTvElement
     * @param {string} url
     */
    renderEmbeddedContent: function renderEmbeddedContent(url) {
      this.$.append(
          this.renderIframe(url, {
            id: "ytplayer",
            type: "text/html"
          })
      );
    }

  }, PluginElement.prototype);

});
