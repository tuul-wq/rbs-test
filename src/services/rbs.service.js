import APIservice from './api.service';

class RbsService extends APIservice {
  constructor() {
    super('/sb-mp3back/');
  }

  async getAllProfiles() {
    const res = await this._post(ENDPOINTS.GET_ALL);
    console.log('getAllProfiles -> res', res);
  }

  // async getSingleProfile() {
  //   const res = await this._getResource(ENDPOINTS.GET_SINGLE);
  //   console.log('getSingleProfile -> res', res);
  // }

  // async removeAllProfiles() {
  //   const res = await this._getResource(ENDPOINTS.REMOVE_ALL);
  //   console.log('removeAllProfiles -> res', res);
  // }

  async removeSingleProfile() {
    const res = await this._post(ENDPOINTS.REMOVE_SINGLE);
    console.log('removeSingleProfile -> res', res);
  }

  async updateProfile(profiles) {
    const res = await this._post(ENDPOINTS.UPDATE, {
      body: JSON.stringify({ key: GATEWAY_PROFILES, value: JSON.stringify(profiles) })
    });
    console.log('updateProfile -> res', res);
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