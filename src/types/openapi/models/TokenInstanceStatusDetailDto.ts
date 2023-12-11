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

import type { TokenInstanceStatus, TokenInstanceStatusComponent } from "./";

/**
 * Status Of the Token Instance
 * @export
 * @interface TokenInstanceStatusDetailDto
 */
export interface TokenInstanceStatusDetailDto {
    /**
     * @type {TokenInstanceStatus}
     * @memberof TokenInstanceStatusDetailDto
     */
    status: TokenInstanceStatus;
    /**
     * Components of the Token instance status
     * @type {{ [key: string]: TokenInstanceStatusComponent; }}
     * @memberof TokenInstanceStatusDetailDto
     */
    components?: { [key: string]: TokenInstanceStatusComponent };
}
