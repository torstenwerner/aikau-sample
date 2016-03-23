/**
 * The new BAuA statistics service that fetches the data via JSON request from the repo.
 */

define(["dojo/_base/declare",
        "alfresco/core/Core",
        "dojo/_base/lang",
        "alfresco/core/CoreXhr",
        "service/constants/Default"],
    function (declare, Core, lang, CoreXhr, AlfConstants) {

        function get(payload) {
            console.log(payload);

            var alfTopic =
                (payload.alfResponseTopic != null) ? payload.alfResponseTopic : "";

            var sortDir =
                (payload.sortAscending != null && payload.sortAscending === true) ? "asc" : "desc";

            var sortField =
                (payload.sortField != null) ? payload.sortField : "shortName";

            var maxItems = (payload.pageSize != null) ? payload.pageSize : 50;
            var skipCount = (payload.page != null) ? (payload.page - 1) * maxItems : 0;

            this.serviceXhr({
                url: AlfConstants.PROXY_URI + "westernacher/baua/search?skipCount=" + skipCount + "&maxItems=" + maxItems +
                "&sortBy=" + sortField + "&dir=" + sortDir,
                method: "GET",
                alfTopic: alfTopic
            });
        }

        return declare([Core, CoreXhr], {
            constructor: function tutorial_UserAndGroupService__constructor(args) {
                lang.mixin(this, args);
                this.alfSubscribe("STATISTICS_GET", lang.hitch(this, get));
            }
        });
    });
