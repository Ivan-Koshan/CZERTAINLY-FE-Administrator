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

import type { AttributeConstraintType, DateTimeAttributeConstraintData } from "./";

/**
 * @export
 * @interface DateTimeAttributeConstraint
 */
export interface DateTimeAttributeConstraint {
    /**
     * Description of the constraint
     * @type {string}
     * @memberof DateTimeAttributeConstraint
     */
    description?: string;
    /**
     * Error message to be displayed for wrong data
     * @type {string}
     * @memberof DateTimeAttributeConstraint
     */
    errorMessage?: string;
    /**
     * @type {AttributeConstraintType}
     * @memberof DateTimeAttributeConstraint
     */
    type: AttributeConstraintType;
    /**
     * @type {DateTimeAttributeConstraintData}
     * @memberof DateTimeAttributeConstraint
     */
    data?: DateTimeAttributeConstraintData;
}
