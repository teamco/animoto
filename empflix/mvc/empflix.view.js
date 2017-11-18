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
  'plugins/widgets/empflix/element/empflix.element',
  'plugins/widgets/empflix/element/empflix.preferences.element',
  'plugins/widgets/empflix/element/empflix.rules.element'
], function defineEmpflixView(BaseView, Header, Footer, EmpflixElement,
    EmpflixPreferencesElement, EmpflixRulesElement) {

  /**
   * Define view
   * @class EmpflixView
   * @extends BaseView
   * @constructor
   */
  var EmpflixView = function EmpflixView() {
  };

  return EmpflixView.extend('EmpflixView', {

    /**
     * Render empflix element
     * @memberOf EmpflixView
     */
    renderEmpflix: function renderEmpflix() {

      this.header(Header, this.get$container());

      /**
       * Define $empflix
       * @type {EmpflixElement}
       */
      this.elements.$empflix = new EmpflixElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf EmpflixView
     * @returns {EmpflixPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define Empflix Preferences Element
       * @type {EmpflixPreferencesElement}
       */
      this.elements.$preferences = new EmpflixPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf EmpflixView
     * @param widgetRules
     * @param contentRules
     * @returns {EmpflixRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define data
       * @type {*|{}}
       */
      var data = this.controller.getRules();

      /**
       * Define Empflix Rules Element
       * @type {EmpflixRulesElement}
       */
      this.elements.$rules = new EmpflixRulesElement(this, {
        data: data,
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render empflix
     * @memberOf EmpflixView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderEmpflix.bind(this)
      );
    }

  }, BaseView.prototype)

});
