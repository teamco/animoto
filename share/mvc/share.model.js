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
], function defineShareModel(BaseModel, WidgetContentModel) {

  /**
   * Define Share model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class ShareModel
   * @constructor
   */
  var ShareModel = function ShareModel() {

    /**
     * Define preferences
     * @memberOf ShareModel
     * @type {{}}
     */
    this.preferences = {
      shareFacebook: {
        type: 'checkbox',
        disabled: false,
        checked: false,
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf ShareModel
     * @type {{}}
     */
    this.rules = {};
  };

  return ShareModel.extend('ShareModel', {

    setShareFacebook: function setShareFacebook(checked) {
      this.setPrefs('shareFacebook', checked);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});