/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineLiveLeakElement(PluginElement) {

  /**
   * Define LiveLeak Element
   * @param view
   * @param opts
   * @returns {LiveLeakElement}
   * @constructor
   * @class LiveLeakElement
   * @extends PluginElement
   */
  var LiveLeakElement = function LiveLeakElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('live.leak', {resource: '/widgets'});

    return this;
  };

  return LiveLeakElement.extend('LiveLeakElement', {

    /**
     * Render Embedded content
     * @memberOf LiveLeakElement
     * @param {string} url
     */
    renderEmbeddedContent: function renderEmbeddedContent(url) {
      this.$.append(
          this.renderIframe(url)
      );
    }

  }, PluginElement.prototype);

});
