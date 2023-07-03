
export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  // #이 없으면 공개함수 #이 붙어있다면 private(외부 인스턴스에서는 접근 불가)
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async ChannelImageUrl(id) {
    return this.apiClient.channels({params: {part: 'snippet', id: id}})
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoId: id
        },
      })
      .then((res) =>
        res.data.items.map(item => ({...item, id: item.id.videoId}))
      )
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    })
      .then(res => res.data.items)
      .then((items) => items.map(item => ({...item, id: item.id.videoId})))
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        chart: 'mostPopular',
      }
    })
      .then(res => res.data.items)
      .then((items) => items.map(item => ({...item, id: item.id.videoId})))
  }

}


