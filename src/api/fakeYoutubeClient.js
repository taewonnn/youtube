import axios from "axios";

export default class FakeYoutubeClient {

  async search(keyword) {
    return axios.get('/videos/search.json');
  }

  async videos(keyword) {
    return axios.get('/videos/popular.json');
  }

}




