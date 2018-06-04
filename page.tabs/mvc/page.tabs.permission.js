/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant EmptyPermission
 * @type {module.EmptyPermission|*}
 */
const EmptyPermission = require('../../empty/mvc/empty.permission.js');

/**
 * @class PageTabsPermission
 * @type {module.PageTabsPermission}
 */
module.exports = class PageTabsPermission extends EmptyPermission {

  /**
   * @constructor
   * @param {string} [name]
   * @param scope
   */
  constructor(name, scope) {
    super(name || 'PageTabsPermission', scope, false);
  }
};