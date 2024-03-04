import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ApiService } from '../services/api.service';
import { mergeMap, of, take } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Car } from '../models/Car';

export const carResolver: ResolveFn<HttpResponse<Car[]>> = (route, state) => {
  const apiService = inject(ApiService)
  return apiService.getCars().pipe(take(1),mergeMap(car => of(car)))
};
