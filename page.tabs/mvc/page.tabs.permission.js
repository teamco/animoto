/**
 * Created with JetBrains RubyMine.
 * User: teamco
 * Date: 11/17/12
 * Time: 4:10 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * @constant EmptyPermission
 * @type {EmptyPermission|*}
 */
const EmptyPermission = require('../../empty/mvc/empty.permission.js');

/**
 * @class PageTabsPermission
 * @extends EmptyPermission
 * @type {PageTabsPermission}
 */
export class PageTabsPermission extends EmptyPermission {

  /**
   * @constructor
   * @param {string} [name]
   * @param {PageTabs} scope
   */
  constructor(name, scope) {
    super(name || 'PageTabsPermission', scope, false);
  }
};