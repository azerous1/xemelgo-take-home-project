import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:80'
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

      const res = await axios.post('update-location-history', config)
      console.log(res)
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
      const res = await axios.post('update-action-history', config)
      console.log(res)
    } catch (error) {
      return error
    }
  }
}
