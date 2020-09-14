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
      }
    });
  }
}

export default APIservice;