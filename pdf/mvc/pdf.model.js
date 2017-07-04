/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/4/12
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */
define([
  'modules/Model',
  'plugins/widgets/widget.content.model'
], function definePdfModel(BaseModel, WidgetContentModel) {

  /**
   * Define Pdf model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class PdfModel
   * @constructor
   */
  var PdfModel = function PdfModel() {

    /**
     * Define preferences
     * @memberOf PdfModel
     * @type {{
         *      pdfUrl: {type: string, disabled: boolean, value: undefined,
         *     visible: boolean}
         * }}
     */
    this.preferences = {
      pdfUrl: {
        type: 'text',
        disabled: false,
        value: undefined,
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf PdfModel
     * @type {{}}
     */
    this.rules = {};
  };

  return PdfModel.extend('PdfModel', {

    /**
     * Set Pdf Url
     * @memberOf PdfModel
     * @param {string} url
     */
    setPdfUrl: function setPdfUrl(url) {
      this.setPrefs('pdfUrl', url);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});