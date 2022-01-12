export interface IAppConfig {
    env: {
        name: string;
    };
    appInsights: {
        instrumentationKey: string;
    };
    logging: {
        console: boolean;
        appInsights: boolean;
    };
    aad: {
        requireAuth: boolean;
        tenant: string;
        clientId: string;

    };
    apiServer: {
        metadata: string;
        rules: string;
    };
    firebase:{
        projectId:string,
        appId: string,
        databaseURL:string,
        storageBucket:string,
        locationId:string,
        apiKey:string,
        authDomain:string,
        messagingSenderId:string,
        measurementId:string,
    }
}