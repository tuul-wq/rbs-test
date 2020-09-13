class APIservice {
  constructor(baseUrl) {
    this._apiBase = baseUrl;
  }

  async _getResource(url, params) {
    const res = await fetch(this._apiBase + url, { ...params });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, error status: ${res.status}`);
    }
    return res.json();
  }

  _post(url, params = {}) {
    return this._getResource(url, {
      ...params,
      method: 'POST',
      headers: {
        ...params?.headers,
        'Accept': 'application/json;charset=UTF-8',
        ...(params?.body && { 'Content-Type': 'application/json' })
      }
    });
  }

  _get(url, params) {
    return this._getResource(url, {
      ...params,
      method: 'GET',
      headers: {
        ...params?.headers,
        'Accept': 'application/json;charset=UTF-8'
        // ...(params?.body && { 'Content-Type': 'application/json' })
      }
    });
  }
}

class RbsService extends APIservice {
  constructor() {
    super('/sb-mp3back/');
  }

  async getAllProfiles() {
    const res = await this._post(ENDPOINTS.GET_ALL);
    console.log('getAllProfiles -> res', res);
  }

  async getSingleProfile() {
    const res = await this._getResource(ENDPOINTS.GET_SINGLE);
    console.log('getSingleProfile -> res', res);
  }

  async removeAllProfiles() {
    const res = await this._getResource(ENDPOINTS.REMOVE_ALL);
    console.log('removeAllProfiles -> res', res);
    // {
    //   "deletedItemsCount": 0,
    //   "status": "SUCCESS"
    // }
  }

  async removeSingleProfile() {
    const res = await this._post(ENDPOINTS.REMOVE_SINGLE);
    console.log('removeSingleProfile -> res', res);
  }

  async updateProfile(profiles) {
    const res = await this._post(ENDPOINTS.UPDATE, {
      // body: JSON.stringify({ key: GATEWAY_PROFILES, value: JSON.stringify({ hello: 'hello_123' }) })
      body: JSON.stringify({ key: 'GATEWAY_PROFILES', value: JSON.stringify(profiles) })
    });
    console.log('updateProfile -> res', res);
  }

  // async login(login, password) {
  async login() {
    const res = await this._post(ENDPOINTS.LOGIN, {
      headers: {
        'X-Original-Url': `https://all.rbsdev.com/sb-mp3front/${ENDPOINTS.LOGIN}`
      },
      body: JSON.stringify({ login: 'mp3-lk', password: 'mp3-lk', language: 'ru' })
    });

    const profiles = res.server_storage.find(({ key }) => key === GATEWAY_PROFILES);
    return profiles ? JSON.parse(profiles.value.replaceAll('&quot;', '"')) : [];
  }

  async logout() {
    const res = await this._post(ENDPOINTS.LOGOUT);
    console.log('logout -> res', res);
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