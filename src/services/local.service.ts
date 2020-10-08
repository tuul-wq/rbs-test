import { IProfile } from 'Store/types/storage-types';
import { IStorage } from './api.service';

class LocalService implements IStorage{
  private storageKey: string;

  constructor() {
    this.storageKey = GATEWAY_PROFILES;
  }

  private getStorageValue(): IProfile[] {
    const profiles = localStorage.getItem(this.storageKey);
    return profiles ? JSON.parse(profiles) : [] as IProfile[];
  }

  private setStorageValue(profiles: IProfile[] = []) {
    localStorage.setItem(this.storageKey, JSON.stringify(profiles));
  }

  mergeStorages(dbProfiles: IProfile[] = []): IProfile[] {
    const backupLs = this.getStorageValue();
    if (!backupLs.length) return dbProfiles;
    if (!dbProfiles.length) return backupLs;

    const profiles = backupLs.map(ls => {
      const match = dbProfiles.find(db => db.profileId === ls.profileId);
      return match ? { ...match, ...ls } : ls;
    });
    profiles.push(
      ...dbProfiles.filter(db => backupLs.every(ls => db.profileId !== ls.profileId))
    );
    return profiles;
  }

  syncStorages = (profiles: IProfile[]) => {
    this.setStorageValue(profiles);
  }

  getAllProfiles = async (): Promise<IProfile[]> => {
    return this.getStorageValue();
  }

  updateProfile = (profiles: IProfile[]) => {
    this.setStorageValue(profiles);
  }
}

const GATEWAY_PROFILES = 'GATEWAY_PROFILES';

export default LocalService;
