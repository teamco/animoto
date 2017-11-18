/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/4/12
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */
defineP([
  'modules/Model',
  'plugins/widgets/widget.content.model'
], function defineLoginModel(BaseModel, WidgetContentModel) {

  /**
   * Define Login model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class LoginModel
   * @constructor
   */
  var LoginModel = function LoginModel() {

    /**
     * Define preferences
     * @memberOf LoginModel
     * @type {{}}
     */
    this.preferences = {};

    /**
     * Define rules
     * @memberOf LoginModel
     * @type {{}}
     */
    this.rules = {};
  };

  return LoginModel.extend('LoginModel', {}, BaseModel.prototype,
      WidgetContentModel.prototype);
});