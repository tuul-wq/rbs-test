import APIservice from './api.service';
import LocalService from './local.service';

class RbsService extends APIservice {
  constructor() {
    super('/sb-mp3back/');
    this._ls = new LocalService();
  }

  async getAllProfiles() {
    let dbProfiles = null;
    try {
      const res = await this._post(ENDPOINTS.GET_ALL);
      const match = res.server_storage.find(ss => ss.key === GATEWAY_PROFILES);
      dbProfiles = JSON.parse(match.value.replaceAll('&quot;', '"')) || [];
    } catch (error) {
      if (error !== 500) return;
      dbProfiles = this._ls.getAllProfiles();
    }
    return this._ls.mergeStorages(dbProfiles);
  }

  async removeSingleProfile() {
    try {
      await this._post(ENDPOINTS.REMOVE_SINGLE);
    } catch (error) {
      this._ls.setStorageValue();
    }
  }

  async updateProfile(profiles) {
    await this._post(ENDPOINTS.UPDATE, {
      body: JSON.stringify({ key: GATEWAY_PROFILES, value: JSON.stringify(profiles) })
    });
  }

  syncStorages(dbProfiles) {
    this._ls.syncStorages(dbProfiles);
  }

  async login() {
    const res = await this._post(ENDPOINTS.LOGIN, {
      headers: {
        'X-Original-Url': `https://all.rbsdev.com/sb-mp3front/${ENDPOINTS.LOGIN}`
      },
      body: JSON.stringify({ login: 'mp3-lk', password: 'mp3-lk', language: 'ru' })
    });

    return { login: res.login, email: res.email };

    // const profiles = res.server_storage.find(({ key }) => key === GATEWAY_PROFILES);
    // return profiles ? JSON.parse(profiles.value.replaceAll('&quot;', '"')) : [];
  }

  async logout() {
    await this._post(ENDPOINTS.LOGOUT);
  }


  // TODO: maybe in future
  // async getSingleProfile() {
  //   const res = await this._getResource(ENDPOINTS.GET_SINGLE);
  // }

  // async removeAllProfiles() {
  //   const res = await this._getResource(ENDPOINTS.REMOVE_ALL);
  // }
}

const GATEWAY_PROFILES = 'GATEWAY_PROFILES';

const STORAGE_PATH = 'serverstorage';

const ENDPOINTS = {
  GET_ALL: `${STORAGE_PATH}/items`,
  GET_SINGLE: `${STORAGE_PATH}/item/get`,
  REMOVE_ALL: `${STORAGE_PATH}/clear`,
  REMOVE_SINGLE: `${STORAGE_PATH}/item/remove`,
  UPDATE: `${STORAGE_PATH}/item/set`,

  LOGIN: 'auth/cookie/login',
  LOGOUT: `/logout`
}

export default RbsService;
