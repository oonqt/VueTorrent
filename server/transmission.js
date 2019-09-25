const _Transmission = require('transmission-promise')
const dotenv = require('dotenv')
const Torrent = require('./models/torrent.class.js')
const Stat = require('./models/stat.class.js')

dotenv.config()
// server
const tr = new _Transmission({
  host: 'localhost',
  port: 9091,
  username: 'Daan',
  password: 'Daan123',
})

class Transmission {
  async get_session_stats() {
    return new Promise((resolve, reject) => {
      tr.sessionStats()
        .then((res) => {
          console.log(res)
          resolve(res)
        })
        .catch((err) => reject(`something went wrong:${err}`))
    })
  }

  // get all torrents
  async get_all(prop) {
    return new Promise((resolve, reject) => {
      tr.get()
        .then((res) => {
          // console.log(res)
          const torrents = []
          res.torrents.forEach((el) => {
            const dloaded = el.totalSize - el.leftUntilDone
            const uploaded = el.totalSize * el.uploadRatio
            const state = this.formatState(el.status)
            const t = new Torrent({
              name: el.name,
              size: el.totalSize,
              added_on: el.startDate,
              dlspeed: el.rateDownload,
              dloaded,
              upspeed: el.rateUpload,
              uploaded,
              eta: el.eta,
              num_leechs: el.peersConnected,
              num_seeds: el.webseedsSendingToUs,
              path: el.downloadDir,
              state,
              hash: el.hashString,
              num_complete: el.webseeds.length,
              num_incomplete: el.peers.length,
            })
            torrents.push(t)
          })
          resolve(torrents)
        })
        .catch((err) => reject(err))
    })
  }

  formatState(state) {
    switch (state) {
      case 0:
        return 'pausedDL'
      case 1:
        return 'downloading'
      case -1:
        return 'stalledDL'
      default:
        return undefined
    }
  }
}

const transmission = new Transmission()

async function test() {
  const stats = await transmission.get_all()
  console.log(stats)
}

test()

module.exports = transmission
