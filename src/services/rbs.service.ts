import APIservice from './api.service';
import LocalService from './local.service';

class RbsService extends APIservice {
  constructor() {
    super();
    this._ls = new LocalService();
  }

  async getAllProfiles() {
    let dbProfiles = [];
    try {
      const res = await this._post(ENDPOINTS.GET_ALL);
      const match = res.server_storage.find(ss => ss.key === GATEWAY_PROFILES);
      dbProfiles = JSON.parse(match.value.replaceAll('&quot;', '"')) || [];
    } catch (error) {
      dbProfiles = this._ls.getAllProfiles();
    } finally {
      return this._ls.mergeStorages(dbProfiles);
    }
  }

  async removeSingleProfile() {
    try {
      await this._post(ENDPOINTS.REMOVE_SINGLE);
    } catch (error) {
      this._ls.setStorageValue();
    }
  }

  async updateProfile(profiles) {
    try {
      await this._post(ENDPOINTS.UPDATE, {
        body: JSON.stringify({ key: GATEWAY_PROFILES, value: JSON.stringify(profiles) })
      });
    } catch (error) {
      this._ls.setStorageValue(profiles);
    }
  }

  syncStorages(dbProfiles) {
    this._ls.syncStorages(dbProfiles);
  }

  async login(login, password) {
    try {
      const res = await this._post(ENDPOINTS.LOGIN, {
        headers: {
          'X-Original-Url': this.originPath + ENDPOINTS.LOGIN
          // needs 'front' suffix in dev mode
          // 'X-Original-Url': `https://all.rbsdev.com/sb-mp3front-stg${ENDPOINTS.LOGIN}`
        },
        body: JSON.stringify({ login, password, language: 'ru' })
      });
      return { login: res.login, email: res.email, hasError: false };
    } catch (error) {
      return { login: '', email: '', hasError: true };
    }
  }

  async logout() {
    try {
      await this._post(ENDPOINTS.LOGOUT);
    } catch (error) { }
  }
}

const GATEWAY_PROFILES = 'GATEWAY_PROFILES';

const STORAGE_PATH = '/serverstorage';

const ENDPOINTS = {
  GET_ALL: `${STORAGE_PATH}/items`,
  GET_SINGLE: `${STORAGE_PATH}/item/get`,
  REMOVE_ALL: `${STORAGE_PATH}/clear`,
  REMOVE_SINGLE: `${STORAGE_PATH}/item/remove`,
  UPDATE: `${STORAGE_PATH}/item/set`,

  LOGIN: '/auth/cookie/login',
  LOGOUT: `/logout`
}

export default RbsService;