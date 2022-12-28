import axios from 'axios'

axios.defaults.baseURL = 'https://xemelgo-server.yichi-zhang.com'
axios.defaults.headers['Content-Type'] = 'application/json'

export default class APIStore {
  async getAllItems() {
      const items = await axios.get(`get-all-items`)
      return items.data
  }

  async getLocationHistory(locationHistoryIds: string[]) {
    try {
      const config = {
        params: {
          locationHistoryIds: JSON.stringify(locationHistoryIds)
        }
      }
      const locationHistory = await axios.get('get-location-history', config)
      return locationHistory.data
    } catch (error) {
      return error
    }
  }

  async getActionHistory(actionHistoryIds: string[]) {
    try {
      const config = {
        params: {
          actionHistoryIds: JSON.stringify(actionHistoryIds)
        }
      }
      const actionHistory = await axios.get('get-action-history', config)
      return actionHistory.data
    } catch (error) {
      return error
    }
  }

  async insertLocationHistory(itemId: string, location: string) {
    try {
      const config = {
        data: JSON.stringify({
          itemId: itemId,
          location: location
        })
      }

      await axios.post('update-location-history', config)

    } catch (error) {
      return error
    }
  }

  async insertActionHistory(itemId: string, userName: string, action: string) {
    try {
      const config = {
        data: JSON.stringify({
          itemId: itemId,
          userName: userName,
          action: action
        })
      }

      await axios.post('update-action-history', config)

    } catch (error) {
      return error
    }
  }
}
