import 'discord.js';
import { IUserResult } from './database/interactors/types/UserResult';

declare module 'discord.js' {
  export abstract class CommandInteraction<Cached extends CacheType = CacheType> extends BaseInteraction<Cached> {
    account: IUserResult
  }
}

// TODO This Has Failed
