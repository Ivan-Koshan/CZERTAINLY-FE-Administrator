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
    Resource,
} from './';

/**
 * @export
 * @interface ResourceDto
 */
export interface ResourceDto {
    /**
     * @type {Resource}
     * @memberof ResourceDto
     */
    resource: Resource;
    /**
     * If resource has Object access permissions. True = Yes, False = No
     * @type {boolean}
     * @memberof ResourceDto
     */
    hasObjectAccess: boolean;
    /**
     * Support assigning custom attributes to resource objects
     * @type {boolean}
     * @memberof ResourceDto
     */
    hasCustomAttributes: boolean;
    /**
     * Support assigning groups to resource objects
     * @type {boolean}
     * @memberof ResourceDto
     */
    hasGroups: boolean;
    /**
     * Support assigning owner to resource objects
     * @type {boolean}
     * @memberof ResourceDto
     */
    hasOwner: boolean;
    /**
     * Has events that can be used in triggers
     * @type {boolean}
     * @memberof ResourceDto
     */
    hasEvents: boolean;
    /**
     * Has rule evaluator that can evaluate conditions and actions
     * @type {boolean}
     * @memberof ResourceDto
     */
    hasRuleEvaluator: boolean;
}


