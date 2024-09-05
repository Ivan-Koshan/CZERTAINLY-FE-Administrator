// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.12.1-SNAPSHOT
 * Contact: info@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface BulkActionMessageDto
 */
export interface BulkActionMessageDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof BulkActionMessageDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof BulkActionMessageDto
     */
    name: string;
    /**
     * Message describing the associations of the Objects which is preventing the bulk operation
     * @type {string}
     * @memberof BulkActionMessageDto
     */
    message: string;
}
