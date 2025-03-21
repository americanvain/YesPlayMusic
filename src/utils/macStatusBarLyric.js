import { ipcRenderer } from 'electron';
import eventBus from '@/utils/eventBus';
import { Lyric, Control, Canvas } from '@/utils/trayCanvas';

import previous from '@/assets/tray/skip_previous.png';
import playing from '@/assets/tray/play_arrow.png';
import next from '@/assets/tray/skip_next.png';
import paused from '@/assets/tray/pause.png';
import liked from '@/assets/tray/like.png';
import like_solid from '@/assets/tray/like_fill.png';
import tray_icon from '@/assets/tray/icon.png';
import thumbs_down from '@/assets/tray/thumbs_down.png';

import store from '@/store';
const player = store.state.player;

class TrayLiric {
  constructor() {
    this._icon = null;
    this._control = null;
    this._lyric = null;
    this._lyricText = null;
    this.init();
  }
  init() {
    this.getIcons();
    this.getConbineIcon();
    this.buildTray();
    this.drawTray(true, true, true);
    this.handleEvent();
  }
  getIcons() {
    this._lyric = new Lyric();
    this._control = new Control([
      player.isPersonalFM ? thumbs_down : previous,
      player.playing ? paused : playing,
      next,
      player.isCurrentTrackLiked ? like_solid : liked,
    ]);
    this._icon = new Control([tray_icon]);
  }
  getConbineIcon() {
    const show_control = store.state.settings.showControl;
    const show_lyric = store.state.settings.showStatusBarLyric;
    let width = this._icon.canvas.width;
    let height = this._icon.canvas.height;
    let devicePixelRatio = 1;
    width += show_lyric ? this._lyric.canvas.width : 0;
    width += show_control ? this._control.canvas.width : 0;
    devicePixelRatio = this._icon.devicePixelRatio;
    this._tray = new Canvas({ width, height });
    this._tray.devicePixelRatio = devicePixelRatio;
  }
  buildTray() {
    const show_control = store.state.settings.showControl;
    const show_lyric = store.state.settings.showStatusBarLyric;
    const width = this._tray.canvas.width;
    const height = this._tray.canvas.height;
    this._tray.ctx.clearRect(0, 0, width, height);
    let x = 0;
    if (show_lyric) {
      this._tray.ctx.drawImage(this._lyric.canvas, x, 0);
      x += this._lyric.canvas.width;
    }
    if (show_control) {
      this._tray.ctx.drawImage(this._control.canvas, x, 0);
      x += this._control.canvas.width;
    }
    this._tray.ctx.drawImage(this._icon.canvas, x, 0);
    ipcRenderer.send('updateTray', {
      img: this._tray.canvas.toDataURL(),
      width: this._tray.canvas.width / this._tray.devicePixelRatio,
      height: this._tray.canvas.height / this._tray.devicePixelRatio,
    });
  }
  drawTray(changeLyric, changeControl, changeIcon) {
    if (changeLyric) this._lyric.draw();
    if (changeControl) this._control.draw();
    if (changeIcon) this._icon.draw();
  }
  _drawControl() {
    this._control.updateImage(0, player.isPersonalFM ? thumbs_down : previous);
    this._control.updateImage(1, player.playing ? paused : playing);
    this._control.updateImage(
      3,
      player.isCurrentTrackLiked ? like_solid : liked
    );
    this._control.draw();
  }
  _allClick(show_lyric, position) {
    // tray图标左右各有8个像素的空白，计算时需要先减去8个像素
    const x = show_lyric
      ? position.x - 8 - this._lyric.canvas.width / this._tray.devicePixelRatio
      : position.x - 8;
    if (x > 0) {
      switch (parseInt(x / this._control.singleWidth)) {
        case 0:
          if (player.isPersonalFM) {
            player.moveToFMTrash();
          } else {
            player.playPrevTrack();
          }
          break;
        case 1:
          player.playOrPause();
          break;
        case 2:
          if (player.isPersonalFM) {
            player.playNextFMTrack();
          } else {
            player.playNextTrack();
          }
          break;
        case 3:
          if (player.currentTrack.isLocal && !player.currentTrack.matched)
            return;
          store.dispatch('likeATrack', player.currentTrack.id);
          break;
        case 4:
          ipcRenderer.send('windowShow');
      }
    }
  }
  handleEvent() {
    ipcRenderer.on('changeTrayPlayingStatus', () => this._drawControl());
    ipcRenderer.on('changeTrayLikeStatus', () => this._drawControl());
    ipcRenderer.on('tray-click', (_, { position }) => {
      const show_control = store.state.settings.showControl;
      const show_lyric = store.state.settings.showStatusBarLyric;
      if (show_control) {
        this._allClick(show_lyric, position);
      } else if (show_lyric) {
        const x =
          position.x -
          8 -
          this._lyric.canvas.width / this._tray.devicePixelRatio;
        if (x > 0) ipcRenderer.send('windowShow');
      } else {
        ipcRenderer.send('windowShow');
      }
    });

    eventBus.$on('switchShowTray', idx => {
      const drawBool = [false, false, false];
      drawBool[idx] = true;
      this.getConbineIcon();
      this.buildTray();
      this.drawTray(...drawBool);
    });
    eventBus.$on('lyric-draw', () => {
      this.buildTray();
    });
    eventBus.$on('control-draw', () => {
      this.buildTray();
    });
  }
}

class TouchBarLyric {
  constructor() {
    this._lyric = new Lyric({ width: 252, fontSize: 12 });
    this._lyric.allLyric = {
      text: player.currentTrack.name || '听你想听的音乐',
      width: 0,
      time: 0, // 单句歌词的播放时间
    };
    this._touchBar = new Canvas({
      width: this._lyric.canvas.width,
      height: this._lyric.canvas.height,
      devicePixelRatio: 1,
    });
    this.buildTouchBar();
    this.handleEvent();
  }
  buildTouchBar() {
    const width = this._touchBar.canvas.width;
    const height = this._touchBar.canvas.height;
    this._touchBar.ctx.clearRect(0, 0, width, height);
    this._touchBar.ctx.drawImage(this._lyric.canvas, 0, 0);
    ipcRenderer.send('updateBarLyric', {
      img: this._touchBar.canvas.toDataURL(),
      width: this._touchBar.canvas.width,
      height: this._touchBar.canvas.height,
    });
  }
  handleEvent() {
    eventBus.$on('lyric-draw', () => {
      this.buildTouchBar();
    });
  }
}

export function initMacStatusbarLyric() {
  const tray = new TrayLiric();
  const touchBar = new TouchBarLyric();
  eventBus.$on('updateCurrentLyric', lyric => {
    const arg = {
      text: lyric.content,
      width: 0,
      time: lyric.time * 1000, // 单句歌词的播放时间
    };
    tray._lyric.updateLyric(arg);
    touchBar._lyric.updateLyric(arg);
  });
}
