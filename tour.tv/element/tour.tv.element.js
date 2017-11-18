/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function defineTourTvElement(PluginElement) {

  /**
   * Define TourTv Element
   * @param view
   * @param opts
   * @returns {TourTvElement}
   * @constructor
   * @class TourTvElement
   * @extends PluginElement
   */
  var TourTvElement = function TourTvElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('tour.tv', {resource: '/widgets'});

    return this;
  };

  return TourTvElement.extend('TourTvElement', {

    /**
     * Render Embedded content
     * @memberOf TourTvElement
     * @param {string} embed
     */
    renderEmbeddedContent: function renderEmbeddedContent(embed) {
      this.$.append(
          this.renderObject(
              embed.toHtml()
          )
      );
    }

  }, PluginElement.prototype);

});
