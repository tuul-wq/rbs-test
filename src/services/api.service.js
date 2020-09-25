class APIservice {

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
      }
    });
  }

  async _getResource(url, params) {
    const res = await fetch(this.path + url, { ...params });
    if (!res.ok) {
      console.error(`Could not fetch ${res.url}, error status: ${res.status}`);
      throw new Error(res.status);
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
