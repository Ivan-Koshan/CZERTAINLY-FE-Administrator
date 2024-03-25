// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.11.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface NotificationRequestDto
 */
export interface NotificationRequestDto {
    /**
     * Number of entries per page
     * @type {number}
     * @memberof NotificationRequestDto
     */
    itemsPerPage?: number;
    /**
     * Page number for the request
     * @type {number}
     * @memberof NotificationRequestDto
     */
    pageNumber?: number;
    /**
     * Show only unread notifications
     * @type {boolean}
     * @memberof NotificationRequestDto
     */
    unread?: boolean;
}
