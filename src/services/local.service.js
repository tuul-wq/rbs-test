class LocalService {
  constructor() {
    this.storageKey = GATEWAY_PROFILES;
  }

  _getStorageValue() {
    const item = localStorage.getItem(this.storageKey);
    return item ? JSON.parse(item) : [];
  }

  _setStorageValue(value) {
    localStorage.setItem(this.storageKey, JSON.stringify(value));
  }

  async getAllProfiles() {
    return Promise.resolve(this._getStorageValue());
  }

  // TODO: add sync
  async updateProfile(profiles) {
    this._setStorageValue(profiles);
  }
}

const GATEWAY_PROFILES = 'GATEWAY_PROFILES';

export default LocalService;
