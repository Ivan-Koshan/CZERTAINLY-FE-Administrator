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
 * @interface UpdateActionRequestDto
 */
export interface UpdateActionRequestDto {
    /**
     * Description of the action
     * @type {string}
     * @memberof UpdateActionRequestDto
     */
    description?: string;
    /**
     * List of UUIDs of existing executions to add to the action
     * @type {Array<string>}
     * @memberof UpdateActionRequestDto
     */
    executionsUuids: Array<string>;
}