/*
 * @Description:
 * @Anthor: Telliex
 * @Date: 2023-06-13 22:57:02
 * @LastEditors: Telliex
 * @LastEditTime: 2023-06-13 22:57:10
 */

import { ModuleMetadata } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

// src/core/core.module.ts
export class CoreModule {
  public static forRoot(options?: TypeOrmModuleOptions) {
    const imports: ModuleMetadata['imports'] = [TypeOrmModule.forRoot(options)];
    return {
      global: true,
      imports,
      module: CoreModule,
    };
  }
}
