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
], function defineYoutubeModel(BaseModel, WidgetContentModel) {

  /**
   * Define Youtube model
   * @extends BaseModel
   * @extends WidgetContentModel
   * @class YoutubeModel
   * @constructor
   */
  var YoutubeModel = function YoutubeModel() {

    /**
     * Define preferences
     * @memberOf YoutubeModel
     * @type {{
         *      youtubeUrl: {type: string, disabled: boolean, value: undefined,
         *     visible: boolean}
         * }}
     */
    this.preferences = {
      youtubeUrl: {
        type: 'text',
        disabled: false,
        value: 'https://www.youtube.com/watch?v=xcL-oGPxgCg',
        visible: true
      }
    };

    /**
     * Define rules
     * @memberOf YoutubeModel
     * @type {{}}
     */
    this.rules = {};
  };

  return YoutubeModel.extend('YoutubeModel', {

    /**
     * Set Youtube Url
     * @memberOf YoutubeModel
     * @param {string} url
     */
    setYoutubeUrl: function setYoutubeUrl(url) {
      this.setPrefs('youtubeUrl', url);
    }

  }, BaseModel.prototype, WidgetContentModel.prototype);
});