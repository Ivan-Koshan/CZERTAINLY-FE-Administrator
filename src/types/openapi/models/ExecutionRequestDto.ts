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

import type {
    ExecutionItemRequestDto,
    ExecutionType,
    Resource,
} from './';

/**
 * @export
 * @interface ExecutionRequestDto
 */
export interface ExecutionRequestDto {
    /**
     * Name of the execution
     * @type {string}
     * @memberof ExecutionRequestDto
     */
    name: string;
    /**
     * Description of the execution
     * @type {string}
     * @memberof ExecutionRequestDto
     */
    description?: string;
    /**
     * @type {ExecutionType}
     * @memberof ExecutionRequestDto
     */
    type: ExecutionType;
    /**
     * @type {Resource}
     * @memberof ExecutionRequestDto
     */
    resource: Resource;
    /**
     * List of the execution items to add to execution
     * @type {Array<ExecutionItemRequestDto>}
     * @memberof ExecutionRequestDto
     */
    items: Array<ExecutionItemRequestDto>;
}


