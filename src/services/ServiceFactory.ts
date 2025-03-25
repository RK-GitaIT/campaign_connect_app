import { ICampaignService } from './CampaignService';
import { CampaignService } from './CampaignService';

export class ServiceFactory {
  private static instance: ServiceFactory;
  private campaignService: ICampaignService;

  private constructor() {
    // Initialize services
    this.campaignService = new CampaignService();
  }

  public static getInstance(): ServiceFactory {
    if (!ServiceFactory.instance) {
      ServiceFactory.instance = new ServiceFactory();
    }
    return ServiceFactory.instance;
  }

  public getCampaignService(): ICampaignService {
    return this.campaignService;
  }
} 