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
  'plugins/widgets/twenty.four.live/element/twenty.four.live.element',
  'plugins/widgets/twenty.four.live/element/twenty.four.live.preferences.element',
  'plugins/widgets/twenty.four.live/element/twenty.four.live.rules.element'
], function defineTwentyFourLiveView(BaseView, Header, Footer,
    TwentyFourLiveElement, TwentyFourLivePreferencesElement,
    TwentyFourLiveRulesElement) {

  /**
   * Define view
   * @class TwentyFourLiveView
   * @extends BaseView
   * @constructor
   */
  var TwentyFourLiveView = function TwentyFourLiveView() {
  };

  return TwentyFourLiveView.extend('TwentyFourLiveView', {

    /**
     * Render twentyfourlive element
     * @memberOf TwentyFourLiveView
     */
    renderTwentyFourLive: function renderTwentyFourLive() {

      this.header(Header, this.get$container());

      /**
       * Define $twentyfourlive
       * @type {TwentyFourLiveElement}
       */
      this.elements.$twentyfourlive = new TwentyFourLiveElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventManager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf TwentyFourLiveView
     * @returns {TwentyFourLivePreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define TwentyFourLive Preferences Element
       * @type {TwentyFourLivePreferencesElement}
       */
      this.elements.$preferences = new TwentyFourLivePreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf TwentyFourLiveView
     * @param widgetRules
     * @param contentRules
     * @returns {TwentyFourLiveRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define TwentyFourLive Rules Element
       * @type {TwentyFourLiveRulesElement}
       */
      this.elements.$rules = new TwentyFourLiveRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render twentyfourlive
     * @memberOf TwentyFourLiveView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventManager.eventList.successRendered,
          this.renderTwentyFourLive.bind(this)
      );
    }

  }, BaseView.prototype)

});
