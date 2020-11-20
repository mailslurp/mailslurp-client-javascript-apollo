/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.   ## Resources - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository 
 *
 * The version of the OpenAPI document: 6.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */



import ApiClient from "../ApiClient";
import CreateGroupOptions from '../model/CreateGroupOptions';
import GroupContactsDto from '../model/GroupContactsDto';
import GroupDto from '../model/GroupDto';
import GroupProjection from '../model/GroupProjection';
import PageContactProjection from '../model/PageContactProjection';
import PageGroupProjection from '../model/PageGroupProjection';
import UpdateGroupContacts from '../model/UpdateGroupContacts';

/**
* GroupController service.
* @module mailslurp/GroupControllerApi
* @version 8.2.6
*/
export default class GroupControllerApi extends ApiClient {

    /**
    * Constructs a new GroupControllerApi. 
    * @alias module:mailslurp/GroupControllerApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * Add contacts to a group
     * @param {String} groupId groupId
     * @param {UpdateGroupContacts} updateGroupContactsOption updateGroupContactsOption
     * @return {Promise<GroupContactsDto>}
     */
    async addContactsToGroup(groupId, updateGroupContactsOption) {
      let postBody = updateGroupContactsOption;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling addContactsToGroup");
      }
      // verify the required parameter 'updateGroupContactsOption' is set
      if (updateGroupContactsOption === undefined || updateGroupContactsOption === null) {
        throw new Error("Missing the required parameter 'updateGroupContactsOption' when calling addContactsToGroup");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GroupContactsDto;

      return this.callApi(
        '/groups/{groupId}/contacts', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a group
     * @param {CreateGroupOptions} createGroupOptions createGroupOptions
     * @return {Promise<GroupDto>}
     */
    async createGroup(createGroupOptions) {
      let postBody = createGroupOptions;
      // verify the required parameter 'createGroupOptions' is set
      if (createGroupOptions === undefined || createGroupOptions === null) {
        throw new Error("Missing the required parameter 'createGroupOptions' when calling createGroup");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GroupDto;

      return this.callApi(
        '/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete group
     * @param {String} groupId groupId
     * @return {Promise}
     */
    async deleteGroup(groupId) {
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling deleteGroup");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.callApi(
        '/groups/{groupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all Contact Groups in paginated format
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Optional page index in inbox list pagination (default to 0)
     * @param {Number} opts.size Optional page size in inbox list pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageGroupProjection>}
     */
    async getAllGroups(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageGroupProjection;

      return this.callApi(
        '/groups/paginated', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get group
     * @param {String} groupId groupId
     * @return {Promise<GroupDto>}
     */
    async getGroup(groupId) {
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroup");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupDto;

      return this.callApi(
        '/groups/{groupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get group and contacts belonging to it
     * @param {String} groupId groupId
     * @return {Promise<GroupContactsDto>}
     */
    async getGroupWithContacts(groupId) {
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupWithContacts");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GroupContactsDto;

      return this.callApi(
        '/groups/{groupId}/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get group and paginated contacts belonging to it
     * @param {String} groupId groupId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Optional page index in group contact pagination (default to 0)
     * @param {Number} opts.size Optional page size in group contact pagination (default to 20)
     * @param {String} opts.sort Optional createdAt sort direction ASC or DESC (default to 'ASC')
     * @return {Promise<PageContactProjection>}
     */
    async getGroupWithContactsPaginated(groupId, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling getGroupWithContactsPaginated");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageContactProjection;

      return this.callApi(
        '/groups/{groupId}/contacts-paginated', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all groups
     * @return {Promise<Array.<GroupProjection>>}
     */
    async getGroups() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GroupProjection];

      return this.callApi(
        '/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remove contacts from a group
     * @param {String} groupId groupId
     * @param {UpdateGroupContacts} updateGroupContactsOption updateGroupContactsOption
     * @return {Promise<GroupContactsDto>}
     */
    async removeContactsFromGroup(groupId, updateGroupContactsOption) {
      let postBody = updateGroupContactsOption;
      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw new Error("Missing the required parameter 'groupId' when calling removeContactsFromGroup");
      }
      // verify the required parameter 'updateGroupContactsOption' is set
      if (updateGroupContactsOption === undefined || updateGroupContactsOption === null) {
        throw new Error("Missing the required parameter 'updateGroupContactsOption' when calling removeContactsFromGroup");
      }

      let pathParams = {
        'groupId': groupId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API_KEY'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GroupContactsDto;

      return this.callApi(
        '/groups/{groupId}/contacts', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
