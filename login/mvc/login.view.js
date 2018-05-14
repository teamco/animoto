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
  'plugins/widgets/login/element/login.element',
  'plugins/widgets/login/element/login.preferences.element',
  'plugins/widgets/login/element/login.rules.element'
], function defineLoginView(BaseView, Header, Footer, LoginElement,
    LoginPreferencesElement, LoginRulesElement) {

  /**
   * Define view
   * @class LoginView
   * @extends BaseView
   * @constructor
   */
  var LoginView = function LoginView() {
  };

  return LoginView.extend('LoginView', {

    /**
     * Render login element
     * @memberOf LoginView
     */
    renderLogin: function renderLogin() {

      this.header(Header, this.get$container());

      /**
       * Define $login
       * @type {LoginElement}
       */
      this.elements.$login = new LoginElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventManager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf LoginView
     * @returns {LoginPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define Login Preferences Element
       * @type {LoginPreferencesElement}
       */
      this.elements.$preferences = new LoginPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf LoginView
     * @param widgetRules
     * @param contentRules
     * @returns {LoginRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define Login Rules Element
       * @type {LoginRulesElement}
       */
      this.elements.$rules = new LoginRulesElement(this, {
        data: this.controller.getRules(),
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render login
     * @memberOf LoginView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventManager.eventList.successRendered,
          this.renderLogin.bind(this)
      );
    }

  }, BaseView.prototype)

});