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
  'plugins/widgets/isnare/element/isnare.element',
  'plugins/widgets/isnare/element/isnare.preferences.element',
  'plugins/widgets/isnare/element/isnare.rules.element'
], function defineIsnareView(BaseView, Header, Footer, IsnareElement,
    IsnarePreferencesElement, IsnareRulesElement) {

  /**
   * Define view
   * @class IsnareView
   * @extends BaseView
   * @constructor
   */
  var IsnareView = function IsnareView() {
  };

  return IsnareView.extend('IsnareView', {

    /**
     * Render isnare element
     * @memberOf IsnareView
     */
    renderIsnare: function renderIsnare() {

      this.header(Header, this.get$container());

      /**
       * Define $isnare
       * @type {IsnareElement}
       */
      this.elements.$isnare = new IsnareElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventManager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf IsnareView
     * @returns {IsnarePreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define Isnare Preferences Element
       * @type {IsnarePreferencesElement}
       */
      this.elements.$preferences = new IsnarePreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf IsnareView
     * @param widgetRules
     * @param contentRules
     * @returns {IsnareRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define Isnare Rules Element
       * @type {IsnareRulesElement}
       */
      this.elements.$rules = new IsnareRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render isnare
     * @memberOf IsnareView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventManager.eventList.successRendered,
          this.renderIsnare.bind(this)
      );
    }

  }, BaseView.prototype)

});
