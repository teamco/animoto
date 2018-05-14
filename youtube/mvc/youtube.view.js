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
  'plugins/widgets/youtube/element/youtube.element',
  'plugins/widgets/youtube/element/youtube.preferences.element',
  'plugins/widgets/youtube/element/youtube.rules.element'
], function defineYoutubeView(BaseView, Header, Footer, YoutubeElement,
    YoutubePreferencesElement, YoutubeRulesElement) {

  /**
   * Define view
   * @class YoutubeView
   * @extends BaseView
   * @constructor
   */
  var YoutubeView = function YoutubeView() {
  };

  return YoutubeView.extend('YoutubeView', {

    /**
     * Render youtube element
     * @memberOf YoutubeView
     */
    renderYoutube: function renderYoutube() {

      this.header(Header, this.get$container());

      /**
       * Define $youtube
       * @type {YoutubeElement}
       */
      this.elements.$youtube = new YoutubeElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventManager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf YoutubeView
     * @returns {YoutubePreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define Youtube Preferences Element
       * @type {YoutubePreferencesElement}
       */
      this.elements.$preferences = new YoutubePreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf YoutubeView
     * @param widgetRules
     * @param contentRules
     * @returns {YoutubeRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define Youtube Rules Element
       * @type {YoutubeRulesElement}
       */
      this.elements.$rules = new YoutubeRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render youtube
     * @memberOf YoutubeView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventManager.eventList.successRendered,
          this.renderYoutube.bind(this)
      );
    }

  }, BaseView.prototype)

});