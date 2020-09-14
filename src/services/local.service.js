class LocalService {
  constructor() {
    this.storageKey = GATEWAY_PROFILES;
  }

  getStorageValue() {
    const item = localStorage.getItem(this.storageKey);
    return item ? JSON.parse(item) : [];
  }

  setStorageValue(value) {
    localStorage.setItem(this.storageKey, JSON.stringify(value));
  }

  mergeStorages(dbProfiles) {
    const backupLs = this.getStorageValue() || [];
    if (!backupLs.length) return dbProfiles;

    const profiles = backupLs.map(ls => {
      const match = dbProfiles.find(db => db.profileId === ls.profileId);
      return match ? { ...match, ...ls } : ls;
    });
    profiles.push(
      ...dbProfiles.filter(db => backupLs.every(ls => db.profileId !== ls.profileId))
    );
    return profiles;
  }

  syncStorages(profiles) {
    this.setStorageValue(profiles);
  }

  async getAllProfiles() {
    return Promise.resolve(this.getStorageValue());
  }

  async updateProfile(profiles) {
    this.setStorageValue(profiles);
  }
}

const GATEWAY_PROFILES = 'GATEWAY_PROFILES';

export default LocalService;
