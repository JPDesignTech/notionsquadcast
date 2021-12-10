export interface EnvConfig {
    notionAPI: {
        notionIntegrationToken: string;
        notionDBID: string;
    };
    squadcastAPI: {
        webhook: string;
    };
}
