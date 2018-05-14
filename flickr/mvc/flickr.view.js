/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

defineP([
  'modules/View',
  'element/header.element',
  'element/footer.element',
  'plugins/widgets/flickr/element/flickr.element',
  'plugins/widgets/flickr/element/flickr.preferences.element',
  'plugins/widgets/flickr/element/flickr.rules.element'
], function defineFlickrView(BaseView, Header, Footer, FlickrElement,
    FlickrPreferencesElement, FlickrRulesElement) {

  /**
   * Define view
   * @class FlickrView
   * @extends BaseView
   * @constructor
   */
  var FlickrView = function FlickrView() {
  };

  return FlickrView.extend('FlickrView', {

    /**
     * Render Flickr element
     * @memberOf FlickrView
     */
    renderFlickr: function renderFlickr() {

      this.header(Header, this.get$container());

      /**
       * Define $flickr
       * @type {FlickrElement}
       */
      this.elements.$flickr = new FlickrElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventManager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf FlickrView
     * @returns {FlickrPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define Flickr Preferences Element
       * @type {FlickrPreferencesElement}
       */
      this.elements.$preferences = new FlickrPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf FlickrView
     * @param widgetRules
     * @param contentRules
     * @returns {FlickrRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define Flickr Rules Element
       * @type {FlickrRulesElement}
       */
      this.elements.$rules = new FlickrRulesElement(this, {
        data: this.controller.getRules(),
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render Flickr
     * @memberOf FlickrView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventManager.eventList.successRendered,
          this.renderFlickr.bind(this)
      );
    }

  }, BaseView.prototype)

});
