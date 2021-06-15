import { withLogger } from "@app/api/logger"
import axios from "axios"

class Request {
  constructor(token) {
    this.token = token
    this.request = withLogger(
      axios.create({
        baseURL: "http://localhost:3000/",
        timeout: 1000,
      }),
    )
  }

  requestWithToken = () => {
    return {
      header: {
        "x-token": this.token,
      },
    }
  }

  get = (url, withAuth) => {
    let config = {}

    if (withAuth) {
      config = { ...config, ...this.requestWithToken() }
    }

    return this.request.get(url, config)
  }

  post = (url, params) => {
    let config = {}

    if (params) {
      config = { ...config, ...this.requestWithToken() }
    }

    return this.request.post(url, params, config)
  }
}

export const request = new Request("test token")
