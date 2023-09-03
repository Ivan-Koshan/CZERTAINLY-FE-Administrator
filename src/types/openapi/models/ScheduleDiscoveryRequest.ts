// tslint:disable
/**
 * CZERTAINLY Core API
 * REST API for CZERTAINLY Core
 *
 * The version of the OpenAPI document: 2.8.1-SNAPSHOT
 * Contact: getinfo@czertainly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { DiscoveryDto, SchedulerJobInfoDto } from "./";

/**
 * @export
 * @interface ScheduleDiscoveryRequest
 */
export interface ScheduleDiscoveryRequest {
    /**
     * @type {SchedulerJobInfoDto}
     * @memberof ScheduleDiscoveryRequest
     */
    schedulerJobInfo?: SchedulerJobInfoDto;
    /**
     * @type {DiscoveryDto}
     * @memberof ScheduleDiscoveryRequest
     */
    request?: DiscoveryDto;
}
