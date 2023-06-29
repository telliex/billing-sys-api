import { Configure } from '@/modules/core/configure';
import { ApiConfig } from '@/modules/restful/types';

import { v1 } from './v1';

export const api = (configure: Configure): ApiConfig => ({
    title: configure.env('API_TITLE', 'Eterne'),
    description: configure.env('API_DESCRIPTION', 'Eterne'),
    auth: true,
    prefix: { route: 'api', doc: 'api/docs' },
    default: configure.env('API_DEFAULT_VERSION', 'v1'),
    enabled: [],
    versions: { v1 },
});
