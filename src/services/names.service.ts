import { PublicESIService } from '@ionaru/esi-service';
import { EVE, IUniverseTypeData } from '@ionaru/eve-utils';

import { debug } from '../main';

export class NamesService {

    private debug = debug.extend('NamesService');
    private publicESIService: PublicESIService;

    constructor(publicESIService: PublicESIService) {
        this.publicESIService = publicESIService;
    }

    public async getName(id: number): Promise<string | undefined> {
        this.debug('getName');

        const url = EVE.getUniverseTypeUrl(id);
        const response = await this.publicESIService.fetchESIData<IUniverseTypeData>(url).catch(() => undefined);

        if (response) {
            return response.name;
        }

        return;
    }
}
