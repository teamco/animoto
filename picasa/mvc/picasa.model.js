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
], function definePicasaModel(BaseModel, WidgetContentModel) {

  /**
   * Define Picasa model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class PicasaModel
   * @constructor
   */
  var PicasaModel = function PicasaModel() {

    /**
     * Define preferences
     * @memberOf PicasaModel
     * @type {{
         *      picasaEmbedCode: {type: string, disabled: boolean, value:
         *     undefined, visible: boolean}
         * }}
     */
    this.preferences = {
      picasaEmbedCode: {
        type: 'textarea',
        disabled: false,
        value: undefined,
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf PicasaModel
     * @type {{}}
     */
    this.rules = {};
  };

  return PicasaModel.extend('PicasaModel', {

    /**
     * Set Picasa embed code
     * @memberOf PicasaModel
     * @param {string} embed
     */
    setPicasaEmbedCode: function setPicasaEmbedCode(embed) {
      this.setPrefs('picasaEmbedCode', embed);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});
