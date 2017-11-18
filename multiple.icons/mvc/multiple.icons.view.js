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
  'plugins/widgets/multiple.icons/element/multiple.icons.element',
  'plugins/widgets/multiple.icons/element/multiple.icons.preferences.element',
  'plugins/widgets/multiple.icons/element/multiple.icons.rules.element'
], function defineMultipleIconsView(BaseView, Header, Footer,
    MultipleIconsElement, MultipleIconsPreferencesElement,
    MultipleIconsRulesElement) {

  /**
   * Define view
   * @class MultipleIconsView
   * @extends BaseView
   * @constructor
   */
  var MultipleIconsView = function MultipleIconsView() {
  };

  return MultipleIconsView.extend('MultipleIconsView', {

    /**
     * Render multiple.icons element
     * @memberOf MultipleIconsView
     */
    renderMultipleIcons: function renderMultipleIcons() {

      this.header(Header, this.get$container());

      /**
       * Define $multipleicons
       * @type {MultipleIconsElement}
       */
      this.elements.$multipleicons = new MultipleIconsElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf MultipleIconsView
     * @returns {MultipleIconsPreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define MultipleIcons Preferences Element
       * @type {MultipleIconsPreferencesElement}
       */
      this.elements.$preferences = new MultipleIconsPreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf MultipleIconsView
     * @param widgetRules
     * @param contentRules
     * @returns {MultipleIconsRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define MultipleIcons Rules Element
       * @type {MultipleIconsRulesElement}
       */
      this.elements.$rules = new MultipleIconsRulesElement(this, {
        data: this.controller.getRules(),
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render multiple.icons
     * @memberOf MultipleIconsView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderMultipleIcons.bind(this)
      );
    }

  }, BaseView.prototype)

});