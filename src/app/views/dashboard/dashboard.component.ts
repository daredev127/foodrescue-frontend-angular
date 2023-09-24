import { Component } from '@angular/core';
import { cilChartPie, cilArrowRight } from '@coreui/icons';
import { DashboardService } from '../../services/dashboard.service';
import { IMarketplaceSummary } from '../../dtos/IMarketplaceSummary';
import { IDonationSummary } from '../../dtos/IDonationSummary';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dashboardService: DashboardService) {}
  donationSummary?: IDonationSummary;
  marketplaceSummary?: IMarketplaceSummary;
  annualSales: any;
  dailySales: any;
  weeklySales: any;
  monthlySales: any;
  topProducts: any[] = [];
  topSellers: any[] = [];

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe((res) => {
      // console.log(res);
      if (res.status.toLowerCase() == 'ok') {
        this.donationSummary = res.data;
      }
    });
  }
}
