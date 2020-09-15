class APIservice {
  constructor(baseUrl) {
    this._apiBase = baseUrl;
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

  async _getResource(url, params) {
    const res = await fetch(this._apiBase + url, { ...params });
    if (!res.ok) {
      console.error(`Could not fetch ${res.url}, error status: ${res.status}`);
      throw new Error(res.status);
    }
    return res.json();
  }
}

export default APIservice;
