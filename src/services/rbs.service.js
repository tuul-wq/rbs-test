class RBSservice {
  constructor() {
    this._apiBase = 'https://all.rbsdev.com/sb-mp3back/';
  }

  async _getResource(url, params = {}) {
    const res = await fetch(this._apiBase + url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, error status: ${res.status}`);
    }
    return await res.json();
  }

  async getAllProfiles() {
    const res = await this._getResource(ENDPOINTS.GET_ALL);
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
    const res = await this._getResource(ENDPOINTS.REMOVE_SINGLE);
    console.log('removeSingleProfile -> res', res);
  }

  async updateProfile() {
    const res = await this._getResource(ENDPOINTS.UPDATE);
    console.log('updateProfile -> res', res);
  }

  async login() {
    const res = await this._getResource(ENDPOINTS.LOGIN);
    console.log('login -> res', res);
  }

  async logout() {
    const res = await this._getResource(ENDPOINTS.LOGOUT);
    console.log('logout -> res', res);
  }
}

const AUTH_PATH = 'auth/cookie';
const STORAGE_PATH = 'serverstorage';

const ENDPOINTS = {
  GET_ALL: `${STORAGE_PATH}/items`,
  GET_SINGLE: `${STORAGE_PATH}/get`,
  REMOVE_ALL: `${STORAGE_PATH}/clear`,
  REMOVE_SINGLE: `${STORAGE_PATH}/remove`,
  UPDATE: `${STORAGE_PATH}/set`,

  LOGIN: `${AUTH_PATH}/login`,
  LOGOUT: `${AUTH_PATH}/logout`
}

export default RBSservice;