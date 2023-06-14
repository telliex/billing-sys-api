import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const database: () => TypeOrmModuleOptions = () => ({
  // ...
  // 此處entites設置為空即可,我們直接通過在模塊內部使用`forFeature`來註冊模型
  // 後續魔改框架的時候,我們會通過自定義的模塊創建函數來重置entities,以便給自己編寫的CLI使用
  // 所以這個配置後面會刪除
  entities: [],
  // 自動加載模塊中註冊的entity
  autoLoadEntities: true,
  // 可以在開發環境下同步entity的數據結構到數據庫
  // 日後會使用自定義的遷移命令來代替,以便在生產環境中使用,所以以後這個選項會永久false
  synchronize: process.env.NODE_ENV !== 'production',
});
