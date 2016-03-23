model.jsonModel = {
    services: [
        {
            name: "alfresco/services/LoggingService",
            config: {
                loggingPreferences: {
                    enabled: true,
                    // all: true,
                    all: false,
                    warn: true,
                    error: true
                    //filter: "tutorial/HelloWorld(.*)"
                }
            }
        },
        "tutorial/StatisticsService"
    ],
    widgets: [{
        name: 'tutorial/TableWidget'
    }
    ]
};
