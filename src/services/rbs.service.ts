import { IProfile } from 'Store/types/storage-types';
import APIservice, { IAuth, IStorage } from './api.service';
import LocalService from './local.service';

class RbsService extends APIservice implements IAuth, IStorage {
  private localStorage: LocalService;

  constructor() {
    super();
    this.localStorage = new LocalService();
  }

  getAllProfiles = async () => {
    const dbProfiles: IProfile[] = [];
    try {
      const res: ServerStorage = await this._post(ENDPOINTS.GET_ALL);
      const match = res.server_storage.find(ss => ss.key === GATEWAY_PROFILES);
      if (match) {
        dbProfiles.push(...JSON.parse(match?.value.replace(/&quot;/g, '""')));
      }
    } catch (error) {
      dbProfiles.push(...await this.localStorage.getAllProfiles());
    } finally {
      return this.localStorage.mergeStorages(dbProfiles);
    }
  }

  removeSingleProfile = async () => {
    try {
      await this._post(ENDPOINTS.REMOVE_SINGLE);
    } catch (error) {
      this.localStorage.updateProfile([] as IProfile[]);
    }
  }

  updateProfile = async (profiles: IProfile[]) => {
    try {
      await this._post(ENDPOINTS.UPDATE, {
        body: JSON.stringify({ key: GATEWAY_PROFILES, value: JSON.stringify(profiles) })
      });
    } catch (error) {
      this.localStorage.updateProfile(profiles);
    }
  }

  syncStorages = (dbProfiles: IProfile[]) => {
    this.localStorage.syncStorages(dbProfiles);
  }

  login = async (login: string, password: string) => {
    try {
      const res = await this._post(ENDPOINTS.LOGIN, {
        headers: {
          // 'X-Original-Url': this.originPath + ENDPOINTS.LOGIN
          // needs 'front' suffix in dev mode
          'X-Original-Url': `https://all.rbsdev.com/sb-mp3front${ENDPOINTS.LOGIN}`
        },
        body: JSON.stringify({ login, password, language: 'ru' })
      });
      return { hasError: false, login: res.login, email: res.email };
    } catch (error) {
      return { hasError: true };
    }
  }

  logout = () => {
    this._post(ENDPOINTS.LOGOUT);
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

type ServerStorage = {
  server_storage: [{
    key: string;
    value: string
  }]
}

export default RbsService;
