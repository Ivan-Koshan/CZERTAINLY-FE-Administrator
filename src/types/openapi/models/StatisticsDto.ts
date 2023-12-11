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
 * @export
 * @interface StatisticsDto
 */
export interface StatisticsDto {
    /**
     * Number Certificates available
     * @type {number}
     * @memberof StatisticsDto
     */
    totalCertificates?: number;
    /**
     * Number of Groups
     * @type {number}
     * @memberof StatisticsDto
     */
    totalGroups?: number;
    /**
     * Number of Discoveries triggered
     * @type {number}
     * @memberof StatisticsDto
     */
    totalDiscoveries?: number;
    /**
     * Number of Connectors added
     * @type {number}
     * @memberof StatisticsDto
     */
    totalConnectors?: number;
    /**
     * Number of RA Profiles in the platform
     * @type {number}
     * @memberof StatisticsDto
     */
    totalRaProfiles?: number;
    /**
     * Number of Credentials
     * @type {number}
     * @memberof StatisticsDto
     */
    totalCredentials?: number;
    /**
     * Number of Authority instances
     * @type {number}
     * @memberof StatisticsDto
     */
    totalAuthorities?: number;
    /**
     * Number of Administrators
     * @type {number}
     * @memberof StatisticsDto
     */
    totalAdministrators?: number;
    /**
     * Number of Clients added
     * @type {number}
     * @memberof StatisticsDto
     */
    totalClients?: number;
    /**
     * Map of Certificate count by Group
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    groupStatByCertificateCount?: { [key: string]: number };
    /**
     * Map of Certificate count by RA Profile
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    raProfileStatByCertificateCount?: { [key: string]: number };
    /**
     * Map of Certificate count by Type
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    certificateStatByType?: { [key: string]: number };
    /**
     * Map of Certificate count by expiry date
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    certificateStatByExpiry?: { [key: string]: number };
    /**
     * Map of Certificate count by key size
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    certificateStatByKeySize?: { [key: string]: number };
    /**
     * Map of Certificate count by basic constraints
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    certificateStatByBasicConstraints?: { [key: string]: number };
    /**
     * Map of Certificate count by state
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    certificateStatByState?: { [key: string]: number };
    /**
     * Map of Certificate count by validationStatus
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    certificateStatByValidationStatus?: { [key: string]: number };
    /**
     * Map of Certificate count by compliance status
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    certificateStatByComplianceStatus?: { [key: string]: number };
    /**
     * Map of Connector count by status
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    connectorStatByStatus?: { [key: string]: number };
    /**
     * Map of RA Profile count by status
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    raProfileStatByStatus?: { [key: string]: number };
    /**
     * Map of Administrator count by status
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    administratorStatByStatus?: { [key: string]: number };
    /**
     * Map of Client count by status
     * @type {{ [key: string]: number; }}
     * @memberof StatisticsDto
     */
    clientStatByStatus?: { [key: string]: number };
}
