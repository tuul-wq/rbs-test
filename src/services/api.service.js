class APIservice {
  constructor(baseUrl) {
    this._apiBase = baseUrl;
  }

  async _getResource(url, params) {
    const { ok, status, json } = await fetch(this._apiBase + url, { ...params });
    if (!ok) {
      if (this._isServerError(status)) {
        console.error(`Server error status : ${status}`);
        throw new Error(status);
      }
      throw new Error(`Could not fetch ${url}, error status: ${status}`);
    }
    return json();
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

  _isServerError(status) {
    return /5\d\d/.test(status);
  }
}

export default APIservice;
