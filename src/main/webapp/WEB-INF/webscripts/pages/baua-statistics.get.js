model.jsonModel = {
    services: [
        'baua/StatisticsService',
        {
            name: "alfresco/services/LoggingService",
            config: {
                loggingPreferences: {
                    enabled: true,
                    // all: true,
                    all: false,
                    warn: true,
                    error: true //,
                    //filter: "tutorial/HelloWorld(.*)"
                }
            }
        }
    ],
    widgets: [
        {
            name: "alfresco/header/SetTitle",
            config: {
                title: "BAuA-Online-Autorensystem"
            }
        },
        {
            name: 'baua/TableWidget'
        }
    ]
};
