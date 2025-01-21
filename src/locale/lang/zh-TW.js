export default {
  common: {
    play: '播放',
    songs: '首歌',
  },
  nav: {
    home: '首頁',
    explore: '發現',
    library: '音樂庫',
    localMusic: '本地音樂',
    search: '搜尋',
    github: 'GitHub 倉庫',
  },
  home: {
    recommendPlaylist: '推薦歌單',
    recommendArtist: '推薦藝人',
    newAlbum: '新專速遞',
    seeMore: '查看全部',
    charts: '排行榜',
  },
  library: {
    sLibrary: '的音樂庫',
    playCurrentTrack: '播放此歌曲',
    likedSongs: '我喜歡的音樂',
    sLikedSongs: '喜歡的音樂',
    playlists: '歌單',
    albums: '專輯',
    artists: '藝人',
    mvs: 'MV',
    cloudDisk: '雲盤',
    newPlayList: '新建歌單',
    uploadSongs: '上傳歌曲',
    playHistory: {
      title: '聽歌排行',
      week: '最近一週',
      all: '所有時間',
    },
    userProfileMenu: {
      settings: '設定',
      logout: '登出',
    },
  },
  localMusic: {
    sLocalMusic: '的本地音樂',
    latedAdd: '最近添加的音樂',
    playlist: '離線歌單',
    albums: '專輯',
    artists: '藝人',
    changeScanningPath: '更改掃描路徑',
    search: '搜尋本地音樂',
    description: `由於歌單簡介的編輯功能並沒有開發,\n因此這裡是設置了一段本地歌單的預設簡介,\n請待到相關功能完成後再進行設置吧~`,
    positionTrack: '定位歌曲',
    scrollToTop: '返回頂部',
  },
  explore: {
    explore: '發現',
    loadMore: '加載更多',
  },
  artist: {
    latestRelease: '最新發布',
    latestMV: '最新 MV',
    popularSongs: '熱門歌曲',
    showMore: '顯示更多',
    showLess: '收起',
    EPsSingles: 'EP 和單曲',
    albums: '專輯',
    withAlbums: '張專輯',
    artist: '藝人',
    videos: '個 MV',
    following: '正在關注',
    follow: '關注',
    similarArtists: '相似藝人',
    artistDesc: '藝術家介紹',
  },
  album: {
    released: '發行於',
    albumDesc: '專輯介紹',
  },
  playlist: {
    playlist: '歌單',
    updatedAt: '最後更新於',
    search: '搜尋歌單音樂',
  },
  login: {
    accessToAll: '可訪問全部數據',
    loginText: '登錄網易雲賬號',
    search: '搜尋網易雲賬號',
    readonly: '只能讀取賬號公開數據',
    usernameLogin: '用戶名登錄',
    searchHolder: '請輸入你的網易雲用戶名',
    enterTip: '按 Enter 搜尋',
    choose: '在列表中選中你的賬號',
    confirm: '確認',
    countryCode: '國際區號',
    phone: '手機號',
    email: '郵箱',
    password: '密碼',
    login: '登錄',
    loginWithEmail: '郵箱登錄',
    loginWithPhone: '手機號登錄',
    notice: `YesPlayMusic 承諾不會保存你的任何賬號信息到雲端。<br />
      你的密碼會在本地進行 MD5 加密後再傳輸到網易雲 API。<br />
      YesPlayMusic 並非網易雲官方網站，輸入賬號信息前請慎重考慮。 你也可以前往
      <a href="https://github.com/stark81/my_yesplaymusic/"
        >YesPlayMusic 的 GitHub 源代碼倉庫</a
      >
      自行構建並使用自託管的網易雲 API。`,
    noticeElectron: `你的密碼會在本地進行 MD5 加密後再傳輸到網易雲 API。<br />
      YesPlayMusic 不會傳輸你的賬號數據到任何非網易雲音樂官方的伺服器。<br />`,
  },
  mv: {
    moreVideo: '更多視頻',
  },
  next: {
    nowPlaying: '正在播放',
    nextUp: '即將播放',
  },
  player: {
    like: '喜歡',
    unlike: '取消喜歡',
    previous: '上一首',
    next: '下一首',
    repeat: '循環播放',
    repeatTrack: '單曲循環',
    shuffle: '隨機播放',
    reversed: '倒序播放',
    play: '播放',
    pause: '暫停',
    mute: '靜音',
    nextUp: '播放列表',
    osdLyrics: '桌面歌詞',
    noAllowCauseLocal: '本地歌曲，無法操作',
  },
  modal: {
    close: '關閉',
  },
  search: {
    artist: '藝人',
    album: '專輯',
    song: '歌曲',
    mv: '視頻',
    playlist: '歌單',
    noResult: '暫無結果',
    searchFor: '搜尋',
  },
  settings: {
    settings: '設定',
    logout: '登出',
    language: '語言',
    musicQuality: {
      text: '音質選擇',
      low: '普通',
      medium: '較高',
      high: '極高',
      lossless: '無損',
    },
    cacheLimit: {
      text: '歌曲緩存上限',
      none: '無限制',
    },
    lyricFontSize: {
      text: '歌詞字體大小',
      small: '小',
      medium: '中',
      large: '大（預設）',
      xlarge: '超大',
    },
    deviceSelector: '音頻輸出設備',
    permissionRequired: '需要麥克風權限',
    appearance: {
      text: '外觀',
      auto: '自動',
      light: '淺色',
      dark: '深色',
    },
    automaticallyCacheSongs: '自動緩存歌曲',
    clearSongsCache: '清除歌曲緩存',
    cacheCount: '已緩存 {song} 首 ({size})',
    showLyricsTranslation: {
      text: '顯示歌詞翻譯/音譯',
      never: '從不',
      tlyric: '翻譯',
      rlyric: '音譯',
    },
    showTray: '顯示狀態欄圖標',
    showControl: '顯示控制按鈕',
    showStatusBarLyric: '顯示狀態欄歌詞',
    showStatusMenu: {
      title: '啟用圖標菜單',
      desc1: '開啟此項後，當狀態欄控制按鈕和狀態欄歌詞',
      desc2: '同時關閉時，將為托盤圖標添加菜單欄',
    },
    minimizeToTray: '最小化到托盤',
    showPlaylistsByAppleMusic: '首頁顯示來自 Apple Music 的歌單',
    enableDiscordRichPresence: '啟用 Discord Rich Presence',
    enableGlobalShortcut: '啟用全局快捷鍵',
    showLibraryDefault: '啟動後顯示音樂庫',
    showTimeOrID: {
      text: '歌曲列表歌曲信息顯示選項',
      time: '歌曲時長',
      ID: '歌曲ID',
    },
    subTitleDefault: '副標題使用別名',
    enableReversedMode: '啟用倒序播放功能 (實驗性功能)',
    enableCustomTitlebar: '啟用自定義標題欄 (重啟後生效)',
    lyricsBackground: {
      text: '顯示歌詞背景',
      off: '關閉',
      on: '打開',
      dynamic: '動態（GPU 佔用較高）',
    },
    showLyricsTime: '顯示當前時間',
    closeAppOption: {
      text: '關閉主面板時...',
      ask: '詢問',
      exit: '退出',
      minimizeToTray: '最小化到托盤',
    },
    unm: {
      enable: '啟用',
      audioSource: {
        title: '備選音源',
      },
      enableFlac: {
        title: '啟用 FLAC',
        desc: '啟用後需要清除歌曲緩存才能生效',
      },
      searchMode: {
        title: '音源搜尋模式',
        fast: '速度優先',
        order: '順序優先',
      },
      cookie: {
        joox: 'Joox 引擎的 Cookie',
        qq: 'QQ 引擎的 Cookie',
        desc1: '設置說明請參見此處',
        desc2: '，留空則不進行相關設置',
      },
      ytdl: 'YtDl 引擎要使用的 youtube-dl 可執行文件',
      proxy: {
        title: '用於 UNM 的代理伺服器',
        desc1: '請求如 YouTube 音源服務時要使用的代理伺服器',
        desc2: '留空則不進行相關設置',
      },
    },
    localMusic: {
      localMusicShowDefault: {
        text: '本地音樂預設顯示',
        localSongs: '本地歌曲',
        playlists: '離線歌單',
        albums: '專輯',
        artists: '藝人',
      },
      localMusicFirst: {
        title: '優先使用本地歌曲',
        desc: '假如本地歌曲A匹配的在線歌曲為B，當播放在線歌曲B時，使用本地歌曲A播放',
      },
      matchStatus: {
        title: '本地歌曲匹配狀態',
        desc: '切換開關對已匹配的歌曲無影響',
      },
      exportLocalMusic: '導出本地歌曲信息',
      importLocalMusic: '導入本地歌曲信息',
      clearLocalMusic: '清空本地歌曲信息',
      localMusicPath: '本地歌曲掃描路徑',
      localMusicMatchedStatus: '本地歌曲匹配狀態',
    },
    extension: {
      status: '歌詞插件服務狀態',
      showLyric: {
        text: '顯示狀態欄歌詞',
        desc: '該功能需要安裝並啟用歌詞插件服務',
      },
    },
  },
  contextMenu: {
    play: '播放',
    addToQueue: '添加到隊列',
    reMatchTrack: '重新匹配歌曲',
    accurateMatch: '精準匹配',
    deleteMatch: '取消匹配',
    addToLocalPlaylist: '添加到本地歌單',
    removeFromQueue: '從隊列刪除',
    showInFolder: '在文件管理器中顯示',
    removeLocalTrack: '移除歌曲',
    recoveryTrack: '恢復移除歌曲',
    finish: '完成',
    reloadLocalMusic: '重新掃描',
    batchOperation: '批量操作',
    selectAll: '全選',
    saveToMyLikedSongs: '添加到我喜歡的音樂',
    removeFromMyLikedSongs: '從喜歡的音樂中刪除',
    saveToLibrary: '保存到音樂庫',
    removeFromLibrary: '從音樂庫刪除',
    addToPlaylist: '添加到歌單',
    changeLyricTime: '歌詞進度',
    showLyric: '查看歌詞',
    showComment: '查看評論',
    operationOption: '操作菜單',
    playBackSpeed: '倍速播放',
    searchInPlaylist: '歌單內搜尋',
    editPlaylistInfo: '編輯歌單信息',
    deletePlaylist: '刪除歌單',
    convertToOnlinePlaylist: '轉存至音樂庫',
    copyUrl: '複製鏈接',
    openInBrowser: '在瀏覽器中打開',
    allPlaylists: '全部歌單',
    minePlaylists: '創建的歌單',
    likedPlaylists: '收藏的歌單',
    localMusic: '本地歌曲',
    defaultSort: '預設排序',
    sortByName: '按名稱排列',
    ascendSort: '按時間升序排列',
    descendSort: '按時間降序排列',
    cardiacMode: '心動模式',
    reScan: '重新掃描',
    copyId: '複製ID',
  },
  toast: {
    savedToPlaylist: '已添加到歌單',
    convertedToLibrary: '已保存至音樂庫',
    deletedComment: '已刪除評論',
    removedFromPlaylist: '已從歌單中刪除',
    savedToMyLikedSongs: '已添加到我喜歡的音樂',
    removedFromMyLikedSongs: '已從喜歡的音樂中刪除',
    copied: '已複製',
    copyFailed: '複製失敗：',
    needToLogin: '此操作需要登錄網易雲賬號',
    commentFailed: '評論失敗',
  },
};
