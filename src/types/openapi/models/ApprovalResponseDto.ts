// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.8.2-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { ApprovalDto } from "./";

/**
 * @export
 * @interface ApprovalResponseDto
 */
export interface ApprovalResponseDto {
    /**
     * Number of entries per page
     * @type {number}
     * @memberof ApprovalResponseDto
     */
    itemsPerPage: number;
    /**
     * Page number for the request
     * @type {number}
     * @memberof ApprovalResponseDto
     */
    pageNumber: number;
    /**
     * Number of pages available
     * @type {number}
     * @memberof ApprovalResponseDto
     */
    totalPages: number;
    /**
     * Number of items available
     * @type {number}
     * @memberof ApprovalResponseDto
     */
    totalItems: number;
    /**
     * List of the Approvals
     * @type {Array<ApprovalDto>}
     * @memberof ApprovalResponseDto
     */
    approvals: Array<ApprovalDto>;
}
