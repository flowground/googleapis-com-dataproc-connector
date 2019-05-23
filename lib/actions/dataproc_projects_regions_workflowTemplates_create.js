/**
 * Auto-generated action file for "Cloud Dataproc" API.
 *
 * Generated at: 2019-05-23T09:13:16.326Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-dataproc-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'dataproc.projects.regions.workflowTemplates.create'
 * Endpoint Path: '/v1/{parent}/workflowTemplates'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "parent",
    "access_token",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "parent": "parent",
    "access_token": "access_token",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "createTime": "createTime",
    "id": "id",
    "jobs": "jobs",
    "labels": "labels",
    "name": "name",
    "parameters": "parameters",
    "clusterLabels": "clusterLabels",
    "zone": "zone",
    "clusterSelector": "clusterSelector",
    "clusterName": "clusterName",
    "configBucket": "configBucket",
    "gcePdKmsKeyName": "gcePdKmsKeyName",
    "encryptionConfig": "encryptionConfig",
    "internalIpOnly": "internalIpOnly",
    "metadata": "metadata",
    "networkUri": "networkUri",
    "serviceAccount": "serviceAccount",
    "serviceAccountScopes": "serviceAccountScopes",
    "subnetworkUri": "subnetworkUri",
    "tags": "tags",
    "zoneUri": "zoneUri",
    "gceClusterConfig": "gceClusterConfig",
    "initializationActions": "initializationActions",
    "accelerators": "accelerators",
    "bootDiskSizeGb": "bootDiskSizeGb",
    "bootDiskType": "bootDiskType",
    "numLocalSsds": "numLocalSsds",
    "diskConfig": "diskConfig",
    "imageUri": "imageUri",
    "instanceNames": "instanceNames",
    "isPreemptible": "isPreemptible",
    "machineTypeUri": "machineTypeUri",
    "instanceGroupManagerName": "instanceGroupManagerName",
    "instanceTemplateName": "instanceTemplateName",
    "managedGroupConfig": "managedGroupConfig",
    "numInstances": "numInstances",
    "masterConfig": "masterConfig",
    "secondaryWorkerConfig": "secondaryWorkerConfig",
    "imageVersion": "imageVersion",
    "optionalComponents": "optionalComponents",
    "properties": "properties",
    "softwareConfig": "softwareConfig",
    "workerConfig": "workerConfig",
    "config": "config",
    "managedCluster": "managedCluster",
    "placement": "placement",
    "updateTime": "updateTime",
    "version": "version",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'dataproc.projects.regions.workflowTemplates.create',
        pathName: '/v1/{parent}/workflowTemplates',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}