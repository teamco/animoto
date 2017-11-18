/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 5/9/13
 * Time: 11:48 AM
 */

defineP([
  'plugins/plugin.element'
], function definePostToolElement(PluginElement) {

  /**
   * Define PostTool Element
   * @param view
   * @param opts
   * @returns {PostToolElement}
   * @constructor
   * @class PostToolElement
   * @extends PluginElement
   */
  var PostToolElement = function PostToolElement(view, opts) {

    this._config(view, opts, $('<div />')).build({
      $container: opts.$container,
      destroy: true
    });

    this.addCSS('post.tool', {
      resource: '/widgets'
    });

    return this;
  };

  return PostToolElement.extend('PostToolElement', {

    /**
     * Render Embedded content
     * @memberOf PostToolElement
     */
    renderEmbeddedContent: function renderEmbeddedContent() {
      var $element = this;
      var $postToolFrame = [
        '<div class="mainContainer"><input type="text" placeholder="Type your text here">',
        '<div class="buttonsContainer">',
        '<a class="image" title="Share Picture">Picture</a>',
        '<a class="link" title="Share Link">Link</a>',
        '<a class="shareBtn">SHARE</a>',
        '</div></div>'].join('');

      $element.view.controller.clearParentThumbnail();
      $element.$.append($postToolFrame);
    }

  }, PluginElement.prototype);

});