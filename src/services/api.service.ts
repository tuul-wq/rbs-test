import { IProfile } from 'Store/types/storage-types';
import { IUser } from 'Store/types/user-types';

export interface IAuth {
  login: (login: string, password: string) => Promise<Partial<IUser>>;
  logout: () => void;
}

export interface IStorage {
  syncStorages: (profiles: IProfile[]) => void;
  getAllProfiles: () => Promise<IProfile[]>;
  updateProfile: (profiles: IProfile[]) => void;
}

class APIservice {

  _post(url: string, params: RequestInit = {}) {
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

  private async _getResource(url: string, params: RequestInit): Promise<any> {
    const res = await fetch(this.path + url, { ...params });
    if (!res.ok) {
      console.error(`Could not fetch ${res.url}, error status: ${res.status}`);
      throw new Error(String(res.status));
    }
    return res.json();
  }

  get path() {
    return '/' + window.location.pathname.split('/')[1];
  }

  get originPath() {
    return window.location.origin + this.path;
  }
}

export default APIservice;
