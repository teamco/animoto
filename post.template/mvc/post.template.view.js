/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/24/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

define([
  'modules/View',
  'element/header.element',
  'element/footer.element',
  'plugins/widgets/post.template/element/post.template.element',
  'plugins/widgets/post.template/element/post.template.preferences.element',
  'plugins/widgets/post.template/element/post.template.rules.element'
], function definePostTemplateView(BaseView, Header, Footer,
    PostTemplateElement, PostTemplatePreferencesElement,
    PostTemplateRulesElement) {

  /**
   * Define view
   * @class PostTemplateView
   * @extends BaseView
   * @constructor
   */
  var PostTemplateView = function PostTemplateView() {
  };

  return PostTemplateView.extend('PostTemplateView', {

    /**
     * Render post.template element
     * @memberOf PostTemplateView
     */
    renderPostTemplate: function renderPostTemplate() {

      this.header(Header, this.get$container());

      /**
       * Define $post.template
       * @type {PostTemplateElement}
       */
      this.elements.$posttemplate = new PostTemplateElement(this, {
        $container: this.get$container().$
      });

      this.footer(Footer, this.get$container());

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.analyzeEmbeddedContent
      );
    },

    /**
     * Render Prefs
     * @memberOf PostTemplateView
     * @returns {PostTemplatePreferencesElement}
     */
    renderPreferences: function renderPreferences() {

      /**
       * Define PostTemplate Preferences Element
       * @type {PostTemplatePreferencesElement}
       */
      this.elements.$preferences = new PostTemplatePreferencesElement(this, {
        data: this.controller.getPreferences()
      });

      return this.get$preferences();
    },

    /**
     * Render Rules
     * @memberOf PostTemplateView
     * @param widgetRules
     * @param contentRules
     * @returns {PostTemplateRulesElement}
     */
    renderRules: function renderRules(widgetRules, contentRules) {

      /**
       * Define PostTemplate Rules Element
       * @type {PostTemplateRulesElement}
       */
      this.elements.$rules = new PostTemplateRulesElement(this, {
        data: this.controller.getRules(),
        rules: {
          widget: widgetRules,
          content: contentRules
        }
      });

      return this.get$rules();
    },

    /**
     * Render post.template
     * @memberOf PostTemplateView
     */
    render: function render() {

      this.scope.observer.publish(
          this.scope.eventmanager.eventList.successRendered,
          this.renderPostTemplate.bind(this)
      );
    }

  }, BaseView.prototype)

});