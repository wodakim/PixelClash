// --- AUDIO ENGINE ---
export const AUDIO = {
    ctx: null, isOn: false,
    masterGain: null, musicGain: null, sfxGain: null,
    loops: [], currentMusic: null,

    init: function() {
        if(this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
        const compressor = this.ctx.createDynamicsCompressor();
        compressor.threshold.value = -24; compressor.knee.value = 30;
        compressor.ratio.value = 12; compressor.attack.value = 0.003; compressor.release.value = 0.25;
        compressor.connect(this.ctx.destination);
        this.masterGain = this.ctx.createGain(); this.masterGain.gain.value = 0.5;
        this.masterGain.connect(compressor);
        this.musicGain = this.ctx.createGain(); this.musicGain.gain.value = 0.5;
        this.musicGain.connect(this.masterGain);
        this.sfxGain = this.ctx.createGain(); this.sfxGain.gain.value = 0.7;
        this.sfxGain.connect(this.masterGain);
        this.isOn = true;
    },
    toggle: function() {
        if(!this.ctx) { this.init(); return true; }
        this.isOn = !this.isOn;
        if(!this.isOn) { this.stopMusic(); if(this.ctx.state === 'running') this.ctx.suspend(); }
        else { if(this.ctx.state === 'suspended') this.ctx.resume(); }
        return this.isOn;
    },
    playTone: function(freq, type, duration, vol=1, detune=0) {
        if(!this.isOn || !this.ctx) return;
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        let osc2 = null;
        if(type==='square'||type==='sawtooth') {
            osc2 = this.ctx.createOscillator(); osc2.type=type;
            osc2.frequency.setValueAtTime(freq,t); osc2.detune.value=type==='square'?10:5;
            osc2.connect(gain);
        }
        osc.type = type; osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(vol, t+0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, t+duration);
        osc.connect(gain); gain.connect(this.sfxGain);
        osc.start(t); osc.stop(t+duration+0.1);
        if(osc2) { osc2.start(t); osc2.stop(t+duration+0.1); }
    },
    playNoise: function(duration, vol=1) {
        if(!this.isOn || !this.ctx) return;
        const bs = this.ctx.sampleRate * duration;
        const buf = this.ctx.createBuffer(1, bs, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for(let i=0; i<bs; i++) data[i]=Math.random()*2-1;
        const noise = this.ctx.createBufferSource(); noise.buffer = buf;
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime+duration);
        noise.connect(gain); gain.connect(this.sfxGain);
        noise.start();
    },
    playSFX: function(type) {
        if(!this.isOn) return;
        switch(type) {
            case 'spawn': this.playTone(440,'square',0.1,0.4); break;
            case 'attack': this.playNoise(0.05,0.3); this.playTone(150,'sawtooth',0.1,0.2); break;
            case 'hit': this.playTone(100,'square',0.1,0.4); this.playNoise(0.1,0.3); break;
            case 'heal': this.playTone(523,'sine',0.2,0.3); break;
            case 'zap': this.playTone(1200,'sawtooth',0.2,0.3); break;
            case 'tower_destroy': this.playNoise(0.5,0.5); this.playTone(60,'triangle',0.6,0.5); break;
            case 'tick': this.playTone(800, 'square', 0.05, 0.1); break;
            case 'legendary': this.playTone(440, 'sawtooth', 0.5, 0.5); break;
        }
    },
    playMusic: function(theme, onComplete) {
        if(!this.isOn) return;
        if(this.currentMusic === theme && theme !== 'victory') return;

        this.stopMusic();
        this.currentMusic = theme;

        // Définition des notes
        const N = { c3:130.8, d3:146.8, e3:164.8, f3:174.6, g3:196.0, a3:220.0, b3:246.9,
                    c4:261.6, d4:293.7, e4:329.6, f4:349.2, g4:392.0, a4:440.0, b4:493.9,
                    c5:523.3, d5:587.3, e5:659.3, f5:698.5, g5:784.0, a5:880.0, _:0 };

        let tracks = [], speed = 200;

        if(theme === 'menu') {
            speed = 250;
            const melody = [N.e4,N._,N.g4,N._,N.b4,N._,N.g4,N._,N.a4,N._,N.c5,N._,N.g4,N._,N.e4,N._,N.d4,N._,N.f4,N._,N.a4,N._,N.f4,N._,N.e4,N._,N.g4,N._,N.c4,N._,N._,N._];
            const bass = [N.c3,N._,N._,N._,N.c3,N._,N._,N._,N.f3,N._,N._,N._,N.f3,N._,N._,N._,N.g3,N._,N._,N._,N.g3,N._,N._,N._,N.c3,N._,N._,N._,N.c3,N._,N.g3,N._];
            tracks.push({notes:melody, type:'sine', vol:0.3});
            tracks.push({notes:bass, type:'triangle', vol:0.4});
        }
        else if(theme === 'battle') {
            speed = 130;
            const lead = [N.a4,N._,N.a4,N.g4,N.a4,N._,N.c5,N._,N.b4,N._,N.g4,N._,N.e4,N._,N.g4,N._,N.a4,N._,N.a4,N.g4,N.a4,N._,N.e5,N._,N.d5, N._,N.c5,N._,N.b4,N._,N.g4,N.g4];
            const bass = [N.a3,N.a3,N.e3,N.a3,N.a3,N.a3,N.g3,N.e3,N.g3,N.g3,N.d3,N.g3,N.g3,N.g3,N.b3,N.g3];
            const drums = [1,0,1,0, 1,0,1,1, 1,0,1,0, 1,1,1,0];
            tracks.push({notes:lead, type:'square', vol:0.25});
            tracks.push({notes:bass, type:'triangle', vol:0.45});
            tracks.push({notes:drums, type:'noise', vol:0.15});
        }
        else if(theme === 'victory') {
            speed = 110;
            const melody = [N.c4,N.c4,N.c4,N._,N.c4,N.e4,N.g4,N._,N.c5,N._,N.g4,N.e4,N.c5,N._,N._,N._];
            const bass = [N.c3,N.g3,N.c3,N.g3,N.c3,N.g3,N.c3,N.g3,N.c3,N._,N.c3,N._,N.c3,N._,N._,N._];
            tracks.push({notes:melody, type:'square', vol:0.3});
            tracks.push({notes:bass, type:'triangle', vol:0.4});
        }

        let step = 0;
        // Lancer la boucle
        const interval = setInterval(()=>{
            if(!this.isOn) return;
            tracks.forEach(track => {
                const n = track.notes[step % track.notes.length];
                if(n > 1) this.playTone(n, track.type, speed/1000*0.9, track.vol, 0, 0, true);
                else if(n === 1 && track.type === 'noise') this.playNoise(0.05, track.vol, true);
            });
            step++;
            // Arrêt auto pour la victoire
            if(theme === 'victory' && step >= tracks[0].notes.length) {
                clearInterval(interval);
                this.currentMusic = null;
                if(onComplete) onComplete();
            }
        }, speed);
        this.loops.push(interval);
    },
    stopMusic: function() {
        this.loops.forEach(l => clearInterval(l));
        this.loops = [];
        this.currentMusic = null;
    }
};
