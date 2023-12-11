// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.10.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * List of Actions for the Resource
 * @export
 * @interface ActionDto
 */
export interface ActionDto {
    /**
     * Object identifier
     * @type {string}
     * @memberof ActionDto
     */
    uuid: string;
    /**
     * Object Name
     * @type {string}
     * @memberof ActionDto
     */
    name: string;
    /**
     * Resource label
     * @type {string}
     * @memberof ActionDto
     */
    displayName: string;
}
