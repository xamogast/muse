import { writable } from 'svelte/store';

export const mopidy = writable(null);

export const clients = writable([]);

export const currentTrack = writable({});

export const currentPlaytime = writable(0);

export const currentState = writable(null);

export const currentVolume = writable(null);

export const currentMute = writable(false);

export const totalPlaytime = writable(0);

export const snapClientsVisibility = writable(false);

export const albumImage = writable({});
