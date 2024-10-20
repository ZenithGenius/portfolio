import { Injectable, inject } from '@angular/core';
import { type IsActiveMatchOptions, Router } from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class VerifyLinkService {
  private router: Router = inject(Router);

  isLinkActive(url: string): boolean {
    console.log(url);
    const options: IsActiveMatchOptions = { paths: 'exact', queryParams: 'exact', fragment: 'exact', matrixParams: 'exact' };
    return this.router.isActive(url, options);
  }
}
