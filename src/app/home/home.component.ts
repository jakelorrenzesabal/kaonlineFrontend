import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';
import { Account, Role } from '@app/_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    account: Account | null = null;
    Role = Role;
    activeRoleView: string = 'Customer';

    constructor(private accountService: AccountService) {
        this.account = this.accountService.accountValue;
    }

    ngOnInit(): void {
        if (this.account) {
            this.activeRoleView = this.account.role || 'Customer';
        }
    }

    switchRoleView(role: string): void {
        this.activeRoleView = role;
    }
}