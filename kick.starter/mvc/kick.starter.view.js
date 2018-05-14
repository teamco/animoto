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
  'plugins/widgets/kick.starter/element/kick.starter.element',
  'plugins/widgets/kick.starter/element/kick.starter.preferences.element',
  'plugins/widgets/kick.starter/element/kick.starter.rules.element'
], function defineKickStarterView(BaseView, Header, Footer, KickStarterElement,
    KickStarterPreferencesElement, KickStarterRulesElement) {

  /**
   * Define view
   * @class KickStarterView
   * @extends BaseView
   * @constructor
   */
  var KickStarterView = function KickStarterView() {
  };

  return KickStarterView.extend('KickStarterView', {

    /**
     * Render kickstarter element
     * @memberOf KickStarterView
     */
    renderKickStarter: function renderKickStarter() {

      this.header(Header, this.get$container());

      /**
       * Define $kickstarter
       * @type {KickStarterElement}
       */
      this.elements.$kickstarter = new KickStarterElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventManager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf KickStarterView
     * @returns {KickStarterPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define KickStarter Preferences Element
       * @type {KickStarterPreferencesElement}
       */
      this.elements.$preferences = new KickStarterPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf KickStarterView
     * @param widgetRules
     * @param contentRules
     * @returns {KickStarterRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define KickStarter Rules Element
       * @type {KickStarterRulesElement}
       */
      this.elements.$rules = new KickStarterRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render kickstarter
     * @memberOf KickStarterView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventManager.eventList.successRendered,
          this.renderKickStarter.bind(this)
      );
    }

  }, BaseView.prototype)

});
