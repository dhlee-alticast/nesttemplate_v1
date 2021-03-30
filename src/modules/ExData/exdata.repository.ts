import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { ExData } from './exdata.entity';

@EntityRepository(ExData)
export class ExDAtaRepository extends Repository<ExData> {}
