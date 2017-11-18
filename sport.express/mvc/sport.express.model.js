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
], function defineSportExpressModel(BaseModel, WidgetContentModel) {

  /**
   * Define SportExpress model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class SportExpressModel
   * @constructor
   */
  var SportExpressModel = function SportExpressModel() {

    /**
     * Define preferences
     * @memberOf SportExpressModel
     * @type {{
         *      sportexpressEmbedCode: {type: string, disabled: boolean, value:
         *     undefined, visible: boolean}
         * }}
     */
    this.preferences = {
      sportexpressEmbedCode: {
        type: 'textarea',
        disabled: false,
        value: undefined,
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf SportExpressModel
     * @type {{}}
     */
    this.rules = {};
  };

  return SportExpressModel.extend('SportExpressModel', {

    /**
     * Set SportExpress embed code
     * @memberOf SportExpressModel
     * @param {string} embed
     */
    setSportexpressEmbedCode: function setSportexpressEmbedCode(embed) {
      this.setPrefs('sportexpressEmbedCode', embed);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});
