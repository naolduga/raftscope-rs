
  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 1048576, "DgAAAAwAAAAEAAAADwAAABAAAAARAAAAAVPAwAABU8AADCJwcmV2SW5kZXgiOsAMLCJwcmV2VGVybSI6wAssImVudHJpZXMiOsAPLCJjb21taXRJbmRleCI6wAAKInN1Y2Nlc3MiOsAOLCJtYXRjaEluZGV4IjrAAA4ibGFzdExvZ1Rlcm0iOsAQLCJsYXN0TG9nSW5kZXgiOsAABnsiaWQiOsAJLCJyb2xlIjoiwAkiLCJ0ZXJtIjrADCwidm90ZWRGb3IiOsANLCJsb2dMZW5ndGgiOsAPLCJjb21taXRJbmRleCI6wBEsImVsZWN0aW9uQWxhcm0iOsAJLCJncm91cCI6wAksInZvdGVzIjrAAAoiZ3JhbnRlZCI6wAACdD3AGDogTGVhZGVyIENvbXBsZXRlbmVzczogU8AHICh0ZXJtIMAYKSBsYWNrcyBjb21taXR0ZWQgZW50cnkgwAAWc2xpY2UgaW5kZXggc3RhcnRzIGF0IMANIGJ1dCBlbmRzIGF0IMAAIGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgwBIgYnV0IHRoZSBpbmRleCBpcyDAAAJ0PcAUOiBFbGVjdGlvbiBTYWZldHk6IFPABiBhbmQgU8AWIGJvdGggbGVhZGVycyBpbiB0ZXJtIMAAAnQ9wAM6IFPADSBjb21taXRJbmRleCDAEyBiZXlvbmQgbG9nIGxlbmd0aCDAABJyYW5nZSBzdGFydCBpbmRleCDAIiBvdXQgb2YgcmFuZ2UgZm9yIHNsaWNlIG9mIGxlbmd0aCDAABByYW5nZSBlbmQgaW5kZXggwCIgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggwADABCBvZiDAABBhc3NlcnRpb24gYGxlZnQgwBcgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IMAJCiByaWdodDogwADAAjogwAATXSwidmlvbGF0aW9uQ291bnQiOsABfQAGeyJpZCI6wAgsIm5leHQiOsAJLCJtYXRjaCI6wAF9AAd7InNlcSI6wAksImtpbmQiOiLACSIsImZyb20iOsAGLCJ0byI6wAgsInRlcm0iOsAILCJzZW50IjrACywiYXJyaXZlcyI6wAgsImxvc3QiOsABLMABfQAvcm9vdC8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2NvcmUvc3JjL3NsaWNlL2luZGV4LnJzAC9yb290Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUteDg2XzY0LXVua25vd24tbGludXgtZ251L2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvY29yZS9zcmMvbnVtL2ltcC9mbHQyZGVjL3N0cmF0ZWd5L2dyaXN1LnJzAC9yb290Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUteDg2XzY0LXVua25vd24tbGludXgtZ251L2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvY29yZS9zcmMvc2xpY2Uvc29ydC9zaGFyZWQvc21hbGxzb3J0LnJzAC9yb290Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUteDg2XzY0LXVua25vd24tbGludXgtZ251L2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycwAvcm9vdC8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2NvcmUvc3JjL251bS9pbXAvZGl5X2Zsb2F0LnJzAC9yb290Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUteDg2XzY0LXVua25vd24tbGludXgtZ251L2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvc3RkL3NyYy9zeXMvc3luYy9yd2xvY2svbm9fdGhyZWFkcy5ycwAvcm9vdC8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2NvcmUvc3JjL251bS9pbXAvZmx0MmRlYy9zdHJhdGVneS9kcmFnb24ucnMAL3Jvb3QvLnJ1c3R1cC90b29sY2hhaW5zL3N0YWJsZS14ODZfNjQtdW5rbm93bi1saW51eC1nbnUvbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9jb3JlL3NyYy9udW0vaW1wL2JpZ251bS5ycwBjcmF0ZXMvcmFmdHNjb3BlLWNvcmUvc3JjL3NpbS5ycwBjcmF0ZXMvcmFmdHNjb3BlLWNvcmUvc3JjL3RpbWVsaW5lLnJzAGNyYXRlcy9yYWZ0c2NvcGUtY29yZS9zcmMvc2NlbmUucnMAL3Jvb3QvLnJ1c3R1cC90b29sY2hhaW5zL3N0YWJsZS14ODZfNjQtdW5rbm93bi1saW51eC1nbnUvbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy9tb2QucnMAL3Jvb3QvLnJ1c3R1cC90b29sY2hhaW5zL3N0YWJsZS14ODZfNjQtdW5rbm93bi1saW51eC1nbnUvbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9jb3JlL3NyYy9udW0vaW1wL2ZsdDJkZWMvbW9kLnJzAC9yb290Ly5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2YvZGxtYWxsb2MtMC4yLjEzL3NyYy9kbG1hbGxvYy5ycwBjcmF0ZXMvcmFmdHNjb3BlLXdhc20vc3JjL2xpYi5ycwACdD3AGTogU3RhdGUgTWFjaGluZSBTYWZldHk6IFPACyBjb21taXR0ZWQgwAogYXQgaW5kZXggwAUgYnV0IMAUIHdhcyBjb21taXR0ZWQgdGhlcmUACHsidGltZSI6wAssImhvcml6b24iOsAFLCJuIjrACiwibGVhZGVyIjrADiwibGVhZGVyVGVybSI6wAssIm1heFRlcm0iOsAMLCJpbkZsaWdodCI6wA0sImVsZWN0aW9ucyI6wAssImxlYWRlcnMiOsAILCJzZW50IjrADSwiZGVsaXZlcmVkIjrACCwibG9zdCI6wA0sInJ1bGVFdmFscyI6wAwsInJlcXVlc3RzIjrADCwicmVqZWN0ZWQiOsANLCJjb21taXR0ZWQiOsAHLCJwNTAiOsAHLCJwOTkiOsAOLCJsZWFkZXJsZXNzIjrACywic3RvcHBlZCI6wA8sInBhcnRpdGlvbmVkIjrADywidmlvbGF0aW9ucyI6WwABIsABIgBSZXF1ZXN0Vm90ZVJlcXVlc3RWb3RlIHJlcGx5QXBwZW5kRW50cmllc0FwcGVuZEVudHJpZXMgcmVwbHlmb2xsb3dlcmNhbmRpZGF0ZWxlYWRlcnN0b3BwZWQsInBlZXJzIjpbAADPCBAAIAAAADcBAAAkAAAAzwgQACAAAAA3AQAANgAAAM8IEAAgAAAA4gAAABsAAABjYXBhY2l0eSBvdmVyZmxvdwAAAI8HEABuAAAAHAAAAAU=");
  base64DecodeToExistingUint8Array(bufferView, 1051436, "AQAAABIAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3Igd2hlbiB0aGUgdW5kZXJseWluZyBzdHJlYW0gZGlkIG5vdAAA2wQQAGYAAACPAgAADgAAAEVycm9yAAAADgAAAAwAAAAEAAAAEwAAABQAAAAVAAAAMDEyMzQ1Njc4OWFiY2RlZgAAAAAEAAAABAAAABYAAAAtK05hTmluZjAwLmFzc2VydGlvbiBmYWlsZWQ6IGJ1Zi5sZW4oKSA+PSBtYXhsZW7+BxAAdQAAAIsCAAANAAAAIHsgLCA6ICB7CiwKfQAAAEIFEABzAAAALgAAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBvdGhlciA+IDBhc3NlcnRpb24gZmFpbGVkOiBub2JvcnJvdyB9ALQGEABwAAAAhAEAAAEAAABhc3NlcnRpb24gZmFpbGVkOiBkaWdpdHMgPCA0MAAAAAAAAAAMAAAABAAAABcAAAAYAAAAGQAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA9PTAwMDEwMjAzMDQwNTA2MDcwODA5MTAxMTEyMTMxNDE1MTYxNzE4MTkyMDIxMjIyMzI0MjUyNjI3MjgyOTMwMzEzMjMzMzQzNTM2MzczODM5NDA0MTQyNDM0NDQ1NDY0NzQ4NDk1MDUxNTI1MzU0NTU1NjU3NTg1OTYwNjE2MjYzNjQ2NTY2Njc2ODY5NzA3MTcyNzM3NDc1NzY3Nzc4Nzk4MDgxODI4Mzg0ODU4Njg3ODg4OTkwOTE5MjkzOTQ5NTk2OTc5ODk5LmF0dGVtcHQgdG8gZGl2aWRlIGJ5IHplcm9hc3NlcnRpb24gZmFpbGVkOiAhYnVmLmlzX2VtcHR5KCkAAAD+BxAAdQAAALcAAAAFAAAAYXNzZXJ0aW9uIGZhaWxlZDogYnVmWzBdID4gYicwJwD+BxAAdQAAALgAAAAFAAAAdXNlci1wcm92aWRlZCBjb21wYXJpc29uIGZ1bmN0aW9uIGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgYSB0b3RhbCBvcmRlcl0EEAB9AAAAVgMAAAUAAADfRRo9A88a5sH7zP4AAAAAysaaxxf+cKvc+9T+AAAAAE/cvL78sXf/9vvc/gAAAAAM1mtB75FWvhH85P4AAAAAPPx/kK0f0I0s/Oz+AAAAAIOaVTEoXFHTRvz0/gAAAAC1yaatj6xxnWH8/P4AAAAAy4vuI3cinOp7/AT/AAAAAG1TeECRScyulvwM/wAAAABXzrZdeRI8grH8FP8AAAAAN1b7TTaUEMLL/Bz/AAAAAE+YSDhv6paQ5vwk/wAAAADHOoIly4V01wD9LP8AAAAA9Je/l83PhqAb/TT/AAAAAOWsKheYCjTvNf08/wAAAACOsjUq+2c4slD9RP8AAAAAOz/G0t/UyIRr/Uz/AAAAALrN0xonRN3Fhf1U/wAAAACWySW7zp9rk6D9XP8AAAAAhKVifSRsrNu6/WT/AAAAAPbaXw1YZquj1f1s/wAAAAAm8cPek/ji8+/9dP8AAAAAuID/qqittbUK/nz/AAAAAItKfGwFX2KHJf6E/wAAAABTMME0YP+8yT/+jP8AAAAAVSa6kYyFTpZa/pT/AAAAAL1+KXAkd/nfdP6c/wAAAACPuOW4n73fpo/+pP8AAAAAlH10iM9fqfip/qz/AAAAAM+bqI+TcES5xP60/wAAAABrFQ+/+PAIit/+vP8AAAAAtjExZVUlsM35/sT/AAAAAKx/e9DG4j+ZFP/M/wAAAAAGOysqxBBc5C7/1P8AAAAA05JzaZkkJKpJ/9z/AAAAAA7KAIPytYf9Y//k/wAAAADrGhGSZAjlvH7/7P8AAAAAzIhQbwnMvIyZ//T/AAAAACxlGeJYF7fRs//8/w==");
  base64DecodeToExistingUint8Array(bufferView, 1052950, "QJzO/wQ=");
  base64DecodeToExistingUint8Array(bufferView, 1052964, "EKXU6Oj/DAAAAAAAAABirMXreK0DABQAAAAAAIQJlPh4OT+BHgAcAAAAAACzFQfJe86XwDgAJAAAAAAAcFzqe84yfo9TACwAAAAAAGiA6aukONLVbQA0AAAAAABFIpoXJidPn4gAPAAAAAAAJ/vE1DGiY+2iAEQAAAAAAKityIw4Zd6wvQBMAAAAAADbZasajgjHg9gAVAAAAAAAmh1xQvkdXcTyAFwAAAAAAFjnG6YsaU2SDQFkAAAAAADqjXAaZO4B2icBbAAAAAAASnfvmpmjbaJCAXQAAAAAAIVrfbR7eAnyXAF8AAAAAAB3GN15oeRUtHcBhAAAAAAAwsWbW5KGW4aSAYwAAAAAAD1dlsjFUzXIrAGUAAAAAACzoJf6XLQqlccBnAAAAAAA41+gmb2fRt7hAaQAAAAAACWMOds0wpul/AGsAAAAAABcn5ijcprG9hYCtAAAAAAAzr7pVFO/3LcxArwAAAAAAOJBIvIX8/yITALEAAAAAACleFzTm84gzGYCzAAAAAAA31Mhe/NaFpiBAtQAAAAAADowH5fctaDimwLcAAAAAACWs+NcU9HZqLYC5AAAAAAAPESnpNl8m/vQAuwAAAAAABBEpKdMTHa76wL0AAAAAAAanEC2746riwYD/AAAAAAALIRXphDvH9AgAwQBAAAAACkxkenlpBCbOwMMAQAAAACdDJyh+5sQ51UDFAEAAAAAKfQ7YtkgKKxwAxwBAAAAAIXPp3peS0SAiwMkAQAAAAAt3awDQOQhv6UDLAEAAAAAj/9EXi+cZ47AAzQBAAAAAEG4jJydFzPU2gM8AQAAAACpG+O0ktsZnvUDRAEAAAAA2Xffum6/lusPBEwBAAAAAGFzc2VydGlvbiBmYWlsZWQ6IGQubWFudCA+IDDcAxAAgAAAAN4BAAAFAAAA3AMQAIAAAAB/AAAAFQAAANwDEACAAAAANQIAABEAAADcAxAAgAAAAG4CAAAJAAAA3AMQAIAAAACrAAAABQAAANwDEACAAAAADAEAABEAAADcAxAAgAAAAEIBAAAJAAAAMgYQAIEAAAB0AQAAJAAAADIGEACBAAAAeQEAAC8AAAAyBhAAgQAAAIYBAAASAAAAMgYQAIEAAABoAQAADQAAADIGEACBAAAATgEAACIAAAAyBhAAgQAAAMQAAAAJAAAAMgYQAIEAAAD9AAAADQAAADIGEACBAAAABAEAABIAAAABAAAACgAAAGQAAADoAwAAECcAAKCGAQBAQg8AgJaYAADh9QUAypo7wW/yhiMAAACB76yFW0FtLe4EAAABH2q/ZO04bu2Xp9r0+T/pA08YAAE+lS4Jmd8D/TgVDy/kdCPs9c/TCNwExNqwzbwZfzOmAyYf6U4CAAABfC6YW4fTvnKf2diHLxUSxlDea3BuSs8P2JXVbnGyJrBmxq0kNhUdWtNCPA5U/2PAc1XMF+/5ZfIovFX3x9yA3O1u9M7v3F/3UwUA3AMQAIAAAADxAgAAJgAAANwDEACAAAAA5QIAACYAAADcAxAAgAAAAM4CAAAmAAAAICAgIDB4MDEyMzQ1Njc4OUFCQ0RFRmZhbHNldHJ1ZQBsBxAAIgAAAOUBAAAiAAAAbAcQACIAAAAQAgAAIQAAAGwHEAAiAAAAWgIAACwAAABsBxAAIgAAAFsCAAArAAAAIMK3IGNhbmQuIMK3IGxlYWRlciDCtyBkb3duACUHEAAgAAAA5QAAACcAAAAlBxAAIAAAAO4AAAAcAAAAJQcQACAAAAAmAQAAFwAAACUHEAAgAAAAPgEAAC0AAAAlBxAAIAAAAEcBAAAfAAAAJQcQACAAAAAyAQAAHgAAACUHEAAgAAAAtAEAABUAAAAlBxAAIAAAAKsCAAAfAAAAJQcQACAAAAAHAgAAIAAAACUHEAAgAAAARAIAACIAAAAlBxAAIAAAAEoCAAAmAAAAJQcQACAAAABLAgAAGAAAACUHEAAgAAAATAIAACQAAAAlBxAAIAAAAE4CAAAdAAAAJQcQACAAAAB3AgAAIgAAACUHEAAgAAAAGwQAACIAAAAlBxAAIAAAAGkDAAAeAAAAJQcQACAAAACbAwAAGAAAACUHEAAgAAAAuwMAACAAAAAlBxAAIAAAAMMCAAAiAAAAJQcQACAAAADEAgAAMgAAACUHEAAgAAAAMAIAACYAAAAlBxAAIAAAADgCAAAaAAAAJQcQACAAAABiAgAAIgAAACUHEAAgAAAAMAQAACQAAAAlBxAAIAAAAN0CAAAdAAAAJQcQACAAAADdAgAAOAAAACUHEAAgAAAA3QIAAE8AAAAlBxAAIAAAAOACAAAmAAAAJQcQACAAAADiAgAAGQAAACUHEAAgAAAA6wIAABIAAAAlBxAAIAAAAOwCAAAYAAAAJQcQACAAAADoAgAAGwAAACUHEAAgAAAAlAIAAB4AAAAlBxAAIAAAAH4DAAAiAAAAJQcQACAAAACBAwAAFgAAACUHEAAgAAAAhAMAADEAAAAlBxAAIAAAAIIDAAAqAAAAJQcQACAAAADLAwAAIgAAACUHEAAgAAAA2wMAAC8AAAAlBxAAIAAAAM8DAAAoAAAAJQcQACAAAADZAwAAHQAAACUHEAAgAAAA3QMAABYAAAAlBxAAIAAAAJUEAAAmAAAAJQcQACAAAACQBAAAJgAAAGFzc2VydGlvbiBmYWlsZWQ6IGNmZy5taW5fbGF0ZW5jeSA+PSAxICYmIGNmZy5tYXhfbGF0ZW5jeSA+PSBjZmcubWluX2xhdGVuY3klBxAAIAAAAHoBAAAJAAAAJQcQACAAAACTAQAAGAAAACUHEAAgAAAA5gMAACIAAAAlBxAAIAAAALwBAAAVAAAAJQcQACAAAAD0AwAAIgAAACUHEAAgAAAADgMAABkAAAAlBxAAIAAAAA8DAAAZAAAAJQcQACAAAAAsAwAAGwAAACUHEAAgAAAAOAMAACAAAAAlBxAAIAAAAC8DAAAkAAAAJQcQACAAAAALBAAAIgAAACUHEAAgAAAAwQEAAB4AAAAlBxAAIAAAANcBAAAcAAAAJQcQACAAAAAfAgAAGwAAACUHEAAgAAAAQgMAACYAAABGBxAAJQAAAKsAAAAoAAAARgcQACUAAACEAAAAJwAAAG4DEABtAAAA/AMAADMAAABFbnRyeXRlcm12YWx1ZQAAAAAAAAgAAAAEAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAQAAAABAAAAB8AAAAgAAAAIQAAACIAAABc9ulf3AL2ufHBcGzyYcEklmy3mcOaZS+1I0zTfRKycQ4AAAAMAAAABAAAACMAAAAkAAAAJQAAAGFzc2VydGlvbiBmYWlsZWQ6IHBzaXplID49IHNpemUgKyBtaW5fb3ZlcmhlYWQAAHQIEABaAAAAsQQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAAB0CBAAWgAAALcEAAANAAAAcndsb2NrIG92ZXJmbG93ZWQgcmVhZCBsb2Nrc7YFEAB7AAAAFQAAACwAAAAAAAAACAAAAAQAAAAmAAAADgAAAAwAAAAEAAAAJwAAAHJ3bG9jayBoYXMgbm90IGJlZW4gbG9ja2VkIGZvciByZWFkaW5nAAC2BRAAewAAAD4AAAAJAAAApgoQAK4KEAC3ChAAvQoQAAgAAAAJAAAABgAAAAcAAAADAAAABAAAAAQAAAAGAAAAg/miAERObgD8KRUA0VcnAN009QBi28AAPJmVAEGQQwBjUf4Au96rALdhxQA6biQA0k1CAEkG4AAJ6i4AHJLRAOsd/gApsRwA6D6nAPU1ggBEuy4AnOmEALQmcABBfl8A1pE5AFODOQCc9DkAi1+EACj5vQD4HzsA3v+XAA+YBQARL+8AClqLAG0fbQDPfjYACcsnAEZPtwCeZj8ALepfALondQDl68cAPXvxAPc5BwCSUooA+2vqAB+xXwAIXY0AMANWAHv8RgDwq2sAILzPADb0mgDjqR0AXmGRAAgb5gCFmWUAoBRfAI1AaACA2P8AJ3NNAAYGMQDKVhUAyahzAHviYABrjMAAAAAAAAAAAED7Ifk/AAAAAC1EdD4AAACAmEb4PAAAAGBRzHg7AAAAgIMb8DkAAABAICV6OAAAAIAiguM2AAAAAB3zaTU=");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_scratch_load_i32(index) {
    return i32ScratchView[index];
  }
      
  function wasm2js_scratch_store_i32(index, value) {
    i32ScratchView[index] = value;
  }
      
  function wasm2js_scratch_load_f64() {
    return f64ScratchView[0];
  }
      
  function wasm2js_scratch_store_f64(value) {
    f64ScratchView[0] = value;
  }
      function wasm2js_trap() { throw new Error('abort'); }

  function wasm2js_scratch_store_f32(value) {
    f32ScratchView[2] = value;
  }
      
  function wasm2js_scratch_load_f32() {
    return f32ScratchView[2];
  }
      
function asmFunc(imports) {
 var buffer = new ArrayBuffer(1114112);
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var __stack_pointer = 1048576;
 var i64toi32_i32$HIGH_BITS = 0;
 function _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
  $7 = __stack_pointer - 16 | 0;
  __stack_pointer = $7;
  if (($2 | 0) >= 0) {
   $15 = 1;
   block2 : {
    if ($2) {
     $15 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
     if (!$15) {
      break block2
     }
    }
    HEAP32[$7 + 12 >> 2] = 0;
    HEAP32[$7 + 8 >> 2] = $15;
    HEAP32[$7 + 4 >> 2] = $2;
    $16 = Math_imul($3, 16843009);
    $12 = $3 & 255;
    while (1) {
     $8 = $6;
     block9 : {
      block26 : {
       while (1) {
        $9 = $1 + $6 | 0;
        block5 : {
         block6 : {
          block7 : {
           block4 : {
            $13 = $2 - $6 | 0;
            if ($13 >>> 0 >= 8) {
             $3 = $9 + 3 & -4;
             if (($3 | 0) == ($9 | 0)) {
              break block4
             }
             $3 = $3 - $9 | 0;
             $5 = 0;
             while (1) {
              if (HEAPU8[$5 + $9 | 0] == ($12 | 0)) {
               break block5
              }
              $5 = $5 + 1 | 0;
              if (($5 | 0) != ($3 | 0)) {
               continue
              }
              break;
             };
             $5 = $13 - 8 | 0;
             if ($5 >>> 0 < $3 >>> 0) {
              break block6
             }
             break block7;
            }
            if (($2 | 0) == ($6 | 0)) {
             $6 = $8;
             break block9;
            }
            if (($12 | 0) == HEAPU8[$9 | 0]) {
             $5 = 0;
             break block5;
            }
            if (($13 | 0) == 1) {
             $6 = $8;
             break block9;
            }
            if (($12 | 0) == HEAPU8[$9 + 1 | 0]) {
             $5 = 1;
             break block5;
            }
            if (($13 | 0) == 2) {
             $6 = $8;
             break block9;
            }
            if (($12 | 0) == HEAPU8[$9 + 2 | 0]) {
             $5 = 2;
             break block5;
            }
            if (($13 | 0) == 3) {
             $6 = $8;
             break block9;
            }
            if (($12 | 0) == HEAPU8[$9 + 3 | 0]) {
             $5 = 3;
             break block5;
            }
            if (($13 | 0) == 4) {
             $6 = $8;
             break block9;
            }
            if (($12 | 0) == HEAPU8[$9 + 4 | 0]) {
             $5 = 4;
             break block5;
            }
            if (($13 | 0) == 5) {
             $6 = $8;
             break block9;
            }
            if (($12 | 0) == HEAPU8[$9 + 5 | 0]) {
             $5 = 5;
             break block5;
            }
            if (($13 | 0) == 6) {
             $6 = $8;
             break block9;
            }
            if (($12 | 0) != HEAPU8[$9 + 6 | 0]) {
             $6 = $8;
             break block9;
            }
            $5 = 6;
            break block5;
           }
           $5 = $13 - 8 | 0;
           $3 = 0;
          }
          while (1) {
           $14 = $3 + $9 | 0;
           $10 = HEAP32[$14 >> 2] ^ $16;
           $17 = 16843008 - $10 | $10;
           $10 = HEAP32[$14 + 4 >> 2] ^ $16;
           if (($17 & (16843008 - $10 | $10) & -2139062144) != -2139062144) {
            break block6
           }
           $3 = $3 + 8 | 0;
           if ($5 >>> 0 >= $3 >>> 0) {
            continue
           }
           break;
          };
         }
         if (($3 | 0) == ($13 | 0)) {
          $6 = $8;
          break block9;
         }
         $14 = $3 + $9 | 0;
         $10 = ($2 - $3 | 0) - $6 | 0;
         $5 = 0;
         block24 : {
          while (1) {
           if (HEAPU8[$5 + $14 | 0] == ($12 | 0)) {
            break block24
           }
           $5 = $5 + 1 | 0;
           if (($10 | 0) != ($5 | 0)) {
            continue
           }
           break;
          };
          $6 = $8;
          break block9;
         }
         $5 = $3 + $5 | 0;
        }
        $14 = $6 + $5 | 0;
        $6 = $14 + 1 | 0;
        if (HEAPU8[$1 + $14 | 0] == ($12 | 0) & $2 >>> 0 > $14 >>> 0) {
         break block26
        }
        if ($2 >>> 0 >= $6 >>> 0) {
         continue
        }
        break;
       };
       $6 = $8;
       break block9;
      }
      $3 = $14 - $8 | 0;
      $10 = HEAP32[$7 + 4 >> 2];
      block29 : {
       block28 : {
        if ($3 >>> 0 > $10 - $11 >>> 0) {
         _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($7 + 4 | 0, $11, $3);
         $10 = HEAP32[$7 + 4 >> 2];
         $15 = HEAP32[$7 + 8 >> 2];
         $11 = HEAP32[$7 + 12 >> 2];
         break block28;
        }
        if (($8 | 0) == ($14 | 0)) {
         break block29
        }
       }
       _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($11 + $15 | 0, $1 + $8 | 0, $3);
      }
      $3 = $3 + $11 | 0;
      HEAP32[$7 + 12 >> 2] = $3;
      if ($10 - $3 >>> 0 <= 1) {
       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($7 + 4 | 0, $3, 2);
       $15 = HEAP32[$7 + 8 >> 2];
       $3 = HEAP32[$7 + 12 >> 2];
      }
      $8 = $3 + $15 | 0;
      HEAP8[$8 | 0] = $4;
      HEAP8[$8 + 1 | 0] = $4 >>> 8;
      $11 = $3 + 2 | 0;
      HEAP32[$7 + 12 >> 2] = $11;
      if ($2 >>> 0 >= $6 >>> 0) {
       continue
      }
     }
     break;
    };
    $3 = $2 - $6 | 0;
    block33 : {
     block32 : {
      if ($3 >>> 0 > HEAP32[$7 + 4 >> 2] - $11 >>> 0) {
       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($7 + 4 | 0, $11, $3);
       $11 = HEAP32[$7 + 12 >> 2];
       break block32;
      }
      if (($2 | 0) == ($6 | 0)) {
       break block33
      }
     }
     _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$7 + 8 >> 2] + $11 | 0, $1 + $6 | 0, $3);
    }
    $1 = HEAP32[$7 + 8 >> 2];
    HEAP32[$0 >> 2] = HEAP32[$7 + 4 >> 2];
    HEAP32[$0 + 4 >> 2] = $1;
    HEAP32[$0 + 8 >> 2] = $3 + $11;
    __stack_pointer = $7 + 16 | 0;
    return;
   }
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
   wasm2js_trap();
  }
  _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow();
  wasm2js_trap();
 }
 
 function _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  folding_inner0 : {
   block28 : {
    block2 : {
     block3 : {
      if ($0 >>> 0 >= 245) {
       if ($0 >>> 0 > 4294901708) {
        return 0
       }
       $2 = $0 + 11 | 0;
       $5 = $2 & -8;
       $8 = HEAP32[264134];
       if (!$8) {
        break block2
       }
       $7 = 31;
       if ($0 >>> 0 >= 16777205) {
        break block3
       }
       $0 = Math_clz32($2 >>> 8 | 0);
       $7 = (($5 >>> 38 - $0 & 1) - ($0 << 1) | 0) + 62 | 0;
       break block3;
      }
      block12 : {
       block16 : {
        block7 : {
         block6 : {
          block5 : {
           $2 = HEAP32[264133];
           $5 = $0 >>> 0 < 11 ? 16 : $0 + 11 & 504;
           $0 = $5 >>> 3 | 0;
           $1 = $2 >>> $0 | 0;
           if ($1 & 3) {
            $6 = $0 + (($1 ^ -1) & 1) | 0;
            $0 = $6 << 3;
            $3 = $0 + 1056268 | 0;
            $1 = HEAP32[$0 + 1056276 >> 2];
            $4 = HEAP32[$1 + 8 >> 2];
            if (($3 | 0) == ($4 | 0)) {
             break block5
            }
            HEAP32[$4 + 12 >> 2] = $3;
            HEAP32[$3 + 8 >> 2] = $4;
            break block6;
           }
           if (HEAPU32[264135] >= $5 >>> 0) {
            break block2
           }
           if ($1) {
            break block7
           }
           $0 = HEAP32[264134];
           if (!$0) {
            break block2
           }
           if ($0) {
            $0 = 31 - Math_clz32($0 - 1 ^ $0) | 0
           } else {
            $0 = 32
           }
           $1 = HEAP32[($0 << 2) + 1056124 >> 2];
           $4 = (HEAP32[$1 + 4 >> 2] & -8) - $5 | 0;
           $2 = $1;
           while (1) {
            block8 : {
             $0 = HEAP32[$1 + 16 >> 2];
             if ($0) {
              break block8
             }
             $0 = HEAP32[$1 + 20 >> 2];
             if ($0) {
              break block8
             }
             $7 = HEAP32[$2 + 24 >> 2];
             block11 : {
              block10 : {
               $0 = HEAP32[$2 + 12 >> 2];
               if (($0 | 0) == ($2 | 0)) {
                $0 = HEAP32[$2 + 20 >> 2];
                $1 = HEAP32[($0 ? 20 : 16) + $2 >> 2];
                if ($1) {
                 break block10
                }
                $0 = 0;
                break block11;
               }
               $1 = HEAP32[$2 + 8 >> 2];
               HEAP32[$1 + 12 >> 2] = $0;
               HEAP32[$0 + 8 >> 2] = $1;
               break block11;
              }
              $3 = $0 ? $2 + 20 | 0 : $2 + 16 | 0;
              while (1) {
               $6 = $3;
               $0 = $1;
               $1 = HEAP32[$0 + 20 >> 2];
               $3 = $1 ? $0 + 20 | 0 : $0 + 16 | 0;
               $1 = HEAP32[($1 ? 20 : 16) + $0 >> 2];
               if ($1) {
                continue
               }
               break;
              };
              HEAP32[$6 >> 2] = 0;
             }
             if (!$7) {
              break block12
             }
             $1 = (HEAP32[$2 + 28 >> 2] << 2) + 1056124 | 0;
             block15 : {
              if (($2 | 0) != HEAP32[$1 >> 2]) {
               if (($2 | 0) != HEAP32[$7 + 16 >> 2]) {
                HEAP32[$7 + 20 >> 2] = $0;
                if ($0) {
                 break block15
                }
                break block12;
               }
               HEAP32[$7 + 16 >> 2] = $0;
               if ($0) {
                break block15
               }
               break block12;
              }
              HEAP32[$1 >> 2] = $0;
              if (!$0) {
               break block16
              }
             }
             HEAP32[$0 + 24 >> 2] = $7;
             $1 = HEAP32[$2 + 16 >> 2];
             if ($1) {
              HEAP32[$0 + 16 >> 2] = $1;
              HEAP32[$1 + 24 >> 2] = $0;
             }
             $1 = HEAP32[$2 + 20 >> 2];
             if (!$1) {
              break block12
             }
             HEAP32[$0 + 20 >> 2] = $1;
             HEAP32[$1 + 24 >> 2] = $0;
             break block12;
            }
            $3 = (HEAP32[$0 + 4 >> 2] & -8) - $5 | 0;
            $1 = $3 >>> 0 < $4 >>> 0;
            $4 = $1 ? $3 : $4;
            $2 = $1 ? $0 : $2;
            $1 = $0;
            continue;
           };
          }
          (wasm2js_i32$0 = 1056532, wasm2js_i32$1 = __wasm_rotl_i32($6) & $2), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
         }
         HEAP32[$1 + 4 >> 2] = $0 | 3;
         $0 = $0 + $1 | 0;
         HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] | 1;
         return $1 + 8 | 0;
        }
        $3 = 2 << $0;
        $0 = (0 - $3 | $3) & $1 << $0;
        $6 = $0 ? 31 - Math_clz32($0 ^ $0 - 1) | 0 : 32;
        $1 = $6 << 3;
        $3 = $1 + 1056268 | 0;
        $0 = HEAP32[$1 + 1056276 >> 2];
        $4 = HEAP32[$0 + 8 >> 2];
        block19 : {
         if (($3 | 0) != ($4 | 0)) {
          HEAP32[$4 + 12 >> 2] = $3;
          HEAP32[$3 + 8 >> 2] = $4;
          break block19;
         }
         (wasm2js_i32$0 = 1056532, wasm2js_i32$1 = __wasm_rotl_i32($6) & $2), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
        }
        HEAP32[$0 + 4 >> 2] = $5 | 3;
        $7 = $0 + $5 | 0;
        $6 = $1 - $5 | 0;
        HEAP32[$7 + 4 >> 2] = $6 | 1;
        HEAP32[$0 + $1 >> 2] = $6;
        $2 = HEAP32[264135];
        if ($2) {
         $1 = HEAP32[264137];
         $3 = HEAP32[264133];
         $4 = 1 << ($2 >>> 3);
         block22 : {
          if (!($3 & $4)) {
           HEAP32[264133] = $4 | $3;
           $4 = ($2 & -8) + 1056268 | 0;
           $3 = $4;
           break block22;
          }
          $2 = $2 & -8;
          $3 = $2 + 1056268 | 0;
          $4 = HEAP32[$2 + 1056276 >> 2];
         }
         HEAP32[$3 + 8 >> 2] = $1;
         HEAP32[$4 + 12 >> 2] = $1;
         HEAP32[$1 + 12 >> 2] = $3;
         HEAP32[$1 + 8 >> 2] = $4;
        }
        HEAP32[264137] = $7;
        HEAP32[264135] = $6;
        break folding_inner0;
       }
       (wasm2js_i32$0 = 1056536, wasm2js_i32$1 = HEAP32[264134] & __wasm_rotl_i32(HEAP32[$2 + 28 >> 2])), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      }
      block27 : {
       block24 : {
        if ($4 >>> 0 >= 16) {
         HEAP32[$2 + 4 >> 2] = $5 | 3;
         $6 = $2 + $5 | 0;
         HEAP32[$6 + 4 >> 2] = $4 | 1;
         HEAP32[$4 + $6 >> 2] = $4;
         $1 = HEAP32[264135];
         if (!$1) {
          break block24
         }
         $0 = HEAP32[264137];
         $3 = HEAP32[264133];
         $7 = 1 << ($1 >>> 3);
         block26 : {
          if (!($3 & $7)) {
           HEAP32[264133] = $3 | $7;
           $3 = ($1 & -8) + 1056268 | 0;
           $1 = $3;
           break block26;
          }
          $3 = $1 & -8;
          $1 = $3 + 1056268 | 0;
          $3 = HEAP32[$3 + 1056276 >> 2];
         }
         HEAP32[$1 + 8 >> 2] = $0;
         HEAP32[$3 + 12 >> 2] = $0;
         HEAP32[$0 + 12 >> 2] = $1;
         HEAP32[$0 + 8 >> 2] = $3;
         break block24;
        }
        $0 = $4 + $5 | 0;
        HEAP32[$2 + 4 >> 2] = $0 | 3;
        $0 = $0 + $2 | 0;
        HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] | 1;
        break block27;
       }
       HEAP32[264137] = $6;
       HEAP32[264135] = $4;
      }
      $0 = $2 + 8 | 0;
      if (!$0) {
       break block2
      }
      break block28;
     }
     $4 = 0 - $5 | 0;
     $2 = HEAP32[($7 << 2) + 1056124 >> 2];
     block34 : {
      block32 : {
       block30 : {
        if (!$2) {
         $0 = 0;
         break block30;
        }
        $3 = $5 << (($7 | 0) != 31 ? 25 - ($7 >>> 1 | 0) | 0 : 0);
        $0 = 0;
        while (1) {
         block31 : {
          $6 = HEAP32[$2 + 4 >> 2] & -8;
          if ($6 >>> 0 < $5 >>> 0) {
           break block31
          }
          $6 = $6 - $5 | 0;
          if ($6 >>> 0 >= $4 >>> 0) {
           break block31
          }
          $1 = $2;
          $4 = $6;
          if ($4) {
           break block31
          }
          $4 = 0;
          $0 = $1;
          break block32;
         }
         $6 = HEAP32[$2 + 20 >> 2];
         $2 = HEAP32[(($3 >>> 29 & 4) + $2 | 0) + 16 >> 2];
         $0 = $6 ? (($6 | 0) != ($2 | 0) ? $6 : $0) : $0;
         $3 = $3 << 1;
         if ($2) {
          continue
         }
         break;
        };
       }
       if (!($0 | $1)) {
        $1 = 0;
        $0 = 2 << $7;
        $0 = (0 - $0 | $0) & $8;
        if (!$0) {
         break block2
        }
        if ($0) {
         $0 = 31 - Math_clz32($0 - 1 ^ $0) | 0
        } else {
         $0 = 32
        }
        $0 = HEAP32[($0 << 2) + 1056124 >> 2];
       }
       if (!$0) {
        break block34
       }
      }
      while (1) {
       $3 = HEAP32[$0 + 4 >> 2] & -8;
       $6 = $3 - $5 | 0;
       $2 = $6 >>> 0 < $4 >>> 0;
       $3 = $3 >>> 0 < $5 >>> 0;
       $4 = $3 ? $4 : $2 ? $6 : $4;
       $1 = $3 ? $1 : $2 ? $0 : $1;
       $2 = HEAP32[$0 + 16 >> 2];
       if ($2) {
        $0 = $2
       } else {
        $0 = HEAP32[$0 + 20 >> 2]
       }
       if ($0) {
        continue
       }
       break;
      };
     }
     if (!$1) {
      break block2
     }
     $0 = HEAP32[264135];
     if ($5 >>> 0 <= $0 >>> 0 & $0 - $5 >>> 0 <= $4 >>> 0) {
      break block2
     }
     $7 = HEAP32[$1 + 24 >> 2];
     block39 : {
      block38 : {
       $0 = HEAP32[$1 + 12 >> 2];
       if (($0 | 0) == ($1 | 0)) {
        $0 = HEAP32[$1 + 20 >> 2];
        $2 = HEAP32[($0 ? 20 : 16) + $1 >> 2];
        if ($2) {
         break block38
        }
        $0 = 0;
        break block39;
       }
       $2 = HEAP32[$1 + 8 >> 2];
       HEAP32[$2 + 12 >> 2] = $0;
       HEAP32[$0 + 8 >> 2] = $2;
       break block39;
      }
      $3 = $0 ? $1 + 20 | 0 : $1 + 16 | 0;
      while (1) {
       $6 = $3;
       $0 = $2;
       $2 = HEAP32[$0 + 20 >> 2];
       $3 = $2 ? $0 + 20 | 0 : $0 + 16 | 0;
       $2 = HEAP32[($2 ? 20 : 16) + $0 >> 2];
       if ($2) {
        continue
       }
       break;
      };
      HEAP32[$6 >> 2] = 0;
     }
     block40 : {
      if (!$7) {
       break block40
      }
      block44 : {
       $2 = (HEAP32[$1 + 28 >> 2] << 2) + 1056124 | 0;
       block43 : {
        if (($1 | 0) != HEAP32[$2 >> 2]) {
         if (($1 | 0) != HEAP32[$7 + 16 >> 2]) {
          HEAP32[$7 + 20 >> 2] = $0;
          if ($0) {
           break block43
          }
          break block40;
         }
         HEAP32[$7 + 16 >> 2] = $0;
         if ($0) {
          break block43
         }
         break block40;
        }
        HEAP32[$2 >> 2] = $0;
        if (!$0) {
         break block44
        }
       }
       HEAP32[$0 + 24 >> 2] = $7;
       $2 = HEAP32[$1 + 16 >> 2];
       if ($2) {
        HEAP32[$0 + 16 >> 2] = $2;
        HEAP32[$2 + 24 >> 2] = $0;
       }
       $2 = HEAP32[$1 + 20 >> 2];
       if (!$2) {
        break block40
       }
       HEAP32[$0 + 20 >> 2] = $2;
       HEAP32[$2 + 24 >> 2] = $0;
       break block40;
      }
      (wasm2js_i32$0 = 1056536, wasm2js_i32$1 = HEAP32[264134] & __wasm_rotl_i32(HEAP32[$1 + 28 >> 2])), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     }
     block48 : {
      if ($4 >>> 0 >= 16) {
       HEAP32[$1 + 4 >> 2] = $5 | 3;
       $0 = $1 + $5 | 0;
       HEAP32[$0 + 4 >> 2] = $4 | 1;
       HEAP32[$0 + $4 >> 2] = $4;
       if ($4 >>> 0 >= 256) {
        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE18insert_large_chunkCs9syRKuynNcS_3std($0, $4);
        break block48;
       }
       $2 = HEAP32[264133];
       $3 = 1 << ($4 >>> 3);
       block50 : {
        if (!($2 & $3)) {
         HEAP32[264133] = $2 | $3;
         $4 = ($4 & 248) + 1056268 | 0;
         $2 = $4;
         break block50;
        }
        $3 = $4 & 248;
        $2 = $3 + 1056268 | 0;
        $4 = HEAP32[$3 + 1056276 >> 2];
       }
       HEAP32[$2 + 8 >> 2] = $0;
       HEAP32[$4 + 12 >> 2] = $0;
       HEAP32[$0 + 12 >> 2] = $2;
       HEAP32[$0 + 8 >> 2] = $4;
       break block48;
      }
      $0 = $4 + $5 | 0;
      HEAP32[$1 + 4 >> 2] = $0 | 3;
      $0 = $0 + $1 | 0;
      HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] | 1;
     }
     $0 = $1 + 8 | 0;
     if ($0) {
      break block28
     }
    }
    block54 : {
     block53 : {
      $1 = HEAP32[264135];
      if ($5 >>> 0 > $1 >>> 0) {
       $0 = HEAP32[264136];
       if ($5 >>> 0 >= $0 >>> 0) {
        $0 = $5 + 65583 | 0;
        $1 = $0 & -65536;
        if (!$1) {
         break block53
        }
        $3 = HEAPU8[1056104];
        HEAP8[1056104] = 1;
        $2 = 1056592;
        if ($1 >>> 0 > 57520) {
         break block53
        }
        if ($3) {
         break block53
        }
        $1 = 57520;
        break block54;
       }
       $1 = $0 - $5 | 0;
       HEAP32[264136] = $1;
       $0 = HEAP32[264138];
       $2 = $0 + $5 | 0;
       HEAP32[264138] = $2;
       HEAP32[$2 + 4 >> 2] = $1 | 1;
       HEAP32[$0 + 4 >> 2] = $5 | 3;
       $0 = $0 + 8 | 0;
       break block28;
      }
      $0 = HEAP32[264137];
      $2 = $1 - $5 | 0;
      block56 : {
       if ($2 >>> 0 <= 15) {
        HEAP32[264137] = 0;
        HEAP32[264135] = 0;
        HEAP32[$0 + 4 >> 2] = $1 | 3;
        $1 = $0 + $1 | 0;
        HEAP32[$1 + 4 >> 2] = HEAP32[$1 + 4 >> 2] | 1;
        break block56;
       }
       HEAP32[264135] = $2;
       $3 = $0 + $5 | 0;
       HEAP32[264137] = $3;
       HEAP32[$3 + 4 >> 2] = $2 | 1;
       HEAP32[$0 + $1 >> 2] = $2;
       HEAP32[$0 + 4 >> 2] = $5 | 3;
      }
      break folding_inner0;
     }
     $2 = __wasm_memory_grow($0 >>> 16 | 0);
     if (($2 | 0) == -1) {
      return 0
     }
     $0 = 0;
     $2 = $2 << 16;
     if (!$2) {
      break block28
     }
     $1 = (0 - $1 | 0) == ($2 | 0) ? $1 - 16 | 0 : $1;
    }
    $0 = $1 + HEAP32[264139] | 0;
    HEAP32[264139] = $0;
    $3 = HEAP32[264140];
    HEAP32[264140] = $0 >>> 0 > $3 >>> 0 ? $0 : $3;
    block63 : {
     block77 : {
      block74 : {
       block73 : {
        block64 : {
         block60 : {
          block59 : {
           $3 = HEAP32[264138];
           if ($3) {
            $0 = 1056252;
            while (1) {
             $4 = HEAP32[$0 >> 2];
             $6 = HEAP32[$0 + 4 >> 2];
             if (($4 + $6 | 0) == ($2 | 0)) {
              break block59
             }
             $0 = HEAP32[$0 + 8 >> 2];
             if ($0) {
              continue
             }
             break;
            };
            break block60;
           }
           $0 = HEAP32[264142];
           if (!(($0 | 0) != 0 & $0 >>> 0 <= $2 >>> 0)) {
            HEAP32[264142] = $2
           }
           HEAP32[264143] = 4095;
           HEAP32[264064] = $1;
           HEAP32[264063] = $2;
           HEAP32[264070] = 1056268;
           HEAP32[264072] = 1056276;
           HEAP32[264069] = 1056268;
           HEAP32[264074] = 1056284;
           HEAP32[264071] = 1056276;
           HEAP32[264076] = 1056292;
           HEAP32[264073] = 1056284;
           HEAP32[264078] = 1056300;
           HEAP32[264075] = 1056292;
           HEAP32[264080] = 1056308;
           HEAP32[264077] = 1056300;
           HEAP32[264082] = 1056316;
           HEAP32[264079] = 1056308;
           HEAP32[264084] = 1056324;
           HEAP32[264081] = 1056316;
           HEAP32[264066] = 0;
           HEAP32[264086] = 1056332;
           HEAP32[264083] = 1056324;
           HEAP32[264085] = 1056332;
           HEAP32[264088] = 1056340;
           HEAP32[264087] = 1056340;
           HEAP32[264090] = 1056348;
           HEAP32[264089] = 1056348;
           HEAP32[264092] = 1056356;
           HEAP32[264091] = 1056356;
           HEAP32[264094] = 1056364;
           HEAP32[264093] = 1056364;
           HEAP32[264096] = 1056372;
           HEAP32[264095] = 1056372;
           HEAP32[264098] = 1056380;
           HEAP32[264097] = 1056380;
           HEAP32[264100] = 1056388;
           HEAP32[264099] = 1056388;
           HEAP32[264102] = 1056396;
           HEAP32[264104] = 1056404;
           HEAP32[264101] = 1056396;
           HEAP32[264106] = 1056412;
           HEAP32[264103] = 1056404;
           HEAP32[264108] = 1056420;
           HEAP32[264105] = 1056412;
           HEAP32[264110] = 1056428;
           HEAP32[264107] = 1056420;
           HEAP32[264112] = 1056436;
           HEAP32[264109] = 1056428;
           HEAP32[264114] = 1056444;
           HEAP32[264111] = 1056436;
           HEAP32[264116] = 1056452;
           HEAP32[264113] = 1056444;
           HEAP32[264118] = 1056460;
           HEAP32[264115] = 1056452;
           HEAP32[264120] = 1056468;
           HEAP32[264117] = 1056460;
           HEAP32[264122] = 1056476;
           HEAP32[264119] = 1056468;
           HEAP32[264124] = 1056484;
           HEAP32[264121] = 1056476;
           HEAP32[264126] = 1056492;
           HEAP32[264123] = 1056484;
           HEAP32[264128] = 1056500;
           HEAP32[264125] = 1056492;
           HEAP32[264130] = 1056508;
           HEAP32[264127] = 1056500;
           HEAP32[264132] = 1056516;
           HEAP32[264129] = 1056508;
           $0 = $2 + 15 & -8;
           $3 = $0 - 8 | 0;
           HEAP32[264138] = $3;
           HEAP32[264131] = 1056516;
           $1 = $1 - 40 | 0;
           $0 = ($1 + ($2 - $0 | 0) | 0) + 8 | 0;
           HEAP32[264136] = $0;
           HEAP32[$3 + 4 >> 2] = $0 | 1;
           HEAP32[($1 + $2 | 0) + 4 >> 2] = 40;
           HEAP32[264141] = 2097152;
           break block63;
          }
          if ($2 >>> 0 <= $3 >>> 0) {
           break block60
          }
          if ($4 >>> 0 > $3 >>> 0) {
           break block60
          }
          if (!HEAP32[$0 + 12 >> 2]) {
           break block64
          }
         }
         $0 = HEAP32[264142];
         HEAP32[264142] = $0 >>> 0 < $2 >>> 0 ? $0 : $2;
         $4 = $1 + $2 | 0;
         $0 = 1056252;
         block67 : {
          block66 : {
           while (1) {
            $6 = HEAP32[$0 >> 2];
            if (($4 | 0) != ($6 | 0)) {
             $0 = HEAP32[$0 + 8 >> 2];
             if ($0) {
              continue
             }
             break block66;
            }
            break;
           };
           if (!HEAP32[$0 + 12 >> 2]) {
            break block67
           }
          }
          $0 = 1056252;
          while (1) {
           block69 : {
            $4 = HEAP32[$0 >> 2];
            if ($3 >>> 0 >= $4 >>> 0) {
             $6 = $4 + HEAP32[$0 + 4 >> 2] | 0;
             if ($6 >>> 0 > $3 >>> 0) {
              break block69
             }
            }
            $0 = HEAP32[$0 + 8 >> 2];
            continue;
           }
           break;
          };
          $0 = $2 + 15 & -8;
          $4 = $0 - 8 | 0;
          HEAP32[264138] = $4;
          $7 = $1 - 40 | 0;
          $0 = ($7 + ($2 - $0 | 0) | 0) + 8 | 0;
          HEAP32[264136] = $0;
          HEAP32[$4 + 4 >> 2] = $0 | 1;
          HEAP32[($2 + $7 | 0) + 4 >> 2] = 40;
          HEAP32[264141] = 2097152;
          $0 = ($6 - 32 & -8) - 8 | 0;
          $4 = $0 >>> 0 < $3 + 16 >>> 0 ? $3 : $0;
          HEAP32[$4 + 4 >> 2] = 27;
          $7 = HEAP32[264063];
          $8 = HEAP32[264064];
          $0 = HEAP32[264066];
          $9 = $4 + 16 | 0;
          HEAP32[$9 >> 2] = HEAP32[264065];
          HEAP32[$9 + 4 >> 2] = $0;
          $0 = $4 + 8 | 0;
          HEAP32[$0 >> 2] = $7;
          HEAP32[$0 + 4 >> 2] = $8;
          HEAP32[264064] = $1;
          HEAP32[264063] = $2;
          HEAP32[264065] = $0;
          HEAP32[264066] = 0;
          $0 = $4 + 28 | 0;
          while (1) {
           HEAP32[$0 >> 2] = 7;
           $0 = $0 + 4 | 0;
           if ($6 >>> 0 > $0 >>> 0) {
            continue
           }
           break;
          };
          if (($4 | 0) == ($3 | 0)) {
           break block63
          }
          HEAP32[$4 + 4 >> 2] = HEAP32[$4 + 4 >> 2] & -2;
          $0 = $4 - $3 | 0;
          HEAP32[$3 + 4 >> 2] = $0 | 1;
          HEAP32[$4 >> 2] = $0;
          if ($0 >>> 0 >= 256) {
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE18insert_large_chunkCs9syRKuynNcS_3std($3, $0);
           break block63;
          }
          $1 = HEAP32[264133];
          $2 = 1 << ($0 >>> 3);
          block72 : {
           if (!($1 & $2)) {
            HEAP32[264133] = $1 | $2;
            $0 = ($0 & 248) + 1056268 | 0;
            $1 = $0;
            break block72;
           }
           $0 = $0 & 248;
           $1 = $0 + 1056268 | 0;
           $0 = HEAP32[$0 + 1056276 >> 2];
          }
          HEAP32[$1 + 8 >> 2] = $3;
          HEAP32[$0 + 12 >> 2] = $3;
          HEAP32[$3 + 12 >> 2] = $1;
          HEAP32[$3 + 8 >> 2] = $0;
          break block63;
         }
         HEAP32[$0 >> 2] = $2;
         HEAP32[$0 + 4 >> 2] = HEAP32[$0 + 4 >> 2] + $1;
         $3 = ($2 + 15 & -8) - 8 | 0;
         HEAP32[$3 + 4 >> 2] = $5 | 3;
         $4 = ($6 + 15 & -8) - 8 | 0;
         $0 = $3 + $5 | 0;
         $5 = $4 - $0 | 0;
         if (HEAP32[264138] == ($4 | 0)) {
          break block73
         }
         if (HEAP32[264137] == ($4 | 0)) {
          break block74
         }
         $2 = HEAP32[$4 + 4 >> 2];
         if (($2 & 3) == 1) {
          $1 = $2 & -8;
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($4, $1);
          $5 = $1 + $5 | 0;
          $4 = $1 + $4 | 0;
          $2 = HEAP32[$4 + 4 >> 2];
         }
         HEAP32[$4 + 4 >> 2] = $2 & -2;
         HEAP32[$0 + 4 >> 2] = $5 | 1;
         HEAP32[$0 + $5 >> 2] = $5;
         if ($5 >>> 0 >= 256) {
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE18insert_large_chunkCs9syRKuynNcS_3std($0, $5);
          break block77;
         }
         $1 = HEAP32[264133];
         $2 = 1 << ($5 >>> 3);
         block79 : {
          if (!($1 & $2)) {
           HEAP32[264133] = $1 | $2;
           $5 = ($5 & 248) + 1056268 | 0;
           $4 = $5;
           break block79;
          }
          $1 = $5 & 248;
          $4 = $1 + 1056268 | 0;
          $5 = HEAP32[$1 + 1056276 >> 2];
         }
         HEAP32[$4 + 8 >> 2] = $0;
         HEAP32[$5 + 12 >> 2] = $0;
         HEAP32[$0 + 12 >> 2] = $4;
         HEAP32[$0 + 8 >> 2] = $5;
         break block77;
        }
        HEAP32[$0 + 4 >> 2] = $1 + $6;
        $0 = HEAP32[264138];
        $2 = $0 + 15 & -8;
        $3 = $2 - 8 | 0;
        HEAP32[264138] = $3;
        $1 = HEAP32[264136] + $1 | 0;
        $2 = ($1 + ($0 - $2 | 0) | 0) + 8 | 0;
        HEAP32[264136] = $2;
        HEAP32[$3 + 4 >> 2] = $2 | 1;
        HEAP32[($0 + $1 | 0) + 4 >> 2] = 40;
        HEAP32[264141] = 2097152;
        break block63;
       }
       HEAP32[264138] = $0;
       $1 = HEAP32[264136] + $5 | 0;
       HEAP32[264136] = $1;
       HEAP32[$0 + 4 >> 2] = $1 | 1;
       break block77;
      }
      HEAP32[264137] = $0;
      $1 = HEAP32[264135] + $5 | 0;
      HEAP32[264135] = $1;
      HEAP32[$0 + 4 >> 2] = $1 | 1;
      HEAP32[$0 + $1 >> 2] = $1;
     }
     return $3 + 8 | 0;
    }
    $0 = 0;
    $1 = HEAP32[264136];
    if ($1 >>> 0 <= $5 >>> 0) {
     break block28
    }
    $1 = $1 - $5 | 0;
    HEAP32[264136] = $1;
    $0 = HEAP32[264138];
    $2 = $0 + $5 | 0;
    HEAP32[264138] = $2;
    HEAP32[$2 + 4 >> 2] = $1 | 1;
    HEAP32[$0 + 4 >> 2] = $5 | 3;
    break folding_inner0;
   }
   return $0;
  }
  return $0 + 8 | 0;
 }
 
 function _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  $1 = $1 + $2 | 0;
  if ($2 >>> 0 > $1 >>> 0) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(0);
   wasm2js_trap();
  }
  $2 = HEAP32[$0 >> 2];
  $3 = $2 << 1;
  $1 = $1 >>> 0 > $3 >>> 0 ? $1 : $3;
  $1 = $1 >>> 0 <= 8 ? 8 : $1;
  $3 = $4 + 4 | 0;
  $5 = HEAP32[$0 + 4 >> 2];
  __inlined_func$_RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCshn2Zjkdzlh4_14raftscope_wasm$5 : {
   if (($1 | 0) < 0) {
    HEAP32[$3 + 4 >> 2] = 0;
    HEAP32[$3 >> 2] = 1;
    break __inlined_func$_RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCshn2Zjkdzlh4_14raftscope_wasm$5;
   }
   block2 : {
    if ($2) {
     $2 = _RNvCs9hJ03s5DiqP_7___rustc14___rust_realloc($5, $2, $1);
     break block2;
    }
    $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($1);
   }
   if (!$2) {
    HEAP32[$3 + 8 >> 2] = $1;
    HEAP32[$3 + 4 >> 2] = 1;
    HEAP32[$3 >> 2] = 1;
    break __inlined_func$_RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCshn2Zjkdzlh4_14raftscope_wasm$5;
   }
   HEAP32[$3 + 8 >> 2] = $1;
   HEAP32[$3 + 4 >> 2] = $2;
   HEAP32[$3 >> 2] = 0;
  }
  if (HEAP32[$4 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$4 + 8 >> 2]);
   wasm2js_trap();
  }
  $2 = HEAP32[$4 + 8 >> 2];
  HEAP32[$0 >> 2] = $1;
  HEAP32[$0 + 4 >> 2] = $2;
  __stack_pointer = $4 + 16 | 0;
 }
 
 function _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error($0) {
  if ($0) {
   HEAP8[1056576] = 1;
   wasm2js_trap();
  }
  _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow();
  wasm2js_trap();
 }
 
 function _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow() {
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1051392, 35, 1051412);
  wasm2js_trap();
 }
 
 function _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $4 = HEAP32[$0 + 284 >> 2];
  folding_inner1 : {
   folding_inner0 : {
    $5 = HEAP32[$0 + 288 >> 2];
    if ($5) {
     $2 = $4;
     while (1) {
      $6 = HEAP32[$2 + 32 >> 2];
      if ($6) {
       $7 = HEAP32[$2 + 36 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $1 = $3 & -8;
       $6 = $6 << 3;
       $3 = $3 & 3;
       if ($1 >>> 0 < $6 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $1 = HEAP32[$2 + 44 >> 2];
      if ($1) {
       $7 = HEAP32[$2 + 48 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $6 = $3 & -8;
       $3 = $3 & 3;
       if ($6 >>> 0 < $1 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $6 >>> 0 > $1 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$2 + 56 >> 2];
      if ($6) {
       $7 = HEAP32[$2 + 60 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $1 = $3 & -8;
       $6 = $6 << 2;
       $3 = $3 & 3;
       if ($1 >>> 0 < $6 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$2 + 68 >> 2];
      if ($6) {
       $7 = HEAP32[$2 + 72 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $1 = $3 & -8;
       $6 = $6 << 2;
       $3 = $3 & 3;
       if ($1 >>> 0 < $6 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$2 + 80 >> 2];
      if ($6) {
       $7 = HEAP32[$2 + 84 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $1 = $3 & -8;
       $6 = $6 << 3;
       $3 = $3 & 3;
       if ($1 >>> 0 < $6 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$2 + 92 >> 2];
      if ($6) {
       $7 = HEAP32[$2 + 96 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $1 = $3 & -8;
       $6 = $6 << 3;
       $3 = $3 & 3;
       if ($1 >>> 0 < $6 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$2 + 104 >> 2];
      if ($6) {
       $7 = HEAP32[$2 + 108 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $1 = $3 & -8;
       $6 = $6 << 3;
       $3 = $3 & 3;
       if ($1 >>> 0 < $6 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$2 + 116 >> 2];
      if ($6) {
       $7 = HEAP32[$2 + 120 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $1 = $3 & -8;
       $6 = $6 << 4;
       $3 = $3 & 3;
       if ($1 >>> 0 < ($6 | ($3 ? 4 : 8)) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$2 + 8 >> 2];
      if ($6) {
       $7 = HEAP32[$2 + 12 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $1 = $3 & -8;
       $6 = $6 << 2;
       $3 = $3 & 3;
       if ($1 >>> 0 < $6 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $2 = $2 + 152 | 0;
      $5 = $5 - 1 | 0;
      if ($5) {
       continue
      }
      break;
     };
    }
    $5 = HEAP32[$0 + 280 >> 2];
    if ($5) {
     $1 = HEAP32[$4 - 4 >> 2];
     $2 = $1 & -8;
     $5 = Math_imul($5, 152);
     $1 = $1 & 3;
     if ($2 >>> 0 < $5 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $5 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    $4 = HEAP32[$0 + 28 >> 2];
    $5 = HEAP32[$0 + 32 >> 2];
    if ($5) {
     $2 = $4;
     while (1) {
      $1 = HEAP32[$2 >> 2];
      block42 : {
       if (($1 | 0) == -1) {
        break block42
       }
       if (($1 | 0) <= 0) {
        break block42
       }
       $7 = HEAP32[$2 + 4 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $6 = $3 & -8;
       $1 = $1 << 3;
       $3 = $3 & 3;
       if ($6 >>> 0 < $1 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $6 >>> 0 > $1 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $2 = $2 - -64 | 0;
      $5 = $5 - 1 | 0;
      if ($5) {
       continue
      }
      break;
     };
    }
    $5 = HEAP32[$0 + 24 >> 2];
    if ($5) {
     $1 = HEAP32[$4 - 4 >> 2];
     $2 = $1 & -8;
     $5 = $5 << 6;
     $1 = $1 & 3;
     if ($2 >>> 0 < ($5 | ($1 ? 4 : 8)) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > ($5 | 39) >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    $4 = HEAP32[$0 + 36 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 40 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $2 = $1 & -8;
     $4 = $4 << 2;
     $1 = $1 & 3;
     if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $4 = HEAP32[$0 + 48 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 52 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $2 = $1 & -8;
     $4 = Math_imul($4, 24);
     $1 = $1 & 3;
     if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $4 = HEAP32[$0 + 292 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 296 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $2 = $1 & -8;
     $4 = $4 << 4;
     $1 = $1 & 3;
     if ($2 >>> 0 < ($4 | ($1 ? 4 : 8)) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $4 = HEAP32[$0 + 304 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 308 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $2 = $1 & -8;
     $4 = $4 << 3;
     $1 = $1 & 3;
     if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $4 = HEAP32[$0 + 316 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 320 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $2 = $1 & -8;
     $4 = $4 << 3;
     $1 = $1 & 3;
     if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $4 = HEAP32[$0 + 144 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 148 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $2 = $1 & -8;
     $4 = $4 << 2;
     $1 = $1 & 3;
     if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $4 = HEAP32[$0 + 328 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 332 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $2 = $1 & -8;
     $4 = $4 << 2;
     $1 = $1 & 3;
     if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $4 = HEAP32[$0 + 340 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 344 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $2 = $1 & -8;
     $4 = $4 << 3;
     $1 = $1 & 3;
     if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $4 = HEAP32[$0 + 356 >> 2];
    $5 = HEAP32[$0 + 360 >> 2];
    if ($5) {
     $2 = $4;
     while (1) {
      $1 = HEAP32[$2 >> 2];
      if ($1) {
       $7 = HEAP32[$2 + 4 >> 2];
       $3 = HEAP32[$7 - 4 >> 2];
       $6 = $3 & -8;
       $3 = $3 & 3;
       if ($6 >>> 0 < $1 + ($3 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($3 | 0) != 0 & $6 >>> 0 > $1 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $2 = $2 + 12 | 0;
      $5 = $5 - 1 | 0;
      if ($5) {
       continue
      }
      break;
     };
    }
    $5 = HEAP32[$0 + 352 >> 2];
    if ($5) {
     $1 = HEAP32[$4 - 4 >> 2];
     $2 = $1 & -8;
     $5 = Math_imul($5, 12);
     $1 = $1 & 3;
     if ($2 >>> 0 < $5 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $5 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    $2 = HEAP32[$0 + 364 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 368 >> 2];
     $5 = HEAP32[$4 - 4 >> 2];
     $0 = $5 & -8;
     $2 = $2 << 3;
     $5 = $5 & 3;
     if ($0 >>> 0 < $2 + ($5 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($5 | 0) != 0 & $0 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $1 = $0 - 8 | 0;
  $3 = HEAP32[$0 - 4 >> 2];
  $0 = $3 & -8;
  $2 = $1 + $0 | 0;
  block1 : {
   block : {
    if ($3 & 1) {
     break block
    }
    if (!($3 & 2)) {
     break block1
    }
    $3 = HEAP32[$1 >> 2];
    $0 = $3 + $0 | 0;
    $1 = $1 - $3 | 0;
    if (($1 | 0) == HEAP32[264137]) {
     if ((HEAP32[$2 + 4 >> 2] & 3) != 3) {
      break block
     }
     HEAP32[264135] = $0;
     HEAP32[$2 + 4 >> 2] = HEAP32[$2 + 4 >> 2] & -2;
     HEAP32[$1 + 4 >> 2] = $0 | 1;
     HEAP32[$2 >> 2] = $0;
     return;
    }
    _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($1, $3);
   }
   block9 : {
    block11 : {
     block8 : {
      block7 : {
       block5 : {
        block4 : {
         $3 = HEAP32[$2 + 4 >> 2];
         block6 : {
          if (!($3 & 2)) {
           if (($2 | 0) == HEAP32[264138]) {
            break block4
           }
           if (($2 | 0) == HEAP32[264137]) {
            break block5
           }
           $4 = $2;
           $2 = $3 & -8;
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($4, $2);
           $0 = $0 + $2 | 0;
           HEAP32[$1 + 4 >> 2] = $0 | 1;
           HEAP32[$0 + $1 >> 2] = $0;
           if (HEAP32[264137] != ($1 | 0)) {
            break block6
           }
           HEAP32[264135] = $0;
           return;
          }
          HEAP32[$2 + 4 >> 2] = $3 & -2;
          HEAP32[$1 + 4 >> 2] = $0 | 1;
          HEAP32[$0 + $1 >> 2] = $0;
         }
         if ($0 >>> 0 < 256) {
          break block7
         }
         $2 = 31;
         if ($0 >>> 0 < 16777216) {
          break block8
         }
         break block9;
        }
        HEAP32[264138] = $1;
        $0 = HEAP32[264136] + $0 | 0;
        HEAP32[264136] = $0;
        HEAP32[$1 + 4 >> 2] = $0 | 1;
        if (($1 | 0) == HEAP32[264137]) {
         HEAP32[264135] = 0;
         HEAP32[264137] = 0;
        }
        $2 = HEAP32[264141];
        if ($2 >>> 0 >= $0 >>> 0) {
         break block1
        }
        $0 = HEAP32[264138];
        if (!$0) {
         break block1
        }
        $3 = HEAP32[264136];
        if ($3 >>> 0 < 41) {
         break block11
        }
        $1 = 1056252;
        while (1) {
         $4 = HEAP32[$1 >> 2];
         if ($0 >>> 0 >= $4 >>> 0 & $0 >>> 0 < $4 + HEAP32[$1 + 4 >> 2] >>> 0) {
          break block11
         }
         $1 = HEAP32[$1 + 8 >> 2];
         continue;
        };
       }
       HEAP32[264137] = $1;
       $0 = HEAP32[264135] + $0 | 0;
       HEAP32[264135] = $0;
       HEAP32[$1 + 4 >> 2] = $0 | 1;
       HEAP32[$0 + $1 >> 2] = $0;
       return;
      }
      $2 = HEAP32[264133];
      $3 = 1 << ($0 >>> 3);
      block14 : {
       if (!($2 & $3)) {
        HEAP32[264133] = $2 | $3;
        $0 = ($0 & 248) + 1056268 | 0;
        $2 = $0;
        break block14;
       }
       $0 = $0 & 248;
       $2 = $0 + 1056268 | 0;
       $0 = HEAP32[$0 + 1056276 >> 2];
      }
      HEAP32[$2 + 8 >> 2] = $1;
      HEAP32[$0 + 12 >> 2] = $1;
      HEAP32[$1 + 12 >> 2] = $2;
      HEAP32[$1 + 8 >> 2] = $0;
      return;
     }
     $2 = Math_clz32($0 >>> 8 | 0);
     $2 = ($0 >>> 38 - $2 & 1 | $2 << 1) ^ 62;
     break block9;
    }
    $0 = HEAP32[264065];
    if ($0) {
     $1 = 0;
     while (1) {
      $1 = $1 + 1 | 0;
      $0 = HEAP32[$0 + 8 >> 2];
      if ($0) {
       continue
      }
      break;
     };
     $0 = $1 >>> 0 <= 4095 ? 4095 : $1;
    } else {
     $0 = 4095
    }
    HEAP32[264143] = $0;
    if ($2 >>> 0 >= $3 >>> 0) {
     break block1
    }
    HEAP32[264141] = -1;
    break block1;
   }
   HEAP32[$1 + 16 >> 2] = 0;
   HEAP32[$1 + 20 >> 2] = 0;
   HEAP32[$1 + 28 >> 2] = $2;
   $3 = ($2 << 2) + 1056124 | 0;
   $4 = 1 << $2;
   block18 : {
    if (!($4 & HEAP32[264134])) {
     HEAP32[$3 >> 2] = $1;
     HEAP32[$1 + 24 >> 2] = $3;
     HEAP32[$1 + 12 >> 2] = $1;
     HEAP32[$1 + 8 >> 2] = $1;
     HEAP32[264134] = $4 | HEAP32[264134];
     break block18;
    }
    block21 : {
     $3 = HEAP32[$3 >> 2];
     block20 : {
      if (($0 | 0) == (HEAP32[$3 + 4 >> 2] & -8)) {
       $2 = $3;
       break block20;
      }
      $4 = $0 << (($2 | 0) != 31 ? 25 - ($2 >>> 1 | 0) | 0 : 0);
      while (1) {
       $5 = ($4 >>> 29 & 4) + $3 | 0;
       $2 = HEAP32[$5 + 16 >> 2];
       if (!$2) {
        break block21
       }
       $4 = $4 << 1;
       $3 = $2;
       if ((HEAP32[$2 + 4 >> 2] & -8) != ($0 | 0)) {
        continue
       }
       break;
      };
     }
     $0 = HEAP32[$2 + 8 >> 2];
     HEAP32[$0 + 12 >> 2] = $1;
     HEAP32[$2 + 8 >> 2] = $1;
     HEAP32[$1 + 24 >> 2] = 0;
     HEAP32[$1 + 12 >> 2] = $2;
     HEAP32[$1 + 8 >> 2] = $0;
     break block18;
    }
    HEAP32[$5 + 16 >> 2] = $1;
    HEAP32[$1 + 24 >> 2] = $3;
    HEAP32[$1 + 12 >> 2] = $1;
    HEAP32[$1 + 8 >> 2] = $1;
   }
   $0 = HEAP32[264143] - 1 | 0;
   HEAP32[264143] = $0;
   if ($0) {
    break block1
   }
   $0 = HEAP32[264065];
   if ($0) {
    $1 = 0;
    while (1) {
     $1 = $1 + 1 | 0;
     $0 = HEAP32[$0 + 8 >> 2];
     if ($0) {
      continue
     }
     break;
    };
    $0 = $1 >>> 0 <= 4095 ? 4095 : $1;
   } else {
    $0 = 4095
   }
   HEAP32[264143] = $0;
  }
 }
 
 function _RNvNtCsedhpoW0refZ_4core9panicking5panic($0, $1, $2) {
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt($0, $1 << 1 | 1, $2);
  wasm2js_trap();
 }
 
 function _RNvCs9hJ03s5DiqP_7___rustc14___rust_realloc($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  block4 : {
   block9 : {
    block12 : {
     block2 : {
      $7 = $0 - 4 | 0;
      $5 = HEAP32[$7 >> 2];
      $3 = $5 & -8;
      $4 = $5 & 3;
      if ($3 >>> 0 >= ($4 ? 4 : 8) + $1 >>> 0) {
       if (($4 | 0) != 0 & $3 >>> 0 > $1 + 39 >>> 0) {
        break block2
       }
       $1 = $2 >>> 0 < 11 ? 16 : $2 + 11 & -8;
       $6 = $0 - 8 | 0;
       if (!$4) {
        if ($1 >>> 0 < 256) {
         break block4
        }
        if (!$6) {
         break block4
        }
        if ($1 >>> 0 >= $3 >>> 0) {
         break block4
        }
        if ($3 - $1 >>> 0 > 131072) {
         break block4
        }
        return $0;
       }
       $4 = $3 + $6 | 0;
       block6 : {
        if ($1 >>> 0 > $3 >>> 0) {
         if (($4 | 0) == HEAP32[264138]) {
          break block6
         }
         if (HEAP32[264137] != ($4 | 0)) {
          $5 = HEAP32[$4 + 4 >> 2];
          if ($5 & 2) {
           break block4
          }
          $5 = $5 & -8;
          $3 = $5 + $3 | 0;
          if ($3 >>> 0 < $1 >>> 0) {
           break block4
          }
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($4, $5);
          $4 = $3 - $1 | 0;
          if ($4 >>> 0 >= 16) {
           HEAP32[$7 >> 2] = $1 | HEAP32[$7 >> 2] & 1 | 2;
           $1 = $1 + $6 | 0;
           HEAP32[$1 + 4 >> 2] = $4 | 3;
           $3 = $3 + $6 | 0;
           HEAP32[$3 + 4 >> 2] = HEAP32[$3 + 4 >> 2] | 1;
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE13dispose_chunkCs9syRKuynNcS_3std($1, $4);
           break block9;
          }
          HEAP32[$7 >> 2] = $3 | HEAP32[$7 >> 2] & 1 | 2;
          $1 = $3 + $6 | 0;
          HEAP32[$1 + 4 >> 2] = HEAP32[$1 + 4 >> 2] | 1;
          break block9;
         }
         $3 = $3 + HEAP32[264135] | 0;
         if ($3 >>> 0 < $1 >>> 0) {
          break block4
         }
         $4 = $3 - $1 | 0;
         block11 : {
          if ($4 >>> 0 <= 15) {
           HEAP32[$7 >> 2] = $3 | $5 & 1 | 2;
           $1 = $3 + $6 | 0;
           HEAP32[$1 + 4 >> 2] = HEAP32[$1 + 4 >> 2] | 1;
           $4 = 0;
           $1 = 0;
           break block11;
          }
          HEAP32[$7 >> 2] = $1 | $5 & 1 | 2;
          $1 = $1 + $6 | 0;
          HEAP32[$1 + 4 >> 2] = $4 | 1;
          $3 = $3 + $6 | 0;
          HEAP32[$3 >> 2] = $4;
          HEAP32[$3 + 4 >> 2] = HEAP32[$3 + 4 >> 2] & -2;
         }
         HEAP32[264137] = $1;
         HEAP32[264135] = $4;
         break block9;
        }
        $3 = $3 - $1 | 0;
        if ($3 >>> 0 <= 15) {
         break block9
        }
        HEAP32[$7 >> 2] = $1 | $5 & 1 | 2;
        $1 = $1 + $6 | 0;
        HEAP32[$1 + 4 >> 2] = $3 | 3;
        HEAP32[$4 + 4 >> 2] = HEAP32[$4 + 4 >> 2] | 1;
        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE13dispose_chunkCs9syRKuynNcS_3std($1, $3);
        break block9;
       }
       $3 = $3 + HEAP32[264136] | 0;
       if ($3 >>> 0 > $1 >>> 0) {
        break block12
       }
       break block4;
      }
      _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
     wasm2js_trap();
    }
    HEAP32[$7 >> 2] = $1 | $5 & 1 | 2;
    $4 = $1 + $6 | 0;
    $1 = $3 - $1 | 0;
    HEAP32[$4 + 4 >> 2] = $1 | 1;
    HEAP32[264136] = $1;
    HEAP32[264138] = $4;
   }
   if (!$6) {
    break block4
   }
   return $0;
  }
  $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
  if (!$1) {
   return 0
  }
  $3 = $1;
  $1 = HEAP32[$7 >> 2];
  $1 = ($1 & 3 ? -4 : -8) + ($1 & -8) | 0;
  $1 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($3, $0, $1 >>> 0 > $2 >>> 0 ? $2 : $1);
  _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($0);
  return $1;
 }
 
 function _RNvXs1i_NtCsedhpoW0refZ_4core3fmtRbNtB6_7Display3fmtCshn2Zjkdzlh4_14raftscope_wasm($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if (!HEAPU8[HEAP32[$0 >> 2]]) {
   return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, 1054150, 5) | 0
  }
  return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, 1054155, 4) | 0;
 }
 
 function _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0;
  block22 : {
   block : {
    $12 = HEAP32[$0 + 8 >> 2];
    if (!($12 & 402653184)) {
     break block
    }
    block8 : {
     block14 : {
      block3 : {
       block2 : {
        if ($12 & 268435456) {
         $4 = HEAPU16[$0 + 14 >> 1];
         if ($4) {
          break block2
         }
         $2 = 0;
         break block3;
        }
        if ($2 >>> 0 >= 16) {
         $3 = $1 + 3 & -4;
         $9 = $1 - $3 | 0;
         $6 = $9 + $2 | 0;
         $10 = $6 & 3;
         if (($1 | 0) != ($3 | 0)) {
          if ($9 >>> 0 <= 4294967292) {
           while (1) {
            $4 = $1 + $8 | 0;
            $5 = ((((HEAP8[$4 | 0] > -65) + $5 | 0) + (HEAP8[$4 + 1 | 0] > -65) | 0) + (HEAP8[$4 + 2 | 0] > -65) | 0) + (HEAP8[$4 + 3 | 0] > -65) | 0;
            $8 = $8 + 4 | 0;
            if ($8) {
             continue
            }
            break;
           }
          }
          $7 = $1 + $8 | 0;
          while (1) {
           $5 = (HEAP8[$7 | 0] > -65) + $5 | 0;
           $7 = $7 + 1 | 0;
           $9 = $9 + 1 | 0;
           if ($9) {
            continue
           }
           break;
          };
         }
         block7 : {
          if (!$10) {
           break block7
          }
          $4 = ($6 & 2147483644) + $3 | 0;
          $11 = HEAP8[$4 | 0] > -65;
          if (($10 | 0) == 1) {
           break block7
          }
          $11 = (HEAP8[$4 + 1 | 0] > -65) + $11 | 0;
          if (($10 | 0) == 2) {
           break block7
          }
          $11 = (HEAP8[$4 + 2 | 0] > -65) + $11 | 0;
         }
         $6 = $6 >>> 2 | 0;
         $8 = $5 + $11 | 0;
         while (1) {
          $4 = $3;
          if (!$6) {
           break block8
          }
          $13 = $6 >>> 0 >= 192 ? 192 : $6;
          $11 = $13 & 3;
          $9 = $13 << 2;
          $3 = $9 & 1008;
          block10 : {
           if (!$3) {
            $7 = 0;
            break block10;
           }
           $10 = $3 + $4 | 0;
           $7 = 0;
           $5 = $4;
           while (1) {
            $3 = HEAP32[$5 + 12 >> 2];
            $14 = (($3 ^ -1) >>> 7 | $3 >>> 6) & 16843009;
            $3 = HEAP32[$5 + 8 >> 2];
            $15 = (($3 ^ -1) >>> 7 | $3 >>> 6) & 16843009;
            $3 = HEAP32[$5 + 4 >> 2];
            $16 = (($3 ^ -1) >>> 7 | $3 >>> 6) & 16843009;
            $3 = HEAP32[$5 >> 2];
            $7 = $14 + ($15 + ($16 + (((($3 ^ -1) >>> 7 | $3 >>> 6) & 16843009) + $7 | 0) | 0) | 0) | 0;
            $5 = $5 + 16 | 0;
            if (($10 | 0) != ($5 | 0)) {
             continue
            }
            break;
           };
          }
          $6 = $6 - $13 | 0;
          $3 = $4 + $9 | 0;
          $8 = (Math_imul(($7 >>> 8 & 16711935) + ($7 & 16711935) | 0, 65537) >>> 16 | 0) + $8 | 0;
          if (!$11) {
           continue
          }
          break;
         };
         $3 = $4 + (($13 & 252) << 2) | 0;
         $4 = HEAP32[$3 >> 2];
         $5 = (($4 ^ -1) >>> 7 | $4 >>> 6) & 16843009;
         block11 : {
          if (($11 | 0) == 1) {
           break block11
          }
          $4 = HEAP32[$3 + 4 >> 2];
          $5 = ((($4 ^ -1) >>> 7 | $4 >>> 6) & 16843009) + $5 | 0;
          if (($11 | 0) == 2) {
           break block11
          }
          $4 = HEAP32[$3 + 8 >> 2];
          $5 = ((($4 ^ -1) >>> 7 | $4 >>> 6) & 16843009) + $5 | 0;
         }
         $8 = (Math_imul(($5 >>> 8 & 459007) + ($5 & 16711935) | 0, 65537) >>> 16 | 0) + $8 | 0;
         break block8;
        }
        if (!$2) {
         break block8
        }
        $7 = $2 & 3;
        if ($2 >>> 0 >= 4) {
         $4 = $2 & 12;
         while (1) {
          $6 = $1 + $3 | 0;
          $8 = ((((HEAP8[$6 | 0] > -65) + $8 | 0) + (HEAP8[$6 + 1 | 0] > -65) | 0) + (HEAP8[$6 + 2 | 0] > -65) | 0) + (HEAP8[$6 + 3 | 0] > -65) | 0;
          $3 = $3 + 4 | 0;
          if (($4 | 0) != ($3 | 0)) {
           continue
          }
          break;
         };
         if (!$7) {
          break block8
         }
        }
        $5 = $1 + $3 | 0;
        while (1) {
         $8 = (HEAP8[$5 | 0] > -65) + $8 | 0;
         $5 = $5 + 1 | 0;
         $7 = $7 - 1 | 0;
         if ($7) {
          continue
         }
         break;
        };
        break block8;
       }
       $5 = $1 + $2 | 0;
       $2 = 0;
       $7 = $1;
       $3 = $4;
       while (1) {
        $6 = $7;
        if (($6 | 0) == ($5 | 0)) {
         break block14
        }
        $7 = HEAP8[$6 | 0];
        $8 = $6 + 1 | 0;
        block16 : {
         if (($7 | 0) >= 0) {
          break block16
         }
         $8 = $6 + 2 | 0;
         if ($7 >>> 0 < 4294967264) {
          break block16
         }
         $8 = $6 + ($7 >>> 0 > 4294967279 ? 4 : 3) | 0;
        }
        $7 = $8;
        $2 = ($7 - $6 | 0) + $2 | 0;
        $3 = $3 - 1 | 0;
        if ($3) {
         continue
        }
        break;
       };
      }
      $3 = 0;
     }
     $8 = $4 - $3 | 0;
    }
    $4 = HEAPU16[$0 + 12 >> 1];
    if ($4 >>> 0 <= $8 >>> 0) {
     break block
    }
    $4 = $4 - $8 | 0;
    $5 = 0;
    $6 = 0;
    block18 : {
     block20 : {
      switch (($12 >>> 29 & 3) - 1 | 0) {
      case 0:
       $6 = $4;
       break block18;
      case 1:
       break block20;
      default:
       break block18;
      };
     }
     $6 = ($4 & 65534) >>> 1 | 0;
    }
    $3 = $12 & 2097151;
    $9 = HEAP32[$0 + 4 >> 2];
    $10 = HEAP32[$0 >> 2];
    while (1) {
     if (($5 & 65535) >>> 0 < ($6 & 65535) >>> 0) {
      $7 = 1;
      $5 = $5 + 1 | 0;
      if (!(FUNCTION_TABLE[HEAP32[$9 + 16 >> 2]]($10, $3) | 0)) {
       continue
      }
      break block22;
     }
     break;
    };
    $7 = 1;
    if (FUNCTION_TABLE[HEAP32[$9 + 12 >> 2]]($10, $1, $2) | 0) {
     break block22
    }
    $0 = $4 - $6 & 65535;
    $5 = 0;
    while (1) {
     if (($5 & 65535) >>> 0 >= $0 >>> 0) {
      return 0
     }
     $5 = $5 + 1 | 0;
     if (!(FUNCTION_TABLE[HEAP32[$9 + 16 >> 2]]($10, $3) | 0)) {
      continue
     }
     break;
    };
    break block22;
   }
   $7 = FUNCTION_TABLE[HEAP32[HEAP32[$0 + 4 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], $1, $2) | 0;
  }
  return $7;
 }
 
 function _RNvXs1i_NtCsedhpoW0refZ_4core3fmtRmNtB6_7Display3fmtCshn2Zjkdzlh4_14raftscope_wasm($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return _RNvXs8_NtNtNtCsedhpoW0refZ_4core3fmt3num3impmNtB9_7Display3fmt(HEAP32[$0 >> 2], $1) | 0;
 }
 
 function _RNvXs8_NtNtNtCsedhpoW0refZ_4core3fmt3num3impmNtB9_7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  $5 = __stack_pointer - 16 | 0;
  __stack_pointer = $5;
  $3 = 10;
  $8 = HEAP32[$0 >> 2];
  $0 = $8;
  if ($0 >>> 0 >= 1e3) {
   while (1) {
    $2 = ($5 + 6 | 0) + $3 | 0;
    $4 = $2 - 4 | 0;
    $6 = $0;
    $0 = ($0 >>> 0) / 1e4 | 0;
    $9 = $6 - Math_imul($0, 1e4) | 0;
    $10 = (($9 & 65535) >>> 0) / 100 | 0;
    $7 = $10 << 1;
    $7 = HEAPU8[$7 + 1051902 | 0] | HEAPU8[$7 + 1051903 | 0] << 8;
    HEAP8[$4 | 0] = $7;
    HEAP8[$4 + 1 | 0] = $7 >>> 8;
    $2 = $2 - 2 | 0;
    $4 = ($9 - Math_imul($10, 100) & 65535) << 1;
    $4 = HEAPU8[$4 + 1051902 | 0] | HEAPU8[$4 + 1051903 | 0] << 8;
    HEAP8[$2 | 0] = $4;
    HEAP8[$2 + 1 | 0] = $4 >>> 8;
    $3 = $3 - 4 | 0;
    if ($6 >>> 0 > 9999999) {
     continue
    }
    break;
   }
  }
  if ($0 >>> 0 > 9) {
   $3 = $3 - 2 | 0;
   $6 = $3 + ($5 + 6 | 0) | 0;
   $2 = $0;
   $0 = (($0 & 65535) >>> 0) / 100 | 0;
   $2 = ($2 - Math_imul($0, 100) & 65535) << 1;
   $2 = HEAPU8[$2 + 1051902 | 0] | HEAPU8[$2 + 1051903 | 0] << 8;
   HEAP8[$6 | 0] = $2;
   HEAP8[$6 + 1 | 0] = $2 >>> 8;
  }
  if (!(!$0 & ($8 | 0) != 0)) {
   $3 = $3 - 1 | 0;
   HEAP8[$3 + ($5 + 6 | 0) | 0] = HEAPU8[($0 << 1) + 1051903 | 0];
  }
  $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1, 0, ($5 + 6 | 0) + $3 | 0, 10 - $3 | 0);
  __stack_pointer = $5 + 16 | 0;
  return $0 | 0;
 }
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $5 = HEAP32[$0 + 8 >> 2];
  $3 = 1;
  block1 : {
   if ($1 >>> 0 < 128) {
    break block1
   }
   $3 = 2;
   if ($1 >>> 0 < 2048) {
    break block1
   }
   $3 = $1 >>> 0 < 65536 ? 3 : 4;
  }
  if ($3 >>> 0 > HEAP32[$0 >> 2] - $5 >>> 0) {
   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($0, $5, $3)
  }
  $2 = HEAP32[$0 + 4 >> 2] + $5 | 0;
  block6 : {
   if ($1 >>> 0 >= 128) {
    $6 = $1 & 63 | -128;
    $4 = $1 >>> 6 | 0;
    if ($1 >>> 0 < 2048) {
     HEAP8[$2 + 1 | 0] = $6;
     HEAP8[$2 | 0] = $4 | 192;
     break block6;
    }
    $7 = $1 >>> 12 | 0;
    $4 = $4 & 63 | -128;
    if ($1 >>> 0 <= 65535) {
     HEAP8[$2 + 2 | 0] = $6;
     HEAP8[$2 + 1 | 0] = $4;
     HEAP8[$2 | 0] = $7 | 224;
     break block6;
    }
    HEAP8[$2 + 3 | 0] = $6;
    HEAP8[$2 + 2 | 0] = $4;
    HEAP8[$2 + 1 | 0] = $7 & 63 | -128;
    HEAP8[$2 | 0] = $1 >>> 18 | -16;
    break block6;
   }
   HEAP8[$2 | 0] = $1;
  }
  HEAP32[$0 + 8 >> 2] = $5 + $3;
  return 0;
 }
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = HEAP32[$0 + 8 >> 2];
  block2 : {
   block1 : {
    if ($2 >>> 0 > HEAP32[$0 >> 2] - $3 >>> 0) {
     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($0, $3, $2);
     $3 = HEAP32[$0 + 8 >> 2];
     break block1;
    }
    if (!$2) {
     break block2
    }
   }
   _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 4 >> 2] + $3 | 0, $1, $2);
  }
  HEAP32[$0 + 8 >> 2] = $2 + $3;
  return 0;
 }
 
 function _RNvXsq_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, HEAP32[$0 + 4 >> 2], HEAP32[$0 + 8 >> 2]) | 0;
 }
 
 function _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtCshn2Zjkdzlh4_14raftscope_wasm($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  if ($2 & 1) {
   $2 = $2 >>> 1 | 0;
   $3 = HEAP32[$0 + 8 >> 2];
   block3 : {
    block2 : {
     if ($2 >>> 0 > HEAP32[$0 >> 2] - $3 >>> 0) {
      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($0, $3, $2);
      $3 = HEAP32[$0 + 8 >> 2];
      break block2;
     }
     if (!$2) {
      break block3
     }
    }
    _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 4 >> 2] + $3 | 0, $1, $2);
   }
   HEAP32[$0 + 8 >> 2] = $2 + $3;
   return 0;
  }
  return _RNvNtCsedhpoW0refZ_4core3fmt5write($0, 1048576, $1, $2) | 0;
 }
 
 function _RNvNtCsedhpoW0refZ_4core3fmt5write($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  $6 = __stack_pointer - 16 | 0;
  __stack_pointer = $6;
  block2 : {
   block1 : {
    if (!($3 & 1)) {
     $4 = HEAPU8[$2 | 0];
     if ($4) {
      break block1
     }
     $4 = 0;
     break block2;
    }
    $4 = FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $2, $3 >>> 1 | 0) | 0;
    break block2;
   }
   $10 = HEAP32[$1 + 12 >> 2];
   while (1) {
    $5 = $2 + 1 | 0;
    block8 : {
     block5 : {
      block6 : {
       block4 : {
        if ($4 << 24 >> 24 < 0) {
         $7 = $4 & 255;
         if (($7 | 0) == 128) {
          break block4
         }
         if (($7 | 0) != 192) {
          break block5
         }
         HEAP32[$6 + 4 >> 2] = $1;
         HEAP32[$6 >> 2] = $0;
         HEAP32[$6 + 8 >> 2] = 1610612768;
         HEAP32[$6 + 12 >> 2] = 0;
         $2 = ($8 << 3) + $3 | 0;
         if (!(FUNCTION_TABLE[HEAP32[$2 + 4 >> 2]](HEAP32[$2 >> 2], $6) | 0)) {
          break block6
         }
         $4 = 1;
         break block2;
        }
        $2 = $4 & 255;
        if (!(FUNCTION_TABLE[$10 | 0]($0, $5, $2) | 0)) {
         $2 = $2 + $5 | 0;
         break block8;
        }
        $4 = 1;
        break block2;
       }
       $5 = $2 + 3 | 0;
       $2 = HEAPU8[$2 + 1 | 0] | HEAPU8[$2 + 2 | 0] << 8;
       if (!(FUNCTION_TABLE[$10 | 0]($0, $5, $2) | 0)) {
        $2 = $2 + $5 | 0;
        break block8;
       }
       $4 = 1;
       break block2;
      }
      $8 = $8 + 1 | 0;
      $2 = $5;
      break block8;
     }
     $11 = 1610612768;
     if ($4 & 1) {
      $11 = HEAPU8[$2 + 1 | 0] | HEAPU8[$2 + 2 | 0] << 8 | (HEAPU8[$2 + 3 | 0] << 16 | HEAPU8[$2 + 4 | 0] << 24);
      $5 = $2 + 5 | 0;
     }
     $7 = 0;
     block12 : {
      if (!($4 & 2)) {
       $9 = 0;
       $2 = $5;
       break block12;
      }
      $9 = HEAPU8[$5 | 0] | HEAPU8[$5 + 1 | 0] << 8;
      $2 = $5 + 2 | 0;
     }
     if ($4 & 4) {
      $7 = HEAPU8[$2 | 0] | HEAPU8[$2 + 1 | 0] << 8;
      $2 = $2 + 2 | 0;
     }
     $5 = $2;
     if ($4 & 8) {
      $8 = HEAPU8[$5 | 0] | HEAPU8[$5 + 1 | 0] << 8;
      $2 = $5 + 2 | 0;
     } else {
      $2 = $5
     }
     $9 = $4 & 16 ? HEAPU16[(($9 << 3) + $3 | 0) + 4 >> 1] : $9;
     HEAP16[$6 + 14 >> 1] = $4 & 32 ? HEAPU16[(($7 << 3) + $3 | 0) + 4 >> 1] : $7;
     HEAP16[$6 + 12 >> 1] = $9;
     HEAP32[$6 + 8 >> 2] = $11;
     HEAP32[$6 + 4 >> 2] = $1;
     HEAP32[$6 >> 2] = $0;
     $5 = ($8 << 3) + $3 | 0;
     $4 = 1;
     if (FUNCTION_TABLE[HEAP32[$5 + 4 >> 2]](HEAP32[$5 >> 2], $6) | 0) {
      break block2
     }
     $8 = $8 + 1 | 0;
    }
    $4 = HEAPU8[$2 | 0];
    if ($4) {
     continue
    }
    break;
   };
   $4 = 0;
  }
  __stack_pointer = $6 + 16 | 0;
  return $4;
 }
 
 function rs_cmds($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 436 >> 2];
 }
 
 function rs_free($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  folding_inner1 : {
   folding_inner0 : {
    if ($0) {
     _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($0);
     $4 = HEAP32[$0 + 400 >> 2];
     if ($4) {
      $2 = HEAP32[$0 + 404 >> 2];
      $1 = HEAP32[$2 - 4 >> 2];
      $5 = $1 & -8;
      $3 = $1 & 3;
      $1 = Math_imul($4, 24);
      if ($5 >>> 0 < ($3 ? 4 : 8) + $1 >>> 0) {
       break folding_inner0
      }
      if (($3 | 0) != 0 & $5 >>> 0 > $1 + 39 >>> 0) {
       break folding_inner1
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
     }
     $3 = HEAP32[$0 + 416 >> 2];
     $2 = HEAP32[$0 + 420 >> 2];
     if ($2) {
      $1 = $3;
      while (1) {
       _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($1);
       $1 = $1 + 392 | 0;
       $2 = $2 - 1 | 0;
       if ($2) {
        continue
       }
       break;
      };
     }
     $4 = HEAP32[$0 + 412 >> 2];
     if ($4) {
      $1 = HEAP32[$3 - 4 >> 2];
      $5 = $1 & -8;
      $2 = $1 & 3;
      $1 = Math_imul($4, 392);
      if ($5 >>> 0 < ($2 ? 4 : 8) + $1 >>> 0) {
       break folding_inner0
      }
      if (($2 | 0) != 0 & $5 >>> 0 > $1 + 39 >>> 0) {
       break folding_inner1
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
     }
     $4 = HEAP32[$0 + 432 >> 2];
     if ($4) {
      $2 = HEAP32[$0 + 436 >> 2];
      $1 = HEAP32[$2 - 4 >> 2];
      $5 = $1 & -8;
      $3 = $1 & 3;
      $1 = $4 << 2;
      if ($5 >>> 0 < ($3 ? 4 : 8) + $1 >>> 0) {
       break folding_inner0
      }
      if (($3 | 0) != 0 & $5 >>> 0 > $1 + 39 >>> 0) {
       break folding_inner1
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
     }
     $4 = HEAP32[$0 + 444 >> 2];
     if ($4) {
      $3 = HEAP32[$0 + 448 >> 2];
      $1 = HEAP32[$3 - 4 >> 2];
      $2 = $1 & -8;
      $1 = $1 & 3;
      if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
       break folding_inner0
      }
      if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
       break folding_inner1
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
     }
     $4 = HEAP32[$0 + 460 >> 2];
     if ($4) {
      $3 = HEAP32[$0 + 464 >> 2];
      $1 = HEAP32[$3 - 4 >> 2];
      $2 = $1 & -8;
      $1 = $1 & 3;
      if ($2 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
       break folding_inner0
      }
      if (($1 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
       break folding_inner1
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
     }
     $3 = HEAP32[$0 - 4 >> 2];
     $1 = $3 & 3;
     if (($3 & -8) >>> 0 < ($1 ? 476 : 480) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 >= 512) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($0);
    }
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function rs_horizon($0) {
  $0 = $0 | 0;
  return +(+HEAPU32[$0 + 392 >> 2] + +HEAPU32[$0 + 396 >> 2] * 4294967296.0);
 }
 
 function rs_message($0, $1) {
  $0 = $0 | 0;
  $1 = +$1;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0;
  $2 = __stack_pointer - 128 | 0;
  __stack_pointer = $2;
  HEAP32[$2 + 12 >> 2] = 0;
  HEAP32[$2 + 4 >> 2] = 0;
  HEAP32[$2 + 8 >> 2] = 1;
  $5 = $1 >= 0.0;
  block1 : {
   if ($5 & $1 < 18446744073709551615.0) {
    $4 = ~~$1 >>> 0;
    if (Math_abs($1) >= 1.0) {
     if ($1 > 0.0) {
      $8 = Math_min(Math_floor($1 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $8 = Math_ceil(($1 - +(~~$1 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $3 = ~~$8 >>> 0;
    } else {
     $3 = 0
    }
    break block1;
   }
   $3 = 0;
  }
  block2 : {
   $6 = HEAP32[$0 + 32 >> 2];
   if (!$6) {
    break block2
   }
   $7 = $1 > 18446744073709549568.0;
   $4 = $7 ? -1 : $5 ? $4 : 0;
   $7 = $7 ? -1 : $5 ? $3 : 0;
   $5 = $6 << 6;
   $3 = HEAP32[$0 + 28 >> 2];
   while (1) {
    block4 : {
     $6 = HEAP32[$3 >> 2];
     if (($6 | 0) != -1) {
      $9 = $3 + 24 | 0;
      if (($4 | 0) == HEAP32[$9 >> 2] & ($7 | 0) == HEAP32[$9 + 4 >> 2]) {
       break block4
      }
     }
     $3 = $3 - -64 | 0;
     $5 = $5 + -64 | 0;
     if ($5) {
      continue
     }
     break block2;
    }
    break;
   };
   $7 = $3 + 24 | 0;
   block9 : {
    block5 : {
     switch ((($6 | 0) >= 0 ? 2 : $6 ^ -2147483648) - 1 | 0) {
     case 2:
      HEAP32[$2 + 16 >> 2] = $3 + 8;
      HEAP32[$2 + 24 >> 2] = $3 + 4;
      HEAP32[$2 + 64 >> 2] = $2 + 24;
      HEAP32[$2 + 68 >> 2] = 1;
      HEAP32[$2 + 56 >> 2] = $2 + 16;
      HEAP32[$2 + 60 >> 2] = 2;
      _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($2 + 44 | 0, 1048668, $2 + 56 | 0);
      $5 = 1051283;
      $4 = 19;
      break block9;
     case 1:
      HEAP32[$2 + 36 >> 2] = $3 + 12;
      HEAP32[$2 + 40 >> 2] = $3 + 16;
      HEAP32[$2 + 16 >> 2] = $3 + 20;
      HEAP32[$2 + 24 >> 2] = HEAP32[$3 + 8 >> 2];
      HEAP32[$2 + 80 >> 2] = $2 + 16;
      $4 = 1;
      HEAP32[$2 + 84 >> 2] = $4;
      HEAP32[$2 + 72 >> 2] = $2 + 24;
      HEAP32[$2 + 76 >> 2] = 3;
      HEAP32[$2 + 64 >> 2] = $2 + 40;
      HEAP32[$2 + 68 >> 2] = 1;
      HEAP32[$2 + 56 >> 2] = $2 + 36;
      HEAP32[$2 + 60 >> 2] = 1;
      _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($2 + 44 | 0, 1048609, $2 + 56 | 0);
      $5 = 1051270;
      $4 = 13;
      break block9;
     case 0:
      HEAP32[$2 + 24 >> 2] = $3 + 4;
      HEAP32[$2 + 56 >> 2] = $2 + 24;
      HEAP32[$2 + 60 >> 2] = 2;
      _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($2 + 44 | 0, 1048850, $2 + 56 | 0);
      $5 = 1051253;
      $4 = 17;
      break block9;
     default:
      break block5;
     };
    }
    HEAP32[$2 + 16 >> 2] = $3 + 4;
    HEAP32[$2 + 24 >> 2] = $3 + 8;
    HEAP32[$2 + 64 >> 2] = $2 + 24;
    $6 = 1;
    HEAP32[$2 + 68 >> 2] = $6;
    HEAP32[$2 + 56 >> 2] = $2 + 16;
    HEAP32[$2 + 60 >> 2] = 1;
    _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($2 + 44 | 0, 1048697, $2 + 56 | 0);
    $5 = 1051242;
    $4 = 11;
   }
   HEAP32[$2 + 20 >> 2] = $4;
   HEAP32[$2 + 16 >> 2] = $5;
   HEAP32[$2 + 32 >> 2] = HEAP32[$2 + 52 >> 2];
   $4 = HEAP32[$2 + 48 >> 2];
   HEAP32[$2 + 24 >> 2] = HEAP32[$2 + 44 >> 2];
   HEAP32[$2 + 28 >> 2] = $4;
   HEAP32[$2 + 120 >> 2] = $2 + 24;
   HEAP32[$2 + 124 >> 2] = 4;
   HEAP32[$2 + 112 >> 2] = $3 + 60;
   HEAP32[$2 + 116 >> 2] = 5;
   HEAP32[$2 + 104 >> 2] = $3 + 40;
   $5 = 6;
   HEAP32[$2 + 108 >> 2] = $5;
   HEAP32[$2 + 96 >> 2] = $3 + 32;
   HEAP32[$2 + 100 >> 2] = 6;
   HEAP32[$2 + 88 >> 2] = $3 + 56;
   $4 = 3;
   HEAP32[$2 + 92 >> 2] = $4;
   HEAP32[$2 + 80 >> 2] = $3 + 52;
   HEAP32[$2 + 84 >> 2] = 3;
   HEAP32[$2 + 72 >> 2] = $3 + 48;
   HEAP32[$2 + 76 >> 2] = 3;
   HEAP32[$2 + 64 >> 2] = $2 + 16;
   HEAP32[$2 + 68 >> 2] = 7;
   HEAP32[$2 + 56 >> 2] = $7;
   HEAP32[$2 + 60 >> 2] = 6;
   _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 4 | 0, 1048576, 1049366, $2 + 56 | 0);
   $4 = HEAP32[$2 + 24 >> 2];
   if (!$4) {
    break block2
   }
   $3 = HEAP32[$2 + 28 >> 2];
   $6 = HEAP32[$3 - 4 >> 2];
   $5 = $6 & -8;
   block12 : {
    $6 = $6 & 3;
    if ($4 + ($6 ? 4 : 8) >>> 0 <= $5 >>> 0) {
     if (($6 | 0) != 0 & $5 >>> 0 > $4 + 39 >>> 0) {
      break block12
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
     break block2;
    }
    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
   wasm2js_trap();
  }
  HEAP32[$2 + 64 >> 2] = HEAP32[$2 + 12 >> 2];
  $4 = HEAP32[$2 + 8 >> 2];
  HEAP32[$2 + 56 >> 2] = HEAP32[$2 + 4 >> 2];
  HEAP32[$2 + 60 >> 2] = $4;
  block16 : {
   block14 : {
    $4 = HEAP32[$0 + 460 >> 2];
    if ($4) {
     $3 = HEAP32[$0 + 464 >> 2];
     $6 = HEAP32[$3 - 4 >> 2];
     $5 = $6 & -8;
     $6 = $6 & 3;
     if ($5 >>> 0 < $4 + ($6 ? 4 : 8) >>> 0) {
      break block14
     }
     if (($6 | 0) != 0 & $5 >>> 0 > $4 + 39 >>> 0) {
      break block16
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
    }
    $4 = $0 + 460 | 0;
    HEAP32[$4 + 8 >> 2] = HEAP32[$2 + 64 >> 2];
    $5 = HEAP32[$2 + 60 >> 2];
    HEAP32[$4 >> 2] = HEAP32[$2 + 56 >> 2];
    HEAP32[$4 + 4 >> 2] = $5;
    __stack_pointer = $2 + 128 | 0;
    return HEAP32[$0 + 468 >> 2];
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  block15 : {
   block14 : {
    block10 : {
     block2 : {
      block9 : {
       block6 : {
        $8 = $2 & 1;
        block1 : {
         if ($8) {
          $3 = $2 >>> 1 | 0;
          break block1;
         }
         $3 = HEAPU8[$1 | 0];
         if (!$3) {
          break block2
         }
         $5 = $1;
         while (1) {
          $5 = $5 + 1 | 0;
          block5 : {
           if ($3 << 24 >> 24 < 0) {
            if (($3 & 255) == 128) {
             $3 = HEAPU8[$5 | 0] | HEAPU8[$5 + 1 | 0] << 8;
             $6 = $3 + $6 | 0;
             $5 = ($3 + $5 | 0) + 2 | 0;
             break block5;
            }
            $7 = $3 & 3;
            $7 = $7 << 24 | ($7 & -256) >>> 8;
            $5 = (($5 + (($7 << 5 & 1073741824 | $7 << 7) >>> 29 | 0) | 0) + ($3 >>> 1 & 2) | 0) + ($3 >>> 2 & 2) | 0;
            $9 = !$6 | $9;
            break block5;
           }
           $3 = $3 & 255;
           $5 = $3 + $5 | 0;
           $6 = $3 + $6 | 0;
          }
          $3 = HEAPU8[$5 | 0];
          if ($3) {
           continue
          }
          break;
         };
         $3 = 0;
         if ($6 >>> 0 < 16 & $9) {
          break block1
         }
         $3 = $6 << 1;
         if (($3 | 0) < 0) {
          break block6
         }
        }
        block8 : {
         if (!$3) {
          $5 = 1;
          break block8;
         }
         $5 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($3);
         if (!$5) {
          break block9
         }
        }
        HEAP32[$4 + 8 >> 2] = 0;
        HEAP32[$4 + 4 >> 2] = $5;
        HEAP32[$4 >> 2] = $3;
        if (!$8) {
         break block10
        }
        $2 = $2 >>> 1 | 0;
        block13 : {
         block12 : {
          if ($3 >>> 0 < $2 >>> 0) {
           _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalEBa_($4, 0, $2);
           $5 = HEAP32[$4 + 4 >> 2];
           $3 = HEAP32[$4 + 8 >> 2];
           break block12;
          }
          $3 = 0;
          if (!$2) {
           break block13
          }
         }
         _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($3 + $5 | 0, $1, $2);
        }
        HEAP32[$4 + 8 >> 2] = $2 + $3;
        break block14;
       }
       _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow();
       wasm2js_trap();
      }
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
      wasm2js_trap();
     }
     HEAP32[$4 + 8 >> 2] = 0;
     HEAP32[$4 >> 2] = 0;
     HEAP32[$4 + 4 >> 2] = 1;
    }
    if (_RNvNtCsedhpoW0refZ_4core3fmt5write($4, 1051556, $1, $2)) {
     break block15
    }
   }
   HEAP32[$0 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
   $1 = HEAP32[$4 + 4 >> 2];
   HEAP32[$0 >> 2] = HEAP32[$4 >> 2];
   HEAP32[$0 + 4 >> 2] = $1;
   __stack_pointer = $4 + 16 | 0;
   return;
  }
  $0 = __stack_pointer - 32 | 0;
  __stack_pointer = $0;
  HEAP32[$0 + 4 >> 2] = 86;
  HEAP32[$0 >> 2] = 1051444;
  HEAP32[$0 + 12 >> 2] = 1051428;
  HEAP32[$0 + 8 >> 2] = $4 + 15;
  HEAP32[$0 + 24 >> 2] = $0 + 8;
  HEAP32[$0 + 28 >> 2] = 10;
  HEAP32[$0 + 16 >> 2] = $0;
  HEAP32[$0 + 20 >> 2] = 7;
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049304, $0 + 16 | 0, 1051532);
  wasm2js_trap();
 }
 
 function _RNvXsg_NtCsedhpoW0refZ_4core3fmtbNtB5_7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if (!HEAPU8[$0 | 0]) {
   return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, 1054150, 5) | 0
  }
  return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, 1054155, 4) | 0;
 }
 
 function _RNvXsd_NtNtNtCsedhpoW0refZ_4core3fmt3num3impyNtB9_7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  $6 = __stack_pointer - 32 | 0;
  __stack_pointer = $6;
  $3 = 20;
  $2 = HEAP32[$0 + 4 >> 2];
  $13 = $2;
  $9 = HEAP32[$0 >> 2];
  $0 = $9;
  if (!(!$2 & $0 >>> 0 < 1e3)) {
   while (1) {
    $7 = ($6 + 12 | 0) + $3 | 0;
    $5 = $7 - 4 | 0;
    $10 = $0;
    $4 = $2;
    $0 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $2, 1e4);
    $2 = i64toi32_i32$HIGH_BITS;
    $11 = $10 - __wasm_i64_mul($0, $2, 1e4, 0) | 0;
    $12 = (($11 & 65535) >>> 0) / 100 | 0;
    $8 = $12 << 1;
    $8 = HEAPU8[$8 + 1051902 | 0] | HEAPU8[$8 + 1051903 | 0] << 8;
    HEAP8[$5 | 0] = $8;
    HEAP8[$5 + 1 | 0] = $8 >>> 8;
    $7 = $7 - 2 | 0;
    $5 = ($11 - Math_imul($12, 100) & 65535) << 1;
    $5 = HEAPU8[$5 + 1051902 | 0] | HEAPU8[$5 + 1051903 | 0] << 8;
    HEAP8[$7 | 0] = $5;
    HEAP8[$7 + 1 | 0] = $5 >>> 8;
    $3 = $3 - 4 | 0;
    if (!$4 & $10 >>> 0 > 9999999 | $4) {
     continue
    }
    break;
   }
  }
  if (!(!$2 & $0 >>> 0 <= 9)) {
   $3 = $3 - 2 | 0;
   $2 = $3 + ($6 + 12 | 0) | 0;
   $4 = $0;
   $0 = (($0 & 65535) >>> 0) / 100 | 0;
   $4 = ($4 - Math_imul($0, 100) & 65535) << 1;
   $4 = HEAPU8[$4 + 1051902 | 0] | HEAPU8[$4 + 1051903 | 0] << 8;
   HEAP8[$2 | 0] = $4;
   HEAP8[$2 + 1 | 0] = $4 >>> 8;
   $2 = 0;
  }
  if (!(!($0 | $2) & ($13 | $9) != 0)) {
   $3 = $3 - 1 | 0;
   HEAP8[$3 + ($6 + 12 | 0) | 0] = HEAPU8[($0 << 1) + 1051903 | 0];
  }
  $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1, 0, ($6 + 12 | 0) + $3 | 0, 20 - $3 | 0);
  __stack_pointer = $6 + 32 | 0;
  return $0 | 0;
 }
 
 function _RNvXs1i_NtCsedhpoW0refZ_4core3fmtReNtB6_7Display3fmtB8_($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2]) | 0;
 }
 
 function rs_new($0, $1, $2, $3, $4, $5, $6, $7, $8) {
  $0 = $0 | 0;
  $1 = +$1;
  $2 = +$2;
  $3 = +$3;
  $4 = +$4;
  $5 = +$5;
  $6 = $6 | 0;
  $7 = +$7;
  $8 = +$8;
  var $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0.0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $10 = __stack_pointer - 784 | 0;
  __stack_pointer = $10;
  $8 = $8 != $8 ? 0.0 : $8;
  $8 = $8 > 0.0 ? $8 : 0.0;
  $29 = $8 >= 0.0;
  block1 : {
   if ($29 & $8 < 18446744073709551615.0) {
    $19 = ~~$8 >>> 0;
    if (Math_abs($8) >= 1.0) {
     if ($8 > 0.0) {
      $23 = Math_min(Math_floor($8 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $23 = Math_ceil(($8 - +(~~$8 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $20 = ~~$23 >>> 0;
    } else {
     $20 = 0
    }
    break block1;
   }
   $20 = 0;
  }
  $12 = $3 >= 0.0;
  block3 : {
   if ($12 & $3 < 18446744073709551615.0) {
    $11 = ~~$3 >>> 0;
    if (Math_abs($3) >= 1.0) {
     if ($3 > 0.0) {
      $23 = Math_min(Math_floor($3 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $23 = Math_ceil(($3 - +(~~$3 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $13 = ~~$23 >>> 0;
    } else {
     $13 = 0
    }
    break block3;
   }
   $13 = 0;
  }
  $9 = $3 > 18446744073709549568.0;
  $11 = $9 ? -1 : $12 ? $11 : 0;
  $15 = $11;
  $9 = $9 ? -1 : $12 ? $13 : 0;
  $11 = !$9 & $11 >>> 0 > 1 | ($9 | 0) != 0;
  $26 = $11 ? $15 : 1;
  $24 = $11 ? $9 : 0;
  $12 = $4 >= 0.0;
  block5 : {
   if ($12 & $4 < 18446744073709551615.0) {
    $11 = ~~$4 >>> 0;
    if (Math_abs($4) >= 1.0) {
     if ($4 > 0.0) {
      $3 = Math_min(Math_floor($4 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $3 = Math_ceil(($4 - +(~~$4 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $9 = ~~$3 >>> 0;
    } else {
     $9 = 0
    }
    break block5;
   }
   $11 = 0;
   $9 = 0;
  }
  $13 = $12 ? $11 : 0;
  $11 = $4 > 18446744073709549568.0;
  $13 = $11 ? -1 : $13;
  $9 = $11 ? -1 : $12 ? $9 : 0;
  $11 = ($9 | 0) == ($24 | 0) & $13 >>> 0 < $26 >>> 0 | $9 >>> 0 < $24 >>> 0;
  block7 : {
   if ($5 < 18446744073709551615.0 & $5 >= 0.0) {
    $12 = ~~$5 >>> 0;
    if (Math_abs($5) >= 1.0) {
     if ($5 > 0.0) {
      $3 = Math_min(Math_floor($5 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $3 = Math_ceil(($5 - +(~~$5 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $15 = ~~$3 >>> 0;
    } else {
     $15 = 0
    }
    break block7;
   }
   $12 = 0;
   $15 = 0;
  }
  $17 = $15;
  $37 = $11 ? $26 : $13;
  $30 = $11 ? $24 : $9;
  $11 = $24 - 1 | 0;
  $13 = $11 + 1 | 0;
  $9 = $11;
  $11 = $26 - 1 | 0;
  $9 = ($11 | 0) != -1 ? $13 : $9;
  block9 : {
   if ($2 < 18446744073709551615.0 & $2 >= 0.0) {
    $16 = ~~$2 >>> 0;
    if (Math_abs($2) >= 1.0) {
     if ($2 > 0.0) {
      $3 = Math_min(Math_floor($2 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $3 = Math_ceil(($2 - +(~~$2 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $15 = ~~$3 >>> 0;
    } else {
     $15 = 0
    }
    break block9;
   }
   $15 = 0;
  }
  $11 = ($9 | 0) == ($30 | 0) & $11 >>> 0 < $37 >>> 0 | $9 >>> 0 < $30 >>> 0;
  block11 : {
   if ($1 < 18446744073709551615.0 & $1 >= 0.0) {
    $18 = ~~$1 >>> 0;
    if (Math_abs($1) >= 1.0) {
     if ($1 > 0.0) {
      $3 = Math_min(Math_floor($1 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $3 = Math_ceil(($1 - +(~~$1 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $9 = ~~$3 >>> 0;
    } else {
     $9 = 0
    }
    break block11;
   }
   $9 = 0;
  }
  $21 = $9;
  block21 : {
   block20 : {
    block19 : {
     block16 : {
      block15 : {
       block13 : {
        if ($11) {
         if ($0 >>> 0 >= 14128182) {
          break block13
         }
         $27 = 8;
         $13 = $0 >>> 0 <= 1 ? 1 : $0;
         $11 = Math_imul($13, 152);
         if ($11) {
          $27 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($11);
          if (!$27) {
           break block15
          }
          $14 = $13;
         }
         $11 = $12;
         $12 = $5 >= 0.0;
         $9 = $5 > 18446744073709549568.0;
         $11 = $9 ? -1 : $12 ? $11 : 0;
         $31 = $9 ? -1 : $12 ? $17 : 0;
         $38 = !$31 & $11 >>> 0 > 1 | ($31 | 0) != 0;
         $44 = $38 ? $11 : 1;
         $12 = $2 >= 0.0;
         $9 = $2 > 18446744073709549568.0;
         $11 = $9 ? -1 : $12 ? $16 : 0;
         $32 = $9 ? -1 : $12 ? $15 : 0;
         $39 = !$32 & $11 >>> 0 > 1 | ($32 | 0) != 0;
         $45 = $39 ? $11 : 1;
         $46 = $6 >>> 0 <= 1 ? 1 : $6;
         $11 = $1 >= 0.0;
         $6 = $1 > 18446744073709549568.0;
         $25 = $6 ? -1 : $11 ? $18 : 0;
         $6 = $6 ? -1 : $11 ? $21 : 0;
         $28 = $6;
         $6 = $6 + 2027808485 | 0;
         $9 = $25 - 47583148 | 0;
         $11 = $9 >>> 0 < 4247384148 ? $6 + 1 | 0 : $6;
         $6 = $11 >>> 30 | 0;
         $9 = __wasm_i64_mul($9 ^ (($11 & 1073741823) << 2 | $9 >>> 30), $6 ^ $11, 484763065, -1084733587);
         $11 = i64toi32_i32$HIGH_BITS;
         $6 = $11 >>> 27 | 0;
         $40 = __wasm_i64_mul($9 ^ (($11 & 134217727) << 5 | $9 >>> 27), $6 ^ $11, 321982955, -1798288965);
         $33 = i64toi32_i32$HIGH_BITS;
         $22 = $33 >>> 31 | 0;
         $6 = $28 - 626627284 | 0;
         $11 = $25 + 2111796287 | 0;
         $6 = $11 >>> 0 < 2111796287 ? $6 + 1 | 0 : $6;
         $9 = __wasm_i64_mul((($6 & 1073741823) << 2 | $11 >>> 30) ^ $11, $6 ^ $6 >>> 30, 484763065, -1084733587);
         $11 = i64toi32_i32$HIGH_BITS;
         $6 = $11 >>> 27 | 0;
         $41 = __wasm_i64_mul($9 ^ (($11 & 134217727) << 5 | $9 >>> 27), $6 ^ $11, 321982955, -1798288965);
         $34 = i64toi32_i32$HIGH_BITS;
         $16 = $34 >>> 31 | 0;
         $6 = $28 + 1013904242 | 0;
         $11 = $25 - 23791574 | 0;
         $6 = $11 >>> 0 < 4271175722 ? $6 + 1 | 0 : $6;
         $9 = __wasm_i64_mul((($6 & 1073741823) << 2 | $11 >>> 30) ^ $11, $6 ^ $6 >>> 30, 484763065, -1084733587);
         $11 = i64toi32_i32$HIGH_BITS;
         $6 = $11 >>> 27 | 0;
         $42 = __wasm_i64_mul($9 ^ (($11 & 134217727) << 5 | $9 >>> 27), $6 ^ $11, 321982955, -1798288965);
         $35 = i64toi32_i32$HIGH_BITS;
         $17 = $35 >>> 31 | 0;
         $6 = $28 - 1640531527 | 0;
         $9 = $25 + 2135587861 | 0;
         $11 = $9 >>> 0 < 2135587861 ? $6 + 1 | 0 : $6;
         $6 = $11 >>> 30 | 0;
         $9 = __wasm_i64_mul($9 ^ (($11 & 1073741823) << 2 | $9 >>> 30), $6 ^ $11, 484763065, -1084733587);
         $11 = i64toi32_i32$HIGH_BITS;
         $6 = $11 >>> 27 | 0;
         $43 = __wasm_i64_mul($9 ^ (($11 & 134217727) << 5 | $9 >>> 27), $6 ^ $11, 321982955, -1798288965);
         $36 = i64toi32_i32$HIGH_BITS;
         $15 = $36 >>> 31 | 0;
         $6 = $8 > 18446744073709549568.0;
         $11 = $6 ? -1 : $29 ? $19 : 0;
         $6 = $6 ? -1 : $29 ? $20 : 0;
         $20 = $6;
         $18 = !($6 | $11);
         $21 = $18 ? -1 : $11;
         $6 = 0;
         $19 = 0;
         while (1) {
          $12 = $6 + $27 | 0;
          HEAP32[$12 >> 2] = 0;
          $9 = $12 + 16 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 0;
          $9 = $12 + 8 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 4;
          $9 = $12 + 24 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 0;
          HEAP32[$12 + 32 >> 2] = 0;
          HEAP32[$12 + 132 >> 2] = 1;
          HEAP32[$12 + 128 >> 2] = $19;
          HEAP32[$12 + 124 >> 2] = 0;
          $9 = $12 + 116 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 8;
          $9 = $12 + 108 | 0;
          HEAP32[$9 >> 2] = 8;
          HEAP32[$9 + 4 >> 2] = 0;
          $9 = $12 + 100 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 0;
          $9 = $12 + 92 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 8;
          $9 = $12 + 84 | 0;
          HEAP32[$9 >> 2] = 8;
          HEAP32[$9 + 4 >> 2] = 0;
          $9 = $12 + 76 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 0;
          $9 = $12 + 68 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 4;
          $9 = $12 + 60 | 0;
          HEAP32[$9 >> 2] = 4;
          HEAP32[$9 + 4 >> 2] = 0;
          $9 = $12 + 52 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 0;
          $9 = $12 + 44 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 1;
          $9 = $12 + 36 | 0;
          HEAP32[$9 >> 2] = 4;
          HEAP32[$9 + 4 >> 2] = 0;
          $9 = $12 + 141 | 0;
          HEAP8[$9 | 0] = 0;
          HEAP8[$9 + 1 | 0] = 0;
          HEAP8[$9 + 2 | 0] = 0;
          HEAP8[$9 + 3 | 0] = 0;
          HEAP8[$9 + 4 | 0] = 0;
          HEAP8[$9 + 5 | 0] = 0;
          HEAP8[$9 + 6 | 0] = 0;
          HEAP8[$9 + 7 | 0] = 0;
          $9 = $12 + 136 | 0;
          HEAP32[$9 >> 2] = 0;
          HEAP32[$9 + 4 >> 2] = 0;
          $6 = $6 + 152 | 0;
          $19 = $19 + 1 | 0;
          if (($13 | 0) != ($19 | 0)) {
           continue
          }
          break;
         };
         $12 = $13 << 3;
         $9 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($12);
         if (!$9) {
          break block16
         }
         $1 = $7 < 0.0 ? 0.0 : $7;
         $1 = $1 > 1.0 ? 1.0 : $1;
         $6 = $9;
         if ($0 >>> 0 >= 2) {
          $0 = $12 - 8 | 0;
          $6 = memset($9, 255, $0) + $0 | 0;
         }
         HEAP32[$6 >> 2] = -1;
         HEAP32[$6 + 4 >> 2] = -1;
         HEAP32[$10 + 688 >> 2] = $13;
         HEAP32[$10 + 684 >> 2] = $27;
         HEAP32[$10 + 680 >> 2] = $14;
         HEAP32[$10 + 624 >> 2] = 0;
         HEAP32[$10 + 628 >> 2] = 0;
         HEAP32[$10 + 620 >> 2] = $46;
         HEAP32[$10 + 616 >> 2] = $13;
         HEAP32[$10 + 608 >> 2] = $11;
         HEAP32[$10 + 612 >> 2] = $20;
         HEAP32[$10 + 600 >> 2] = $25;
         HEAP32[$10 + 604 >> 2] = $28;
         HEAPF64[$10 + 592 >> 3] = $1;
         HEAP32[$10 + 584 >> 2] = $44;
         HEAP32[$10 + 588 >> 2] = $38 ? $31 : 0;
         HEAP32[$10 + 576 >> 2] = $37;
         HEAP32[$10 + 580 >> 2] = $30;
         HEAP32[$10 + 568 >> 2] = $26;
         HEAP32[$10 + 572 >> 2] = $24;
         HEAP32[$10 + 560 >> 2] = $45;
         HEAP32[$10 + 564 >> 2] = $39 ? $32 : 0;
         HEAP32[$10 + 712 >> 2] = $13;
         HEAP32[$10 + 708 >> 2] = $9;
         HEAP32[$10 + 704 >> 2] = $13;
         $0 = 0;
         HEAP32[$10 + 700 >> 2] = 0;
         HEAP32[$10 + 692 >> 2] = 0;
         HEAP32[$10 + 696 >> 2] = 8;
         HEAP32[$10 + 456 >> 2] = 0;
         HEAP32[$10 + 460 >> 2] = 0;
         HEAP32[$10 + 448 >> 2] = 0;
         HEAP32[$10 + 452 >> 2] = 8;
         HEAP32[$10 + 440 >> 2] = 4;
         HEAP32[$10 + 444 >> 2] = 0;
         HEAP32[$10 + 432 >> 2] = 0;
         HEAP32[$10 + 436 >> 2] = 0;
         HEAP32[$10 + 424 >> 2] = 0;
         HEAP32[$10 + 428 >> 2] = 8;
         HEAP32[$10 + 776 >> 2] = 1;
         HEAP32[$10 + 664 >> 2] = 0;
         HEAP32[$10 + 668 >> 2] = 0;
         HEAP32[$10 + 656 >> 2] = $40 ^ (($33 & 2147483647) << 1 | $40 >>> 31);
         HEAP32[$10 + 660 >> 2] = $22 ^ $33;
         HEAP32[$10 + 648 >> 2] = $41 ^ (($34 & 2147483647) << 1 | $41 >>> 31);
         HEAP32[$10 + 652 >> 2] = $16 ^ $34;
         HEAP32[$10 + 640 >> 2] = $42 ^ (($35 & 2147483647) << 1 | $42 >>> 31);
         HEAP32[$10 + 644 >> 2] = $17 ^ $35;
         HEAP32[$10 + 632 >> 2] = $43 ^ (($36 & 2147483647) << 1 | $43 >>> 31);
         HEAP32[$10 + 636 >> 2] = $15 ^ $36;
         HEAP32[$10 + 724 >> 2] = 0;
         HEAP32[$10 + 716 >> 2] = 0;
         HEAP32[$10 + 720 >> 2] = 8;
         HEAP32[$10 + 672 >> 2] = $21;
         HEAP32[$10 + 676 >> 2] = $18 ? -1 : $20;
         HEAP32[$10 + 416 >> 2] = 0;
         HEAP32[$10 + 408 >> 2] = 0;
         HEAP32[$10 + 412 >> 2] = 0;
         HEAP32[$10 + 400 >> 2] = 1;
         HEAP32[$10 + 404 >> 2] = 0;
         memset($10 + 464 | 0, 0, 84);
         HEAP32[$10 + 768 >> 2] = 4;
         HEAP32[$10 + 772 >> 2] = 0;
         HEAP32[$10 + 760 >> 2] = 0;
         HEAP32[$10 + 764 >> 2] = 0;
         HEAP32[$10 + 752 >> 2] = 0;
         HEAP32[$10 + 756 >> 2] = 4;
         HEAP32[$10 + 744 >> 2] = 4;
         HEAP32[$10 + 748 >> 2] = 0;
         HEAP32[$10 + 736 >> 2] = 0;
         HEAP32[$10 + 740 >> 2] = 0;
         HEAP32[$10 + 728 >> 2] = 0;
         HEAP32[$10 + 732 >> 2] = 4;
         HEAP32[$10 + 548 >> 2] = 4;
         HEAP32[$10 + 552 >> 2] = 0;
         $6 = 24;
         while (1) {
          $16 = 0;
          $11 = HEAP32[$10 + 564 >> 2];
          $15 = $11;
          $17 = HEAP32[$10 + 560 >> 2];
          $14 = 0;
          block18 : {
           if (!($11 | $17)) {
            break block18
           }
           $21 = HEAP32[$10 + 636 >> 2];
           $18 = $21 ^ HEAP32[$10 + 652 >> 2];
           $22 = HEAP32[$10 + 644 >> 2];
           $12 = HEAP32[$10 + 632 >> 2];
           $9 = $12 ^ HEAP32[$10 + 648 >> 2];
           $16 = HEAP32[$10 + 640 >> 2];
           HEAP32[$10 + 640 >> 2] = $9 ^ $16;
           HEAP32[$10 + 644 >> 2] = $18 ^ $22;
           $14 = HEAP32[$10 + 656 >> 2] ^ $16;
           $11 = HEAP32[$10 + 660 >> 2] ^ $22;
           (wasm2js_i32$0 = $10, wasm2js_i32$1 = __wasm_rotl_i64($14, $11, 45)), HEAP32[wasm2js_i32$0 + 656 >> 2] = wasm2js_i32$1;
           HEAP32[$10 + 660 >> 2] = i64toi32_i32$HIGH_BITS;
           HEAP32[$10 + 648 >> 2] = $16 << 17 ^ $9;
           HEAP32[$10 + 652 >> 2] = ($22 << 17 | $16 >>> 15) ^ $18;
           HEAP32[$10 + 632 >> 2] = $12 ^ $14;
           HEAP32[$10 + 636 >> 2] = $11 ^ $21;
           __multi3($10, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($16, $22, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $17, $15);
           $16 = HEAP32[$10 + 12 >> 2];
           $14 = HEAP32[$10 + 8 >> 2];
          }
          $11 = HEAP32[$10 + 688 >> 2];
          if ($11 >>> 0 <= $0 >>> 0) {
           break block19
          }
          $11 = $16 + $15 | 0;
          $9 = $14 + $17 | 0;
          $14 = $9 >>> 0 < $17 >>> 0 ? $11 + 1 | 0 : $11;
          $11 = HEAP32[$10 + 684 >> 2] + $6 | 0;
          HEAP32[$11 >> 2] = $9;
          HEAP32[$11 + 4 >> 2] = $14;
          $6 = $6 + 152 | 0;
          $14 = $10 + 400 | 0;
          _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($14, $0);
          $0 = $0 + 1 | 0;
          if (($13 | 0) != ($0 | 0)) {
           continue
          }
          break;
         };
         $0 = $10 + 16 | 0;
         _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $14, 384);
         $6 = HEAP32[$10 + 304 >> 2];
         $11 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(392);
         if (!$11) {
          break block20
         }
         _RNvXsB_NtCseywxCc024wH_14raftscope_core3simNtB5_3SimNtNtCsedhpoW0refZ_4core5clone5Clone5clone($11, $0);
         HEAP32[$11 + 384 >> 2] = 0;
         _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($14, $0, 384);
         $0 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(472);
         if (!$0) {
          break block21
         }
         $0 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $14, 384);
         HEAP32[$0 + 468 >> 2] = 0;
         HEAP32[$0 + 460 >> 2] = 0;
         HEAP32[$0 + 464 >> 2] = 1;
         HEAP32[$0 + 452 >> 2] = 0;
         HEAP32[$0 + 456 >> 2] = 0;
         HEAP32[$0 + 444 >> 2] = 0;
         HEAP32[$0 + 448 >> 2] = 1;
         HEAP32[$0 + 436 >> 2] = 4;
         HEAP32[$0 + 440 >> 2] = 0;
         HEAP32[$0 + 428 >> 2] = 400;
         HEAP32[$0 + 432 >> 2] = 0;
         HEAP32[$0 + 420 >> 2] = 1;
         HEAP32[$0 + 424 >> 2] = 0;
         HEAP32[$0 + 416 >> 2] = $11;
         HEAP32[$0 + 408 >> 2] = 0;
         HEAP32[$0 + 412 >> 2] = 1;
         HEAP32[$0 + 400 >> 2] = 0;
         HEAP32[$0 + 404 >> 2] = 8;
         HEAP32[$0 + 392 >> 2] = 0;
         HEAP32[$0 + 396 >> 2] = 0;
         (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_i64_mul((($6 >>> 0) / 50 | 0) + 1 | 0, 0, 5e4, 0)), HEAP32[wasm2js_i32$0 + 384 >> 2] = wasm2js_i32$1;
         HEAP32[$0 + 388 >> 2] = i64toi32_i32$HIGH_BITS;
         __stack_pointer = $10 + 784 | 0;
         return $0 | 0;
        }
        _RNvNtCsedhpoW0refZ_4core9panicking5panic(1054972, 76, 1055048);
        wasm2js_trap();
       }
       _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow();
       wasm2js_trap();
      }
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
      wasm2js_trap();
     }
     _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($0, $11, 1055064);
    wasm2js_trap();
   }
   HEAP8[1056576] = 1;
   wasm2js_trap();
  }
  HEAP8[1056576] = 1;
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  block4 : {
   block3 : {
    block2 : {
     block1 : {
      $4 = HEAP32[$0 + 288 >> 2];
      if ($1 >>> 0 < $4 >>> 0) {
       $4 = -1;
       $3 = -1;
       $2 = HEAP32[$0 + 284 >> 2] + Math_imul($1, 152) | 0;
       switch (HEAPU8[$2 + 148 | 0] - 1 | 0) {
       case 0:
        break block2;
       case 1:
        break block3;
       case 2:
        break block4;
       default:
        break block1;
       };
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $4, 1055224);
      wasm2js_trap();
     }
     $4 = HEAP32[$2 + 24 >> 2];
     $3 = HEAP32[$2 + 28 >> 2];
     break block4;
    }
    $4 = HEAP32[$2 + 24 >> 2];
    $3 = HEAP32[$2 + 28 >> 2];
    $9 = HEAP32[$2 + 88 >> 2];
    if (!$9) {
     break block4
    }
    $8 = HEAP32[$2 + 84 >> 2];
    $5 = $9 - 1 & 536870911;
    $6 = $5 + 1 | 0;
    $9 = $6 & 3;
    $2 = 0;
    if ($5 >>> 0 >= 3) {
     $13 = $6 & 1073741820;
     while (1) {
      $5 = HEAP32[$8 >> 2];
      $6 = HEAP32[$8 + 4 >> 2];
      $10 = ($3 | 0) == ($6 | 0) & $4 >>> 0 > $5 >>> 0 | $3 >>> 0 > $6 >>> 0;
      $11 = ($1 | 0) == ($2 | 0);
      $4 = $11 ? $4 : $10 ? $5 : $4;
      $7 = $8 + 8 | 0;
      $5 = HEAP32[$7 >> 2];
      $7 = HEAP32[$7 + 4 >> 2];
      $3 = $11 ? $3 : $10 ? $6 : $3;
      $10 = ($7 | 0) == ($3 | 0) & $4 >>> 0 > $5 >>> 0 | $3 >>> 0 > $7 >>> 0;
      $11 = ($2 + 1 | 0) == ($1 | 0);
      $4 = $11 ? $4 : $10 ? $5 : $4;
      $6 = $8 + 16 | 0;
      $5 = HEAP32[$6 >> 2];
      $6 = HEAP32[$6 + 4 >> 2];
      $3 = $11 ? $3 : $10 ? $7 : $3;
      $10 = ($6 | 0) == ($3 | 0) & $4 >>> 0 > $5 >>> 0 | $3 >>> 0 > $6 >>> 0;
      $11 = ($2 + 2 | 0) == ($1 | 0);
      $4 = $11 ? $4 : $10 ? $5 : $4;
      $7 = $8 + 24 | 0;
      $5 = HEAP32[$7 >> 2];
      $12 = $5;
      $7 = HEAP32[$7 + 4 >> 2];
      $3 = $11 ? $3 : $10 ? $6 : $3;
      $5 = ($7 | 0) == ($3 | 0) & $4 >>> 0 > $5 >>> 0 | $3 >>> 0 > $7 >>> 0;
      $6 = ($2 + 3 | 0) == ($1 | 0);
      $4 = $6 ? $4 : $5 ? $12 : $4;
      $3 = $6 ? $3 : $5 ? $7 : $3;
      $8 = $8 + 32 | 0;
      $2 = $2 + 4 | 0;
      if (($13 | 0) != ($2 | 0)) {
       continue
      }
      break;
     };
     if (!$9) {
      break block4
     }
    }
    $2 = $1 - $2 | 0;
    while (1) {
     $5 = HEAP32[$8 >> 2];
     $12 = $5;
     $6 = HEAP32[$8 + 4 >> 2];
     $5 = ($3 | 0) == ($6 | 0) & $4 >>> 0 > $5 >>> 0 | $3 >>> 0 > $6 >>> 0;
     $4 = $2 ? ($5 ? $12 : $4) : $4;
     $3 = $2 ? ($5 ? $6 : $3) : $3;
     $2 = $2 - 1 | 0;
     $8 = $8 + 8 | 0;
     $9 = $9 - 1 | 0;
     if ($9) {
      continue
     }
     break;
    };
    break block4;
   }
   if (!HEAP32[$2 + 124 >> 2]) {
    break block4
   }
   $2 = HEAP32[$2 + 120 >> 2];
   $4 = HEAP32[$2 >> 2];
   $3 = HEAP32[$2 + 4 >> 2];
  }
  $2 = HEAP32[$0 + 312 >> 2];
  if ($1 >>> 0 < $2 >>> 0) {
   $2 = HEAP32[$0 + 308 >> 2] + ($1 << 3) | 0;
   HEAP32[$2 >> 2] = $4;
   HEAP32[$2 + 4 >> 2] = $3;
   if (($3 & $4) != -1) {
    $2 = HEAP32[$0 + 300 >> 2];
    if (($2 | 0) == HEAP32[$0 + 292 >> 2]) {
     _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($0 + 292 | 0)
    }
    HEAP32[$0 + 300 >> 2] = $2 + 1;
    $5 = HEAP32[$0 + 296 >> 2];
    $0 = $5 + ($2 << 4) | 0;
    HEAP32[$0 + 8 >> 2] = $1;
    HEAP32[$0 >> 2] = $4;
    HEAP32[$0 + 4 >> 2] = $3;
    $8 = 0;
    block9 : {
     if (!$2) {
      break block9
     }
     while (1) {
      $9 = $2 - 1 >>> 1 | 0;
      $0 = $5 + ($9 << 4) | 0;
      $6 = HEAP32[$0 >> 2];
      $7 = HEAP32[$0 + 4 >> 2];
      if (($4 | 0) == ($6 | 0) & ($3 | 0) == ($7 | 0) ? HEAPU32[$0 + 8 >> 2] <= $1 >>> 0 : ($3 | 0) == ($7 | 0) & $4 >>> 0 >= $6 >>> 0 | $3 >>> 0 > $7 >>> 0) {
       $8 = $2;
       break block9;
      }
      $6 = HEAP32[$0 + 12 >> 2];
      $2 = $5 + ($2 << 4) | 0;
      HEAP32[$2 + 8 >> 2] = HEAP32[$0 + 8 >> 2];
      HEAP32[$2 + 12 >> 2] = $6;
      $6 = HEAP32[$0 + 4 >> 2];
      HEAP32[$2 >> 2] = HEAP32[$0 >> 2];
      HEAP32[$2 + 4 >> 2] = $6;
      $2 = $9;
      if ($2) {
       continue
      }
      break;
     };
    }
    $0 = $5 + ($8 << 4) | 0;
    HEAP32[$0 + 8 >> 2] = $1;
    HEAP32[$0 >> 2] = $4;
    HEAP32[$0 + 4 >> 2] = $3;
   }
   return;
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $2, 1054348);
  wasm2js_trap();
 }
 
 function _RNvXsB_NtCseywxCc024wH_14raftscope_core3simNtB5_3SimNtNtCsedhpoW0refZ_4core5clone5Clone5clone($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0;
  $7 = __stack_pointer - 96 | 0;
  __stack_pointer = $7;
  $2 = HEAP32[$1 + 220 >> 2];
  HEAP32[$7 + 56 >> 2] = HEAP32[$1 + 216 >> 2];
  HEAP32[$7 + 60 >> 2] = $2;
  $2 = HEAP32[$1 + 212 >> 2];
  HEAP32[$7 + 48 >> 2] = HEAP32[$1 + 208 >> 2];
  HEAP32[$7 + 52 >> 2] = $2;
  $2 = HEAP32[$1 + 204 >> 2];
  HEAP32[$7 + 40 >> 2] = HEAP32[$1 + 200 >> 2];
  HEAP32[$7 + 44 >> 2] = $2;
  $2 = HEAP32[$1 + 196 >> 2];
  HEAP32[$7 + 32 >> 2] = HEAP32[$1 + 192 >> 2];
  HEAP32[$7 + 36 >> 2] = $2;
  $2 = HEAP32[$1 + 188 >> 2];
  HEAP32[$7 + 24 >> 2] = HEAP32[$1 + 184 >> 2];
  HEAP32[$7 + 28 >> 2] = $2;
  $2 = HEAP32[$1 + 180 >> 2];
  HEAP32[$7 + 16 >> 2] = HEAP32[$1 + 176 >> 2];
  HEAP32[$7 + 20 >> 2] = $2;
  $2 = HEAP32[$1 + 172 >> 2];
  HEAP32[$7 + 8 >> 2] = HEAP32[$1 + 168 >> 2];
  HEAP32[$7 + 12 >> 2] = $2;
  $2 = HEAP32[$1 + 164 >> 2];
  HEAP32[$7 >> 2] = HEAP32[$1 + 160 >> 2];
  HEAP32[$7 + 4 >> 2] = $2;
  $52 = HEAP32[$1 + 224 >> 2];
  $53 = HEAP32[$1 + 228 >> 2];
  $40 = 8;
  $41 = 8;
  folding_inner3 : {
   folding_inner2 : {
    folding_inner0 : {
     block80 : {
      block20 : {
       block19 : {
        block7 : {
         $37 = HEAP32[$1 + 288 >> 2];
         block : {
          if (!$37) {
           break block
          }
          $3 = HEAP32[$1 + 284 >> 2];
          $2 = Math_imul($37, 152);
          $41 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
          if (!$41) {
           break folding_inner0
          }
          $43 = $2 + $3 | 0;
          $18 = $37;
          while (1) {
           if (($3 | 0) == ($43 | 0)) {
            break block
           }
           $5 = $3;
           $44 = HEAP32[$3 + 4 >> 2];
           $45 = HEAP32[$3 >> 2];
           $46 = HEAP32[$3 + 132 >> 2];
           $47 = HEAPU8[$3 + 148 | 0];
           $48 = HEAP32[$3 + 128 >> 2];
           $25 = HEAP32[$3 + 40 >> 2];
           block3 : {
            if (!$25) {
             $19 = 4;
             break block3;
            }
            $2 = HEAP32[$5 + 36 >> 2];
            $6 = $25 << 3;
            $19 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($6);
            if (!$19) {
             break folding_inner3
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($19, $2, $6);
           }
           $38 = HEAP32[$5 + 24 >> 2];
           $39 = HEAP32[$5 + 28 >> 2];
           $49 = HEAP32[$5 + 136 >> 2];
           $20 = HEAP32[$5 + 52 >> 2];
           block6 : {
            if (!$20) {
             $28 = 1;
             break block6;
            }
            $2 = HEAP32[$5 + 48 >> 2];
            $28 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($20);
            if (!$28) {
             break block7
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($28, $2, $20);
           }
           $50 = HEAP32[$5 + 140 >> 2];
           $22 = 4;
           $23 = 4;
           $29 = HEAP32[$5 + 64 >> 2];
           if ($29) {
            $2 = HEAP32[$5 + 60 >> 2];
            $6 = $29 << 2;
            $23 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($6);
            if (!$23) {
             break folding_inner3
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($23, $2, $6);
           }
           $30 = HEAP32[$5 + 76 >> 2];
           if ($30) {
            $2 = HEAP32[$5 + 72 >> 2];
            $6 = $30 << 2;
            $22 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($6);
            if (!$22) {
             break folding_inner3
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($22, $2, $6);
           }
           $31 = 8;
           $32 = 8;
           $33 = HEAP32[$5 + 88 >> 2];
           if ($33) {
            $2 = HEAP32[$5 + 84 >> 2];
            $6 = $33 << 3;
            $32 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($6);
            if (!$32) {
             break folding_inner2
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($32, $2, $6);
           }
           $34 = HEAP32[$5 + 100 >> 2];
           if ($34) {
            $2 = HEAP32[$5 + 96 >> 2];
            $6 = $34 << 3;
            $31 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($6);
            if (!$31) {
             break folding_inner2
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($31, $2, $6);
           }
           $17 = 8;
           $35 = 8;
           $36 = HEAP32[$5 + 112 >> 2];
           if ($36) {
            $2 = HEAP32[$5 + 108 >> 2];
            $6 = $36 << 3;
            $35 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($6);
            if (!$35) {
             break folding_inner2
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($35, $2, $6);
           }
           $21 = HEAP32[$5 + 124 >> 2];
           block18 : {
            if (!$21) {
             break block18
            }
            $3 = HEAP32[$5 + 120 >> 2];
            $9 = $21 << 4;
            $17 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($9);
            if (!$17) {
             break block19
            }
            $4 = 0;
            $2 = $21;
            while (1) {
             if (($4 | 0) == ($9 | 0)) {
              break block18
             }
             $8 = HEAP32[$3 + 4 >> 2];
             $6 = $4 + $17 | 0;
             HEAP32[$6 >> 2] = HEAP32[$3 >> 2];
             HEAP32[$6 + 4 >> 2] = $8;
             HEAP32[$6 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
             $4 = $4 + 16 | 0;
             $3 = $3 + 16 | 0;
             $2 = $2 - 1 | 0;
             if ($2) {
              continue
             }
             break;
            };
           }
           $6 = HEAP32[$5 + 20 >> 2];
           if ($6 >>> 0 > 1073741823) {
            break block20
           }
           $2 = $6 << 2;
           if ($2 >>> 0 >= 2147483645) {
            break block20
           }
           $14 = 0;
           block22 : {
            if (!$2) {
             $2 = 4;
             $3 = 0;
             break block22;
            }
            $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
            if (!$2) {
             break folding_inner3
            }
            $3 = $6;
           }
           HEAP32[$7 + 84 >> 2] = $2;
           HEAP32[$7 + 80 >> 2] = $3;
           HEAP32[$7 + 88 >> 2] = 0;
           HEAP32[$7 + 92 >> 2] = 0;
           block25 : {
            if (!$6) {
             $12 = 0;
             $2 = 0;
             break block25;
            }
            $8 = HEAP32[$5 + 16 >> 2];
            $2 = HEAP32[$5 + 8 >> 2];
            $12 = $8 - ($2 >>> 0 <= $8 >>> 0 ? $2 : 0) | 0;
            $8 = $2 - $12 | 0;
            if ($6 >>> 0 > $8 >>> 0) {
             $14 = $6 - $8 | 0;
             break block25;
            }
            $2 = $6 + $12 | 0;
           }
           $8 = HEAP32[$5 + 12 >> 2];
           $16 = $12 << 2;
           $4 = 0;
           $6 = $2 - $12 | 0;
           $15 = $6 + $14 | 0;
           block28 : {
            if ($3 >>> 0 >= $15 >>> 0) {
             $11 = $3;
             $26 = 0;
             break block28;
            }
            _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($7 + 80 | 0, 0, $15, 4, 4);
            $11 = HEAP32[$7 + 80 >> 2];
            $4 = HEAP32[$7 + 88 >> 2];
            $26 = HEAP32[$7 + 92 >> 2];
            if ($4 >>> 0 <= $3 - $26 >>> 0) {
             break block28
            }
            $13 = $3 - $4 | 0;
            $9 = $26 - $13 | 0;
            if (!($9 >>> 0 < $13 >>> 0 & $11 - $3 >>> 0 >= $9 >>> 0)) {
             $3 = $4 << 2;
             $9 = HEAP32[$7 + 84 >> 2];
             $4 = $11 - $13 | 0;
             _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem7memmove($9 + ($4 << 2) | 0, $3 + $9 | 0, $13 << 2);
             HEAP32[$7 + 88 >> 2] = $4;
             break block28;
            }
            $13 = HEAP32[$7 + 84 >> 2];
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($13 + ($3 << 2) | 0, $13, $9 << 2);
           }
           $27 = $2 << 2;
           $10 = Math_imul($42, 152) + $41 | 0;
           $3 = $8 + $16 | 0;
           block41 : {
            block34 : {
             $4 = $4 + $26 | 0;
             $24 = $4 - ($4 >>> 0 >= $11 >>> 0 ? $11 : 0) | 0;
             $13 = $11 - $24 | 0;
             if ($13 >>> 0 < $15 >>> 0) {
              $6 = $14 << 2;
              block35 : {
               if ($13) {
                $12 = $27 - $16 | 0;
                $2 = 0;
                $14 = HEAP32[$7 + 84 >> 2] + ($24 << 2) | 0;
                $4 = $14;
                $9 = 0;
                while (1) {
                 if (($2 | 0) == ($12 | 0)) {
                  $14 = ($24 - $11 | 0) + $9 | 0;
                  $2 = 0;
                  $3 = $6;
                  $12 = $8;
                  while (1) {
                   if (!$3) {
                    break block34
                   }
                   HEAP32[$4 >> 2] = HEAP32[$12 >> 2];
                   $4 = $4 + 4 | 0;
                   $3 = $3 - 4 | 0;
                   $12 = $12 + 4 | 0;
                   $2 = $2 - 1 | 0;
                   if (($14 | 0) != ($2 | 0)) {
                    continue
                   }
                   break;
                  };
                  $11 = 0;
                  break block35;
                 }
                 HEAP32[$2 + $14 >> 2] = HEAP32[$2 + $3 >> 2];
                 $4 = $4 + 4 | 0;
                 $2 = $2 + 4 | 0;
                 $9 = $9 + 1 | 0;
                 if (($13 | 0) != ($9 | 0)) {
                  continue
                 }
                 break;
                };
                $3 = $2 + $3 | 0;
               }
               $2 = $8 + $27 | 0;
               block37 : {
                if (($3 | 0) == ($2 | 0)) {
                 $11 = 0;
                 break block37;
                }
                $2 = $2 - $3 | 0;
                $11 = $2 >>> 2 | 0;
                $12 = $11 & 3;
                $14 = 0;
                $4 = HEAP32[$7 + 84 >> 2];
                block39 : {
                 if ($2 >>> 0 >= 16) {
                  $16 = $11 & 1073741820;
                  $2 = 0;
                  while (1) {
                   $15 = $2 + $4 | 0;
                   $9 = $2 + $3 | 0;
                   HEAP32[$15 >> 2] = HEAP32[$9 >> 2];
                   HEAP32[$15 + 4 >> 2] = HEAP32[$9 + 4 >> 2];
                   HEAP32[$15 + 8 >> 2] = HEAP32[$9 + 8 >> 2];
                   HEAP32[$15 + 12 >> 2] = HEAP32[$9 + 12 >> 2];
                   $2 = $2 + 16 | 0;
                   $14 = $14 + 4 | 0;
                   if (($16 | 0) != ($14 | 0)) {
                    continue
                   }
                   break;
                  };
                  if (!$12) {
                   break block39
                  }
                 }
                 $2 = $14 << 2;
                 $3 = $2 + $3 | 0;
                 $2 = $2 + $4 | 0;
                 while (1) {
                  HEAP32[$2 >> 2] = HEAP32[$3 >> 2];
                  $3 = $3 + 4 | 0;
                  $2 = $2 + 4 | 0;
                  $12 = $12 - 1 | 0;
                  if ($12) {
                   continue
                  }
                  break;
                 };
                }
                $13 = $11 + $13 | 0;
               }
               $12 = $8;
              }
              $2 = $6 + $8 | 0;
              if (($12 | 0) == ($2 | 0)) {
               $6 = $13;
               break block41;
              }
              $2 = $2 - $12 | 0;
              $8 = $2 >>> 2 | 0;
              $9 = $8 & 3;
              $14 = 0;
              $15 = HEAP32[$7 + 84 >> 2];
              block43 : {
               if ($2 >>> 0 >= 16) {
                $4 = $8 & 1073741820;
                $16 = $15 + ($11 << 2) | 0;
                $3 = 0;
                while (1) {
                 $2 = $3 + $16 | 0;
                 $6 = $3 + $12 | 0;
                 HEAP32[$2 >> 2] = HEAP32[$6 >> 2];
                 HEAP32[$2 + 4 >> 2] = HEAP32[$6 + 4 >> 2];
                 HEAP32[$2 + 8 >> 2] = HEAP32[$6 + 8 >> 2];
                 HEAP32[$2 + 12 >> 2] = HEAP32[$6 + 12 >> 2];
                 $3 = $3 + 16 | 0;
                 $14 = $14 + 4 | 0;
                 if (($4 | 0) != ($14 | 0)) {
                  continue
                 }
                 break;
                };
                if (!$9) {
                 break block43
                }
                $11 = $11 + $14 | 0;
               }
               $3 = ($14 << 2) + $12 | 0;
               $2 = $15 + ($11 << 2) | 0;
               while (1) {
                HEAP32[$2 >> 2] = HEAP32[$3 >> 2];
                $3 = $3 + 4 | 0;
                $2 = $2 + 4 | 0;
                $9 = $9 - 1 | 0;
                if ($9) {
                 continue
                }
                break;
               };
              }
              $6 = $8 + $13 | 0;
              break block41;
             }
             block44 : {
              if (($16 | 0) == ($27 | 0)) {
               break block44
              }
              $4 = $6 & 3;
              $13 = $24 << 2;
              $11 = HEAP32[$7 + 84 >> 2];
              $9 = 0;
              if ($12 - $2 >>> 0 <= 4294967292) {
               $2 = $11 + $13 | 0;
               $12 = $6 & -4;
               while (1) {
                HEAP32[$2 >> 2] = HEAP32[$3 >> 2];
                HEAP32[$2 + 4 >> 2] = HEAP32[$3 + 4 >> 2];
                HEAP32[$2 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                HEAP32[$2 + 12 >> 2] = HEAP32[$3 + 12 >> 2];
                $2 = $2 + 16 | 0;
                $3 = $3 + 16 | 0;
                $9 = $9 + 4 | 0;
                if (($12 | 0) != ($9 | 0)) {
                 continue
                }
                break;
               };
               if (!$4) {
                break block44
               }
              }
              $2 = $9 << 2;
              $3 = $11 + ($2 + $13 | 0) | 0;
              $2 = $8 + ($2 + $16 | 0) | 0;
              while (1) {
               HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
               $2 = $2 + 4 | 0;
               $3 = $3 + 4 | 0;
               $4 = $4 - 1 | 0;
               if ($4) {
                continue
               }
               break;
              };
             }
             if (!$14) {
              break block41
             }
             $4 = $14 & 3;
             $9 = 0;
             $13 = HEAP32[$7 + 84 >> 2];
             if ($14 >>> 0 >= 4) {
              $12 = $14 & -4;
              $3 = ((($24 << 2) + $27 | 0) - $16 | 0) + $13 | 0;
              $2 = $8;
              while (1) {
               HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
               HEAP32[$3 + 4 >> 2] = HEAP32[$2 + 4 >> 2];
               HEAP32[$3 + 8 >> 2] = HEAP32[$2 + 8 >> 2];
               HEAP32[$3 + 12 >> 2] = HEAP32[$2 + 12 >> 2];
               $3 = $3 + 16 | 0;
               $2 = $2 + 16 | 0;
               $9 = $9 + 4 | 0;
               if (($12 | 0) != ($9 | 0)) {
                continue
               }
               break;
              };
              if (!$4) {
               $6 = $15;
               break block41;
              }
              $6 = $6 + $9 | 0;
             }
             $3 = $13 + (($6 << 2) + ($24 << 2) | 0) | 0;
             $2 = $8 + ($9 << 2) | 0;
             while (1) {
              HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
              $2 = $2 + 4 | 0;
              $3 = $3 + 4 | 0;
              $4 = $4 - 1 | 0;
              if ($4) {
               continue
              }
              break;
             };
             $6 = $15;
             break block41;
            }
            $6 = $9 - $2 | 0;
           }
           $3 = $5 + 152 | 0;
           $42 = $42 + 1 | 0;
           HEAP32[$7 + 92 >> 2] = $6 + $26;
           $15 = HEAP32[$5 + 144 >> 2];
           $2 = HEAP32[$7 + 92 >> 2];
           $11 = $2;
           $6 = HEAP32[$7 + 88 >> 2];
           HEAP32[$7 + 72 >> 2] = $6;
           HEAP32[$7 + 76 >> 2] = $2;
           $2 = HEAP32[$7 + 84 >> 2];
           $8 = $2;
           $16 = HEAP32[$7 + 80 >> 2];
           HEAP32[$7 + 64 >> 2] = $16;
           HEAP32[$7 + 68 >> 2] = $2;
           HEAP32[$10 + 4 >> 2] = $44;
           HEAP32[$10 >> 2] = $45;
           HEAP32[$10 + 8 >> 2] = $16;
           HEAP32[$10 + 12 >> 2] = $2;
           HEAP32[$10 + 16 >> 2] = $6;
           HEAP32[$10 + 20 >> 2] = $11;
           HEAP8[$10 + 148 | 0] = $47;
           HEAP32[$10 + 144 >> 2] = $15;
           HEAP32[$10 + 140 >> 2] = $50;
           HEAP32[$10 + 136 >> 2] = $49;
           HEAP32[$10 + 132 >> 2] = $46;
           HEAP32[$10 + 128 >> 2] = $48;
           HEAP32[$10 + 124 >> 2] = $21;
           HEAP32[$10 + 120 >> 2] = $17;
           HEAP32[$10 + 116 >> 2] = $21;
           HEAP32[$10 + 112 >> 2] = $36;
           HEAP32[$10 + 108 >> 2] = $35;
           HEAP32[$10 + 104 >> 2] = $36;
           HEAP32[$10 + 100 >> 2] = $34;
           HEAP32[$10 + 96 >> 2] = $31;
           HEAP32[$10 + 92 >> 2] = $34;
           HEAP32[$10 + 88 >> 2] = $33;
           HEAP32[$10 + 84 >> 2] = $32;
           HEAP32[$10 + 80 >> 2] = $33;
           HEAP32[$10 + 76 >> 2] = $30;
           HEAP32[$10 + 72 >> 2] = $22;
           HEAP32[$10 + 68 >> 2] = $30;
           HEAP32[$10 + 64 >> 2] = $29;
           HEAP32[$10 + 60 >> 2] = $23;
           HEAP32[$10 + 56 >> 2] = $29;
           HEAP32[$10 + 52 >> 2] = $20;
           HEAP32[$10 + 48 >> 2] = $28;
           HEAP32[$10 + 44 >> 2] = $20;
           HEAP32[$10 + 40 >> 2] = $25;
           HEAP32[$10 + 36 >> 2] = $19;
           HEAP32[$10 + 32 >> 2] = $25;
           HEAP32[$10 + 24 >> 2] = $38;
           HEAP32[$10 + 28 >> 2] = $39;
           $18 = $18 - 1 | 0;
           if ($18) {
            continue
           }
           break;
          };
         }
         $15 = HEAP32[$1 + 32 >> 2];
         block48 : {
          if (!$15) {
           break block48
          }
          $10 = HEAP32[$1 + 28 >> 2];
          $19 = $15 << 6;
          $40 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($19);
          if (!$40) {
           break folding_inner0
          }
          $3 = 0;
          $4 = $15;
          while (1) {
           if (($3 | 0) == ($19 | 0)) {
            break block48
           }
           $2 = -1;
           $5 = $3 + $10 | 0;
           $18 = HEAP32[$5 >> 2];
           if (($18 | 0) != -1) {
            $21 = HEAP32[$5 + 56 >> 2];
            $20 = HEAP32[$5 + 52 >> 2];
            $13 = HEAP32[$5 + 48 >> 2];
            $2 = $5 + 24 | 0;
            $38 = HEAP32[$2 >> 2];
            $39 = HEAP32[$2 + 4 >> 2];
            block57 : {
             if (((($18 | 0) >= 0 ? 2 : $18 ^ -2147483648) | 0) == 2) {
              $9 = 4;
              $14 = HEAP32[$5 + 16 >> 2];
              $12 = HEAP32[$5 + 12 >> 2];
              $17 = HEAP32[$5 + 8 >> 2];
              if (!$17) {
               $17 = 0;
               $2 = 0;
               break block57;
              }
              $2 = HEAP32[$5 + 4 >> 2];
              $6 = $17 << 3;
              $9 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($6);
              if (!$9) {
               break folding_inner3
              }
              _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($9, $2, $6);
              $2 = $17;
              break block57;
             }
             $14 = HEAP32[$5 + 16 >> 2];
             $12 = HEAP32[$5 + 12 >> 2];
             $9 = HEAP32[$5 + 4 >> 2];
             $17 = HEAP32[$5 + 8 >> 2];
             $2 = $18;
            }
            $22 = HEAPU8[$5 + 60 | 0];
            $6 = $5 + 40 | 0;
            $16 = HEAP32[$6 >> 2];
            $8 = HEAP32[$6 + 4 >> 2];
            $11 = $5 + 32 | 0;
            $6 = HEAP32[$11 >> 2];
            $23 = HEAP32[$5 + 20 >> 2];
            $11 = HEAP32[$11 + 4 >> 2];
           }
           $5 = $3 + $40 | 0;
           HEAP32[$5 >> 2] = $2;
           HEAP8[$5 + 60 | 0] = $22;
           HEAP32[$5 + 56 >> 2] = $21;
           HEAP32[$5 + 52 >> 2] = $20;
           HEAP32[$5 + 48 >> 2] = $13;
           $2 = $5 + 40 | 0;
           HEAP32[$2 >> 2] = $16;
           HEAP32[$2 + 4 >> 2] = $8;
           $2 = $5 + 32 | 0;
           HEAP32[$2 >> 2] = $6;
           HEAP32[$2 + 4 >> 2] = $11;
           $2 = $5 + 24 | 0;
           HEAP32[$2 >> 2] = $38;
           HEAP32[$2 + 4 >> 2] = $39;
           HEAP32[$5 + 20 >> 2] = $23;
           HEAP32[$5 + 16 >> 2] = $14;
           HEAP32[$5 + 12 >> 2] = $12;
           HEAP32[$5 + 8 >> 2] = $17;
           HEAP32[$5 + 4 >> 2] = $9;
           $3 = $3 - -64 | 0;
           $4 = $4 - 1 | 0;
           if ($4) {
            continue
           }
           break;
          };
         }
         $21 = HEAP32[$1 + 44 >> 2];
         block60 : {
          if (!$21) {
           $19 = 4;
           break block60;
          }
          $2 = HEAP32[$1 + 40 >> 2];
          $6 = $21 << 2;
          $19 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($6);
          if (!$19) {
           break folding_inner3
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($19, $2, $6);
         }
         $12 = 8;
         $9 = 8;
         $6 = HEAP32[$1 + 56 >> 2];
         block62 : {
          if (!$6) {
           break block62
          }
          $4 = HEAP32[$1 + 52 >> 2];
          $5 = Math_imul($6, 24);
          $9 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
          if (!$9) {
           break folding_inner0
          }
          $3 = 0;
          $2 = $6;
          while (1) {
           if (($3 | 0) == ($5 | 0)) {
            break block62
           }
           $11 = HEAP32[$4 + 4 >> 2];
           $8 = $3 + $9 | 0;
           HEAP32[$8 >> 2] = HEAP32[$4 >> 2];
           HEAP32[$8 + 4 >> 2] = $11;
           HEAP32[$8 + 16 >> 2] = HEAP32[$4 + 16 >> 2];
           $11 = HEAP32[$4 + 12 >> 2];
           $8 = $8 + 8 | 0;
           HEAP32[$8 >> 2] = HEAP32[$4 + 8 >> 2];
           HEAP32[$8 + 4 >> 2] = $11;
           $3 = $3 + 24 | 0;
           $4 = $4 + 24 | 0;
           $2 = $2 - 1 | 0;
           if ($2) {
            continue
           }
           break;
          };
         }
         $38 = HEAP32[$1 + 60 >> 2];
         $2 = HEAP32[$1 + 300 >> 2];
         block64 : {
          if (!$2) {
           break block64
          }
          $3 = HEAP32[$1 + 296 >> 2];
          $11 = $2 << 4;
          $12 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($11);
          if (!$12) {
           break folding_inner0
          }
          $4 = 0;
          $8 = $2;
          while (1) {
           if (($4 | 0) == ($11 | 0)) {
            break block64
           }
           $13 = HEAP32[$3 + 4 >> 2];
           $5 = $4 + $12 | 0;
           HEAP32[$5 >> 2] = HEAP32[$3 >> 2];
           HEAP32[$5 + 4 >> 2] = $13;
           HEAP32[$5 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
           $4 = $4 + 16 | 0;
           $3 = $3 + 16 | 0;
           $8 = $8 - 1 | 0;
           if ($8) {
            continue
           }
           break;
          };
         }
         $18 = 8;
         $10 = 8;
         $20 = HEAP32[$1 + 312 >> 2];
         if ($20) {
          $8 = HEAP32[$1 + 308 >> 2];
          $3 = $20 << 3;
          $10 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($3);
          if (!$10) {
           break folding_inner2
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($10, $8, $3);
         }
         $39 = HEAP32[$1 + 376 >> 2];
         $28 = HEAP32[$1 + 264 >> 2];
         $29 = HEAP32[$1 + 268 >> 2];
         $22 = HEAP32[$1 + 324 >> 2];
         if ($22) {
          $8 = HEAP32[$1 + 320 >> 2];
          $3 = $22 << 3;
          $18 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($3);
          if (!$18) {
           break folding_inner2
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($18, $8, $3);
         }
         $30 = HEAP32[$1 + 128 >> 2];
         $31 = HEAP32[$1 + 132 >> 2];
         $32 = HEAP32[$1 + 120 >> 2];
         $33 = HEAP32[$1 + 124 >> 2];
         $34 = HEAP32[$1 + 112 >> 2];
         $35 = HEAP32[$1 + 116 >> 2];
         $36 = HEAP32[$1 + 104 >> 2];
         $42 = HEAP32[$1 + 108 >> 2];
         $43 = HEAP32[$1 + 96 >> 2];
         $44 = HEAP32[$1 + 100 >> 2];
         $45 = HEAP32[$1 + 88 >> 2];
         $46 = HEAP32[$1 + 92 >> 2];
         $47 = HEAP32[$1 + 80 >> 2];
         $48 = HEAP32[$1 + 84 >> 2];
         $49 = HEAP32[$1 + 72 >> 2];
         $50 = HEAP32[$1 + 76 >> 2];
         $54 = HEAP32[$1 + 64 >> 2];
         $55 = HEAP32[$1 + 68 >> 2];
         $56 = HEAP32[$1 + 8 >> 2];
         $57 = HEAP32[$1 + 12 >> 2];
         $58 = HEAP32[$1 >> 2];
         $59 = HEAP32[$1 + 4 >> 2];
         $60 = HEAP32[$1 + 20 >> 2];
         $61 = HEAP32[$1 + 16 >> 2];
         $62 = HEAP32[$1 + 272 >> 2];
         $63 = HEAP32[$1 + 276 >> 2];
         $11 = 4;
         $23 = 4;
         $16 = HEAP32[$1 + 152 >> 2];
         if ($16) {
          $8 = HEAP32[$1 + 148 >> 2];
          $3 = $16 << 2;
          $23 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($3);
          if (!$23) {
           break folding_inner3
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($23, $8, $3);
         }
         $64 = HEAP32[$1 + 136 >> 2];
         $65 = HEAP32[$1 + 140 >> 2];
         $24 = HEAP32[$1 + 336 >> 2];
         if ($24) {
          $8 = HEAP32[$1 + 332 >> 2];
          $3 = $24 << 2;
          $11 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($3);
          if (!$11) {
           break folding_inner3
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($11, $8, $3);
         }
         $14 = 4;
         $26 = 4;
         $27 = HEAP32[$1 + 348 >> 2];
         if ($27) {
          $8 = HEAP32[$1 + 344 >> 2];
          $3 = $27 << 3;
          $26 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($3);
          if (!$26) {
           break folding_inner3
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($26, $8, $3);
         }
         $5 = HEAP32[$1 + 360 >> 2];
         block76 : {
          if (!$5) {
           break block76
          }
          $8 = HEAP32[$1 + 356 >> 2];
          $51 = Math_imul($5, 12);
          $14 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($51);
          if (!$14) {
           break folding_inner3
          }
          $3 = 0;
          $17 = $5;
          while (1) {
           if (($3 | 0) == ($51 | 0)) {
            break block76
           }
           $13 = HEAP32[$8 + 8 >> 2];
           block79 : {
            if (!$13) {
             $4 = 1;
             break block79;
            }
            $25 = HEAP32[$8 + 4 >> 2];
            $4 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($13);
            if (!$4) {
             break block80
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($4, $25, $13);
           }
           $8 = $8 + 12 | 0;
           $25 = $3 + $14 | 0;
           HEAP32[$25 >> 2] = $13;
           HEAP32[$25 + 8 >> 2] = $13;
           HEAP32[$25 + 4 >> 2] = $4;
           $3 = $3 + 12 | 0;
           $17 = $17 - 1 | 0;
           if ($17) {
            continue
           }
           break;
          };
         }
         $8 = HEAP32[$1 + 372 >> 2];
         block82 : {
          if (!$8) {
           $3 = 4;
           break block82;
          }
          $4 = HEAP32[$1 + 368 >> 2];
          $13 = $8 << 3;
          $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($13);
          if (!$3) {
           break folding_inner3
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($3, $4, $13);
         }
         $4 = HEAP32[$7 + 60 >> 2];
         HEAP32[$0 + 216 >> 2] = HEAP32[$7 + 56 >> 2];
         HEAP32[$0 + 220 >> 2] = $4;
         $4 = HEAP32[$7 + 52 >> 2];
         HEAP32[$0 + 208 >> 2] = HEAP32[$7 + 48 >> 2];
         HEAP32[$0 + 212 >> 2] = $4;
         $4 = HEAP32[$7 + 44 >> 2];
         HEAP32[$0 + 200 >> 2] = HEAP32[$7 + 40 >> 2];
         HEAP32[$0 + 204 >> 2] = $4;
         $4 = HEAP32[$7 + 36 >> 2];
         HEAP32[$0 + 192 >> 2] = HEAP32[$7 + 32 >> 2];
         HEAP32[$0 + 196 >> 2] = $4;
         $4 = HEAP32[$7 + 28 >> 2];
         HEAP32[$0 + 184 >> 2] = HEAP32[$7 + 24 >> 2];
         HEAP32[$0 + 188 >> 2] = $4;
         $4 = HEAP32[$7 + 20 >> 2];
         HEAP32[$0 + 176 >> 2] = HEAP32[$7 + 16 >> 2];
         HEAP32[$0 + 180 >> 2] = $4;
         $4 = HEAP32[$7 + 12 >> 2];
         HEAP32[$0 + 168 >> 2] = HEAP32[$7 + 8 >> 2];
         HEAP32[$0 + 172 >> 2] = $4;
         $4 = HEAP32[$7 + 4 >> 2];
         HEAP32[$0 + 160 >> 2] = HEAP32[$7 >> 2];
         HEAP32[$0 + 164 >> 2] = $4;
         HEAP32[$0 + 288 >> 2] = $37;
         HEAP32[$0 + 284 >> 2] = $41;
         HEAP32[$0 + 280 >> 2] = $37;
         HEAP32[$0 + 224 >> 2] = $52;
         HEAP32[$0 + 228 >> 2] = $53;
         HEAP32[$0 + 312 >> 2] = $20;
         HEAP32[$0 + 308 >> 2] = $10;
         HEAP32[$0 + 304 >> 2] = $20;
         HEAP32[$0 + 300 >> 2] = $2;
         HEAP32[$0 + 296 >> 2] = $12;
         HEAP32[$0 + 292 >> 2] = $2;
         HEAP32[$0 + 60 >> 2] = $38;
         HEAP32[$0 + 56 >> 2] = $6;
         HEAP32[$0 + 52 >> 2] = $9;
         HEAP32[$0 + 48 >> 2] = $6;
         HEAP32[$0 + 44 >> 2] = $21;
         HEAP32[$0 + 40 >> 2] = $19;
         HEAP32[$0 + 36 >> 2] = $21;
         HEAP32[$0 + 32 >> 2] = $15;
         HEAP32[$0 + 28 >> 2] = $40;
         HEAP32[$0 + 24 >> 2] = $15;
         $2 = HEAP32[$1 + 236 >> 2];
         HEAP32[$0 + 232 >> 2] = HEAP32[$1 + 232 >> 2];
         HEAP32[$0 + 236 >> 2] = $2;
         $2 = HEAP32[$1 + 244 >> 2];
         HEAP32[$0 + 240 >> 2] = HEAP32[$1 + 240 >> 2];
         HEAP32[$0 + 244 >> 2] = $2;
         $2 = HEAP32[$1 + 252 >> 2];
         HEAP32[$0 + 248 >> 2] = HEAP32[$1 + 248 >> 2];
         HEAP32[$0 + 252 >> 2] = $2;
         $2 = HEAP32[$1 + 260 >> 2];
         HEAP32[$0 + 256 >> 2] = HEAP32[$1 + 256 >> 2];
         HEAP32[$0 + 260 >> 2] = $2;
         HEAP32[$0 + 376 >> 2] = $39;
         HEAP32[$0 + 264 >> 2] = $28;
         HEAP32[$0 + 268 >> 2] = $29;
         HEAP32[$0 + 324 >> 2] = $22;
         HEAP32[$0 + 320 >> 2] = $18;
         HEAP32[$0 + 316 >> 2] = $22;
         HEAP32[$0 + 272 >> 2] = $62;
         HEAP32[$0 + 276 >> 2] = $63;
         HEAP32[$0 + 20 >> 2] = $60;
         HEAP32[$0 + 16 >> 2] = $61;
         HEAP32[$0 + 372 >> 2] = $8;
         HEAP32[$0 + 368 >> 2] = $3;
         HEAP32[$0 + 364 >> 2] = $8;
         HEAP32[$0 + 360 >> 2] = $5;
         HEAP32[$0 + 356 >> 2] = $14;
         HEAP32[$0 + 352 >> 2] = $5;
         HEAP32[$0 + 348 >> 2] = $27;
         HEAP32[$0 + 344 >> 2] = $26;
         HEAP32[$0 + 340 >> 2] = $27;
         HEAP32[$0 + 336 >> 2] = $24;
         HEAP32[$0 + 332 >> 2] = $11;
         HEAP32[$0 + 328 >> 2] = $24;
         HEAP32[$0 + 152 >> 2] = $16;
         HEAP32[$0 + 148 >> 2] = $23;
         HEAP32[$0 + 144 >> 2] = $16;
         HEAP32[$0 + 136 >> 2] = $64;
         HEAP32[$0 + 140 >> 2] = $65;
         HEAP32[$0 + 128 >> 2] = $30;
         HEAP32[$0 + 132 >> 2] = $31;
         HEAP32[$0 + 120 >> 2] = $32;
         HEAP32[$0 + 124 >> 2] = $33;
         HEAP32[$0 + 112 >> 2] = $34;
         HEAP32[$0 + 116 >> 2] = $35;
         HEAP32[$0 + 104 >> 2] = $36;
         HEAP32[$0 + 108 >> 2] = $42;
         HEAP32[$0 + 96 >> 2] = $43;
         HEAP32[$0 + 100 >> 2] = $44;
         HEAP32[$0 + 88 >> 2] = $45;
         HEAP32[$0 + 92 >> 2] = $46;
         HEAP32[$0 + 80 >> 2] = $47;
         HEAP32[$0 + 84 >> 2] = $48;
         HEAP32[$0 + 72 >> 2] = $49;
         HEAP32[$0 + 76 >> 2] = $50;
         HEAP32[$0 + 64 >> 2] = $54;
         HEAP32[$0 + 68 >> 2] = $55;
         HEAP32[$0 + 8 >> 2] = $56;
         HEAP32[$0 + 12 >> 2] = $57;
         HEAP32[$0 >> 2] = $58;
         HEAP32[$0 + 4 >> 2] = $59;
         __stack_pointer = $7 + 96 | 0;
         return;
        }
        _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
        wasm2js_trap();
       }
       _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
       wasm2js_trap();
      }
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow();
      wasm2js_trap();
     }
     _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
     wasm2js_trap();
    }
    _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
    wasm2js_trap();
   }
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
   wasm2js_trap();
  }
  _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
  wasm2js_trap();
 }
 
 function _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($0, $1, $2) {
  var $3 = 0;
  $3 = __stack_pointer - 32 | 0;
  __stack_pointer = $3;
  HEAP32[$3 + 12 >> 2] = $1;
  HEAP32[$3 + 8 >> 2] = $0;
  HEAP32[$3 + 24 >> 2] = $3 + 8;
  $0 = 3;
  HEAP32[$3 + 28 >> 2] = $0;
  HEAP32[$3 + 16 >> 2] = $3 + 12;
  HEAP32[$3 + 20 >> 2] = 3;
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1048969, $3 + 16 | 0, $2);
  wasm2js_trap();
 }
 
 function rs_op($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = +$2;
  $3 = $3 | 0;
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0.0;
  $7 = __stack_pointer - 16 | 0;
  __stack_pointer = $7;
  $4 = $2 >= 0.0;
  $4 = $2 > 4294967295.0 ? -1 : $4 ? ($4 & $2 < 4294967296.0 ? ~~$2 >>> 0 : 0) : 0;
  block12 : {
   block4 : {
    block2 : {
     switch ($1 | 0) {
     case 1:
      HEAP32[$7 + 4 >> 2] = $4;
      $1 = 1;
      break block4;
     case 3:
      HEAP32[$7 + 4 >> 2] = $4;
      $1 = 3;
      break block4;
     case 4:
      HEAP32[$7 + 4 >> 2] = $4;
      $1 = 4;
      break block4;
     case 5:
      HEAP32[$7 + 4 >> 2] = $4;
      $1 = 5;
      break block4;
     case 7:
      $6 = $2 >= 0.0;
      block14 : {
       if ($6 & $2 < 18446744073709551615.0) {
        $3 = ~~$2 >>> 0;
        if (Math_abs($2) >= 1.0) {
         if ($2 > 0.0) {
          $13 = Math_min(Math_floor($2 * 2.3283064365386963e-10), 4294967295.0)
         } else {
          $13 = Math_ceil(($2 - +(~~$2 >>> 0 >>> 0)) * 2.3283064365386963e-10)
         }
         $4 = ~~$13 >>> 0;
        } else {
         $4 = 0
        }
        break block14;
       }
       $3 = 0;
       $4 = 0;
      }
      $1 = $2 > 18446744073709549568.0;
      HEAP32[$7 + 8 >> 2] = $1 ? -1 : $6 ? $3 : 0;
      HEAP32[$7 + 12 >> 2] = $1 ? -1 : $6 ? $4 : 0;
      $1 = 7;
      break block4;
     case 8:
      HEAP32[$7 + 8 >> 2] = $3;
      HEAP32[$7 + 4 >> 2] = $4;
      $1 = 8;
      break block4;
     case 13:
      $1 = HEAP32[$0 + 424 >> 2];
      if ($1 >>> 0 <= HEAPU32[$0 + 408 >> 2]) {
       HEAP32[$0 + 408 >> 2] = $1
      }
      $9 = HEAP32[$0 + 224 >> 2];
      $10 = HEAP32[$0 + 228 >> 2];
      $6 = HEAP32[$0 + 420 >> 2];
      block16 : {
       if (!$6) {
        break block16
       }
       $8 = HEAP32[$0 + 416 >> 2];
       $1 = $8;
       while (1) {
        block17 : {
         $3 = $1 + 224 | 0;
         $4 = HEAP32[$3 >> 2];
         $3 = HEAP32[$3 + 4 >> 2];
         if (($10 | 0) == ($3 | 0) & $4 >>> 0 > $9 >>> 0 | $3 >>> 0 > $10 >>> 0) {
          break block17
         }
         $1 = $1 + 392 | 0;
         $5 = $5 + 1 | 0;
         if (($6 | 0) != ($5 | 0)) {
          continue
         }
         break block16;
        }
        break;
       };
       _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($1);
       if ($5 + 1 >>> 0 < $6 >>> 0) {
        $4 = $6 + ($5 ^ -1) | 0;
        $1 = $1 + 392 | 0;
        while (1) {
         $3 = $1 + 224 | 0;
         $6 = HEAP32[$3 >> 2];
         $3 = HEAP32[$3 + 4 >> 2];
         block20 : {
          if (!(($10 | 0) == ($3 | 0) & $6 >>> 0 <= $9 >>> 0 | $3 >>> 0 < $10 >>> 0)) {
           _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($1);
           break block20;
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($8 + Math_imul($5, 392) | 0, $1, 392);
          $5 = $5 + 1 | 0;
         }
         $1 = $1 + 392 | 0;
         $4 = $4 - 1 | 0;
         if ($4) {
          continue
         }
         break;
        };
       }
       HEAP32[$0 + 420 >> 2] = $5;
      }
      HEAP32[$0 + 392 >> 2] = $9;
      HEAP32[$0 + 396 >> 2] = $10;
      break block12;
     case 14:
      $5 = Math_imul(HEAP32[$0 + 288 >> 2], 152);
      $4 = HEAP32[$0 + 284 >> 2];
      $3 = $5 + $4 | 0;
      while (1) {
       $1 = $4;
       if (!$5) {
        break block12
       }
       $5 = $5 - 152 | 0;
       $4 = $1 + 152 | 0;
       if (HEAPU8[$1 + 148 | 0] != 2) {
        continue
       }
       break;
      };
      block21 : {
       if (($3 | 0) == ($4 | 0)) {
        break block21
       }
       $8 = $3 - $4 | 0;
       $6 = ($8 >>> 0) / 152 | 0;
       $3 = HEAP32[$1 + 132 >> 2];
       if ($8 - 152 >>> 0 >= 152) {
        $9 = $6 & 1;
        $8 = ($5 >>> 0) / 304 << 1;
        $5 = $4;
        while (1) {
         if (HEAPU8[$5 + 148 | 0] == 2) {
          $6 = HEAP32[$5 + 132 >> 2];
          $11 = $6 >>> 0 < $3 >>> 0;
          $3 = $11 ? $3 : $6;
          $1 = $11 ? $1 : $5;
         }
         if (HEAPU8[$5 + 300 | 0] == 2) {
          $6 = HEAP32[$5 + 284 >> 2];
          $11 = $6 >>> 0 < $3 >>> 0;
          $3 = $11 ? $3 : $6;
          $1 = $11 ? $1 : $5 + 152 | 0;
         }
         $5 = $5 + 304 | 0;
         $10 = $10 + 2 | 0;
         if (($8 | 0) != ($10 | 0)) {
          continue
         }
         break;
        };
        if (!$9) {
         break block21
        }
       }
       $4 = Math_imul($10, 152) + $4 | 0;
       if (HEAPU8[$4 + 148 | 0] != 2) {
        break block21
       }
       $1 = HEAPU32[$4 + 132 >> 2] < $3 >>> 0 ? $1 : $4;
      }
      HEAP32[$7 + 4 >> 2] = HEAP32[$1 + 128 >> 2];
      $1 = 3;
      break block4;
     case 0:
      break block2;
     case 2:
     case 6:
     case 9:
     case 10:
     case 11:
     case 12:
      break block4;
     default:
      break block12;
     };
    }
    HEAP32[$7 + 4 >> 2] = $4;
    $1 = 0;
   }
   HEAP32[$7 >> 2] = $1;
   $11 = HEAP32[$0 + 224 >> 2];
   $12 = HEAP32[$0 + 228 >> 2];
   $3 = HEAP32[$0 + 408 >> 2];
   $6 = HEAP32[$0 + 424 >> 2];
   block26 : {
    if ($3 >>> 0 <= $6 >>> 0) {
     $1 = HEAP32[$0 + 396 >> 2];
     if (($1 | 0) == ($12 | 0) & HEAPU32[$0 + 392 >> 2] <= $11 >>> 0 | $1 >>> 0 < $12 >>> 0) {
      break block26
     }
    }
    if ($3 >>> 0 >= $6 >>> 0) {
     HEAP32[$0 + 408 >> 2] = $6;
     $3 = $6;
    }
    $9 = HEAP32[$0 + 420 >> 2];
    block28 : {
     if (!$9) {
      break block28
     }
     $5 = 0;
     $10 = HEAP32[$0 + 416 >> 2];
     $1 = $10;
     while (1) {
      block29 : {
       $4 = $1 + 224 | 0;
       $8 = HEAP32[$4 >> 2];
       $4 = HEAP32[$4 + 4 >> 2];
       if (($12 | 0) == ($4 | 0) & $8 >>> 0 > $11 >>> 0 | $4 >>> 0 > $12 >>> 0) {
        break block29
       }
       $1 = $1 + 392 | 0;
       $5 = $5 + 1 | 0;
       if (($9 | 0) != ($5 | 0)) {
        continue
       }
       break block28;
      }
      break;
     };
     _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($1);
     if ($5 + 1 >>> 0 < $9 >>> 0) {
      $4 = $9 + ($5 ^ -1) | 0;
      $1 = $1 + 392 | 0;
      while (1) {
       $8 = $1 + 224 | 0;
       $9 = HEAP32[$8 >> 2];
       $8 = HEAP32[$8 + 4 >> 2];
       block32 : {
        if (!(($12 | 0) == ($8 | 0) & $9 >>> 0 <= $11 >>> 0 | $8 >>> 0 < $12 >>> 0)) {
         _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($1);
         break block32;
        }
        _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($10 + Math_imul($5, 392) | 0, $1, 392);
        $5 = $5 + 1 | 0;
       }
       $1 = $1 + 392 | 0;
       $4 = $4 - 1 | 0;
       if ($4) {
        continue
       }
       break;
      };
     }
     HEAP32[$0 + 420 >> 2] = $5;
    }
    HEAP32[$0 + 392 >> 2] = $11;
    HEAP32[$0 + 396 >> 2] = $12;
   }
   if (($3 | 0) == HEAP32[$0 + 400 >> 2]) {
    _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTyymEEE8grow_oneCseywxCc024wH_14raftscope_core($0 + 400 | 0);
    $6 = HEAP32[$0 + 424 >> 2];
   }
   HEAP32[$0 + 424 >> 2] = $6 + 1;
   HEAP32[$0 + 408 >> 2] = $3 + 1;
   $3 = HEAP32[$0 + 404 >> 2] + Math_imul($3, 24) | 0;
   HEAP32[$3 >> 2] = $11;
   HEAP32[$3 + 4 >> 2] = $12;
   $1 = HEAP32[$7 + 4 >> 2];
   HEAP32[$3 + 8 >> 2] = HEAP32[$7 >> 2];
   HEAP32[$3 + 12 >> 2] = $1;
   $1 = HEAP32[$7 + 12 >> 2];
   HEAP32[$3 + 16 >> 2] = HEAP32[$7 + 8 >> 2];
   HEAP32[$3 + 20 >> 2] = $1;
   _RNvMNtCseywxCc024wH_14raftscope_core8timelineNtB2_2Op5apply($7, $0);
  }
  __stack_pointer = $7 + 16 | 0;
 }
 
 function _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTyymEEE8grow_oneCseywxCc024wH_14raftscope_core($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  $3 = HEAP32[$0 >> 2];
  $2 = $3 << 1;
  $2 = $2 >>> 0 <= 4 ? 4 : $2;
  _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($1 + 4 | 0, $3, HEAP32[$0 + 4 >> 2], $2, 8, 24);
  if (HEAP32[$1 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$1 + 8 >> 2]);
   wasm2js_trap();
  }
  $3 = HEAP32[$1 + 8 >> 2];
  HEAP32[$0 >> 2] = $2;
  HEAP32[$0 + 4 >> 2] = $3;
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _RNvMNtCseywxCc024wH_14raftscope_core8timelineNtB2_2Op5apply($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
  $11 = __stack_pointer - 16 | 0;
  __stack_pointer = $11;
  $4 = HEAP32[$1 + 288 >> 2];
  folding_inner1 : {
   folding_inner0 : {
    block13 : {
     block33 : {
      block24 : {
       block12 : {
        switch (HEAP32[$0 >> 2] - 1 | 0) {
        case 1:
         if (!$4) {
          break block13
         }
         while (1) {
          _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($1, $2);
          $2 = $2 + 1 | 0;
          if (($4 | 0) != ($2 | 0)) {
           continue
          }
          break;
         };
         break block13;
        case 5:
         $0 = Math_imul($4, 152);
         $3 = HEAP32[$1 + 284 >> 2];
         $6 = $0 + $3 | 0;
         while (1) {
          $2 = $3;
          if (!$0) {
           break block13
          }
          $0 = $0 - 152 | 0;
          $3 = $2 + 152 | 0;
          if (HEAPU8[$2 + 148 | 0] != 2) {
           continue
          }
          break;
         };
         block14 : {
          if (($3 | 0) == ($6 | 0)) {
           break block14
          }
          $4 = $6 - $3 | 0;
          $7 = ($4 >>> 0) / 152 | 0;
          $5 = HEAP32[$2 + 132 >> 2];
          $6 = 0;
          if ($4 - 152 >>> 0 >= 152) {
           $7 = $7 & 1;
           $9 = ($0 >>> 0) / 304 << 1;
           $0 = $3;
           while (1) {
            if (HEAPU8[$0 + 148 | 0] == 2) {
             $8 = HEAP32[$0 + 132 >> 2];
             $4 = $8 >>> 0 < $5 >>> 0;
             $5 = $4 ? $5 : $8;
             $2 = $4 ? $2 : $0;
            }
            if (HEAPU8[$0 + 300 | 0] == 2) {
             $8 = HEAP32[$0 + 284 >> 2];
             $4 = $8 >>> 0 < $5 >>> 0;
             $5 = $4 ? $5 : $8;
             $2 = $4 ? $2 : $0 + 152 | 0;
            }
            $0 = $0 + 304 | 0;
            $6 = $6 + 2 | 0;
            if (($9 | 0) != ($6 | 0)) {
             continue
            }
            break;
           };
           if (!$7) {
            break block14
           }
          }
          $0 = Math_imul($6, 152) + $3 | 0;
          if (HEAPU8[$0 + 148 | 0] != 2) {
           break block14
          }
          $2 = HEAPU32[$0 + 132 >> 2] < $5 >>> 0 ? $2 : $0;
         }
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, HEAP32[$2 + 128 >> 2]);
         break block13;
        case 6:
         $2 = HEAP32[$1 + 32 >> 2];
         if (!$2) {
          break block13
         }
         $5 = $2 << 6;
         $2 = HEAP32[$1 + 28 >> 2];
         $6 = HEAP32[$0 + 8 >> 2];
         $4 = HEAP32[$0 + 12 >> 2];
         $0 = 0;
         while (1) {
          block19 : {
           $3 = HEAP32[$2 >> 2];
           if (($3 | 0) != -1) {
            $7 = $2 + 24 | 0;
            if (($6 | 0) == HEAP32[$7 >> 2] & ($4 | 0) == HEAP32[$7 + 4 >> 2]) {
             break block19
            }
           }
           $2 = $2 - -64 | 0;
           $0 = $0 + 1 | 0;
           $5 = $5 + -64 | 0;
           if ($5) {
            continue
           }
           break block13;
          }
          break;
         };
         if (($3 | 0) > 0) {
          __inlined_func$_RNvCs9hJ03s5DiqP_7___rustc14___rust_dealloc$37 : {
           $6 = HEAP32[$2 + 4 >> 2];
           $4 = HEAP32[$6 - 4 >> 2];
           $5 = $4 & -8;
           $3 = $3 << 3;
           $4 = $4 & 3;
           if ($5 >>> 0 >= $3 + ($4 ? 4 : 8) >>> 0) {
            if (($4 | 0) != 0 & $3 + 39 >>> 0 < $5 >>> 0) {
             break folding_inner1
            }
            _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($6);
            break __inlined_func$_RNvCs9hJ03s5DiqP_7___rustc14___rust_dealloc$37;
           }
           break folding_inner0;
          }
         }
         HEAP32[$2 >> 2] = -1;
         $2 = HEAP32[$1 + 44 >> 2];
         if (($2 | 0) == HEAP32[$1 + 36 >> 2]) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($1 + 36 | 0)
         }
         HEAP32[$1 + 44 >> 2] = $2 + 1;
         HEAP32[HEAP32[$1 + 40 >> 2] + ($2 << 2) >> 2] = $0;
         HEAP32[$1 + 60 >> 2] = HEAP32[$1 + 60 >> 2] - 1;
         break block13;
        case 8:
         if (!$4) {
          break block13
         }
         $0 = HEAP32[$1 + 284 >> 2];
         $1 = $0;
         $3 = Math_imul($4, 152);
         $6 = $3 - 152 | 0;
         $2 = ($6 >>> 0) / 152 | 0;
         if (($2 & 7) != 7) {
          $2 = 0 - ($2 + 1 & 7) | 0;
          while (1) {
           HEAP32[$1 + 144 >> 2] = 0;
           $1 = $1 + 152 | 0;
           $2 = $2 + 1 | 0;
           if ($2) {
            continue
           }
           break;
          };
         }
         if ($6 >>> 0 < 1064) {
          break block13
         }
         $0 = $0 + $3 | 0;
         while (1) {
          HEAP32[$1 + 1208 >> 2] = 0;
          HEAP32[$1 + 1056 >> 2] = 0;
          HEAP32[$1 + 904 >> 2] = 0;
          HEAP32[$1 + 752 >> 2] = 0;
          HEAP32[$1 + 600 >> 2] = 0;
          HEAP32[$1 + 448 >> 2] = 0;
          HEAP32[$1 + 296 >> 2] = 0;
          HEAP32[$1 + 144 >> 2] = 0;
          $1 = $1 + 1216 | 0;
          if (($0 | 0) != ($1 | 0)) {
           continue
          }
          break;
         };
         break block13;
        case 9:
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13spread_timers($1);
         break block13;
        case 10:
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13spread_timers($1);
         $6 = HEAP32[$1 + 284 >> 2];
         $9 = HEAP32[$1 + 288 >> 2];
         $7 = Math_imul($9, 152);
         $10 = $6 + $7 | 0;
         $5 = HEAP32[$1 + 224 >> 2];
         $4 = HEAP32[$1 + 228 >> 2];
         $0 = 0;
         $2 = $6;
         while (1) {
          if (($0 | 0) == ($7 | 0)) {
           $0 = 0;
           $5 = 8;
           break block24;
          }
          $0 = $0 + 152 | 0;
          $3 = $2 + 24 | 0;
          $2 = $2 + 152 | 0;
          $8 = HEAP32[$3 >> 2];
          $3 = HEAP32[$3 + 4 >> 2];
          if (($8 & $3) == -1) {
           continue
          }
          if (($3 | 0) == ($4 | 0) & $5 >>> 0 >= $8 >>> 0 | $3 >>> 0 < $4 >>> 0) {
           continue
          }
          break;
         };
         $7 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(32);
         if ($7) {
          $2 = $0 + $6 | 0;
          HEAP32[$7 >> 2] = $8;
          HEAP32[$7 + 4 >> 2] = $3;
          HEAP32[$11 + 12 >> 2] = 1;
          HEAP32[$11 + 8 >> 2] = $7;
          HEAP32[$11 + 4 >> 2] = 4;
          $3 = 1;
          while (1) {
           if (($2 | 0) != ($10 | 0)) {
            $0 = $2 + 24 | 0;
            $2 = $2 + 152 | 0;
            $8 = HEAP32[$0 >> 2];
            $0 = HEAP32[$0 + 4 >> 2];
            if (($8 & $0) == -1) {
             continue
            }
            if (($0 | 0) == ($4 | 0) & $5 >>> 0 >= $8 >>> 0 | $0 >>> 0 < $4 >>> 0) {
             continue
            }
            if (($3 | 0) == HEAP32[$11 + 4 >> 2]) {
             _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($11 + 4 | 0, $3, 1, 8, 8);
             $7 = HEAP32[$11 + 8 >> 2];
            }
            $12 = ($3 << 3) + $7 | 0;
            HEAP32[$12 >> 2] = $8;
            HEAP32[$12 + 4 >> 2] = $0;
            $3 = $3 + 1 | 0;
            HEAP32[$11 + 12 >> 2] = $3;
            continue;
           }
           break;
          };
          $5 = HEAP32[$11 + 8 >> 2];
          $0 = HEAP32[$11 + 4 >> 2];
          if ($3 >>> 0 < 2) {
           break block24
          }
          block29 : {
           if ($3 >>> 0 >= 21) {
            _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortyNvYyNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($5, $3);
            break block29;
           }
           $7 = $5 + 8 | 0;
           $14 = ($3 << 3) + $5 | 0;
           $4 = 0;
           while (1) {
            $2 = $7 - 8 | 0;
            $3 = HEAP32[$2 >> 2];
            $8 = HEAP32[$7 + 4 >> 2];
            $10 = HEAP32[$2 + 4 >> 2];
            $2 = $10;
            $12 = HEAP32[$7 >> 2];
            if (!(($8 | 0) == ($2 | 0) & $3 >>> 0 <= $12 >>> 0 | $2 >>> 0 < $8 >>> 0)) {
             $2 = $4;
             block32 : {
              while (1) {
               $13 = ($2 + $5 | 0) + 8 | 0;
               HEAP32[$13 >> 2] = $3;
               HEAP32[$13 + 4 >> 2] = $10;
               $3 = $5;
               if (!$2) {
                break block32
               }
               $2 = $2 - 8 | 0;
               $13 = $2 + $5 | 0;
               $10 = $13;
               $3 = HEAP32[$10 >> 2];
               $10 = HEAP32[$10 + 4 >> 2];
               if (($10 | 0) == ($8 | 0) & $3 >>> 0 > $12 >>> 0 | $8 >>> 0 < $10 >>> 0) {
                continue
               }
               break;
              };
              $3 = $13 + 8 | 0;
             }
             $2 = $3;
             HEAP32[$2 >> 2] = $12;
             HEAP32[$2 + 4 >> 2] = $8;
            }
            $4 = $4 + 8 | 0;
            $7 = $7 + 8 | 0;
            if (($14 | 0) != ($7 | 0)) {
             continue
            }
            break;
           };
          }
          if (!$9) {
           break block33
          }
          $2 = $6;
          $7 = Math_imul($9, 152);
          $8 = $7 - 152 | 0;
          $3 = ($8 >>> 0) / 152 | 0;
          if (($3 & 3) != 3) {
           $3 = 0 - ($3 + 1 & 3) | 0;
           while (1) {
            $4 = $2 + 24 | 0;
            if (!(HEAP32[$4 >> 2] != HEAP32[$5 + 8 >> 2] | HEAP32[$4 + 4 >> 2] != HEAP32[$5 + 12 >> 2])) {
             $10 = HEAP32[$5 + 4 >> 2];
             HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
             HEAP32[$4 + 4 >> 2] = $10;
            }
            $2 = $2 + 152 | 0;
            $3 = $3 + 1 | 0;
            if ($3) {
             continue
            }
            break;
           };
          }
          if ($8 >>> 0 < 456) {
           break block24
          }
          $6 = $6 + $7 | 0;
          while (1) {
           $3 = $2 + 24 | 0;
           if (!(HEAP32[$3 >> 2] != HEAP32[$5 + 8 >> 2] | HEAP32[$3 + 4 >> 2] != HEAP32[$5 + 12 >> 2])) {
            $4 = HEAP32[$5 + 4 >> 2];
            HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
            HEAP32[$3 + 4 >> 2] = $4;
           }
           $3 = $2 + 176 | 0;
           if (!(HEAP32[$3 >> 2] != HEAP32[$5 + 8 >> 2] | HEAP32[$3 + 4 >> 2] != HEAP32[$5 + 12 >> 2])) {
            $4 = HEAP32[$5 + 4 >> 2];
            HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
            HEAP32[$3 + 4 >> 2] = $4;
           }
           $3 = $2 + 328 | 0;
           if (!(HEAP32[$3 >> 2] != HEAP32[$5 + 8 >> 2] | HEAP32[$3 + 4 >> 2] != HEAP32[$5 + 12 >> 2])) {
            $4 = HEAP32[$5 + 4 >> 2];
            HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
            HEAP32[$3 + 4 >> 2] = $4;
           }
           $3 = $2 + 480 | 0;
           if (!(HEAP32[$3 >> 2] != HEAP32[$5 + 8 >> 2] | HEAP32[$3 + 4 >> 2] != HEAP32[$5 + 12 >> 2])) {
            $4 = HEAP32[$5 + 4 >> 2];
            HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
            HEAP32[$3 + 4 >> 2] = $4;
           }
           $2 = $2 + 608 | 0;
           if (($2 | 0) != ($6 | 0)) {
            continue
           }
           break;
          };
          break block24;
         }
         _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
         wasm2js_trap();
        case 7:
         $2 = HEAP32[$0 + 4 >> 2];
         if ($2 >>> 0 >= $4 >>> 0) {
          break block13
         }
         HEAP32[(HEAP32[$1 + 284 >> 2] + Math_imul($2, 152) | 0) + 144 >> 2] = HEAP32[$0 + 8 >> 2];
         break block13;
        case 4:
         $0 = HEAP32[$0 + 4 >> 2];
         if ($0 >>> 0 >= $4 >>> 0) {
          break block13
         }
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, $0);
         break block13;
        case 3:
         $0 = HEAP32[$0 + 4 >> 2];
         if ($0 >>> 0 >= $4 >>> 0) {
          break block13
         }
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim7timeout($1, $0);
         break block13;
        case 2:
         $3 = HEAP32[$0 + 4 >> 2];
         if ($3 >>> 0 >= $4 >>> 0) {
          break block13
         }
         $2 = HEAP32[$1 + 284 >> 2];
         $0 = $2 + Math_imul($3, 152) | 0;
         HEAP32[$0 + 24 >> 2] = 0;
         HEAP32[$0 + 28 >> 2] = 0;
         $6 = HEAPU8[$0 + 148 | 0];
         HEAP8[$0 + 148 | 0] = 3;
         _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($0);
         block40 : {
          if (($6 | 0) != 2) {
           break block40
          }
          if (HEAP32[$1 >> 2]) {
           break block40
          }
          $0 = Math_imul($4, 152);
          while (1) {
           if ($0) {
            $0 = $0 - 152 | 0;
            $6 = $2 + 148 | 0;
            $2 = $2 + 152 | 0;
            if (HEAPU8[$6 | 0] != 2) {
             continue
            }
            break block40;
           }
           break;
          };
          HEAP32[$1 >> 2] = 1;
          HEAP32[$1 + 4 >> 2] = 0;
          $0 = HEAP32[$1 + 228 >> 2];
          HEAP32[$1 + 8 >> 2] = HEAP32[$1 + 224 >> 2];
          HEAP32[$1 + 12 >> 2] = $0;
         }
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $3);
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($1, $3);
         break block13;
        case 0:
         $0 = HEAP32[$0 + 4 >> 2];
         if ($0 >>> 0 >= $4 >>> 0) {
          break block13
         }
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($1, $0);
         break block13;
        default:
         $3 = HEAP32[$0 + 4 >> 2];
         if ($3 >>> 0 >= $4 >>> 0) {
          break block13
         }
         $2 = HEAP32[$1 + 284 >> 2];
         $0 = $2 + Math_imul($3, 152) | 0;
         HEAP32[$0 + 24 >> 2] = 0;
         HEAP32[$0 + 28 >> 2] = 0;
         $6 = HEAPU8[$0 + 148 | 0];
         HEAP8[$0 + 148 | 0] = 3;
         _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($0);
         block42 : {
          if (($6 | 0) != 2) {
           break block42
          }
          if (HEAP32[$1 >> 2]) {
           break block42
          }
          $0 = Math_imul($4, 152);
          while (1) {
           if ($0) {
            $0 = $0 - 152 | 0;
            $6 = $2 + 148 | 0;
            $2 = $2 + 152 | 0;
            if (HEAPU8[$6 | 0] != 2) {
             continue
            }
            break block42;
           }
           break;
          };
          HEAP32[$1 >> 2] = 1;
          HEAP32[$1 + 4 >> 2] = 0;
          $0 = HEAP32[$1 + 228 >> 2];
          HEAP32[$1 + 8 >> 2] = HEAP32[$1 + 224 >> 2];
          HEAP32[$1 + 12 >> 2] = $0;
         }
         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $3);
         break block13;
        case 11:
         break block12;
        };
       }
       if ($4 >>> 0 < 2) {
        break block13
       }
       $2 = 1;
       block55 : {
        block49 : {
         block44 : {
          while (1) {
           $3 = $2;
           $6 = HEAP32[$1 + 288 >> 2];
           if ($2 >>> 0 >= $6 >>> 0) {
            break block44
           }
           $2 = HEAP32[$1 + 284 >> 2];
           $0 = $2 + Math_imul($3, 152) | 0;
           HEAP32[$0 + 24 >> 2] = 0;
           HEAP32[$0 + 28 >> 2] = 0;
           $5 = HEAPU8[$0 + 148 | 0];
           HEAP8[$0 + 148 | 0] = 3;
           _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($0);
           block45 : {
            if (($5 | 0) != 2) {
             break block45
            }
            if (HEAP32[$1 >> 2]) {
             break block45
            }
            $0 = Math_imul($6, 152);
            while (1) {
             if ($0) {
              $0 = $0 - 152 | 0;
              $6 = $2 + 148 | 0;
              $2 = $2 + 152 | 0;
              if (HEAPU8[$6 | 0] != 2) {
               continue
              }
              break block45;
             }
             break;
            };
            HEAP32[$1 >> 2] = 1;
            HEAP32[$1 + 4 >> 2] = 0;
            $0 = HEAP32[$1 + 228 >> 2];
            HEAP32[$1 + 8 >> 2] = HEAP32[$1 + 224 >> 2];
            HEAP32[$1 + 12 >> 2] = $0;
           }
           _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $3);
           _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($1, $3);
           $2 = $3 + 1 | 0;
           if (($4 | 0) != ($2 | 0)) {
            continue
           }
           break;
          };
          _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim7timeout($1, 0);
          $3 = HEAP32[$1 + 288 >> 2];
          $5 = $3 >>> 0 <= 1 ? 1 : $3;
          $6 = HEAP32[$1 + 284 >> 2];
          $2 = $6 + 284 | 0;
          $0 = 1;
          block47 : {
           while (1) {
            if (($0 | 0) == ($5 | 0)) {
             break block47
            }
            HEAP32[$2 >> 2] = 2;
            $7 = $2 - 132 | 0;
            HEAP32[$7 >> 2] = 1;
            HEAP32[$7 + 4 >> 2] = 0;
            $2 = $2 + 152 | 0;
            $0 = $0 + 1 | 0;
            if (($4 | 0) != ($0 | 0)) {
             continue
            }
            break;
           };
           if ($3) {
            $0 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
            if (!$0) {
             break block49
            }
            $2 = $4 - 1 | 0;
            $0 = memset($0, 1, $2);
            HEAP8[$0 + $2 | 0] = 1;
            $3 = HEAP32[$6 + 44 >> 2];
            if ($3) {
             $7 = HEAP32[$6 + 48 >> 2];
             $9 = HEAP32[$7 - 4 >> 2];
             $5 = $9 & -8;
             $9 = $9 & 3;
             if ($5 >>> 0 < $3 + ($9 ? 4 : 8) >>> 0) {
              break folding_inner0
             }
             if (($9 | 0) != 0 & $5 >>> 0 > $3 + 39 >>> 0) {
              break folding_inner1
             }
             _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
            }
            HEAP32[$6 + 52 >> 2] = $4;
            HEAP32[$6 + 48 >> 2] = $0;
            HEAP32[$6 + 44 >> 2] = $4;
            $3 = 0;
            HEAP8[$0 | 0] = 0;
            HEAP32[$6 + 140 >> 2] = $2;
            if (($4 | 0) != 2) {
             $7 = $4 >>> 0 <= 3 ? 3 : $4;
             $2 = 2;
             while (1) {
              $6 = $2;
              $5 = HEAP32[$1 + 288 >> 2];
              if ($2 >>> 0 >= $5 >>> 0) {
               break block55
              }
              $2 = HEAP32[$1 + 284 >> 2];
              $0 = $2 + Math_imul($6, 152) | 0;
              HEAP32[$0 + 24 >> 2] = 0;
              HEAP32[$0 + 28 >> 2] = 0;
              $9 = HEAPU8[$0 + 148 | 0];
              HEAP8[$0 + 148 | 0] = 3;
              _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($0);
              block56 : {
               if (($9 | 0) != 2) {
                break block56
               }
               if (HEAP32[$1 >> 2]) {
                break block56
               }
               $0 = Math_imul($5, 152);
               while (1) {
                if ($0) {
                 $0 = $0 - 152 | 0;
                 $5 = $2 + 148 | 0;
                 $2 = $2 + 152 | 0;
                 if (HEAPU8[$5 | 0] != 2) {
                  continue
                 }
                 break block56;
                }
                break;
               };
               HEAP32[$1 >> 2] = 1;
               HEAP32[$1 + 4 >> 2] = 0;
               $0 = HEAP32[$1 + 228 >> 2];
               HEAP32[$1 + 8 >> 2] = HEAP32[$1 + 224 >> 2];
               HEAP32[$1 + 12 >> 2] = $0;
              }
              _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $6);
              $2 = $6 + 1 | 0;
              if (($7 | 0) != ($2 | 0)) {
               continue
              }
              break;
             };
            }
            _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13become_leader($1, 0);
            _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, 0);
            _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, 0);
            _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, 0);
            while (1) {
             _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $3);
             $3 = $3 + 1 | 0;
             if (($4 | 0) != ($3 | 0)) {
              continue
             }
             break;
            };
            break block13;
           }
           _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(0, 0, 1054940);
           wasm2js_trap();
          }
          _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, $3, 1054956);
          wasm2js_trap();
         }
         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $6, 1055080);
         wasm2js_trap();
        }
        _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
        wasm2js_trap();
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $5, 1055080);
       wasm2js_trap();
      }
      if (!$9) {
       break block33
      }
      $2 = 0;
      while (1) {
       _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $2);
       $2 = $2 + 1 | 0;
       if (($9 | 0) != ($2 | 0)) {
        continue
       }
       break;
      };
     }
     if (!$0) {
      break block13
     }
     $2 = HEAP32[$5 - 4 >> 2];
     $1 = $2 & -8;
     $0 = $0 << 3;
     $2 = $2 & 3;
     if ($1 >>> 0 < $0 + ($2 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($2 | 0) != 0 & $1 >>> 0 > $0 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    __stack_pointer = $11 + 16 | 0;
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function rs_out($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 464 >> 2];
 }
 
 function rs_out_len($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 468 >> 2];
 }
 
 function rs_pick($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = Math_fround($1);
  $2 = Math_fround($2);
  $3 = Math_fround($3);
  $4 = Math_fround($4);
  var $5 = Math_fround(0), $6 = 0, $7 = Math_fround(0), $8 = 0, $9 = Math_fround(0), $10 = 0, $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0), $19 = 0.0, $20 = Math_fround(0), $21 = Math_fround(0), $22 = 0, $23 = 0.0, $24 = Math_fround(0), $25 = 0, $26 = 0;
  $6 = HEAP32[$0 + 288 >> 2];
  block1 : {
   if (!($1 >= Math_fround(760.0))) {
    $5 = Math_fround($2 + Math_fround(-120.0));
    $9 = $1 != $1 ? $5 : $1;
    $5 = $5 != $5 ? $9 : $5;
    $5 = $5 > $9 ? $9 : $5;
    $5 = $5 != $5 ? Math_fround(120.0) : $5;
    $9 = $5 > Math_fround(120.0) ? $5 : Math_fround(120.0);
    $17 = Math_fround($9 + Math_fround(4.0));
    $12 = Math_fround(Math_fround($2 - $9) + Math_fround(-12.0));
    $7 = Math_fround(12.0);
    $5 = $9;
    $2 = Math_fround(.3100000023841858);
    break block1;
   }
   $1 = Math_fround($1 * Math_fround(.5199999809265137));
   $5 = $2 != $2 ? $1 : $2;
   $1 = $1 != $1 ? $5 : $1;
   $5 = $1 > $5 ? $5 : $1;
   $7 = Math_fround($5 + Math_fround(40.0));
   $12 = Math_fround($2 + Math_fround(-24.0));
   $17 = Math_fround(12.0);
   $9 = $2;
   $1 = $5;
   $2 = Math_fround(.30000001192092896);
  }
  $14 = Math_fround($2 * $5);
  if ($6 >>> 0 <= 1) {
   $2 = Math_fround($5 * Math_fround(.08500000089406967))
  } else {
   $2 = Math_fround($5 * Math_fround(.08500000089406967));
   $5 = Math_fround(Math_fround(_RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf(Math_fround(Math_fround(3.1415927410125732) / Math_fround($6 >>> 0))) * $14) * Math_fround(.8199999928474426));
   $5 = $5 != $5 ? $2 : $5;
   $2 = $2 != $2 ? $5 : $2;
   $2 = $2 > $5 ? $5 : $2;
  }
  $2 = $2 != $2 ? Math_fround(1.5) : $2;
  $21 = $2 > Math_fround(1.5) ? $2 : Math_fround(1.5);
  $5 = Math_fround($9 * Math_fround(.5));
  $9 = Math_fround($1 * Math_fround(.5));
  block6 : {
   block5 : {
    if (!$6) {
     $1 = Math_fround(3402823466385288598117041.0e14);
     break block5;
    }
    $15 = Math_fround(Math_fround(Math_max($21, Math_fround(6.0))) + Math_fround(6.0));
    $10 = Math_imul($6, 152);
    $16 = HEAP32[$0 + 284 >> 2] + 128 | 0;
    $18 = Math_fround($6 >>> 0);
    $1 = Math_fround(3402823466385288598117041.0e14);
    while (1) {
     $8 = HEAP32[$16 >> 2];
     $2 = Math_fround(Math_fround(Math_fround(Math_fround($8 >>> 0) / $18) + Math_fround(.75)) * Math_fround(6.2831854820251465));
     $20 = _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($2);
     $23 = +($8 >>> 0) + 1.0;
     $2 = Math_fround(Math_fround($9 + Math_fround($14 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($2))) - $3);
     $24 = Math_fround($2 * $2);
     $2 = Math_fround(Math_fround($5 + Math_fround($14 * $20)) - $4);
     $2 = Math_fround(Math_sqrt(Math_fround($24 + Math_fround($2 * $2))));
     $8 = $2 < $15 & $1 > $2;
     $19 = $8 ? $23 : $19;
     $1 = $8 ? $2 : $1;
     $16 = $16 + 152 | 0;
     $10 = $10 - 152 | 0;
     if ($10) {
      continue
     }
     break;
    };
    if ($19 != 0.0) {
     break block6
    }
   }
   block7 : {
    if (!($3 >= $7)) {
     break block7
    }
    if (!(Math_fround($7 + Math_fround(60.0)) >= $3)) {
     break block7
    }
    if ($6 >>> 0 > 12) {
     break block7
    }
    if (!(Math_fround($17 + Math_fround(20.0)) < $4)) {
     break block7
    }
    $2 = Math_fround(Math_fround($12 + Math_fround(-22.0)) / Math_fround($6 >>> 0));
    $2 = $2 < Math_fround(16.0) ? Math_fround(16.0) : $2;
    $2 = Math_fround(Math_fround(Math_fround($4 - $17) + Math_fround(-20.0)) / ($2 > Math_fround(34.0) ? Math_fround(34.0) : $2));
    $10 = $2 >= Math_fround(0.0);
    $11 = ~~$2 >>> 0;
    block9 : {
     if ($2 < Math_fround(4294967296.0) & $10) {
      break block9
     }
     $11 = 0;
    }
    $10 = $2 > Math_fround(4294967040.0) ? -1 : $10 ? $11 : 0;
    if ($10 >>> 0 >= $6 >>> 0) {
     break block7
    }
    $19 = +($10 >>> 0) + 1.0;
    break block6;
   }
   $10 = HEAP32[$0 + 28 >> 2];
   $25 = $10 + (HEAP32[$0 + 32 >> 2] << 6) | 0;
   $17 = Math_fround(($6 >>> 0 <= 1 ? 1 : $6) >>> 0);
   $6 = HEAP32[$0 + 224 >> 2];
   $16 = HEAP32[$0 + 228 >> 2];
   while (1) {
    $0 = $10;
    if (($0 | 0) == ($25 | 0)) {
     break block6
    }
    $10 = $0 - -64 | 0;
    if (HEAP32[$0 >> 2] == -1) {
     continue
    }
    $2 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPU32[$0 + 48 >> 2]) / $17) + Math_fround(.75)) * Math_fround(6.2831854820251465));
    $15 = _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($2);
    $12 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPU32[$0 + 52 >> 2]) / $17) + Math_fround(.75)) * Math_fround(6.2831854820251465));
    $18 = _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($12);
    $7 = Math_fround($9 + Math_fround($14 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($2)));
    $12 = Math_fround(Math_fround($9 + Math_fround($14 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($12))) - $7);
    $2 = Math_fround($5 + Math_fround($14 * $18));
    $18 = Math_fround($5 + Math_fround($14 * $15));
    $15 = Math_fround($2 - $18);
    $2 = Math_fround(Math_sqrt(Math_fround(Math_fround($12 * $12) + Math_fround($15 * $15))));
    $2 = $2 != $2 ? Math_fround(1.0000000474974513e-03) : $2;
    $2 = Math_fround($21 / ($2 > Math_fround(1.0000000474974513e-03) ? $2 : Math_fround(1.0000000474974513e-03)));
    $2 = $2 != $2 ? Math_fround(.44999998807907104) : $2;
    $2 = $2 < Math_fround(.44999998807907104) ? $2 : Math_fround(.44999998807907104);
    $20 = $7;
    $8 = HEAP32[$0 + 32 >> 2];
    $11 = $6 - $8 | 0;
    $26 = $11;
    $22 = HEAP32[$0 + 36 >> 2];
    $13 = $16 - ($22 + ($6 >>> 0 < $8 >>> 0) | 0) | 0;
    $11 = ($16 | 0) == ($13 | 0) & $6 >>> 0 < $11 >>> 0 | $16 >>> 0 < $13 >>> 0;
    $7 = Math_fround(+(($11 ? 0 : $26) >>> 0) + +(($11 ? 0 : $13) >>> 0) * 4294967296.0);
    $13 = HEAP32[$0 + 40 >> 2];
    $11 = $13 - $8 | 0;
    $8 = HEAP32[$0 + 44 >> 2] - (($8 >>> 0 > $13 >>> 0) + $22 | 0) | 0;
    $13 = !$8 & $11 >>> 0 > 1 | ($8 | 0) != 0;
    $7 = Math_fround($7 / Math_fround(+(($13 ? $11 : 1) >>> 0) + +(($13 ? $8 : 0) >>> 0) * 4294967296.0));
    $2 = Math_fround($2 + Math_fround(($7 > Math_fround(1.0) ? Math_fround(1.0) : $7) * Math_fround(Math_fround(1.0) - Math_fround($2 + $2))));
    $7 = Math_fround(Math_fround($20 + Math_fround($12 * $2)) - $3);
    $2 = Math_fround(Math_fround($18 + Math_fround($15 * $2)) - $4);
    $2 = Math_fround(Math_sqrt(Math_fround(Math_fround($7 * $7) + Math_fround($2 * $2))));
    if (!($2 < Math_fround(12.0))) {
     continue
    }
    if (!($1 > $2)) {
     continue
    }
    $19 = -1.0 - (+HEAPU32[$0 + 24 >> 2] + +HEAPU32[$0 + 28 >> 2] * 4294967296.0);
    $1 = $2;
    continue;
   };
  }
  return +$19;
 }
 
 function rs_preferred_height($0) {
  $0 = Math_fround($0);
  if (!($0 >= Math_fround(760.0))) {
   return Math_fround(Math_fround($0 + Math_fround(250.0)))
  }
  $0 = Math_fround($0 * Math_fround(.5));
  $0 = $0 < Math_fround(380.0) ? Math_fround(380.0) : $0;
  return Math_fround($0 > Math_fround(620.0) ? Math_fround(620.0) : $0);
 }
 
 function rs_render($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = Math_fround($1);
  $2 = Math_fround($2);
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0), $19 = Math_fround(0), $20 = 0, $21 = 0, $22 = Math_fround(0), $23 = Math_fround(0), $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = 0, $28 = Math_fround(0), $29 = 0, $30 = 0, $31 = Math_fround(0), $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = Math_fround(0), $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = 0, $47 = Math_fround(0), $48 = 0, $49 = 0, $50 = 0, $51 = Math_fround(0), $52 = Math_fround(0), $53 = Math_fround(0), $54 = Math_fround(0);
  $11 = __stack_pointer + -64 | 0;
  __stack_pointer = $11;
  HEAP32[$0 + 452 >> 2] = 0;
  HEAP32[$0 + 456 >> 2] = 0;
  HEAP32[$0 + 440 >> 2] = 0;
  $15 = HEAP32[$0 + 288 >> 2];
  block1 : {
   if (!($1 >= Math_fround(760.0))) {
    $12 = Math_fround($2 + Math_fround(-120.0));
    $18 = $1 != $1 ? $12 : $1;
    $12 = $12 != $12 ? $18 : $12;
    $12 = $12 > $18 ? $18 : $12;
    $12 = $12 != $12 ? Math_fround(120.0) : $12;
    $19 = $12 > Math_fround(120.0) ? $12 : Math_fround(120.0);
    $40 = Math_fround($19 + Math_fround(4.0));
    $37 = Math_fround(Math_fround($2 - $19) + Math_fround(-12.0));
    $41 = Math_fround($1 + Math_fround(-24.0));
    $43 = Math_fround(12.0);
    $12 = $19;
    $2 = Math_fround(.3100000023841858);
    break block1;
   }
   $12 = Math_fround($1 * Math_fround(.5199999809265137));
   $18 = $2 != $2 ? $12 : $2;
   $12 = $12 != $12 ? $18 : $12;
   $12 = $12 > $18 ? $18 : $12;
   $43 = Math_fround($12 + Math_fround(40.0));
   $41 = Math_fround(Math_fround($1 - $12) + Math_fround(-52.0));
   $37 = Math_fround($2 + Math_fround(-24.0));
   $40 = Math_fround(12.0);
   $19 = $2;
   $1 = $12;
   $2 = Math_fround(.30000001192092896);
  }
  $25 = Math_fround($2 * $12);
  if ($15 >>> 0 <= 1) {
   $2 = Math_fround($12 * Math_fround(.08500000089406967))
  } else {
   $2 = Math_fround($12 * Math_fround(.08500000089406967));
   $12 = Math_fround(Math_fround(_RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf(Math_fround(Math_fround(3.1415927410125732) / Math_fround($15 >>> 0))) * $25) * Math_fround(.8199999928474426));
   $12 = $12 != $12 ? $2 : $12;
   $2 = $2 != $2 ? $12 : $2;
   $2 = $2 > $12 ? $12 : $2;
  }
  $2 = $2 != $2 ? Math_fround(1.5) : $2;
  $18 = $2 > Math_fround(1.5) ? $2 : Math_fround(1.5);
  $21 = HEAP32[$0 + 224 >> 2];
  $27 = HEAP32[$0 + 228 >> 2];
  $51 = Math_fround(+HEAPU32[$0 + 160 >> 2] + +HEAPU32[$0 + 164 >> 2] * 4294967296.0);
  if (HEAPU32[$0 + 432 >> 2] <= 9) {
   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 432 | 0, 0, 10, 4, 4);
   $5 = HEAP32[$0 + 440 >> 2];
  }
  $9 = $5 + 10 | 0;
  HEAP32[$0 + 440 >> 2] = $9;
  $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
  HEAP32[$5 + 32 >> 2] = 0;
  HEAP32[$5 + 36 >> 2] = 0;
  HEAP32[$5 + 24 >> 2] = 1065353216;
  HEAP32[$5 + 28 >> 2] = 1065353216;
  HEAP32[$5 + 16 >> 2] = -1082130432;
  HEAP32[$5 + 20 >> 2] = 1077936128;
  HEAPF32[$5 + 12 >> 2] = $25;
  $38 = Math_fround($19 * Math_fround(.5));
  HEAPF32[$5 + 8 >> 2] = $38;
  $39 = Math_fround($1 * Math_fround(.5));
  HEAPF32[$5 + 4 >> 2] = $39;
  HEAP32[$5 >> 2] = 1065353216;
  $6 = $15 >>> 0 < 33;
  $1 = $6 ? Math_fround(7.0) : Math_fround(3.0);
  $2 = $6 ? Math_fround(3.0) : Math_fround(1.2000000476837158);
  $12 = Math_fround($18 * ($6 ? Math_fround(.1599999964237213) : Math_fround(.5)));
  $2 = $2 > $12 ? $2 : $12;
  $12 = $1 < $2 ? $1 : $2;
  $53 = Math_fround($12 * Math_fround(1.4500000476837158));
  $24 = Math_fround($12 * Math_fround(.8500000238418579));
  $7 = HEAP32[$0 + 28 >> 2];
  $20 = $7 + (HEAP32[$0 + 32 >> 2] << 6) | 0;
  $44 = Math_fround(($15 >>> 0 <= 1 ? 1 : $15) >>> 0);
  $10 = $0 + 432 | 0;
  folding_inner2 : {
   folding_inner1 : {
    label5 : while (1) {
     folding_inner0 : {
      $8 = $4 >>> 0 > $13 >>> 0;
      block73 : {
       block72 : {
        block9 : {
         while (1) {
          block10 : {
           block6 : {
            block69 : {
             block8 : {
              block7 : {
               $5 = $7;
               if (($20 | 0) != ($5 | 0)) {
                $7 = $5 - -64 | 0;
                $29 = HEAP32[$5 >> 2];
                if (($29 | 0) == -1) {
                 continue
                }
                if (!$8) {
                 break block6
                }
                $1 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPU32[$5 + 48 >> 2]) / $44) + Math_fround(.75)) * Math_fround(6.2831854820251465));
                $19 = _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($1);
                $17 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPU32[$5 + 52 >> 2]) / $44) + Math_fround(.75)) * Math_fround(6.2831854820251465));
                $23 = _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($17);
                $2 = Math_fround($39 + Math_fround($25 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($1)));
                $28 = Math_fround(Math_fround($39 + Math_fround($25 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($17))) - $2);
                $19 = Math_fround($38 + Math_fround($25 * $19));
                $42 = Math_fround(Math_fround($38 + Math_fround($25 * $23)) - $19);
                $1 = Math_fround(Math_sqrt(Math_fround(Math_fround($28 * $28) + Math_fround($42 * $42))));
                $1 = $1 != $1 ? Math_fround(1.0000000474974513e-03) : $1;
                $45 = $1 > Math_fround(1.0000000474974513e-03) ? $1 : Math_fround(1.0000000474974513e-03);
                $1 = Math_fround($18 / $45);
                $1 = $1 != $1 ? Math_fround(.44999998807907104) : $1;
                $1 = $1 < Math_fround(.44999998807907104) ? $1 : Math_fround(.44999998807907104);
                $23 = $19;
                $8 = HEAP32[$5 + 32 >> 2];
                $16 = $21 - $8 | 0;
                $46 = $16;
                $26 = HEAP32[$5 + 36 >> 2];
                $14 = $27 - ($26 + ($8 >>> 0 > $21 >>> 0) | 0) | 0;
                $16 = ($27 | 0) == ($14 | 0) & $16 >>> 0 > $21 >>> 0 | $14 >>> 0 > $27 >>> 0;
                $19 = Math_fround(+(($16 ? 0 : $46) >>> 0) + +(($16 ? 0 : $14) >>> 0) * 4294967296.0);
                $14 = HEAP32[$5 + 40 >> 2];
                $16 = $14 - $8 | 0;
                $8 = HEAP32[$5 + 44 >> 2] - (($8 >>> 0 > $14 >>> 0) + $26 | 0) | 0;
                $14 = !$8 & $16 >>> 0 > 1 | ($8 | 0) != 0;
                $19 = Math_fround($19 / Math_fround(+(($14 ? $16 : 1) >>> 0) + +(($14 ? $8 : 0) >>> 0) * 4294967296.0));
                $1 = Math_fround($1 + Math_fround(($19 > Math_fround(1.0) ? Math_fround(1.0) : $19) * Math_fround(Math_fround(1.0) - Math_fround($1 + $1))));
                $22 = Math_fround($23 + Math_fround($42 * $1));
                $31 = Math_fround($2 + Math_fround($28 * $1));
                $47 = HEAPU8[$5 + 60 | 0] ? Math_fround(.30000001192092896) : Math_fround(1.0);
                $8 = ($29 | 0) >= 0 ? 2 : $29 ^ -2147483648;
                $19 = $8 >>> 0 < 2 ? Math_fround(7.0) : Math_fround(8.0);
                $13 = $13 + 1 | 0;
                if (($8 | 0) != 2) {
                 break block7
                }
                $1 = HEAP32[$5 + 8 >> 2] ? $53 : $12;
                if (!$6) {
                 break block8
                }
                break block9;
               }
               $29 = HEAP32[$0 + 284 >> 2];
               $20 = Math_imul($15, 152);
               $26 = $29 + $20 | 0;
               if (!$15) {
                break block10
               }
               $1 = $25 != $25 ? Math_fround(1.0) : $25;
               $31 = $1 > Math_fround(1.0) ? $1 : Math_fround(1.0);
               $1 = Math_fround($18 * Math_fround(.09000000357627869));
               $1 = $1 != $1 ? Math_fround(2.0) : $1;
               $42 = $1 > Math_fround(2.0) ? $1 : Math_fround(2.0);
               $1 = Math_fround($18 * Math_fround(.75));
               $1 = $1 < Math_fround(9.0) ? Math_fround(9.0) : $1;
               $47 = $1 > Math_fround(26.0) ? Math_fround(26.0) : $1;
               $44 = Math_fround($15 >>> 0);
               $1 = Math_fround($44 + Math_fround(-2.0));
               $1 = $1 != $1 ? Math_fround(1.0) : $1;
               $45 = $1 > Math_fround(1.0) ? $1 : Math_fround(1.0);
               $28 = Math_fround($18 * Math_fround(.6200000047683716));
               $52 = Math_fround($18 + Math_fround(15.0));
               $53 = Math_fround($18 + Math_fround(11.0));
               $54 = Math_fround($18 + Math_fround(6.0));
               $2 = Math_fround($18 * Math_fround(1.399999976158142));
               $19 = Math_fround($18 * Math_fround(2.200000047683716));
               $32 = $11 + 12 | 0;
               $34 = $11 + 60 | 0;
               $51 = Math_fround($51 + $51);
               $46 = ($3 | 0) >= 0;
               $33 = $15 >>> 0 < 33;
               $16 = $0 + 432 | 0;
               $35 = $0 + 444 | 0;
               $4 = $29;
               while (1) {
                $30 = HEAP32[$4 + 128 >> 2];
                $7 = $46 & ($30 | 0) == ($3 | 0);
                $1 = Math_fround(Math_fround(Math_fround(Math_fround($30 >>> 0) / $44) + Math_fround(.75)) * Math_fround(6.2831854820251465));
                $24 = Math_fround($38 + Math_fround($25 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($1)));
                $22 = Math_fround($39 + Math_fround($25 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($1)));
                $14 = HEAPU8[$4 + 148 | 0];
                block21 : {
                 if (!$33) {
                  $17 = Math_fround(5.0);
                  $1 = $18;
                  $12 = $19;
                  block17 : {
                   block16 : {
                    block15 : {
                     switch ($14 - 1 | 0) {
                     case 0:
                      $1 = $2;
                     default:
                      $17 = Math_fround((HEAP32[$4 + 132 >> 2] & 7) + 10 >>> 0);
                      $12 = $1;
                     case 1:
                      $1 = $12 != $12 ? Math_fround(1.5) : $12;
                      $1 = $1 > Math_fround(1.5) ? $1 : Math_fround(1.5);
                      $23 = Math_fround(1.0);
                      $6 = HEAP32[$0 + 440 >> 2];
                      if (HEAP32[$0 + 432 >> 2] - $6 >>> 0 < 10) {
                       break block16
                      }
                      break block17;
                     case 2:
                      break block15;
                     };
                    }
                    $23 = Math_fround(.4000000059604645);
                    $17 = Math_fround(2.0);
                    $12 = $18;
                    $6 = HEAP32[$0 + 440 >> 2];
                    if (HEAP32[$0 + 432 >> 2] - $6 >>> 0 > 9) {
                     break block17
                    }
                   }
                   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $6, 10, 4, 4);
                   $6 = HEAP32[$0 + 440 >> 2];
                  }
                  $5 = HEAP32[$0 + 436 >> 2] + ($6 << 2) | 0;
                  HEAP32[$5 + 32 >> 2] = 0;
                  HEAP32[$5 + 36 >> 2] = 0;
                  HEAPF32[$5 + 28 >> 2] = $23;
                  HEAP32[$5 + 20 >> 2] = -1082130432;
                  HEAP32[$5 + 24 >> 2] = 0;
                  HEAPF32[$5 + 16 >> 2] = $17;
                  HEAPF32[$5 + 12 >> 2] = $1;
                  HEAPF32[$5 + 8 >> 2] = $24;
                  HEAPF32[$5 + 4 >> 2] = $22;
                  HEAP32[$5 >> 2] = 1065353216;
                  $5 = $6 + 10 | 0;
                  HEAP32[$0 + 440 >> 2] = $5;
                  block19 : {
                   if (!HEAP32[$4 + 144 >> 2]) {
                    $6 = $5;
                    break block19;
                   }
                   if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
                    _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $5, 10, 4, 4);
                    $5 = HEAP32[$0 + 440 >> 2];
                   }
                   $6 = $5 + 10 | 0;
                   HEAP32[$0 + 440 >> 2] = $6;
                   $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                   HEAP32[$5 + 32 >> 2] = 0;
                   HEAP32[$5 + 36 >> 2] = 0;
                   HEAP32[$5 + 24 >> 2] = 1065353216;
                   HEAP32[$5 + 28 >> 2] = 1065353216;
                   HEAP32[$5 + 16 >> 2] = -1082130432;
                   HEAP32[$5 + 20 >> 2] = 1086324736;
                   HEAPF32[$5 + 12 >> 2] = $12 + Math_fround(2.0);
                   HEAPF32[$5 + 8 >> 2] = $24;
                   HEAPF32[$5 + 4 >> 2] = $22;
                   HEAP32[$5 >> 2] = 1065353216;
                  }
                  if (!$7) {
                   break block21
                  }
                  if (HEAP32[$0 + 432 >> 2] - $6 >>> 0 <= 9) {
                   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $6, 10, 4, 4);
                   $6 = HEAP32[$0 + 440 >> 2];
                  }
                  HEAP32[$0 + 440 >> 2] = $6 + 10;
                  $5 = HEAP32[$0 + 436 >> 2] + ($6 << 2) | 0;
                  HEAP32[$5 + 32 >> 2] = 0;
                  HEAP32[$5 + 36 >> 2] = 0;
                  HEAP32[$5 + 24 >> 2] = 1073741824;
                  HEAP32[$5 + 28 >> 2] = 1065353216;
                  HEAP32[$5 + 16 >> 2] = -1082130432;
                  HEAP32[$5 + 20 >> 2] = 1065353216;
                  HEAPF32[$5 + 12 >> 2] = $12 + Math_fround(4.0);
                  HEAPF32[$5 + 8 >> 2] = $24;
                  HEAPF32[$5 + 4 >> 2] = $22;
                  HEAP32[$5 >> 2] = 1065353216;
                  break block21;
                 }
                 block30 : {
                  block29 : {
                   block27 : {
                    if ($14 >>> 0 <= 1) {
                     $5 = HEAP32[$4 + 24 >> 2];
                     $6 = HEAP32[$4 + 28 >> 2];
                     block24 : {
                      if (($5 & $6) == -1) {
                       break block24
                      }
                      if (($6 | 0) == ($27 | 0) & $5 >>> 0 <= $21 >>> 0 | $6 >>> 0 < $27 >>> 0) {
                       break block24
                      }
                      $1 = Math_fround(Math_fround(+($5 - $21 >>> 0) + +($6 - (($5 >>> 0 < $21 >>> 0) + $27 | 0) >>> 0) * 4294967296.0) / $51);
                      $1 = Math_fround(Math_fround(($1 > Math_fround(1.0) ? Math_fround(1.0) : $1) * Math_fround(6.2831854820251465)) + Math_fround(-1.5707963705062866));
                      $5 = HEAP32[$0 + 440 >> 2];
                      if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
                       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $5, 10, 4, 4);
                       $5 = HEAP32[$0 + 440 >> 2];
                      }
                      HEAP32[$0 + 440 >> 2] = $5 + 10;
                      $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                      HEAP32[$5 + 32 >> 2] = 1065353216;
                      HEAP32[$5 + 36 >> 2] = 0;
                      HEAP32[$5 + 24 >> 2] = 1073741824;
                      HEAP32[$5 + 28 >> 2] = 1077936128;
                      HEAPF32[$5 + 20 >> 2] = $1;
                      HEAP32[$5 + 16 >> 2] = -1077342245;
                      HEAPF32[$5 + 12 >> 2] = $54;
                      HEAPF32[$5 + 8 >> 2] = $24;
                      HEAPF32[$5 + 4 >> 2] = $22;
                      HEAP32[$5 >> 2] = 1073741824;
                     }
                     if (($14 | 0) != 1) {
                      $1 = Math_fround(0.0);
                      $17 = Math_fround(-1.0);
                      $12 = Math_fround(0.0);
                      break block27;
                     }
                     $1 = Math_fround(2.0);
                     $17 = Math_fround(1.0);
                     $12 = Math_fround(1.0);
                     break block27;
                    }
                    if (($14 | 0) != 3) {
                     $12 = Math_fround(0.0);
                     $17 = Math_fround(5.0);
                     $1 = Math_fround(5.0);
                     break block27;
                    }
                    $12 = Math_fround(1.0);
                    $17 = Math_fround(2.0);
                    $23 = Math_fround(4.0);
                    $1 = Math_fround(2.0);
                    $6 = HEAP32[$0 + 440 >> 2];
                    if (HEAP32[$0 + 432 >> 2] - $6 >>> 0 < 10) {
                     break block29
                    }
                    break block30;
                   }
                   $23 = Math_fround((HEAP32[$4 + 132 >> 2] & 7) + 10 >>> 0);
                   $6 = HEAP32[$0 + 440 >> 2];
                   if (HEAP32[$0 + 432 >> 2] - $6 >>> 0 > 9) {
                    break block30
                   }
                  }
                  _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $6, 10, 4, 4);
                  $6 = HEAP32[$0 + 440 >> 2];
                 }
                 $5 = HEAP32[$0 + 436 >> 2] + ($6 << 2) | 0;
                 HEAP32[$5 + 36 >> 2] = 0;
                 HEAPF32[$5 + 32 >> 2] = $12;
                 HEAP32[$5 + 28 >> 2] = 1065353216;
                 HEAPF32[$5 + 24 >> 2] = $1;
                 HEAPF32[$5 + 20 >> 2] = $17;
                 HEAPF32[$5 + 16 >> 2] = $23;
                 HEAPF32[$5 + 12 >> 2] = $18;
                 HEAPF32[$5 + 8 >> 2] = $24;
                 HEAPF32[$5 + 4 >> 2] = $22;
                 HEAP32[$5 >> 2] = 1065353216;
                 $5 = $6 + 10 | 0;
                 HEAP32[$0 + 440 >> 2] = $5;
                 block32 : {
                  if (!HEAP32[$4 + 144 >> 2]) {
                   $9 = $5;
                   break block32;
                  }
                  if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
                   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $5, 10, 4, 4);
                   $5 = HEAP32[$0 + 440 >> 2];
                  }
                  $9 = $5 + 10 | 0;
                  HEAP32[$0 + 440 >> 2] = $9;
                  $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                  HEAP32[$5 + 32 >> 2] = 1065353216;
                  HEAP32[$5 + 36 >> 2] = 0;
                  HEAP32[$5 + 24 >> 2] = 1073741824;
                  HEAP32[$5 + 28 >> 2] = 1065353216;
                  HEAP32[$5 + 16 >> 2] = -1082130432;
                  HEAP32[$5 + 20 >> 2] = 1086324736;
                  HEAPF32[$5 + 12 >> 2] = $53;
                  HEAPF32[$5 + 8 >> 2] = $24;
                  HEAPF32[$5 + 4 >> 2] = $22;
                  HEAP32[$5 >> 2] = 1065353216;
                 }
                 if ($7) {
                  if (HEAP32[$0 + 432 >> 2] - $9 >>> 0 > 9) {
                   $5 = $9
                  } else {
                   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $9, 10, 4, 4);
                   $5 = HEAP32[$0 + 440 >> 2];
                  }
                  $9 = $5 + 10 | 0;
                  HEAP32[$0 + 440 >> 2] = $9;
                  $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                  HEAP32[$5 + 32 >> 2] = 0;
                  HEAP32[$5 + 36 >> 2] = 0;
                  HEAP32[$5 + 24 >> 2] = 1073741824;
                  HEAP32[$5 + 28 >> 2] = 1063675494;
                  HEAP32[$5 + 16 >> 2] = -1082130432;
                  HEAP32[$5 + 20 >> 2] = 1065353216;
                  HEAPF32[$5 + 12 >> 2] = $52;
                  HEAPF32[$5 + 8 >> 2] = $24;
                  HEAPF32[$5 + 4 >> 2] = $22;
                  HEAP32[$5 >> 2] = 1065353216;
                 }
                 $5 = 10;
                 $10 = HEAP32[$4 + 132 >> 2];
                 $6 = $10;
                 if ($6 >>> 0 >= 1e3) {
                  while (1) {
                   $7 = $6;
                   $6 = ($6 >>> 0) / 1e4 | 0;
                   $8 = ($11 + 40 | 0) + $5 | 0;
                   $13 = $8 - 4 | 0;
                   $48 = $7 - Math_imul($6, 1e4) | 0;
                   $49 = (($48 & 65535) >>> 0) / 100 | 0;
                   $36 = $49 << 1;
                   $36 = HEAPU8[$36 + 1051902 | 0] | HEAPU8[$36 + 1051903 | 0] << 8;
                   HEAP8[$13 | 0] = $36;
                   HEAP8[$13 + 1 | 0] = $36 >>> 8;
                   $8 = $8 - 2 | 0;
                   $13 = ($48 - Math_imul($49, 100) & 65535) << 1;
                   $13 = HEAPU8[$13 + 1051902 | 0] | HEAPU8[$13 + 1051903 | 0] << 8;
                   HEAP8[$8 | 0] = $13;
                   HEAP8[$8 + 1 | 0] = $13 >>> 8;
                   $5 = $5 - 4 | 0;
                   if ($7 >>> 0 > 9999999) {
                    continue
                   }
                   break;
                  }
                 }
                 block39 : {
                  if ($6 >>> 0 <= 9) {
                   $7 = $6;
                   break block39;
                  }
                  $5 = $5 - 2 | 0;
                  $8 = $5 + ($11 + 40 | 0) | 0;
                  $7 = (($6 & 65535) >>> 0) / 100 | 0;
                  $6 = ($6 - Math_imul($7, 100) & 65535) << 1;
                  $6 = HEAPU8[$6 + 1051902 | 0] | HEAPU8[$6 + 1051903 | 0] << 8;
                  HEAP8[$8 | 0] = $6;
                  HEAP8[$8 + 1 | 0] = $6 >>> 8;
                 }
                 block46 : {
                  block43 : {
                   block42 : {
                    if (!(!$7 & ($10 | 0) != 0)) {
                     $10 = $5 - 1 | 0;
                     $6 = $10 + ($11 + 40 | 0) | 0;
                     HEAP8[$6 | 0] = HEAPU8[($7 << 1) + 1051903 | 0];
                     $7 = 11 - $5 | 0;
                     break block42;
                    }
                    $7 = 10 - $5 | 0;
                    if (($5 | 0) == 10) {
                     break block43
                    }
                    $6 = ($11 + 40 | 0) + $5 | 0;
                    $10 = $5;
                   }
                   $8 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
                   if (!$8) {
                    break folding_inner0
                   }
                   $9 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($8, $6, $7);
                   $6 = HEAP32[$0 + 452 >> 2];
                   $5 = $6;
                   if ($7 >>> 0 > HEAP32[$0 + 444 >> 2] - $5 >>> 0) {
                    _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($35, $5, $7, 1, 1);
                    $5 = HEAP32[$0 + 452 >> 2];
                   }
                   _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 448 >> 2] + $5 | 0, $9, $7);
                   $9 = HEAP32[$0 + 440 >> 2];
                   break block46;
                  }
                  $8 = 1;
                  $10 = 10;
                  $6 = HEAP32[$0 + 452 >> 2];
                  $5 = $6;
                 }
                 HEAP32[$0 + 452 >> 2] = $5 + $7;
                 if (HEAP32[$0 + 432 >> 2] - $9 >>> 0 <= 9) {
                  _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $9, 10, 4, 4);
                  $9 = HEAP32[$0 + 440 >> 2];
                 }
                 HEAP32[$0 + 440 >> 2] = $9 + 10;
                 $5 = HEAP32[$0 + 436 >> 2] + ($9 << 2) | 0;
                 HEAP32[$5 + 32 >> 2] = 1065353216;
                 HEAP32[$5 + 36 >> 2] = 1065353216;
                 HEAPF32[$5 + 28 >> 2] = $7 >>> 0;
                 HEAPF32[$5 + 24 >> 2] = $6 >>> 0;
                 HEAP32[$5 + 20 >> 2] = 1065353216;
                 HEAPF32[$5 + 16 >> 2] = ($14 | 0) == 3 ? Math_fround(2.0) : Math_fround(18.0);
                 HEAPF32[$5 + 12 >> 2] = $47;
                 HEAPF32[$5 + 8 >> 2] = $24;
                 HEAPF32[$5 + 4 >> 2] = $22;
                 HEAP32[$5 >> 2] = 1084227584;
                 if (($10 | 0) != 10) {
                  $6 = HEAP32[$8 - 4 >> 2];
                  $5 = $6 & -8;
                  $6 = $6 & 3;
                  if ($5 >>> 0 < ($6 ? 4 : 8) + $7 >>> 0) {
                   break folding_inner1
                  }
                  if (($6 | 0) != 0 & $5 >>> 0 > 49 - $10 >>> 0) {
                   break folding_inner2
                  }
                  _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($8);
                 }
                 $10 = $14;
                 block52 : {
                  if ($15 >>> 0 > 9) {
                   break block52
                  }
                  if (($10 | 0) != 1) {
                   break block52
                  }
                  $9 = $30 + 1 | 0;
                  $5 = 0;
                  $13 = 0;
                  while (1) {
                   $6 = $5 >>> 0 > $15 >>> 0 ? $5 : $15;
                   while (1) {
                    $7 = $5;
                    if (($6 | 0) == ($5 | 0)) {
                     break block52
                    }
                    $5 = $5 + 1 | 0;
                    if (($9 | 0) == ($5 | 0)) {
                     continue
                    }
                    break;
                   };
                   $1 = Math_fround(Math_fround(Math_fround(Math_fround($13 | 0) / $45) * Math_fround(1.5707963705062866)) + Math_fround(.7853981852531433));
                   $12 = Math_fround($24 + Math_fround($28 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($1)));
                   $17 = Math_fround($22 + Math_fround($28 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($1)));
                   block57 : {
                    block56 : {
                     block55 : {
                      block54 : {
                       if (HEAPU32[$4 + 52 >> 2] <= $7 >>> 0) {
                        $6 = HEAP32[$0 + 440 >> 2];
                        break block54;
                       }
                       $6 = HEAP32[$0 + 440 >> 2];
                       if (HEAPU8[$7 + HEAP32[$4 + 48 >> 2] | 0]) {
                        break block55
                       }
                      }
                      $1 = Math_fround(-1.0);
                      if (HEAP32[$0 + 432 >> 2] - $6 >>> 0 < 10) {
                       break block56
                      }
                      break block57;
                     }
                     $1 = Math_fround(18.0);
                     if (HEAP32[$0 + 432 >> 2] - $6 >>> 0 > 9) {
                      break block57
                     }
                    }
                    _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $6, 10, 4, 4);
                    $6 = HEAP32[$0 + 440 >> 2];
                   }
                   $7 = HEAP32[$0 + 436 >> 2] + ($6 << 2) | 0;
                   HEAP32[$7 + 36 >> 2] = 0;
                   HEAP32[$7 + 28 >> 2] = 1065353216;
                   HEAP32[$7 + 32 >> 2] = 0;
                   HEAP32[$7 + 20 >> 2] = 1099956224;
                   HEAP32[$7 + 24 >> 2] = 1065353216;
                   HEAPF32[$7 + 16 >> 2] = $1;
                   HEAPF32[$7 + 12 >> 2] = $42;
                   HEAPF32[$7 + 8 >> 2] = $12;
                   HEAPF32[$7 + 4 >> 2] = $17;
                   HEAP32[$7 >> 2] = 1065353216;
                   HEAP32[$0 + 440 >> 2] = $6 + 10;
                   $13 = $13 + 1 | 0;
                   continue;
                  };
                 }
                 $1 = Math_fround(Math_fround($22 - $39) / $31);
                 $8 = $1 < Math_fround(-.3499999940395355);
                 $13 = $1 > Math_fround(.3499999940395355);
                 $12 = Math_fround($18 + ($13 ? Math_fround(17.0) : $8 ? Math_fround(17.0) : Math_fround(18.0)));
                 $5 = 1;
                 block58 : {
                  block61 : {
                   switch ($14 - 1 | 0) {
                   case 0:
                    $10 = 9;
                    $5 = 1054224;
                    break block58;
                   case 1:
                    $10 = 10;
                    $5 = 1054233;
                    break block58;
                   case 2:
                    break block61;
                   default:
                    break block58;
                   };
                  }
                  $10 = 8;
                  $5 = 1054243;
                 }
                 HEAP32[$11 + 16 >> 2] = $10;
                 HEAP32[$11 + 12 >> 2] = $5;
                 HEAP32[$11 + 60 >> 2] = $30 + 1;
                 HEAP32[$11 + 48 >> 2] = $32;
                 HEAP32[$11 + 52 >> 2] = 7;
                 HEAP32[$11 + 40 >> 2] = $34;
                 HEAP32[$11 + 44 >> 2] = 3;
                 _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($11 + 24 | 0, 1048600, $11 + 40 | 0);
                 $9 = HEAP32[$11 + 24 >> 2];
                 $10 = HEAP32[$11 + 28 >> 2];
                 $7 = HEAP32[$11 + 32 >> 2];
                 $6 = HEAP32[$0 + 452 >> 2];
                 block64 : {
                  block63 : {
                   if ($7 >>> 0 > HEAP32[$0 + 444 >> 2] - $6 >>> 0) {
                    _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($35, $6, $7, 1, 1);
                    $5 = HEAP32[$0 + 452 >> 2];
                    break block63;
                   }
                   $5 = $6;
                   if (!$7) {
                    break block64
                   }
                  }
                  _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 448 >> 2] + $5 | 0, $10, $7);
                 }
                 HEAP32[$0 + 452 >> 2] = $5 + $7;
                 $5 = HEAP32[$0 + 440 >> 2];
                 if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
                  _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($16, $5, 10, 4, 4);
                  $5 = HEAP32[$0 + 440 >> 2];
                 }
                 HEAP32[$0 + 440 >> 2] = $5 + 10;
                 $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                 HEAP32[$5 + 36 >> 2] = 1065353216;
                 $14 = ($14 | 0) == 2;
                 HEAPF32[$5 + 32 >> 2] = $14 ? Math_fround(1.0) : Math_fround(0.0);
                 HEAPF32[$5 + 28 >> 2] = $7 >>> 0;
                 HEAPF32[$5 + 24 >> 2] = $6 >>> 0;
                 HEAPF32[$5 + 20 >> 2] = $13 ? Math_fround(0.0) : $8 ? Math_fround(2.0) : Math_fround(1.0);
                 HEAPF32[$5 + 16 >> 2] = $14 ? Math_fround(5.0) : Math_fround(2.0);
                 HEAP32[$5 + 12 >> 2] = 1094713344;
                 HEAPF32[$5 + 8 >> 2] = $24 + Math_fround(Math_fround(Math_fround($24 - $38) / $31) * $12);
                 HEAPF32[$5 + 4 >> 2] = $22 + Math_fround($1 * $12);
                 HEAP32[$5 >> 2] = 1084227584;
                 if (!$9) {
                  break block21
                 }
                 $6 = HEAP32[$10 - 4 >> 2];
                 $5 = $6 & -8;
                 $6 = $6 & 3;
                 if ($5 >>> 0 < $9 + ($6 ? 4 : 8) >>> 0) {
                  break folding_inner1
                 }
                 if (!(($6 | 0) != 0 & $5 >>> 0 > $9 + 39 >>> 0)) {
                  _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($10);
                  break block21;
                 }
                 break folding_inner2;
                }
                $4 = $4 + 152 | 0;
                if (($26 | 0) != ($4 | 0)) {
                 continue
                }
                break;
               };
               break block10;
              }
              $1 = $12;
              if ($6) {
               break block69
              }
             }
             $2 = Math_fround($22 - $1);
             $17 = Math_fround($31 - $1);
             $1 = Math_fround($1 + $1);
             if (HEAP32[$0 + 432 >> 2] - $9 >>> 0 > 9) {
              $5 = $9
             } else {
              _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($10, $9, 10, 4, 4);
              $5 = HEAP32[$0 + 440 >> 2];
             }
             $9 = $5 + 10 | 0;
             HEAP32[$0 + 440 >> 2] = $9;
             $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
             HEAP32[$5 + 36 >> 2] = 0;
             HEAPF32[$5 + 32 >> 2] = $47;
             HEAP32[$5 + 24 >> 2] = -1082130432;
             HEAP32[$5 + 28 >> 2] = 0;
             HEAPF32[$5 + 20 >> 2] = $19;
             HEAPF32[$5 + 16 >> 2] = $1;
             HEAPF32[$5 + 12 >> 2] = $1;
             HEAPF32[$5 + 8 >> 2] = $2;
             HEAPF32[$5 + 4 >> 2] = $17;
             HEAP32[$5 >> 2] = 1082130432;
             continue label5;
            }
            if (!$8) {
             break block9
            }
            $52 = Math_fround(2.0);
            $17 = Math_fround(0.0);
            $1 = $24;
            $23 = $19;
            $2 = $12;
            if (HEAP32[$0 + 432 >> 2] - $9 >>> 0 <= 9) {
             break block72
            }
            break block73;
           }
           HEAP32[$0 + 456 >> 2] = HEAP32[$0 + 456 >> 2] + 1;
           continue;
          }
          break;
         };
         block180 : {
          block74 : {
           if ($37 < Math_fround(40.0)) {
            break block74
           }
           if ($41 < Math_fround(80.0)) {
            break block74
           }
           HEAP32[$11 + 8 >> 2] = $15;
           HEAP32[$11 + 12 >> 2] = 0;
           HEAP32[$11 + 16 >> 2] = 4;
           $9 = 0;
           HEAP32[$11 + 20 >> 2] = 0;
           block86 : {
            block79 : {
             $2 = Math_fround($37 + Math_fround(-22.0));
             $1 = Math_fround(Math_floor(Math_fround($2 / Math_fround(18.0))));
             $1 = $1 != $1 ? Math_fround(1.0) : $1;
             $1 = $1 > Math_fround(1.0) ? $1 : Math_fround(1.0);
             $4 = $1 >= Math_fround(0.0);
             $5 = ~~$1 >>> 0;
             block76 : {
              if ($1 < Math_fround(4294967296.0) & $4) {
               break block76
              }
              $5 = 0;
             }
             $4 = $1 > Math_fround(4294967040.0) ? -1 : $4 ? $5 : 0;
             $13 = $4 >>> 0 >= 12 ? 12 : $4;
             if ($15 >>> 0 > $13 >>> 0) {
              $6 = $20;
              $7 = $29;
              while (1) {
               $5 = $7;
               $8 = $6;
               if (!$6) {
                $14 = 4;
                break block79;
               }
               $6 = $8 - 152 | 0;
               $7 = $5 + 152 | 0;
               if (HEAPU8[$5 + 148 | 0] != 2) {
                continue
               }
               break;
              };
              block80 : {
               if (($7 | 0) == ($26 | 0)) {
                break block80
               }
               $9 = $26 - $7 | 0;
               $14 = ($9 >>> 0) / 152 | 0;
               $10 = HEAP32[$5 + 132 >> 2];
               $4 = 0;
               if ($9 - 152 >>> 0 >= 152) {
                $14 = $14 & 1;
                $16 = ($6 >>> 0) / 304 << 1;
                $6 = $7;
                while (1) {
                 if (HEAPU8[$6 + 148 | 0] == 2) {
                  $21 = HEAP32[$6 + 132 >> 2];
                  $9 = $21 >>> 0 < $10 >>> 0;
                  $10 = $9 ? $10 : $21;
                  $5 = $9 ? $5 : $6;
                 }
                 if (HEAPU8[$6 + 300 | 0] == 2) {
                  $21 = HEAP32[$6 + 284 >> 2];
                  $9 = $21 >>> 0 < $10 >>> 0;
                  $10 = $9 ? $10 : $21;
                  $5 = $9 ? $5 : $6 + 152 | 0;
                 }
                 $6 = $6 + 304 | 0;
                 $4 = $4 + 2 | 0;
                 if (($16 | 0) != ($4 | 0)) {
                  continue
                 }
                 break;
                };
                if (!$14) {
                 break block80
                }
               }
               $4 = Math_imul($4, 152) + $7 | 0;
               if (HEAPU8[$4 + 148 | 0] != 2) {
                break block80
               }
               $5 = HEAPU32[$4 + 132 >> 2] < $10 >>> 0 ? $5 : $4;
              }
              $4 = HEAP32[$5 + 128 >> 2];
              _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($11 + 12 | 0);
              $14 = HEAP32[$11 + 16 >> 2];
              HEAP32[$14 >> 2] = $4;
              $9 = 1;
              HEAP32[$11 + 20 >> 2] = 1;
              break block79;
             }
             $14 = 4;
             block84 : {
              if (!$15) {
               break block84
              }
              $5 = 0;
              _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($11 + 12 | 0, 0, $15, 4, 4);
              $6 = $15 & 3;
              $14 = HEAP32[$11 + 16 >> 2];
              $9 = HEAP32[$11 + 20 >> 2];
              if ($15 >>> 0 >= 4) {
               $4 = $15 & 16777212;
               $7 = ($9 << 2) + $14 | 0;
               while (1) {
                HEAP32[$7 >> 2] = $5;
                HEAP32[$7 + 12 >> 2] = $5 + 3;
                HEAP32[$7 + 8 >> 2] = $5 + 2;
                HEAP32[$7 + 4 >> 2] = $5 + 1;
                $7 = $7 + 16 | 0;
                $5 = $5 + 4 | 0;
                if (($4 | 0) != ($5 | 0)) {
                 continue
                }
                break;
               };
               $9 = $5 + $9 | 0;
               if (!$6) {
                break block84
               }
              }
              $4 = $6 + $9 | 0;
              $7 = ($9 << 2) + $14 | 0;
              while (1) {
               HEAP32[$7 >> 2] = $5;
               $7 = $7 + 4 | 0;
               $5 = $5 + 1 | 0;
               $6 = $6 - 1 | 0;
               if ($6) {
                continue
               }
               break;
              };
              $9 = $4;
             }
             HEAP32[$11 + 20 >> 2] = $9;
             break block86;
            }
            block87 : {
             if (($3 | 0) < 0) {
              break block87
             }
             if (HEAP32[$14 >> 2] == ($3 | 0) ? $8 : 0) {
              break block87
             }
             if (HEAPU32[$11 + 8 >> 2] <= $3 >>> 0) {
              break block87
             }
             if (($9 | 0) == HEAP32[$11 + 12 >> 2]) {
              _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($11 + 12 | 0);
              $14 = HEAP32[$11 + 16 >> 2];
             }
             HEAP32[$14 + ($9 << 2) >> 2] = $3;
             $9 = $9 + 1 | 0;
             HEAP32[$11 + 20 >> 2] = $9;
             $14 = HEAP32[$11 + 16 >> 2];
            }
            block91 : {
             if ($9 >>> 0 >= $13 >>> 0) {
              break block91
             }
             $10 = HEAP32[$11 + 8 >> 2];
             if (!$10) {
              break block91
             }
             $6 = 0;
             while (1) {
              $4 = $9 << 2;
              $5 = 0;
              block93 : {
               while (1) {
                if (($4 | 0) != ($5 | 0)) {
                 $7 = $5 + $14 | 0;
                 $5 = $5 + 4 | 0;
                 if (HEAP32[$7 >> 2] != ($6 | 0)) {
                  continue
                 }
                 break block93;
                }
                break;
               };
               if (($9 | 0) == HEAP32[$11 + 12 >> 2]) {
                _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($11 + 12 | 0);
                $14 = HEAP32[$11 + 16 >> 2];
               }
               HEAP32[$4 + $14 >> 2] = $6;
               $9 = $9 + 1 | 0;
               HEAP32[$11 + 20 >> 2] = $9;
               $10 = HEAP32[$11 + 8 >> 2];
              }
              if ($9 >>> 0 < $13 >>> 0) {
               $6 = $6 + 1 | 0;
               if ($6 >>> 0 < $10 >>> 0) {
                continue
               }
              }
              break;
             };
             $14 = HEAP32[$11 + 16 >> 2];
            }
            if ($9 >>> 0 < 2) {
             break block86
            }
            if ($9 >>> 0 >= 21) {
             _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortmNvYmNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($14, $9);
             break block86;
            }
            $10 = $14 + 4 | 0;
            $6 = ($9 << 2) + $14 | 0;
            $13 = 0;
            while (1) {
             $7 = HEAP32[$10 - 4 >> 2];
             $4 = HEAP32[$10 >> 2];
             if ($7 >>> 0 > $4 >>> 0) {
              $5 = $13;
              block99 : {
               while (1) {
                HEAP32[($5 + $14 | 0) + 4 >> 2] = $7;
                $7 = $14;
                if (!$5) {
                 break block99
                }
                $5 = $5 - 4 | 0;
                $8 = $14 + $5 | 0;
                $7 = HEAP32[$8 >> 2];
                if ($4 >>> 0 < $7 >>> 0) {
                 continue
                }
                break;
               };
               $7 = $8 + 4 | 0;
              }
              HEAP32[$7 >> 2] = $4;
             }
             $13 = $13 + 4 | 0;
             $10 = $10 + 4 | 0;
             if (($6 | 0) != ($10 | 0)) {
              continue
             }
             break;
            };
           }
           $1 = Math_fround($2 / Math_fround($9 >>> 0));
           $1 = $1 < Math_fround(16.0) ? Math_fround(16.0) : $1;
           $12 = $1 > Math_fround(34.0) ? Math_fround(34.0) : $1;
           $1 = Math_fround($12 * Math_fround(.9200000166893005));
           $1 = $1 != $1 ? Math_fround(14.0) : $1;
           $1 = $1 > Math_fround(14.0) ? $1 : Math_fround(14.0);
           $2 = Math_fround(Math_floor(Math_fround(Math_fround($41 + Math_fround(-64.0)) / $1)));
           $10 = $2 >= Math_fround(0.0);
           $16 = ~~$2 >>> 0;
           block101 : {
            if ($2 < Math_fround(4294967296.0) & $10) {
             break block101
            }
            $16 = 0;
           }
           $4 = 0;
           $8 = $9 << 2;
           $5 = 0;
           block122 : {
            block121 : {
             block103 : {
              block104 : {
               block102 : {
                if (!$9) {
                 break block102
                }
                $5 = HEAP32[$14 >> 2];
                if ($5 >>> 0 >= $15 >>> 0) {
                 break block103
                }
                $5 = HEAP32[(Math_imul($5, 152) + $29 | 0) + 40 >> 2];
                if (($9 | 0) == 1) {
                 break block102
                }
                $7 = $14 + 4 | 0;
                $6 = $8 - 4 >>> 2 | 0;
                while (1) {
                 $13 = HEAP32[$7 >> 2];
                 if ($13 >>> 0 >= $15 >>> 0) {
                  break block104
                 }
                 $13 = HEAP32[(Math_imul($13, 152) + $29 | 0) + 40 >> 2];
                 $5 = $5 >>> 0 > $13 >>> 0 ? $5 : $13;
                 $7 = $7 + 4 | 0;
                 $6 = $6 - 1 | 0;
                 if ($6) {
                  continue
                 }
                 break;
                };
               }
               $46 = $8 + $14 | 0;
               $6 = $2 > Math_fround(4294967040.0) ? -1 : $10 ? $16 : 0;
               $27 = $6 >>> 0 <= 1 ? 1 : $6;
               $16 = $5 >>> 0 <= $27 >>> 0 ? 1 : ($5 - $27 | 0) + 1 | 0;
               $15 = $1 >= Math_fround(22.0);
               $21 = $15 ? 1 : 5;
               $2 = Math_fround($40 + Math_fround(8.0));
               $18 = Math_fround($1 * Math_fround(.5));
               $22 = Math_fround($40 + Math_fround(20.0));
               $19 = Math_fround($43 + Math_fround(64.0));
               $30 = $0 + 444 | 0;
               $35 = $0 + 432 | 0;
               block120 : {
                while (1) {
                 $10 = $4 + $16 | 0;
                 block106 : {
                  if (!(($10 >>> 0) % ($21 >>> 0) | 0 ? $15 : 1)) {
                   break block106
                  }
                  $5 = 10;
                  $6 = $10;
                  if ($6 >>> 0 >= 1e3) {
                   while (1) {
                    $7 = $6;
                    $6 = ($6 >>> 0) / 1e4 | 0;
                    $8 = ($11 + 40 | 0) + $5 | 0;
                    $13 = $8 - 4 | 0;
                    $32 = $7 - Math_imul($6, 1e4) | 0;
                    $34 = (($32 & 65535) >>> 0) / 100 | 0;
                    $33 = $34 << 1;
                    $33 = HEAPU8[$33 + 1051902 | 0] | HEAPU8[$33 + 1051903 | 0] << 8;
                    HEAP8[$13 | 0] = $33;
                    HEAP8[$13 + 1 | 0] = $33 >>> 8;
                    $8 = $8 - 2 | 0;
                    $13 = ($32 - Math_imul($34, 100) & 65535) << 1;
                    $13 = HEAPU8[$13 + 1051902 | 0] | HEAPU8[$13 + 1051903 | 0] << 8;
                    HEAP8[$8 | 0] = $13;
                    HEAP8[$8 + 1 | 0] = $13 >>> 8;
                    $5 = $5 - 4 | 0;
                    if ($7 >>> 0 > 9999999) {
                     continue
                    }
                    break;
                   }
                  }
                  block109 : {
                   if ($6 >>> 0 <= 9) {
                    $7 = $6;
                    break block109;
                   }
                   $5 = $5 - 2 | 0;
                   $8 = $5 + ($11 + 40 | 0) | 0;
                   $7 = (($6 & 65535) >>> 0) / 100 | 0;
                   $6 = ($6 - Math_imul($7, 100) & 65535) << 1;
                   $6 = HEAPU8[$6 + 1051902 | 0] | HEAPU8[$6 + 1051903 | 0] << 8;
                   HEAP8[$8 | 0] = $6;
                   HEAP8[$8 + 1 | 0] = $6 >>> 8;
                  }
                  block116 : {
                   block113 : {
                    block112 : {
                     if (!(!$7 & ($10 | 0) != 0)) {
                      $10 = $5 - 1 | 0;
                      $6 = $10 + ($11 + 40 | 0) | 0;
                      HEAP8[$6 | 0] = HEAPU8[($7 << 1) + 1051903 | 0];
                      $7 = 11 - $5 | 0;
                      $13 = ($10 | 0) == 10;
                      break block112;
                     }
                     $7 = 10 - $5 | 0;
                     if (($5 | 0) == 10) {
                      break block113
                     }
                     $6 = ($11 + 40 | 0) + $5 | 0;
                     $10 = $5;
                     $13 = 0;
                    }
                    $8 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
                    if (!$8) {
                     break folding_inner0
                    }
                    $32 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($8, $6, $7);
                    $6 = HEAP32[$0 + 452 >> 2];
                    $5 = $6;
                    if ($7 >>> 0 > HEAP32[$0 + 444 >> 2] - $5 >>> 0) {
                     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($30, $5, $7, 1, 1);
                     $5 = HEAP32[$0 + 452 >> 2];
                    }
                    _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 448 >> 2] + $5 | 0, $32, $7);
                    $10 = 49 - $10 | 0;
                    break block116;
                   }
                   $8 = 1;
                   $13 = 1;
                   $6 = HEAP32[$0 + 452 >> 2];
                   $5 = $6;
                   $10 = 39;
                  }
                  HEAP32[$0 + 452 >> 2] = $5 + $7;
                  $5 = HEAP32[$0 + 440 >> 2];
                  if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
                   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($35, $5, 10, 4, 4);
                   $5 = HEAP32[$0 + 440 >> 2];
                  }
                  HEAP32[$0 + 440 >> 2] = $5 + 10;
                  $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                  HEAP32[$5 + 32 >> 2] = 0;
                  HEAP32[$5 + 36 >> 2] = 1065353216;
                  HEAPF32[$5 + 28 >> 2] = $7 >>> 0;
                  HEAPF32[$5 + 24 >> 2] = $6 >>> 0;
                  HEAP32[$5 + 20 >> 2] = 1065353216;
                  HEAP32[$5 + 12 >> 2] = 1092616192;
                  HEAP32[$5 + 16 >> 2] = 1073741824;
                  HEAPF32[$5 + 8 >> 2] = $2;
                  HEAPF32[$5 + 4 >> 2] = $18 + Math_fround($19 + Math_fround($1 * Math_fround($4 >>> 0)));
                  HEAP32[$5 >> 2] = 1084227584;
                  if ($13) {
                   break block106
                  }
                  $6 = HEAP32[$8 - 4 >> 2];
                  $5 = $6 & -8;
                  $6 = $6 & 3;
                  if ($5 >>> 0 < ($6 ? 4 : 8) + $7 >>> 0) {
                   break folding_inner1
                  }
                  if (($6 | 0) != 0 & $5 >>> 0 > $10 >>> 0) {
                   break block120
                  }
                  _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($8);
                 }
                 $4 = $4 + 1 | 0;
                 if (($27 | 0) != ($4 | 0)) {
                  continue
                 }
                 break;
                };
                if (HEAPU32[$11 + 8 >> 2] > $9 >>> 0) {
                 break block121
                }
                break block122;
               }
               break folding_inner2;
              }
              _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($13, $15, 1054160);
              wasm2js_trap();
             }
             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, $15, 1054160);
             wasm2js_trap();
            }
            HEAP32[$11 + 60 >> 2] = $9;
            HEAP32[$11 + 48 >> 2] = $11 + 8;
            HEAP32[$11 + 52 >> 2] = 3;
            HEAP32[$11 + 40 >> 2] = $11 + 60;
            HEAP32[$11 + 44 >> 2] = 3;
            _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($11 + 24 | 0, 1049241, $11 + 40 | 0);
            $7 = HEAP32[$11 + 24 >> 2];
            $10 = HEAP32[$11 + 28 >> 2];
            $6 = HEAP32[$11 + 32 >> 2];
            $4 = HEAP32[$0 + 452 >> 2];
            block125 : {
             block124 : {
              if ($6 >>> 0 > HEAP32[$0 + 444 >> 2] - $4 >>> 0) {
               _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 444 | 0, $4, $6, 1, 1);
               $5 = HEAP32[$0 + 452 >> 2];
               break block124;
              }
              $5 = $4;
              if (!$6) {
               break block125
              }
             }
             _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 448 >> 2] + $5 | 0, $10, $6);
            }
            HEAP32[$0 + 452 >> 2] = $5 + $6;
            $5 = HEAP32[$0 + 440 >> 2];
            if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
             _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 432 | 0, $5, 10, 4, 4);
             $5 = HEAP32[$0 + 440 >> 2];
            }
            HEAP32[$0 + 440 >> 2] = $5 + 10;
            $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
            HEAP32[$5 + 32 >> 2] = 0;
            HEAP32[$5 + 36 >> 2] = 1065353216;
            HEAPF32[$5 + 28 >> 2] = $6 >>> 0;
            HEAPF32[$5 + 24 >> 2] = $4 >>> 0;
            HEAP32[$5 + 20 >> 2] = 0;
            HEAP32[$5 + 12 >> 2] = 1092616192;
            HEAP32[$5 + 16 >> 2] = 1073741824;
            HEAPF32[$5 + 8 >> 2] = $2;
            HEAPF32[$5 + 4 >> 2] = $43;
            HEAP32[$5 >> 2] = 1084227584;
            if (!$7) {
             break block122
            }
            $5 = HEAP32[$10 - 4 >> 2];
            $4 = $5 & -8;
            $5 = $5 & 3;
            if ($4 >>> 0 < $7 + ($5 ? 4 : 8) >>> 0) {
             break folding_inner1
            }
            if (($5 | 0) != 0 & $4 >>> 0 > $7 + 39 >>> 0) {
             break folding_inner2
            }
            _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($10);
           }
           $5 = $29;
           block131 : {
            while (1) {
             $15 = $5;
             if (!$20) {
              $15 = 0;
              break block131;
             }
             $20 = $20 - 152 | 0;
             $5 = $15 + 152 | 0;
             if (HEAPU8[$15 + 148 | 0] != 2) {
              continue
             }
             break;
            };
            if (($5 | 0) == ($26 | 0)) {
             break block131
            }
            $4 = $26 - $5 | 0;
            $7 = ($4 >>> 0) / 152 | 0;
            $6 = HEAP32[$15 + 132 >> 2];
            $8 = 0;
            if ($4 - 152 >>> 0 >= 152) {
             $4 = $7 & 1;
             $10 = ($20 >>> 0) / 304 << 1;
             $7 = $5;
             while (1) {
              if (HEAPU8[$7 + 148 | 0] == 2) {
               $13 = HEAP32[$7 + 132 >> 2];
               $20 = $13 >>> 0 < $6 >>> 0;
               $15 = $20 ? $15 : $7;
               $6 = $20 ? $6 : $13;
              }
              if (HEAPU8[$7 + 300 | 0] == 2) {
               $13 = HEAP32[$7 + 284 >> 2];
               $20 = $13 >>> 0 < $6 >>> 0;
               $15 = $20 ? $15 : $7 + 152 | 0;
               $6 = $20 ? $6 : $13;
              }
              $7 = $7 + 304 | 0;
              $8 = $8 + 2 | 0;
              if (($10 | 0) != ($8 | 0)) {
               continue
              }
              break;
             };
             if (!$4) {
              break block131
             }
            }
            $4 = Math_imul($8, 152) + $5 | 0;
            if (HEAPU8[$4 + 148 | 0] != 2) {
             break block131
            }
            $15 = HEAPU32[$4 + 132 >> 2] < $6 >>> 0 ? $15 : $4;
           }
           if ($9) {
            $2 = Math_fround($12 * Math_fround(.41999998688697815));
            $2 = $2 != $2 ? Math_fround(12.0) : $2;
            $38 = $2 < Math_fround(12.0) ? $2 : Math_fround(12.0);
            $32 = $16 + $27 | 0;
            $23 = Math_fround($12 + Math_fround(-4.0));
            $24 = Math_fround($1 + Math_fround(-4.0));
            $39 = Math_fround($12 * Math_fround(.5));
            $41 = Math_fround($41 + Math_fround(8.0));
            $31 = Math_fround($43 + Math_fround(-4.0));
            $33 = $11 + 60 | 0;
            $21 = $0 + 432 | 0;
            $30 = $0 + 444 | 0;
            $9 = $14;
            $35 = 0;
            while (1) {
             block141 : {
              block140 : {
               block139 : {
                $20 = HEAP32[$9 >> 2];
                $4 = HEAP32[$11 + 8 >> 2];
                if ($20 >>> 0 < $4 >>> 0) {
                 $26 = Math_imul($20, 152) + $29 | 0;
                 $17 = Math_fround($22 + Math_fround($12 * Math_fround($35 >>> 0)));
                 block137 : {
                  if (($3 | 0) < 0) {
                   break block137
                  }
                  if (($3 | 0) != ($20 | 0)) {
                   break block137
                  }
                  $5 = HEAP32[$0 + 440 >> 2];
                  if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
                   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($21, $5, 10, 4, 4);
                   $5 = HEAP32[$0 + 440 >> 2];
                  }
                  HEAP32[$0 + 440 >> 2] = $5 + 10;
                  $4 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                  HEAP32[$4 + 36 >> 2] = 0;
                  HEAP32[$4 + 28 >> 2] = 0;
                  HEAP32[$4 + 32 >> 2] = 1065353216;
                  HEAP32[$4 + 20 >> 2] = 1082130432;
                  HEAP32[$4 + 24 >> 2] = -1082130432;
                  HEAPF32[$4 + 16 >> 2] = $12;
                  HEAPF32[$4 + 12 >> 2] = $41;
                  HEAPF32[$4 + 8 >> 2] = $17;
                  HEAPF32[$4 + 4 >> 2] = $31;
                  HEAP32[$4 >> 2] = 1082130432;
                 }
                 $4 = HEAPU8[$26 + 148 | 0];
                 HEAP32[$11 + 60 >> 2] = $20 + 1;
                 HEAP32[$11 + 24 >> 2] = $33;
                 HEAP32[$11 + 28 >> 2] = 3;
                 _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($11 + 40 | 0, 1048605, $11 + 24 | 0);
                 $2 = ($4 | 0) == 3 ? Math_fround(2.0) : Math_fround(1.0);
                 $8 = ($4 | 0) == 2;
                 $7 = HEAP32[$11 + 40 >> 2];
                 $10 = HEAP32[$11 + 44 >> 2];
                 $6 = HEAP32[$11 + 48 >> 2];
                 $4 = HEAP32[$0 + 452 >> 2];
                 if ($6 >>> 0 <= HEAP32[$0 + 444 >> 2] - $4 >>> 0) {
                  break block139
                 }
                 _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($30, $4, $6, 1, 1);
                 $5 = HEAP32[$0 + 452 >> 2];
                 break block140;
                }
                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($20, $4, 1054176);
                wasm2js_trap();
               }
               $5 = $4;
               if (!$6) {
                break block141
               }
              }
              _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 448 >> 2] + $5 | 0, $10, $6);
             }
             HEAP32[$0 + 452 >> 2] = $5 + $6;
             $5 = HEAP32[$0 + 440 >> 2];
             if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
              _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($21, $5, 10, 4, 4);
              $5 = HEAP32[$0 + 440 >> 2];
             }
             HEAP32[$0 + 440 >> 2] = $5 + 10;
             $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
             HEAP32[$5 + 36 >> 2] = 1065353216;
             HEAPF32[$5 + 32 >> 2] = $8 ? Math_fround(1.0) : Math_fround(0.0);
             HEAPF32[$5 + 28 >> 2] = $6 >>> 0;
             HEAPF32[$5 + 24 >> 2] = $4 >>> 0;
             HEAP32[$5 + 20 >> 2] = 0;
             HEAPF32[$5 + 16 >> 2] = $8 ? Math_fround(5.0) : $2;
             HEAP32[$5 + 12 >> 2] = 1094713344;
             $40 = Math_fround($39 + $17);
             HEAPF32[$5 + 8 >> 2] = $40;
             HEAPF32[$5 + 4 >> 2] = $43;
             HEAP32[$5 >> 2] = 1084227584;
             if ($7) {
              $5 = HEAP32[$10 - 4 >> 2];
              $4 = $5 & -8;
              $5 = $5 & 3;
              if ($4 >>> 0 < $7 + ($5 ? 4 : 8) >>> 0) {
               break folding_inner1
              }
              if (($5 | 0) != 0 & $4 >>> 0 > $7 + 39 >>> 0) {
               break folding_inner2
              }
              _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($10);
             }
             $35 = $35 + 1 | 0;
             $9 = $9 + 4 | 0;
             $25 = Math_fround($17 + Math_fround(2.0));
             $4 = 0;
             while (1) {
              $2 = Math_fround($19 + Math_fround($1 * Math_fround($4 >>> 0)));
              block149 : {
               $34 = $4 + $16 | 0;
               $5 = $34 - 1 | 0;
               if ($5 >>> 0 >= HEAPU32[$26 + 40 >> 2]) {
                $5 = HEAP32[$0 + 440 >> 2];
                if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
                 _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($21, $5, 10, 4, 4);
                 $5 = HEAP32[$0 + 440 >> 2];
                }
                HEAP32[$0 + 440 >> 2] = $5 + 10;
                $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                HEAP32[$5 + 36 >> 2] = 0;
                HEAP32[$5 + 28 >> 2] = 1065353216;
                HEAP32[$5 + 32 >> 2] = 1065353216;
                HEAP32[$5 + 20 >> 2] = -1082130432;
                HEAP32[$5 + 24 >> 2] = 1077936128;
                HEAPF32[$5 + 16 >> 2] = $23;
                HEAPF32[$5 + 12 >> 2] = $24;
                HEAPF32[$5 + 8 >> 2] = $25;
                HEAPF32[$5 + 4 >> 2] = $2 + Math_fround(2.0);
                HEAP32[$5 >> 2] = 1082130432;
                break block149;
               }
               $48 = HEAP32[$26 + 136 >> 2];
               $37 = $48 >>> 0 < $34 >>> 0 ? Math_fround(.3799999952316284) : Math_fround(1.0);
               $10 = HEAP32[HEAP32[$26 + 36 >> 2] + ($5 << 3) >> 2];
               $28 = Math_fround(($10 & 7) + 10 >>> 0);
               $5 = HEAP32[$0 + 440 >> 2];
               if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 < 10) {
                _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($21, $5, 10, 4, 4);
                $5 = HEAP32[$0 + 440 >> 2];
               }
               HEAP32[$0 + 440 >> 2] = $5 + 10;
               $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
               HEAP32[$5 + 36 >> 2] = 0;
               HEAPF32[$5 + 32 >> 2] = $37;
               HEAP32[$5 + 24 >> 2] = -1082130432;
               HEAP32[$5 + 28 >> 2] = 0;
               HEAPF32[$5 + 20 >> 2] = $28;
               HEAPF32[$5 + 16 >> 2] = $23;
               HEAPF32[$5 + 12 >> 2] = $24;
               HEAPF32[$5 + 8 >> 2] = $25;
               HEAPF32[$5 + 4 >> 2] = $2 + Math_fround(2.0);
               HEAP32[$5 >> 2] = 1082130432;
               if (!($1 >= Math_fround(18.0))) {
                break block149
               }
               $5 = 10;
               $6 = $10;
               if ($6 >>> 0 >= 1e3) {
                while (1) {
                 $7 = $6;
                 $6 = ($6 >>> 0) / 1e4 | 0;
                 $8 = ($11 + 40 | 0) + $5 | 0;
                 $13 = $8 - 4 | 0;
                 $49 = $7 - Math_imul($6, 1e4) | 0;
                 $36 = (($49 & 65535) >>> 0) / 100 | 0;
                 $50 = $36 << 1;
                 $50 = HEAPU8[$50 + 1051902 | 0] | HEAPU8[$50 + 1051903 | 0] << 8;
                 HEAP8[$13 | 0] = $50;
                 HEAP8[$13 + 1 | 0] = $50 >>> 8;
                 $8 = $8 - 2 | 0;
                 $13 = ($49 - Math_imul($36, 100) & 65535) << 1;
                 $13 = HEAPU8[$13 + 1051902 | 0] | HEAPU8[$13 + 1051903 | 0] << 8;
                 HEAP8[$8 | 0] = $13;
                 HEAP8[$8 + 1 | 0] = $13 >>> 8;
                 $5 = $5 - 4 | 0;
                 if ($7 >>> 0 > 9999999) {
                  continue
                 }
                 break;
                }
               }
               block153 : {
                if ($6 >>> 0 <= 9) {
                 $7 = $6;
                 break block153;
                }
                $5 = $5 - 2 | 0;
                $8 = $5 + ($11 + 40 | 0) | 0;
                $7 = (($6 & 65535) >>> 0) / 100 | 0;
                $6 = ($6 - Math_imul($7, 100) & 65535) << 1;
                $6 = HEAPU8[$6 + 1051902 | 0] | HEAPU8[$6 + 1051903 | 0] << 8;
                HEAP8[$8 | 0] = $6;
                HEAP8[$8 + 1 | 0] = $6 >>> 8;
               }
               block159 : {
                block157 : {
                 block156 : {
                  if (!(!$7 & ($10 | 0) != 0)) {
                   $8 = $5 - 1 | 0;
                   $13 = $8 + ($11 + 40 | 0) | 0;
                   HEAP8[$13 | 0] = HEAPU8[($7 << 1) + 1051903 | 0];
                   $7 = 11 - $5 | 0;
                   $10 = ($8 | 0) == 10;
                   break block156;
                  }
                  $7 = 10 - $5 | 0;
                  if (($5 | 0) == 10) {
                   break block157
                  }
                  $13 = ($11 + 40 | 0) + $5 | 0;
                  $8 = $5;
                  $10 = 0;
                 }
                 $6 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
                 if (!$6) {
                  break folding_inner0
                 }
                 _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($6, $13, $7);
                 $13 = 49 - $8 | 0;
                 break block159;
                }
                $10 = 1;
                $6 = 1;
                $13 = 39;
               }
               $37 = Math_fround($18 + $2);
               block165 : {
                block164 : {
                 if ($34 >>> 0 > $48 >>> 0) {
                  $8 = HEAP32[$0 + 452 >> 2];
                  block163 : {
                   block162 : {
                    if ($7 >>> 0 > HEAP32[$0 + 444 >> 2] - $8 >>> 0) {
                     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($30, $8, $7, 1, 1);
                     $5 = HEAP32[$0 + 452 >> 2];
                     break block162;
                    }
                    $5 = $8;
                    if ($10) {
                     break block163
                    }
                   }
                   _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 448 >> 2] + $5 | 0, $6, $7);
                  }
                  HEAP32[$0 + 452 >> 2] = $5 + $7;
                  $2 = Math_fround(.800000011920929);
                  $5 = HEAP32[$0 + 440 >> 2];
                  if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 < 10) {
                   break block164
                  }
                  break block165;
                 }
                 $8 = HEAP32[$0 + 452 >> 2];
                 block168 : {
                  block167 : {
                   if ($7 >>> 0 > HEAP32[$0 + 444 >> 2] - $8 >>> 0) {
                    _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($30, $8, $7, 1, 1);
                    $5 = HEAP32[$0 + 452 >> 2];
                    break block167;
                   }
                   $5 = $8;
                   if ($10) {
                    break block168
                   }
                  }
                  _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 448 >> 2] + $5 | 0, $6, $7);
                 }
                 HEAP32[$0 + 452 >> 2] = $5 + $7;
                 $2 = Math_fround(1.0);
                 $5 = HEAP32[$0 + 440 >> 2];
                 if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 > 9) {
                  break block165
                 }
                }
                _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($21, $5, 10, 4, 4);
                $5 = HEAP32[$0 + 440 >> 2];
               }
               HEAP32[$0 + 440 >> 2] = $5 + 10;
               $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
               HEAPF32[$5 + 36 >> 2] = $2;
               HEAP32[$5 + 32 >> 2] = 0;
               HEAPF32[$5 + 28 >> 2] = $7 >>> 0;
               HEAPF32[$5 + 24 >> 2] = $8 >>> 0;
               HEAP32[$5 + 16 >> 2] = 1099956224;
               HEAP32[$5 + 20 >> 2] = 1065353216;
               HEAPF32[$5 + 12 >> 2] = $38;
               HEAPF32[$5 + 8 >> 2] = $40;
               HEAPF32[$5 + 4 >> 2] = $37;
               HEAP32[$5 >> 2] = 1084227584;
               if ($10) {
                break block149
               }
               $10 = HEAP32[$6 - 4 >> 2];
               $5 = $10 & -8;
               $8 = $7;
               $7 = $10 & 3;
               if ($5 >>> 0 < $8 + ($7 ? 4 : 8) >>> 0) {
                break folding_inner1
               }
               if (!(($7 | 0) != 0 & $5 >>> 0 > $13 >>> 0)) {
                _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($6);
                break block149;
               }
               break folding_inner2;
              }
              $4 = $4 + 1 | 0;
              if (($27 | 0) != ($4 | 0)) {
               continue
              }
              break;
             };
             block172 : {
              if (!$15) {
               break block172
              }
              if (($20 | 0) == HEAP32[$15 + 128 >> 2]) {
               break block172
              }
              $4 = HEAP32[$15 + 64 >> 2];
              if (!$4) {
               break block172
              }
              block175 : {
               block174 : {
                if ($4 >>> 0 > $20 >>> 0) {
                 $4 = HEAP32[$15 + 76 >> 2];
                 if ($4 >>> 0 <= $20 >>> 0) {
                  break block174
                 }
                 $2 = Math_fround(Math_fround($12 + $17) + Math_fround(-2.0));
                 $4 = $20 << 2;
                 $6 = HEAP32[$4 + HEAP32[$15 + 60 >> 2] >> 2];
                 $7 = HEAP32[$4 + HEAP32[$15 + 72 >> 2] >> 2];
                 if ($7 >>> 0 < $16 >>> 0) {
                  break block175
                 }
                 if ($7 >>> 0 >= $32 >>> 0) {
                  break block175
                 }
                 $5 = HEAP32[$0 + 440 >> 2];
                 if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
                  _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($21, $5, 10, 4, 4);
                  $5 = HEAP32[$0 + 440 >> 2];
                 }
                 HEAP32[$0 + 440 >> 2] = $5 + 10;
                 $4 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
                 HEAP32[$4 + 36 >> 2] = 0;
                 HEAP32[$4 + 28 >> 2] = 1065353216;
                 HEAP32[$4 + 32 >> 2] = 0;
                 HEAP32[$4 + 20 >> 2] = 1065353216;
                 HEAP32[$4 + 24 >> 2] = 1065353216;
                 HEAP32[$4 + 12 >> 2] = 1075838976;
                 HEAP32[$4 + 16 >> 2] = 0;
                 HEAPF32[$4 + 8 >> 2] = $2;
                 HEAPF32[$4 + 4 >> 2] = $18 + Math_fround($19 + Math_fround($1 * Math_fround($7 - $16 >>> 0)));
                 HEAP32[$4 >> 2] = 1065353216;
                 break block175;
                }
                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($20, $4, 1054192);
                wasm2js_trap();
               }
               _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($20, $4, 1054208);
               wasm2js_trap();
              }
              if ($6 >>> 0 < $16 >>> 0) {
               break block172
              }
              if ($6 >>> 0 >= $32 >>> 0) {
               break block172
              }
              $5 = HEAP32[$0 + 440 >> 2];
              if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
               _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($21, $5, 10, 4, 4);
               $5 = HEAP32[$0 + 440 >> 2];
              }
              HEAP32[$0 + 440 >> 2] = $5 + 10;
              $4 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
              HEAP32[$4 + 36 >> 2] = 0;
              HEAP32[$4 + 28 >> 2] = 1065353216;
              HEAP32[$4 + 32 >> 2] = 0;
              HEAP32[$4 + 20 >> 2] = 1065353216;
              HEAP32[$4 + 24 >> 2] = 1065353216;
              HEAP32[$4 + 12 >> 2] = 1075838976;
              HEAP32[$4 + 16 >> 2] = 1065353216;
              HEAPF32[$4 + 8 >> 2] = $2;
              HEAPF32[$4 + 4 >> 2] = $18 + Math_fround($19 + Math_fround($1 * Math_fround($6 - $16 >>> 0)));
              HEAP32[$4 >> 2] = 1065353216;
             }
             if (($9 | 0) != ($46 | 0)) {
              continue
             }
             break;
            };
           }
           $4 = HEAP32[$11 + 12 >> 2];
           if (!$4) {
            break block74
           }
           $5 = HEAP32[$14 - 4 >> 2];
           $3 = $5 & -8;
           $4 = $4 << 2;
           $5 = $5 & 3;
           if ($3 >>> 0 < $4 + ($5 ? 4 : 8) >>> 0) {
            break folding_inner1
           }
           if (($5 | 0) != 0 & $3 >>> 0 > $4 + 39 >>> 0) {
            break block180
           }
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($14);
          }
          __stack_pointer = $11 - -64 | 0;
          return HEAPU32[$0 + 440 >> 2] / 10 | 0;
         }
         break folding_inner2;
        }
        $52 = Math_fround(0.0);
        $23 = Math_fround(-1.0);
        $17 = $19;
        $2 = $1;
        if (HEAP32[$0 + 432 >> 2] - $9 >>> 0 < 10) {
         break block72
        }
        break block73;
       }
       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($10, $9, 10, 4, 4);
       $9 = HEAP32[$0 + 440 >> 2];
      }
      $5 = HEAP32[$0 + 436 >> 2] + ($9 << 2) | 0;
      HEAP32[$5 + 32 >> 2] = 0;
      HEAP32[$5 + 36 >> 2] = 0;
      HEAPF32[$5 + 28 >> 2] = $47;
      HEAPF32[$5 + 24 >> 2] = $52;
      HEAPF32[$5 + 20 >> 2] = $23;
      HEAPF32[$5 + 16 >> 2] = $17;
      HEAPF32[$5 + 12 >> 2] = $1;
      HEAPF32[$5 + 8 >> 2] = $22;
      HEAPF32[$5 + 4 >> 2] = $31;
      HEAP32[$5 >> 2] = 1065353216;
      $5 = $9 + 10 | 0;
      HEAP32[$0 + 440 >> 2] = $5;
      $1 = Math_fround($42 / $45);
      $17 = Math_fround($2 + Math_fround(5.0));
      $23 = Math_fround($22 + Math_fround($1 * $17));
      $28 = Math_fround($28 / $45);
      $17 = Math_fround($31 + Math_fround($28 * $17));
      if (HEAP32[$0 + 432 >> 2] - $5 >>> 0 <= 9) {
       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($10, $5, 10, 4, 4);
       $5 = HEAP32[$0 + 440 >> 2];
      }
      $9 = $5 + 10 | 0;
      HEAP32[$0 + 440 >> 2] = $9;
      $5 = HEAP32[$0 + 436 >> 2] + ($5 << 2) | 0;
      HEAP32[$5 + 32 >> 2] = 0;
      HEAP32[$5 + 36 >> 2] = 0;
      HEAPF32[$5 + 28 >> 2] = $47;
      HEAP32[$5 + 24 >> 2] = 1069547520;
      HEAPF32[$5 + 20 >> 2] = $19;
      HEAPF32[$5 + 16 >> 2] = $23;
      HEAPF32[$5 + 12 >> 2] = $17;
      HEAPF32[$5 + 8 >> 2] = $22 + Math_fround($1 * $2);
      HEAPF32[$5 + 4 >> 2] = $31 + Math_fround($28 * $2);
      HEAP32[$5 >> 2] = 1077936128;
      continue;
     }
     break;
    };
    _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0;
  $5 = __stack_pointer - 16 | 0;
  __stack_pointer = $5;
  $1 = $1 + $2 | 0;
  if ($2 >>> 0 > $1 >>> 0) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(0);
   wasm2js_trap();
  }
  $2 = HEAP32[$0 >> 2];
  $6 = $2 << 1;
  $1 = $1 >>> 0 > $6 >>> 0 ? $1 : $6;
  $6 = ($4 | 0) == 1 ? 8 : 4;
  $1 = $1 >>> 0 > $6 >>> 0 ? $1 : $6;
  _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($5 + 4 | 0, $2, HEAP32[$0 + 4 >> 2], $1, $3, $4);
  if (HEAP32[$5 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$5 + 8 >> 2]);
   wasm2js_trap();
  }
  $2 = HEAP32[$5 + 8 >> 2];
  HEAP32[$0 >> 2] = $1;
  HEAP32[$0 + 4 >> 2] = $2;
  __stack_pointer = $5 + 16 | 0;
 }
 
 function _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  $3 = HEAP32[$0 >> 2];
  $2 = $3 << 1;
  $2 = $2 >>> 0 <= 4 ? 4 : $2;
  _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($1 + 4 | 0, $3, HEAP32[$0 + 4 >> 2], $2, 4, 4);
  if (HEAP32[$1 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$1 + 8 >> 2]);
   wasm2js_trap();
  }
  $3 = HEAP32[$1 + 8 >> 2];
  HEAP32[$0 >> 2] = $2;
  HEAP32[$0 + 4 >> 2] = $3;
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortmNvYmNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  block3 : {
   block2 : {
    block1 : {
     $2 = HEAP32[$0 + 4 >> 2];
     $3 = $2 >>> 0 < HEAPU32[$0 >> 2];
     if (!$3) {
      $4 = $0 + 8 | 0;
      $5 = 2;
      while (1) {
       $6 = $2;
       $2 = HEAP32[$4 >> 2];
       if ($6 >>> 0 > $2 >>> 0) {
        break block1
       }
       $4 = $4 + 4 | 0;
       $5 = $5 + 1 | 0;
       if (($5 | 0) != ($1 | 0)) {
        continue
       }
       break;
      };
      break block2;
     }
     $4 = $0 + 8 | 0;
     $5 = 2;
     while (1) {
      $6 = $2;
      $2 = HEAP32[$4 >> 2];
      if ($6 >>> 0 <= $2 >>> 0) {
       break block1
      }
      $4 = $4 + 4 | 0;
      $5 = $5 + 1 | 0;
      if (($5 | 0) != ($1 | 0)) {
       continue
      }
      break;
     };
     break block2;
    }
    if (($1 | 0) != ($5 | 0)) {
     break block3
    }
   }
   block4 : {
    if (!$3) {
     break block4
    }
    $8 = $1 >>> 1 & 268435454;
    $7 = ($1 << 2) + $0 | 0;
    $5 = $7 - 4 | 0;
    $4 = 0;
    $2 = $0;
    while (1) {
     $3 = HEAP32[$5 >> 2];
     HEAP32[$5 >> 2] = HEAP32[$2 >> 2];
     HEAP32[$2 >> 2] = $3;
     $3 = (($4 ^ 1073741822) << 2) + $7 | 0;
     $9 = HEAP32[$3 >> 2];
     $6 = $3;
     $3 = $2 + 4 | 0;
     HEAP32[$6 >> 2] = HEAP32[$3 >> 2];
     HEAP32[$3 >> 2] = $9;
     $5 = $5 - 8 | 0;
     $2 = $2 + 8 | 0;
     $3 = $4;
     $4 = $3 + 2 | 0;
     if (($8 | 0) != ($4 | 0)) {
      continue
     }
     break;
    };
    if (!($1 & 2)) {
     break block4
    }
    $0 = ($4 << 2) + $0 | 0;
    $1 = HEAP32[$0 >> 2];
    $2 = $0;
    $0 = (-3 - $3 << 2) + $7 | 0;
    HEAP32[$2 >> 2] = HEAP32[$0 >> 2];
    HEAP32[$0 >> 2] = $1;
   }
   return;
  }
  _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable9quicksort9quicksortmNvYmNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $1, 0, Math_clz32($1 | 1) << 1 ^ 62);
 }
 
 function rs_run_headless($0, $1) {
  $0 = $0 | 0;
  $1 = +$1;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0.0, $6 = 0;
  $3 = $1 >= 0.0;
  block1 : {
   if ($3 & $1 < 18446744073709551615.0) {
    $2 = ~~$1 >>> 0;
    if (Math_abs($1) >= 1.0) {
     if ($1 > 0.0) {
      $5 = Math_min(Math_floor($1 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $5 = Math_ceil(($1 - +(~~$1 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $4 = ~~$5 >>> 0;
    } else {
     $4 = 0
    }
    break block1;
   }
   $4 = 0;
  }
  $6 = $3 ? $2 : 0;
  $2 = $1 > 18446744073709549568.0;
  _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10advance_to($0, $2 ? -1 : $6, $2 ? -1 : $3 ? $4 : 0);
  $2 = HEAP32[$0 + 104 >> 2];
  $3 = $2 + HEAP32[$0 + 88 >> 2] | 0;
  $0 = HEAP32[$0 + 92 >> 2] + HEAP32[$0 + 108 >> 2] | 0;
  return +(+($3 >>> 0) + +(($2 >>> 0 > $3 >>> 0 ? $0 + 1 | 0 : $0) >>> 0) * 4294967296.0);
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10advance_to($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $14 = __stack_pointer + -64 | 0;
  __stack_pointer = $14;
  $31 = $0 + 36 | 0;
  $28 = $0 + 292 | 0;
  block160 : {
   block171 : {
    block174 : {
     block176 : {
      block177 : {
       block178 : {
        block179 : {
         block181 : {
          block183 : {
           block184 : {
            block185 : {
             label8 : while (1) {
              $7 = -1;
              $13 = -1;
              block : {
               $3 = HEAP32[$0 + 300 >> 2];
               if (!$3) {
                break block
               }
               $12 = HEAP32[$0 + 308 >> 2];
               $21 = HEAP32[$0 + 312 >> 2];
               $6 = HEAP32[$0 + 296 >> 2];
               while (1) {
                $4 = HEAP32[$6 + 8 >> 2];
                if ($21 >>> 0 > $4 >>> 0) {
                 $7 = HEAP32[$6 >> 2];
                 $4 = $12 + ($4 << 3) | 0;
                 $13 = HEAP32[$6 + 4 >> 2];
                 if (($7 | 0) == HEAP32[$4 >> 2] & ($13 | 0) == HEAP32[$4 + 4 >> 2]) {
                  break block
                 }
                 $7 = $3 - 1 | 0;
                 HEAP32[$0 + 300 >> 2] = $7;
                 if (!$7) {
                  $7 = -1;
                  $13 = -1;
                  break block;
                 }
                 $4 = $6 + ($7 << 4) | 0;
                 $8 = HEAP32[$4 >> 2];
                 $5 = HEAP32[$4 + 4 >> 2];
                 $13 = $5;
                 $9 = HEAP32[$4 + 8 >> 2];
                 HEAP32[$6 + 8 >> 2] = $9;
                 HEAP32[$6 >> 2] = $8;
                 HEAP32[$6 + 4 >> 2] = $5;
                 $4 = 0;
                 $5 = 1;
                 if ($3 >>> 0 >= 4) {
                  $4 = $7 - 2 | 0;
                  $15 = $4 >>> 0 <= $7 >>> 0 ? $4 : 0;
                  $4 = 0;
                  while (1) {
                   $10 = $6 + ($5 << 4) | 0;
                   $16 = $10 + 16 | 0;
                   $11 = HEAP32[$16 >> 2];
                   $18 = $6 + ($4 << 4) | 0;
                   $17 = $5;
                   $19 = HEAPU32[$10 + 24 >> 2] <= HEAPU32[$10 + 8 >> 2];
                   $4 = HEAP32[$16 + 4 >> 2];
                   $5 = HEAP32[$10 + 4 >> 2];
                   $10 = HEAP32[$10 >> 2];
                   $4 = $17 + (($10 | 0) == ($11 | 0) & ($4 | 0) == ($5 | 0) ? $19 : ($4 | 0) == ($5 | 0) & $10 >>> 0 >= $11 >>> 0 | $4 >>> 0 < $5 >>> 0) | 0;
                   $5 = $6 + ($4 << 4) | 0;
                   $10 = HEAP32[$5 + 4 >> 2];
                   HEAP32[$18 >> 2] = HEAP32[$5 >> 2];
                   HEAP32[$18 + 4 >> 2] = $10;
                   $10 = HEAP32[$5 + 12 >> 2];
                   HEAP32[$18 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                   HEAP32[$18 + 12 >> 2] = $10;
                   $10 = $4 << 1;
                   $5 = $10 | 1;
                   if ($10 >>> 0 < $15 >>> 0) {
                    continue
                   }
                   break;
                  };
                 }
                 block7 : {
                  block6 : {
                   block5 : {
                    if (($5 | 0) == ($3 - 2 | 0)) {
                     $3 = $6 + ($5 << 4) | 0;
                     $10 = HEAP32[$3 + 12 >> 2];
                     $4 = $6 + ($4 << 4) | 0;
                     HEAP32[$4 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                     HEAP32[$4 + 12 >> 2] = $10;
                     $10 = HEAP32[$3 + 4 >> 2];
                     HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
                     HEAP32[$4 + 4 >> 2] = $10;
                     HEAP32[$3 + 8 >> 2] = $9;
                     HEAP32[$3 >> 2] = $8;
                     HEAP32[$3 + 4 >> 2] = $13;
                     $4 = $5;
                     break block5;
                    }
                    $3 = $6 + ($4 << 4) | 0;
                    HEAP32[$3 + 8 >> 2] = $9;
                    HEAP32[$3 >> 2] = $8;
                    HEAP32[$3 + 4 >> 2] = $13;
                    if (!$4) {
                     break block6
                    }
                   }
                   while (1) {
                    $3 = $4 - 1 >>> 1 | 0;
                    $5 = $6 + ($3 << 4) | 0;
                    $10 = HEAP32[$5 >> 2];
                    $18 = HEAP32[$5 + 4 >> 2];
                    if (($8 | 0) == ($10 | 0) & ($13 | 0) == ($18 | 0) ? $9 >>> 0 >= HEAPU32[$5 + 8 >> 2] : ($13 | 0) == ($18 | 0) & $8 >>> 0 >= $10 >>> 0 | $13 >>> 0 > $18 >>> 0) {
                     break block7
                    }
                    $10 = HEAP32[$5 + 12 >> 2];
                    $4 = $6 + ($4 << 4) | 0;
                    HEAP32[$4 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                    HEAP32[$4 + 12 >> 2] = $10;
                    $10 = HEAP32[$5 + 4 >> 2];
                    HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
                    HEAP32[$4 + 4 >> 2] = $10;
                    $4 = $3;
                    if ($3) {
                     continue
                    }
                    break;
                   };
                  }
                  $4 = 0;
                 }
                 $3 = $6 + ($4 << 4) | 0;
                 HEAP32[$3 + 8 >> 2] = $9;
                 HEAP32[$3 >> 2] = $8;
                 HEAP32[$3 + 4 >> 2] = $13;
                 $3 = $7;
                 continue;
                }
                break;
               };
               _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, $21, 1055240);
               wasm2js_trap();
              }
              $9 = HEAP32[$0 + 56 >> 2];
              if ($9) {
               $19 = HEAP32[$0 + 28 >> 2];
               $15 = HEAP32[$0 + 32 >> 2];
               $8 = HEAP32[$0 + 52 >> 2];
               while (1) {
                block11 : {
                 $3 = $9;
                 block13 : {
                  $4 = HEAP32[$8 + 16 >> 2];
                  if ($15 >>> 0 > $4 >>> 0) {
                   block10 : {
                    $4 = $19 + ($4 << 6) | 0;
                    if (HEAP32[$4 >> 2] == -1) {
                     break block10
                    }
                    if (HEAP32[$4 + 24 >> 2] != HEAP32[$8 + 8 >> 2] | HEAP32[$4 + 28 >> 2] != HEAP32[$8 + 12 >> 2]) {
                     break block10
                    }
                    $6 = HEAP32[$8 >> 2];
                    $9 = HEAP32[$8 + 4 >> 2];
                    break block11;
                   }
                   $9 = $3 - 1 | 0;
                   HEAP32[$0 + 56 >> 2] = $9;
                   if (!$9) {
                    $6 = -1;
                    $9 = -1;
                    break block11;
                   }
                   $4 = $8 + Math_imul($9, 24) | 0;
                   $5 = HEAP32[$4 + 4 >> 2];
                   $6 = HEAP32[$4 + 12 >> 2];
                   $10 = HEAP32[$4 + 20 >> 2];
                   HEAP8[$8 + 20 | 0] = $10;
                   HEAP8[$8 + 21 | 0] = $10 >>> 8;
                   HEAP8[$8 + 22 | 0] = $10 >>> 16;
                   HEAP8[$8 + 23 | 0] = $10 >>> 24;
                   $10 = HEAP32[$4 >> 2];
                   $18 = HEAP32[$4 + 8 >> 2];
                   $4 = HEAP32[$4 + 16 >> 2];
                   HEAP8[$8 + 16 | 0] = $4;
                   HEAP8[$8 + 17 | 0] = $4 >>> 8;
                   HEAP8[$8 + 18 | 0] = $4 >>> 16;
                   HEAP8[$8 + 19 | 0] = $4 >>> 24;
                   HEAP8[$8 + 12 | 0] = $6;
                   HEAP8[$8 + 13 | 0] = $6 >>> 8;
                   HEAP8[$8 + 14 | 0] = $6 >>> 16;
                   HEAP8[$8 + 15 | 0] = $6 >>> 24;
                   HEAP8[$8 + 8 | 0] = $18;
                   HEAP8[$8 + 9 | 0] = $18 >>> 8;
                   HEAP8[$8 + 10 | 0] = $18 >>> 16;
                   HEAP8[$8 + 11 | 0] = $18 >>> 24;
                   HEAP8[$8 + 4 | 0] = $5;
                   HEAP8[$8 + 5 | 0] = $5 >>> 8;
                   HEAP8[$8 + 6 | 0] = $5 >>> 16;
                   HEAP8[$8 + 7 | 0] = $5 >>> 24;
                   HEAP8[$8 | 0] = $10;
                   HEAP8[$8 + 1 | 0] = $10 >>> 8;
                   HEAP8[$8 + 2 | 0] = $10 >>> 16;
                   HEAP8[$8 + 3 | 0] = $10 >>> 24;
                   $4 = HEAP32[$8 + 20 >> 2];
                   HEAP32[$14 + 56 >> 2] = HEAP32[$8 + 16 >> 2];
                   HEAP32[$14 + 60 >> 2] = $4;
                   $4 = HEAP32[$8 + 12 >> 2];
                   HEAP32[$14 + 48 >> 2] = HEAP32[$8 + 8 >> 2];
                   HEAP32[$14 + 52 >> 2] = $4;
                   $4 = HEAP32[$8 + 4 >> 2];
                   HEAP32[$14 + 40 >> 2] = HEAP32[$8 >> 2];
                   HEAP32[$14 + 44 >> 2] = $4;
                   $5 = 0;
                   $4 = 1;
                   if ($3 >>> 0 < 4) {
                    break block13
                   }
                   $4 = $9 - 2 | 0;
                   $21 = $4 >>> 0 <= $9 >>> 0 ? $4 : 0;
                   $4 = 1;
                   while (1) {
                    $6 = $8 + Math_imul($5, 24) | 0;
                    $17 = $4;
                    $4 = $8 + Math_imul($4, 24) | 0;
                    $5 = $4 + 24 | 0;
                    $11 = HEAP32[$5 >> 2];
                    $12 = HEAP32[$4 >> 2];
                    $10 = HEAP32[$5 + 4 >> 2];
                    $18 = HEAP32[$4 + 4 >> 2];
                    block15 : {
                     if (!(($11 | 0) == ($12 | 0) & ($10 | 0) == ($18 | 0))) {
                      $5 = ($10 | 0) == ($18 | 0) & $11 >>> 0 <= $12 >>> 0 | $10 >>> 0 < $18 >>> 0;
                      break block15;
                     }
                     $11 = HEAP32[$5 + 8 >> 2];
                     $12 = HEAP32[$4 + 8 >> 2];
                     $10 = HEAP32[$5 + 12 >> 2];
                     $18 = HEAP32[$4 + 12 >> 2];
                     if (!(($11 | 0) == ($12 | 0) & ($10 | 0) == ($18 | 0))) {
                      $5 = ($10 | 0) == ($18 | 0) & $11 >>> 0 <= $12 >>> 0 | $10 >>> 0 < $18 >>> 0;
                      break block15;
                     }
                     $5 = HEAPU32[$5 + 16 >> 2] <= HEAPU32[$4 + 16 >> 2];
                    }
                    $5 = $17 + $5 | 0;
                    $4 = $8 + Math_imul($5, 24) | 0;
                    $10 = HEAP32[$4 + 20 >> 2];
                    HEAP32[$6 + 16 >> 2] = HEAP32[$4 + 16 >> 2];
                    HEAP32[$6 + 20 >> 2] = $10;
                    $10 = HEAP32[$4 + 12 >> 2];
                    HEAP32[$6 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                    HEAP32[$6 + 12 >> 2] = $10;
                    $10 = HEAP32[$4 + 4 >> 2];
                    HEAP32[$6 >> 2] = HEAP32[$4 >> 2];
                    HEAP32[$6 + 4 >> 2] = $10;
                    $6 = $5 << 1;
                    $4 = $6 | 1;
                    if ($6 >>> 0 < $21 >>> 0) {
                     continue
                    }
                    break;
                   };
                   break block13;
                  }
                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, $15, 1054332);
                  wasm2js_trap();
                 }
                 block18 : {
                  if (($4 | 0) != ($3 - 2 | 0)) {
                   $4 = $5;
                   break block18;
                  }
                  $3 = $8 + Math_imul($5, 24) | 0;
                  $5 = $8 + Math_imul($4, 24) | 0;
                  $6 = HEAP32[$5 + 20 >> 2];
                  HEAP32[$3 + 16 >> 2] = HEAP32[$5 + 16 >> 2];
                  HEAP32[$3 + 20 >> 2] = $6;
                  $6 = HEAP32[$5 + 12 >> 2];
                  HEAP32[$3 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                  HEAP32[$3 + 12 >> 2] = $6;
                  $6 = HEAP32[$5 + 4 >> 2];
                  HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
                  HEAP32[$3 + 4 >> 2] = $6;
                 }
                 $5 = HEAP32[$14 + 60 >> 2];
                 $3 = $8 + Math_imul($4, 24) | 0;
                 $6 = HEAP32[$14 + 56 >> 2];
                 HEAP32[$3 + 16 >> 2] = $6;
                 HEAP32[$3 + 20 >> 2] = $5;
                 $5 = HEAP32[$14 + 52 >> 2];
                 $18 = $5;
                 $11 = HEAP32[$14 + 48 >> 2];
                 HEAP32[$3 + 8 >> 2] = $11;
                 HEAP32[$3 + 12 >> 2] = $5;
                 $5 = HEAP32[$14 + 44 >> 2];
                 $21 = $5;
                 $12 = HEAP32[$14 + 40 >> 2];
                 HEAP32[$3 >> 2] = $12;
                 HEAP32[$3 + 4 >> 2] = $5;
                 $17 = HEAP32[$3 + 20 >> 2];
                 $3 = 0;
                 block19 : {
                  if (!$4) {
                   break block19
                  }
                  while (1) {
                   block21 : {
                    $5 = $4;
                    $4 = $4 - 1 >>> 1 | 0;
                    $10 = $8 + Math_imul($4, 24) | 0;
                    $20 = HEAP32[$10 >> 2];
                    $16 = HEAP32[$10 + 4 >> 2];
                    if (!(($12 | 0) == ($20 | 0) & ($21 | 0) == ($16 | 0))) {
                     if (($16 | 0) == ($21 | 0) & $12 >>> 0 < $20 >>> 0 | $16 >>> 0 > $21 >>> 0) {
                      break block21
                     }
                     $3 = $5;
                     break block19;
                    }
                    $20 = HEAP32[$10 + 8 >> 2];
                    $16 = HEAP32[$10 + 12 >> 2];
                    if (!(($11 | 0) != ($20 | 0) | ($18 | 0) != ($16 | 0))) {
                     if ($6 >>> 0 < HEAPU32[$10 + 16 >> 2]) {
                      break block21
                     }
                     $3 = $5;
                     break block19;
                    }
                    if (($16 | 0) == ($18 | 0) & $11 >>> 0 < $20 >>> 0 | $16 >>> 0 > $18 >>> 0) {
                     break block21
                    }
                    $3 = $5;
                    break block19;
                   }
                   $16 = HEAP32[$10 + 20 >> 2];
                   $5 = $8 + Math_imul($5, 24) | 0;
                   HEAP32[$5 + 16 >> 2] = HEAP32[$10 + 16 >> 2];
                   HEAP32[$5 + 20 >> 2] = $16;
                   $16 = HEAP32[$10 + 12 >> 2];
                   HEAP32[$5 + 8 >> 2] = HEAP32[$10 + 8 >> 2];
                   HEAP32[$5 + 12 >> 2] = $16;
                   $16 = HEAP32[$10 + 4 >> 2];
                   HEAP32[$5 >> 2] = HEAP32[$10 >> 2];
                   HEAP32[$5 + 4 >> 2] = $16;
                   if ($4) {
                    continue
                   }
                   break;
                  };
                 }
                 $3 = $8 + Math_imul($3, 24) | 0;
                 HEAP32[$3 + 20 >> 2] = $17;
                 HEAP32[$3 + 16 >> 2] = $6;
                 HEAP32[$3 + 8 >> 2] = $11;
                 HEAP32[$3 + 12 >> 2] = $18;
                 HEAP32[$3 >> 2] = $12;
                 HEAP32[$3 + 4 >> 2] = $21;
                 continue;
                }
                break;
               };
               $3 = ($9 | 0) == ($13 | 0) & $6 >>> 0 < $7 >>> 0 | $9 >>> 0 < $13 >>> 0;
               $7 = $3 ? $6 : $7;
               $13 = $3 ? $9 : $13;
              }
              $21 = HEAP32[$0 + 224 >> 2];
              $18 = HEAP32[$0 + 228 >> 2];
              $6 = HEAP32[$0 + 272 >> 2];
              $5 = HEAP32[$0 + 276 >> 2];
              $3 = ($13 | 0) == ($5 | 0) & $6 >>> 0 < $7 >>> 0 | $5 >>> 0 < $13 >>> 0;
              $4 = $3 ? $6 : $7;
              block25 : {
               block27 : {
                block28 : {
                 $3 = $3 ? $5 : $13;
                 if (!(($2 | 0) == ($3 | 0) & $1 >>> 0 < $4 >>> 0 | $2 >>> 0 < $3 >>> 0)) {
                  if (!(($3 | 0) == ($18 | 0) & $4 >>> 0 <= $21 >>> 0 | $3 >>> 0 < $18 >>> 0)) {
                   HEAP32[$0 + 224 >> 2] = $4;
                   HEAP32[$0 + 228 >> 2] = $3;
                   $21 = $4;
                   $18 = $3;
                  }
                  if (($5 | 0) == ($18 | 0) & $6 >>> 0 > $21 >>> 0 | $5 >>> 0 > $18 >>> 0) {
                   break block25
                  }
                  $3 = $18 + HEAP32[$0 + 212 >> 2] | 0;
                  $4 = $3 + 1 | 0;
                  $5 = $3;
                  $3 = $21 + HEAP32[$0 + 208 >> 2] | 0;
                  $4 = $3 >>> 0 < $21 >>> 0 ? $4 : $5;
                  HEAP32[$0 + 272 >> 2] = $3;
                  HEAP32[$0 + 276 >> 2] = $4;
                  $3 = HEAP32[$0 + 288 >> 2];
                  if (!HEAP32[$0 + 16 >> 2]) {
                   $6 = HEAP32[$0 + 284 >> 2];
                   break block27;
                  }
                  $4 = HEAP32[$0 + 20 >> 2];
                  if ($4 >>> 0 >= $3 >>> 0) {
                   break block28
                  }
                  $6 = HEAP32[$0 + 284 >> 2];
                  if (HEAPU8[($6 + Math_imul($4, 152) | 0) + 148 | 0] != 2) {
                   break block27
                  }
                  _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($0, $4);
                  break block25;
                 }
                 if (!(($2 | 0) == ($18 | 0) & $1 >>> 0 <= $21 >>> 0 | $2 >>> 0 < $18 >>> 0)) {
                  HEAP32[$0 + 224 >> 2] = $1;
                  HEAP32[$0 + 228 >> 2] = $2;
                 }
                 __stack_pointer = $14 - -64 | 0;
                 return;
                }
                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, $3, 1054636);
                wasm2js_trap();
               }
               $8 = $6 + 152 | 0;
               $5 = Math_imul($3, 152);
               $3 = $5 - 152 | 0;
               $9 = $5 + $6 | 0;
               block30 : {
                while (1) {
                 $7 = $6;
                 $4 = $8;
                 $13 = $3;
                 if (!$5) {
                  break block30
                 }
                 $3 = $3 - 152 | 0;
                 $8 = $4 + 152 | 0;
                 $5 = $5 - 152 | 0;
                 $6 = $6 + 152 | 0;
                 if (HEAPU8[$7 + 148 | 0] != 2) {
                  continue
                 }
                 break;
                };
                if (($6 | 0) == ($9 | 0)) {
                 _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($0, HEAP32[$7 + 128 >> 2]);
                 break block25;
                }
                $3 = $9 - $6 | 0;
                $9 = ($3 >>> 0) / 152 | 0;
                $5 = HEAP32[$7 + 132 >> 2];
                $8 = 0;
                block36 : {
                 block35 : {
                  if ($3 - 152 >>> 0 >= 152) {
                   $3 = $9 & 1;
                   $13 = ($13 >>> 0) / 304 << 1;
                   while (1) {
                    if (HEAPU8[$4 + 148 | 0] == 2) {
                     $9 = HEAP32[$4 + 132 >> 2];
                     $10 = $9 >>> 0 < $5 >>> 0;
                     $7 = $10 ? $7 : $4;
                     $5 = $10 ? $5 : $9;
                    }
                    if (HEAPU8[$4 + 300 | 0] == 2) {
                     $9 = HEAP32[$4 + 284 >> 2];
                     $10 = $9 >>> 0 < $5 >>> 0;
                     $7 = $10 ? $7 : $4 + 152 | 0;
                     $5 = $10 ? $5 : $9;
                    }
                    $4 = $4 + 304 | 0;
                    $8 = $8 + 2 | 0;
                    if (($13 | 0) != ($8 | 0)) {
                     continue
                    }
                    break;
                   };
                   if (!$3) {
                    break block35
                   }
                  }
                  $4 = Math_imul($8, 152) + $6 | 0;
                  if (HEAPU8[$4 + 148 | 0] != 2) {
                   break block35
                  }
                  if (HEAPU32[$4 + 132 >> 2] >= $5 >>> 0) {
                   break block36
                  }
                 }
                 $4 = $7;
                 if (!$4) {
                  break block30
                 }
                }
                _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($0, HEAP32[$4 + 128 >> 2]);
                break block25;
               }
               $3 = HEAP32[$0 + 116 >> 2];
               $5 = $3;
               $4 = $3 + 1 | 0;
               $3 = HEAP32[$0 + 112 >> 2] + 1 | 0;
               $4 = $3 ? $5 : $4;
               HEAP32[$0 + 112 >> 2] = $3;
               HEAP32[$0 + 116 >> 2] = $4;
               $3 = HEAP32[$0 + 124 >> 2];
               $5 = $3;
               $4 = $3 + 1 | 0;
               $3 = HEAP32[$0 + 120 >> 2] + 1 | 0;
               $4 = $3 ? $5 : $4;
               HEAP32[$0 + 120 >> 2] = $3;
               HEAP32[$0 + 124 >> 2] = $4;
              }
              label19 : while (1) {
               $13 = 0;
               label9 : while (1) {
                $7 = HEAP32[$0 + 296 >> 2];
                block156 : {
                 block158 : {
                  block157 : {
                   block155 : {
                    block154 : {
                     while (1) {
                      block38 : {
                       $12 = HEAP32[$0 + 300 >> 2];
                       if ($12) {
                        $4 = HEAP32[$0 + 296 >> 2];
                        $3 = HEAP32[$4 >> 2];
                        $19 = HEAP32[$4 + 4 >> 2];
                        $5 = $19;
                        if (($18 | 0) == ($5 | 0) & $3 >>> 0 <= $21 >>> 0 | $5 >>> 0 < $18 >>> 0) {
                         break block38
                        }
                       }
                       $9 = HEAP32[$0 + 56 >> 2];
                       block39 : {
                        if (!$9) {
                         break block39
                        }
                        label20 : while (1) {
                         $11 = HEAP32[$0 + 52 >> 2];
                         while (1) {
                          block44 : {
                           block48 : {
                            block49 : {
                             $8 = HEAP32[$0 + 32 >> 2];
                             $10 = HEAP32[$0 + 52 >> 2];
                             $12 = HEAP32[$10 + 16 >> 2];
                             if ($8 >>> 0 > $12 >>> 0) {
                              block42 : {
                               $19 = $12 << 6;
                               $3 = $19 + HEAP32[$0 + 28 >> 2] | 0;
                               if (HEAP32[$3 >> 2] != -1) {
                                if (HEAP32[$3 + 24 >> 2] == HEAP32[$10 + 8 >> 2] & HEAP32[$3 + 28 >> 2] == HEAP32[$10 + 12 >> 2]) {
                                 break block42
                                }
                               }
                               $4 = $9 - 1 | 0;
                               HEAP32[$0 + 56 >> 2] = $4;
                               if (!$4) {
                                $3 = $13;
                                $13 = 0;
                                if (!$3) {
                                 continue label8
                                }
                                continue label9;
                               }
                               $3 = $11 + Math_imul($4, 24) | 0;
                               $5 = HEAP32[$3 + 4 >> 2];
                               $7 = HEAP32[$3 + 12 >> 2];
                               $6 = HEAP32[$3 + 20 >> 2];
                               HEAP8[$11 + 20 | 0] = $6;
                               HEAP8[$11 + 21 | 0] = $6 >>> 8;
                               HEAP8[$11 + 22 | 0] = $6 >>> 16;
                               HEAP8[$11 + 23 | 0] = $6 >>> 24;
                               $6 = HEAP32[$3 >> 2];
                               $8 = HEAP32[$3 + 8 >> 2];
                               $3 = HEAP32[$3 + 16 >> 2];
                               HEAP8[$11 + 16 | 0] = $3;
                               HEAP8[$11 + 17 | 0] = $3 >>> 8;
                               HEAP8[$11 + 18 | 0] = $3 >>> 16;
                               HEAP8[$11 + 19 | 0] = $3 >>> 24;
                               HEAP8[$11 + 12 | 0] = $7;
                               HEAP8[$11 + 13 | 0] = $7 >>> 8;
                               HEAP8[$11 + 14 | 0] = $7 >>> 16;
                               HEAP8[$11 + 15 | 0] = $7 >>> 24;
                               HEAP8[$11 + 8 | 0] = $8;
                               HEAP8[$11 + 9 | 0] = $8 >>> 8;
                               HEAP8[$11 + 10 | 0] = $8 >>> 16;
                               HEAP8[$11 + 11 | 0] = $8 >>> 24;
                               HEAP8[$11 + 4 | 0] = $5;
                               HEAP8[$11 + 5 | 0] = $5 >>> 8;
                               HEAP8[$11 + 6 | 0] = $5 >>> 16;
                               HEAP8[$11 + 7 | 0] = $5 >>> 24;
                               HEAP8[$11 | 0] = $6;
                               HEAP8[$11 + 1 | 0] = $6 >>> 8;
                               HEAP8[$11 + 2 | 0] = $6 >>> 16;
                               HEAP8[$11 + 3 | 0] = $6 >>> 24;
                               $3 = HEAP32[$11 + 20 >> 2];
                               HEAP32[$14 + 56 >> 2] = HEAP32[$11 + 16 >> 2];
                               HEAP32[$14 + 60 >> 2] = $3;
                               $3 = HEAP32[$11 + 12 >> 2];
                               HEAP32[$14 + 48 >> 2] = HEAP32[$11 + 8 >> 2];
                               HEAP32[$14 + 52 >> 2] = $3;
                               $3 = HEAP32[$11 + 4 >> 2];
                               HEAP32[$14 + 40 >> 2] = HEAP32[$11 >> 2];
                               HEAP32[$14 + 44 >> 2] = $3;
                               $5 = 0;
                               $7 = 1;
                               if ($9 >>> 0 < 4) {
                                break block44
                               }
                               $3 = $4 - 2 | 0;
                               $8 = $3 >>> 0 <= $4 >>> 0 ? $3 : 0;
                               while (1) {
                                $3 = $11 + Math_imul($5, 24) | 0;
                                $17 = $7;
                                $4 = $11 + Math_imul($7, 24) | 0;
                                $5 = $4 + 24 | 0;
                                $10 = HEAP32[$5 >> 2];
                                $12 = HEAP32[$4 >> 2];
                                $7 = HEAP32[$5 + 4 >> 2];
                                $6 = HEAP32[$4 + 4 >> 2];
                                block46 : {
                                 if (!(($10 | 0) == ($12 | 0) & ($7 | 0) == ($6 | 0))) {
                                  $5 = ($6 | 0) == ($7 | 0) & $10 >>> 0 <= $12 >>> 0 | $6 >>> 0 > $7 >>> 0;
                                  break block46;
                                 }
                                 $10 = HEAP32[$5 + 8 >> 2];
                                 $12 = HEAP32[$4 + 8 >> 2];
                                 $7 = HEAP32[$5 + 12 >> 2];
                                 $6 = HEAP32[$4 + 12 >> 2];
                                 if (!(($10 | 0) == ($12 | 0) & ($7 | 0) == ($6 | 0))) {
                                  $5 = ($6 | 0) == ($7 | 0) & $10 >>> 0 <= $12 >>> 0 | $6 >>> 0 > $7 >>> 0;
                                  break block46;
                                 }
                                 $5 = HEAPU32[$5 + 16 >> 2] <= HEAPU32[$4 + 16 >> 2];
                                }
                                $5 = $17 + $5 | 0;
                                $4 = $11 + Math_imul($5, 24) | 0;
                                $7 = HEAP32[$4 + 20 >> 2];
                                HEAP32[$3 + 16 >> 2] = HEAP32[$4 + 16 >> 2];
                                HEAP32[$3 + 20 >> 2] = $7;
                                $7 = HEAP32[$4 + 12 >> 2];
                                HEAP32[$3 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                                HEAP32[$3 + 12 >> 2] = $7;
                                $7 = HEAP32[$4 + 4 >> 2];
                                HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
                                HEAP32[$3 + 4 >> 2] = $7;
                                $3 = $5 << 1;
                                $7 = $3 | 1;
                                if ($3 >>> 0 < $8 >>> 0) {
                                 continue
                                }
                                break;
                               };
                               break block44;
                              }
                              $3 = HEAP32[$10 + 4 >> 2];
                              if (($18 | 0) == ($3 | 0) & $21 >>> 0 < HEAPU32[$10 >> 2] | $3 >>> 0 > $18 >>> 0) {
                               break block39
                              }
                              $5 = $9 - 1 | 0;
                              HEAP32[$0 + 56 >> 2] = $5;
                              if (!$5) {
                               break block48
                              }
                              $3 = $10 + Math_imul($5, 24) | 0;
                              $4 = HEAP32[$3 + 4 >> 2];
                              $7 = HEAP32[$3 + 12 >> 2];
                              $6 = HEAP32[$3 + 20 >> 2];
                              HEAP8[$10 + 20 | 0] = $6;
                              HEAP8[$10 + 21 | 0] = $6 >>> 8;
                              HEAP8[$10 + 22 | 0] = $6 >>> 16;
                              HEAP8[$10 + 23 | 0] = $6 >>> 24;
                              $6 = HEAP32[$3 >> 2];
                              $8 = HEAP32[$3 + 8 >> 2];
                              $3 = HEAP32[$3 + 16 >> 2];
                              HEAP8[$10 + 16 | 0] = $3;
                              HEAP8[$10 + 17 | 0] = $3 >>> 8;
                              HEAP8[$10 + 18 | 0] = $3 >>> 16;
                              HEAP8[$10 + 19 | 0] = $3 >>> 24;
                              HEAP8[$10 + 12 | 0] = $7;
                              HEAP8[$10 + 13 | 0] = $7 >>> 8;
                              HEAP8[$10 + 14 | 0] = $7 >>> 16;
                              HEAP8[$10 + 15 | 0] = $7 >>> 24;
                              HEAP8[$10 + 8 | 0] = $8;
                              HEAP8[$10 + 9 | 0] = $8 >>> 8;
                              HEAP8[$10 + 10 | 0] = $8 >>> 16;
                              HEAP8[$10 + 11 | 0] = $8 >>> 24;
                              HEAP8[$10 + 4 | 0] = $4;
                              HEAP8[$10 + 5 | 0] = $4 >>> 8;
                              HEAP8[$10 + 6 | 0] = $4 >>> 16;
                              HEAP8[$10 + 7 | 0] = $4 >>> 24;
                              HEAP8[$10 | 0] = $6;
                              HEAP8[$10 + 1 | 0] = $6 >>> 8;
                              HEAP8[$10 + 2 | 0] = $6 >>> 16;
                              HEAP8[$10 + 3 | 0] = $6 >>> 24;
                              $3 = HEAP32[$10 + 20 >> 2];
                              HEAP32[$14 + 56 >> 2] = HEAP32[$10 + 16 >> 2];
                              HEAP32[$14 + 60 >> 2] = $3;
                              $3 = HEAP32[$10 + 12 >> 2];
                              HEAP32[$14 + 48 >> 2] = HEAP32[$10 + 8 >> 2];
                              HEAP32[$14 + 52 >> 2] = $3;
                              $3 = HEAP32[$10 + 4 >> 2];
                              HEAP32[$14 + 40 >> 2] = HEAP32[$10 >> 2];
                              HEAP32[$14 + 44 >> 2] = $3;
                              $6 = 0;
                              $4 = 1;
                              if ($9 >>> 0 < 4) {
                               break block49
                              }
                              $3 = $5 - 2 | 0;
                              $8 = $3 >>> 0 <= $5 >>> 0 ? $3 : 0;
                              while (1) {
                               $3 = $10 + Math_imul($6, 24) | 0;
                               $17 = $4;
                               $4 = $10 + Math_imul($4, 24) | 0;
                               $5 = $4 + 24 | 0;
                               $11 = HEAP32[$5 >> 2];
                               $15 = HEAP32[$4 >> 2];
                               $7 = HEAP32[$5 + 4 >> 2];
                               $6 = HEAP32[$4 + 4 >> 2];
                               block51 : {
                                if (!(($11 | 0) == ($15 | 0) & ($7 | 0) == ($6 | 0))) {
                                 $5 = ($6 | 0) == ($7 | 0) & $11 >>> 0 <= $15 >>> 0 | $6 >>> 0 > $7 >>> 0;
                                 break block51;
                                }
                                $11 = HEAP32[$5 + 8 >> 2];
                                $15 = HEAP32[$4 + 8 >> 2];
                                $7 = HEAP32[$5 + 12 >> 2];
                                $6 = HEAP32[$4 + 12 >> 2];
                                if (!(($11 | 0) == ($15 | 0) & ($7 | 0) == ($6 | 0))) {
                                 $5 = ($6 | 0) == ($7 | 0) & $11 >>> 0 <= $15 >>> 0 | $6 >>> 0 > $7 >>> 0;
                                 break block51;
                                }
                                $5 = HEAPU32[$5 + 16 >> 2] <= HEAPU32[$4 + 16 >> 2];
                               }
                               $6 = $17 + $5 | 0;
                               $4 = $10 + Math_imul($6, 24) | 0;
                               $5 = HEAP32[$4 + 20 >> 2];
                               HEAP32[$3 + 16 >> 2] = HEAP32[$4 + 16 >> 2];
                               HEAP32[$3 + 20 >> 2] = $5;
                               $5 = HEAP32[$4 + 12 >> 2];
                               HEAP32[$3 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                               HEAP32[$3 + 12 >> 2] = $5;
                               $5 = HEAP32[$4 + 4 >> 2];
                               HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
                               HEAP32[$3 + 4 >> 2] = $5;
                               $3 = $6 << 1;
                               $4 = $3 | 1;
                               if ($3 >>> 0 < $8 >>> 0) {
                                continue
                               }
                               break;
                              };
                              break block49;
                             }
                             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($12, $8, 1054300);
                             wasm2js_trap();
                            }
                            block54 : {
                             if (($4 | 0) != ($9 - 2 | 0)) {
                              $4 = $6;
                              break block54;
                             }
                             $5 = $10 + Math_imul($4, 24) | 0;
                             $7 = HEAP32[$5 + 20 >> 2];
                             $3 = $10 + Math_imul($6, 24) | 0;
                             HEAP32[$3 + 16 >> 2] = HEAP32[$5 + 16 >> 2];
                             HEAP32[$3 + 20 >> 2] = $7;
                             $7 = HEAP32[$5 + 12 >> 2];
                             HEAP32[$3 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                             HEAP32[$3 + 12 >> 2] = $7;
                             $7 = HEAP32[$5 + 4 >> 2];
                             HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
                             HEAP32[$3 + 4 >> 2] = $7;
                            }
                            $5 = HEAP32[$14 + 60 >> 2];
                            $3 = $10 + Math_imul($4, 24) | 0;
                            $7 = HEAP32[$14 + 56 >> 2];
                            HEAP32[$3 + 16 >> 2] = $7;
                            HEAP32[$3 + 20 >> 2] = $5;
                            $5 = HEAP32[$14 + 52 >> 2];
                            $8 = $5;
                            $11 = HEAP32[$14 + 48 >> 2];
                            HEAP32[$3 + 8 >> 2] = $11;
                            HEAP32[$3 + 12 >> 2] = $5;
                            $5 = HEAP32[$14 + 44 >> 2];
                            $9 = $5;
                            $15 = HEAP32[$14 + 40 >> 2];
                            HEAP32[$3 >> 2] = $15;
                            HEAP32[$3 + 4 >> 2] = $5;
                            $17 = HEAP32[$3 + 20 >> 2];
                            $3 = 0;
                            block55 : {
                             if (!$4) {
                              break block55
                             }
                             while (1) {
                              block57 : {
                               $5 = $4;
                               $4 = $4 - 1 >>> 1 | 0;
                               $6 = $10 + Math_imul($4, 24) | 0;
                               $20 = HEAP32[$6 >> 2];
                               $16 = HEAP32[$6 + 4 >> 2];
                               if (!(($15 | 0) == ($20 | 0) & ($9 | 0) == ($16 | 0))) {
                                if (($9 | 0) == ($16 | 0) & $15 >>> 0 < $20 >>> 0 | $9 >>> 0 < $16 >>> 0) {
                                 break block57
                                }
                                $3 = $5;
                                break block55;
                               }
                               $20 = HEAP32[$6 + 8 >> 2];
                               $16 = HEAP32[$6 + 12 >> 2];
                               if (!(($11 | 0) != ($20 | 0) | ($8 | 0) != ($16 | 0))) {
                                if ($7 >>> 0 < HEAPU32[$6 + 16 >> 2]) {
                                 break block57
                                }
                                $3 = $5;
                                break block55;
                               }
                               if (($8 | 0) == ($16 | 0) & $11 >>> 0 < $20 >>> 0 | $8 >>> 0 < $16 >>> 0) {
                                break block57
                               }
                               $3 = $5;
                               break block55;
                              }
                              $16 = HEAP32[$6 + 20 >> 2];
                              $5 = $10 + Math_imul($5, 24) | 0;
                              HEAP32[$5 + 16 >> 2] = HEAP32[$6 + 16 >> 2];
                              HEAP32[$5 + 20 >> 2] = $16;
                              $16 = HEAP32[$6 + 12 >> 2];
                              HEAP32[$5 + 8 >> 2] = HEAP32[$6 + 8 >> 2];
                              HEAP32[$5 + 12 >> 2] = $16;
                              $16 = HEAP32[$6 + 4 >> 2];
                              HEAP32[$5 >> 2] = HEAP32[$6 >> 2];
                              HEAP32[$5 + 4 >> 2] = $16;
                              if ($4) {
                               continue
                              }
                              break;
                             };
                            }
                            $3 = $10 + Math_imul($3, 24) | 0;
                            HEAP32[$3 + 20 >> 2] = $17;
                            HEAP32[$3 + 16 >> 2] = $7;
                            HEAP32[$3 + 8 >> 2] = $11;
                            HEAP32[$3 + 12 >> 2] = $8;
                            HEAP32[$3 >> 2] = $15;
                            HEAP32[$3 + 4 >> 2] = $9;
                            $8 = HEAP32[$0 + 32 >> 2];
                           }
                           block141 : {
                            block105 : {
                             block107 : {
                              block77 : {
                               block83 : {
                                block84 : {
                                 block85 : {
                                  block89 : {
                                   block95 : {
                                    block101 : {
                                     block103 : {
                                      block108 : {
                                       block106 : {
                                        block102 : {
                                         block100 : {
                                          block98 : {
                                           block80 : {
                                            block79 : {
                                             block70 : {
                                              block63 : {
                                               block62 : {
                                                if ($8 >>> 0 > $12 >>> 0) {
                                                 $4 = $19 + HEAP32[$0 + 28 >> 2] | 0;
                                                 $15 = HEAP32[$4 >> 2];
                                                 HEAP32[$4 >> 2] = -1;
                                                 $5 = HEAPU8[$4 + 60 | 0];
                                                 $3 = HEAP32[$4 + 56 >> 2];
                                                 $11 = HEAP32[$4 + 52 >> 2];
                                                 $6 = HEAP32[$4 + 48 >> 2];
                                                 $24 = HEAP32[$4 + 20 >> 2];
                                                 $23 = HEAP32[$4 + 16 >> 2];
                                                 $7 = HEAP32[$4 + 12 >> 2];
                                                 $8 = HEAP32[$4 + 8 >> 2];
                                                 $10 = HEAP32[$4 + 4 >> 2];
                                                 $4 = HEAP32[$0 + 44 >> 2];
                                                 if (($4 | 0) == HEAP32[$0 + 36 >> 2]) {
                                                  _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($31)
                                                 }
                                                 HEAP32[$0 + 44 >> 2] = $4 + 1;
                                                 HEAP32[HEAP32[$0 + 40 >> 2] + ($4 << 2) >> 2] = $12;
                                                 HEAP32[$0 + 60 >> 2] = HEAP32[$0 + 60 >> 2] - 1;
                                                 if (($15 | 0) == -1) {
                                                  break block39
                                                 }
                                                 block64 : {
                                                  block61 : {
                                                   if ($5 & 1) {
                                                    break block61
                                                   }
                                                   $4 = HEAP32[$0 + 288 >> 2];
                                                   if ($6 >>> 0 >= $4 >>> 0) {
                                                    break block62
                                                   }
                                                   if ($4 >>> 0 <= $11 >>> 0) {
                                                    break block63
                                                   }
                                                   $13 = HEAP32[$0 + 284 >> 2];
                                                   $16 = Math_imul($11, 152);
                                                   $5 = $13 + $16 | 0;
                                                   if (HEAP32[($13 + Math_imul($6, 152) | 0) + 144 >> 2] != HEAP32[$5 + 144 >> 2]) {
                                                    break block61
                                                   }
                                                   if (HEAPU8[$5 + 148 | 0] == 3) {
                                                    break block64
                                                   }
                                                   $13 = HEAP32[$0 + 92 >> 2];
                                                   $9 = $13;
                                                   $12 = $13 + 1 | 0;
                                                   $13 = HEAP32[$0 + 88 >> 2] + 1 | 0;
                                                   $9 = $13 ? $9 : $12;
                                                   HEAP32[$0 + 88 >> 2] = $13;
                                                   HEAP32[$0 + 92 >> 2] = $9;
                                                   block68 : {
                                                    switch ((($15 | 0) >= 0 ? 2 : $15 ^ -2147483648) - 1 | 0) {
                                                    default:
                                                     if (HEAPU32[$5 + 132 >> 2] < $3 >>> 0) {
                                                      _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $11, $3);
                                                      $4 = HEAP32[$0 + 288 >> 2];
                                                     }
                                                     if ($4 >>> 0 <= $11 >>> 0) {
                                                      break block70
                                                     }
                                                     $5 = 0;
                                                     $13 = 0;
                                                     $4 = $16 + HEAP32[$0 + 284 >> 2] | 0;
                                                     $7 = HEAP32[$4 + 40 >> 2];
                                                     if ($7) {
                                                      $13 = HEAP32[(HEAP32[$4 + 36 >> 2] + ($7 << 3) | 0) - 8 >> 2]
                                                     }
                                                     $12 = HEAP32[$4 + 132 >> 2];
                                                     block72 : {
                                                      if (($12 | 0) != ($3 | 0)) {
                                                       break block72
                                                      }
                                                      if (HEAP32[$4 >> 2] != 0 & ($6 | 0) != HEAP32[$4 + 4 >> 2]) {
                                                       break block72
                                                      }
                                                      if ($10 >>> 0 <= $13 >>> 0) {
                                                       if ($7 >>> 0 > $8 >>> 0) {
                                                        break block72
                                                       }
                                                       if (($10 | 0) != ($13 | 0)) {
                                                        break block72
                                                       }
                                                      }
                                                      $7 = HEAP32[$0 + 224 >> 2];
                                                      $19 = HEAP32[$0 + 228 >> 2];
                                                      $3 = HEAP32[$0 + 164 >> 2];
                                                      $8 = $3;
                                                      $13 = HEAP32[$0 + 160 >> 2];
                                                      block76 : {
                                                       if (!($3 | $13)) {
                                                        $9 = 0;
                                                        $17 = 0;
                                                        break block76;
                                                       }
                                                       $17 = HEAP32[$0 + 236 >> 2];
                                                       $9 = $17 ^ HEAP32[$0 + 252 >> 2];
                                                       $3 = HEAP32[$0 + 244 >> 2];
                                                       $20 = HEAP32[$0 + 232 >> 2];
                                                       $24 = $20 ^ HEAP32[$0 + 248 >> 2];
                                                       $5 = HEAP32[$0 + 240 >> 2];
                                                       HEAP32[$0 + 240 >> 2] = $24 ^ $5;
                                                       HEAP32[$0 + 244 >> 2] = $3 ^ $9;
                                                       $25 = HEAP32[$0 + 256 >> 2] ^ $5;
                                                       $23 = HEAP32[$0 + 260 >> 2] ^ $3;
                                                       (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($25, $23, 45)), HEAP32[wasm2js_i32$0 + 256 >> 2] = wasm2js_i32$1;
                                                       HEAP32[$0 + 260 >> 2] = i64toi32_i32$HIGH_BITS;
                                                       HEAP32[$0 + 248 >> 2] = $5 << 17 ^ $24;
                                                       HEAP32[$0 + 252 >> 2] = ($3 << 17 | $5 >>> 15) ^ $9;
                                                       HEAP32[$0 + 232 >> 2] = $20 ^ $25;
                                                       HEAP32[$0 + 236 >> 2] = $17 ^ $23;
                                                       __multi3($14, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($5, $3, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $13, $8);
                                                       $9 = HEAP32[$14 + 12 >> 2];
                                                       $17 = HEAP32[$14 + 8 >> 2];
                                                      }
                                                      $3 = $17;
                                                      HEAP32[$4 + 4 >> 2] = $6;
                                                      $5 = 1;
                                                      HEAP32[$4 >> 2] = 1;
                                                      $8 = $8 + $19 | 0;
                                                      $19 = $7;
                                                      $7 = $7 + $13 | 0;
                                                      $8 = $9 + ($19 >>> 0 > $7 >>> 0 ? $8 + 1 | 0 : $8) | 0;
                                                      $3 = $3 + $7 | 0;
                                                      $7 = $17 >>> 0 > $3 >>> 0 ? $8 + 1 | 0 : $8;
                                                      HEAP32[$4 + 24 >> 2] = $3;
                                                      HEAP32[$4 + 28 >> 2] = $7;
                                                     }
                                                     HEAP32[$14 + 40 >> 2] = -2147483647;
                                                     HEAP8[$14 + 44 | 0] = $5;
                                                     _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $11, $6, $12, $14 + 40 | 0);
                                                     break block77;
                                                    case 0:
                                                     if (HEAPU32[$5 + 132 >> 2] < $3 >>> 0) {
                                                      _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $11, $3);
                                                      $4 = HEAP32[$0 + 288 >> 2];
                                                     }
                                                     if ($4 >>> 0 <= $11 >>> 0) {
                                                      break block79
                                                     }
                                                     $4 = $16 + HEAP32[$0 + 284 >> 2] | 0;
                                                     if (HEAPU8[$4 + 148 | 0] != 1) {
                                                      break block77
                                                     }
                                                     if (($3 | 0) != HEAP32[$4 + 132 >> 2]) {
                                                      break block77
                                                     }
                                                     $3 = HEAP32[$4 + 88 >> 2];
                                                     if ($3 >>> 0 <= $6 >>> 0) {
                                                      break block80
                                                     }
                                                     $3 = HEAP32[$4 + 84 >> 2] + ($6 << 3) | 0;
                                                     HEAP32[$3 >> 2] = -1;
                                                     HEAP32[$3 + 4 >> 2] = -1;
                                                     $3 = HEAP32[$4 + 52 >> 2];
                                                     if (!($10 & 1)) {
                                                      if ($3 >>> 0 > $6 >>> 0) {
                                                       $5 = HEAP32[$4 + 48 >> 2];
                                                       if (!HEAPU8[$6 + $5 | 0]) {
                                                        break block83
                                                       }
                                                       $3 = -1;
                                                       break block84;
                                                      }
                                                      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054828);
                                                      wasm2js_trap();
                                                     }
                                                     if ($3 >>> 0 > $6 >>> 0) {
                                                      break block85
                                                     }
                                                     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054844);
                                                     wasm2js_trap();
                                                    case 1:
                                                     $13 = HEAP32[$0 + 224 >> 2];
                                                     $25 = HEAP32[$0 + 228 >> 2];
                                                     if (HEAPU32[$5 + 132 >> 2] < $3 >>> 0) {
                                                      _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $11, $3);
                                                      $4 = HEAP32[$0 + 288 >> 2];
                                                     }
                                                     block88 : {
                                                      if ($4 >>> 0 > $11 >>> 0) {
                                                       $5 = 0;
                                                       $19 = HEAP32[$0 + 284 >> 2];
                                                       $12 = $16 + $19 | 0;
                                                       if (($3 | 0) == HEAP32[$12 + 132 >> 2]) {
                                                        break block88
                                                       }
                                                       $3 = 0;
                                                       break block89;
                                                      }
                                                      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $4, 1054524);
                                                      wasm2js_trap();
                                                     }
                                                     $3 = HEAP32[$0 + 164 >> 2];
                                                     $17 = $3;
                                                     $20 = HEAP32[$0 + 160 >> 2];
                                                     block91 : {
                                                      if (!($3 | $20)) {
                                                       $9 = 0;
                                                       $3 = 0;
                                                       break block91;
                                                      }
                                                      $29 = HEAP32[$0 + 236 >> 2];
                                                      $9 = $29 ^ HEAP32[$0 + 252 >> 2];
                                                      $3 = HEAP32[$0 + 244 >> 2];
                                                      $22 = HEAP32[$0 + 232 >> 2];
                                                      $30 = $22 ^ HEAP32[$0 + 248 >> 2];
                                                      $5 = HEAP32[$0 + 240 >> 2];
                                                      HEAP32[$0 + 240 >> 2] = $30 ^ $5;
                                                      HEAP32[$0 + 244 >> 2] = $3 ^ $9;
                                                      $26 = HEAP32[$0 + 256 >> 2] ^ $5;
                                                      $27 = HEAP32[$0 + 260 >> 2] ^ $3;
                                                      (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($26, $27, 45)), HEAP32[wasm2js_i32$0 + 256 >> 2] = wasm2js_i32$1;
                                                      HEAP32[$0 + 260 >> 2] = i64toi32_i32$HIGH_BITS;
                                                      HEAP32[$0 + 248 >> 2] = $5 << 17 ^ $30;
                                                      HEAP32[$0 + 252 >> 2] = ($3 << 17 | $5 >>> 15) ^ $9;
                                                      HEAP32[$0 + 232 >> 2] = $22 ^ $26;
                                                      HEAP32[$0 + 236 >> 2] = $29 ^ $27;
                                                      __multi3($14 + 16 | 0, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($5, $3, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $20, $17);
                                                      $9 = HEAP32[$14 + 28 >> 2];
                                                      $3 = HEAP32[$14 + 24 >> 2];
                                                     }
                                                     $5 = $17 + $25 | 0;
                                                     $22 = $5 + 1 | 0;
                                                     $17 = $5;
                                                     $5 = $13 + $20 | 0;
                                                     $13 = $9 + ($13 >>> 0 > $5 >>> 0 ? $22 : $17) | 0;
                                                     $5 = $3 + $5 | 0;
                                                     $3 = $3 >>> 0 > $5 >>> 0 ? $13 + 1 | 0 : $13;
                                                     $13 = HEAPU8[$12 + 148 | 0];
                                                     block93 : {
                                                      if (!$13) {
                                                       HEAP32[$12 + 24 >> 2] = $5;
                                                       HEAP32[$12 + 28 >> 2] = $3;
                                                       break block93;
                                                      }
                                                      _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($12);
                                                      HEAP32[$12 + 24 >> 2] = $5;
                                                      HEAP32[$12 + 28 >> 2] = $3;
                                                      HEAP8[$12 + 148 | 0] = 0;
                                                      if (($13 | 0) != 2) {
                                                       break block93
                                                      }
                                                      if (HEAP32[$0 >> 2]) {
                                                       break block93
                                                      }
                                                      $5 = Math_imul($4, 152);
                                                      while (1) {
                                                       if ($5) {
                                                        $5 = $5 - 152 | 0;
                                                        $3 = $19 + 148 | 0;
                                                        $19 = $19 + 152 | 0;
                                                        if (HEAPU8[$3 | 0] != 2) {
                                                         continue
                                                        }
                                                        break block93;
                                                       }
                                                       break;
                                                      };
                                                      HEAP32[$0 >> 2] = 1;
                                                      HEAP32[$0 + 4 >> 2] = 0;
                                                      $3 = HEAP32[$0 + 228 >> 2];
                                                      HEAP32[$0 + 8 >> 2] = HEAP32[$0 + 224 >> 2];
                                                      HEAP32[$0 + 12 >> 2] = $3;
                                                     }
                                                     if (!$7) {
                                                      break block95
                                                     }
                                                     $5 = 0;
                                                     if (HEAPU32[$12 + 40 >> 2] < $7 >>> 0) {
                                                      $3 = 0;
                                                      break block89;
                                                     }
                                                     $3 = 0;
                                                     if (($23 | 0) == HEAP32[(HEAP32[$12 + 36 >> 2] + ($7 << 3) | 0) - 8 >> 2]) {
                                                      break block95
                                                     }
                                                     break block89;
                                                    case 2:
                                                     break block68;
                                                    };
                                                   }
                                                   if (HEAPU32[$5 + 132 >> 2] < $3 >>> 0) {
                                                    _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $11, $3);
                                                    $4 = HEAP32[$0 + 288 >> 2];
                                                   }
                                                   if ($4 >>> 0 <= $11 >>> 0) {
                                                    break block98
                                                   }
                                                   $13 = HEAP32[$0 + 284 >> 2];
                                                   $5 = $13 + $16 | 0;
                                                   if (HEAPU8[$5 + 148 | 0] != 2) {
                                                    break block77
                                                   }
                                                   if (($3 | 0) != HEAP32[$5 + 132 >> 2]) {
                                                    break block77
                                                   }
                                                   if (!($8 & 1)) {
                                                    $3 = HEAP32[$5 + 76 >> 2];
                                                    if ($3 >>> 0 <= $6 >>> 0) {
                                                     break block100
                                                    }
                                                    $7 = HEAP32[$5 + 72 >> 2] + ($6 << 2) | 0;
                                                    $3 = HEAP32[$7 >> 2];
                                                    $3 = $3 - (($3 | 0) != 0) | 0;
                                                    HEAP32[$7 >> 2] = $3 >>> 0 <= 1 ? 1 : $3;
                                                    break block101;
                                                   }
                                                   $3 = HEAP32[$5 + 64 >> 2];
                                                   if ($3 >>> 0 <= $6 >>> 0) {
                                                    break block102
                                                   }
                                                   $8 = $6 << 2;
                                                   $7 = $8 + HEAP32[$5 + 60 >> 2] | 0;
                                                   $3 = HEAP32[$7 >> 2];
                                                   if ($3 >>> 0 >= $10 >>> 0) {
                                                    break block103
                                                   }
                                                   HEAP32[$7 >> 2] = $10;
                                                   $7 = HEAP32[$5 + 136 >> 2];
                                                   $3 = ($3 >>> 0 < $7 >>> 0 ? $7 : $3) + 1 | 0;
                                                   if ($10 >>> 0 < $3 >>> 0) {
                                                    break block103
                                                   }
                                                   $7 = $7 ^ -1;
                                                   while (1) {
                                                    $9 = $3 + $7 | 0;
                                                    if ($9 >>> 0 < HEAPU32[$5 + 20 >> 2]) {
                                                     $9 = $9 + HEAP32[$5 + 16 >> 2] | 0;
                                                     $12 = HEAP32[$5 + 8 >> 2];
                                                     $9 = HEAP32[$5 + 12 >> 2] + ($9 - ($9 >>> 0 >= $12 >>> 0 ? $12 : 0) << 2) | 0;
                                                     HEAP32[$9 >> 2] = HEAP32[$9 >> 2] + 1;
                                                    }
                                                    if ($3 >>> 0 >= $10 >>> 0) {
                                                     break block103
                                                    }
                                                    $3 = ($3 >>> 0 < $10 >>> 0) + $3 | 0;
                                                    if ($3 >>> 0 <= $10 >>> 0) {
                                                     continue
                                                    }
                                                    break;
                                                   };
                                                   break block103;
                                                  }
                                                  $3 = HEAP32[$0 + 100 >> 2];
                                                  $5 = $3;
                                                  $4 = $3 + 1 | 0;
                                                  $3 = HEAP32[$0 + 96 >> 2] + 1 | 0;
                                                  $4 = $3 ? $5 : $4;
                                                  HEAP32[$0 + 96 >> 2] = $3;
                                                  HEAP32[$0 + 100 >> 2] = $4;
                                                 }
                                                 if (($15 | 0) <= 0) {
                                                  break block105
                                                 }
                                                 $4 = HEAP32[$10 - 4 >> 2];
                                                 $3 = $4 & -8;
                                                 $5 = $15 << 3;
                                                 $4 = $4 & 3;
                                                 if ($3 >>> 0 < $5 + ($4 ? 4 : 8) >>> 0) {
                                                  break block106
                                                 }
                                                 if (!$4) {
                                                  break block107
                                                 }
                                                 if ($3 >>> 0 > $5 + 39 >>> 0) {
                                                  break block108
                                                 }
                                                 break block107;
                                                }
                                                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($12, $8, 1054316);
                                                wasm2js_trap();
                                               }
                                               _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1055128);
                                               wasm2js_trap();
                                              }
                                              _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $4, 1055144);
                                              wasm2js_trap();
                                             }
                                             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $4, 1054508);
                                             wasm2js_trap();
                                            }
                                            _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $4, 1054796);
                                            wasm2js_trap();
                                           }
                                           _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054812);
                                           wasm2js_trap();
                                          }
                                          _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $4, 1054860);
                                          wasm2js_trap();
                                         }
                                         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054876);
                                         wasm2js_trap();
                                        }
                                        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054892);
                                        wasm2js_trap();
                                       }
                                       _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
                                       wasm2js_trap();
                                      }
                                      _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
                                      wasm2js_trap();
                                     }
                                     $3 = HEAP32[$5 + 76 >> 2];
                                     if ($6 >>> 0 < $3 >>> 0) {
                                      HEAP32[$8 + HEAP32[$5 + 72 >> 2] >> 2] = $10 + 1;
                                      break block101;
                                     }
                                     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054908);
                                     wasm2js_trap();
                                    }
                                    $3 = HEAP32[$5 + 88 >> 2];
                                    if ($6 >>> 0 < $3 >>> 0) {
                                     $3 = HEAP32[$5 + 84 >> 2] + ($6 << 3) | 0;
                                     HEAP32[$3 >> 2] = 0;
                                     HEAP32[$3 + 4 >> 2] = 0;
                                     _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($13, $4, $11, $6);
                                     _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim20advance_commit_index($0, $11);
                                     break block77;
                                    }
                                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054924);
                                    wasm2js_trap();
                                   }
                                   block112 : {
                                    if (!$8) {
                                     $5 = $7;
                                     break block112;
                                    }
                                    $8 = $8 << 3;
                                    $13 = $7 << 3;
                                    $4 = HEAP32[$12 + 40 >> 2];
                                    $9 = $12 + 32 | 0;
                                    $5 = $7;
                                    $3 = $10;
                                    while (1) {
                                     $7 = HEAP32[$3 >> 2];
                                     if (($7 | 0) != (($4 >>> 0 > $5 >>> 0 ? HEAP32[HEAP32[$12 + 36 >> 2] + $13 >> 2] : 0) | 0)) {
                                      if ($4 >>> 0 >= $5 >>> 0) {
                                       HEAP32[$12 + 40 >> 2] = $5;
                                       $4 = $5;
                                      }
                                      $19 = HEAP32[$3 + 4 >> 2];
                                      if (($4 | 0) == HEAP32[$12 + 32 >> 2]) {
                                       _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtCseywxCc024wH_14raftscope_core3sim5EntryE8grow_oneBQ_($9)
                                      }
                                      $17 = HEAP32[$12 + 36 >> 2] + ($4 << 3) | 0;
                                      HEAP32[$17 + 4 >> 2] = $19;
                                      HEAP32[$17 >> 2] = $7;
                                      $4 = $4 + 1 | 0;
                                      HEAP32[$12 + 40 >> 2] = $4;
                                     }
                                     $3 = $3 + 8 | 0;
                                     $5 = $5 + 1 | 0;
                                     $13 = $13 + 8 | 0;
                                     $8 = $8 - 8 | 0;
                                     if ($8) {
                                      continue
                                     }
                                     break;
                                    };
                                   }
                                   _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10set_commit($0, $11, $24);
                                   $4 = HEAP32[$0 + 288 >> 2];
                                   $3 = 1;
                                  }
                                  if ($4 >>> 0 <= $11 >>> 0) {
                                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $4, 1054540);
                                   wasm2js_trap();
                                  }
                                  $4 = HEAP32[($16 + HEAP32[$0 + 284 >> 2] | 0) + 132 >> 2];
                                  HEAP32[$14 + 44 >> 2] = $5;
                                  HEAP8[$14 + 48 | 0] = $3;
                                  HEAP32[$14 + 40 >> 2] = -2147483645;
                                  _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $11, $6, $4, $14 + 40 | 0);
                                  break block77;
                                 }
                                 $5 = HEAP32[$4 + 48 >> 2];
                                 if (HEAPU8[$6 + $5 | 0]) {
                                  break block83
                                 }
                                 $3 = 1;
                                }
                                HEAP32[$4 + 140 >> 2] = HEAP32[$4 + 140 >> 2] + $3;
                               }
                               HEAP8[$5 + $6 | 0] = $10;
                              }
                              block132 : {
                               block127 : {
                                block122 : {
                                 block130 : {
                                  block123 : {
                                   block120 : {
                                    block121 : {
                                     block119 : {
                                      $3 = HEAP32[$0 + 288 >> 2];
                                      if ($11 >>> 0 < $3 >>> 0) {
                                       $3 = $16 + HEAP32[$0 + 284 >> 2] | 0;
                                       switch (HEAPU8[$3 + 148 | 0] - 1 | 0) {
                                       case 0:
                                        break block119;
                                       case 1:
                                        break block120;
                                       default:
                                        break block121;
                                       };
                                      }
                                      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $3, 1055160);
                                      wasm2js_trap();
                                     }
                                     if (($15 | 0) == -2147483647) {
                                      break block122
                                     }
                                    }
                                    $3 = HEAP32[$0 + 312 >> 2];
                                    if ($3 >>> 0 <= $11 >>> 0) {
                                     break block123
                                    }
                                    $3 = HEAP32[$0 + 228 >> 2];
                                    $6 = $3;
                                    $4 = HEAP32[$0 + 308 >> 2] + ($11 << 3) | 0;
                                    $8 = HEAP32[$0 + 224 >> 2];
                                    HEAP32[$4 >> 2] = $8;
                                    HEAP32[$4 + 4 >> 2] = $3;
                                    $5 = HEAP32[$0 + 300 >> 2];
                                    if (($5 | 0) == HEAP32[$0 + 292 >> 2]) {
                                     _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($28)
                                    }
                                    HEAP32[$0 + 300 >> 2] = $5 + 1;
                                    $13 = HEAP32[$0 + 296 >> 2];
                                    $3 = $13 + ($5 << 4) | 0;
                                    HEAP32[$3 + 8 >> 2] = $11;
                                    HEAP32[$3 >> 2] = $8;
                                    HEAP32[$3 + 4 >> 2] = $6;
                                    $3 = 0;
                                    block125 : {
                                     if (!$5) {
                                      break block125
                                     }
                                     while (1) {
                                      $4 = $5 - 1 >>> 1 | 0;
                                      $7 = $13 + ($4 << 4) | 0;
                                      $9 = HEAP32[$7 >> 2];
                                      $12 = HEAP32[$7 + 4 >> 2];
                                      if (($8 | 0) == ($9 | 0) & ($6 | 0) == ($12 | 0) ? $11 >>> 0 >= HEAPU32[$7 + 8 >> 2] : ($6 | 0) == ($12 | 0) & $8 >>> 0 >= $9 >>> 0 | $6 >>> 0 > $12 >>> 0) {
                                       $3 = $5;
                                       break block125;
                                      }
                                      $9 = HEAP32[$7 + 12 >> 2];
                                      $5 = $13 + ($5 << 4) | 0;
                                      HEAP32[$5 + 8 >> 2] = HEAP32[$7 + 8 >> 2];
                                      HEAP32[$5 + 12 >> 2] = $9;
                                      $9 = HEAP32[$7 + 4 >> 2];
                                      HEAP32[$5 >> 2] = HEAP32[$7 >> 2];
                                      HEAP32[$5 + 4 >> 2] = $9;
                                      $5 = $4;
                                      if ($4) {
                                       continue
                                      }
                                      break;
                                     };
                                    }
                                    $4 = $13 + ($3 << 4) | 0;
                                    HEAP32[$4 >> 2] = $8;
                                    HEAP32[$4 + 4 >> 2] = $6;
                                    break block127;
                                   }
                                   block129 : {
                                    if (!HEAP32[$3 + 124 >> 2]) {
                                     $6 = -1;
                                     $7 = -1;
                                     break block129;
                                    }
                                    $3 = HEAP32[$3 + 120 >> 2];
                                    $6 = HEAP32[$3 >> 2];
                                    $7 = HEAP32[$3 + 4 >> 2];
                                   }
                                   $3 = HEAP32[$0 + 312 >> 2];
                                   if ($3 >>> 0 <= $11 >>> 0) {
                                    break block130
                                   }
                                   $3 = HEAP32[$0 + 308 >> 2] + ($11 << 3) | 0;
                                   $5 = HEAP32[$3 >> 2];
                                   $4 = HEAP32[$3 + 4 >> 2];
                                   if (!(($4 | 0) == ($7 | 0) & $5 >>> 0 > $6 >>> 0 | $4 >>> 0 > $7 >>> 0)) {
                                    $8 = HEAP32[$0 + 228 >> 2];
                                    if (($8 | 0) == ($4 | 0) & HEAPU32[$0 + 224 >> 2] <= $5 >>> 0 | $4 >>> 0 > $8 >>> 0) {
                                     break block132
                                    }
                                   }
                                   HEAP32[$3 >> 2] = $6;
                                   HEAP32[$3 + 4 >> 2] = $7;
                                   if (($6 & $7) == -1) {
                                    break block132
                                   }
                                   $5 = HEAP32[$0 + 300 >> 2];
                                   if (($5 | 0) == HEAP32[$0 + 292 >> 2]) {
                                    _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($28)
                                   }
                                   HEAP32[$0 + 300 >> 2] = $5 + 1;
                                   $13 = HEAP32[$0 + 296 >> 2];
                                   $3 = $13 + ($5 << 4) | 0;
                                   HEAP32[$3 + 8 >> 2] = $11;
                                   HEAP32[$3 >> 2] = $6;
                                   HEAP32[$3 + 4 >> 2] = $7;
                                   $3 = 0;
                                   block134 : {
                                    if (!$5) {
                                     break block134
                                    }
                                    while (1) {
                                     $4 = $5 - 1 >>> 1 | 0;
                                     $8 = $13 + ($4 << 4) | 0;
                                     $9 = HEAP32[$8 >> 2];
                                     $12 = HEAP32[$8 + 4 >> 2];
                                     if (($6 | 0) == ($9 | 0) & ($7 | 0) == ($12 | 0) ? $11 >>> 0 >= HEAPU32[$8 + 8 >> 2] : ($7 | 0) == ($12 | 0) & $6 >>> 0 >= $9 >>> 0 | $7 >>> 0 > $12 >>> 0) {
                                      $3 = $5;
                                      break block134;
                                     }
                                     $9 = HEAP32[$8 + 12 >> 2];
                                     $5 = $13 + ($5 << 4) | 0;
                                     HEAP32[$5 + 8 >> 2] = HEAP32[$8 + 8 >> 2];
                                     HEAP32[$5 + 12 >> 2] = $9;
                                     $9 = HEAP32[$8 + 4 >> 2];
                                     HEAP32[$5 >> 2] = HEAP32[$8 >> 2];
                                     HEAP32[$5 + 4 >> 2] = $9;
                                     $5 = $4;
                                     if ($4) {
                                      continue
                                     }
                                     break;
                                    };
                                   }
                                   $4 = $13 + ($3 << 4) | 0;
                                   HEAP32[$4 >> 2] = $6;
                                   HEAP32[$4 + 4 >> 2] = $7;
                                   break block127;
                                  }
                                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $3, 1055096);
                                  wasm2js_trap();
                                 }
                                 _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $3, 1055192);
                                 wasm2js_trap();
                                }
                                _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13become_leader($0, $11);
                                block137 : {
                                 $3 = HEAP32[$0 + 288 >> 2];
                                 if ($11 >>> 0 < $3 >>> 0) {
                                  if (HEAPU8[($16 + HEAP32[$0 + 284 >> 2] | 0) + 148 | 0] != 2) {
                                   break block105
                                  }
                                  $3 = HEAP32[$0 + 312 >> 2];
                                  if ($3 >>> 0 <= $11 >>> 0) {
                                   break block137
                                  }
                                  $3 = HEAP32[$0 + 228 >> 2];
                                  $6 = $3;
                                  $4 = HEAP32[$0 + 308 >> 2] + ($11 << 3) | 0;
                                  $8 = HEAP32[$0 + 224 >> 2];
                                  HEAP32[$4 >> 2] = $8;
                                  HEAP32[$4 + 4 >> 2] = $3;
                                  $7 = HEAP32[$0 + 300 >> 2];
                                  if (($7 | 0) == HEAP32[$0 + 292 >> 2]) {
                                   _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($28)
                                  }
                                  HEAP32[$0 + 300 >> 2] = $7 + 1;
                                  $13 = HEAP32[$0 + 296 >> 2];
                                  $3 = $13 + ($7 << 4) | 0;
                                  HEAP32[$3 + 8 >> 2] = $11;
                                  HEAP32[$3 >> 2] = $8;
                                  HEAP32[$3 + 4 >> 2] = $6;
                                  $3 = 0;
                                  block139 : {
                                   if (!$7) {
                                    break block139
                                   }
                                   while (1) {
                                    $4 = $7 - 1 >>> 1 | 0;
                                    $5 = $13 + ($4 << 4) | 0;
                                    $9 = HEAP32[$5 >> 2];
                                    $10 = HEAP32[$5 + 4 >> 2];
                                    if (($8 | 0) == ($9 | 0) & ($6 | 0) == ($10 | 0) ? $11 >>> 0 >= HEAPU32[$5 + 8 >> 2] : ($6 | 0) == ($10 | 0) & $8 >>> 0 >= $9 >>> 0 | $6 >>> 0 > $10 >>> 0) {
                                     $3 = $7;
                                     break block139;
                                    }
                                    $9 = HEAP32[$5 + 12 >> 2];
                                    $7 = $13 + ($7 << 4) | 0;
                                    HEAP32[$7 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                                    HEAP32[$7 + 12 >> 2] = $9;
                                    $9 = HEAP32[$5 + 4 >> 2];
                                    HEAP32[$7 >> 2] = HEAP32[$5 >> 2];
                                    HEAP32[$7 + 4 >> 2] = $9;
                                    $7 = $4;
                                    if ($4) {
                                     continue
                                    }
                                    break;
                                   };
                                  }
                                  $3 = $13 + ($3 << 4) | 0;
                                  HEAP32[$3 + 8 >> 2] = $11;
                                  HEAP32[$3 >> 2] = $8;
                                  HEAP32[$3 + 4 >> 2] = $6;
                                  break block105;
                                 }
                                 _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $3, 1055176);
                                 wasm2js_trap();
                                }
                                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $3, 1055096);
                                wasm2js_trap();
                               }
                               HEAP32[$4 + 8 >> 2] = $11;
                              }
                              if (($15 | 0) <= 0) {
                               break block105
                              }
                              $4 = HEAP32[$10 - 4 >> 2];
                              $3 = $4 & -8;
                              $5 = $15 << 3;
                              $4 = $4 & 3;
                              if ($3 >>> 0 < $5 + ($4 ? 4 : 8) >>> 0) {
                               break block141
                              }
                              if (!$4) {
                               break block107
                              }
                              if ($3 >>> 0 <= $5 + 39 >>> 0) {
                               break block107
                              }
                              _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
                              wasm2js_trap();
                             }
                             _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($10);
                            }
                            $13 = 1;
                            $9 = HEAP32[$0 + 56 >> 2];
                            if (!$9) {
                             continue label19
                            }
                            continue label20;
                           }
                           _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
                           wasm2js_trap();
                          }
                          $6 = $9 - 2 | 0;
                          block143 : {
                           if (($7 | 0) != ($6 | 0)) {
                            $6 = $5;
                            break block143;
                           }
                           $3 = $11 + Math_imul($6, 24) | 0;
                           $7 = HEAP32[$3 + 20 >> 2];
                           $4 = $11 + Math_imul($5, 24) | 0;
                           HEAP32[$4 + 16 >> 2] = HEAP32[$3 + 16 >> 2];
                           HEAP32[$4 + 20 >> 2] = $7;
                           $5 = HEAP32[$3 + 12 >> 2];
                           HEAP32[$4 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                           HEAP32[$4 + 12 >> 2] = $5;
                           $5 = HEAP32[$3 + 4 >> 2];
                           HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
                           HEAP32[$4 + 4 >> 2] = $5;
                          }
                          $4 = HEAP32[$14 + 60 >> 2];
                          $3 = $11 + Math_imul($6, 24) | 0;
                          $5 = HEAP32[$14 + 56 >> 2];
                          HEAP32[$3 + 16 >> 2] = $5;
                          HEAP32[$3 + 20 >> 2] = $4;
                          $4 = HEAP32[$14 + 52 >> 2];
                          $8 = $4;
                          $10 = HEAP32[$14 + 48 >> 2];
                          HEAP32[$3 + 8 >> 2] = $10;
                          HEAP32[$3 + 12 >> 2] = $4;
                          $4 = HEAP32[$14 + 44 >> 2];
                          $9 = $4;
                          $12 = HEAP32[$14 + 40 >> 2];
                          HEAP32[$3 >> 2] = $12;
                          HEAP32[$3 + 4 >> 2] = $4;
                          $16 = HEAP32[$3 + 20 >> 2];
                          $3 = 0;
                          block144 : {
                           if (!$6) {
                            break block144
                           }
                           while (1) {
                            block146 : {
                             $4 = $6;
                             $6 = $4 - 1 >>> 1 | 0;
                             $7 = $11 + Math_imul($6, 24) | 0;
                             $19 = HEAP32[$7 >> 2];
                             $15 = HEAP32[$7 + 4 >> 2];
                             if (!(($12 | 0) == ($19 | 0) & ($9 | 0) == ($15 | 0))) {
                              if (($9 | 0) == ($15 | 0) & $12 >>> 0 < $19 >>> 0 | $9 >>> 0 < $15 >>> 0) {
                               break block146
                              }
                              $3 = $4;
                              break block144;
                             }
                             $19 = HEAP32[$7 + 8 >> 2];
                             $15 = HEAP32[$7 + 12 >> 2];
                             if (!(($10 | 0) != ($19 | 0) | ($8 | 0) != ($15 | 0))) {
                              if ($5 >>> 0 < HEAPU32[$7 + 16 >> 2]) {
                               break block146
                              }
                              $3 = $4;
                              break block144;
                             }
                             if (($8 | 0) == ($15 | 0) & $10 >>> 0 < $19 >>> 0 | $8 >>> 0 < $15 >>> 0) {
                              break block146
                             }
                             $3 = $4;
                             break block144;
                            }
                            $15 = HEAP32[$7 + 20 >> 2];
                            $4 = $11 + Math_imul($4, 24) | 0;
                            HEAP32[$4 + 16 >> 2] = HEAP32[$7 + 16 >> 2];
                            HEAP32[$4 + 20 >> 2] = $15;
                            $15 = HEAP32[$7 + 12 >> 2];
                            HEAP32[$4 + 8 >> 2] = HEAP32[$7 + 8 >> 2];
                            HEAP32[$4 + 12 >> 2] = $15;
                            $15 = HEAP32[$7 + 4 >> 2];
                            HEAP32[$4 >> 2] = HEAP32[$7 >> 2];
                            HEAP32[$4 + 4 >> 2] = $15;
                            if ($6) {
                             continue
                            }
                            break;
                           };
                          }
                          $3 = $11 + Math_imul($3, 24) | 0;
                          HEAP32[$3 + 20 >> 2] = $16;
                          HEAP32[$3 + 16 >> 2] = $5;
                          HEAP32[$3 + 8 >> 2] = $10;
                          HEAP32[$3 + 12 >> 2] = $8;
                          HEAP32[$3 >> 2] = $12;
                          HEAP32[$3 + 4 >> 2] = $9;
                          $9 = HEAP32[$0 + 56 >> 2];
                          if ($9) {
                           continue
                          }
                          break;
                         };
                         break;
                        };
                       }
                       $3 = $13;
                       $13 = 0;
                       if (!$3) {
                        continue label8
                       }
                       continue label9;
                      }
                      $10 = HEAP32[$4 + 8 >> 2];
                      $9 = $12 - 1 | 0;
                      HEAP32[$0 + 300 >> 2] = $9;
                      if ($9) {
                       $4 = $7 + ($9 << 4) | 0;
                       $6 = HEAP32[$4 >> 2];
                       $5 = HEAP32[$4 + 4 >> 2];
                       $8 = $5;
                       $11 = HEAP32[$4 + 8 >> 2];
                       HEAP32[$7 + 8 >> 2] = $11;
                       HEAP32[$7 >> 2] = $6;
                       HEAP32[$7 + 4 >> 2] = $5;
                       $4 = 0;
                       $5 = 1;
                       if ($12 >>> 0 >= 4) {
                        $4 = $9 - 2 | 0;
                        $17 = $4 >>> 0 <= $9 >>> 0 ? $4 : 0;
                        $4 = 0;
                        while (1) {
                         $9 = $7 + ($5 << 4) | 0;
                         $20 = $9 + 16 | 0;
                         $16 = HEAP32[$20 >> 2];
                         $15 = $7 + ($4 << 4) | 0;
                         $22 = $5;
                         $26 = HEAPU32[$9 + 24 >> 2] <= HEAPU32[$9 + 8 >> 2];
                         $4 = HEAP32[$20 + 4 >> 2];
                         $5 = HEAP32[$9 + 4 >> 2];
                         $9 = HEAP32[$9 >> 2];
                         $4 = $22 + (($9 | 0) == ($16 | 0) & ($4 | 0) == ($5 | 0) ? $26 : ($4 | 0) == ($5 | 0) & $9 >>> 0 >= $16 >>> 0 | $4 >>> 0 < $5 >>> 0) | 0;
                         $5 = $7 + ($4 << 4) | 0;
                         $9 = HEAP32[$5 + 4 >> 2];
                         HEAP32[$15 >> 2] = HEAP32[$5 >> 2];
                         HEAP32[$15 + 4 >> 2] = $9;
                         $9 = HEAP32[$5 + 12 >> 2];
                         HEAP32[$15 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                         HEAP32[$15 + 12 >> 2] = $9;
                         $9 = $4 << 1;
                         $5 = $9 | 1;
                         if ($9 >>> 0 < $17 >>> 0) {
                          continue
                         }
                         break;
                        };
                       }
                       block153 : {
                        block152 : {
                         block151 : {
                          if (($5 | 0) == ($12 - 2 | 0)) {
                           $9 = $7 + ($4 << 4) | 0;
                           $4 = $7 + ($5 << 4) | 0;
                           $12 = HEAP32[$4 + 12 >> 2];
                           HEAP32[$9 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                           HEAP32[$9 + 12 >> 2] = $12;
                           $12 = HEAP32[$4 + 4 >> 2];
                           HEAP32[$9 >> 2] = HEAP32[$4 >> 2];
                           HEAP32[$9 + 4 >> 2] = $12;
                           HEAP32[$4 + 8 >> 2] = $11;
                           HEAP32[$4 >> 2] = $6;
                           HEAP32[$4 + 4 >> 2] = $8;
                           $4 = $5;
                           break block151;
                          }
                          $5 = $7 + ($4 << 4) | 0;
                          HEAP32[$5 + 8 >> 2] = $11;
                          HEAP32[$5 >> 2] = $6;
                          HEAP32[$5 + 4 >> 2] = $8;
                          if (!$4) {
                           break block152
                          }
                         }
                         while (1) {
                          $5 = $4 - 1 >>> 1 | 0;
                          $9 = $7 + ($5 << 4) | 0;
                          $12 = HEAP32[$9 >> 2];
                          $15 = HEAP32[$9 + 4 >> 2];
                          if (($6 | 0) == ($12 | 0) & ($8 | 0) == ($15 | 0) ? $11 >>> 0 >= HEAPU32[$9 + 8 >> 2] : ($8 | 0) == ($15 | 0) & $6 >>> 0 >= $12 >>> 0 | $8 >>> 0 > $15 >>> 0) {
                           break block153
                          }
                          $12 = HEAP32[$9 + 12 >> 2];
                          $4 = $7 + ($4 << 4) | 0;
                          HEAP32[$4 + 8 >> 2] = HEAP32[$9 + 8 >> 2];
                          HEAP32[$4 + 12 >> 2] = $12;
                          $12 = HEAP32[$9 + 4 >> 2];
                          HEAP32[$4 >> 2] = HEAP32[$9 >> 2];
                          HEAP32[$4 + 4 >> 2] = $12;
                          $4 = $5;
                          if ($4) {
                           continue
                          }
                          break;
                         };
                        }
                        $4 = 0;
                       }
                       $4 = $7 + ($4 << 4) | 0;
                       HEAP32[$4 + 8 >> 2] = $11;
                       HEAP32[$4 >> 2] = $6;
                       HEAP32[$4 + 4 >> 2] = $8;
                      }
                      $4 = HEAP32[$0 + 312 >> 2];
                      if ($4 >>> 0 <= $10 >>> 0) {
                       break block154
                      }
                      $25 = $10 << 3;
                      $4 = $25 + HEAP32[$0 + 308 >> 2] | 0;
                      if (($3 | 0) != HEAP32[$4 >> 2] | ($19 | 0) != HEAP32[$4 + 4 >> 2]) {
                       continue
                      }
                      break;
                     };
                     $3 = HEAP32[$0 + 108 >> 2];
                     $5 = $3;
                     $4 = $3 + 1 | 0;
                     $3 = HEAP32[$0 + 104 >> 2] + 1 | 0;
                     $4 = $3 ? $5 : $4;
                     HEAP32[$0 + 104 >> 2] = $3;
                     HEAP32[$0 + 108 >> 2] = $4;
                     _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim18start_new_election($0, $10);
                     _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13become_leader($0, $10);
                     $13 = HEAP32[$0 + 288 >> 2];
                     if ($10 >>> 0 >= $13 >>> 0) {
                      break block155
                     }
                     $15 = Math_imul($10, 152);
                     $5 = $15 + HEAP32[$0 + 284 >> 2] | 0;
                     if (HEAPU8[$5 + 148 | 0] != 2) {
                      break block156
                     }
                     $3 = HEAP32[$5 + 20 >> 2];
                     if (!$3) {
                      break block156
                     }
                     $9 = $13 >>> 1 | 0;
                     $8 = HEAP32[$5 + 16 >> 2];
                     $7 = HEAP32[$5 + 12 >> 2] + ($8 << 2) | 0;
                     $6 = HEAP32[$5 + 8 >> 2];
                     $4 = 0;
                     while (1) {
                      if ($9 >>> 0 >= HEAPU32[$7 - (($6 >>> 0 <= $4 + $8 >>> 0 ? $6 : 0) << 2) >> 2]) {
                       break block157
                      }
                      $7 = $7 + 4 | 0;
                      $4 = $4 + 1 | 0;
                      if (($3 | 0) != ($4 | 0)) {
                       continue
                      }
                      break;
                     };
                     $4 = $3;
                     break block158;
                    }
                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($10, $4, 1054380);
                    wasm2js_trap();
                   }
                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($10, $13, 1054780);
                   wasm2js_trap();
                  }
                  if (!$4) {
                   break block156
                  }
                 }
                 $7 = HEAP32[$5 + 136 >> 2] + $4 | 0;
                 $9 = $7 - 1 | 0;
                 if ($9 >>> 0 < HEAPU32[$5 + 40 >> 2]) {
                  $9 = HEAP32[HEAP32[$5 + 36 >> 2] + ($9 << 3) >> 2]
                 } else {
                  $9 = 0
                 }
                 if (($9 | 0) != HEAP32[$5 + 132 >> 2]) {
                  break block156
                 }
                 if ($3 >>> 0 < $4 >>> 0) {
                  break block160
                 }
                 HEAP32[$5 + 20 >> 2] = $3 - $4;
                 $13 = $5;
                 $5 = $4 + $8 | 0;
                 HEAP32[$13 + 16 >> 2] = ($3 | 0) != ($4 | 0) ? $5 - ($5 >>> 0 >= $6 >>> 0 ? $6 : 0) | 0 : 0;
                 _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10set_commit($0, $10, $7);
                 $13 = HEAP32[$0 + 288 >> 2];
                }
                block164 : {
                 block162 : {
                  block163 : {
                   if ($10 >>> 0 < $13 >>> 0) {
                    $19 = HEAP32[$0 + 284 >> 2];
                    switch (HEAPU8[($15 + $19 | 0) + 148 | 0] - 1 | 0) {
                    case 0:
                     break block162;
                    case 1:
                     break block163;
                    default:
                     break block164;
                    };
                   }
                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($10, $13, 1055256);
                   wasm2js_trap();
                  }
                  $29 = HEAP32[$0 + 224 >> 2];
                  $24 = HEAP32[$0 + 228 >> 2];
                  while (1) {
                   $7 = $15 + $19 | 0;
                   $17 = HEAP32[$7 + 124 >> 2];
                   if (!$17) {
                    break block164
                   }
                   $8 = HEAP32[$7 + 120 >> 2];
                   $4 = $8;
                   $3 = HEAP32[$4 >> 2];
                   $22 = HEAP32[$4 + 4 >> 2];
                   $4 = $22;
                   if (($24 | 0) == ($4 | 0) & $3 >>> 0 > $29 >>> 0 | $4 >>> 0 > $24 >>> 0) {
                    break block164
                   }
                   $6 = HEAP32[$8 + 8 >> 2];
                   $12 = $17 - 1 | 0;
                   HEAP32[$7 + 124 >> 2] = $12;
                   if ($12) {
                    $4 = $8 + ($12 << 4) | 0;
                    $9 = HEAP32[$4 >> 2];
                    $5 = HEAP32[$4 + 4 >> 2];
                    $11 = $5;
                    $16 = HEAP32[$4 + 8 >> 2];
                    HEAP32[$8 + 8 >> 2] = $16;
                    HEAP32[$8 >> 2] = $9;
                    HEAP32[$8 + 4 >> 2] = $5;
                    $4 = 0;
                    $5 = 1;
                    if ($17 >>> 0 >= 4) {
                     $4 = $12 - 2 | 0;
                     $30 = $4 >>> 0 <= $12 >>> 0 ? $4 : 0;
                     $4 = 0;
                     while (1) {
                      $12 = $8 + ($5 << 4) | 0;
                      $27 = $12 + 16 | 0;
                      $23 = HEAP32[$27 >> 2];
                      $20 = $8 + ($4 << 4) | 0;
                      $26 = $5;
                      $32 = HEAPU32[$12 + 24 >> 2] <= HEAPU32[$12 + 8 >> 2];
                      $4 = HEAP32[$27 + 4 >> 2];
                      $5 = HEAP32[$12 + 4 >> 2];
                      $12 = HEAP32[$12 >> 2];
                      $4 = $26 + (($12 | 0) == ($23 | 0) & ($4 | 0) == ($5 | 0) ? $32 : ($4 | 0) == ($5 | 0) & $12 >>> 0 >= $23 >>> 0 | $4 >>> 0 < $5 >>> 0) | 0;
                      $5 = $8 + ($4 << 4) | 0;
                      $12 = HEAP32[$5 + 4 >> 2];
                      HEAP32[$20 >> 2] = HEAP32[$5 >> 2];
                      HEAP32[$20 + 4 >> 2] = $12;
                      $12 = HEAP32[$5 + 12 >> 2];
                      HEAP32[$20 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                      HEAP32[$20 + 12 >> 2] = $12;
                      $12 = $4 << 1;
                      $5 = $12 | 1;
                      if ($12 >>> 0 < $30 >>> 0) {
                       continue
                      }
                      break;
                     };
                    }
                    block170 : {
                     block169 : {
                      block168 : {
                       if (($5 | 0) == ($17 - 2 | 0)) {
                        $12 = $8 + ($4 << 4) | 0;
                        $4 = $8 + ($5 << 4) | 0;
                        $17 = HEAP32[$4 + 12 >> 2];
                        HEAP32[$12 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                        HEAP32[$12 + 12 >> 2] = $17;
                        $17 = HEAP32[$4 + 4 >> 2];
                        HEAP32[$12 >> 2] = HEAP32[$4 >> 2];
                        HEAP32[$12 + 4 >> 2] = $17;
                        HEAP32[$4 + 8 >> 2] = $16;
                        HEAP32[$4 >> 2] = $9;
                        HEAP32[$4 + 4 >> 2] = $11;
                        $4 = $5;
                        break block168;
                       }
                       $5 = $8 + ($4 << 4) | 0;
                       HEAP32[$5 + 8 >> 2] = $16;
                       HEAP32[$5 >> 2] = $9;
                       HEAP32[$5 + 4 >> 2] = $11;
                       if (!$4) {
                        break block169
                       }
                      }
                      while (1) {
                       $5 = $4 - 1 >>> 1 | 0;
                       $12 = $8 + ($5 << 4) | 0;
                       $17 = HEAP32[$12 >> 2];
                       $20 = HEAP32[$12 + 4 >> 2];
                       if (($9 | 0) == ($17 | 0) & ($11 | 0) == ($20 | 0) ? $16 >>> 0 >= HEAPU32[$12 + 8 >> 2] : ($11 | 0) == ($20 | 0) & $9 >>> 0 >= $17 >>> 0 | $11 >>> 0 > $20 >>> 0) {
                        break block170
                       }
                       $17 = HEAP32[$12 + 12 >> 2];
                       $4 = $8 + ($4 << 4) | 0;
                       HEAP32[$4 + 8 >> 2] = HEAP32[$12 + 8 >> 2];
                       HEAP32[$4 + 12 >> 2] = $17;
                       $17 = HEAP32[$12 + 4 >> 2];
                       HEAP32[$4 >> 2] = HEAP32[$12 >> 2];
                       HEAP32[$4 + 4 >> 2] = $17;
                       $4 = $5;
                       if ($4) {
                        continue
                       }
                       break;
                      };
                     }
                     $4 = 0;
                    }
                    $4 = $8 + ($4 << 4) | 0;
                    HEAP32[$4 + 8 >> 2] = $16;
                    HEAP32[$4 >> 2] = $9;
                    HEAP32[$4 + 4 >> 2] = $11;
                   }
                   $4 = HEAP32[$7 + 112 >> 2];
                   if ($4 >>> 0 <= $6 >>> 0) {
                    break block171
                   }
                   $11 = $6 << 3;
                   $4 = $11 + HEAP32[$7 + 108 >> 2] | 0;
                   if (!(($3 | 0) != HEAP32[$4 >> 2] | ($22 | 0) != HEAP32[$4 + 4 >> 2])) {
                    HEAP32[$4 >> 2] = -1;
                    HEAP32[$4 + 4 >> 2] = -1;
                    block173 : {
                     if (HEAPU8[$7 + 148 | 0] != 2) {
                      break block173
                     }
                     $3 = HEAP32[$7 + 100 >> 2];
                     if ($3 >>> 0 <= $6 >>> 0) {
                      break block174
                     }
                     $5 = HEAP32[$7 + 40 >> 2];
                     $3 = HEAP32[$7 + 76 >> 2];
                     $4 = $11 + HEAP32[$7 + 96 >> 2] | 0;
                     $8 = HEAP32[$4 >> 2];
                     $16 = HEAP32[$4 + 4 >> 2];
                     $12 = HEAP32[$0 + 228 >> 2];
                     $4 = $12;
                     $9 = HEAP32[$0 + 224 >> 2];
                     if (!(($16 | 0) == ($4 | 0) & $9 >>> 0 >= $8 >>> 0 | $4 >>> 0 > $16 >>> 0)) {
                      if ($3 >>> 0 <= $6 >>> 0) {
                       break block176
                      }
                      if ($5 >>> 0 < HEAPU32[HEAP32[$7 + 72 >> 2] + ($6 << 2) >> 2]) {
                       break block173
                      }
                      $8 = HEAP32[$7 + 88 >> 2];
                      if ($8 >>> 0 <= $6 >>> 0) {
                       break block177
                      }
                      $8 = $11 + HEAP32[$7 + 84 >> 2] | 0;
                      $16 = HEAP32[$8 >> 2];
                      $8 = HEAP32[$8 + 4 >> 2];
                      if (($4 | 0) == ($8 | 0) & $9 >>> 0 < $16 >>> 0 | $4 >>> 0 < $8 >>> 0) {
                       break block173
                      }
                     }
                     if ($3 >>> 0 <= $6 >>> 0) {
                      break block178
                     }
                     $3 = HEAP32[$7 + 64 >> 2];
                     if ($3 >>> 0 <= $6 >>> 0) {
                      break block179
                     }
                     $13 = $6 << 2;
                     $8 = HEAP32[$13 + HEAP32[$7 + 72 >> 2] >> 2];
                     $3 = $8 - 1 | 0;
                     $4 = $3 + HEAP32[$0 + 220 >> 2] | 0;
                     $4 = $8 >>> 0 > HEAP32[$13 + HEAP32[$7 + 60 >> 2] >> 2] + 1 >>> 0 ? $3 : $4 >>> 0 > $5 >>> 0 ? $5 : $4;
                     $16 = HEAP32[$7 + 36 >> 2];
                     $13 = 0;
                     $8 = $8 - 2 | 0;
                     if ($5 >>> 0 > $8 >>> 0) {
                      $13 = HEAP32[$16 + ($8 << 3) >> 2]
                     }
                     if ($3 >>> 0 > $4 >>> 0) {
                      break block181
                     }
                     if ($4 >>> 0 > $5 >>> 0) {
                      break block181
                     }
                     $17 = HEAP32[$0 + 160 >> 2];
                     $19 = HEAP32[$0 + 164 >> 2];
                     $20 = HEAP32[$0 + 184 >> 2];
                     $23 = HEAP32[$0 + 188 >> 2];
                     $5 = $4 - $3 | 0;
                     $8 = 4;
                     if (($3 | 0) != ($4 | 0)) {
                      $22 = $5 << 3;
                      $8 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($22);
                      if (!$8) {
                       break block183
                      }
                      _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($8, $16 + ($3 << 3) | 0, $22);
                     }
                     $16 = HEAP32[$7 + 136 >> 2];
                     HEAP32[$14 + 56 >> 2] = $13;
                     HEAP32[$14 + 52 >> 2] = $3;
                     HEAP32[$14 + 48 >> 2] = $5;
                     HEAP32[$14 + 44 >> 2] = $8;
                     HEAP32[$14 + 40 >> 2] = $5;
                     HEAP32[$14 + 60 >> 2] = $4 >>> 0 < $16 >>> 0 ? $4 : $16;
                     $3 = HEAP32[$7 + 88 >> 2];
                     if ($3 >>> 0 <= $6 >>> 0) {
                      break block184
                     }
                     $3 = $12 + $23 | 0;
                     $4 = $3 + 1 | 0;
                     $5 = $3;
                     $3 = $9 + $20 | 0;
                     $4 = $3 >>> 0 < $9 >>> 0 ? $4 : $5;
                     $5 = $11 + HEAP32[$7 + 84 >> 2] | 0;
                     HEAP32[$5 >> 2] = $3;
                     HEAP32[$5 + 4 >> 2] = $4;
                     $3 = HEAP32[$7 + 100 >> 2];
                     if ($3 >>> 0 <= $6 >>> 0) {
                      break block185
                     }
                     $3 = $11 + HEAP32[$7 + 96 >> 2] | 0;
                     $4 = $9 + (($19 & 1) << 31 | $17 >>> 1) | 0;
                     HEAP32[$3 >> 2] = $4;
                     $5 = $3;
                     $3 = $12 + ($19 >>> 1 | 0) | 0;
                     HEAP32[$5 + 4 >> 2] = $4 >>> 0 < $9 >>> 0 ? $3 + 1 | 0 : $3;
                     _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $10, $6, HEAP32[$7 + 132 >> 2], $14 + 40 | 0);
                     $13 = HEAP32[$0 + 288 >> 2];
                    }
                    $19 = HEAP32[$0 + 284 >> 2];
                    _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($19, $13, $10, $6);
                   }
                   if ($10 >>> 0 < $13 >>> 0) {
                    continue
                   }
                   break;
                  };
                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($10, $13, 1054588);
                  wasm2js_trap();
                 }
                 $7 = 0;
                 $4 = 0;
                 while (1) {
                  block186 : {
                   if (($4 | 0) == ($10 | 0)) {
                    break block186
                   }
                   block188 : {
                    $3 = HEAP32[$0 + 288 >> 2];
                    if ($10 >>> 0 < $3 >>> 0) {
                     $3 = $15 + HEAP32[$0 + 284 >> 2] | 0;
                     if (HEAPU8[$3 + 148 | 0] != 1) {
                      break block186
                     }
                     $5 = HEAP32[$3 + 88 >> 2];
                     if ($5 >>> 0 <= $4 >>> 0) {
                      break block188
                     }
                     $5 = HEAP32[$3 + 84 >> 2] + $7 | 0;
                     $8 = HEAP32[$5 >> 2];
                     $9 = HEAP32[$5 + 4 >> 2];
                     $6 = HEAP32[$0 + 228 >> 2];
                     $11 = $8;
                     $8 = HEAP32[$0 + 224 >> 2];
                     if (($9 | 0) == ($6 | 0) & $11 >>> 0 > $8 >>> 0 | $6 >>> 0 < $9 >>> 0) {
                      break block186
                     }
                     $6 = $6 + HEAP32[$0 + 188 >> 2] | 0;
                     $11 = $6 + 1 | 0;
                     $9 = $6;
                     $6 = $8 + HEAP32[$0 + 184 >> 2] | 0;
                     $8 = $8 >>> 0 > $6 >>> 0 ? $11 : $9;
                     HEAP32[$5 >> 2] = $6;
                     HEAP32[$5 + 4 >> 2] = $8;
                     $5 = HEAP32[$3 + 40 >> 2];
                     if ($5) {
                      $6 = HEAP32[(HEAP32[$3 + 36 >> 2] + ($5 << 3) | 0) - 8 >> 2]
                     } else {
                      $6 = 0
                     }
                     HEAP32[$14 + 48 >> 2] = $5;
                     HEAP32[$14 + 44 >> 2] = $6;
                     HEAP32[$14 + 40 >> 2] = -2147483648;
                     _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $10, $4, HEAP32[$3 + 132 >> 2], $14 + 40 | 0);
                     break block186;
                    }
                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($10, $3, 1054556);
                    wasm2js_trap();
                   }
                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, $5, 1054572);
                   wasm2js_trap();
                  }
                  $7 = $7 + 8 | 0;
                  $4 = $4 + 1 | 0;
                  if (($13 | 0) != ($4 | 0)) {
                   continue
                  }
                  break;
                 };
                }
                block195 : {
                 block194 : {
                  block193 : {
                   block192 : {
                    $3 = HEAP32[$0 + 288 >> 2];
                    if ($10 >>> 0 < $3 >>> 0) {
                     $6 = -1;
                     $9 = -1;
                     $3 = $15 + HEAP32[$0 + 284 >> 2] | 0;
                     switch (HEAPU8[$3 + 148 | 0] - 1 | 0) {
                     case 0:
                      break block193;
                     case 1:
                      break block194;
                     case 2:
                      break block195;
                     default:
                      break block192;
                     };
                    }
                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($10, $3, 1055224);
                    wasm2js_trap();
                   }
                   $6 = HEAP32[$3 + 24 >> 2];
                   $9 = HEAP32[$3 + 28 >> 2];
                   break block195;
                  }
                  $6 = HEAP32[$3 + 24 >> 2];
                  $9 = HEAP32[$3 + 28 >> 2];
                  $5 = HEAP32[$3 + 88 >> 2];
                  if (!$5) {
                   break block195
                  }
                  $4 = HEAP32[$3 + 84 >> 2];
                  $3 = $5 - 1 & 536870911;
                  $8 = $3 + 1 | 0;
                  $5 = $8 & 3;
                  $7 = 0;
                  if ($3 >>> 0 >= 3) {
                   $11 = $8 & 1073741820;
                   while (1) {
                    $8 = HEAP32[$4 >> 2];
                    $3 = HEAP32[$4 + 4 >> 2];
                    $13 = ($9 | 0) == ($3 | 0) & $6 >>> 0 > $8 >>> 0 | $3 >>> 0 < $9 >>> 0;
                    $12 = ($7 | 0) == ($10 | 0);
                    $6 = $12 ? $6 : $13 ? $8 : $6;
                    $8 = $4 + 8 | 0;
                    $15 = HEAP32[$8 >> 2];
                    $8 = HEAP32[$8 + 4 >> 2];
                    $3 = $12 ? $9 : $13 ? $3 : $9;
                    $9 = ($8 | 0) == ($3 | 0) & $6 >>> 0 > $15 >>> 0 | $3 >>> 0 > $8 >>> 0;
                    $12 = ($10 | 0) == ($7 + 1 | 0);
                    $6 = $12 ? $6 : $9 ? $15 : $6;
                    $13 = $4 + 16 | 0;
                    $15 = HEAP32[$13 >> 2];
                    $13 = HEAP32[$13 + 4 >> 2];
                    $3 = $12 ? $3 : $9 ? $8 : $3;
                    $9 = ($13 | 0) == ($3 | 0) & $6 >>> 0 > $15 >>> 0 | $3 >>> 0 > $13 >>> 0;
                    $12 = ($10 | 0) == ($7 + 2 | 0);
                    $6 = $12 ? $6 : $9 ? $15 : $6;
                    $8 = $4 + 24 | 0;
                    $15 = HEAP32[$8 >> 2];
                    $8 = HEAP32[$8 + 4 >> 2];
                    $3 = $12 ? $3 : $9 ? $13 : $3;
                    $13 = ($8 | 0) == ($3 | 0) & $6 >>> 0 > $15 >>> 0 | $3 >>> 0 > $8 >>> 0;
                    $9 = ($10 | 0) == ($7 + 3 | 0);
                    $6 = $9 ? $6 : $13 ? $15 : $6;
                    $9 = $9 ? $3 : $13 ? $8 : $3;
                    $4 = $4 + 32 | 0;
                    $7 = $7 + 4 | 0;
                    if (($11 | 0) != ($7 | 0)) {
                     continue
                    }
                    break;
                   };
                   if (!$5) {
                    break block195
                   }
                  }
                  $7 = $10 - $7 | 0;
                  while (1) {
                   $8 = HEAP32[$4 >> 2];
                   $13 = $8;
                   $3 = HEAP32[$4 + 4 >> 2];
                   $8 = ($9 | 0) == ($3 | 0) & $6 >>> 0 > $8 >>> 0 | $3 >>> 0 < $9 >>> 0;
                   $6 = $7 ? ($8 ? $13 : $6) : $6;
                   $9 = $7 ? ($8 ? $3 : $9) : $9;
                   $7 = $7 - 1 | 0;
                   $4 = $4 + 8 | 0;
                   $5 = $5 - 1 | 0;
                   if ($5) {
                    continue
                   }
                   break;
                  };
                  break block195;
                 }
                 if (!HEAP32[$3 + 124 >> 2]) {
                  break block195
                 }
                 $3 = HEAP32[$3 + 120 >> 2];
                 $6 = HEAP32[$3 >> 2];
                 $9 = HEAP32[$3 + 4 >> 2];
                }
                $3 = HEAP32[$0 + 312 >> 2];
                if ($10 >>> 0 < $3 >>> 0) {
                 $3 = $25 + HEAP32[$0 + 308 >> 2] | 0;
                 HEAP32[$3 >> 2] = $6;
                 HEAP32[$3 + 4 >> 2] = $9;
                 $13 = 1;
                 if (($6 & $9) == -1) {
                  continue
                 }
                 $7 = HEAP32[$0 + 300 >> 2];
                 if (($7 | 0) == HEAP32[$0 + 292 >> 2]) {
                  _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($28)
                 }
                 HEAP32[$0 + 300 >> 2] = $7 + 1;
                 $5 = HEAP32[$0 + 296 >> 2];
                 $3 = $5 + ($7 << 4) | 0;
                 HEAP32[$3 + 8 >> 2] = $10;
                 HEAP32[$3 >> 2] = $6;
                 HEAP32[$3 + 4 >> 2] = $9;
                 $8 = 0;
                 block199 : {
                  if (!$7) {
                   break block199
                  }
                  while (1) {
                   $3 = $7 - 1 >>> 1 | 0;
                   $4 = $5 + ($3 << 4) | 0;
                   $11 = HEAP32[$4 >> 2];
                   $12 = HEAP32[$4 + 4 >> 2];
                   if (($6 | 0) == ($11 | 0) & ($9 | 0) == ($12 | 0) ? $10 >>> 0 >= HEAPU32[$4 + 8 >> 2] : ($9 | 0) == ($12 | 0) & $6 >>> 0 >= $11 >>> 0 | $9 >>> 0 > $12 >>> 0) {
                    $8 = $7;
                    break block199;
                   }
                   $11 = HEAP32[$4 + 12 >> 2];
                   $7 = $5 + ($7 << 4) | 0;
                   HEAP32[$7 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                   HEAP32[$7 + 12 >> 2] = $11;
                   $11 = HEAP32[$4 + 4 >> 2];
                   HEAP32[$7 >> 2] = HEAP32[$4 >> 2];
                   HEAP32[$7 + 4 >> 2] = $11;
                   $7 = $3;
                   if ($3) {
                    continue
                   }
                   break;
                  };
                 }
                 $3 = $5 + ($8 << 4) | 0;
                 HEAP32[$3 + 8 >> 2] = $10;
                 HEAP32[$3 >> 2] = $6;
                 HEAP32[$3 + 4 >> 2] = $9;
                 continue;
                }
                break;
               };
               break;
              };
              break;
             };
             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($10, $3, 1054348);
             wasm2js_trap();
            }
            _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054748);
            wasm2js_trap();
           }
           _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054732);
           wasm2js_trap();
          }
          _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
          wasm2js_trap();
         }
         _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail($3, $4, $5, 1054764);
         wasm2js_trap();
        }
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054716);
        wasm2js_trap();
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054700);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $8, 1054684);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054668);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1054652);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1054604);
   wasm2js_trap();
  }
  _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $4, $3, 1055320);
  wasm2js_trap();
 }
 
 function rs_seek($0, $1) {
  $0 = $0 | 0;
  $1 = +$1;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0.0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $11 = __stack_pointer - 384 | 0;
  __stack_pointer = $11;
  $1 = $1 != $1 ? 0.0 : $1;
  $1 = $1 > 0.0 ? $1 : 0.0;
  $12 = $1 >= 0.0;
  block1 : {
   if ($12 & $1 < 18446744073709551615.0) {
    $2 = ~~$1 >>> 0;
    if (Math_abs($1) >= 1.0) {
     if ($1 > 0.0) {
      $18 = Math_min(Math_floor($1 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $18 = Math_ceil(($1 - +(~~$1 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $3 = ~~$18 >>> 0;
    } else {
     $3 = 0
    }
    break block1;
   }
   $3 = 0;
  }
  $9 = $12 ? $2 : 0;
  $2 = $1 > 18446744073709549568.0;
  $14 = $2 ? -1 : $9;
  block6 : {
   $9 = $2 ? -1 : $12 ? $3 : 0;
   $3 = $9;
   $2 = HEAP32[$0 + 228 >> 2];
   if (!(($3 | 0) == ($2 | 0) & HEAPU32[$0 + 224 >> 2] <= $14 >>> 0 | $2 >>> 0 < $3 >>> 0)) {
    $6 = HEAP32[$0 + 416 >> 2];
    block3 : {
     block4 : {
      block5 : {
       $8 = HEAP32[$0 + 420 >> 2];
       $2 = $8;
       switch ($2 | 0) {
       case 0:
        break block3;
       case 1:
        break block4;
       default:
        break block5;
       };
      }
      while (1) {
       $5 = $2 >>> 1 | 0;
       $4 = $5 + $7 | 0;
       $3 = ($6 + Math_imul($4, 392) | 0) + 224 | 0;
       $12 = HEAP32[$3 >> 2];
       $3 = HEAP32[$3 + 4 >> 2];
       $7 = ($9 | 0) == ($3 | 0) & $12 >>> 0 > $14 >>> 0 | $3 >>> 0 > $9 >>> 0 ? $7 : $4;
       $2 = $2 - $5 | 0;
       if ($2 >>> 0 > 1) {
        continue
       }
       break;
      };
     }
     $2 = ($6 + Math_imul($7, 392) | 0) + 224 | 0;
     $3 = HEAP32[$2 >> 2];
     $2 = HEAP32[$2 + 4 >> 2];
     $2 = (($9 | 0) == ($2 | 0) & $3 >>> 0 <= $14 >>> 0 | $2 >>> 0 < $9 >>> 0) + $7 | 0;
     $2 = $2 - (($2 | 0) != 0) | 0;
    }
    if ($2 >>> 0 >= $8 >>> 0) {
     break block6
    }
    $2 = $6 + Math_imul($2, 392) | 0;
    _RNvXsB_NtCseywxCc024wH_14raftscope_core3simNtB5_3SimNtNtCsedhpoW0refZ_4core5clone5Clone5clone($11, $2);
    _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($0);
    (wasm2js_i32$0 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $11, 384), wasm2js_i32$1 = HEAP32[$2 + 384 >> 2]), HEAP32[wasm2js_i32$0 + 424 >> 2] = wasm2js_i32$1;
   }
   $12 = $0 + 412 | 0;
   while (1) {
    $10 = HEAP32[$0 + 224 >> 2];
    $13 = HEAP32[$0 + 228 >> 2];
    block16 : {
     block13 : {
      block9 : {
       block8 : {
        $16 = HEAP32[$0 + 424 >> 2];
        $6 = $16 >>> 0 >= HEAPU32[$0 + 408 >> 2];
        if (!$6) {
         $4 = HEAP32[$0 + 404 >> 2] + Math_imul($16, 24) | 0;
         $3 = HEAP32[$4 >> 2];
         $2 = HEAP32[$4 + 4 >> 2];
         if (($13 | 0) == ($2 | 0) & $3 >>> 0 <= $10 >>> 0 | $2 >>> 0 < $13 >>> 0) {
          break block8
         }
        }
        if (($9 | 0) == ($13 | 0) & $10 >>> 0 >= $14 >>> 0 | $9 >>> 0 < $13 >>> 0) {
         break block9
        }
        $4 = HEAP32[$0 + 388 >> 2];
        $2 = HEAP32[$0 + 420 >> 2];
        block11 : {
         if (!$2) {
          $7 = 0;
          $15 = 0;
          break block11;
         }
         $2 = (HEAP32[$0 + 416 >> 2] + Math_imul($2, 392) | 0) - 168 | 0;
         $7 = HEAP32[$2 >> 2];
         $15 = HEAP32[$2 + 4 >> 2];
        }
        $2 = $4 + $15 | 0;
        $3 = HEAP32[$0 + 384 >> 2];
        $5 = $7 + $3 | 0;
        $17 = $5 >>> 0 < $7 >>> 0 ? $2 + 1 | 0 : $2;
        $2 = $4 + $13 | 0;
        $8 = $2 + 1 | 0;
        $4 = $2;
        $2 = $3 + $10 | 0;
        $8 = $2 >>> 0 < $10 >>> 0 ? $8 : $4;
        $3 = $5;
        $5 = ($13 | 0) == ($17 | 0) & $5 >>> 0 > $10 >>> 0 | $13 >>> 0 < $17 >>> 0;
        $10 = $5 ? $3 : $2;
        $2 = $14;
        $3 = $9;
        if (!$6) {
         $4 = HEAP32[$0 + 404 >> 2] + Math_imul($16, 24) | 0;
         $3 = HEAP32[$4 >> 2];
         $6 = $3;
         $4 = HEAP32[$4 + 4 >> 2];
         $3 = ($9 | 0) == ($4 | 0) & $2 >>> 0 > $3 >>> 0 | $4 >>> 0 < $9 >>> 0;
         $2 = $3 ? $6 : $2;
         $3 = $3 ? $4 : $9;
        }
        $4 = $2;
        $5 = $5 ? $17 : $8;
        $2 = ($5 | 0) == ($3 | 0) & $2 >>> 0 > $10 >>> 0 | $3 >>> 0 > $5 >>> 0;
        _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10advance_to($0, $2 ? $10 : $4, $2 ? $5 : $3);
        $2 = HEAP32[$0 + 224 >> 2];
        $3 = HEAP32[$0 + 228 >> 2];
        if (($10 | 0) != ($2 | 0) | ($5 | 0) != ($3 | 0)) {
         continue
        }
        if (($3 | 0) == ($15 | 0) & $2 >>> 0 <= $7 >>> 0 | $3 >>> 0 < $15 >>> 0) {
         continue
        }
        $6 = HEAP32[$0 + 424 >> 2];
        $3 = $6 - 1 | 0;
        $2 = HEAP32[$0 + 408 >> 2];
        if ($3 >>> 0 >= $2 >>> 0) {
         break block13
        }
        $7 = $6 + 1 | 0;
        $2 = (HEAP32[$0 + 404 >> 2] + Math_imul($6, 24) | 0) - 24 | 0;
        while (1) {
         block15 : {
          if (($7 | 0) == 1) {
           $7 = 0;
           break block15;
          }
          $7 = $7 - 1 | 0;
          $3 = $2;
          $4 = HEAP32[$2 >> 2];
          $2 = $2 - 24 | 0;
          $3 = HEAP32[$3 + 4 >> 2];
          if (($5 | 0) == ($3 | 0) & $4 >>> 0 >= $10 >>> 0 | $3 >>> 0 > $5 >>> 0) {
           continue
          }
         }
         break;
        };
        if (($7 | 0) != ($6 | 0)) {
         continue
        }
        break block16;
       }
       $2 = HEAP32[$4 + 20 >> 2];
       HEAP32[$11 + 8 >> 2] = HEAP32[$4 + 16 >> 2];
       HEAP32[$11 + 12 >> 2] = $2;
       $2 = HEAP32[$4 + 12 >> 2];
       HEAP32[$11 >> 2] = HEAP32[$4 + 8 >> 2];
       HEAP32[$11 + 4 >> 2] = $2;
       _RNvMNtCseywxCc024wH_14raftscope_core8timelineNtB2_2Op5apply($11, $0);
       HEAP32[$0 + 424 >> 2] = HEAP32[$0 + 424 >> 2] + 1;
       continue;
      }
      $2 = HEAP32[$0 + 396 >> 2];
      if (!(($2 | 0) == ($13 | 0) & HEAPU32[$0 + 392 >> 2] >= $10 >>> 0 | $2 >>> 0 > $13 >>> 0)) {
       HEAP32[$0 + 392 >> 2] = $10;
       HEAP32[$0 + 396 >> 2] = $13;
      }
      __stack_pointer = $11 + 384 | 0;
      return;
     }
     if (!$6) {
      break block16
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $2, 1055288);
     wasm2js_trap();
    }
    _RNvXsB_NtCseywxCc024wH_14raftscope_core3simNtB5_3SimNtNtCsedhpoW0refZ_4core5clone5Clone5clone($11, $0);
    $8 = HEAP32[$0 + 420 >> 2];
    if (($8 | 0) == HEAP32[$0 + 412 >> 2]) {
     $5 = __stack_pointer - 16 | 0;
     __stack_pointer = $5;
     $3 = HEAP32[$12 >> 2];
     $2 = $3 << 1;
     $4 = $2 >>> 0 <= 4 ? 4 : $2;
     _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($5 + 4 | 0, $3, HEAP32[$12 + 4 >> 2], $4, 8, 392);
     if (HEAP32[$5 + 4 >> 2] == 1) {
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$5 + 8 >> 2]);
      wasm2js_trap();
     }
     $2 = HEAP32[$5 + 8 >> 2];
     HEAP32[$12 >> 2] = $4;
     HEAP32[$12 + 4 >> 2] = $2;
     __stack_pointer = $5 + 16 | 0;
    }
    $5 = HEAP32[$0 + 416 >> 2];
    $3 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($5 + Math_imul($8, 392) | 0, $11, 384);
    $2 = $8 + 1 | 0;
    HEAP32[$0 + 420 >> 2] = $2;
    HEAP32[$3 + 384 >> 2] = $6;
    if ($2 >>> 0 <= HEAPU32[$0 + 428 >> 2]) {
     continue
    }
    if ($8) {
     _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($5 + 392 | 0);
     $3 = 1;
     if (($8 | 0) != 1) {
      $2 = $5 + 784 | 0;
      $4 = 1;
      while (1) {
       $4 = $4 + 1 | 0;
       block22 : {
        if ($4 & 1) {
         _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($2);
         break block22;
        }
        _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($5 + Math_imul($3, 392) | 0, $2, 392);
        $3 = $3 + 1 | 0;
       }
       $2 = $2 + 392 | 0;
       if (($4 | 0) != ($8 | 0)) {
        continue
       }
       break;
      };
     }
     HEAP32[$0 + 420 >> 2] = $3;
    }
    $3 = HEAP32[$0 + 384 >> 2];
    $2 = HEAP32[$0 + 388 >> 2] << 1 | $3 >>> 31;
    HEAP32[$0 + 384 >> 2] = $3 << 1;
    HEAP32[$0 + 388 >> 2] = $2;
    continue;
   };
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($2, $8, 1055304);
  wasm2js_trap();
 }
 
 function rs_server($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  $2 = __stack_pointer - 128 | 0;
  __stack_pointer = $2;
  HEAP32[$2 + 20 >> 2] = 0;
  HEAP32[$2 + 12 >> 2] = 0;
  HEAP32[$2 + 16 >> 2] = 1;
  if ($1 >>> 0 < HEAPU32[$0 + 288 >> 2]) {
   $8 = -1;
   $6 = HEAP32[$0 + 284 >> 2] + Math_imul($1, 152) | 0;
   $3 = $6;
   $1 = HEAP32[$3 + 24 >> 2];
   $3 = HEAP32[$3 + 28 >> 2];
   HEAPF64[$2 + 24 >> 3] = ($1 & $3) == -1 ? -1.0 : +($1 >>> 0) + +($3 >>> 0) * 4294967296.0;
   $5 = HEAPU8[$6 + 148 | 0];
   $1 = $5 << 2;
   HEAP32[$2 + 36 >> 2] = HEAP32[$1 + 1055740 >> 2];
   HEAP32[$2 + 32 >> 2] = HEAP32[$1 + 1055724 >> 2];
   $4 = $6 + 132 | 0;
   $10 = $6 + 128 | 0;
   if (HEAP32[$6 >> 2]) {
    $8 = 0;
    $1 = HEAP32[$6 + 4 >> 2];
   } else {
    $1 = -1
   }
   HEAP32[$2 + 40 >> 2] = $1;
   HEAP32[$2 + 44 >> 2] = $8;
   HEAP32[$2 + 52 >> 2] = HEAP32[$6 + 40 >> 2];
   HEAP32[$2 + 120 >> 2] = $6 + 140;
   $7 = 3;
   HEAP32[$2 + 124 >> 2] = $7;
   HEAP32[$2 + 112 >> 2] = $6 + 144;
   HEAP32[$2 + 116 >> 2] = 3;
   HEAP32[$2 + 104 >> 2] = $2 + 24;
   HEAP32[$2 + 108 >> 2] = 8;
   HEAP32[$2 + 96 >> 2] = $6 + 136;
   HEAP32[$2 + 100 >> 2] = 3;
   HEAP32[$2 + 88 >> 2] = $2 + 52;
   HEAP32[$2 + 92 >> 2] = 3;
   $8 = $2 + 40 | 0;
   HEAP32[$2 + 80 >> 2] = $8;
   HEAP32[$2 + 84 >> 2] = 9;
   HEAP32[$2 + 72 >> 2] = $4;
   HEAP32[$2 + 76 >> 2] = 3;
   HEAP32[$2 + 64 >> 2] = $2 + 32;
   HEAP32[$2 + 68 >> 2] = 7;
   HEAP32[$2 + 56 >> 2] = $10;
   HEAP32[$2 + 60 >> 2] = 3;
   _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 12 | 0, 1048576, 1048732, $2 + 56 | 0);
   block3 : {
    if (($5 | 0) != 2) {
     $5 = HEAP32[$2 + 20 >> 2];
     break block3;
    }
    $5 = HEAP32[$2 + 20 >> 2];
    if (HEAPU32[$0 + 288 >> 2] >= 65) {
     break block3
    }
    $1 = 0;
    if (HEAP32[$2 + 12 >> 2] - $5 >>> 0 <= 9) {
     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 12 | 0, $5, 10);
     $5 = HEAP32[$2 + 20 >> 2];
    }
    $3 = HEAP32[$2 + 16 >> 2] + $5 | 0;
    $4 = HEAPU8[1051340] | HEAPU8[1051341] << 8;
    HEAP8[$3 + 8 | 0] = $4;
    HEAP8[$3 + 9 | 0] = $4 >>> 8;
    $4 = HEAPU8[1051336] | HEAPU8[1051337] << 8 | (HEAPU8[1051338] << 16 | HEAPU8[1051339] << 24);
    $9 = HEAPU8[1051332] | HEAPU8[1051333] << 8 | (HEAPU8[1051334] << 16 | HEAPU8[1051335] << 24);
    HEAP8[$3 | 0] = $9;
    HEAP8[$3 + 1 | 0] = $9 >>> 8;
    HEAP8[$3 + 2 | 0] = $9 >>> 16;
    HEAP8[$3 + 3 | 0] = $9 >>> 24;
    HEAP8[$3 + 4 | 0] = $4;
    HEAP8[$3 + 5 | 0] = $4 >>> 8;
    HEAP8[$3 + 6 | 0] = $4 >>> 16;
    HEAP8[$3 + 7 | 0] = $4 >>> 24;
    HEAP32[$2 + 20 >> 2] = $5 + 10;
    block5 : {
     $5 = HEAP32[$0 + 288 >> 2];
     if (!$5) {
      break block5
     }
     $4 = 1;
     block9 : {
      while (1) {
       $9 = HEAP32[$10 >> 2];
       while (1) {
        block6 : {
         HEAP32[$2 + 40 >> 2] = $1;
         $7 = $1 + 1 | 0;
         if (($1 | 0) != ($9 | 0)) {
          break block6
         }
         $1 = $7;
         if ($1 >>> 0 < $5 >>> 0) {
          continue
         }
         break block5;
        }
        break;
       };
       if (!$4) {
        $1 = HEAP32[$2 + 20 >> 2];
        if (($1 | 0) == HEAP32[$2 + 12 >> 2]) {
         _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 12 | 0, $1, 1)
        }
        HEAP8[$1 + HEAP32[$2 + 16 >> 2] | 0] = 44;
        HEAP32[$2 + 20 >> 2] = $1 + 1;
        $1 = HEAP32[$2 + 40 >> 2];
       }
       $4 = HEAP32[$6 + 76 >> 2];
       if ($4 >>> 0 <= $1 >>> 0) {
        break block9
       }
       $4 = HEAP32[$6 + 64 >> 2];
       if ($1 >>> 0 < $4 >>> 0) {
        $4 = HEAP32[$6 + 72 >> 2];
        $9 = HEAP32[$6 + 60 >> 2];
        HEAP32[$2 + 56 >> 2] = $8;
        HEAP32[$2 + 60 >> 2] = 3;
        $1 = $1 << 2;
        HEAP32[$2 + 72 >> 2] = $1 + $9;
        HEAP32[$2 + 76 >> 2] = 3;
        HEAP32[$2 + 64 >> 2] = $1 + $4;
        HEAP32[$2 + 68 >> 2] = 3;
        _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 12 | 0, 1048576, 1049334, $2 + 56 | 0);
        $4 = 0;
        $1 = $7;
        if ($5 >>> 0 > $1 >>> 0) {
         continue
        }
        break block5;
       }
       break;
      };
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $4, 1051360);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $4, 1051344);
     wasm2js_trap();
    }
    $1 = HEAP32[$2 + 20 >> 2];
    if (($1 | 0) == HEAP32[$2 + 12 >> 2]) {
     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 12 | 0, $1, 1)
    }
    HEAP8[$1 + HEAP32[$2 + 16 >> 2] | 0] = 93;
    $5 = $1 + 1 | 0;
    HEAP32[$2 + 20 >> 2] = $5;
   }
   if (($5 | 0) == HEAP32[$2 + 12 >> 2]) {
    _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 12 | 0, $5, 1)
   }
   HEAP8[HEAP32[$2 + 16 >> 2] + $5 | 0] = 125;
   HEAP32[$2 + 20 >> 2] = $5 + 1;
  }
  HEAP32[$2 + 64 >> 2] = HEAP32[$2 + 20 >> 2];
  $1 = HEAP32[$2 + 16 >> 2];
  HEAP32[$2 + 56 >> 2] = HEAP32[$2 + 12 >> 2];
  HEAP32[$2 + 60 >> 2] = $1;
  block16 : {
   block14 : {
    $1 = HEAP32[$0 + 460 >> 2];
    if ($1) {
     $8 = HEAP32[$0 + 464 >> 2];
     $3 = HEAP32[$8 - 4 >> 2];
     $7 = $3 & -8;
     $3 = $3 & 3;
     if ($7 >>> 0 < $1 + ($3 ? 4 : 8) >>> 0) {
      break block14
     }
     if (($3 | 0) != 0 & $7 >>> 0 > $1 + 39 >>> 0) {
      break block16
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($8);
    }
    $1 = $0 + 460 | 0;
    HEAP32[$1 + 8 >> 2] = HEAP32[$2 + 64 >> 2];
    $7 = HEAP32[$2 + 60 >> 2];
    HEAP32[$1 >> 2] = HEAP32[$2 + 56 >> 2];
    HEAP32[$1 + 4 >> 2] = $7;
    __stack_pointer = $2 + 128 | 0;
    return HEAP32[$0 + 468 >> 2];
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RNvXs7_NtNtCsedhpoW0refZ_4core3fmt5floatdNtB7_7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0.0;
  $4 = HEAP32[$1 + 8 >> 2];
  $2 = $4 & 2097152;
  $49 = HEAPF64[$0 >> 3];
  folding_inner7 : {
   folding_inner6 : {
    if (!($4 & 268435456)) {
     __inlined_func$_RINvNtNtCsedhpoW0refZ_4core3fmt5float32float_to_decimal_common_shortestdEB6_$69 : {
      $19 = $1;
      $23 = ($2 | 0) != 0;
      $6 = __stack_pointer - 1424 | 0;
      __stack_pointer = $6;
      $41 = 1;
      wasm2js_scratch_store_f64(+$49);
      $13 = wasm2js_scratch_load_i32(1) | 0;
      $0 = $13 & 1048575;
      $1 = $0;
      $2 = wasm2js_scratch_load_i32(0) | 0;
      $5 = $13 >>> 20 & 2047;
      $16 = $5 ? $2 : $2 << 1 & -2;
      $0 = $5 ? $0 | 1048576 : ($13 << 1 | $2 >>> 31) & 2097151;
      $4 = $16 & 1;
      $12 = 2;
      folding_inner5 : {
       folding_inner4 : {
        folding_inner3 : {
         folding_inner0 : {
          block135 : {
           block6 : {
            block5 : {
             block3 : {
              block : {
               block1 : {
                block4 : {
                 block2 : {
                  $1 = !($1 | $2);
                  $2 = $1;
                  $3 = $1 ? 2 : 3;
                  $1 = $13 & 2146435072;
                  switch ((($1 | 0) == 2146435072 ? $2 : $1 ? 4 : $3) - 1 | 0) {
                  case 0:
                   break block1;
                  case 1:
                   break block2;
                  case 2:
                   break block3;
                  case 3:
                   break block4;
                  default:
                   break block;
                  };
                 }
                 $12 = 4;
                 break block;
                }
                $1 = $0 << 1 | $16 >>> 31;
                $2 = !$16 & ($0 | 0) == 1048576;
                $16 = $2 ? 0 : $16 << 1;
                $0 = $2 ? 4194304 : $1;
                $41 = $2 ? 2 : 1;
                $40 = $5 + ($2 ? -1077 : -1076) | 0;
                break block5;
               }
               $12 = 3;
              }
              $12 = $12 - 2 | 0;
              $15 = $13 >>> 31 | 0;
              break block6;
             }
             $40 = $5 - 1075 | 0;
            }
            $15 = $13 >>> 31 | 0;
            $5 = !$4;
            if ($5 >>> 0 > 1) {
             $12 = $5 - 2 | 0;
             break block6;
            }
            block15 : {
             block11 : {
              block13 : {
               if ($0 | $16) {
                $1 = $0 - 1 | 0;
                $10 = $16 - 1 | 0;
                $4 = ($10 | 0) != -1 ? $1 + 1 | 0 : $1;
                HEAP32[$6 + 1256 >> 2] = $10;
                HEAP32[$6 + 1260 >> 2] = $4;
                HEAP16[$6 + 1264 >> 1] = $40;
                $45 = $16 + $41 | 0;
                $42 = $45 >>> 0 < $16 >>> 0 ? $0 + 1 | 0 : $0;
                $1 = Math_clz32($42);
                $18 = ($1 | 0) == 32 ? Math_clz32($45) + 32 | 0 : $1;
                $1 = $18 & 31;
                if (($18 & 63) >>> 0 >= 32) {
                 $27 = $10 << $1;
                 $9 = 0;
                } else {
                 $27 = (1 << $1) - 1 & $10 >>> 32 - $1 | $4 << $1;
                 $9 = $10 << $1;
                }
                $1 = $9;
                $3 = $18 & 31;
                if (($18 & 63) >>> 0 >= 32) {
                 $2 = 0;
                 $1 = $27 >>> $3 | 0;
                } else {
                 $2 = $27 >>> $3 | 0;
                 $1 = ((1 << $3) - 1 & $27) << 32 - $3 | $1 >>> $3;
                }
                HEAP32[$6 + 1088 >> 2] = $1;
                HEAP32[$6 + 1092 >> 2] = $2;
                if (($1 | 0) != ($10 | 0) | ($2 | 0) != ($4 | 0)) {
                 break folding_inner0
                }
                HEAP16[$6 + 1264 >> 1] = $40;
                HEAP32[$6 + 1256 >> 2] = $16;
                HEAP32[$6 + 1260 >> 2] = $0;
                $17 = $0;
                $0 = $18 & 31;
                if (($18 & 63) >>> 0 >= 32) {
                 $2 = $16 << $0;
                 $11 = 0;
                } else {
                 $2 = (1 << $0) - 1 & $16 >>> 32 - $0 | $17 << $0;
                 $11 = $16 << $0;
                }
                $1 = $2;
                $0 = $18 & 31;
                if (($18 & 63) >>> 0 >= 32) {
                 $2 = 0;
                 $0 = $1 >>> $0 | 0;
                } else {
                 $2 = $1 >>> $0 | 0;
                 $0 = ((1 << $0) - 1 & $1) << 32 - $0 | $11 >>> $0;
                }
                HEAP32[$6 + 1088 >> 2] = $0;
                HEAP32[$6 + 1092 >> 2] = $2;
                if (($0 | 0) != ($16 | 0) | ($2 | 0) != ($17 | 0)) {
                 break folding_inner0
                }
                $7 = $40 - $18 | 0;
                $4 = (Math_imul($7, -80) + 79280 | 0) / 2126 | 0;
                if ($4 >>> 0 > 80) {
                 break block11
                }
                $10 = $5 << 24;
                $0 = ($13 | 0) < 0;
                $3 = $0 ? 1051612 : 1;
                $5 = $0 ? 1051612 : 1051613;
                $0 = $15;
                $15 = $18 & 31;
                $22 = $6 + 48 | 0;
                $13 = $4 << 4;
                $4 = $13;
                $14 = HEAP32[$4 + 1052320 >> 2];
                $4 = HEAP32[$4 + 1052324 >> 2];
                if (($18 & 63) >>> 0 >= 32) {
                 $2 = $45 << $15;
                 $18 = 0;
                } else {
                 $2 = (1 << $15) - 1 & $45 >>> 32 - $15 | $42 << $15;
                 $18 = $45 << $15;
                }
                __multi3($22, $14, $4, $18, $2);
                __multi3($6 + 32 | 0, $14, $4, $9, $27);
                __multi3($6 + 16 | 0, $14, $4, $11, $1);
                $7 = 0 - ($7 + HEAPU16[$13 + 1052328 >> 1] | 0) | 0;
                $4 = $7 & 31;
                if (($7 & 63) >>> 0 >= 32) {
                 $2 = 1 << $4;
                 $1 = 0;
                } else {
                 $1 = 1 << $4;
                 $2 = $1 - 1 & 1 >>> 32 - $4;
                }
                $26 = $1;
                $14 = $2;
                $1 = $2 - 1 | 0;
                $24 = $26 - 1 | 0;
                $28 = ($24 | 0) != -1 ? $1 + 1 | 0 : $1;
                $46 = HEAP32[$6 + 36 >> 2] >> 31;
                $33 = HEAP32[$6 + 20 >> 2] >>> 31 | 0;
                $20 = HEAP32[$6 + 24 >> 2];
                $34 = HEAP32[$6 + 28 >> 2];
                $2 = HEAPU16[$13 + 1052330 >> 1];
                $4 = $7 & 63;
                $8 = $4;
                $36 = HEAP32[$6 + 40 >> 2];
                $30 = HEAP32[$6 + 44 >> 2];
                $1 = HEAP32[$6 + 60 >> 2];
                $11 = $1;
                $9 = $1 + 1 | 0;
                $21 = HEAP32[$6 + 56 >> 2];
                $25 = HEAP32[$6 + 52 >> 2] >>> 31 | 0;
                $1 = $25;
                $29 = $21 + $1 | 0;
                $18 = $29 >>> 0 < $1 >>> 0 ? $9 : $11;
                $1 = $18;
                $35 = $29 + 1 | 0;
                $1 = $35 ? $1 : $1 + 1 | 0;
                $32 = $1;
                $7 = $7 & 31;
                if ($4 >>> 0 >= 32) {
                 $15 = $1 >>> $7 | 0
                } else {
                 $15 = ((1 << $7) - 1 & $1) << 32 - $7 | $35 >>> $7
                }
                if ($15 >>> 0 >= 1e4) {
                 if ($15 >>> 0 < 1e6) {
                  break block13
                 }
                 if ($15 >>> 0 >= 1e8) {
                  $1 = $15 >>> 0 < 1e9;
                  $9 = $1 ? 8 : 9;
                  $12 = $1 ? 1e8 : 1e9;
                  break block15;
                 }
                 $1 = $15 >>> 0 < 1e7;
                 $9 = $1 ? 6 : 7;
                 $12 = $1 ? 1e6 : 1e7;
                 break block15;
                }
                if ($15 >>> 0 >= 100) {
                 $1 = $15 >>> 0 < 1e3;
                 $9 = $1 ? 2 : 3;
                 $12 = $1 ? 100 : 1e3;
                 break block15;
                }
                $9 = $15 >>> 0 > 9;
                $12 = $9 ? 10 : 1;
                break block15;
               }
               _RNvNtCsedhpoW0refZ_4core9panicking5panic(1053616, 28, 1053708);
               wasm2js_trap();
              }
              $1 = $15 >>> 0 < 1e5;
              $9 = $1 ? 4 : 5;
              $12 = $1 ? 1e4 : 1e5;
              break block15;
             }
             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, 81, 1053660);
             wasm2js_trap();
            }
            $39 = $10 >> 24;
            $47 = $23 ? $5 : $3;
            $31 = $23 ? 1 : $0;
            $1 = $24 & $35;
            $10 = $28 & $32;
            $44 = $20 + $33 | 0;
            $37 = $44 >>> 0 < $20 >>> 0 ? $34 + 1 | 0 : $34;
            $43 = ($9 - $2 | 0) + 1 | 0;
            $0 = $32 + ($46 - (($36 >>> 0 > $46 >>> 0) + $30 | 0) | 0) | 0;
            $4 = $35 + ($46 - $36 | 0) | 0;
            $0 = $4 >>> 0 < $35 >>> 0 ? $0 + 1 | 0 : $0;
            $48 = $4 + 1 | 0;
            $0 = $48 ? $0 : $0 + 1 | 0;
            $5 = $24 & $48;
            $7 = $0;
            $2 = $28 & $0;
            $3 = 0;
            block29 : {
             block28 : {
              block23 : {
               block20 : {
                block26 : {
                 block24 : {
                  block19 : {
                   block17 : {
                    block21 : {
                     while (1) {
                      $23 = ($6 + 79 | 0) + $3 | 0;
                      $0 = ($15 >>> 0) / ($12 >>> 0) | 0;
                      $13 = $0 + 48 | 0;
                      HEAP8[$23 | 0] = $13;
                      $15 = $15 - Math_imul($0, $12) | 0;
                      $0 = $8 & 31;
                      if ($8 >>> 0 >= 32) {
                       $27 = $15 << $0;
                       $22 = 0;
                      } else {
                       $27 = (1 << $0) - 1 & $15 >>> 32 - $0;
                       $22 = $15 << $0;
                      }
                      $0 = $1 + $22 | 0;
                      $4 = $10 + $27 | 0;
                      $4 = $0 >>> 0 < $1 >>> 0 ? $4 + 1 | 0 : $4;
                      if (($4 | 0) == ($7 | 0) & $0 >>> 0 < $48 >>> 0 | $4 >>> 0 < $7 >>> 0) {
                       break block17
                      }
                      if (($3 | 0) == ($9 | 0)) {
                       $0 = 1;
                       $4 = 0;
                       while (1) {
                        $11 = $0;
                        $13 = $4;
                        $9 = $3;
                        if (($3 | 0) == 16) {
                         break block19
                        }
                        $1 = __wasm_i64_mul($1, $10, 10, 0);
                        $10 = i64toi32_i32$HIGH_BITS;
                        $0 = $8 & 31;
                        $4 = ($3 + $6 | 0) + 80 | 0;
                        if ($8 >>> 0 >= 32) {
                         $0 = $10 >>> $0 | 0
                        } else {
                         $0 = ((1 << $0) - 1 & $10) << 32 - $0 | $1 >>> $0
                        }
                        $15 = $0 + 48 | 0;
                        HEAP8[$4 | 0] = $15;
                        $0 = __wasm_i64_mul($11, $13, 10, 0);
                        $4 = i64toi32_i32$HIGH_BITS;
                        $3 = $9 + 1 | 0;
                        $5 = __wasm_i64_mul($5, $2, 10, 0);
                        $2 = i64toi32_i32$HIGH_BITS;
                        $10 = $10 & $28;
                        $1 = $1 & $24;
                        if (($2 | 0) == ($10 | 0) & $1 >>> 0 >= $5 >>> 0 | $2 >>> 0 < $10 >>> 0) {
                         continue
                        }
                        break;
                       };
                       $24 = $2 - (($1 >>> 0 > $5 >>> 0) + $10 | 0) | 0;
                       $7 = $24;
                       $28 = $5 - $1 | 0;
                       $7 = ($14 | 0) == ($7 | 0) & $26 >>> 0 > $28 >>> 0 | $7 >>> 0 < $14 >>> 0;
                       $23 = __wasm_i64_mul($0, $4, $35 - $44 | 0, $32 - (($35 >>> 0 < $44 >>> 0) + $37 | 0) | 0);
                       $30 = i64toi32_i32$HIGH_BITS;
                       $18 = $4 + $30 | 0;
                       $33 = $0 + $23 | 0;
                       $29 = $33 >>> 0 < $0 >>> 0 ? $18 + 1 | 0 : $18;
                       $22 = $30 - (($0 >>> 0 > $23 >>> 0) + $4 | 0) | 0;
                       $4 = $22;
                       $34 = $23 - $0 | 0;
                       if (($4 | 0) == ($10 | 0) & $1 >>> 0 >= $34 >>> 0 | $4 >>> 0 < $10 >>> 0) {
                        break block20
                       }
                       if (($14 | 0) == ($24 | 0) & $26 >>> 0 <= $28 >>> 0 | $14 >>> 0 < $24 >>> 0) {
                        break block21
                       }
                       break block20;
                      }
                      $3 = $3 + 1 | 0;
                      $0 = $12 >>> 0 < 10;
                      $12 = ($12 >>> 0) / 10 | 0;
                      if (!$0) {
                       continue
                      }
                      break;
                     };
                     _RNvNtNtCsedhpoW0refZ_4core9panicking11panic_const23panic_const_div_by_zero(1053724);
                     wasm2js_trap();
                    }
                    $32 = ($6 + 79 | 0) + $3 | 0;
                    $21 = $5 - $26 | 0;
                    $25 = $2 - (($5 >>> 0 < $26 >>> 0) + $14 | 0) | 0;
                    $23 = $26 - $34 | 0;
                    $24 = $14 - (($26 >>> 0 < $34 >>> 0) + $22 | 0) | 0;
                    $3 = 0 - $1 | 0;
                    $37 = 0 - ((($1 | 0) != 0) + $10 | 0) | 0;
                    while (1) {
                     block22 : {
                      $0 = $10 + $14 | 0;
                      $7 = $0 + 1 | 0;
                      $4 = $0;
                      $0 = $1 + $26 | 0;
                      $4 = $0 >>> 0 < $26 >>> 0 ? $7 : $4;
                      if (($22 | 0) == ($4 | 0) & $0 >>> 0 < $34 >>> 0 | $4 >>> 0 < $22 >>> 0) {
                       break block22
                      }
                      $7 = $22 + $37 | 0;
                      $28 = $3 + $34 | 0;
                      $30 = $28 >>> 0 < $3 >>> 0 ? $7 + 1 | 0 : $7;
                      $7 = $10 + $24 | 0;
                      $18 = $1 + $23 | 0;
                      $7 = $18 >>> 0 < $1 >>> 0 ? $7 + 1 | 0 : $7;
                      if (($30 | 0) == ($7 | 0) & $18 >>> 0 <= $28 >>> 0 | $7 >>> 0 < $30 >>> 0) {
                       break block22
                      }
                      $7 = 0;
                      break block20;
                     }
                     $15 = $15 - 1 | 0;
                     HEAP8[$32 | 0] = $15;
                     $1 = $25 + $37 | 0;
                     $10 = $3 + $21 | 0;
                     $1 = $10 >>> 0 < $3 >>> 0 ? $1 + 1 | 0 : $1;
                     $7 = ($14 | 0) == ($1 | 0) & $10 >>> 0 < $26 >>> 0 | $1 >>> 0 < $14 >>> 0;
                     if (($4 | 0) == ($22 | 0) & $0 >>> 0 >= $34 >>> 0 | $4 >>> 0 > $22 >>> 0) {
                      break block23
                     }
                     $1 = $3;
                     $3 = $1 - $26 | 0;
                     $37 = $37 - (($1 >>> 0 < $26 >>> 0) + $14 | 0) | 0;
                     $1 = $0;
                     $10 = $4;
                     if (!$7) {
                      continue
                     }
                     break;
                    };
                    break block23;
                   }
                   $15 = $7 - (($0 >>> 0 > $48 >>> 0) + $4 | 0) | 0;
                   $14 = $48 - $0 | 0;
                   $5 = $8 & 31;
                   if ($8 >>> 0 >= 32) {
                    $2 = $12 << $5;
                    $38 = 0;
                   } else {
                    $2 = (1 << $5) - 1 & $12 >>> 32 - $5;
                    $38 = $12 << $5;
                   }
                   $5 = $38;
                   $9 = $2;
                   $12 = ($2 | 0) == ($15 | 0) & $5 >>> 0 > $14 >>> 0 | $2 >>> 0 > $15 >>> 0;
                   $2 = $32 - (($35 >>> 0 < $44 >>> 0) + $37 | 0) | 0;
                   $5 = $35 - $44 | 0;
                   $35 = $5 + 1 | 0;
                   $26 = $35 ? $2 : $2 + 1 | 0;
                   $2 = $2 - 1 | 0;
                   $32 = $5 - 1 | 0;
                   $8 = ($32 | 0) != -1 ? $2 + 1 | 0 : $2;
                   if (($8 | 0) == ($4 | 0) & $0 >>> 0 >= $32 >>> 0 | $4 >>> 0 > $8 >>> 0) {
                    break block24
                   }
                   if (($9 | 0) == ($15 | 0) & $14 >>> 0 < $38 >>> 0 | $9 >>> 0 > $15 >>> 0) {
                    break block24
                   }
                   $2 = $18 + $46 | 0;
                   $15 = $29 + $46 | 0;
                   $24 = ($46 >>> 0 > $15 >>> 0 ? $2 + 1 | 0 : $2) - (($15 >>> 0 < $36 >>> 0) + $30 | 0) | 0;
                   $2 = $10 + $9 | 0;
                   $14 = $1 + $38 | 0;
                   $10 = $14 >>> 0 < $38 >>> 0 ? $2 + 1 | 0 : $2;
                   $1 = $27 + $10 | 0;
                   $5 = $14 + $22 | 0;
                   $2 = $15 - $36 | 0;
                   $1 = $24 - (($5 >>> 0 < $22 >>> 0 ? $1 + 1 | 0 : $1) + ($5 >>> 0 > $2 >>> 0) | 0) | 0;
                   $24 = ($2 - $5 | 0) + 2 | 0;
                   $28 = $24 >>> 0 < 2 ? $1 + 1 | 0 : $1;
                   $1 = $29 - $44 | 0;
                   $30 = $1 - $0 | 0;
                   $18 = $18 - (($29 >>> 0 < $44 >>> 0) + $37 | 0) - (($0 >>> 0 > $1 >>> 0) + $4) | 0;
                   $2 = $14 + $33 | 0;
                   $1 = $34 + ($2 >>> 0 < $33 >>> 0 ? $10 + 1 | 0 : $10) | 0;
                   $10 = $2 + $20 | 0;
                   $5 = $10 >>> 0 < $20 >>> 0 ? $1 + 1 | 0 : $1;
                   $1 = $10 - $25 | 0;
                   $2 = $1 - $21 | 0;
                   $1 = $27 + ($5 - ($10 >>> 0 < $25 >>> 0) - (($1 >>> 0 < $21 >>> 0) + $11) | 0) | 0;
                   $21 = $2 + $22 | 0;
                   $15 = $21 >>> 0 < $22 >>> 0 ? $1 + 1 | 0 : $1;
                   $1 = 0;
                   $10 = 0;
                   while (1) {
                    block25 : {
                     $2 = $4 + $9 | 0;
                     $5 = $0 + $38 | 0;
                     $2 = $5 >>> 0 < $38 >>> 0 ? $2 + 1 | 0 : $2;
                     if (($8 | 0) == ($2 | 0) & $5 >>> 0 < $32 >>> 0 | $2 >>> 0 < $8 >>> 0) {
                      break block25
                     }
                     $11 = $10 + $18 | 0;
                     $14 = $1 + $30 | 0;
                     $11 = $14 >>> 0 < $1 >>> 0 ? $11 + 1 | 0 : $11;
                     if (($15 | 0) == ($11 | 0) & $14 >>> 0 >= $21 >>> 0 | $11 >>> 0 > $15 >>> 0) {
                      break block25
                     }
                     $12 = 0;
                     break block24;
                    }
                    $13 = $13 - 1 | 0;
                    HEAP8[$23 | 0] = $13;
                    $0 = $10 + $28 | 0;
                    $25 = $1 + $24 | 0;
                    $14 = $25 >>> 0 < $1 >>> 0 ? $0 + 1 | 0 : $0;
                    $20 = $25 >>> 0 < $38 >>> 0;
                    $11 = $9 >>> 0 > $14 >>> 0;
                    $12 = ($9 | 0) == ($14 | 0) & $20 | $11;
                    if (($2 | 0) == ($8 | 0) & $5 >>> 0 >= $32 >>> 0 | $2 >>> 0 > $8 >>> 0) {
                     break block26
                    }
                    $0 = $9 + $15 | 0;
                    $21 = $21 + $38 | 0;
                    $15 = $21 >>> 0 < $38 >>> 0 ? $0 + 1 | 0 : $0;
                    $0 = $1;
                    $1 = $0 - $38 | 0;
                    $10 = $10 - (($0 >>> 0 < $38 >>> 0) + $9 | 0) | 0;
                    $0 = $5;
                    $4 = $2;
                    if (!($11 | $20 & ($9 | 0) == ($14 | 0))) {
                     continue
                    }
                    break;
                   };
                   break block26;
                  }
                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(17, 17, 1053740);
                  wasm2js_trap();
                 }
                 $5 = $0;
                 $2 = $4;
                }
                block27 : {
                 if (($2 | 0) == ($26 | 0) & $5 >>> 0 >= $35 >>> 0 | $2 >>> 0 > $26 >>> 0) {
                  break block27
                 }
                 if ($12) {
                  break block27
                 }
                 $0 = $2 + $9 | 0;
                 $10 = $5 + $38 | 0;
                 $4 = $10 >>> 0 < $38 >>> 0 ? $0 + 1 | 0 : $0;
                 $0 = $10 >>> 0 < $35 >>> 0;
                 if (($26 | 0) == ($4 | 0) & $0 | $4 >>> 0 < $26 >>> 0) {
                  break block28
                 }
                 $1 = $26 - (($5 >>> 0 > $35 >>> 0) + $2 | 0) | 0;
                 $0 = $4 - ($0 + $26 | 0) | 0;
                 if (($1 | 0) == ($0 | 0) & $10 - $35 >>> 0 <= $35 - $5 >>> 0 | $0 >>> 0 < $1 >>> 0) {
                  break block28
                 }
                }
                if (!$2 & $5 >>> 0 < 2) {
                 break block28
                }
                $0 = $7 - 1 | 0;
                $1 = $48 - 4 | 0;
                $0 = $1 >>> 0 < 4294967292 ? $0 + 1 | 0 : $0;
                if (($0 | 0) == ($2 | 0) & $1 >>> 0 < $5 >>> 0 | $0 >>> 0 < $2 >>> 0) {
                 break block28
                }
                $5 = $3 + 1 | 0;
                break block29;
               }
               $0 = $1;
               $4 = $10;
              }
              block32 : {
               if (($4 | 0) == ($29 | 0) & $0 >>> 0 >= $33 >>> 0 | $4 >>> 0 > $29 >>> 0 | $7) {
                $3 = __wasm_i64_mul($11, $13, 20, 0);
                $1 = i64toi32_i32$HIGH_BITS;
                if (($4 | 0) == ($1 | 0) & $0 >>> 0 >= $3 >>> 0 | $1 >>> 0 < $4 >>> 0) {
                 break block32
                }
                break block28;
               }
               $1 = $4 + $14 | 0;
               $7 = $0 + $26 | 0;
               $10 = $7 >>> 0 < $26 >>> 0 ? $1 + 1 | 0 : $1;
               $1 = $7 >>> 0 < $33 >>> 0;
               if (($29 | 0) == ($10 | 0) & $1 | $10 >>> 0 < $29 >>> 0) {
                break block28
               }
               $3 = $29 - (($0 >>> 0 > $33 >>> 0) + $4 | 0) | 0;
               $1 = $10 - ($1 + $29 | 0) | 0;
               if (($3 | 0) == ($1 | 0) & $33 - $0 >>> 0 >= $7 - $33 >>> 0 | $1 >>> 0 < $3 >>> 0) {
                break block28
               }
               $3 = __wasm_i64_mul($11, $13, 20, 0);
               $1 = i64toi32_i32$HIGH_BITS;
               if (($4 | 0) == ($1 | 0) & $0 >>> 0 < $3 >>> 0 | $1 >>> 0 > $4 >>> 0) {
                break block28
               }
              }
              $3 = __wasm_i64_mul($11, $13, -40, -1);
              $5 = $5 + $3 | 0;
              $1 = i64toi32_i32$HIGH_BITS + $2 | 0;
              $1 = $3 >>> 0 > $5 >>> 0 ? $1 + 1 | 0 : $1;
              if (($1 | 0) == ($4 | 0) & $0 >>> 0 > $5 >>> 0 | $1 >>> 0 < $4 >>> 0) {
               break block28
              }
              $5 = $9 + 2 | 0;
              break block29;
             }
             HEAP32[$6 + 96 >> 2] = $16;
             HEAP32[$6 + 100 >> 2] = $17;
             HEAP32[$6 + 256 >> 2] = $17 ? 2 : 1;
             memset($6 + 104 | 0, 0, 152);
             HEAP32[$6 + 264 >> 2] = 1;
             HEAP32[$6 + 268 >> 2] = 0;
             HEAP32[$6 + 424 >> 2] = 1;
             memset($6 + 272 | 0, 0, 152);
             HEAP32[$6 + 432 >> 2] = $41;
             HEAP32[$6 + 436 >> 2] = 0;
             HEAP32[$6 + 592 >> 2] = 1;
             memset($6 + 440 | 0, 0, 152);
             memset($6 + 600 | 0, 0, 156);
             HEAP32[$6 + 596 >> 2] = 1;
             HEAP32[$6 + 756 >> 2] = 1;
             $0 = $42 - 1 | 0;
             $1 = $45 - 1 | 0;
             $0 = ($1 | 0) != -1 ? $0 + 1 | 0 : $0;
             $0 = Math_clz32($0);
             $0 = ($0 | 0) == 32 ? Math_clz32($1) + 32 | 0 : $0;
             $1 = __wasm_i64_mul($40 - $0 | 0, ($40 >> 31) - ($0 >>> 0 > $40 >>> 0) | 0, 1292913986, 0);
             $0 = i64toi32_i32$HIGH_BITS + 19 | 0;
             $0 = $1 + 1142116480 >>> 0 < 1142116480 ? $0 + 1 | 0 : $0;
             $43 = $0 << 16 >> 16;
             block34 : {
              if (($40 | 0) >= 0) {
               _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($6 + 96 | 0, $40);
               _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($6 + 264 | 0, $40);
               _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($6 + 432 | 0, $40);
               break block34;
              }
              _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($6 + 596 | 0, 0 - $40 & 65535);
             }
             block36 : {
              if (($43 | 0) < 0) {
               $0 = 0 - $43 & 65535;
               _RNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy6dragon9mul_pow10($6 + 96 | 0, $0);
               _RNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy6dragon9mul_pow10($6 + 264 | 0, $0);
               _RNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy6dragon9mul_pow10($6 + 432 | 0, $0);
               break block36;
              }
              _RNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy6dragon9mul_pow10($6 + 596 | 0, $0 & 32767);
             }
             _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($6 + 1256 | 0, $6 + 96 | 0, 164);
             block75 : {
              block131 : {
               block97 : {
                block55 : {
                 block48 : {
                  $0 = HEAP32[$6 + 592 >> 2];
                  $1 = HEAP32[$6 + 1416 >> 2];
                  $2 = $0 >>> 0 > $1 >>> 0 ? $0 : $1;
                  if ($2 >>> 0 <= 40) {
                   block39 : {
                    if (!$2) {
                     $2 = 0;
                     break block39;
                    }
                    $7 = 0;
                    $13 = 0;
                    block42 : {
                     block41 : {
                      if (($2 | 0) != 1) {
                       $11 = $2 & 1;
                       $9 = $2 & 62;
                       $3 = $6 + 1256 | 0;
                       $12 = $6 + 432 | 0;
                       while (1) {
                        $10 = HEAP32[$12 >> 2];
                        $17 = $10 + HEAP32[$3 >> 2] | 0;
                        $5 = $17 + ($7 & 1) | 0;
                        HEAP32[$3 >> 2] = $5;
                        $4 = HEAP32[$12 + 4 >> 2];
                        $1 = $3 + 4 | 0;
                        $7 = $4 + HEAP32[$1 >> 2] | 0;
                        $5 = $7 + ($5 >>> 0 < $17 >>> 0 | $10 >>> 0 > $17 >>> 0) | 0;
                        HEAP32[$1 >> 2] = $5;
                        $7 = $5 >>> 0 < $7 >>> 0 | $4 >>> 0 > $7 >>> 0;
                        $12 = $12 + 8 | 0;
                        $3 = $3 + 8 | 0;
                        $13 = $13 + 2 | 0;
                        if (($9 | 0) != ($13 | 0)) {
                         continue
                        }
                        break;
                       };
                       if (!$11) {
                        break block41
                       }
                      }
                      $4 = $13 << 2;
                      $1 = $4 + ($6 + 1256 | 0) | 0;
                      $3 = $1;
                      $4 = HEAP32[$4 + ($6 + 432 | 0) >> 2];
                      $5 = $4 + HEAP32[$1 >> 2] | 0;
                      $1 = $5 + $7 | 0;
                      HEAP32[$3 >> 2] = $1;
                      if ($4 >>> 0 > $5 >>> 0) {
                       break block42
                      }
                      if ($1 >>> 0 < $5 >>> 0) {
                       break block42
                      }
                      break block39;
                     }
                     if (!$7) {
                      break block39
                     }
                    }
                    if (($2 | 0) == 40) {
                     break folding_inner3
                    }
                    HEAP32[($6 + 1256 | 0) + ($2 << 2) >> 2] = 1;
                    $2 = $2 + 1 | 0;
                   }
                   HEAP32[$6 + 1416 >> 2] = $2;
                   $22 = HEAP32[$6 + 756 >> 2];
                   $3 = $2 >>> 0 > $22 >>> 0 ? $2 : $22;
                   if ($3 >>> 0 >= 41) {
                    break folding_inner4
                   }
                   $3 = $3 << 2;
                   $4 = $6 + 1252 | 0;
                   block46 : {
                    while (1) {
                     $1 = 0;
                     if (!$3) {
                      break block46
                     }
                     $1 = $3 + $4 | 0;
                     $3 = $3 - 4 | 0;
                     $2 = HEAP32[$3 + ($6 + 596 | 0) >> 2];
                     $1 = HEAP32[$1 >> 2];
                     if (($2 | 0) == ($1 | 0)) {
                      continue
                     }
                     break;
                    };
                    $1 = ($1 >>> 0 < $2 >>> 0) - ($1 >>> 0 > $2 >>> 0) | 0;
                   }
                   block67 : {
                    if (($1 | 0) >= ($39 | 0)) {
                     $7 = HEAP32[$6 + 256 >> 2];
                     if ($7 >>> 0 >= 41) {
                      break block48
                     }
                     block50 : {
                      if (!$7) {
                       $7 = 0;
                       break block50;
                      }
                      $5 = $7 << 2;
                      $4 = $5 - 4 | 0;
                      $1 = ($4 >>> 2 | 0) + 1 | 0;
                      $9 = $1 & 3;
                      block53 : {
                       block52 : {
                        if ($4 >>> 0 < 12) {
                         $1 = 0;
                         $3 = $6 + 96 | 0;
                         break block52;
                        }
                        $12 = $1 & 2147483644;
                        $1 = 0;
                        $3 = $6 + 96 | 0;
                        while (1) {
                         $2 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                         $4 = i64toi32_i32$HIGH_BITS;
                         $10 = $4 + 1 | 0;
                         $11 = $4;
                         $4 = $1 + $2 | 0;
                         $10 = $1 >>> 0 > $4 >>> 0 ? $10 : $11;
                         HEAP32[$3 >> 2] = $4;
                         $1 = $3 + 4 | 0;
                         $2 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $10 | 0;
                         $4 = i64toi32_i32$HIGH_BITS;
                         HEAP32[$1 >> 2] = $2;
                         $1 = $3 + 8 | 0;
                         $4 = $2 >>> 0 < $10 >>> 0 ? $4 + 1 | 0 : $4;
                         $10 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $4 | 0;
                         $2 = i64toi32_i32$HIGH_BITS;
                         HEAP32[$1 >> 2] = $10;
                         $1 = $3 + 12 | 0;
                         $2 = $4 >>> 0 > $10 >>> 0 ? $2 + 1 | 0 : $2;
                         $4 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $2 | 0;
                         HEAP32[$1 >> 2] = $4;
                         $1 = i64toi32_i32$HIGH_BITS;
                         $1 = $2 >>> 0 > $4 >>> 0 ? $1 + 1 | 0 : $1;
                         $3 = $3 + 16 | 0;
                         $12 = $12 - 4 | 0;
                         if ($12) {
                          continue
                         }
                         break;
                        };
                        if (!$9) {
                         break block53
                        }
                       }
                       $12 = $9 << 2;
                       while (1) {
                        $2 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                        $4 = i64toi32_i32$HIGH_BITS;
                        $11 = $4 + 1 | 0;
                        $9 = $4;
                        $4 = $1 + $2 | 0;
                        $1 = $4 >>> 0 < $1 >>> 0 ? $11 : $9;
                        HEAP32[$3 >> 2] = $4;
                        $3 = $3 + 4 | 0;
                        $12 = $12 - 4 | 0;
                        if ($12) {
                         continue
                        }
                        break;
                       };
                      }
                      if (!$1) {
                       break block50
                      }
                      if (($7 | 0) == 40) {
                       break folding_inner3
                      }
                      HEAP32[$5 + ($6 + 96 | 0) >> 2] = $1;
                      $7 = $7 + 1 | 0;
                     }
                     HEAP32[$6 + 256 >> 2] = $7;
                     $11 = HEAP32[$6 + 424 >> 2];
                     if ($11 >>> 0 >= 41) {
                      break block55
                     }
                     $4 = 0;
                     $2 = 0;
                     block56 : {
                      if (!$11) {
                       break block56
                      }
                      $10 = $11 << 2;
                      $2 = $10 - 4 | 0;
                      $1 = ($2 >>> 2 | 0) + 1 | 0;
                      $13 = $1 & 3;
                      block59 : {
                       block58 : {
                        if ($2 >>> 0 < 12) {
                         $1 = 0;
                         $3 = $6 + 264 | 0;
                         break block58;
                        }
                        $12 = $1 & 2147483644;
                        $1 = 0;
                        $3 = $6 + 264 | 0;
                        while (1) {
                         $5 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                         $2 = i64toi32_i32$HIGH_BITS;
                         $17 = $2 + 1 | 0;
                         $9 = $2;
                         $2 = $1 + $5 | 0;
                         $9 = $1 >>> 0 > $2 >>> 0 ? $17 : $9;
                         HEAP32[$3 >> 2] = $2;
                         $1 = $3 + 4 | 0;
                         $5 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $9 | 0;
                         $2 = i64toi32_i32$HIGH_BITS;
                         HEAP32[$1 >> 2] = $5;
                         $1 = $3 + 8 | 0;
                         $2 = $5 >>> 0 < $9 >>> 0 ? $2 + 1 | 0 : $2;
                         $9 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $2 | 0;
                         $5 = i64toi32_i32$HIGH_BITS;
                         HEAP32[$1 >> 2] = $9;
                         $1 = $3 + 12 | 0;
                         $5 = $2 >>> 0 > $9 >>> 0 ? $5 + 1 | 0 : $5;
                         $2 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $5 | 0;
                         HEAP32[$1 >> 2] = $2;
                         $1 = i64toi32_i32$HIGH_BITS;
                         $1 = $2 >>> 0 < $5 >>> 0 ? $1 + 1 | 0 : $1;
                         $3 = $3 + 16 | 0;
                         $12 = $12 - 4 | 0;
                         if ($12) {
                          continue
                         }
                         break;
                        };
                        if (!$13) {
                         break block59
                        }
                       }
                       $12 = $13 << 2;
                       while (1) {
                        $5 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                        $2 = i64toi32_i32$HIGH_BITS;
                        $13 = $2 + 1 | 0;
                        $9 = $2;
                        $2 = $1 + $5 | 0;
                        $1 = $2 >>> 0 < $1 >>> 0 ? $13 : $9;
                        HEAP32[$3 >> 2] = $2;
                        $3 = $3 + 4 | 0;
                        $12 = $12 - 4 | 0;
                        if ($12) {
                         continue
                        }
                        break;
                       };
                      }
                      $2 = $11;
                      if (!$1) {
                       break block56
                      }
                      if (($11 | 0) == 40) {
                       break folding_inner3
                      }
                      HEAP32[$10 + ($6 + 264 | 0) >> 2] = $1;
                      $2 = $11 + 1 | 0;
                     }
                     HEAP32[$6 + 424 >> 2] = $2;
                     if ($0) {
                      $5 = $0 << 2;
                      $4 = $5 - 4 | 0;
                      $1 = ($4 >>> 2 | 0) + 1 | 0;
                      $9 = $1 & 3;
                      block65 : {
                       block64 : {
                        if ($4 >>> 0 < 12) {
                         $1 = 0;
                         $3 = $6 + 432 | 0;
                         break block64;
                        }
                        $12 = $1 & 2147483644;
                        $1 = 0;
                        $3 = $6 + 432 | 0;
                        while (1) {
                         $2 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                         $4 = i64toi32_i32$HIGH_BITS;
                         $10 = $4 + 1 | 0;
                         $11 = $4;
                         $4 = $1 + $2 | 0;
                         $10 = $1 >>> 0 > $4 >>> 0 ? $10 : $11;
                         HEAP32[$3 >> 2] = $4;
                         $1 = $3 + 4 | 0;
                         $2 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $10 | 0;
                         $4 = i64toi32_i32$HIGH_BITS;
                         HEAP32[$1 >> 2] = $2;
                         $1 = $3 + 8 | 0;
                         $4 = $2 >>> 0 < $10 >>> 0 ? $4 + 1 | 0 : $4;
                         $10 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $4 | 0;
                         $2 = i64toi32_i32$HIGH_BITS;
                         HEAP32[$1 >> 2] = $10;
                         $1 = $3 + 12 | 0;
                         $2 = $4 >>> 0 > $10 >>> 0 ? $2 + 1 | 0 : $2;
                         $4 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $2 | 0;
                         HEAP32[$1 >> 2] = $4;
                         $1 = i64toi32_i32$HIGH_BITS;
                         $1 = $2 >>> 0 > $4 >>> 0 ? $1 + 1 | 0 : $1;
                         $3 = $3 + 16 | 0;
                         $12 = $12 - 4 | 0;
                         if ($12) {
                          continue
                         }
                         break;
                        };
                        if (!$9) {
                         break block65
                        }
                       }
                       $12 = $9 << 2;
                       while (1) {
                        $2 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                        $4 = i64toi32_i32$HIGH_BITS;
                        $11 = $4 + 1 | 0;
                        $9 = $4;
                        $4 = $1 + $2 | 0;
                        $1 = $4 >>> 0 < $1 >>> 0 ? $11 : $9;
                        HEAP32[$3 >> 2] = $4;
                        $3 = $3 + 4 | 0;
                        $12 = $12 - 4 | 0;
                        if ($12) {
                         continue
                        }
                        break;
                       };
                      }
                      if (!$1) {
                       $4 = $0;
                       HEAP32[$6 + 592 >> 2] = $0;
                       break block67;
                      }
                      if (($0 | 0) == 40) {
                       break folding_inner3
                      }
                      HEAP32[$5 + ($6 + 432 | 0) >> 2] = $1;
                      $4 = $0 + 1 | 0;
                     }
                     HEAP32[$6 + 592 >> 2] = $4;
                     break block67;
                    }
                    $43 = $43 + 1 | 0;
                    $7 = HEAP32[$6 + 256 >> 2];
                    $4 = $0;
                   }
                   $5 = $6 + 760 | 0;
                   $3 = $6 + 596 | 0;
                   _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($5, $3, 164);
                   $42 = _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($5, 1);
                   $2 = $6 + 924 | 0;
                   _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($2, $3, 164);
                   $33 = _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($2, 2);
                   $1 = $6 + 1088 | 0;
                   _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($1, $3, 164);
                   block112 : {
                    block111 : {
                     $25 = _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($1, 3);
                     $41 = HEAP32[$25 + 160 >> 2];
                     $0 = $7 >>> 0 < $41 >>> 0 ? $41 : $7;
                     if ($0 >>> 0 <= 40) {
                      $23 = $3 - 4 | 0;
                      $24 = $6 + 1252 | 0;
                      $28 = $5 - 4 | 0;
                      $30 = $2 - 4 | 0;
                      $18 = $1 - 4 | 0;
                      $34 = HEAP32[$42 + 160 >> 2];
                      $37 = HEAP32[$33 + 160 >> 2];
                      $5 = 0;
                      while (1) {
                       $1 = $5;
                       $3 = $0 << 2;
                       block71 : {
                        block70 : {
                         while (1) {
                          if (!$3) {
                           break block70
                          }
                          $2 = $3 + $18 | 0;
                          $3 = $3 - 4 | 0;
                          $5 = HEAP32[$3 + ($6 + 96 | 0) >> 2];
                          $2 = HEAP32[$2 >> 2];
                          if (($5 | 0) == ($2 | 0)) {
                           continue
                          }
                          break;
                         };
                         $27 = 0;
                         if ($2 >>> 0 > $5 >>> 0) {
                          break block71
                         }
                        }
                        block72 : {
                         if (!$0) {
                          break block72
                         }
                         $7 = 1;
                         $13 = 0;
                         block74 : {
                          if (($0 | 0) != 1) {
                           $17 = $0 & 1;
                           $11 = $0 & 62;
                           $3 = $6 + 96 | 0;
                           $12 = $6 + 1088 | 0;
                           while (1) {
                            $9 = HEAP32[$3 >> 2];
                            $14 = $9 + (HEAP32[$12 >> 2] ^ -1) | 0;
                            $10 = $14 + ($7 & 1) | 0;
                            HEAP32[$3 >> 2] = $10;
                            $5 = $3 + 4 | 0;
                            $2 = HEAP32[$5 >> 2];
                            $7 = $2 + (HEAP32[$12 + 4 >> 2] ^ -1) | 0;
                            $10 = $7 + ($10 >>> 0 < $14 >>> 0 | $9 >>> 0 > $14 >>> 0) | 0;
                            HEAP32[$5 >> 2] = $10;
                            $7 = $2 >>> 0 > $7 >>> 0 | $7 >>> 0 > $10 >>> 0;
                            $12 = $12 + 8 | 0;
                            $3 = $3 + 8 | 0;
                            $13 = $13 + 2 | 0;
                            if (($11 | 0) != ($13 | 0)) {
                             continue
                            }
                            break;
                           };
                           if (!$17) {
                            break block74
                           }
                          }
                          $5 = $13 << 2;
                          $2 = $5 + ($6 + 96 | 0) | 0;
                          $3 = HEAP32[$2 >> 2];
                          $9 = $2;
                          $5 = $3 + (HEAP32[$5 + $25 >> 2] ^ -1) | 0;
                          $2 = $5 + $7 | 0;
                          HEAP32[$9 >> 2] = $2;
                          if ($3 >>> 0 > $5 >>> 0) {
                           break block72
                          }
                          if ($2 >>> 0 < $5 >>> 0) {
                           break block72
                          }
                          break block75;
                         }
                         if (!$7) {
                          break block75
                         }
                        }
                        HEAP32[$6 + 256 >> 2] = $0;
                        $7 = $0;
                        $27 = 8;
                       }
                       $0 = $7 >>> 0 < $37 >>> 0 ? $37 : $7;
                       if ($0 >>> 0 >= 41) {
                        break folding_inner6
                       }
                       $3 = $0 << 2;
                       block78 : {
                        block77 : {
                         while (1) {
                          if (!$3) {
                           break block77
                          }
                          $2 = $3 + $30 | 0;
                          $3 = $3 - 4 | 0;
                          $5 = HEAP32[$3 + ($6 + 96 | 0) >> 2];
                          $2 = HEAP32[$2 >> 2];
                          if (($5 | 0) == ($2 | 0)) {
                           continue
                          }
                          break;
                         };
                         if ($2 >>> 0 <= $5 >>> 0) {
                          break block77
                         }
                         $0 = $7;
                         break block78;
                        }
                        block79 : {
                         if (!$0) {
                          break block79
                         }
                         $7 = 1;
                         $13 = 0;
                         block81 : {
                          if (($0 | 0) != 1) {
                           $17 = $0 & 1;
                           $11 = $0 & 62;
                           $3 = $6 + 96 | 0;
                           $12 = $6 + 924 | 0;
                           while (1) {
                            $9 = HEAP32[$3 >> 2];
                            $14 = $9 + (HEAP32[$12 >> 2] ^ -1) | 0;
                            $10 = $14 + ($7 & 1) | 0;
                            HEAP32[$3 >> 2] = $10;
                            $5 = $3 + 4 | 0;
                            $2 = HEAP32[$5 >> 2];
                            $7 = $2 + (HEAP32[$12 + 4 >> 2] ^ -1) | 0;
                            $10 = $7 + ($10 >>> 0 < $14 >>> 0 | $9 >>> 0 > $14 >>> 0) | 0;
                            HEAP32[$5 >> 2] = $10;
                            $7 = $2 >>> 0 > $7 >>> 0 | $7 >>> 0 > $10 >>> 0;
                            $12 = $12 + 8 | 0;
                            $3 = $3 + 8 | 0;
                            $13 = $13 + 2 | 0;
                            if (($11 | 0) != ($13 | 0)) {
                             continue
                            }
                            break;
                           };
                           if (!$17) {
                            break block81
                           }
                          }
                          $5 = $13 << 2;
                          $2 = $5 + ($6 + 96 | 0) | 0;
                          $3 = HEAP32[$2 >> 2];
                          $9 = $2;
                          $5 = $3 + (HEAP32[$5 + $33 >> 2] ^ -1) | 0;
                          $2 = $5 + $7 | 0;
                          HEAP32[$9 >> 2] = $2;
                          if ($3 >>> 0 > $5 >>> 0) {
                           break block79
                          }
                          if ($2 >>> 0 < $5 >>> 0) {
                           break block79
                          }
                          break folding_inner5;
                         }
                         if (!$7) {
                          break folding_inner5
                         }
                        }
                        HEAP32[$6 + 256 >> 2] = $0;
                        $27 = $27 | 4;
                       }
                       $2 = $0 >>> 0 < $34 >>> 0 ? $34 : $0;
                       if ($2 >>> 0 >= 41) {
                        break folding_inner7
                       }
                       $3 = $2 << 2;
                       block85 : {
                        block84 : {
                         while (1) {
                          if (!$3) {
                           break block84
                          }
                          $5 = $3 + $28 | 0;
                          $3 = $3 - 4 | 0;
                          $10 = HEAP32[$3 + ($6 + 96 | 0) >> 2];
                          $5 = HEAP32[$5 >> 2];
                          if (($10 | 0) == ($5 | 0)) {
                           continue
                          }
                          break;
                         };
                         if ($5 >>> 0 <= $10 >>> 0) {
                          break block84
                         }
                         $2 = $0;
                         break block85;
                        }
                        block86 : {
                         if (!$2) {
                          break block86
                         }
                         $7 = 1;
                         $13 = 0;
                         block88 : {
                          if (($2 | 0) != 1) {
                           $17 = $2 & 1;
                           $11 = $2 & 62;
                           $3 = $6 + 96 | 0;
                           $12 = $6 + 760 | 0;
                           while (1) {
                            $9 = HEAP32[$3 >> 2];
                            $14 = $9 + (HEAP32[$12 >> 2] ^ -1) | 0;
                            $10 = $14 + ($7 & 1) | 0;
                            HEAP32[$3 >> 2] = $10;
                            $5 = $3 + 4 | 0;
                            $0 = HEAP32[$5 >> 2];
                            $7 = $0 + (HEAP32[$12 + 4 >> 2] ^ -1) | 0;
                            $10 = $7 + ($10 >>> 0 < $14 >>> 0 | $9 >>> 0 > $14 >>> 0) | 0;
                            HEAP32[$5 >> 2] = $10;
                            $7 = $0 >>> 0 > $7 >>> 0 | $7 >>> 0 > $10 >>> 0;
                            $12 = $12 + 8 | 0;
                            $3 = $3 + 8 | 0;
                            $13 = $13 + 2 | 0;
                            if (($11 | 0) != ($13 | 0)) {
                             continue
                            }
                            break;
                           };
                           if (!$17) {
                            break block88
                           }
                          }
                          $5 = $13 << 2;
                          $0 = $5 + ($6 + 96 | 0) | 0;
                          $3 = HEAP32[$0 >> 2];
                          $9 = $0;
                          $5 = $3 + (HEAP32[$5 + $42 >> 2] ^ -1) | 0;
                          $0 = $5 + $7 | 0;
                          HEAP32[$9 >> 2] = $0;
                          if ($3 >>> 0 > $5 >>> 0) {
                           break block86
                          }
                          if ($0 >>> 0 < $5 >>> 0) {
                           break block86
                          }
                          break folding_inner5;
                         }
                         if (!$7) {
                          break folding_inner5
                         }
                        }
                        HEAP32[$6 + 256 >> 2] = $2;
                        $27 = $27 + 2 | 0;
                       }
                       $0 = $2 >>> 0 < $22 >>> 0 ? $22 : $2;
                       if ($0 >>> 0 >= 41) {
                        break folding_inner6
                       }
                       $3 = $0 << 2;
                       block92 : {
                        block91 : {
                         while (1) {
                          if (!$3) {
                           break block91
                          }
                          $3 = $3 - 4 | 0;
                          $10 = HEAP32[$3 + ($6 + 96 | 0) >> 2];
                          $5 = HEAP32[($6 + 596 | 0) + $3 >> 2];
                          if (($10 | 0) == ($5 | 0)) {
                           continue
                          }
                          break;
                         };
                         if ($5 >>> 0 <= $10 >>> 0) {
                          break block91
                         }
                         $0 = $2;
                         break block92;
                        }
                        block93 : {
                         if (!$0) {
                          break block93
                         }
                         $7 = 1;
                         $13 = 0;
                         block95 : {
                          if (($0 | 0) != 1) {
                           $17 = $0 & 1;
                           $11 = $0 & 62;
                           $3 = $6 + 96 | 0;
                           $12 = $6 + 596 | 0;
                           while (1) {
                            $9 = HEAP32[$3 >> 2];
                            $14 = $9 + (HEAP32[$12 >> 2] ^ -1) | 0;
                            $10 = $14 + ($7 & 1) | 0;
                            HEAP32[$3 >> 2] = $10;
                            $5 = $3 + 4 | 0;
                            $2 = HEAP32[$5 >> 2];
                            $7 = $2 + (HEAP32[$12 + 4 >> 2] ^ -1) | 0;
                            $10 = $7 + ($10 >>> 0 < $14 >>> 0 | $9 >>> 0 > $14 >>> 0) | 0;
                            HEAP32[$5 >> 2] = $10;
                            $7 = $2 >>> 0 > $7 >>> 0 | $7 >>> 0 > $10 >>> 0;
                            $12 = $12 + 8 | 0;
                            $3 = $3 + 8 | 0;
                            $13 = $13 + 2 | 0;
                            if (($11 | 0) != ($13 | 0)) {
                             continue
                            }
                            break;
                           };
                           if (!$17) {
                            break block95
                           }
                          }
                          $5 = $13 << 2;
                          $2 = $5 + ($6 + 96 | 0) | 0;
                          $3 = HEAP32[$2 >> 2];
                          $9 = $2;
                          $5 = $3 + (HEAP32[$5 + ($6 + 596 | 0) >> 2] ^ -1) | 0;
                          $2 = $5 + $7 | 0;
                          HEAP32[$9 >> 2] = $2;
                          if ($3 >>> 0 > $5 >>> 0) {
                           break block93
                          }
                          if ($2 >>> 0 < $5 >>> 0) {
                           break block93
                          }
                          break folding_inner5;
                         }
                         if (!$7) {
                          break folding_inner5
                         }
                        }
                        HEAP32[$6 + 256 >> 2] = $0;
                        $27 = $27 + 1 | 0;
                       }
                       if (($1 | 0) == 17) {
                        break block97
                       }
                       HEAP8[($6 + 79 | 0) + $1 | 0] = $27 + 48;
                       $10 = HEAP32[$6 + 424 >> 2];
                       $3 = $0 >>> 0 < $10 >>> 0 ? $10 : $0;
                       if ($3 >>> 0 >= 41) {
                        break folding_inner4
                       }
                       $5 = $1 + 1 | 0;
                       $3 = $3 << 2;
                       block100 : {
                        while (1) {
                         $16 = 0;
                         if (!$3) {
                          break block100
                         }
                         $3 = $3 - 4 | 0;
                         $7 = HEAP32[$3 + ($6 + 96 | 0) >> 2];
                         $2 = HEAP32[($6 + 264 | 0) + $3 >> 2];
                         if (($7 | 0) == ($2 | 0)) {
                          continue
                         }
                         break;
                        };
                        $16 = ($2 >>> 0 < $7 >>> 0) - ($2 >>> 0 > $7 >>> 0) | 0;
                       }
                       _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($6 + 1256 | 0, $6 + 96 | 0, 164);
                       $2 = HEAP32[$6 + 1416 >> 2];
                       $2 = $2 >>> 0 < $4 >>> 0 ? $4 : $2;
                       if ($2 >>> 0 > 40) {
                        break folding_inner7
                       }
                       block103 : {
                        if (!$2) {
                         $2 = 0;
                         break block103;
                        }
                        $7 = 0;
                        $13 = 0;
                        block106 : {
                         block105 : {
                          if (($2 | 0) != 1) {
                           $15 = $2 & 1;
                           $14 = $2 & 62;
                           $3 = $6 + 1256 | 0;
                           $12 = $6 + 432 | 0;
                           while (1) {
                            $17 = HEAP32[$12 >> 2];
                            $32 = $17 + HEAP32[$3 >> 2] | 0;
                            $11 = $32 + ($7 & 1) | 0;
                            HEAP32[$3 >> 2] = $11;
                            $9 = HEAP32[$12 + 4 >> 2];
                            $7 = $3 + 4 | 0;
                            $21 = $9 + HEAP32[$7 >> 2] | 0;
                            $11 = $21 + ($11 >>> 0 < $32 >>> 0 | $17 >>> 0 > $32 >>> 0) | 0;
                            HEAP32[$7 >> 2] = $11;
                            $7 = $11 >>> 0 < $21 >>> 0 | $9 >>> 0 > $21 >>> 0;
                            $12 = $12 + 8 | 0;
                            $3 = $3 + 8 | 0;
                            $13 = $13 + 2 | 0;
                            if (($14 | 0) != ($13 | 0)) {
                             continue
                            }
                            break;
                           };
                           if (!$15) {
                            break block105
                           }
                          }
                          $9 = $13 << 2;
                          $3 = $9 + ($6 + 1256 | 0) | 0;
                          $11 = $3;
                          $9 = HEAP32[$9 + ($6 + 432 | 0) >> 2];
                          $13 = $9 + HEAP32[$3 >> 2] | 0;
                          $3 = $7 + $13 | 0;
                          HEAP32[$11 >> 2] = $3;
                          if ($13 >>> 0 < $9 >>> 0) {
                           break block106
                          }
                          if ($3 >>> 0 < $13 >>> 0) {
                           break block106
                          }
                          break block103;
                         }
                         if (!$7) {
                          break block103
                         }
                        }
                        if (($2 | 0) == 40) {
                         break folding_inner3
                        }
                        HEAP32[($6 + 1256 | 0) + ($2 << 2) >> 2] = 1;
                        $2 = $2 + 1 | 0;
                       }
                       HEAP32[$6 + 1416 >> 2] = $2;
                       $3 = $2 >>> 0 > $22 >>> 0 ? $2 : $22;
                       if ($3 >>> 0 >= 41) {
                        break folding_inner4
                       }
                       $3 = $3 << 2;
                       block110 : {
                        while (1) {
                         $2 = 0;
                         if (!$3) {
                          break block110
                         }
                         $7 = $3 + $24 | 0;
                         $2 = $3 + $23 | 0;
                         $3 = $3 - 4 | 0;
                         $9 = HEAP32[$2 >> 2];
                         $2 = HEAP32[$7 >> 2];
                         if (($9 | 0) == ($2 | 0)) {
                          continue
                         }
                         break;
                        };
                        $2 = ($2 >>> 0 < $9 >>> 0) - ($2 >>> 0 > $9 >>> 0) | 0;
                       }
                       if (($16 | 0) < ($39 | 0)) {
                        break block111
                       }
                       if (($2 | 0) < ($39 | 0)) {
                        break block112
                       }
                       $13 = 0;
                       $7 = 0;
                       block113 : {
                        if (!$0) {
                         break block113
                        }
                        $9 = $0 << 2;
                        $2 = $9 - 4 | 0;
                        $1 = ($2 >>> 2 | 0) + 1 | 0;
                        $17 = $1 & 3;
                        block116 : {
                         block115 : {
                          if ($2 >>> 0 < 12) {
                           $1 = 0;
                           $3 = $6 + 96 | 0;
                           break block115;
                          }
                          $12 = $1 & 2147483644;
                          $1 = 0;
                          $3 = $6 + 96 | 0;
                          while (1) {
                           $7 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                           $2 = i64toi32_i32$HIGH_BITS;
                           $16 = $2 + 1 | 0;
                           $11 = $2;
                           $2 = $1 + $7 | 0;
                           $11 = $1 >>> 0 > $2 >>> 0 ? $16 : $11;
                           HEAP32[$3 >> 2] = $2;
                           $1 = $3 + 4 | 0;
                           $7 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $11 | 0;
                           $2 = i64toi32_i32$HIGH_BITS;
                           HEAP32[$1 >> 2] = $7;
                           $1 = $3 + 8 | 0;
                           $2 = $7 >>> 0 < $11 >>> 0 ? $2 + 1 | 0 : $2;
                           $11 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $2 | 0;
                           $7 = i64toi32_i32$HIGH_BITS;
                           HEAP32[$1 >> 2] = $11;
                           $1 = $3 + 12 | 0;
                           $7 = $2 >>> 0 > $11 >>> 0 ? $7 + 1 | 0 : $7;
                           $2 = __wasm_i64_mul(HEAP32[$1 >> 2], 0, 10, 0) + $7 | 0;
                           HEAP32[$1 >> 2] = $2;
                           $1 = i64toi32_i32$HIGH_BITS;
                           $1 = $2 >>> 0 < $7 >>> 0 ? $1 + 1 | 0 : $1;
                           $3 = $3 + 16 | 0;
                           $12 = $12 - 4 | 0;
                           if ($12) {
                            continue
                           }
                           break;
                          };
                          if (!$17) {
                           break block116
                          }
                         }
                         $12 = $17 << 2;
                         while (1) {
                          $7 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                          $2 = i64toi32_i32$HIGH_BITS;
                          $17 = $2 + 1 | 0;
                          $11 = $2;
                          $2 = $1 + $7 | 0;
                          $1 = $2 >>> 0 < $1 >>> 0 ? $17 : $11;
                          HEAP32[$3 >> 2] = $2;
                          $3 = $3 + 4 | 0;
                          $12 = $12 - 4 | 0;
                          if ($12) {
                           continue
                          }
                          break;
                         };
                        }
                        $7 = $0;
                        if (!$1) {
                         break block113
                        }
                        if (($0 | 0) == 40) {
                         break folding_inner3
                        }
                        HEAP32[$9 + ($6 + 96 | 0) >> 2] = $1;
                        $7 = $0 + 1 | 0;
                       }
                       HEAP32[$6 + 256 >> 2] = $7;
                       block119 : {
                        if (!$10) {
                         break block119
                        }
                        $9 = $10 << 2;
                        $1 = $9 - 4 | 0;
                        $0 = ($1 >>> 2 | 0) + 1 | 0;
                        $11 = $0 & 3;
                        block122 : {
                         block121 : {
                          if ($1 >>> 0 < 12) {
                           $1 = 0;
                           $3 = $6 + 264 | 0;
                           break block121;
                          }
                          $12 = $0 & 2147483644;
                          $1 = 0;
                          $3 = $6 + 264 | 0;
                          while (1) {
                           $2 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                           $0 = i64toi32_i32$HIGH_BITS;
                           $17 = $0 + 1 | 0;
                           $13 = $0;
                           $0 = $1 + $2 | 0;
                           $13 = $0 >>> 0 < $1 >>> 0 ? $17 : $13;
                           HEAP32[$3 >> 2] = $0;
                           $0 = $3 + 4 | 0;
                           $2 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $13 | 0;
                           $1 = i64toi32_i32$HIGH_BITS;
                           HEAP32[$0 >> 2] = $2;
                           $0 = $3 + 8 | 0;
                           $1 = $2 >>> 0 < $13 >>> 0 ? $1 + 1 | 0 : $1;
                           $13 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $1 | 0;
                           $2 = i64toi32_i32$HIGH_BITS;
                           HEAP32[$0 >> 2] = $13;
                           $0 = $3 + 12 | 0;
                           $2 = $1 >>> 0 > $13 >>> 0 ? $2 + 1 | 0 : $2;
                           $1 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $2 | 0;
                           HEAP32[$0 >> 2] = $1;
                           $0 = i64toi32_i32$HIGH_BITS;
                           $1 = $1 >>> 0 < $2 >>> 0 ? $0 + 1 | 0 : $0;
                           $3 = $3 + 16 | 0;
                           $12 = $12 - 4 | 0;
                           if ($12) {
                            continue
                           }
                           break;
                          };
                          if (!$11) {
                           break block122
                          }
                         }
                         $12 = $11 << 2;
                         while (1) {
                          $2 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                          $0 = i64toi32_i32$HIGH_BITS;
                          $13 = $0 + 1 | 0;
                          $11 = $0;
                          $0 = $1 + $2 | 0;
                          $1 = $0 >>> 0 < $1 >>> 0 ? $13 : $11;
                          HEAP32[$3 >> 2] = $0;
                          $3 = $3 + 4 | 0;
                          $12 = $12 - 4 | 0;
                          if ($12) {
                           continue
                          }
                          break;
                         };
                        }
                        if (!$1) {
                         $13 = $10;
                         break block119;
                        }
                        if (($10 | 0) == 40) {
                         break folding_inner3
                        }
                        HEAP32[$9 + ($6 + 264 | 0) >> 2] = $1;
                        $13 = $10 + 1 | 0;
                       }
                       HEAP32[$6 + 424 >> 2] = $13;
                       block126 : {
                        if (!$4) {
                         $4 = 0;
                         break block126;
                        }
                        $10 = $4 << 2;
                        $1 = $10 - 4 | 0;
                        $0 = ($1 >>> 2 | 0) + 1 | 0;
                        $13 = $0 & 3;
                        block129 : {
                         block128 : {
                          if ($1 >>> 0 < 12) {
                           $1 = 0;
                           $3 = $6 + 432 | 0;
                           break block128;
                          }
                          $12 = $0 & 2147483644;
                          $1 = 0;
                          $3 = $6 + 432 | 0;
                          while (1) {
                           $2 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                           $0 = i64toi32_i32$HIGH_BITS;
                           $11 = $0 + 1 | 0;
                           $9 = $0;
                           $0 = $1 + $2 | 0;
                           $9 = $0 >>> 0 < $1 >>> 0 ? $11 : $9;
                           HEAP32[$3 >> 2] = $0;
                           $0 = $3 + 4 | 0;
                           $2 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $9 | 0;
                           $1 = i64toi32_i32$HIGH_BITS;
                           HEAP32[$0 >> 2] = $2;
                           $0 = $3 + 8 | 0;
                           $1 = $2 >>> 0 < $9 >>> 0 ? $1 + 1 | 0 : $1;
                           $9 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $1 | 0;
                           $2 = i64toi32_i32$HIGH_BITS;
                           HEAP32[$0 >> 2] = $9;
                           $0 = $3 + 12 | 0;
                           $2 = $1 >>> 0 > $9 >>> 0 ? $2 + 1 | 0 : $2;
                           $1 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $2 | 0;
                           HEAP32[$0 >> 2] = $1;
                           $0 = i64toi32_i32$HIGH_BITS;
                           $1 = $1 >>> 0 < $2 >>> 0 ? $0 + 1 | 0 : $0;
                           $3 = $3 + 16 | 0;
                           $12 = $12 - 4 | 0;
                           if ($12) {
                            continue
                           }
                           break;
                          };
                          if (!$13) {
                           break block129
                          }
                         }
                         $12 = $13 << 2;
                         while (1) {
                          $2 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, 10, 0);
                          $0 = i64toi32_i32$HIGH_BITS;
                          $11 = $0 + 1 | 0;
                          $9 = $0;
                          $0 = $1 + $2 | 0;
                          $1 = $0 >>> 0 < $1 >>> 0 ? $11 : $9;
                          HEAP32[$3 >> 2] = $0;
                          $3 = $3 + 4 | 0;
                          $12 = $12 - 4 | 0;
                          if ($12) {
                           continue
                          }
                          break;
                         };
                        }
                        if (!$1) {
                         break block126
                        }
                        if (($4 | 0) == 40) {
                         break folding_inner3
                        }
                        HEAP32[$10 + ($6 + 432 | 0) >> 2] = $1;
                        $4 = $4 + 1 | 0;
                       }
                       HEAP32[$6 + 592 >> 2] = $4;
                       $0 = $7 >>> 0 < $41 >>> 0 ? $41 : $7;
                       if ($0 >>> 0 < 41) {
                        continue
                       }
                       break;
                      };
                     }
                     break folding_inner6;
                    }
                    if (($2 | 0) >= ($39 | 0)) {
                     break block131
                    }
                    $4 = $6 + 96 | 0;
                    _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($4, 1);
                    $0 = HEAP32[$6 + 256 >> 2];
                    $3 = $0 >>> 0 < $22 >>> 0 ? $22 : $0;
                    if ($3 >>> 0 >= 41) {
                     break folding_inner4
                    }
                    $3 = $3 << 2;
                    $7 = $4 - 4 | 0;
                    $10 = $6 + 592 | 0;
                    while (1) {
                     if (!$3) {
                      break block112
                     }
                     $2 = $3 + $10 | 0;
                     $0 = $3 + $7 | 0;
                     $3 = $3 - 4 | 0;
                     $4 = HEAP32[$0 >> 2];
                     $0 = HEAP32[$2 >> 2];
                     if (($4 | 0) == ($0 | 0)) {
                      continue
                     }
                     break;
                    };
                    if ($0 >>> 0 > $4 >>> 0) {
                     break block131
                    }
                   }
                   $4 = ($6 + 79 | 0) + $5 | 0;
                   $3 = $5;
                   block133 : {
                    while (1) {
                     $0 = $3;
                     if (!$0) {
                      break block133
                     }
                     $3 = $0 - 1 | 0;
                     $2 = $6 + 79 | 0;
                     if (HEAPU8[$3 + $2 | 0] == 57) {
                      continue
                     }
                     break;
                    };
                    $4 = $2 + $3 | 0;
                    HEAP8[$4 | 0] = HEAPU8[$4 | 0] + 1;
                    memset($0 + $2 | 0, 48, $5 - $0 | 0);
                    break block131;
                   }
                   HEAP8[$6 + 79 | 0] = 49;
                   memset($6 + 80 | 0, 48, $1);
                   if ($1 >>> 0 <= 15) {
                    HEAP8[$4 | 0] = 48;
                    $43 = $43 + 1 | 0;
                    $5 = $1 + 2 | 0;
                    break block29;
                   }
                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, 17, 1053852);
                   wasm2js_trap();
                  }
                  break folding_inner7;
                 }
                 _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $7, 40, 1051764);
                 wasm2js_trap();
                }
                _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $11, 40, 1051764);
                wasm2js_trap();
               }
               _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(17, 17, 1053836);
               wasm2js_trap();
              }
              if ($1 >>> 0 <= 16) {
               break block29
              }
              _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $5, 17, 1053868);
              wasm2js_trap();
             }
             break folding_inner5;
            }
            _RNvNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec17digits_to_dec_str($6 + 8 | 0, $6 + 79 | 0, $5, $43, 0, $6 + 1256 | 0);
            $12 = HEAP32[$6 + 12 >> 2];
            $0 = HEAP32[$6 + 8 >> 2];
            break block135;
           }
           block137 : {
            $0 = $12 & 255;
            if ($0) {
             $12 = 1;
             $47 = $23 ? ($15 ? 1051612 : 1051613) : $15 ? 1051612 : 1;
             $31 = $13 >>> 31 | $23;
             HEAP16[$6 + 1256 >> 1] = 2;
             if (($0 | 0) == 2) {
              break block137
             }
             HEAP32[$6 + 1264 >> 2] = 3;
             HEAP32[$6 + 1260 >> 2] = 1051617;
             $0 = $6 + 1256 | 0;
             break block135;
            }
            HEAP32[$6 + 1264 >> 2] = 3;
            HEAP32[$6 + 1260 >> 2] = 1051614;
            HEAP16[$6 + 1256 >> 1] = 2;
            $47 = 1;
            $12 = 1;
            $0 = $6 + 1256 | 0;
            break block135;
           }
           HEAP32[$6 + 1264 >> 2] = 1;
           HEAP32[$6 + 1260 >> 2] = 1051620;
           $0 = $6 + 1256 | 0;
          }
          HEAP32[$6 + 1100 >> 2] = $12;
          HEAP32[$6 + 1096 >> 2] = $0;
          HEAP32[$6 + 1092 >> 2] = $31;
          HEAP32[$6 + 1088 >> 2] = $47;
          $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter19pad_formatted_parts($19, $6 + 1088 | 0);
          __stack_pointer = $6 + 1424 | 0;
          break __inlined_func$_RINvNtNtCsedhpoW0refZ_4core3fmt5float32float_to_decimal_common_shortestdEB6_$69;
         }
         $0 = __stack_pointer - 16 | 0;
         __stack_pointer = $0;
         HEAP32[$0 + 12 >> 2] = $6 + 1256;
         HEAP32[$0 + 8 >> 2] = $6 + 1088;
         $1 = __stack_pointer - 48 | 0;
         __stack_pointer = $1;
         HEAP32[$1 + 4 >> 2] = 1051596;
         HEAP32[$1 >> 2] = $0 + 8;
         HEAP32[$1 + 12 >> 2] = 1051596;
         HEAP32[$1 + 8 >> 2] = $0 + 12;
         HEAP32[$1 + 20 >> 2] = 2;
         HEAP32[$1 + 16 >> 2] = 1051900;
         HEAP32[$1 + 40 >> 2] = $1 + 8;
         HEAP32[$1 + 44 >> 2] = 10;
         HEAP32[$1 + 32 >> 2] = $1;
         HEAP32[$1 + 36 >> 2] = 10;
         HEAP32[$1 + 24 >> 2] = $1 + 16;
         HEAP32[$1 + 28 >> 2] = 7;
         _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049249, $1 + 24 | 0, 1051692);
         wasm2js_trap();
        }
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(40, 40, 1051764);
        wasm2js_trap();
       }
       _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, 40, 1051764);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051735, 26, 1051764);
      wasm2js_trap();
     }
     return $0 | 0;
    }
    __inlined_func$_RINvNtNtCsedhpoW0refZ_4core3fmt5float29float_to_decimal_common_exactdEB6_$70 : {
     $22 = ($2 | 0) != 0;
     $10 = $1;
     $29 = HEAPU16[$1 + 14 >> 1];
     $8 = __stack_pointer - 1904 | 0;
     __stack_pointer = $8;
     wasm2js_scratch_store_f64(+$49);
     $39 = wasm2js_scratch_load_i32(1) | 0;
     $4 = $39 & 1048575;
     $7 = wasm2js_scratch_load_i32(0) | 0;
     $3 = $39 >>> 20 & 2047;
     $0 = $3;
     $1 = $0 ? $7 : $7 << 1 & -2;
     $0 = $0 ? $4 | 1048576 : ($39 << 1 | $7 >>> 31) & 2097151;
     $5 = $1 & 1;
     $2 = 2;
     folding_inner40 : {
      folding_inner31 : {
       folding_inner22 : {
        block117 : {
         block7 : {
          block68 : {
           block510 : {
            block311 : {
             block12 : {
              block114 : {
               block415 : {
                block216 : {
                 $4 = !($4 | $7);
                 $7 = $4;
                 $9 = $4 ? 2 : 3;
                 $4 = $39 & 2146435072;
                 switch ((($4 | 0) == 2146435072 ? $7 : $4 ? 4 : $9) - 1 | 0) {
                 case 0:
                  break block114;
                 case 1:
                  break block216;
                 case 2:
                  break block311;
                 case 3:
                  break block415;
                 default:
                  break block12;
                 };
                }
                $2 = 4;
                break block12;
               }
               $4 = $0 << 1 | $1 >>> 31;
               $2 = !$1 & ($0 | 0) == 1048576;
               $1 = $2 ? 0 : $1 << 1;
               $0 = $2 ? 4194304 : $4;
               $23 = $3 + ($2 ? -1077 : -1076) | 0;
               break block510;
              }
              $2 = 3;
             }
             $1 = $39 >>> 31 | 0;
             break block68;
            }
            $23 = $3 - 1075 | 0;
           }
           $47 = $39 >>> 31 | 0;
           $2 = !$5;
           if ($2 >>> 0 <= 1) {
            break block7
           }
           $1 = $47;
          }
          block10 : {
           block9 : {
            $0 = $2 - 2 & 255;
            if ($0) {
             $2 = 1;
             $3 = $22 ? ($1 ? 1051612 : 1051613) : $1 ? 1051612 : 1;
             $4 = $39 >>> 31 | $22;
             if (($0 | 0) != 2) {
              break block9
             }
             HEAP16[$8 + 1740 >> 1] = 2;
             if ($29) {
              break block10
             }
             HEAP32[$8 + 1748 >> 2] = 1;
             HEAP32[$8 + 1744 >> 2] = 1051620;
             $0 = $8 + 1740 | 0;
             break block117;
            }
            HEAP32[$8 + 1748 >> 2] = 3;
            HEAP32[$8 + 1744 >> 2] = 1051614;
            HEAP16[$8 + 1740 >> 1] = 2;
            $3 = 1;
            $4 = 0;
            $2 = 1;
            $0 = $8 + 1740 | 0;
            break block117;
           }
           HEAP32[$8 + 1748 >> 2] = 3;
           HEAP32[$8 + 1744 >> 2] = 1051617;
           HEAP16[$8 + 1740 >> 1] = 2;
           $0 = $8 + 1740 | 0;
           break block117;
          }
          HEAP32[$8 + 1756 >> 2] = $29;
          HEAP16[$8 + 1752 >> 1] = 0;
          $2 = 2;
          HEAP32[$8 + 1748 >> 2] = 2;
          HEAP32[$8 + 1744 >> 2] = 1051621;
          $0 = $8 + 1740 | 0;
          break block117;
         }
         block2717 : {
          block2618 : {
           block2519 : {
            block2120 : {
             block2421 : {
              block2222 : {
               block1523 : {
                block1924 : {
                 block1725 : {
                  block14 : {
                   block1326 : {
                    $5 = Math_imul(($23 | 0) < 0 ? -12 : 5, $23);
                    if ($5 >>> 0 < 16064) {
                     if (!($0 | $1)) {
                      break block1326
                     }
                     $4 = Math_clz32($0);
                     $3 = ($4 | 0) == 32 ? Math_clz32($1) + 32 | 0 : $4;
                     $2 = $23 - $3 | 0;
                     $4 = (Math_imul($2, -80) + 79280 | 0) / 2126 | 0;
                     if ($4 >>> 0 > 80) {
                      break block14
                     }
                     $9 = $5 >>> 4 | 0;
                     $17 = $9 + 21 | 0;
                     $36 = ($29 << 16 >> 16 < 0 ? -32768 : 0 - $29 | 0) << 16 >> 16;
                     $7 = $8 + 16 | 0;
                     $5 = $4 << 4;
                     $4 = $5;
                     $11 = HEAP32[$4 + 1052320 >> 2];
                     $6 = HEAP32[$4 + 1052324 >> 2];
                     $19 = $0;
                     $4 = $3 & 31;
                     if (($3 & 63) >>> 0 >= 32) {
                      $0 = $1 << $4;
                      $4 = 0;
                     } else {
                      $0 = (1 << $4) - 1 & $1 >>> 32 - $4 | $19 << $4;
                      $4 = $1 << $4;
                     }
                     __multi3($7, $11, $6, $4, $0);
                     $13 = -64 - ($2 + HEAPU16[$5 + 1052328 >> 1] | 0) | 0;
                     $0 = $13 & 31;
                     if (($13 & 63) >>> 0 >= 32) {
                      $0 = 1 << $0;
                      $4 = 0;
                     } else {
                      $4 = 1 << $0;
                      $0 = $4 - 1 & 1 >>> 32 - $0;
                     }
                     $28 = $4;
                     $2 = HEAP32[$8 + 24 >> 2];
                     $4 = $2 + (HEAP32[$8 + 20 >> 2] >>> 31 | 0) | 0;
                     $7 = $0;
                     $0 = $0 - 1 | 0;
                     $15 = $28 - 1 | 0;
                     $14 = ($15 | 0) != -1 ? $0 + 1 | 0 : $0;
                     $0 = HEAP32[$8 + 28 >> 2];
                     $3 = $2 >>> 0 > $4 >>> 0 ? $0 + 1 | 0 : $0;
                     $0 = $14 & $3;
                     $30 = $0;
                     $31 = $4 & $15;
                     if (!($0 | $31)) {
                      break block1523
                     }
                     $5 = HEAPU16[$5 + 1052330 >> 1];
                     $2 = $13 & 63;
                     $24 = $2;
                     $0 = $4;
                     $4 = $13 & 31;
                     if ($2 >>> 0 >= 32) {
                      $4 = $3 >>> $4 | 0
                     } else {
                      $4 = ((1 << $4) - 1 & $3) << 32 - $4 | $0 >>> $4
                     }
                     if ($4 >>> 0 >= 1e4) {
                      if ($4 >>> 0 < 1e6) {
                       break block1725
                      }
                      if ($4 >>> 0 >= 1e8) {
                       $2 = $4 >>> 0 < 1e9;
                       $11 = $2 ? 8 : 9;
                       $2 = $2 ? 1e8 : 1e9;
                       break block1924;
                      }
                      $2 = $4 >>> 0 < 1e7;
                      $11 = $2 ? 6 : 7;
                      $2 = $2 ? 1e6 : 1e7;
                      break block1924;
                     }
                     if ($4 >>> 0 >= 100) {
                      $2 = $4 >>> 0 < 1e3;
                      $11 = $2 ? 2 : 3;
                      $2 = $2 ? 100 : 1e3;
                      break block1924;
                     }
                     $11 = $4 >>> 0 > 9;
                     $2 = $11 ? 10 : 1;
                     break block1924;
                    }
                    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051623, 37, 1051660);
                    wasm2js_trap();
                   }
                   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1053616, 28, 1053644);
                   wasm2js_trap();
                  }
                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, 81, 1053660);
                  wasm2js_trap();
                 }
                 $2 = $4 >>> 0 < 1e5;
                 $11 = $2 ? 4 : 5;
                 $2 = $2 ? 1e4 : 1e5;
                }
                $18 = ($11 - $5 << 16) + 65536 >> 16;
                if (($18 | 0) <= ($36 | 0)) {
                 break block2120
                }
                $13 = $13 & 65535;
                $0 = $18 - $36 | 0;
                $16 = $0 >>> 0 < $17 >>> 0 ? $0 << 16 >> 16 : $17;
                $5 = $16 - 1 | 0;
                $3 = 0;
                block2327 : {
                 while (1) {
                  $0 = ($4 >>> 0) / ($2 >>> 0) | 0;
                  HEAP8[($8 + 44 | 0) + $3 | 0] = $0 + 48;
                  $4 = $4 - Math_imul($0, $2) | 0;
                  if (($3 | 0) == ($5 | 0)) {
                   break block2222
                  }
                  if (($3 | 0) == ($11 | 0)) {
                   break block2327
                  }
                  $3 = $3 + 1 | 0;
                  $0 = $2 >>> 0 < 10;
                  $2 = ($2 >>> 0) / 10 | 0;
                  if (!$0) {
                   continue
                  }
                  break;
                 };
                 _RNvNtNtCsedhpoW0refZ_4core9panicking11panic_const23panic_const_div_by_zero(1053676);
                 wasm2js_trap();
                }
                $2 = $3 + 1 | 0;
                $9 = -20 - $9 | 0;
                $13 = $13 - 1 & 63;
                $5 = 1;
                $0 = 0;
                while (1) {
                 $3 = $0;
                 $4 = $13 & 31;
                 if ($13 >>> 0 >= 32) {
                  $0 = 0;
                  $4 = $3 >>> $4 | 0;
                 } else {
                  $0 = $3 >>> $4 | 0;
                  $4 = ((1 << $4) - 1 & $3) << 32 - $4 | $5 >>> $4;
                 }
                 if ($4 | $0) {
                  break block1523
                 }
                 if (($2 + $9 | 0) == 1) {
                  break block2421
                 }
                 $4 = __wasm_i64_mul($31, $30, 10, 0);
                 $11 = i64toi32_i32$HIGH_BITS;
                 $0 = $24 & 31;
                 $6 = ($8 + 44 | 0) + $2 | 0;
                 if ($24 >>> 0 >= 32) {
                  $0 = $11 >>> $0 | 0
                 } else {
                  $0 = ((1 << $0) - 1 & $11) << 32 - $0 | $4 >>> $0
                 }
                 HEAP8[$6 | 0] = $0 + 48;
                 $5 = __wasm_i64_mul($5, $3, 10, 0);
                 $0 = i64toi32_i32$HIGH_BITS;
                 $31 = $4 & $15;
                 $30 = $11 & $14;
                 $2 = $2 + 1 | 0;
                 if (($16 | 0) != ($2 | 0)) {
                  continue
                 }
                 break;
                };
                _RNvNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy5grisu16format_exact_opt14possibly_round($8 + 1068 | 0, $8 + 44 | 0, $17, $16, $18, $36, $31, $30, $28, $7, $5, $0);
                break block2519;
               }
               HEAP32[$8 + 1068 >> 2] = 0;
               break block2618;
              }
              $5 = $24 & 31;
              $9 = $8 + 1068 | 0;
              $11 = $8 + 44 | 0;
              if ($24 >>> 0 >= 32) {
               $0 = $4 << $5;
               $4 = 0;
              } else {
               $0 = (1 << $5) - 1 & $4 >>> 32 - $5;
               $4 = $4 << $5;
              }
              $4 = $4 + $31 | 0;
              $3 = $4;
              $0 = $0 + $30 | 0;
              $5 = $4 >>> 0 < $31 >>> 0 ? $0 + 1 | 0 : $0;
              $4 = $24 & 31;
              if ($24 >>> 0 >= 32) {
               $0 = $2 << $4;
               $4 = 0;
              } else {
               $0 = (1 << $4) - 1 & $2 >>> 32 - $4;
               $4 = $2 << $4;
              }
              _RNvNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy5grisu16format_exact_opt14possibly_round($9, $11, $17, $16, $18, $36, $3, $5, $4, $0, $28, $7);
              break block2519;
             }
             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($2, $17, 1053692);
             wasm2js_trap();
            }
            $4 = $24 & 31;
            $5 = $8 + 1068 | 0;
            $9 = $8 + 44 | 0;
            $3 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $3, 10);
            $11 = i64toi32_i32$HIGH_BITS;
            if ($24 >>> 0 >= 32) {
             $0 = $2 << $4;
             $4 = 0;
            } else {
             $0 = (1 << $4) - 1 & $2 >>> 32 - $4;
             $4 = $2 << $4;
            }
            _RNvNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy5grisu16format_exact_opt14possibly_round($5, $9, $17, 0, $18, $36, $3, $11, $4, $0, $28, $7);
           }
           $5 = HEAP32[$8 + 1068 >> 2];
           if (!$5) {
            break block2618
           }
           $13 = HEAPU16[$8 + 1076 >> 1];
           $16 = HEAP32[$8 + 1072 >> 2];
           break block2717;
          }
          HEAP32[$8 + 1080 >> 2] = $1;
          HEAP32[$8 + 1084 >> 2] = $19;
          HEAP32[$8 + 1240 >> 2] = $19 ? 2 : 1;
          memset($8 + 1088 | 0, 0, 152);
          memset($8 + 1252 | 0, 0, 156);
          HEAP32[$8 + 1248 >> 2] = 1;
          HEAP32[$8 + 1408 >> 2] = 1;
          $0 = $19 - 1 | 0;
          $1 = $1 - 1 | 0;
          $0 = ($1 | 0) != -1 ? $0 + 1 | 0 : $0;
          $0 = Math_clz32($0);
          $0 = ($0 | 0) == 32 ? Math_clz32($1) + 32 | 0 : $0;
          $1 = __wasm_i64_mul($23 - $0 | 0, ($23 >> 31) - ($0 >>> 0 > $23 >>> 0) | 0, 1292913986, 0);
          $0 = i64toi32_i32$HIGH_BITS + 19 | 0;
          $0 = $1 + 1142116480 >>> 0 < 1142116480 ? $0 + 1 | 0 : $0;
          $13 = $0 << 16 >> 16;
          block2934 : {
           if (($23 | 0) >= 0) {
            _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($8 + 1080 | 0, $23);
            break block2934;
           }
           _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($8 + 1248 | 0, 0 - $23 & 65535);
          }
          block31 : {
           if (($13 | 0) < 0) {
            _RNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy6dragon9mul_pow10($8 + 1080 | 0, 0 - $13 & 65535);
            break block31;
           }
           _RNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy6dragon9mul_pow10($8 + 1248 | 0, $0 & 32767);
          }
          $0 = $8 + 1740 | 0;
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $8 + 1248 | 0, 164);
          $19 = $0 - 8 | 0;
          $5 = $17;
          while (1) {
           $2 = HEAP32[$8 + 1900 >> 2];
           if ($2 >>> 0 >= 41) {
            break folding_inner7
           }
           block33 : {
            if (!$2) {
             break block33
            }
            $1 = $2 << 2;
            $0 = $1 - 4 | 0;
            block35 : {
             if (!$0) {
              $2 = $1 + ($8 + 1740 | 0) | 0;
              $1 = 0;
              break block35;
             }
             $0 = ($0 >>> 2 | 0) + 1 | 0;
             $7 = $0 & 1;
             $3 = $1 + $19 | 0;
             $4 = $0 & 2147483646;
             $1 = 0;
             while (1) {
              $2 = $3;
              $0 = $2 + 4 | 0;
              $9 = $0;
              $3 = HEAP32[$0 >> 2];
              $0 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($3, $1, 1e9);
              HEAP32[$9 >> 2] = $0;
              $0 = $3 - __wasm_i64_mul($0, i64toi32_i32$HIGH_BITS, 1e9, 0) | 0;
              $1 = HEAP32[$2 >> 2];
              $0 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($1, $0, 1e9);
              HEAP32[$2 >> 2] = $0;
              $1 = $1 - __wasm_i64_mul($0, i64toi32_i32$HIGH_BITS, 1e9, 0) | 0;
              $3 = $2 - 8 | 0;
              $4 = $4 - 2 | 0;
              if ($4) {
               continue
              }
              break;
             };
             if (!$7) {
              break block33
             }
            }
            $4 = $2 - 4 | 0;
            $0 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(HEAP32[$4 >> 2], $1, 1e9);
            HEAP32[$4 >> 2] = $0;
           }
           $5 = $5 - 9 | 0;
           if ($5 >>> 0 > 9) {
            continue
           }
           break;
          };
          block10035 : {
           block61 : {
            block99 : {
             block7836 : {
              $19 = HEAP32[($5 << 2) + 1053884 >> 2] << 1;
              if ($19) {
               $2 = HEAP32[$8 + 1900 >> 2];
               if ($2 >>> 0 >= 41) {
                break folding_inner7
               }
               if ($2) {
                $1 = $2 << 2;
                $0 = $1 - 4 | 0;
                block4240 : {
                 block4141 : {
                  if (!$0) {
                   $2 = $1 + ($8 + 1740 | 0) | 0;
                   $5 = 0;
                   break block4141;
                  }
                  $0 = ($0 >>> 2 | 0) + 1 | 0;
                  $7 = $0 & 1;
                  $3 = $0 & 2147483646;
                  $4 = ($1 + $8 | 0) + 1732 | 0;
                  $5 = 0;
                  while (1) {
                   $2 = $4;
                   $0 = $2 + 4 | 0;
                   $4 = $0;
                   $1 = HEAP32[$0 >> 2];
                   $0 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($1, $5, $19);
                   HEAP32[$4 >> 2] = $0;
                   $0 = $1 - __wasm_i64_mul($0, i64toi32_i32$HIGH_BITS, $19, 0) | 0;
                   $1 = HEAP32[$2 >> 2];
                   $0 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($1, $0, $19);
                   HEAP32[$2 >> 2] = $0;
                   $5 = $1 - __wasm_i64_mul($0, i64toi32_i32$HIGH_BITS, $19, 0) | 0;
                   $4 = $2 - 8 | 0;
                   $3 = $3 - 2 | 0;
                   if ($3) {
                    continue
                   }
                   break;
                  };
                  if (!$7) {
                   break block4240
                  }
                 }
                 $1 = $2 - 4 | 0;
                 $0 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(HEAP32[$1 >> 2], $5, $19);
                 HEAP32[$1 >> 2] = $0;
                }
                $0 = HEAP32[$8 + 1900 >> 2];
               } else {
                $0 = 0
               }
               $4 = HEAP32[$8 + 1240 >> 2];
               $0 = $0 >>> 0 < $4 >>> 0 ? $4 : $0;
               if ($0 >>> 0 > 40) {
                break folding_inner6
               }
               block45 : {
                if (!$0) {
                 $0 = 0;
                 break block45;
                }
                $5 = 0;
                block4843 : {
                 block47 : {
                  if (($0 | 0) != 1) {
                   $11 = $0 & 1;
                   $9 = $0 & 62;
                   $2 = $8 + 1740 | 0;
                   $3 = $8 + 1080 | 0;
                   while (1) {
                    $19 = HEAP32[$3 >> 2];
                    $15 = $19 + HEAP32[$2 >> 2] | 0;
                    $7 = $15 + ($5 & 1) | 0;
                    HEAP32[$2 >> 2] = $7;
                    $5 = HEAP32[$3 + 4 >> 2];
                    $1 = $2 + 4 | 0;
                    $14 = $5 + HEAP32[$1 >> 2] | 0;
                    $7 = $14 + ($15 >>> 0 < $19 >>> 0 | $7 >>> 0 < $15 >>> 0) | 0;
                    HEAP32[$1 >> 2] = $7;
                    $5 = $7 >>> 0 < $14 >>> 0 | $5 >>> 0 > $14 >>> 0;
                    $3 = $3 + 8 | 0;
                    $2 = $2 + 8 | 0;
                    $20 = $20 + 2 | 0;
                    if (($9 | 0) != ($20 | 0)) {
                     continue
                    }
                    break;
                   };
                   if (!$11) {
                    break block47
                   }
                  }
                  $2 = $20 << 2;
                  $1 = $2 + ($8 + 1740 | 0) | 0;
                  $7 = $1;
                  $2 = HEAP32[$2 + ($8 + 1080 | 0) >> 2];
                  $3 = $2 + HEAP32[$1 >> 2] | 0;
                  $1 = $5 + $3 | 0;
                  HEAP32[$7 >> 2] = $1;
                  if ($2 >>> 0 > $3 >>> 0) {
                   break block4843
                  }
                  if ($1 >>> 0 < $3 >>> 0) {
                   break block4843
                  }
                  break block45;
                 }
                 if (!$5) {
                  break block45
                 }
                }
                if (($0 | 0) == 40) {
                 break folding_inner22
                }
                HEAP32[($8 + 1740 | 0) + ($0 << 2) >> 2] = 1;
                $0 = $0 + 1 | 0;
               }
               HEAP32[$8 + 1900 >> 2] = $0;
               $9 = HEAP32[$8 + 1408 >> 2];
               $2 = $0 >>> 0 < $9 >>> 0 ? $9 : $0;
               if ($2 >>> 0 >= 41) {
                break folding_inner7
               }
               $2 = $2 << 2;
               $5 = $8 + 1736 | 0;
               block5345 : {
                block51 : {
                 while (1) {
                  if (!$2) {
                   break block51
                  }
                  $1 = HEAP32[$2 + $5 >> 2];
                  $2 = $2 - 4 | 0;
                  $0 = HEAP32[$2 + ($8 + 1248 | 0) >> 2];
                  if (($1 | 0) == ($0 | 0)) {
                   continue
                  }
                  break;
                 };
                 if ($0 >>> 0 <= $1 >>> 0) {
                  break block51
                 }
                 if (!$4) {
                  $4 = 0;
                  HEAP32[$8 + 1240 >> 2] = 0;
                  break block5345;
                 }
                 $7 = $4 << 2;
                 $1 = $7 - 4 | 0;
                 $0 = ($1 >>> 2 | 0) + 1 | 0;
                 $11 = $0 & 3;
                 block5647 : {
                  block5548 : {
                   if ($1 >>> 0 < 12) {
                    $1 = 0;
                    $2 = $8 + 1080 | 0;
                    break block5548;
                   }
                   $3 = $0 & 2147483644;
                   $1 = 0;
                   $2 = $8 + 1080 | 0;
                   while (1) {
                    $5 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, 10, 0);
                    $0 = i64toi32_i32$HIGH_BITS;
                    $16 = $0 + 1 | 0;
                    $6 = $0;
                    $0 = $1 + $5 | 0;
                    $19 = $1 >>> 0 > $0 >>> 0 ? $16 : $6;
                    HEAP32[$2 >> 2] = $0;
                    $0 = $2 + 4 | 0;
                    $5 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $19 | 0;
                    $1 = i64toi32_i32$HIGH_BITS;
                    HEAP32[$0 >> 2] = $5;
                    $0 = $2 + 8 | 0;
                    $1 = $5 >>> 0 < $19 >>> 0 ? $1 + 1 | 0 : $1;
                    $19 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $1 | 0;
                    $5 = i64toi32_i32$HIGH_BITS;
                    HEAP32[$0 >> 2] = $19;
                    $0 = $2 + 12 | 0;
                    $5 = $1 >>> 0 > $19 >>> 0 ? $5 + 1 | 0 : $5;
                    $1 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $5 | 0;
                    HEAP32[$0 >> 2] = $1;
                    $0 = i64toi32_i32$HIGH_BITS;
                    $1 = $1 >>> 0 < $5 >>> 0 ? $0 + 1 | 0 : $0;
                    $2 = $2 + 16 | 0;
                    $3 = $3 - 4 | 0;
                    if ($3) {
                     continue
                    }
                    break;
                   };
                   if (!$11) {
                    break block5647
                   }
                  }
                  $3 = $11 << 2;
                  while (1) {
                   $5 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, 10, 0);
                   $0 = i64toi32_i32$HIGH_BITS;
                   $6 = $0 + 1 | 0;
                   $11 = $0;
                   $0 = $1 + $5 | 0;
                   $1 = $1 >>> 0 > $0 >>> 0 ? $6 : $11;
                   HEAP32[$2 >> 2] = $0;
                   $2 = $2 + 4 | 0;
                   $3 = $3 - 4 | 0;
                   if ($3) {
                    continue
                   }
                   break;
                  };
                 }
                 if ($1) {
                  if (($4 | 0) == 40) {
                   break folding_inner22
                  }
                  HEAP32[$7 + ($8 + 1080 | 0) >> 2] = $1;
                  $4 = $4 + 1 | 0;
                 }
                 HEAP32[$8 + 1240 >> 2] = $4;
                 break block5345;
                }
                $13 = $13 + 1 | 0;
               }
               $7 = 0;
               $11 = 1;
               block60 : {
                $0 = $13 << 16 >> 16;
                if (($36 | 0) <= ($0 | 0)) {
                 $16 = $0 - $36 >>> 0 < $17 >>> 0 ? $13 - $36 << 16 >> 16 : $17;
                 if ($16) {
                  break block60
                 }
                }
                $16 = 0;
                break block61;
               }
               $2 = $8 + 1412 | 0;
               $5 = $8 + 1248 | 0;
               _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($2, $5, 164);
               $41 = _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($2, 1);
               $1 = $8 + 1576 | 0;
               _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($1, $5, 164);
               $42 = _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($1, 2);
               $0 = $8 + 1740 | 0;
               _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $5, 164);
               $23 = $5 - 4 | 0;
               $24 = $2 - 4 | 0;
               $28 = $1 - 4 | 0;
               $30 = $0 - 4 | 0;
               $33 = _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($0, 3);
               $34 = HEAP32[$41 + 160 >> 2];
               $37 = HEAP32[$42 + 160 >> 2];
               $32 = HEAP32[$33 + 160 >> 2];
               $11 = 0;
               block63 : {
                block9251 : {
                 while (1) {
                  $19 = $11;
                  if ($4 >>> 0 >= 41) {
                   break folding_inner31
                  }
                  $11 = $11 + 1 | 0;
                  $1 = $4 << 2;
                  $2 = 0;
                  while (1) {
                   if (($1 | 0) == ($2 | 0)) {
                    break block63
                   }
                   $0 = ($8 + 1080 | 0) + $2 | 0;
                   $2 = $2 + 4 | 0;
                   if (!HEAP32[$0 >> 2]) {
                    continue
                   }
                   break;
                  };
                  $0 = $4 >>> 0 < $32 >>> 0 ? $32 : $4;
                  if ($0 >>> 0 >= 41) {
                   break folding_inner6
                  }
                  $2 = $0 << 2;
                  block66 : {
                   block6554 : {
                    while (1) {
                     if (!$2) {
                      break block6554
                     }
                     $1 = $2 + $30 | 0;
                     $2 = $2 - 4 | 0;
                     $5 = HEAP32[$2 + ($8 + 1080 | 0) >> 2];
                     $1 = HEAP32[$1 >> 2];
                     if (($5 | 0) == ($1 | 0)) {
                      continue
                     }
                     break;
                    };
                    $31 = 0;
                    if ($1 >>> 0 > $5 >>> 0) {
                     break block66
                    }
                   }
                   $5 = 1;
                   $20 = 0;
                   block69 : {
                    block6856 : {
                     if (($0 | 0) != 1) {
                      $18 = $0 & 1;
                      $15 = $0 & 62;
                      $2 = $8 + 1080 | 0;
                      $3 = $8 + 1740 | 0;
                      while (1) {
                       $14 = HEAP32[$2 >> 2];
                       $21 = $14 + (HEAP32[$3 >> 2] ^ -1) | 0;
                       $5 = $21 + ($5 & 1) | 0;
                       HEAP32[$2 >> 2] = $5;
                       $4 = $2 + 4 | 0;
                       $1 = HEAP32[$4 >> 2];
                       $25 = $1 + (HEAP32[$3 + 4 >> 2] ^ -1) | 0;
                       $5 = $25 + ($5 >>> 0 < $21 >>> 0 | $14 >>> 0 > $21 >>> 0) | 0;
                       HEAP32[$4 >> 2] = $5;
                       $5 = $5 >>> 0 < $25 >>> 0 | $1 >>> 0 > $25 >>> 0;
                       $3 = $3 + 8 | 0;
                       $2 = $2 + 8 | 0;
                       $20 = $20 + 2 | 0;
                       if (($15 | 0) != ($20 | 0)) {
                        continue
                       }
                       break;
                      };
                      if (!$18) {
                       break block6856
                      }
                     }
                     $4 = $20 << 2;
                     $1 = $4 + ($8 + 1080 | 0) | 0;
                     $2 = HEAP32[$1 >> 2];
                     $3 = $1;
                     $4 = $2 + (HEAP32[$4 + $33 >> 2] ^ -1) | 0;
                     $1 = $4 + $5 | 0;
                     HEAP32[$3 >> 2] = $1;
                     if ($2 >>> 0 > $4 >>> 0) {
                      break block69
                     }
                     if ($1 >>> 0 < $4 >>> 0) {
                      break block69
                     }
                     break folding_inner40;
                    }
                    if (!$5) {
                     break folding_inner40
                    }
                   }
                   HEAP32[$8 + 1240 >> 2] = $0;
                   $4 = $0;
                   $31 = 8;
                  }
                  $0 = $4 >>> 0 < $37 >>> 0 ? $37 : $4;
                  if ($0 >>> 0 >= 41) {
                   break folding_inner6
                  }
                  $2 = $0 << 2;
                  block73 : {
                   block7258 : {
                    while (1) {
                     if (!$2) {
                      break block7258
                     }
                     $1 = $2 + $28 | 0;
                     $2 = $2 - 4 | 0;
                     $5 = HEAP32[$2 + ($8 + 1080 | 0) >> 2];
                     $1 = HEAP32[$1 >> 2];
                     if (($5 | 0) == ($1 | 0)) {
                      continue
                     }
                     break;
                    };
                    if ($1 >>> 0 <= $5 >>> 0) {
                     break block7258
                    }
                    $0 = $4;
                    break block73;
                   }
                   block7460 : {
                    if (!$0) {
                     break block7460
                    }
                    $5 = 1;
                    $20 = 0;
                    block76 : {
                     if (($0 | 0) != 1) {
                      $18 = $0 & 1;
                      $15 = $0 & 62;
                      $2 = $8 + 1080 | 0;
                      $3 = $8 + 1576 | 0;
                      while (1) {
                       $14 = HEAP32[$2 >> 2];
                       $21 = $14 + (HEAP32[$3 >> 2] ^ -1) | 0;
                       $5 = $21 + ($5 & 1) | 0;
                       HEAP32[$2 >> 2] = $5;
                       $4 = $2 + 4 | 0;
                       $1 = HEAP32[$4 >> 2];
                       $25 = $1 + (HEAP32[$3 + 4 >> 2] ^ -1) | 0;
                       $5 = $25 + ($5 >>> 0 < $21 >>> 0 | $14 >>> 0 > $21 >>> 0) | 0;
                       HEAP32[$4 >> 2] = $5;
                       $5 = $5 >>> 0 < $25 >>> 0 | $1 >>> 0 > $25 >>> 0;
                       $3 = $3 + 8 | 0;
                       $2 = $2 + 8 | 0;
                       $20 = $20 + 2 | 0;
                       if (($15 | 0) != ($20 | 0)) {
                        continue
                       }
                       break;
                      };
                      if (!$18) {
                       break block76
                      }
                     }
                     $4 = $20 << 2;
                     $1 = $4 + ($8 + 1080 | 0) | 0;
                     $2 = HEAP32[$1 >> 2];
                     $3 = $1;
                     $4 = $2 + (HEAP32[$4 + $42 >> 2] ^ -1) | 0;
                     $1 = $4 + $5 | 0;
                     HEAP32[$3 >> 2] = $1;
                     if ($2 >>> 0 > $4 >>> 0) {
                      break block7460
                     }
                     if ($1 >>> 0 < $4 >>> 0) {
                      break block7460
                     }
                     break folding_inner40;
                    }
                    if (!$5) {
                     break folding_inner40
                    }
                   }
                   HEAP32[$8 + 1240 >> 2] = $0;
                   $31 = $31 | 4;
                  }
                  $1 = $0 >>> 0 < $34 >>> 0 ? $34 : $0;
                  if ($1 >>> 0 >= 41) {
                   break block7836
                  }
                  $2 = $1 << 2;
                  block80 : {
                   block7962 : {
                    while (1) {
                     if (!$2) {
                      break block7962
                     }
                     $4 = $2 + $24 | 0;
                     $2 = $2 - 4 | 0;
                     $5 = HEAP32[$2 + ($8 + 1080 | 0) >> 2];
                     $4 = HEAP32[$4 >> 2];
                     if (($5 | 0) == ($4 | 0)) {
                      continue
                     }
                     break;
                    };
                    if ($4 >>> 0 <= $5 >>> 0) {
                     break block7962
                    }
                    $1 = $0;
                    break block80;
                   }
                   block8164 : {
                    if (!$1) {
                     break block8164
                    }
                    $5 = 1;
                    $20 = 0;
                    block83 : {
                     if (($1 | 0) != 1) {
                      $18 = $1 & 1;
                      $15 = $1 & 62;
                      $2 = $8 + 1080 | 0;
                      $3 = $8 + 1412 | 0;
                      while (1) {
                       $14 = HEAP32[$2 >> 2];
                       $21 = $14 + (HEAP32[$3 >> 2] ^ -1) | 0;
                       $5 = $21 + ($5 & 1) | 0;
                       HEAP32[$2 >> 2] = $5;
                       $4 = $2 + 4 | 0;
                       $0 = HEAP32[$4 >> 2];
                       $25 = $0 + (HEAP32[$3 + 4 >> 2] ^ -1) | 0;
                       $5 = $25 + ($5 >>> 0 < $21 >>> 0 | $14 >>> 0 > $21 >>> 0) | 0;
                       HEAP32[$4 >> 2] = $5;
                       $5 = $5 >>> 0 < $25 >>> 0 | $0 >>> 0 > $25 >>> 0;
                       $3 = $3 + 8 | 0;
                       $2 = $2 + 8 | 0;
                       $20 = $20 + 2 | 0;
                       if (($15 | 0) != ($20 | 0)) {
                        continue
                       }
                       break;
                      };
                      if (!$18) {
                       break block83
                      }
                     }
                     $4 = $20 << 2;
                     $0 = $4 + ($8 + 1080 | 0) | 0;
                     $2 = HEAP32[$0 >> 2];
                     $3 = $0;
                     $4 = $2 + (HEAP32[$4 + $41 >> 2] ^ -1) | 0;
                     $0 = $4 + $5 | 0;
                     HEAP32[$3 >> 2] = $0;
                     if ($2 >>> 0 > $4 >>> 0) {
                      break block8164
                     }
                     if ($0 >>> 0 < $4 >>> 0) {
                      break block8164
                     }
                     break folding_inner40;
                    }
                    if (!$5) {
                     break folding_inner40
                    }
                   }
                   HEAP32[$8 + 1240 >> 2] = $1;
                   $31 = $31 + 2 | 0;
                  }
                  $4 = $1 >>> 0 < $9 >>> 0 ? $9 : $1;
                  if ($4 >>> 0 >= 41) {
                   break folding_inner31
                  }
                  $2 = $4 << 2;
                  block87 : {
                   block8666 : {
                    while (1) {
                     if (!$2) {
                      break block8666
                     }
                     $0 = $2 + $23 | 0;
                     $2 = $2 - 4 | 0;
                     $5 = HEAP32[$2 + ($8 + 1080 | 0) >> 2];
                     $0 = HEAP32[$0 >> 2];
                     if (($5 | 0) == ($0 | 0)) {
                      continue
                     }
                     break;
                    };
                    if ($0 >>> 0 <= $5 >>> 0) {
                     break block8666
                    }
                    $4 = $1;
                    break block87;
                   }
                   block8868 : {
                    if (!$4) {
                     break block8868
                    }
                    $5 = 1;
                    $20 = 0;
                    block90 : {
                     if (($4 | 0) != 1) {
                      $18 = $4 & 1;
                      $15 = $4 & 62;
                      $2 = $8 + 1080 | 0;
                      $3 = $8 + 1248 | 0;
                      while (1) {
                       $14 = HEAP32[$2 >> 2];
                       $21 = $14 + (HEAP32[$3 >> 2] ^ -1) | 0;
                       $5 = $21 + ($5 & 1) | 0;
                       HEAP32[$2 >> 2] = $5;
                       $1 = $2 + 4 | 0;
                       $0 = HEAP32[$1 >> 2];
                       $25 = $0 + (HEAP32[$3 + 4 >> 2] ^ -1) | 0;
                       $5 = $25 + ($5 >>> 0 < $21 >>> 0 | $14 >>> 0 > $21 >>> 0) | 0;
                       HEAP32[$1 >> 2] = $5;
                       $5 = $5 >>> 0 < $25 >>> 0 | $0 >>> 0 > $25 >>> 0;
                       $3 = $3 + 8 | 0;
                       $2 = $2 + 8 | 0;
                       $20 = $20 + 2 | 0;
                       if (($15 | 0) != ($20 | 0)) {
                        continue
                       }
                       break;
                      };
                      if (!$18) {
                       break block90
                      }
                     }
                     $1 = $20 << 2;
                     $0 = $1 + ($8 + 1080 | 0) | 0;
                     $2 = HEAP32[$0 >> 2];
                     $3 = $0;
                     $1 = $2 + (HEAP32[$1 + ($8 + 1248 | 0) >> 2] ^ -1) | 0;
                     $0 = $1 + $5 | 0;
                     HEAP32[$3 >> 2] = $0;
                     if ($1 >>> 0 < $2 >>> 0) {
                      break block8868
                     }
                     if ($0 >>> 0 < $1 >>> 0) {
                      break block8868
                     }
                     break folding_inner40;
                    }
                    if (!$5) {
                     break folding_inner40
                    }
                   }
                   HEAP32[$8 + 1240 >> 2] = $4;
                   $31 = $31 + 1 | 0;
                  }
                  if (($17 | 0) == ($19 | 0)) {
                   break block9251
                  }
                  HEAP8[($8 + 44 | 0) + $19 | 0] = $31 + 48;
                  block94 : {
                   if (!$4) {
                    $4 = 0;
                    break block94;
                   }
                   $19 = $4 << 2;
                   $1 = $19 - 4 | 0;
                   $0 = ($1 >>> 2 | 0) + 1 | 0;
                   $15 = $0 & 3;
                   block9770 : {
                    block96 : {
                     if ($1 >>> 0 < 12) {
                      $1 = 0;
                      $2 = $8 + 1080 | 0;
                      break block96;
                     }
                     $3 = $0 & 2147483644;
                     $1 = 0;
                     $2 = $8 + 1080 | 0;
                     while (1) {
                      $5 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, 10, 0);
                      $0 = i64toi32_i32$HIGH_BITS;
                      $18 = $0 + 1 | 0;
                      $6 = $0;
                      $0 = $1 + $5 | 0;
                      $14 = $1 >>> 0 > $0 >>> 0 ? $18 : $6;
                      HEAP32[$2 >> 2] = $0;
                      $0 = $2 + 4 | 0;
                      $5 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $14 | 0;
                      $1 = i64toi32_i32$HIGH_BITS;
                      HEAP32[$0 >> 2] = $5;
                      $0 = $2 + 8 | 0;
                      $1 = $5 >>> 0 < $14 >>> 0 ? $1 + 1 | 0 : $1;
                      $14 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $1 | 0;
                      $5 = i64toi32_i32$HIGH_BITS;
                      HEAP32[$0 >> 2] = $14;
                      $0 = $2 + 12 | 0;
                      $5 = $1 >>> 0 > $14 >>> 0 ? $5 + 1 | 0 : $5;
                      $1 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 10, 0) + $5 | 0;
                      HEAP32[$0 >> 2] = $1;
                      $0 = i64toi32_i32$HIGH_BITS;
                      $1 = $1 >>> 0 < $5 >>> 0 ? $0 + 1 | 0 : $0;
                      $2 = $2 + 16 | 0;
                      $3 = $3 - 4 | 0;
                      if ($3) {
                       continue
                      }
                      break;
                     };
                     if (!$15) {
                      break block9770
                     }
                    }
                    $3 = $15 << 2;
                    while (1) {
                     $5 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, 10, 0);
                     $0 = i64toi32_i32$HIGH_BITS;
                     $18 = $0 + 1 | 0;
                     $6 = $0;
                     $0 = $1 + $5 | 0;
                     $1 = $1 >>> 0 > $0 >>> 0 ? $18 : $6;
                     HEAP32[$2 >> 2] = $0;
                     $2 = $2 + 4 | 0;
                     $3 = $3 - 4 | 0;
                     if ($3) {
                      continue
                     }
                     break;
                    };
                   }
                   if (!$1) {
                    break block94
                   }
                   if (($4 | 0) == 40) {
                    break folding_inner22
                   }
                   HEAP32[$19 + ($8 + 1080 | 0) >> 2] = $1;
                   $4 = $4 + 1 | 0;
                  }
                  HEAP32[$8 + 1240 >> 2] = $4;
                  if (($11 | 0) != ($16 | 0)) {
                   continue
                  }
                  break;
                 };
                 $11 = 0;
                 break block61;
                }
                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($17, $17, 1053804);
                wasm2js_trap();
               }
               if ($16 >>> 0 > $17 >>> 0) {
                break block99
               }
               if (($16 | 0) == ($19 | 0)) {
                break block10035
               }
               memset(($8 + 44 | 0) + $19 | 0, 48, $16 - $19 | 0);
               break block10035;
              }
              _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051708, 27, 1051764);
              wasm2js_trap();
             }
             _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $1, 40, 1051764);
             wasm2js_trap();
            }
            _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail($19, $16, $17, 1053820);
            wasm2js_trap();
           }
           block101 : {
            if (!$9) {
             break block101
            }
            $7 = $9 << 2;
            $1 = $7 - 4 | 0;
            $0 = ($1 >>> 2 | 0) + 1 | 0;
            $14 = $0 & 3;
            block104 : {
             block10376 : {
              if ($1 >>> 0 < 12) {
               $1 = 0;
               $2 = $8 + 1248 | 0;
               break block10376;
              }
              $3 = $0 & 2147483644;
              $1 = 0;
              $2 = $8 + 1248 | 0;
              while (1) {
               $5 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, 5, 0);
               $0 = i64toi32_i32$HIGH_BITS;
               $19 = $0 + 1 | 0;
               $6 = $0;
               $0 = $1 + $5 | 0;
               $19 = $1 >>> 0 > $0 >>> 0 ? $19 : $6;
               HEAP32[$2 >> 2] = $0;
               $0 = $2 + 4 | 0;
               $5 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 5, 0) + $19 | 0;
               $1 = i64toi32_i32$HIGH_BITS;
               HEAP32[$0 >> 2] = $5;
               $0 = $2 + 8 | 0;
               $1 = $5 >>> 0 < $19 >>> 0 ? $1 + 1 | 0 : $1;
               $19 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 5, 0) + $1 | 0;
               $5 = i64toi32_i32$HIGH_BITS;
               HEAP32[$0 >> 2] = $19;
               $0 = $2 + 12 | 0;
               $5 = $1 >>> 0 > $19 >>> 0 ? $5 + 1 | 0 : $5;
               $1 = __wasm_i64_mul(HEAP32[$0 >> 2], 0, 5, 0) + $5 | 0;
               HEAP32[$0 >> 2] = $1;
               $0 = i64toi32_i32$HIGH_BITS;
               $1 = $1 >>> 0 < $5 >>> 0 ? $0 + 1 | 0 : $0;
               $2 = $2 + 16 | 0;
               $3 = $3 - 4 | 0;
               if ($3) {
                continue
               }
               break;
              };
              if (!$14) {
               break block104
              }
             }
             $3 = $14 << 2;
             while (1) {
              $5 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, 5, 0);
              $0 = i64toi32_i32$HIGH_BITS;
              $19 = $0 + 1 | 0;
              $6 = $0;
              $0 = $1 + $5 | 0;
              $1 = $1 >>> 0 > $0 >>> 0 ? $19 : $6;
              HEAP32[$2 >> 2] = $0;
              $2 = $2 + 4 | 0;
              $3 = $3 - 4 | 0;
              if ($3) {
               continue
              }
              break;
             };
            }
            if (!$1) {
             $7 = $9;
             break block101;
            }
            if (($9 | 0) == 40) {
             break folding_inner22
            }
            HEAP32[$7 + ($8 + 1248 | 0) >> 2] = $1;
            $7 = $9 + 1 | 0;
           }
           HEAP32[$8 + 1408 >> 2] = $7;
           $2 = $4 >>> 0 < $7 >>> 0 ? $7 : $4;
           if ($2 >>> 0 >= 41) {
            break folding_inner7
           }
           $2 = $2 << 2;
           $5 = $8 + 1076 | 0;
           $4 = $8 + 1244 | 0;
           block11073 : {
            block11479 : {
             block11380 : {
              block11281 : {
               block109 : {
                block108 : {
                 while (1) {
                  if (!$2) {
                   break block108
                  }
                  $1 = $2 + $4 | 0;
                  $0 = $2 + $5 | 0;
                  $2 = $2 - 4 | 0;
                  $3 = HEAP32[$0 >> 2];
                  $0 = HEAP32[$1 >> 2];
                  if (($3 | 0) == ($0 | 0)) {
                   continue
                  }
                  break;
                 };
                 switch (($0 >>> 0 < $3 >>> 0) - ($0 >>> 0 > $3 >>> 0) & 255) {
                 case 0:
                  break block108;
                 case 1:
                  break block109;
                 default:
                  break block11073;
                 };
                }
                if ($11) {
                 $16 = 0;
                 break block10035;
                }
                $0 = $16 - 1 | 0;
                if ($0 >>> 0 >= $17 >>> 0) {
                 break block11281
                }
                if (!(HEAP8[$0 + ($8 + 44 | 0) | 0] & 1)) {
                 break block11073
                }
               }
               if ($16 >>> 0 > $17 >>> 0) {
                break block11380
               }
               $1 = ($8 + 44 | 0) + $16 | 0;
               $2 = $16;
               while (1) {
                $0 = $2;
                if (!$0) {
                 break block11479
                }
                $2 = $0 - 1 | 0;
                $4 = $8 + 44 | 0;
                if (HEAPU8[$2 + $4 | 0] == 57) {
                 continue
                }
                break;
               };
               $1 = $2 + $4 | 0;
               HEAP8[$1 | 0] = HEAPU8[$1 | 0] + 1;
               memset($0 + $4 | 0, 48, $16 - $0 | 0);
               break block11073;
              }
              _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($0, $17, 1053756);
              wasm2js_trap();
             }
             _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $16, $17, 1053772);
             wasm2js_trap();
            }
            $2 = 49;
            if (!$11) {
             HEAP8[$8 + 44 | 0] = 49;
             memset($8 + 45 | 0, 48, $16 - 1 | 0);
             $2 = 48;
            }
            $0 = $13 + 1 | 0;
            block11674 : {
             if ($13 << 16 >> 16 < ($36 | 0)) {
              break block11674
             }
             if ($16 >>> 0 >= $17 >>> 0) {
              break block11674
             }
             HEAP8[$1 | 0] = $2;
             $16 = $16 + 1 | 0;
            }
            $13 = $0;
           }
           if ($16 >>> 0 <= $17 >>> 0) {
            break block10035
           }
           _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $16, $17, 1053788);
           wasm2js_trap();
          }
          $5 = $8 + 44 | 0;
         }
         $0 = ($39 | 0) < 0;
         $3 = $22 ? ($0 ? 1051612 : 1051613) : $0 ? 1051612 : 1;
         $4 = $22 | $47;
         if (($36 | 0) < $13 << 16 >> 16) {
          _RNvNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec17digits_to_dec_str($8 + 8 | 0, $5, $16, $13, $29, $8 + 1740 | 0);
          $2 = HEAP32[$8 + 12 >> 2];
          $0 = HEAP32[$8 + 8 >> 2];
          break block117;
         }
         $2 = 2;
         HEAP16[$8 + 1740 >> 1] = 2;
         if (!$29) {
          $2 = 1;
          HEAP32[$8 + 1748 >> 2] = 1;
          HEAP32[$8 + 1744 >> 2] = 1051620;
          $0 = $8 + 1740 | 0;
          break block117;
         }
         HEAP32[$8 + 1756 >> 2] = $29;
         HEAP16[$8 + 1752 >> 1] = 0;
         HEAP32[$8 + 1748 >> 2] = 2;
         HEAP32[$8 + 1744 >> 2] = 1051621;
         $0 = $8 + 1740 | 0;
        }
        HEAP32[$8 + 1588 >> 2] = $2;
        HEAP32[$8 + 1584 >> 2] = $0;
        HEAP32[$8 + 1580 >> 2] = $4;
        HEAP32[$8 + 1576 >> 2] = $3;
        $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter19pad_formatted_parts($10, $8 + 1576 | 0);
        __stack_pointer = $8 + 1904 | 0;
        break __inlined_func$_RINvNtNtCsedhpoW0refZ_4core3fmt5float29float_to_decimal_common_exactdEB6_$70;
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(40, 40, 1051764);
       wasm2js_trap();
      }
      _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $4, 40, 1051764);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051735, 26, 1051764);
     wasm2js_trap();
    }
    return $0 | 0;
   }
   _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $0, 40, 1051764);
   wasm2js_trap();
  }
  _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $2, 40, 1051764);
  wasm2js_trap();
 }
 
 function _RNvXse_NtNtNtCsedhpoW0refZ_4core3fmt3num3impxNtB9_7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  $6 = __stack_pointer - 32 | 0;
  __stack_pointer = $6;
  $4 = 20;
  $3 = HEAP32[$0 + 4 >> 2];
  $10 = $3;
  $2 = $3 >> 31;
  $11 = HEAP32[$0 >> 2];
  $7 = $2 ^ $11;
  $0 = $7 - $2 | 0;
  $2 = ($2 ^ $3) - (($2 >>> 0 > $7 >>> 0) + $2 | 0) | 0;
  if (!(!$2 & $0 >>> 0 < 1e3)) {
   while (1) {
    $8 = ($6 + 12 | 0) + $4 | 0;
    $5 = $8 - 4 | 0;
    $7 = $0;
    $3 = $2;
    $0 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $2, 1e4);
    $2 = i64toi32_i32$HIGH_BITS;
    $12 = $7 - __wasm_i64_mul($0, $2, 1e4, 0) | 0;
    $13 = (($12 & 65535) >>> 0) / 100 | 0;
    $9 = $13 << 1;
    $9 = HEAPU8[$9 + 1051902 | 0] | HEAPU8[$9 + 1051903 | 0] << 8;
    HEAP8[$5 | 0] = $9;
    HEAP8[$5 + 1 | 0] = $9 >>> 8;
    $8 = $8 - 2 | 0;
    $5 = ($12 - Math_imul($13, 100) & 65535) << 1;
    $5 = HEAPU8[$5 + 1051902 | 0] | HEAPU8[$5 + 1051903 | 0] << 8;
    HEAP8[$8 | 0] = $5;
    HEAP8[$8 + 1 | 0] = $5 >>> 8;
    $4 = $4 - 4 | 0;
    if (!$3 & $7 >>> 0 > 9999999 | $3) {
     continue
    }
    break;
   }
  }
  if (!(!$2 & $0 >>> 0 <= 9)) {
   $4 = $4 - 2 | 0;
   $2 = $4 + ($6 + 12 | 0) | 0;
   $3 = $0;
   $0 = (($0 & 65535) >>> 0) / 100 | 0;
   $3 = ($3 - Math_imul($0, 100) & 65535) << 1;
   $3 = HEAPU8[$3 + 1051902 | 0] | HEAPU8[$3 + 1051903 | 0] << 8;
   HEAP8[$2 | 0] = $3;
   HEAP8[$2 + 1 | 0] = $3 >>> 8;
   $2 = 0;
  }
  if (!(!($0 | $2) & ($10 | $11) != 0)) {
   $4 = $4 - 1 | 0;
   HEAP8[$4 + ($6 + 12 | 0) | 0] = HEAPU8[($0 << 1) + 1051903 | 0];
  }
  $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, ($10 | 0) >= 0, 1, 0, ($6 + 12 | 0) + $4 | 0, 20 - $4 | 0);
  __stack_pointer = $6 + 32 | 0;
  return $0 | 0;
 }
 
 function rs_stats($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0;
  $1 = __stack_pointer - 240 | 0;
  __stack_pointer = $1;
  $2 = HEAP32[$0 + 152 >> 2];
  $3 = $2 - 1e5 | 0;
  $3 = $3 >>> 0 <= $2 >>> 0 ? $3 : 0;
  folding_inner1 : {
   folding_inner0 : {
    block : {
     if (($3 | 0) == ($2 | 0)) {
      break block
     }
     $4 = HEAP32[$0 + 148 >> 2];
     block18 : {
      $8 = $2 - $3 | 0;
      $9 = $8 << 2;
      $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($9);
      if ($2) {
       $3 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($2, $4 + ($3 << 2) | 0, $9);
       block2 : {
        if ($8 >>> 0 < 2) {
         break block2
        }
        if ($8 >>> 0 >= 21) {
         _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortmNvYmNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($3, $8);
         break block2;
        }
        $4 = $3 + 4 | 0;
        block5 : {
         if ($8 & 1) {
          $7 = $4;
          $4 = $3;
          break block5;
         }
         $2 = HEAP32[$3 >> 2];
         $7 = HEAP32[$3 + 4 >> 2];
         if ($2 >>> 0 > $7 >>> 0) {
          block8 : {
           while (1) {
            HEAP32[($3 + $5 | 0) + 4 >> 2] = $2;
            $2 = $3;
            if (!$5) {
             break block8
            }
            $5 = $5 - 4 | 0;
            $6 = $3 + $5 | 0;
            $2 = HEAP32[$6 >> 2];
            if ($7 >>> 0 < $2 >>> 0) {
             continue
            }
            break;
           };
           $2 = $6 + 4 | 0;
          }
          HEAP32[$2 >> 2] = $7;
         }
         $7 = $3 + 8 | 0;
        }
        if (($8 | 0) == 2) {
         break block2
        }
        $11 = $3 + $9 | 0;
        $6 = $7 + 4 | 0;
        while (1) {
         $5 = HEAP32[$4 >> 2];
         $10 = HEAP32[$7 >> 2];
         if ($5 >>> 0 > $10 >>> 0) {
          $2 = $7;
          block11 : {
           while (1) {
            HEAP32[$2 >> 2] = $5;
            $2 = $3;
            if (($3 | 0) == ($4 | 0)) {
             break block11
            }
            $2 = $4;
            $4 = $2 - 4 | 0;
            $5 = HEAP32[$4 >> 2];
            if ($10 >>> 0 < $5 >>> 0) {
             continue
            }
            break;
           };
           $2 = $4 + 4 | 0;
          }
          HEAP32[$2 >> 2] = $10;
         }
         $5 = HEAP32[$7 >> 2];
         $10 = HEAP32[$7 + 4 >> 2];
         if ($5 >>> 0 > $10 >>> 0) {
          $4 = $6;
          while (1) {
           block14 : {
            HEAP32[$4 >> 2] = $5;
            $2 = $4 - 4 | 0;
            if (($2 | 0) == ($3 | 0)) {
             $2 = $3;
             break block14;
            }
            $5 = $4 - 8 | 0;
            $4 = $2;
            $5 = HEAP32[$5 >> 2];
            if ($10 >>> 0 < $5 >>> 0) {
             continue
            }
           }
           break;
          };
          HEAP32[$2 >> 2] = $10;
         }
         $4 = $7 + 4 | 0;
         $6 = $6 + 8 | 0;
         $7 = $7 + 8 | 0;
         if (($11 | 0) != ($7 | 0)) {
          continue
         }
         break;
        };
       }
       $4 = $8 - 1 | 0;
       $2 = (Math_imul($8, 99) >>> 0) / 100 | 0;
       $4 = $4 >>> 0 < $2 >>> 0 ? $4 : $2;
       if ($8 >>> 0 > $4 >>> 0) {
        $5 = HEAP32[$3 - 4 >> 2];
        $2 = $5 & -8;
        $7 = $5 & 3;
        if ($2 >>> 0 < $9 + ($7 ? 4 : 8) >>> 0) {
         break folding_inner0
        }
        $4 = HEAP32[$3 + ($4 << 2) >> 2];
        $5 = HEAP32[$3 + ($8 << 1 & -4) >> 2];
        if (($7 | 0) != 0 & $2 >>> 0 > $9 + 39 >>> 0) {
         break block18
        }
        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
        break block;
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, $8, 1051376);
       wasm2js_trap();
      }
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
      wasm2js_trap();
     }
     break folding_inner1;
    }
    HEAP32[$1 + 12 >> 2] = $5;
    HEAP32[$1 + 16 >> 2] = $4;
    $9 = HEAP32[$0 + 288 >> 2];
    $4 = Math_imul($9, 152);
    $7 = HEAP32[$0 + 284 >> 2];
    $2 = $4 + $7 | 0;
    $5 = $7;
    block20 : {
     while (1) {
      $3 = $5;
      $6 = 0;
      if (!$4) {
       $3 = 0;
       break block20;
      }
      $4 = $4 - 152 | 0;
      $5 = $3 + 152 | 0;
      if (HEAPU8[$3 + 148 | 0] != 2) {
       continue
      }
      break;
     };
     if (($2 | 0) == ($5 | 0)) {
      break block20
     }
     $10 = $2 - $5 | 0;
     $11 = ($10 >>> 0) / 152 | 0;
     $8 = HEAP32[$3 + 132 >> 2];
     $2 = 0;
     if ($10 - 152 >>> 0 >= 152) {
      $11 = $11 & 1;
      $13 = ($4 >>> 0) / 304 << 1;
      $4 = $5;
      while (1) {
       if (HEAPU8[$4 + 148 | 0] == 2) {
        $12 = HEAP32[$4 + 132 >> 2];
        $10 = $12 >>> 0 < $8 >>> 0;
        $8 = $10 ? $8 : $12;
        $3 = $10 ? $3 : $4;
       }
       if (HEAPU8[$4 + 300 | 0] == 2) {
        $12 = HEAP32[$4 + 284 >> 2];
        $10 = $12 >>> 0 < $8 >>> 0;
        $8 = $10 ? $8 : $12;
        $3 = $10 ? $3 : $4 + 152 | 0;
       }
       $4 = $4 + 304 | 0;
       $2 = $2 + 2 | 0;
       if (($13 | 0) != ($2 | 0)) {
        continue
       }
       break;
      };
      if (!$11) {
       break block20
      }
     }
     $4 = Math_imul($2, 152) + $5 | 0;
     if (HEAPU8[$4 + 148 | 0] != 2) {
      break block20
     }
     $3 = HEAPU32[$4 + 132 >> 2] < $8 >>> 0 ? $3 : $4;
    }
    block24 : {
     if (!$9) {
      break block24
     }
     $6 = HEAP32[$7 + 132 >> 2];
     if (($9 | 0) == 1) {
      break block24
     }
     $2 = (Math_imul($9, 152) - 152 >>> 0) / 152 | 0;
     $5 = $2 & 3;
     $8 = 0;
     if ($2 - 1 >>> 0 >= 3) {
      $4 = $7 + 740 | 0;
      $2 = $2 & 33554428;
      while (1) {
       $9 = HEAP32[$4 - 456 >> 2];
       $6 = $6 >>> 0 > $9 >>> 0 ? $6 : $9;
       $9 = HEAP32[$4 - 304 >> 2];
       $6 = $6 >>> 0 > $9 >>> 0 ? $6 : $9;
       $9 = HEAP32[$4 - 152 >> 2];
       $6 = $6 >>> 0 > $9 >>> 0 ? $6 : $9;
       $9 = HEAP32[$4 >> 2];
       $6 = $6 >>> 0 > $9 >>> 0 ? $6 : $9;
       $4 = $4 + 608 | 0;
       $8 = $8 + 4 | 0;
       if (($2 | 0) != ($8 | 0)) {
        continue
       }
       break;
      };
      if (!$5) {
       break block24
      }
     }
     $4 = ($7 + Math_imul($8, 152) | 0) + 284 | 0;
     while (1) {
      $2 = HEAP32[$4 >> 2];
      $6 = $2 >>> 0 < $6 >>> 0 ? $6 : $2;
      $4 = $4 + 152 | 0;
      $5 = $5 - 1 | 0;
      if ($5) {
       continue
      }
      break;
     };
    }
    HEAP32[$1 + 20 >> 2] = $6;
    $4 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(512);
    if (!$4) {
     _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
     wasm2js_trap();
    }
    $8 = $0 - -64 | 0;
    $6 = 0;
    HEAP32[$1 + 32 >> 2] = 0;
    HEAP32[$1 + 28 >> 2] = $4;
    HEAP32[$1 + 24 >> 2] = 512;
    $2 = HEAP32[$0 + 288 >> 2];
    HEAP32[$1 + 36 >> 2] = $2;
    block28 : {
     if ($3) {
      $5 = 0;
      $6 = HEAP32[$3 + 132 >> 2];
      $4 = HEAP32[$3 + 128 >> 2];
      break block28;
     }
     $5 = -1;
     $4 = -1;
    }
    $9 = $0 + 392 | 0;
    $10 = $0 + 224 | 0;
    HEAP32[$1 + 40 >> 2] = $6;
    HEAP32[$1 + 224 >> 2] = $4;
    HEAP32[$1 + 228 >> 2] = $5;
    HEAP32[$1 + 44 >> 2] = HEAP32[$0 + 60 >> 2];
    $11 = $0 + 136 | 0;
    $13 = $0 + 128 | 0;
    $12 = $0 + 120 | 0;
    $14 = $0 + 112 | 0;
    $15 = $0 + 104 | 0;
    $16 = $0 + 96 | 0;
    $17 = $0 + 88 | 0;
    $18 = $0 + 80 | 0;
    $19 = $0 + 72 | 0;
    block33 : {
     if ($2) {
      $7 = HEAP32[$0 + 284 >> 2];
      $4 = $2 & 3;
      $5 = 0;
      $6 = 0;
      block32 : {
       block31 : {
        block30 : {
         if ($2 >>> 0 < 4) {
          break block30
         }
         $3 = $7 + 604 | 0;
         $20 = $2 & 16777212;
         while (1) {
          $6 = ((((HEAPU8[$3 - 456 | 0] == 3) + $6 | 0) + (HEAPU8[$3 - 304 | 0] == 3) | 0) + (HEAPU8[$3 - 152 | 0] == 3) | 0) + (HEAPU8[$3 | 0] == 3) | 0;
          $3 = $3 + 608 | 0;
          $5 = $5 + 4 | 0;
          if (($20 | 0) != ($5 | 0)) {
           continue
          }
          break;
         };
         if ($4) {
          break block30
         }
         HEAP32[$1 + 48 >> 2] = $6;
         $4 = $2 & 3;
         break block31;
        }
        $3 = ($7 + Math_imul($5, 152) | 0) + 148 | 0;
        while (1) {
         $6 = (HEAPU8[$3 | 0] == 3) + $6 | 0;
         $3 = $3 + 152 | 0;
         $4 = $4 - 1 | 0;
         if ($4) {
          continue
         }
         break;
        };
        HEAP32[$1 + 48 >> 2] = $6;
        $4 = $2 & 3;
        $5 = 0;
        $6 = 0;
        if ($2 >>> 0 < 4) {
         break block32
        }
       }
       $3 = $7 + 600 | 0;
       $2 = $2 & 16777212;
       $5 = 0;
       $6 = 0;
       while (1) {
        $6 = ((((HEAP32[$3 - 456 >> 2] != 0) + $6 | 0) + (HEAP32[$3 - 304 >> 2] != 0) | 0) + (HEAP32[$3 - 152 >> 2] != 0) | 0) + (HEAP32[$3 >> 2] != 0) | 0;
        $3 = $3 + 608 | 0;
        $5 = $5 + 4 | 0;
        if (($2 | 0) != ($5 | 0)) {
         continue
        }
        break;
       };
       if (!$4) {
        break block33
       }
      }
      $3 = ($7 + Math_imul($5, 152) | 0) + 144 | 0;
      while (1) {
       $6 = (HEAP32[$3 >> 2] != 0) + $6 | 0;
       $3 = $3 + 152 | 0;
       $4 = $4 - 1 | 0;
       if ($4) {
        continue
       }
       break;
      };
      break block33;
     }
     $6 = 0;
     HEAP32[$1 + 48 >> 2] = 0;
    }
    HEAP32[$1 + 52 >> 2] = $6;
    HEAP32[$1 + 216 >> 2] = $1 + 52;
    HEAP32[$1 + 220 >> 2] = 3;
    HEAP32[$1 + 208 >> 2] = $1 + 48;
    HEAP32[$1 + 212 >> 2] = 3;
    HEAP32[$1 + 200 >> 2] = $11;
    HEAP32[$1 + 204 >> 2] = 6;
    HEAP32[$1 + 192 >> 2] = $1 + 16;
    HEAP32[$1 + 196 >> 2] = 3;
    HEAP32[$1 + 184 >> 2] = $1 + 12;
    HEAP32[$1 + 188 >> 2] = 3;
    HEAP32[$1 + 176 >> 2] = $13;
    HEAP32[$1 + 180 >> 2] = 6;
    HEAP32[$1 + 168 >> 2] = $12;
    HEAP32[$1 + 172 >> 2] = 6;
    HEAP32[$1 + 160 >> 2] = $14;
    HEAP32[$1 + 164 >> 2] = 6;
    HEAP32[$1 + 152 >> 2] = $15;
    HEAP32[$1 + 156 >> 2] = 6;
    HEAP32[$1 + 144 >> 2] = $16;
    HEAP32[$1 + 148 >> 2] = 6;
    HEAP32[$1 + 136 >> 2] = $17;
    HEAP32[$1 + 140 >> 2] = 6;
    HEAP32[$1 + 128 >> 2] = $18;
    HEAP32[$1 + 132 >> 2] = 6;
    HEAP32[$1 + 120 >> 2] = $19;
    HEAP32[$1 + 124 >> 2] = 6;
    HEAP32[$1 + 112 >> 2] = $8;
    HEAP32[$1 + 116 >> 2] = 6;
    HEAP32[$1 + 104 >> 2] = $1 + 44;
    HEAP32[$1 + 108 >> 2] = 3;
    HEAP32[$1 + 96 >> 2] = $1 + 20;
    HEAP32[$1 + 100 >> 2] = 3;
    HEAP32[$1 + 88 >> 2] = $1 + 40;
    HEAP32[$1 + 92 >> 2] = 3;
    $4 = $1 + 224 | 0;
    HEAP32[$1 + 80 >> 2] = $4;
    HEAP32[$1 + 84 >> 2] = 9;
    HEAP32[$1 + 72 >> 2] = $1 + 36;
    HEAP32[$1 + 76 >> 2] = 3;
    HEAP32[$1 + 64 >> 2] = $9;
    HEAP32[$1 + 68 >> 2] = 6;
    HEAP32[$1 + 56 >> 2] = $10;
    HEAP32[$1 + 60 >> 2] = 6;
    $3 = $1 + 56 | 0;
    _RNvNtCsedhpoW0refZ_4core3fmt5write($1 + 24 | 0, 1048576, 1050949, $3);
    $6 = HEAP32[$0 + 360 >> 2];
    if ($6) {
     $5 = HEAP32[$0 + 356 >> 2];
     _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($3, HEAP32[$5 + 4 >> 2], HEAP32[$5 + 8 >> 2], 92, 23644);
     $2 = HEAP32[$1 + 60 >> 2];
     _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($4, $2, HEAP32[$1 + 64 >> 2], 34, 8796);
     $3 = HEAP32[$1 + 56 >> 2];
     if ($3) {
      $8 = HEAP32[$2 - 4 >> 2];
      $7 = $8 & -8;
      $8 = $8 & 3;
      if ($7 >>> 0 < $3 + ($8 ? 4 : 8) >>> 0) {
       break folding_inner0
      }
      if (($8 | 0) != 0 & $7 >>> 0 > $3 + 39 >>> 0) {
       break folding_inner1
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
     }
     HEAP32[$1 + 56 >> 2] = $4;
     HEAP32[$1 + 60 >> 2] = 4;
     _RNvNtCsedhpoW0refZ_4core3fmt5write($1 + 24 | 0, 1048576, 1051236, $1 + 56 | 0);
     block44 : {
      $2 = HEAP32[$1 + 224 >> 2];
      if ($2) {
       $7 = HEAP32[$1 + 228 >> 2];
       $8 = HEAP32[$7 - 4 >> 2];
       $3 = $8 & -8;
       $8 = $8 & 3;
       if ($3 >>> 0 < $2 + ($8 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($8 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $8 = Math_imul($6, 12) - 12 | 0;
      $3 = 0;
      block53 : {
       while (1) {
        if (($3 | 0) == ($8 | 0)) {
         break block44
        }
        $2 = HEAP32[$1 + 32 >> 2];
        if (($2 | 0) == HEAP32[$1 + 24 >> 2]) {
         _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($1 + 24 | 0, $2, 1)
        }
        HEAP8[$2 + HEAP32[$1 + 28 >> 2] | 0] = 44;
        HEAP32[$1 + 32 >> 2] = $2 + 1;
        $2 = $3 + $5 | 0;
        _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($1 + 56 | 0, HEAP32[$2 + 16 >> 2], HEAP32[$2 + 20 >> 2], 92, 23644);
        $2 = HEAP32[$1 + 60 >> 2];
        _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($1 + 224 | 0, $2, HEAP32[$1 + 64 >> 2], 34, 8796);
        block47 : {
         $7 = HEAP32[$1 + 56 >> 2];
         if ($7) {
          $9 = HEAP32[$2 - 4 >> 2];
          $6 = $9 & -8;
          $9 = $9 & 3;
          if ($6 >>> 0 < $7 + ($9 ? 4 : 8) >>> 0) {
           break block47
          }
          if (($9 | 0) != 0 & $6 >>> 0 > $7 + 39 >>> 0) {
           break folding_inner1
          }
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
         }
         HEAP32[$1 + 56 >> 2] = $4;
         HEAP32[$1 + 60 >> 2] = 4;
         _RNvNtCsedhpoW0refZ_4core3fmt5write($1 + 24 | 0, 1048576, 1051236, $1 + 56 | 0);
         $2 = HEAP32[$1 + 224 >> 2];
         if ($2) {
          $6 = HEAP32[$1 + 228 >> 2];
          $9 = HEAP32[$6 - 4 >> 2];
          $7 = $9 & -8;
          $9 = $9 & 3;
          if ($7 >>> 0 < $2 + ($9 ? 4 : 8) >>> 0) {
           break folding_inner0
          }
          if (($9 | 0) != 0 & $7 >>> 0 > $2 + 39 >>> 0) {
           break block53
          }
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($6);
         }
         $3 = $3 + 12 | 0;
         if (($3 | 0) != 228) {
          continue
         }
         break block44;
        }
        break;
       };
       break folding_inner0;
      }
      break folding_inner1;
     }
     $3 = HEAP32[$0 + 360 >> 2];
    } else {
     $3 = 0
    }
    HEAP32[$1 + 224 >> 2] = $3;
    HEAP32[$1 + 56 >> 2] = $4;
    HEAP32[$1 + 60 >> 2] = 3;
    _RNvNtCsedhpoW0refZ_4core3fmt5write($1 + 24 | 0, 1048576, 1049310, $1 + 56 | 0);
    HEAP32[$1 + 64 >> 2] = HEAP32[$1 + 32 >> 2];
    $4 = HEAP32[$1 + 28 >> 2];
    HEAP32[$1 + 56 >> 2] = HEAP32[$1 + 24 >> 2];
    HEAP32[$1 + 60 >> 2] = $4;
    block57 : {
     $4 = HEAP32[$0 + 460 >> 2];
     if ($4) {
      $5 = HEAP32[$0 + 464 >> 2];
      $3 = HEAP32[$5 - 4 >> 2];
      $2 = $3 & -8;
      $3 = $3 & 3;
      if ($2 >>> 0 < $4 + ($3 ? 4 : 8) >>> 0) {
       break folding_inner0
      }
      if (($3 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
       break block57
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
     }
     $4 = $0 + 460 | 0;
     HEAP32[$4 + 8 >> 2] = HEAP32[$1 + 64 >> 2];
     $2 = HEAP32[$1 + 60 >> 2];
     HEAP32[$4 >> 2] = HEAP32[$1 + 56 >> 2];
     HEAP32[$4 + 4 >> 2] = $2;
     __stack_pointer = $1 + 240 | 0;
     return HEAP32[$0 + 468 >> 2];
    }
    break folding_inner1;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function rs_text($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 448 >> 2];
 }
 
 function rs_text_len($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 452 >> 2];
 }
 
 function rs_time($0) {
  $0 = $0 | 0;
  return +(+HEAPU32[$0 + 224 >> 2] + +HEAPU32[$0 + 228 >> 2] * 4294967296.0);
 }
 
 function _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $2 = HEAP32[$0 + 12 >> 2];
  block8 : {
   block4 : {
    block7 : {
     if ($1 >>> 0 >= 256) {
      $3 = HEAP32[$0 + 24 >> 2];
      block3 : {
       block2 : {
        if (($0 | 0) == ($2 | 0)) {
         $2 = HEAP32[$0 + 20 >> 2];
         $1 = HEAP32[($2 ? 20 : 16) + $0 >> 2];
         if ($1) {
          break block2
         }
         $2 = 0;
         break block3;
        }
        $1 = HEAP32[$0 + 8 >> 2];
        HEAP32[$1 + 12 >> 2] = $2;
        HEAP32[$2 + 8 >> 2] = $1;
        break block3;
       }
       $4 = $2 ? $0 + 20 | 0 : $0 + 16 | 0;
       while (1) {
        $5 = $4;
        $2 = $1;
        $1 = HEAP32[$2 + 20 >> 2];
        $4 = $1 ? $2 + 20 | 0 : $2 + 16 | 0;
        $1 = HEAP32[($1 ? 20 : 16) + $2 >> 2];
        if ($1) {
         continue
        }
        break;
       };
       HEAP32[$5 >> 2] = 0;
      }
      if (!$3) {
       break block4
      }
      block6 : {
       $1 = (HEAP32[$0 + 28 >> 2] << 2) + 1056124 | 0;
       if (($0 | 0) != HEAP32[$1 >> 2]) {
        if (HEAP32[$3 + 16 >> 2] == ($0 | 0)) {
         break block6
        }
        HEAP32[$3 + 20 >> 2] = $2;
        if ($2) {
         break block7
        }
        break block4;
       }
       HEAP32[$1 >> 2] = $2;
       if (!$2) {
        break block8
       }
       break block7;
      }
      HEAP32[$3 + 16 >> 2] = $2;
      if ($2) {
       break block7
      }
      break block4;
     }
     $0 = HEAP32[$0 + 8 >> 2];
     if (($2 | 0) != ($0 | 0)) {
      HEAP32[$0 + 12 >> 2] = $2;
      HEAP32[$2 + 8 >> 2] = $0;
      return;
     }
     (wasm2js_i32$0 = 1056532, wasm2js_i32$1 = HEAP32[264133] & __wasm_rotl_i32($1 >>> 3 | 0)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
     return;
    }
    HEAP32[$2 + 24 >> 2] = $3;
    $1 = HEAP32[$0 + 16 >> 2];
    if ($1) {
     HEAP32[$2 + 16 >> 2] = $1;
     HEAP32[$1 + 24 >> 2] = $2;
    }
    $0 = HEAP32[$0 + 20 >> 2];
    if (!$0) {
     break block4
    }
    HEAP32[$2 + 20 >> 2] = $0;
    HEAP32[$0 + 24 >> 2] = $2;
    return;
   }
   return;
  }
  (wasm2js_i32$0 = 1056536, wasm2js_i32$1 = HEAP32[264134] & __wasm_rotl_i32(HEAP32[$0 + 28 >> 2])), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
 }
 
 function _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE13dispose_chunkCs9syRKuynNcS_3std($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = $0 + $1 | 0;
  folding_inner0 : {
   block9 : {
    block8 : {
     block5 : {
      $3 = HEAP32[$0 + 4 >> 2];
      block1 : {
       block : {
        if ($3 & 1) {
         break block
        }
        if (!($3 & 2)) {
         break block1
        }
        $3 = HEAP32[$0 >> 2];
        $1 = $3 + $1 | 0;
        $0 = $0 - $3 | 0;
        if (($0 | 0) == HEAP32[264137]) {
         if ((HEAP32[$2 + 4 >> 2] & 3) != 3) {
          break block
         }
         HEAP32[264135] = $1;
         HEAP32[$2 + 4 >> 2] = HEAP32[$2 + 4 >> 2] & -2;
         HEAP32[$0 + 4 >> 2] = $1 | 1;
         HEAP32[$2 >> 2] = $1;
         return;
        }
        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($0, $3);
       }
       block4 : {
        $3 = HEAP32[$2 + 4 >> 2];
        block6 : {
         if (!($3 & 2)) {
          if (($2 | 0) == HEAP32[264138]) {
           break block4
          }
          if (($2 | 0) == HEAP32[264137]) {
           break block5
          }
          $3 = $3 & -8;
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($2, $3);
          $1 = $1 + $3 | 0;
          HEAP32[$0 + 4 >> 2] = $1 | 1;
          HEAP32[$0 + $1 >> 2] = $1;
          if (HEAP32[264137] != ($0 | 0)) {
           break block6
          }
          HEAP32[264135] = $1;
          return;
         }
         HEAP32[$2 + 4 >> 2] = $3 & -2;
         HEAP32[$0 + 4 >> 2] = $1 | 1;
         HEAP32[$0 + $1 >> 2] = $1;
        }
        if ($1 >>> 0 >= 256) {
         $2 = 31;
         if ($1 >>> 0 < 16777216) {
          break block8
         }
         break block9;
        }
        $2 = HEAP32[264133];
        $3 = 1 << ($1 >>> 3);
        block11 : {
         if (!($2 & $3)) {
          HEAP32[264133] = $2 | $3;
          $1 = ($1 & 248) + 1056268 | 0;
          $2 = $1;
          break block11;
         }
         $1 = $1 & 248;
         $2 = $1 + 1056268 | 0;
         $1 = HEAP32[$1 + 1056276 >> 2];
        }
        HEAP32[$2 + 8 >> 2] = $0;
        HEAP32[$1 + 12 >> 2] = $0;
        break folding_inner0;
       }
       HEAP32[264138] = $0;
       $1 = HEAP32[264136] + $1 | 0;
       HEAP32[264136] = $1;
       HEAP32[$0 + 4 >> 2] = $1 | 1;
       if (HEAP32[264137] != ($0 | 0)) {
        break block1
       }
       HEAP32[264135] = 0;
       HEAP32[264137] = 0;
      }
      return;
     }
     HEAP32[264137] = $0;
     $1 = HEAP32[264135] + $1 | 0;
     HEAP32[264135] = $1;
     HEAP32[$0 + 4 >> 2] = $1 | 1;
     HEAP32[$0 + $1 >> 2] = $1;
     return;
    }
    $3 = Math_clz32($1 >>> 8 | 0);
    $2 = ($1 >>> 38 - $3 & 1 | $3 << 1) ^ 62;
   }
   HEAP32[$0 + 16 >> 2] = 0;
   HEAP32[$0 + 20 >> 2] = 0;
   HEAP32[$0 + 28 >> 2] = $2;
   $4 = ($2 << 2) + 1056124 | 0;
   $3 = 1 << $2;
   if (!($3 & HEAP32[264134])) {
    HEAP32[$4 >> 2] = $0;
    HEAP32[$0 + 24 >> 2] = $4;
    HEAP32[$0 + 12 >> 2] = $0;
    HEAP32[$0 + 8 >> 2] = $0;
    HEAP32[264134] = $3 | HEAP32[264134];
    return;
   }
   block15 : {
    $3 = HEAP32[$4 >> 2];
    block14 : {
     if (($1 | 0) == (HEAP32[$3 + 4 >> 2] & -8)) {
      $2 = $3;
      break block14;
     }
     $5 = $1 << (($2 | 0) != 31 ? 25 - ($2 >>> 1 | 0) | 0 : 0);
     while (1) {
      $4 = ($5 >>> 29 & 4) + $3 | 0;
      $2 = HEAP32[$4 + 16 >> 2];
      if (!$2) {
       break block15
      }
      $5 = $5 << 1;
      $3 = $2;
      if ((HEAP32[$2 + 4 >> 2] & -8) != ($1 | 0)) {
       continue
      }
      break;
     };
    }
    $1 = HEAP32[$2 + 8 >> 2];
    HEAP32[$1 + 12 >> 2] = $0;
    HEAP32[$2 + 8 >> 2] = $0;
    HEAP32[$0 + 24 >> 2] = 0;
    break folding_inner0;
   }
   HEAP32[$4 + 16 >> 2] = $0;
   HEAP32[$0 + 24 >> 2] = $3;
   HEAP32[$0 + 12 >> 2] = $0;
   HEAP32[$0 + 8 >> 2] = $0;
   return;
  }
  HEAP32[$0 + 12 >> 2] = $2;
  HEAP32[$0 + 8 >> 2] = $1;
 }
 
 function _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalEBa_($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  $1 = $1 + $2 | 0;
  if ($2 >>> 0 > $1 >>> 0) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(0);
   wasm2js_trap();
  }
  $5 = $4 + 4 | 0;
  $6 = HEAP32[$0 + 4 >> 2];
  $3 = HEAP32[$0 >> 2];
  $2 = $3 << 1;
  $1 = $1 >>> 0 > $2 >>> 0 ? $1 : $2;
  $2 = $1 >>> 0 <= 8 ? 8 : $1;
  $1 = $2;
  block1 : {
   if (($1 | 0) < 0) {
    $3 = 1;
    $1 = 0;
    $6 = 4;
    break block1;
   }
   block3 : {
    if ($3) {
     $3 = _RNvCs9hJ03s5DiqP_7___rustc14___rust_realloc($6, $3, $1);
     break block3;
    }
    $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($1);
   }
   block5 : {
    if (!$3) {
     HEAP32[$5 + 4 >> 2] = 1;
     $3 = 1;
     break block5;
    }
    HEAP32[$5 + 4 >> 2] = $3;
    $3 = 0;
   }
   $6 = 8;
  }
  HEAP32[$6 + $5 >> 2] = $1;
  HEAP32[$5 >> 2] = $3;
  if (HEAP32[$4 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$4 + 8 >> 2]);
   wasm2js_trap();
  }
  $1 = HEAP32[$4 + 8 >> 2];
  HEAP32[$0 >> 2] = $2;
  HEAP32[$0 + 4 >> 2] = $1;
  __stack_pointer = $4 + 16 | 0;
 }
 
 function _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt($0, $1, $2) {
  var $3 = 0;
  $3 = __stack_pointer - 32 | 0;
  __stack_pointer = $3;
  HEAP32[$3 + 16 >> 2] = $1;
  HEAP32[$3 + 12 >> 2] = $0;
  HEAP16[$3 + 28 >> 1] = 1;
  HEAP32[$3 + 24 >> 2] = $2;
  HEAP32[$3 + 20 >> 2] = $3 + 12;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  $0 = $3 + 20 | 0;
  $2 = HEAP32[$0 + 4 >> 2];
  $3 = HEAP32[$0 >> 2];
  HEAP32[$1 + 12 >> 2] = $0;
  HEAP32[$1 + 4 >> 2] = $3;
  HEAP32[$1 + 8 >> 2] = $2;
  $0 = __stack_pointer - 16 | 0;
  __stack_pointer = $0;
  $1 = $1 + 4 | 0;
  $2 = HEAP32[$1 >> 2];
  $3 = HEAP32[$2 + 4 >> 2];
  if ($3 & 1) {
   $2 = HEAP32[$2 >> 2];
   HEAP32[$0 + 4 >> 2] = $3 >>> 1;
   HEAP32[$0 >> 2] = $2;
   _RNvNtCs9syRKuynNcS_3std9panicking15panic_with_hook($0, 1055352, HEAPU8[HEAP32[$1 + 8 >> 2] + 8 | 0]);
   wasm2js_trap();
  }
  HEAP32[$0 >> 2] = -1;
  HEAP32[$0 + 12 >> 2] = $1;
  _RNvNtCs9syRKuynNcS_3std9panicking15panic_with_hook($0, 1055380, HEAPU8[HEAP32[$1 + 8 >> 2] + 8 | 0]);
  wasm2js_trap();
 }
 
 function _RNvXsK_NtCsedhpoW0refZ_4core3fmtNtB5_5ErrorNtB5_5Debug3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return FUNCTION_TABLE[HEAP32[HEAP32[$1 + 4 >> 2] + 12 >> 2]](HEAP32[$1 >> 2], 1051548, 5) | 0;
 }
 
 function _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCsl5a4uRf33NA_5alloc6string6StringEBF_($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0;
  block3 : {
   block1 : {
    $2 = HEAP32[$0 >> 2];
    if ($2) {
     $0 = HEAP32[$0 + 4 >> 2];
     $1 = HEAP32[$0 - 4 >> 2];
     $3 = $1 & -8;
     $1 = $1 & 3;
     if ($3 >>> 0 < ($1 ? 4 : 8) + $2 >>> 0) {
      break block1
     }
     if (($1 | 0) != 0 & $2 + 39 >>> 0 < $3 >>> 0) {
      break block3
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($0);
    }
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str_100($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = HEAP32[$0 + 8 >> 2];
  block2 : {
   block1 : {
    if ($2 >>> 0 > HEAP32[$0 >> 2] - $3 >>> 0) {
     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalEBa_($0, $3, $2);
     $3 = HEAP32[$0 + 8 >> 2];
     break block1;
    }
    if (!$2) {
     break block2
    }
   }
   _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 4 >> 2] + $3 | 0, $1, $2);
  }
  HEAP32[$0 + 8 >> 2] = $2 + $3;
  return 0;
 }
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char_101($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $5 = HEAP32[$0 + 8 >> 2];
  $3 = 1;
  block1 : {
   if ($1 >>> 0 < 128) {
    break block1
   }
   $3 = 2;
   if ($1 >>> 0 < 2048) {
    break block1
   }
   $3 = $1 >>> 0 < 65536 ? 3 : 4;
  }
  if ($3 >>> 0 > HEAP32[$0 >> 2] - $5 >>> 0) {
   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalEBa_($0, $5, $3)
  }
  $2 = HEAP32[$0 + 4 >> 2] + $5 | 0;
  block6 : {
   if ($1 >>> 0 >= 128) {
    $6 = $1 & 63 | -128;
    $4 = $1 >>> 6 | 0;
    if ($1 >>> 0 < 2048) {
     HEAP8[$2 + 1 | 0] = $6;
     HEAP8[$2 | 0] = $4 | 192;
     break block6;
    }
    $7 = $1 >>> 12 | 0;
    $4 = $4 & 63 | -128;
    if ($1 >>> 0 <= 65535) {
     HEAP8[$2 + 2 | 0] = $6;
     HEAP8[$2 + 1 | 0] = $4;
     HEAP8[$2 | 0] = $7 | 224;
     break block6;
    }
    HEAP8[$2 + 3 | 0] = $6;
    HEAP8[$2 + 2 | 0] = $4;
    HEAP8[$2 + 1 | 0] = $7 & 63 | -128;
    HEAP8[$2 | 0] = $1 >>> 18 | -16;
    break block6;
   }
   HEAP8[$2 | 0] = $1;
  }
  HEAP32[$0 + 8 >> 2] = $5 + $3;
  return 0;
 }
 
 function _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtB6_($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  if ($2 & 1) {
   $2 = $2 >>> 1 | 0;
   $3 = HEAP32[$0 + 8 >> 2];
   block3 : {
    block2 : {
     if ($2 >>> 0 > HEAP32[$0 >> 2] - $3 >>> 0) {
      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalEBa_($0, $3, $2);
      $3 = HEAP32[$0 + 8 >> 2];
      break block2;
     }
     if (!$2) {
      break block3
     }
    }
    _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 4 >> 2] + $3 | 0, $1, $2);
   }
   HEAP32[$0 + 8 >> 2] = $2 + $3;
   return 0;
  }
  return _RNvNtCsedhpoW0refZ_4core3fmt5write($0, 1051556, $1, $2) | 0;
 }
 
 function _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRDNtB6_5DebugEL_Bx_3fmtB8_($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return FUNCTION_TABLE[HEAP32[HEAP32[$0 + 4 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], $1) | 0;
 }
 
 function _RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write9write_str($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  $9 = HEAP32[$0 + 4 >> 2];
  $10 = HEAP32[$0 >> 2];
  $11 = HEAP32[$0 + 8 >> 2];
  block : {
   while (1) {
    if ($6) {
     break block
    }
    block11 : {
     block1 : {
      if ($2 >>> 0 < $4 >>> 0) {
       break block1
      }
      while (1) {
       $5 = $1 + $4 | 0;
       block5 : {
        block6 : {
         block7 : {
          block4 : {
           block3 : {
            $6 = $2 - $4 | 0;
            if ($6 >>> 0 <= 7) {
             if (($2 | 0) != ($4 | 0)) {
              break block3
             }
             $4 = $2;
             break block1;
            }
            $0 = $5 + 3 & -4;
            if (($0 | 0) == ($5 | 0)) {
             break block4
            }
            $3 = $0 - $5 | 0;
            $0 = 0;
            while (1) {
             if (HEAPU8[$0 + $5 | 0] == 10) {
              break block5
             }
             $0 = $0 + 1 | 0;
             if (($3 | 0) != ($0 | 0)) {
              continue
             }
             break;
            };
            $0 = $6 - 8 | 0;
            if ($0 >>> 0 < $3 >>> 0) {
             break block6
            }
            break block7;
           }
           $0 = 0;
           while (1) {
            if (HEAPU8[$0 + $5 | 0] == 10) {
             break block5
            }
            $0 = $0 + 1 | 0;
            if (($6 | 0) != ($0 | 0)) {
             continue
            }
            break;
           };
           $4 = $2;
           break block1;
          }
          $0 = $6 - 8 | 0;
          $3 = 0;
         }
         while (1) {
          $7 = $3 + $5 | 0;
          $12 = HEAP32[$7 >> 2];
          $7 = HEAP32[$7 + 4 >> 2];
          if (((16843008 - ($12 ^ 168430090) | $12) & (16843008 - ($7 ^ 168430090) | $7) & -2139062144) != -2139062144) {
           break block6
          }
          $3 = $3 + 8 | 0;
          if ($0 >>> 0 >= $3 >>> 0) {
           continue
          }
          break;
         };
        }
        if (($3 | 0) == ($6 | 0)) {
         $4 = $2;
         break block1;
        }
        $6 = $3 + $5 | 0;
        $7 = ($2 - $3 | 0) - $4 | 0;
        $0 = 0;
        block9 : {
         while (1) {
          if (HEAPU8[$0 + $6 | 0] == 10) {
           break block9
          }
          $0 = $0 + 1 | 0;
          if (($7 | 0) != ($0 | 0)) {
           continue
          }
          break;
         };
         $4 = $2;
         break block1;
        }
        $0 = $0 + $3 | 0;
       }
       $3 = $0 + $4 | 0;
       $4 = $3 + 1 | 0;
       block10 : {
        if ($2 >>> 0 <= $3 >>> 0) {
         break block10
        }
        if (HEAPU8[$0 + $5 | 0] != 10) {
         break block10
        }
        $6 = 0;
        $5 = $4;
        $0 = $5;
        break block11;
       }
       if ($2 >>> 0 >= $4 >>> 0) {
        continue
       }
       break;
      };
     }
     if (($2 | 0) == ($8 | 0)) {
      break block
     }
     $6 = 1;
     $5 = $8;
     $0 = $2;
    }
    block13 : {
     if (HEAPU8[$11 | 0]) {
      if (FUNCTION_TABLE[HEAP32[$9 + 12 >> 2]]($10, 1054128, 4) | 0) {
       break block13
      }
     }
     $7 = $0 - $8 | 0;
     $3 = 0;
     if (($0 | 0) != ($8 | 0)) {
      $3 = HEAPU8[($0 + $1 | 0) - 1 | 0] == 10
     }
     $0 = $1 + $8 | 0;
     HEAP8[$11 | 0] = $3;
     $8 = $5;
     if (!(FUNCTION_TABLE[HEAP32[$9 + 12 >> 2]]($10, $0, $7) | 0)) {
      continue
     }
    }
    break;
   };
   $13 = 1;
  }
  return $13 | 0;
 }
 
 function _RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write10write_char($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = HEAP32[$0 + 4 >> 2];
  $3 = HEAP32[$0 >> 2];
  block : {
   $0 = HEAP32[$0 + 8 >> 2];
   if (!HEAPU8[$0 | 0]) {
    break block
   }
   if (!(FUNCTION_TABLE[HEAP32[$2 + 12 >> 2]]($3, 1054128, 4) | 0)) {
    break block
   }
   return 1;
  }
  HEAP8[$0 | 0] = ($1 | 0) == 10;
  return FUNCTION_TABLE[HEAP32[$2 + 16 >> 2]]($3, $1) | 0;
 }
 
 function _RNvYNtNtNtCsedhpoW0refZ_4core3fmt8builders10PadAdapterNtB6_5Write9write_fmtB8_($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  if ($2 & 1) {
   return _RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write9write_str($0, $1, $2 >>> 1 | 0) | 0
  }
  return _RNvNtCsedhpoW0refZ_4core3fmt5write($0, 1051812, $1, $2) | 0;
 }
 
 function _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($0, $1, $2, $3, $4, $5) {
  var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  $7 = HEAP32[$0 + 8 >> 2];
  $6 = $7 & 2097152;
  $8 = $6 ? 43 : -1;
  $11 = ($1 ? $6 >>> 21 | 0 : 1) + $5 | 0;
  block1 : {
   if (!($7 & 8388608)) {
    $2 = 0;
    break block1;
   }
   $6 = 0;
   block3 : {
    if (!$3) {
     break block3
    }
    $6 = HEAP8[$2 | 0] > -65;
    if (($3 | 0) == 1) {
     break block3
    }
    $6 = (HEAP8[$2 + 1 | 0] > -65) + $6 | 0;
   }
   $11 = $6 + $11 | 0;
  }
  $13 = $1 ? $8 : 45;
  $9 = HEAPU16[$0 + 12 >> 1];
  block10 : {
   if ($11 >>> 0 < $9 >>> 0) {
    block11 : {
     block9 : {
      if (!($7 & 16777216)) {
       $8 = $9 - $11 | 0;
       $1 = 0;
       $6 = 0;
       block6 : {
        block8 : {
         switch (($7 >>> 29 & 3) - 1 | 0) {
         case 0:
         case 2:
          $6 = $8;
          break block6;
         case 1:
          break block8;
         default:
          break block6;
         };
        }
        $6 = ($8 & 65534) >>> 1 | 0;
       }
       $7 = $7 & 2097151;
       $9 = HEAP32[$0 + 4 >> 2];
       $10 = HEAP32[$0 >> 2];
       while (1) {
        if (($1 & 65535) >>> 0 >= ($6 & 65535) >>> 0) {
         break block9
        }
        $12 = 1;
        $1 = $1 + 1 | 0;
        if (!(FUNCTION_TABLE[HEAP32[$9 + 16 >> 2]]($10, $7) | 0)) {
         continue
        }
        break;
       };
       break block10;
      }
      $6 = HEAP32[$0 + 12 >> 2];
      $8 = HEAP32[$0 + 8 >> 2];
      HEAP32[$0 + 8 >> 2] = $8 & -1612709888 | 536870960;
      $12 = 1;
      $10 = HEAP32[$0 >> 2];
      $7 = HEAP32[$0 + 4 >> 2];
      if (_RNvNvMsa_NtCsedhpoW0refZ_4core3fmtNtB7_9Formatter12pad_integral12write_prefix($10, $7, $13, $2, $3)) {
       break block10
      }
      $1 = 0;
      $2 = $9 - $11 & 65535;
      while (1) {
       if ($2 >>> 0 <= ($1 & 65535) >>> 0) {
        break block11
       }
       $1 = $1 + 1 | 0;
       if (!(FUNCTION_TABLE[HEAP32[$7 + 16 >> 2]]($10, 48) | 0)) {
        continue
       }
       break;
      };
      break block10;
     }
     $12 = 1;
     if (_RNvNvMsa_NtCsedhpoW0refZ_4core3fmtNtB7_9Formatter12pad_integral12write_prefix($10, $9, $13, $2, $3)) {
      break block10
     }
     if (FUNCTION_TABLE[HEAP32[$9 + 12 >> 2]]($10, $4, $5) | 0) {
      break block10
     }
     $0 = $8 - $6 & 65535;
     $1 = 0;
     while (1) {
      if (($1 & 65535) >>> 0 >= $0 >>> 0) {
       return 0
      }
      $1 = $1 + 1 | 0;
      if (!(FUNCTION_TABLE[HEAP32[$9 + 16 >> 2]]($10, $7) | 0)) {
       continue
      }
      break;
     };
     break block10;
    }
    if (FUNCTION_TABLE[HEAP32[$7 + 12 >> 2]]($10, $4, $5) | 0) {
     break block10
    }
    HEAP32[$0 + 8 >> 2] = $8;
    HEAP32[$0 + 12 >> 2] = $6;
    return 0;
   }
   $12 = 1;
   $1 = HEAP32[$0 >> 2];
   $0 = HEAP32[$0 + 4 >> 2];
   if (_RNvNvMsa_NtCsedhpoW0refZ_4core3fmtNtB7_9Formatter12pad_integral12write_prefix($1, $0, $13, $2, $3)) {
    break block10
   }
   $12 = FUNCTION_TABLE[HEAP32[$0 + 12 >> 2]]($1, $4, $5) | 0;
  }
  return $12;
 }
 
 function _RNvNvMsa_NtCsedhpoW0refZ_4core3fmtNtB7_9Formatter12pad_integral12write_prefix($0, $1, $2, $3, $4) {
  block : {
   if (($2 | 0) == -1) {
    break block
   }
   if (!(FUNCTION_TABLE[HEAP32[$1 + 16 >> 2]]($0, $2) | 0)) {
    break block
   }
   return 1;
  }
  if (!$3) {
   return 0
  }
  return FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $3, $4) | 0;
 }
 
 function _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRyNtB6_5Debug3fmtB8_($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $4 = __stack_pointer - 16 | 0;
  __stack_pointer = $4;
  $0 = HEAP32[$0 >> 2];
  block2 : {
   block1 : {
    $2 = HEAP32[$1 + 8 >> 2];
    if (!($2 & 33554432)) {
     if ($2 & 67108864) {
      break block1
     }
     $0 = _RNvXsd_NtNtNtCsedhpoW0refZ_4core3fmt3num3impyNtB9_7Display3fmt($0, $1);
     break block2;
    }
    $3 = HEAP32[$0 >> 2];
    $2 = HEAP32[$0 + 4 >> 2];
    $0 = 17;
    while (1) {
     HEAP8[($0 + $4 | 0) - 2 | 0] = HEAPU8[($3 & 15) + 1051580 | 0];
     $0 = $0 - 1 | 0;
     $3 = ($2 & 15) << 28 | $3 >>> 4;
     $2 = $2 >>> 4 | 0;
     if ($3 | $2) {
      continue
     }
     break;
    };
    $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054132, 2, ($0 + $4 | 0) - 1 | 0, 17 - $0 | 0);
    break block2;
   }
   $3 = HEAP32[$0 >> 2];
   $2 = HEAP32[$0 + 4 >> 2];
   $0 = 17;
   while (1) {
    HEAP8[($0 + $4 | 0) - 2 | 0] = HEAPU8[($3 & 15) + 1054134 | 0];
    $0 = $0 - 1 | 0;
    $3 = ($2 & 15) << 28 | $3 >>> 4;
    $2 = $2 >>> 4 | 0;
    if ($3 | $2) {
     continue
    }
    break;
   };
   $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054132, 2, ($0 + $4 | 0) - 1 | 0, 17 - $0 | 0);
  }
  __stack_pointer = $4 + 16 | 0;
  return $0 | 0;
 }
 
 function _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail($0, $1, $2, $3) {
  var $4 = 0;
  $4 = __stack_pointer - 32 | 0;
  __stack_pointer = $4;
  folding_inner0 : {
   block2 : {
    block1 : {
     if ($0 >>> 0 <= $2 >>> 0) {
      if ($1 >>> 0 > $2 >>> 0) {
       break block1
      }
      if ($0 >>> 0 <= $1 >>> 0) {
       break block2
      }
      HEAP32[$4 + 8 >> 2] = $0;
      HEAP32[$4 + 12 >> 2] = $1;
      HEAP32[$4 + 24 >> 2] = $4 + 12;
      HEAP32[$4 + 28 >> 2] = 3;
      HEAP32[$4 + 16 >> 2] = $4 + 8;
      HEAP32[$4 + 20 >> 2] = 3;
      _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1048929, $4 + 16 | 0, $3);
      wasm2js_trap();
     }
     HEAP32[$4 + 8 >> 2] = $0;
     HEAP32[$4 + 12 >> 2] = $2;
     HEAP32[$4 + 24 >> 2] = $4 + 12;
     $0 = 3;
     HEAP32[$4 + 28 >> 2] = $0;
     HEAP32[$4 + 16 >> 2] = $4 + 8;
     HEAP32[$4 + 20 >> 2] = 3;
     _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049129, $4 + 16 | 0, $3);
     wasm2js_trap();
    }
    HEAP32[$4 + 8 >> 2] = $1;
    HEAP32[$4 + 12 >> 2] = $2;
    HEAP32[$4 + 24 >> 2] = $4 + 12;
    $0 = 3;
    HEAP32[$4 + 28 >> 2] = $0;
    break folding_inner0;
   }
   HEAP32[$4 + 8 >> 2] = $1;
   HEAP32[$4 + 12 >> 2] = $2;
   HEAP32[$4 + 24 >> 2] = $4 + 12;
   HEAP32[$4 + 28 >> 2] = 3;
  }
  HEAP32[$4 + 16 >> 2] = $4 + 8;
  HEAP32[$4 + 20 >> 2] = 3;
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049186, $4 + 16 | 0, $3);
  wasm2js_trap();
 }
 
 function _RNvMs1_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_11DebugStruct5field($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  $5 = __stack_pointer - 32 | 0;
  __stack_pointer = $5;
  $8 = 1;
  block : {
   if (HEAPU8[$0 + 4 | 0]) {
    break block
   }
   $7 = HEAPU8[$0 + 5 | 0];
   $6 = HEAP32[$0 >> 2];
   if (!(HEAPU8[$6 + 10 | 0] & 128)) {
    $7 = $7 & 1;
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 4 >> 2] + 12 >> 2]](HEAP32[$6 >> 2], $7 ? 1051679 : 1051676, $7 ? 2 : 3) | 0) {
     break block
    }
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 4 >> 2] + 12 >> 2]](HEAP32[$6 >> 2], $1, $2) | 0) {
     break block
    }
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 4 >> 2] + 12 >> 2]](HEAP32[$6 >> 2], 1051681, 2) | 0) {
     break block
    }
    $8 = FUNCTION_TABLE[$4 | 0]($3, $6) | 0;
    break block;
   }
   if (!($7 & 1)) {
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 4 >> 2] + 12 >> 2]](HEAP32[$6 >> 2], 1051683, 3) | 0) {
     break block
    }
   }
   HEAP8[$5 + 15 | 0] = 1;
   HEAP32[$5 + 20 >> 2] = 1051812;
   $7 = HEAP32[$6 + 4 >> 2];
   HEAP32[$5 >> 2] = HEAP32[$6 >> 2];
   HEAP32[$5 + 4 >> 2] = $7;
   $7 = HEAP32[$6 + 12 >> 2];
   HEAP32[$5 + 24 >> 2] = HEAP32[$6 + 8 >> 2];
   HEAP32[$5 + 28 >> 2] = $7;
   HEAP32[$5 + 8 >> 2] = $5 + 15;
   HEAP32[$5 + 16 >> 2] = $5;
   if (_RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write9write_str($5, $1, $2)) {
    break block
   }
   if (_RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write9write_str($5, 1051681, 2)) {
    break block
   }
   if (FUNCTION_TABLE[$4 | 0]($3, $5 + 16 | 0) | 0) {
    break block
   }
   $8 = FUNCTION_TABLE[HEAP32[HEAP32[$5 + 20 >> 2] + 12 >> 2]](HEAP32[$5 + 16 >> 2], 1051686, 2) | 0;
  }
  HEAP8[$0 + 5 | 0] = 1;
  HEAP8[$0 + 4 | 0] = $8;
  __stack_pointer = $5 + 32 | 0;
  return $0;
 }
 
 function _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $3 = __stack_pointer - 160 | 0;
  __stack_pointer = $3;
  $9 = memset($3, 0, 160);
  block6 : {
   block3 : {
    block1 : {
     block2 : {
      $5 = HEAP32[$0 + 160 >> 2];
      if ($2 >>> 0 <= $5 >>> 0) {
       if ($5 >>> 0 >= 41) {
        break block1
       }
       $17 = $5 + 1 | 0;
       $15 = $5 << 2;
       $18 = ($2 << 2) + $1 | 0;
       while (1) {
        $3 = ($7 << 2) + $9 | 0;
        while (1) {
         $2 = $7;
         $6 = $3;
         if (($1 | 0) == ($18 | 0)) {
          break block2
         }
         $3 = $3 + 4 | 0;
         $7 = $2 + 1 | 0;
         $16 = HEAP32[$1 >> 2];
         $8 = $1 + 4 | 0;
         $1 = $8;
         if (!$16) {
          continue
         }
         break;
        };
        $4 = 0;
        $10 = $15;
        $1 = $2;
        $3 = $0;
        while (1) {
         if ($1 >>> 0 >= 40) {
          break block3
         }
         $12 = HEAP32[$6 >> 2];
         $4 = $4 + $12 | 0;
         $13 = __wasm_i64_mul(HEAP32[$3 >> 2], 0, $16, 0);
         $14 = $4 + $13 | 0;
         $4 = i64toi32_i32$HIGH_BITS + ($4 >>> 0 < $12 >>> 0) | 0;
         $4 = $14 >>> 0 < $13 >>> 0 ? $4 + 1 | 0 : $4;
         HEAP32[$6 >> 2] = $14;
         $6 = $6 + 4 | 0;
         $1 = $1 + 1 | 0;
         $3 = $3 + 4 | 0;
         $10 = $10 - 4 | 0;
         if ($10) {
          continue
         }
         break;
        };
        block5 : {
         if ($4) {
          $1 = $2 + $5 | 0;
          if ($1 >>> 0 >= 40) {
           break block5
          }
          HEAP32[($1 << 2) + $9 >> 2] = $4;
          $1 = $17;
         } else {
          $1 = $5
         }
         $1 = $1 + $2 | 0;
         $11 = $1 >>> 0 < $11 >>> 0 ? $11 : $1;
         $1 = $8;
         continue;
        }
        break;
       };
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, 40, 1051764);
       wasm2js_trap();
      }
      $17 = $2 + 1 | 0;
      $16 = $2 << 2;
      $18 = ($5 << 2) + $0 | 0;
      $3 = $0;
      while (1) {
       $7 = ($10 << 2) + $9 | 0;
       while (1) {
        $8 = $10;
        $6 = $7;
        if (($3 | 0) == ($18 | 0)) {
         break block2
        }
        $7 = $6 + 4 | 0;
        $10 = $8 + 1 | 0;
        $14 = HEAP32[$3 >> 2];
        $15 = $3 + 4 | 0;
        $3 = $15;
        if (!$14) {
         continue
        }
        break;
       };
       $4 = 0;
       $5 = $16;
       $3 = $8;
       $7 = $1;
       while (1) {
        if ($3 >>> 0 >= 40) {
         break block6
        }
        $12 = HEAP32[$6 >> 2];
        $4 = $4 + $12 | 0;
        $13 = __wasm_i64_mul(HEAP32[$7 >> 2], 0, $14, 0);
        $19 = $4 + $13 | 0;
        HEAP32[$6 >> 2] = $19;
        $4 = i64toi32_i32$HIGH_BITS + ($4 >>> 0 < $12 >>> 0) | 0;
        $4 = $13 >>> 0 > $19 >>> 0 ? $4 + 1 | 0 : $4;
        $6 = $6 + 4 | 0;
        $3 = $3 + 1 | 0;
        $7 = $7 + 4 | 0;
        $5 = $5 - 4 | 0;
        if ($5) {
         continue
        }
        break;
       };
       block8 : {
        if ($4) {
         $3 = $2 + $8 | 0;
         if ($3 >>> 0 >= 40) {
          break block8
         }
         HEAP32[($3 << 2) + $9 >> 2] = $4;
         $3 = $17;
        } else {
         $3 = $2
        }
        $3 = $3 + $8 | 0;
        $11 = $3 >>> 0 < $11 >>> 0 ? $11 : $3;
        $3 = $15;
        continue;
       }
       break;
      };
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, 40, 1051764);
      wasm2js_trap();
     }
     (wasm2js_i32$0 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $9, 160), wasm2js_i32$1 = $11), HEAP32[wasm2js_i32$0 + 160 >> 2] = wasm2js_i32$1;
     __stack_pointer = $9 + 160 | 0;
     return;
    }
    _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $5, 40, 1051764);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, 40, 1051764);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, 40, 1051764);
  wasm2js_trap();
 }
 
 function _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  block7 : {
   block2 : {
    block6 : {
     if ($1 >>> 0 < 1280) {
      $5 = $1 >>> 5 | 0;
      block3 : {
       $2 = HEAP32[$0 + 160 >> 2];
       if ($2) {
        $3 = $2 - 1 | 0;
        $7 = (($2 << 2) + $0 | 0) - 4 | 0;
        $4 = (($2 + $5 << 2) + $0 | 0) - 4 | 0;
        $2 = $2 >>> 0 > 40;
        while (1) {
         if ($2) {
          break block2
         }
         $6 = $3 + $5 | 0;
         if ($6 >>> 0 >= 40) {
          break block3
         }
         HEAP32[$4 >> 2] = HEAP32[$7 >> 2];
         $4 = $4 - 4 | 0;
         $7 = $7 - 4 | 0;
         $3 = $3 - 1 | 0;
         if (($3 | 0) != -1) {
          continue
         }
         break;
        };
       }
       $4 = $1 & 31;
       if ($5) {
        memset($0, 0, $5 << 2)
       }
       $3 = HEAP32[$0 + 160 >> 2];
       $1 = $3 + $5 | 0;
       if (!$4) {
        HEAP32[$0 + 160 >> 2] = $1;
        return $0;
       }
       $2 = $1 - 1 | 0;
       if ($2 >>> 0 > 39) {
        break block6
       }
       $7 = $1;
       $6 = 32 - $4 | 0;
       $2 = HEAP32[($2 << 2) + $0 >> 2] >>> $6 | 0;
       if (!$2) {
        break block7
       }
       if ($1 >>> 0 <= 39) {
        HEAP32[($1 << 2) + $0 >> 2] = $2;
        $7 = $1 + 1 | 0;
        break block7;
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, 40, 1051764);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, 40, 1051764);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051780, 29, 1051764);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($2, 40, 1051764);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, 40, 1051764);
   wasm2js_trap();
  }
  $9 = $5 + 1 | 0;
  block9 : {
   if ($1 >>> 0 <= $9 >>> 0) {
    break block9
   }
   block11 : {
    if ($3 & 1) {
     $2 = $1;
     break block11;
    }
    $2 = $1 - 1 | 0;
    $8 = ($2 << 2) + $0 | 0;
    HEAP32[$8 >> 2] = HEAP32[$8 >> 2] << $4 | HEAP32[(($1 << 2) + $0 | 0) - 8 >> 2] >>> $6;
   }
   if (($3 | 0) == 2) {
    break block9
   }
   $3 = (($2 << 2) + $0 | 0) - 12 | 0;
   while (1) {
    $1 = $3 + 8 | 0;
    $8 = $3 + 4 | 0;
    $10 = HEAP32[$8 >> 2];
    HEAP32[$1 >> 2] = HEAP32[$1 >> 2] << $4 | $10 >>> $6;
    HEAP32[$8 >> 2] = $10 << $4 | HEAP32[$3 >> 2] >>> $6;
    $3 = $3 - 8 | 0;
    $2 = $2 - 2 | 0;
    if ($9 >>> 0 < $2 >>> 0) {
     continue
    }
    break;
   };
  }
  $1 = ($5 << 2) + $0 | 0;
  HEAP32[$1 >> 2] = HEAP32[$1 >> 2] << $4;
  HEAP32[$0 + 160 >> 2] = $7;
  return $0;
 }
 
 function _RNvNtNtCsedhpoW0refZ_4core9panicking11panic_const23panic_const_div_by_zero($0) {
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1052103, 51, $0);
  wasm2js_trap();
 }
 
 function _RNvNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec17digits_to_dec_str($0, $1, $2, $3, $4, $5) {
  var $6 = 0;
  block1 : {
   if ($2) {
    if (HEAPU8[$1 | 0] <= 48) {
     break block1
    }
    HEAP16[$5 >> 1] = 2;
    block5 : {
     block6 : {
      block3 : {
       block4 : {
        $6 = $3 << 16 >> 16;
        if (($6 | 0) > 0) {
         HEAP32[$5 + 4 >> 2] = $1;
         $3 = $3 & 65535;
         if ($3 >>> 0 < $2 >>> 0) {
          break block3
         }
         HEAP16[$5 + 12 >> 1] = 0;
         HEAP32[$5 + 8 >> 2] = $2;
         HEAP32[$5 + 16 >> 2] = $3 - $2;
         if ($4) {
          break block4
         }
         $1 = 2;
         break block5;
        }
        HEAP32[$5 + 32 >> 2] = $2;
        HEAP32[$5 + 28 >> 2] = $1;
        HEAP16[$5 + 24 >> 1] = 2;
        HEAP16[$5 + 12 >> 1] = 0;
        HEAP32[$5 + 8 >> 2] = 2;
        HEAP32[$5 + 4 >> 2] = 1051621;
        $3 = 0 - $6 | 0;
        HEAP32[$5 + 16 >> 2] = $3;
        $1 = 3;
        if ($2 >>> 0 >= $4 >>> 0) {
         break block5
        }
        $2 = $4 - $2 | 0;
        if ($2 >>> 0 <= $3 >>> 0) {
         break block5
        }
        $4 = $2 + $6 | 0;
        break block6;
       }
       HEAP32[$5 + 32 >> 2] = 1;
       HEAP32[$5 + 28 >> 2] = 1052102;
       HEAP16[$5 + 24 >> 1] = 2;
       break block6;
      }
      HEAP16[$5 + 24 >> 1] = 2;
      HEAP32[$5 + 20 >> 2] = 1;
      HEAP32[$5 + 16 >> 2] = 1052102;
      HEAP16[$5 + 12 >> 1] = 2;
      HEAP32[$5 + 8 >> 2] = $3;
      $2 = $2 - $3 | 0;
      HEAP32[$5 + 32 >> 2] = $2;
      HEAP32[$5 + 28 >> 2] = $1 + $3;
      if ($2 >>> 0 >= $4 >>> 0) {
       $1 = 3;
       break block5;
      }
      $4 = $4 - $2 | 0;
     }
     HEAP32[$5 + 40 >> 2] = $4;
     HEAP16[$5 + 36 >> 1] = 0;
     $1 = 4;
    }
    HEAP32[$0 + 4 >> 2] = $1;
    HEAP32[$0 >> 2] = $5;
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1052128, 33, 1052164);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1052180, 31, 1052212);
  wasm2js_trap();
 }
 
 function _RNvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared9smallsort22panic_on_ord_violation() {
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1052228, 153, 1052304);
  wasm2js_trap();
 }
 
 function _RNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy6dragon9mul_pow10($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  folding_inner2 : {
   folding_inner1 : {
    block1 : {
     if ($1 >>> 0 >= 8) {
      $5 = $1 & 7;
      if (!$5) {
       break block1
      }
      $7 = HEAP32[$0 + 160 >> 2];
      if ($7 >>> 0 >= 41) {
       break folding_inner2
      }
      if (!$7) {
       HEAP32[$0 + 160 >> 2] = 0;
       break block1;
      }
      $9 = $7 << 2;
      $6 = $9 - 4 | 0;
      $4 = ($6 >>> 2 | 0) + 1 | 0;
      $2 = $4 & 3;
      $8 = HEAP32[($5 << 2) + 1053884 >> 2] >>> $5 | 0;
      $5 = $0;
      block5 : {
       if ($6 >>> 0 >= 12) {
        $6 = $4 & 2147483644;
        while (1) {
         $4 = __wasm_i64_mul(HEAP32[$5 >> 2], 0, $8, 0);
         $10 = i64toi32_i32$HIGH_BITS;
         $4 = $3 + $4 | 0;
         $3 = $4 >>> 0 < $3 >>> 0 ? $10 + 1 | 0 : $10;
         HEAP32[$5 >> 2] = $4;
         $4 = $5 + 4 | 0;
         $10 = $4;
         $4 = __wasm_i64_mul(HEAP32[$4 >> 2], 0, $8, 0) + $3 | 0;
         $11 = i64toi32_i32$HIGH_BITS;
         $3 = $3 >>> 0 > $4 >>> 0 ? $11 + 1 | 0 : $11;
         HEAP32[$10 >> 2] = $4;
         $4 = $5 + 8 | 0;
         $11 = $4;
         $4 = __wasm_i64_mul(HEAP32[$4 >> 2], 0, $8, 0) + $3 | 0;
         $10 = i64toi32_i32$HIGH_BITS;
         HEAP32[$11 >> 2] = $4;
         $11 = $5 + 12 | 0;
         $3 = $3 >>> 0 > $4 >>> 0 ? $10 + 1 | 0 : $10;
         $4 = __wasm_i64_mul(HEAP32[$11 >> 2], 0, $8, 0) + $3 | 0;
         HEAP32[$11 >> 2] = $4;
         $10 = i64toi32_i32$HIGH_BITS;
         $3 = $3 >>> 0 > $4 >>> 0 ? $10 + 1 | 0 : $10;
         $5 = $5 + 16 | 0;
         $6 = $6 - 4 | 0;
         if ($6) {
          continue
         }
         break;
        };
        if (!$2) {
         break block5
        }
       }
       $6 = $2 << 2;
       while (1) {
        $2 = __wasm_i64_mul(HEAP32[$5 >> 2], 0, $8, 0);
        $4 = i64toi32_i32$HIGH_BITS;
        $2 = $3 + $2 | 0;
        $3 = $2 >>> 0 < $3 >>> 0 ? $4 + 1 | 0 : $4;
        HEAP32[$5 >> 2] = $2;
        $5 = $5 + 4 | 0;
        $6 = $6 - 4 | 0;
        if ($6) {
         continue
        }
        break;
       };
      }
      if ($3) {
       if (($7 | 0) == 40) {
        break folding_inner1
       }
       HEAP32[$0 + $9 >> 2] = $3;
       $7 = $7 + 1 | 0;
      }
      HEAP32[$0 + 160 >> 2] = $7;
      break block1;
     }
     $7 = HEAP32[$0 + 160 >> 2];
     if ($7 >>> 0 < 41) {
      if (!$7) {
       HEAP32[$0 + 160 >> 2] = 0;
       return;
      }
      $1 = HEAP32[($1 << 2) + 1053884 >> 2];
      $10 = $7 << 2;
      $6 = $10 - 4 | 0;
      $2 = ($6 >>> 2 | 0) + 1 | 0;
      $8 = $2 & 3;
      $5 = $0;
      block11 : {
       if ($6 >>> 0 >= 12) {
        $6 = $2 & 2147483644;
        while (1) {
         $2 = __wasm_i64_mul(HEAP32[$5 >> 2], 0, $1, 0);
         $4 = i64toi32_i32$HIGH_BITS;
         $2 = $3 + $2 | 0;
         $3 = $2 >>> 0 < $3 >>> 0 ? $4 + 1 | 0 : $4;
         HEAP32[$5 >> 2] = $2;
         $2 = $5 + 4 | 0;
         $4 = $2;
         $2 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, $1, 0) + $3 | 0;
         $9 = i64toi32_i32$HIGH_BITS;
         $3 = $3 >>> 0 > $2 >>> 0 ? $9 + 1 | 0 : $9;
         HEAP32[$4 >> 2] = $2;
         $2 = $5 + 8 | 0;
         $9 = $2;
         $2 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, $1, 0) + $3 | 0;
         $4 = i64toi32_i32$HIGH_BITS;
         HEAP32[$9 >> 2] = $2;
         $9 = $5 + 12 | 0;
         $3 = $3 >>> 0 > $2 >>> 0 ? $4 + 1 | 0 : $4;
         $2 = __wasm_i64_mul(HEAP32[$9 >> 2], 0, $1, 0) + $3 | 0;
         HEAP32[$9 >> 2] = $2;
         $4 = i64toi32_i32$HIGH_BITS;
         $3 = $3 >>> 0 > $2 >>> 0 ? $4 + 1 | 0 : $4;
         $5 = $5 + 16 | 0;
         $6 = $6 - 4 | 0;
         if ($6) {
          continue
         }
         break;
        };
        if (!$8) {
         break block11
        }
       }
       $6 = $8 << 2;
       while (1) {
        $8 = __wasm_i64_mul(HEAP32[$5 >> 2], 0, $1, 0);
        $2 = i64toi32_i32$HIGH_BITS;
        $8 = $3 + $8 | 0;
        $3 = $8 >>> 0 < $3 >>> 0 ? $2 + 1 | 0 : $2;
        HEAP32[$5 >> 2] = $8;
        $5 = $5 + 4 | 0;
        $6 = $6 - 4 | 0;
        if ($6) {
         continue
        }
        break;
       };
      }
      if ($3) {
       if (($7 | 0) == 40) {
        break folding_inner1
       }
       HEAP32[$0 + $10 >> 2] = $3;
       $7 = $7 + 1 | 0;
      }
      HEAP32[$0 + 160 >> 2] = $7;
      return;
     }
     break folding_inner2;
    }
    block20 : {
     if ($1 & 8) {
      $7 = HEAP32[$0 + 160 >> 2];
      if ($7 >>> 0 >= 41) {
       break folding_inner2
      }
      block17 : {
       if (!$7) {
        $7 = 0;
        break block17;
       }
       $10 = $7 << 2;
       $6 = $10 - 4 | 0;
       $2 = ($6 >>> 2 | 0) + 1 | 0;
       $8 = $2 & 3;
       $3 = 0;
       $5 = $0;
       block19 : {
        if ($6 >>> 0 >= 12) {
         $6 = $2 & 2147483644;
         while (1) {
          $2 = __wasm_i64_mul(HEAP32[$5 >> 2], 0, 390625, 0);
          $4 = i64toi32_i32$HIGH_BITS;
          $2 = $3 + $2 | 0;
          $3 = $2 >>> 0 < $3 >>> 0 ? $4 + 1 | 0 : $4;
          HEAP32[$5 >> 2] = $2;
          $2 = $5 + 4 | 0;
          $4 = $2;
          $2 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, 390625, 0) + $3 | 0;
          $9 = i64toi32_i32$HIGH_BITS;
          $3 = $3 >>> 0 > $2 >>> 0 ? $9 + 1 | 0 : $9;
          HEAP32[$4 >> 2] = $2;
          $2 = $5 + 8 | 0;
          $9 = $2;
          $2 = __wasm_i64_mul(HEAP32[$2 >> 2], 0, 390625, 0) + $3 | 0;
          $4 = i64toi32_i32$HIGH_BITS;
          HEAP32[$9 >> 2] = $2;
          $9 = $5 + 12 | 0;
          $3 = $3 >>> 0 > $2 >>> 0 ? $4 + 1 | 0 : $4;
          $2 = __wasm_i64_mul(HEAP32[$9 >> 2], 0, 390625, 0) + $3 | 0;
          HEAP32[$9 >> 2] = $2;
          $4 = i64toi32_i32$HIGH_BITS;
          $3 = $3 >>> 0 > $2 >>> 0 ? $4 + 1 | 0 : $4;
          $5 = $5 + 16 | 0;
          $6 = $6 - 4 | 0;
          if ($6) {
           continue
          }
          break;
         };
         if (!$8) {
          break block19
         }
        }
        $6 = $8 << 2;
        while (1) {
         $8 = __wasm_i64_mul(HEAP32[$5 >> 2], 0, 390625, 0);
         $2 = i64toi32_i32$HIGH_BITS;
         $8 = $3 + $8 | 0;
         $3 = $8 >>> 0 < $3 >>> 0 ? $2 + 1 | 0 : $2;
         HEAP32[$5 >> 2] = $8;
         $5 = $5 + 4 | 0;
         $6 = $6 - 4 | 0;
         if ($6) {
          continue
         }
         break;
        };
       }
       if (!$3) {
        break block17
       }
       if (($7 | 0) == 40) {
        break block20
       }
       HEAP32[$0 + $10 >> 2] = $3;
       $7 = $7 + 1 | 0;
      }
      HEAP32[$0 + 160 >> 2] = $7;
     }
     if ($1 & 16) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1053924, 2)
     }
     if ($1 & 32) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1053932, 3)
     }
     if ($1 & 64) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1053944, 5)
     }
     if ($1 & 128) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1053964, 10)
     }
     if ($1 & 256) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1054004, 19)
     }
     _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($0, $1);
     return;
    }
    break folding_inner1;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(40, 40, 1051764);
   wasm2js_trap();
  }
  _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $7, 40, 1051764);
  wasm2js_trap();
 }
 
 function _RNvNvNtNtNtNtNtCsedhpoW0refZ_4core3num3imp7flt2dec8strategy5grisu16format_exact_opt14possibly_round($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) {
  var $12 = 0, $13 = 0, $14 = 0;
  block4 : {
   block11 : {
    block10 : {
     block1 : {
      block3 : {
       block5 : {
        if (!(($9 | 0) == ($11 | 0) & $8 >>> 0 <= $10 >>> 0 | $9 >>> 0 < $11 >>> 0)) {
         $12 = $9 - (($8 >>> 0 < $10 >>> 0) + $11 | 0) | 0;
         if (($11 | 0) == ($12 | 0) & $10 >>> 0 >= $8 - $10 >>> 0 | $11 >>> 0 > $12 >>> 0) {
          break block1
         }
         $12 = $9 - (($6 >>> 0 > $8 >>> 0) + $7 | 0) | 0;
         if (!(($7 | 0) == ($12 | 0) & $6 >>> 0 >= $8 - $6 >>> 0 | $7 >>> 0 > $12 >>> 0)) {
          $12 = $7 << 1 | $6 >>> 31;
          $13 = $6 << 1;
          $14 = $8 - $13 | 0;
          $13 = $9 - (($8 >>> 0 < $13 >>> 0) + $12 | 0) | 0;
          $12 = $11 << 1 | $10 >>> 31;
          if (($13 | 0) == ($12 | 0) & $10 << 1 >>> 0 <= $14 >>> 0 | $12 >>> 0 < $13 >>> 0) {
           break block3
          }
         }
         if (($7 | 0) == ($11 | 0) & $6 >>> 0 <= $10 >>> 0 | $7 >>> 0 < $11 >>> 0) {
          break block4
         }
         $13 = $6 - $10 | 0;
         $12 = $8 - $13 | 0;
         $6 = $7 - (($6 >>> 0 < $10 >>> 0) + $11 | 0) | 0;
         $7 = $9 - ($6 + ($8 >>> 0 < $13 >>> 0) | 0) | 0;
         if (($7 | 0) == ($6 | 0) & $12 >>> 0 > $13 >>> 0 | $6 >>> 0 < $7 >>> 0) {
          break block4
         }
         if ($2 >>> 0 >= $3 >>> 0) {
          break block5
         }
         _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, $2, 1054096);
         wasm2js_trap();
        }
        HEAP32[$0 >> 2] = 0;
        return;
       }
       $9 = $1 + $3 | 0;
       $6 = $3;
       block7 : {
        block6 : {
         while (1) {
          $7 = $6;
          if (!$6) {
           break block6
          }
          $6 = $6 - 1 | 0;
          $8 = $6 + $1 | 0;
          if (HEAPU8[$8 | 0] == 57) {
           continue
          }
          break;
         };
         HEAP8[$8 | 0] = HEAPU8[$8 | 0] + 1;
         memset($1 + $7 | 0, 48, $3 - $7 | 0);
         break block7;
        }
        if ($3) {
         HEAP8[$1 | 0] = 49;
         memset($1 + 1 | 0, 48, $3 - 1 | 0);
         $6 = 48;
        } else {
         $6 = 49
        }
        $4 = ($4 << 16) + 65536 >> 16;
        if (($4 | 0) <= $5 << 16 >> 16) {
         break block7
        }
        if ($2 >>> 0 <= $3 >>> 0) {
         break block7
        }
        HEAP8[$9 | 0] = $6;
        $3 = $3 + 1 | 0;
       }
       if ($2 >>> 0 < $3 >>> 0) {
        break block10
       }
       break block11;
      }
      if ($2 >>> 0 >= $3 >>> 0) {
       break block11
      }
      _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, $2, 1054112);
      wasm2js_trap();
     }
     HEAP32[$0 >> 2] = 0;
     return;
    }
    _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, $2, 1054080);
    wasm2js_trap();
   }
   HEAP16[$0 + 8 >> 1] = $4;
   HEAP32[$0 + 4 >> 2] = $3;
   HEAP32[$0 >> 2] = $1;
   return;
  }
  HEAP32[$0 >> 2] = 0;
 }
 
 function _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter19pad_formatted_parts($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  $4 = HEAPU16[$0 + 12 >> 1];
  block1 : {
   if (!$4) {
    $1 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter21write_formatted_parts(HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2], $1);
    break block1;
   }
   $7 = HEAP32[$1 + 12 >> 2];
   HEAP32[$3 + 8 >> 2] = HEAP32[$1 + 8 >> 2];
   HEAP32[$3 + 12 >> 2] = $7;
   $7 = HEAP32[$1 + 4 >> 2];
   HEAP32[$3 >> 2] = HEAP32[$1 >> 2];
   HEAP32[$3 + 4 >> 2] = $7;
   block4 : {
    $9 = HEAP32[$0 + 12 >> 2];
    $7 = HEAP32[$0 + 8 >> 2];
    $6 = $7;
    block3 : {
     if (!($6 & 16777216)) {
      $5 = HEAP32[$3 + 4 >> 2];
      break block3;
     }
     $1 = HEAP32[$3 + 4 >> 2];
     if (FUNCTION_TABLE[HEAP32[HEAP32[$0 + 4 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], HEAP32[$3 >> 2], $1) | 0) {
      break block4
     }
     $6 = $6 & -1612709888 | 536870960;
     HEAP32[$0 + 8 >> 2] = $6;
     HEAP32[$3 >> 2] = 1;
     HEAP32[$3 + 4 >> 2] = 0;
     $1 = $4 - ($1 & 65535) | 0;
     $4 = $1 >>> 0 <= $4 >>> 0 ? $1 : 0;
     $5 = 0;
    }
    $8 = HEAP32[$3 + 12 >> 2];
    if ($8) {
     $1 = HEAP32[$3 + 8 >> 2];
     while (1) {
      block9 : {
       block10 : {
        block8 : {
         switch (HEAPU16[$1 >> 1] - 1 | 0) {
         default:
          $2 = HEAP32[$1 + 4 >> 2];
          break block9;
         case 0:
          $2 = HEAPU16[$1 + 2 >> 1];
          if ($2) {
           break block10
          }
          $2 = 1;
          break block9;
         case 1:
          break block8;
         };
        }
        $2 = HEAP32[$1 + 8 >> 2];
        break block9;
       }
       $2 = (($2 + 393206 & $2 + 524188 ^ $2 + 916504 & $2 + 514288) >>> 17 | 0) + 1 | 0;
      }
      $2 = $2 + $5 | 0;
      $5 = $5 >>> 0 > $2 >>> 0 ? -1 : $2;
      $1 = $1 + 12 | 0;
      $8 = $8 - 1 | 0;
      if ($8) {
       continue
      }
      break;
     };
    }
    if ($5 >>> 0 >= ($4 & 65535) >>> 0) {
     $1 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter21write_formatted_parts(HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2], $3);
     HEAP32[$0 + 8 >> 2] = $7;
     HEAP32[$0 + 12 >> 2] = $9;
     break block1;
    }
    $5 = $4 - $5 | 0;
    $1 = 0;
    $4 = 0;
    block12 : {
     block14 : {
      switch (($6 >>> 29 & 3) - 1 | 0) {
      case 0:
      case 2:
       $4 = $5;
       break block12;
      case 1:
       break block14;
      default:
       break block12;
      };
     }
     $4 = ($5 & 65534) >>> 1 | 0;
    }
    $8 = $6 & 2097151;
    $6 = HEAP32[$0 + 4 >> 2];
    $2 = HEAP32[$0 >> 2];
    while (1) {
     if (($1 & 65535) >>> 0 < ($4 & 65535) >>> 0) {
      $1 = $1 + 1 | 0;
      if (!(FUNCTION_TABLE[HEAP32[$6 + 16 >> 2]]($2, $8) | 0)) {
       continue
      }
      break block4;
     }
     break;
    };
    if (_RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter21write_formatted_parts($2, $6, $3)) {
     break block4
    }
    $5 = $5 - $4 & 65535;
    $4 = 0;
    while (1) {
     if (($4 & 65535) >>> 0 >= $5 >>> 0) {
      $1 = 0;
      HEAP32[$0 + 8 >> 2] = $7;
      HEAP32[$0 + 12 >> 2] = $9;
      break block1;
     }
     $1 = 1;
     $4 = $4 + 1 | 0;
     if (!(FUNCTION_TABLE[HEAP32[$6 + 16 >> 2]]($2, $8) | 0)) {
      continue
     }
     break;
    };
    HEAP32[$0 + 8 >> 2] = $7;
    HEAP32[$0 + 12 >> 2] = $9;
    break block1;
   }
   $1 = 1;
  }
  __stack_pointer = $3 + 16 | 0;
  return $1;
 }
 
 function _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter21write_formatted_parts($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $5 = __stack_pointer - 16 | 0;
  __stack_pointer = $5;
  block3 : {
   block1 : {
    $3 = HEAP32[$2 + 4 >> 2];
    if ($3) {
     if (FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, HEAP32[$2 >> 2], $3) | 0) {
      break block1
     }
    }
    $3 = HEAP32[$2 + 12 >> 2];
    $4 = 0;
    if (!$3) {
     break block3
    }
    $4 = HEAP32[$2 + 8 >> 2];
    $9 = $4 + Math_imul($3, 12) | 0;
    while (1) {
     block11 : {
      block10 : {
       block9 : {
        block8 : {
         block7 : {
          block6 : {
           switch (HEAPU16[$4 >> 1] - 1 | 0) {
           default:
            $2 = HEAP32[$4 + 4 >> 2];
            if ($2 >>> 0 < 65) {
             break block7
            }
            $3 = HEAP32[$1 + 12 >> 2];
            while (1) {
             if (FUNCTION_TABLE[$3 | 0]($0, 1051836, 64) | 0) {
              break block1
             }
             $2 = $2 + -64 | 0;
             if ($2 >>> 0 > 64) {
              continue
             }
             break;
            };
            break block8;
           case 0:
            $2 = HEAPU16[$4 + 2 >> 1];
            HEAP8[$5 + 12 | 0] = 0;
            HEAP32[$5 + 8 >> 2] = 0;
            if ($2) {
             break block9
            }
            HEAP8[$5 + 8 | 0] = $2 | 48;
            $3 = 1;
            break block10;
           case 1:
            break block6;
           };
          }
          if (!(FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, HEAP32[$4 + 4 >> 2], HEAP32[$4 + 8 >> 2]) | 0)) {
           break block11
          }
          break block1;
         }
         if (!$2) {
          break block11
         }
         $3 = HEAP32[$1 + 12 >> 2];
        }
        if (FUNCTION_TABLE[$3 | 0]($0, 1051836, $2) | 0) {
         break block1
        }
        break block11;
       }
       $7 = ($2 + 393206 & $2 + 524188 ^ $2 + 916504 & $2 + 514288) >>> 17 | 0;
       $6 = $7 + ($5 + 8 | 0) | 0;
       $8 = ($2 >>> 0) / 10 | 0;
       HEAP8[$6 | 0] = $2 - Math_imul($8, 10) | 48;
       $3 = $7 + 1 | 0;
       if (!$7) {
        break block10
       }
       HEAP8[$6 - 1 | 0] = ($8 >>> 0) % 10 | 48;
       if (($3 | 0) == 2) {
        break block10
       }
       HEAP8[$6 - 2 | 0] = (($2 >>> 0) / 100 >>> 0) % 10 | 48;
       if (($3 | 0) == 3) {
        break block10
       }
       HEAP8[$6 - 3 | 0] = (($2 >>> 0) / 1e3 >>> 0) % 10 | 48;
       if (($3 | 0) == 4) {
        break block10
       }
       HEAP8[$6 - 4 | 0] = ($2 >>> 0) / 1e4 | 48;
      }
      if (FUNCTION_TABLE[HEAP32[$1 + 12 >> 2]]($0, $5 + 8 | 0, $3) | 0) {
       break block1
      }
     }
     $4 = $4 + 12 | 0;
     if (($9 | 0) != ($4 | 0)) {
      continue
     }
     break;
    };
    $4 = 0;
    break block3;
   }
   $4 = 1;
  }
  $2 = $4;
  __stack_pointer = $5 + 16 | 0;
  return $2;
 }
 
 function _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable9quicksort9quicksortmNvYmNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0;
  $30 = __stack_pointer - 128 | 0;
  __stack_pointer = $30;
  block2 : {
   block22 : {
    block10 : {
     if ($1 >>> 0 >= 33) {
      while (1) {
       if (!$3) {
        $2 = $1;
        $10 = $2 + ($2 >>> 1 | 0) | 0;
        while (1) {
         $10 = $10 - 1 | 0;
         block1 : {
          if ($2 >>> 0 > $10 >>> 0) {
           $1 = HEAP32[$0 >> 2];
           $3 = ($10 << 2) + $0 | 0;
           HEAP32[$0 >> 2] = HEAP32[$3 >> 2];
           HEAP32[$3 >> 2] = $1;
           $3 = 0;
           break block1;
          }
          $3 = $10 - $2 | 0;
         }
         $7 = $3 << 1;
         $1 = $7 | 1;
         $4 = $2 >>> 0 < $10 >>> 0 ? $2 : $10;
         block20 : {
          if ($1 >>> 0 >= $4 >>> 0) {
           break block20
          }
          while (1) {
           $7 = $7 + 2 | 0;
           if ($7 >>> 0 < $4 >>> 0) {
            $1 = (HEAPU32[($1 << 2) + $0 >> 2] < HEAPU32[($7 << 2) + $0 >> 2]) + $1 | 0
           }
           $7 = ($1 << 2) + $0 | 0;
           $6 = HEAP32[$7 >> 2];
           $3 = ($3 << 2) + $0 | 0;
           $5 = HEAP32[$3 >> 2];
           if ($6 >>> 0 <= $5 >>> 0) {
            break block20
           }
           HEAP32[$7 >> 2] = $5;
           HEAP32[$3 >> 2] = $6;
           $3 = $1;
           $7 = $1 << 1;
           $1 = $7 | 1;
           if ($4 >>> 0 > $1 >>> 0) {
            continue
           }
           break;
          };
         }
         if ($10) {
          continue
         }
         break;
        };
        break block2;
       }
       $4 = $1 >>> 3 | 0;
       $10 = Math_imul($4, 28) + $0 | 0;
       $7 = ($4 << 4) + $0 | 0;
       $3 = $3 - 1 | 0;
       block4 : {
        if ($1 >>> 0 >= 64) {
         $10 = _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recmNvYmNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $7, $10, $4);
         break block4;
        }
        $6 = HEAP32[$0 >> 2];
        $5 = HEAP32[$7 >> 2];
        $4 = $6 >>> 0 < $5 >>> 0;
        $8 = $10;
        $10 = HEAP32[$10 >> 2];
        $10 = $4 ^ $6 >>> 0 < $10 >>> 0 ? $0 : $4 ^ $10 >>> 0 > $5 >>> 0 ? $8 : $7;
       }
       $7 = $10 - $0 | 0;
       block11 : {
        block6 : {
         if (!$2) {
          $5 = HEAP32[$0 + $7 >> 2];
          $10 = HEAP32[$0 >> 2];
          break block6;
         }
         $10 = HEAP32[$0 >> 2];
         $4 = $0 + $7 | 0;
         $5 = HEAP32[$4 >> 2];
         if ($5 >>> 0 > HEAPU32[$2 >> 2]) {
          break block6
         }
         HEAP32[$0 >> 2] = $5;
         HEAP32[$4 >> 2] = $10;
         $2 = $0 + 4 | 0;
         $4 = HEAP32[$0 >> 2];
         $6 = HEAP32[$0 + 4 >> 2];
         $5 = 0;
         $7 = $0 + 8 | 0;
         $22 = ($1 << 2) + $0 | 0;
         $10 = $22 - 4 | 0;
         if ($7 >>> 0 >= $10 >>> 0) {
          $10 = $2
         } else {
          while (1) {
           $9 = $2 + ($5 << 2) | 0;
           HEAP32[$7 - 4 >> 2] = HEAP32[$9 >> 2];
           $8 = $9;
           $9 = HEAP32[$7 >> 2];
           HEAP32[$8 >> 2] = $9;
           $5 = ($4 >>> 0 >= $9 >>> 0) + $5 | 0;
           $9 = $2 + ($5 << 2) | 0;
           HEAP32[$7 >> 2] = HEAP32[$9 >> 2];
           $8 = $9;
           $9 = HEAP32[$7 + 4 >> 2];
           HEAP32[$8 >> 2] = $9;
           $5 = $5 + ($4 >>> 0 >= $9 >>> 0) | 0;
           $7 = $7 + 8 | 0;
           if ($10 >>> 0 > $7 >>> 0) {
            continue
           }
           break;
          };
          $10 = $7 - 4 | 0;
         }
         if (($7 | 0) != ($22 | 0)) {
          while (1) {
           $8 = $10;
           $10 = $2 + ($5 << 2) | 0;
           HEAP32[$8 >> 2] = HEAP32[$10 >> 2];
           $8 = $10;
           $10 = $7;
           $7 = HEAP32[$7 >> 2];
           HEAP32[$8 >> 2] = $7;
           $5 = ($4 >>> 0 >= $7 >>> 0) + $5 | 0;
           $7 = $10 + 4 | 0;
           if (($22 | 0) != ($7 | 0)) {
            continue
           }
           break;
          };
          $10 = $7 - 4 | 0;
         }
         $2 = $2 + ($5 << 2) | 0;
         HEAP32[$10 >> 2] = HEAP32[$2 >> 2];
         HEAP32[$2 >> 2] = $6;
         $2 = ($4 >>> 0 >= $6 >>> 0) + $5 | 0;
         if ($2 >>> 0 >= $1 >>> 0) {
          break block10
         }
         $10 = HEAP32[$0 >> 2];
         $7 = ($2 << 2) + $0 | 0;
         HEAP32[$0 >> 2] = HEAP32[$7 >> 2];
         HEAP32[$7 >> 2] = $10;
         $2 = $2 + 1 | 0;
         $1 = $1 - $2 | 0;
         $0 = ($2 << 2) + $0 | 0;
         $2 = 0;
         break block11;
        }
        HEAP32[$0 >> 2] = $5;
        HEAP32[$0 + $7 >> 2] = $10;
        $4 = $0 + 4 | 0;
        $6 = HEAP32[$0 >> 2];
        $22 = HEAP32[$0 + 4 >> 2];
        $5 = 0;
        $7 = $0 + 8 | 0;
        $9 = ($1 << 2) + $0 | 0;
        $10 = $9 - 4 | 0;
        if ($7 >>> 0 >= $10 >>> 0) {
         $10 = $4
        } else {
         while (1) {
          $8 = $4 + ($5 << 2) | 0;
          HEAP32[$7 - 4 >> 2] = HEAP32[$8 >> 2];
          $23 = $8;
          $8 = HEAP32[$7 >> 2];
          HEAP32[$23 >> 2] = $8;
          $5 = ($6 >>> 0 > $8 >>> 0) + $5 | 0;
          $8 = $4 + ($5 << 2) | 0;
          HEAP32[$7 >> 2] = HEAP32[$8 >> 2];
          $23 = $8;
          $8 = HEAP32[$7 + 4 >> 2];
          HEAP32[$23 >> 2] = $8;
          $5 = $5 + ($6 >>> 0 > $8 >>> 0) | 0;
          $7 = $7 + 8 | 0;
          if ($10 >>> 0 > $7 >>> 0) {
           continue
          }
          break;
         };
         $10 = $7 - 4 | 0;
        }
        if (($7 | 0) != ($9 | 0)) {
         while (1) {
          $8 = $10;
          $10 = $4 + ($5 << 2) | 0;
          HEAP32[$8 >> 2] = HEAP32[$10 >> 2];
          $8 = $10;
          $10 = $7;
          $7 = HEAP32[$7 >> 2];
          HEAP32[$8 >> 2] = $7;
          $5 = ($6 >>> 0 > $7 >>> 0) + $5 | 0;
          $7 = $10 + 4 | 0;
          if (($9 | 0) != ($7 | 0)) {
           continue
          }
          break;
         };
         $7 = $7 - 4 | 0;
        } else {
         $7 = $10
        }
        $10 = $4 + ($5 << 2) | 0;
        HEAP32[$7 >> 2] = HEAP32[$10 >> 2];
        HEAP32[$10 >> 2] = $22;
        $10 = ($6 >>> 0 > $22 >>> 0) + $5 | 0;
        if ($10 >>> 0 >= $1 >>> 0) {
         break block10
        }
        $4 = HEAP32[$0 >> 2];
        $7 = ($10 << 2) + $0 | 0;
        HEAP32[$0 >> 2] = HEAP32[$7 >> 2];
        HEAP32[$7 >> 2] = $4;
        _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable9quicksort9quicksortmNvYmNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $10, $2, $3);
        $1 = ($10 ^ -1) + $1 | 0;
        $0 = $7 + 4 | 0;
        $2 = $7;
       }
       if ($1 >>> 0 >= 33) {
        continue
       }
       break;
      }
     }
     if ($1 >>> 0 < 2) {
      break block2
     }
     $22 = $1 >>> 1 | 0;
     $32 = $1 >>> 0 < 18;
     $7 = $32 ? $1 : $22;
     $10 = $1 - $22 | 0;
     $3 = ($22 << 2) + $0 | 0;
     $2 = $0;
     while (1) {
      block16 : {
       if ($7 >>> 0 <= 12) {
        $4 = 1;
        if ($7 >>> 0 <= 8) {
         break block16
        }
        $4 = HEAP32[$2 + 32 >> 2];
        $6 = HEAP32[$2 + 16 >> 2];
        $5 = $4 >>> 0 > $6 >>> 0 ? $4 : $6;
        $9 = HEAP32[$2 + 12 >> 2];
        $8 = HEAP32[$2 >> 2];
        $11 = $9 >>> 0 > $8 >>> 0 ? $9 : $8;
        $12 = $5 >>> 0 > $11 >>> 0 ? $5 : $11;
        $13 = HEAP32[$2 + 28 >> 2];
        $14 = HEAP32[$2 + 4 >> 2];
        $15 = $13 >>> 0 > $14 >>> 0 ? $13 : $14;
        $9 = $9 >>> 0 < $8 >>> 0 ? $9 : $8;
        $8 = $9 >>> 0 < $15 >>> 0 ? $15 : $9;
        $19 = $8 >>> 0 < $12 >>> 0 ? $12 : $8;
        $18 = HEAP32[$2 + 24 >> 2];
        $16 = HEAP32[$2 + 20 >> 2];
        $17 = HEAP32[$2 + 8 >> 2];
        $20 = $16 >>> 0 > $17 >>> 0 ? $16 : $17;
        $21 = $18 >>> 0 > $20 >>> 0 ? $18 : $20;
        $5 = $5 >>> 0 < $11 >>> 0 ? $5 : $11;
        $11 = $13 >>> 0 < $14 >>> 0 ? $13 : $14;
        $13 = $5 >>> 0 > $11 >>> 0 ? $5 : $11;
        $14 = $13 >>> 0 < $21 >>> 0 ? $21 : $13;
        HEAP32[$2 + 32 >> 2] = $14 >>> 0 < $19 >>> 0 ? $19 : $14;
        $18 = $18 >>> 0 < $20 >>> 0 ? $18 : $20;
        $4 = $4 >>> 0 < $6 >>> 0 ? $4 : $6;
        $6 = $16 >>> 0 < $17 >>> 0 ? $16 : $17;
        $16 = $4 >>> 0 > $6 >>> 0 ? $4 : $6;
        $17 = $16 >>> 0 > $18 >>> 0 ? $18 : $16;
        $5 = $5 >>> 0 < $11 >>> 0 ? $5 : $11;
        $11 = $5 >>> 0 > $17 >>> 0 ? $17 : $5;
        $4 = $4 >>> 0 < $6 >>> 0 ? $4 : $6;
        $6 = $9 >>> 0 > $15 >>> 0 ? $15 : $9;
        $9 = $4 >>> 0 < $6 >>> 0 ? $4 : $6;
        HEAP32[$2 >> 2] = $9 >>> 0 > $11 >>> 0 ? $11 : $9;
        $8 = $8 >>> 0 > $12 >>> 0 ? $12 : $8;
        $12 = $16 >>> 0 < $18 >>> 0 ? $18 : $16;
        $15 = $8 >>> 0 > $12 >>> 0 ? $8 : $12;
        $14 = $14 >>> 0 > $19 >>> 0 ? $19 : $14;
        HEAP32[$2 + 28 >> 2] = $14 >>> 0 < $15 >>> 0 ? $15 : $14;
        $14 = $14 >>> 0 > $15 >>> 0 ? $15 : $14;
        $8 = $8 >>> 0 < $12 >>> 0 ? $8 : $12;
        $12 = $13 >>> 0 > $21 >>> 0 ? $21 : $13;
        $13 = $8 >>> 0 > $12 >>> 0 ? $8 : $12;
        $5 = $5 >>> 0 < $17 >>> 0 ? $17 : $5;
        $4 = $4 >>> 0 > $6 >>> 0 ? $4 : $6;
        $6 = $4 >>> 0 < $5 >>> 0 ? $5 : $4;
        $15 = $6 >>> 0 < $13 >>> 0 ? $13 : $6;
        HEAP32[$2 + 24 >> 2] = $14 >>> 0 > $15 >>> 0 ? $14 : $15;
        HEAP32[$2 + 20 >> 2] = $14 >>> 0 < $15 >>> 0 ? $14 : $15;
        $6 = $6 >>> 0 > $13 >>> 0 ? $13 : $6;
        $8 = $8 >>> 0 < $12 >>> 0 ? $8 : $12;
        $4 = $4 >>> 0 > $5 >>> 0 ? $5 : $4;
        $5 = $4 >>> 0 < $8 >>> 0 ? $8 : $4;
        HEAP32[$2 + 16 >> 2] = $5 >>> 0 < $6 >>> 0 ? $6 : $5;
        HEAP32[$2 + 12 >> 2] = $5 >>> 0 > $6 >>> 0 ? $6 : $5;
        $4 = $4 >>> 0 > $8 >>> 0 ? $8 : $4;
        $6 = $9 >>> 0 < $11 >>> 0 ? $11 : $9;
        HEAP32[$2 + 8 >> 2] = $4 >>> 0 > $6 >>> 0 ? $4 : $6;
        HEAP32[$2 + 4 >> 2] = $4 >>> 0 < $6 >>> 0 ? $4 : $6;
        $4 = 9;
        break block16;
       }
       $4 = HEAP32[$2 + 48 >> 2];
       $6 = HEAP32[$2 >> 2];
       $5 = $4 >>> 0 > $6 >>> 0 ? $4 : $6;
       $9 = HEAP32[$2 + 44 >> 2];
       $8 = HEAP32[$2 + 20 >> 2];
       $11 = $9 >>> 0 > $8 >>> 0 ? $9 : $8;
       $12 = HEAP32[$2 + 16 >> 2];
       $13 = $11 >>> 0 > $12 >>> 0 ? $11 : $12;
       $14 = $5 >>> 0 > $13 >>> 0 ? $5 : $13;
       $15 = HEAP32[$2 + 40 >> 2];
       $19 = HEAP32[$2 + 4 >> 2];
       $18 = $15 >>> 0 > $19 >>> 0 ? $15 : $19;
       $16 = HEAP32[$2 + 32 >> 2];
       $17 = HEAP32[$2 + 24 >> 2];
       $20 = $16 >>> 0 > $17 >>> 0 ? $16 : $17;
       $21 = $18 >>> 0 > $20 >>> 0 ? $18 : $20;
       $24 = HEAP32[$2 + 36 >> 2];
       $25 = HEAP32[$2 + 8 >> 2];
       $26 = $24 >>> 0 > $25 >>> 0 ? $24 : $25;
       $27 = HEAP32[$2 + 28 >> 2];
       $28 = HEAP32[$2 + 12 >> 2];
       $29 = $27 >>> 0 > $28 >>> 0 ? $27 : $28;
       $31 = $26 >>> 0 > $29 >>> 0 ? $26 : $29;
       $23 = $21 >>> 0 > $31 >>> 0 ? $21 : $31;
       HEAP32[$2 + 48 >> 2] = $14 >>> 0 > $23 >>> 0 ? $14 : $23;
       $5 = $5 >>> 0 < $13 >>> 0 ? $5 : $13;
       $13 = $18 >>> 0 < $20 >>> 0 ? $18 : $20;
       $18 = $26 >>> 0 < $29 >>> 0 ? $26 : $29;
       $20 = $13 >>> 0 > $18 >>> 0 ? $13 : $18;
       $26 = $5 >>> 0 > $20 >>> 0 ? $5 : $20;
       $16 = $16 >>> 0 < $17 >>> 0 ? $16 : $17;
       $15 = $15 >>> 0 < $19 >>> 0 ? $15 : $19;
       $19 = $15 >>> 0 < $16 >>> 0 ? $16 : $15;
       $17 = $27 >>> 0 < $28 >>> 0 ? $27 : $28;
       $24 = $24 >>> 0 < $25 >>> 0 ? $24 : $25;
       $25 = $17 >>> 0 > $24 >>> 0 ? $17 : $24;
       $27 = $19 >>> 0 > $25 >>> 0 ? $19 : $25;
       $11 = $11 >>> 0 < $12 >>> 0 ? $11 : $12;
       $4 = $4 >>> 0 < $6 >>> 0 ? $4 : $6;
       $6 = $4 >>> 0 < $11 >>> 0 ? $11 : $4;
       $12 = $6 >>> 0 < $27 >>> 0 ? $27 : $6;
       $28 = $12 >>> 0 < $26 >>> 0 ? $26 : $12;
       $14 = $14 >>> 0 < $23 >>> 0 ? $14 : $23;
       $21 = $21 >>> 0 < $31 >>> 0 ? $21 : $31;
       $9 = $9 >>> 0 < $8 >>> 0 ? $9 : $8;
       $8 = $9 >>> 0 < $21 >>> 0 ? $21 : $9;
       $29 = $8 >>> 0 < $14 >>> 0 ? $14 : $8;
       HEAP32[$2 + 44 >> 2] = $28 >>> 0 > $29 >>> 0 ? $28 : $29;
       $17 = $17 >>> 0 < $24 >>> 0 ? $17 : $24;
       $15 = $15 >>> 0 > $16 >>> 0 ? $16 : $15;
       $16 = $15 >>> 0 > $17 >>> 0 ? $17 : $15;
       $9 = $9 >>> 0 > $21 >>> 0 ? $21 : $9;
       $4 = $4 >>> 0 > $11 >>> 0 ? $11 : $4;
       $11 = $4 >>> 0 > $9 >>> 0 ? $9 : $4;
       HEAP32[$2 >> 2] = $11 >>> 0 > $16 >>> 0 ? $16 : $11;
       $21 = $28 >>> 0 < $29 >>> 0 ? $28 : $29;
       $8 = $8 >>> 0 > $14 >>> 0 ? $14 : $8;
       $12 = $12 >>> 0 > $26 >>> 0 ? $26 : $12;
       $14 = $8 >>> 0 > $12 >>> 0 ? $8 : $12;
       HEAP32[$2 + 40 >> 2] = $14 >>> 0 < $21 >>> 0 ? $21 : $14;
       $13 = $13 >>> 0 < $18 >>> 0 ? $13 : $18;
       $6 = $6 >>> 0 > $27 >>> 0 ? $27 : $6;
       $18 = $6 >>> 0 > $13 >>> 0 ? $13 : $6;
       $4 = $4 >>> 0 < $9 >>> 0 ? $9 : $4;
       $9 = $15 >>> 0 < $17 >>> 0 ? $17 : $15;
       $15 = $4 >>> 0 < $9 >>> 0 ? $4 : $9;
       $17 = $15 >>> 0 > $18 >>> 0 ? $18 : $15;
       $5 = $5 >>> 0 < $20 >>> 0 ? $5 : $20;
       $19 = $19 >>> 0 < $25 >>> 0 ? $19 : $25;
       $20 = $5 >>> 0 < $19 >>> 0 ? $5 : $19;
       $11 = $11 >>> 0 < $16 >>> 0 ? $16 : $11;
       $16 = $11 >>> 0 > $20 >>> 0 ? $20 : $11;
       HEAP32[$2 + 4 >> 2] = $16 >>> 0 > $17 >>> 0 ? $17 : $16;
       $14 = $14 >>> 0 > $21 >>> 0 ? $21 : $14;
       $5 = $5 >>> 0 > $19 >>> 0 ? $5 : $19;
       $6 = $6 >>> 0 < $13 >>> 0 ? $13 : $6;
       $13 = $5 >>> 0 > $6 >>> 0 ? $5 : $6;
       $8 = $8 >>> 0 < $12 >>> 0 ? $8 : $12;
       $4 = $4 >>> 0 > $9 >>> 0 ? $4 : $9;
       $9 = $4 >>> 0 < $8 >>> 0 ? $8 : $4;
       $12 = $9 >>> 0 < $13 >>> 0 ? $13 : $9;
       HEAP32[$2 + 36 >> 2] = $12 >>> 0 < $14 >>> 0 ? $14 : $12;
       HEAP32[$2 + 32 >> 2] = $12 >>> 0 > $14 >>> 0 ? $14 : $12;
       $6 = $5 >>> 0 < $6 >>> 0 ? $5 : $6;
       $4 = $4 >>> 0 > $8 >>> 0 ? $8 : $4;
       $5 = $4 >>> 0 < $6 >>> 0 ? $6 : $4;
       $9 = $9 >>> 0 > $13 >>> 0 ? $13 : $9;
       HEAP32[$2 + 28 >> 2] = $5 >>> 0 > $9 >>> 0 ? $5 : $9;
       $8 = $15 >>> 0 < $18 >>> 0 ? $18 : $15;
       $11 = $11 >>> 0 < $20 >>> 0 ? $20 : $11;
       $12 = $8 >>> 0 < $11 >>> 0 ? $8 : $11;
       $13 = $16 >>> 0 < $17 >>> 0 ? $17 : $16;
       HEAP32[$2 + 8 >> 2] = $12 >>> 0 < $13 >>> 0 ? $12 : $13;
       $5 = $5 >>> 0 < $9 >>> 0 ? $5 : $9;
       $4 = $4 >>> 0 > $6 >>> 0 ? $6 : $4;
       $6 = $8 >>> 0 > $11 >>> 0 ? $8 : $11;
       $9 = $4 >>> 0 > $6 >>> 0 ? $4 : $6;
       HEAP32[$2 + 24 >> 2] = $5 >>> 0 > $9 >>> 0 ? $5 : $9;
       HEAP32[$2 + 20 >> 2] = $5 >>> 0 < $9 >>> 0 ? $5 : $9;
       $4 = $4 >>> 0 < $6 >>> 0 ? $4 : $6;
       $6 = $12 >>> 0 > $13 >>> 0 ? $12 : $13;
       HEAP32[$2 + 16 >> 2] = $4 >>> 0 > $6 >>> 0 ? $4 : $6;
       HEAP32[$2 + 12 >> 2] = $4 >>> 0 < $6 >>> 0 ? $4 : $6;
       $4 = 13;
      }
      if ($4 >>> 0 > $7 >>> 0) {
       break block10
      }
      if (($4 | 0) != ($7 | 0)) {
       $8 = ($7 << 2) + $2 | 0;
       $6 = $4 << 2;
       $4 = $6 + $2 | 0;
       while (1) {
        $5 = HEAP32[$4 - 4 >> 2];
        $9 = HEAP32[$4 >> 2];
        if ($5 >>> 0 > $9 >>> 0) {
         $7 = $6;
         block205 : {
          while (1) {
           $11 = $2 + $7 | 0;
           HEAP32[$11 >> 2] = $5;
           $23 = $2;
           if (($7 | 0) == 4) {
            break block205
           }
           $7 = $7 - 4 | 0;
           $5 = HEAP32[$11 - 8 >> 2];
           if ($9 >>> 0 < $5 >>> 0) {
            continue
           }
           break;
          };
          $23 = $2 + $7 | 0;
         }
         HEAP32[$23 >> 2] = $9;
        }
        $6 = $6 + 4 | 0;
        $4 = $4 + 4 | 0;
        if (($8 | 0) != ($4 | 0)) {
         continue
        }
        break;
       };
      }
      if ($32) {
       break block2
      }
      $4 = ($0 | 0) == ($2 | 0);
      $7 = $10;
      $2 = $3;
      if ($4) {
       continue
      }
      break;
     };
     $2 = $2 - 4 | 0;
     $10 = ($1 << 2) - 4 | 0;
     $7 = $10 + $0 | 0;
     $6 = $10 + $30 | 0;
     $4 = $30;
     $10 = $0;
     while (1) {
      $8 = HEAP32[$3 >> 2];
      $11 = HEAP32[$10 >> 2];
      $12 = $8 >>> 0 < $11 >>> 0;
      HEAP32[$4 >> 2] = $12 ? $8 : $11;
      $5 = HEAP32[$7 >> 2];
      $9 = HEAP32[$2 >> 2];
      HEAP32[$6 >> 2] = $5 >>> 0 > $9 >>> 0 ? $5 : $9;
      $6 = $6 - 4 | 0;
      $4 = $4 + 4 | 0;
      $2 = ($5 >>> 0 < $9 >>> 0 ? -4 : 0) + $2 | 0;
      $7 = ($5 >>> 0 >= $9 >>> 0 ? -4 : 0) + $7 | 0;
      $10 = (($8 >>> 0 >= $11 >>> 0) << 2) + $10 | 0;
      $3 = ($12 << 2) + $3 | 0;
      $22 = $22 - 1 | 0;
      if ($22) {
       continue
      }
      break;
     };
     $2 = $2 + 4 | 0;
     if ($1 & 1) {
      $8 = $4;
      $4 = $2 >>> 0 > $10 >>> 0;
      HEAP32[$8 >> 2] = HEAP32[($4 ? $10 : $3) >> 2];
      $3 = (($2 >>> 0 <= $10 >>> 0) << 2) + $3 | 0;
      $10 = ($4 << 2) + $10 | 0;
     }
     if (($10 | 0) != ($2 | 0)) {
      break block22
     }
     if (($7 + 4 | 0) != ($3 | 0)) {
      break block22
     }
     _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $30, $1 << 2);
     break block2;
    }
    wasm2js_trap();
   }
   _RNvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared9smallsort22panic_on_ord_violation();
   wasm2js_trap();
  }
  __stack_pointer = $30 + 128 | 0;
 }
 
 function _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recmNvYmNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0;
  if ($3 >>> 0 >= 8) {
   $3 = $3 >>> 3 | 0;
   $4 = $3 << 4;
   $5 = Math_imul($3, 28);
   $0 = _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recmNvYmNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $4 + $0 | 0, $5 + $0 | 0, $3);
   $1 = _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recmNvYmNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($1, $1 + $4 | 0, $1 + $5 | 0, $3);
   $2 = _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recmNvYmNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($2, $2 + $4 | 0, $2 + $5 | 0, $3);
  }
  $4 = HEAP32[$0 >> 2];
  $5 = HEAP32[$1 >> 2];
  $3 = $4 >>> 0 < $5 >>> 0;
  $6 = $0;
  $0 = HEAP32[$2 >> 2];
  return $3 ^ $0 >>> 0 > $4 >>> 0 ? $6 : $3 ^ $5 >>> 0 < $0 >>> 0 ? $2 : $1;
 }
 
 function _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortyNvYyNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  block3 : {
   block2 : {
    block1 : {
     $2 = HEAP32[$0 + 12 >> 2];
     $7 = HEAP32[$0 + 4 >> 2];
     $5 = HEAP32[$0 + 8 >> 2];
     $8 = ($2 | 0) == ($7 | 0) & $5 >>> 0 < HEAPU32[$0 >> 2] | $2 >>> 0 < $7 >>> 0;
     if (!$8) {
      $4 = $0 + 16 | 0;
      $3 = 2;
      while (1) {
       $6 = HEAP32[$4 + 4 >> 2];
       $7 = HEAP32[$4 >> 2];
       if (($2 | 0) == ($6 | 0) & $5 >>> 0 > $7 >>> 0 | $2 >>> 0 > $6 >>> 0) {
        break block1
       }
       $4 = $4 + 8 | 0;
       $5 = $7;
       $2 = $6;
       $3 = $3 + 1 | 0;
       if (($3 | 0) != ($1 | 0)) {
        continue
       }
       break;
      };
      break block2;
     }
     $4 = $0 + 16 | 0;
     $3 = 2;
     while (1) {
      $6 = HEAP32[$4 + 4 >> 2];
      $7 = HEAP32[$4 >> 2];
      if (($6 | 0) == ($2 | 0) & $5 >>> 0 <= $7 >>> 0 | $2 >>> 0 < $6 >>> 0) {
       break block1
      }
      $4 = $4 + 8 | 0;
      $5 = $7;
      $2 = $6;
      $3 = $3 + 1 | 0;
      if (($3 | 0) != ($1 | 0)) {
       continue
      }
      break;
     };
     break block2;
    }
    if (($1 | 0) != ($3 | 0)) {
     break block3
    }
   }
   block4 : {
    if (!$8) {
     break block4
    }
    $8 = $1 >>> 1 & 134217726;
    $7 = ($1 << 3) + $0 | 0;
    $4 = $7 - 8 | 0;
    $5 = 0;
    $3 = $0;
    while (1) {
     $2 = HEAP32[$4 >> 2];
     $6 = HEAP32[$4 + 4 >> 2];
     $9 = HEAP32[$3 + 4 >> 2];
     HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
     HEAP32[$4 + 4 >> 2] = $9;
     HEAP32[$3 >> 2] = $2;
     HEAP32[$3 + 4 >> 2] = $6;
     $6 = (($5 ^ 536870910) << 3) + $7 | 0;
     $2 = $6;
     $9 = HEAP32[$2 >> 2];
     $10 = HEAP32[$2 + 4 >> 2];
     $2 = $3 + 8 | 0;
     $11 = HEAP32[$2 + 4 >> 2];
     HEAP32[$6 >> 2] = HEAP32[$2 >> 2];
     HEAP32[$6 + 4 >> 2] = $11;
     HEAP32[$2 >> 2] = $9;
     HEAP32[$2 + 4 >> 2] = $10;
     $4 = $4 - 16 | 0;
     $3 = $3 + 16 | 0;
     $2 = $5;
     $5 = $2 + 2 | 0;
     if (($8 | 0) != ($5 | 0)) {
      continue
     }
     break;
    };
    if (!($1 & 2)) {
     break block4
    }
    $1 = ($5 << 3) + $0 | 0;
    $0 = $1;
    $5 = HEAP32[$0 >> 2];
    $3 = HEAP32[$0 + 4 >> 2];
    $0 = (-3 - $2 << 3) + $7 | 0;
    $2 = HEAP32[$0 + 4 >> 2];
    HEAP32[$1 >> 2] = HEAP32[$0 >> 2];
    HEAP32[$1 + 4 >> 2] = $2;
    HEAP32[$0 >> 2] = $5;
    HEAP32[$0 + 4 >> 2] = $3;
   }
   return;
  }
  _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable9quicksort9quicksortyNvYyNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $1, 0, Math_clz32($1 | 1) << 1 ^ 62);
 }
 
 function _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable9quicksort9quicksortyNvYyNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0;
  $53 = __stack_pointer - 256 | 0;
  __stack_pointer = $53;
  block2 : {
   block22 : {
    block10 : {
     if ($1 >>> 0 >= 33) {
      while (1) {
       if (!$3) {
        $2 = $1;
        $4 = $2 + ($2 >>> 1 | 0) | 0;
        while (1) {
         $4 = $4 - 1 | 0;
         block1 : {
          if ($2 >>> 0 > $4 >>> 0) {
           $3 = HEAP32[$0 >> 2];
           $9 = HEAP32[$0 + 4 >> 2];
           $1 = $0 + ($4 << 3) | 0;
           $6 = HEAP32[$1 + 4 >> 2];
           HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
           HEAP32[$0 + 4 >> 2] = $6;
           HEAP32[$1 >> 2] = $3;
           HEAP32[$1 + 4 >> 2] = $9;
           $3 = 0;
           break block1;
          }
          $3 = $4 - $2 | 0;
         }
         $9 = $3 << 1;
         $1 = $9 | 1;
         $6 = $2 >>> 0 < $4 >>> 0 ? $2 : $4;
         block20 : {
          if ($1 >>> 0 >= $6 >>> 0) {
           break block20
          }
          while (1) {
           $9 = $9 + 2 | 0;
           if ($9 >>> 0 < $6 >>> 0) {
            $5 = ($1 << 3) + $0 | 0;
            $7 = HEAP32[$5 >> 2];
            $9 = ($9 << 3) + $0 | 0;
            $11 = HEAP32[$9 >> 2];
            $5 = HEAP32[$5 + 4 >> 2];
            $9 = HEAP32[$9 + 4 >> 2];
            $1 = $1 + (($5 | 0) == ($9 | 0) & $7 >>> 0 < $11 >>> 0 | $5 >>> 0 < $9 >>> 0) | 0;
           }
           $3 = ($3 << 3) + $0 | 0;
           $9 = HEAP32[$3 >> 2];
           $5 = ($1 << 3) + $0 | 0;
           $7 = HEAP32[$5 >> 2];
           $11 = HEAP32[$3 + 4 >> 2];
           $8 = HEAP32[$5 + 4 >> 2];
           if (($11 | 0) == ($8 | 0) & $7 >>> 0 <= $9 >>> 0 | $8 >>> 0 < $11 >>> 0) {
            break block20
           }
           HEAP32[$5 >> 2] = $9;
           HEAP32[$3 >> 2] = $7;
           HEAP32[$3 + 4 >> 2] = $8;
           HEAP32[$5 + 4 >> 2] = $11;
           $3 = $1;
           $9 = $1 << 1;
           $1 = $9 | 1;
           if ($6 >>> 0 > $1 >>> 0) {
            continue
           }
           break;
          };
         }
         if ($4) {
          continue
         }
         break;
        };
        break block2;
       }
       $6 = $1 >>> 3 | 0;
       $4 = Math_imul($6, 56) + $0 | 0;
       $9 = ($6 << 5) + $0 | 0;
       $3 = $3 - 1 | 0;
       block4 : {
        if ($1 >>> 0 >= 64) {
         $4 = _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recyNvYyNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $9, $4, $6);
         break block4;
        }
        $6 = HEAP32[$0 + 4 >> 2];
        $5 = HEAP32[$9 + 4 >> 2];
        $11 = HEAP32[$0 >> 2];
        $8 = HEAP32[$9 >> 2];
        $7 = ($6 | 0) == ($5 | 0) & $11 >>> 0 < $8 >>> 0 | $6 >>> 0 < $5 >>> 0;
        $10 = $4;
        $15 = $9;
        $9 = HEAP32[$4 + 4 >> 2];
        $4 = HEAP32[$4 >> 2];
        $4 = $7 ^ (($6 | 0) == ($9 | 0) & $4 >>> 0 > $11 >>> 0 | $6 >>> 0 < $9 >>> 0) ? $0 : $7 ^ (($9 | 0) == ($5 | 0) & $4 >>> 0 > $8 >>> 0 | $5 >>> 0 < $9 >>> 0) ? $10 : $15;
       }
       $9 = $4 - $0 | 0;
       block11 : {
        block6 : {
         if (!$2) {
          $4 = $0 + $9 | 0;
          $7 = HEAP32[$4 >> 2];
          $11 = HEAP32[$4 + 4 >> 2];
          $4 = HEAP32[$0 >> 2];
          $6 = HEAP32[$0 + 4 >> 2];
          break block6;
         }
         $4 = HEAP32[$0 >> 2];
         $6 = HEAP32[$0 + 4 >> 2];
         $5 = $0 + $9 | 0;
         $7 = HEAP32[$5 >> 2];
         $8 = HEAP32[$2 + 4 >> 2];
         $11 = HEAP32[$5 + 4 >> 2];
         if (($8 | 0) == ($11 | 0) & $7 >>> 0 > HEAPU32[$2 >> 2] | $8 >>> 0 < $11 >>> 0) {
          break block6
         }
         HEAP32[$0 >> 2] = $7;
         HEAP32[$0 + 4 >> 2] = $11;
         HEAP32[$5 >> 2] = $4;
         HEAP32[$5 + 4 >> 2] = $6;
         $2 = $0 + 8 | 0;
         $5 = HEAP32[$0 >> 2];
         $6 = HEAP32[$0 + 4 >> 2];
         $38 = HEAP32[$0 + 8 >> 2];
         $11 = HEAP32[$0 + 12 >> 2];
         $7 = 0;
         $9 = $0 + 16 | 0;
         $10 = $0 + ($1 << 3) | 0;
         $12 = $10 - 8 | 0;
         if ($9 >>> 0 >= $12 >>> 0) {
          $4 = $2
         } else {
          while (1) {
           $4 = $2 + ($7 << 3) | 0;
           $8 = HEAP32[$4 + 4 >> 2];
           $14 = $9 - 8 | 0;
           HEAP32[$14 >> 2] = HEAP32[$4 >> 2];
           HEAP32[$14 + 4 >> 2] = $8;
           $8 = HEAP32[$9 + 4 >> 2];
           $14 = HEAP32[$9 >> 2];
           HEAP32[$4 >> 2] = $14;
           HEAP32[$4 + 4 >> 2] = $8;
           $14 = (($6 | 0) == ($8 | 0) & $5 >>> 0 >= $14 >>> 0 | $6 >>> 0 > $8 >>> 0) + $7 | 0;
           $7 = $2 + ($14 << 3) | 0;
           $4 = $7;
           $8 = HEAP32[$4 + 4 >> 2];
           HEAP32[$9 >> 2] = HEAP32[$4 >> 2];
           HEAP32[$9 + 4 >> 2] = $8;
           $4 = $9 + 8 | 0;
           $8 = HEAP32[$4 >> 2];
           $4 = HEAP32[$4 + 4 >> 2];
           HEAP32[$7 >> 2] = $8;
           HEAP32[$7 + 4 >> 2] = $4;
           $7 = $14 + (($4 | 0) == ($6 | 0) & $5 >>> 0 >= $8 >>> 0 | $4 >>> 0 < $6 >>> 0) | 0;
           $9 = $9 + 16 | 0;
           if ($12 >>> 0 > $9 >>> 0) {
            continue
           }
           break;
          };
          $4 = $9 - 8 | 0;
         }
         if (($9 | 0) != ($10 | 0)) {
          while (1) {
           $8 = $2 + ($7 << 3) | 0;
           $12 = HEAP32[$8 + 4 >> 2];
           HEAP32[$4 >> 2] = HEAP32[$8 >> 2];
           HEAP32[$4 + 4 >> 2] = $12;
           $4 = $9;
           $12 = HEAP32[$4 >> 2];
           $9 = HEAP32[$4 + 4 >> 2];
           HEAP32[$8 >> 2] = $12;
           HEAP32[$8 + 4 >> 2] = $9;
           $7 = (($6 | 0) == ($9 | 0) & $5 >>> 0 >= $12 >>> 0 | $6 >>> 0 > $9 >>> 0) + $7 | 0;
           $9 = $4 + 8 | 0;
           if (($10 | 0) != ($9 | 0)) {
            continue
           }
           break;
          };
          $4 = $9 - 8 | 0;
         }
         $2 = $2 + ($7 << 3) | 0;
         $9 = HEAP32[$2 + 4 >> 2];
         HEAP32[$4 >> 2] = HEAP32[$2 >> 2];
         HEAP32[$4 + 4 >> 2] = $9;
         HEAP32[$2 >> 2] = $38;
         HEAP32[$2 + 4 >> 2] = $11;
         $4 = (($6 | 0) == ($11 | 0) & $5 >>> 0 >= $38 >>> 0 | $6 >>> 0 > $11 >>> 0) + $7 | 0;
         if ($4 >>> 0 >= $1 >>> 0) {
          break block10
         }
         $9 = HEAP32[$0 >> 2];
         $6 = HEAP32[$0 + 4 >> 2];
         $2 = $0 + ($4 << 3) | 0;
         $5 = HEAP32[$2 + 4 >> 2];
         HEAP32[$0 >> 2] = HEAP32[$2 >> 2];
         HEAP32[$0 + 4 >> 2] = $5;
         HEAP32[$2 >> 2] = $9;
         HEAP32[$2 + 4 >> 2] = $6;
         $2 = $4 + 1 | 0;
         $1 = $1 - $2 | 0;
         $0 = ($2 << 3) + $0 | 0;
         $2 = 0;
         break block11;
        }
        HEAP32[$0 >> 2] = $7;
        HEAP32[$0 + 4 >> 2] = $11;
        $9 = $0 + $9 | 0;
        HEAP32[$9 >> 2] = $4;
        HEAP32[$9 + 4 >> 2] = $6;
        $6 = $0 + 8 | 0;
        $11 = HEAP32[$0 >> 2];
        $5 = HEAP32[$0 + 4 >> 2];
        $10 = HEAP32[$0 + 8 >> 2];
        $8 = HEAP32[$0 + 12 >> 2];
        $7 = 0;
        $9 = $0 + 16 | 0;
        $12 = $0 + ($1 << 3) | 0;
        $14 = $12 - 8 | 0;
        if ($9 >>> 0 >= $14 >>> 0) {
         $4 = $6
        } else {
         while (1) {
          $4 = $6 + ($7 << 3) | 0;
          $38 = HEAP32[$4 + 4 >> 2];
          $17 = $9 - 8 | 0;
          HEAP32[$17 >> 2] = HEAP32[$4 >> 2];
          HEAP32[$17 + 4 >> 2] = $38;
          $38 = HEAP32[$9 + 4 >> 2];
          $17 = HEAP32[$9 >> 2];
          HEAP32[$4 >> 2] = $17;
          HEAP32[$4 + 4 >> 2] = $38;
          $17 = (($5 | 0) == ($38 | 0) & $11 >>> 0 > $17 >>> 0 | $5 >>> 0 > $38 >>> 0) + $7 | 0;
          $7 = $6 + ($17 << 3) | 0;
          $4 = $7;
          $38 = HEAP32[$4 + 4 >> 2];
          HEAP32[$9 >> 2] = HEAP32[$4 >> 2];
          HEAP32[$9 + 4 >> 2] = $38;
          $4 = $9 + 8 | 0;
          $38 = HEAP32[$4 >> 2];
          $4 = HEAP32[$4 + 4 >> 2];
          HEAP32[$7 >> 2] = $38;
          HEAP32[$7 + 4 >> 2] = $4;
          $7 = $17 + (($4 | 0) == ($5 | 0) & $11 >>> 0 > $38 >>> 0 | $4 >>> 0 < $5 >>> 0) | 0;
          $9 = $9 + 16 | 0;
          if ($14 >>> 0 > $9 >>> 0) {
           continue
          }
          break;
         };
         $4 = $9 - 8 | 0;
        }
        if (($9 | 0) != ($12 | 0)) {
         while (1) {
          $38 = $6 + ($7 << 3) | 0;
          $14 = HEAP32[$38 + 4 >> 2];
          HEAP32[$4 >> 2] = HEAP32[$38 >> 2];
          HEAP32[$4 + 4 >> 2] = $14;
          $4 = $9;
          $14 = HEAP32[$4 >> 2];
          $9 = HEAP32[$4 + 4 >> 2];
          HEAP32[$38 >> 2] = $14;
          HEAP32[$38 + 4 >> 2] = $9;
          $7 = (($5 | 0) == ($9 | 0) & $11 >>> 0 > $14 >>> 0 | $5 >>> 0 > $9 >>> 0) + $7 | 0;
          $9 = $4 + 8 | 0;
          if (($12 | 0) != ($9 | 0)) {
           continue
          }
          break;
         };
         $4 = $9 - 8 | 0;
        }
        $9 = $6 + ($7 << 3) | 0;
        $6 = HEAP32[$9 + 4 >> 2];
        HEAP32[$4 >> 2] = HEAP32[$9 >> 2];
        HEAP32[$4 + 4 >> 2] = $6;
        HEAP32[$9 >> 2] = $10;
        HEAP32[$9 + 4 >> 2] = $8;
        $9 = (($5 | 0) == ($8 | 0) & $10 >>> 0 < $11 >>> 0 | $5 >>> 0 > $8 >>> 0) + $7 | 0;
        if ($9 >>> 0 >= $1 >>> 0) {
         break block10
        }
        $6 = HEAP32[$0 >> 2];
        $5 = HEAP32[$0 + 4 >> 2];
        $4 = $0 + ($9 << 3) | 0;
        $7 = HEAP32[$4 + 4 >> 2];
        HEAP32[$0 >> 2] = HEAP32[$4 >> 2];
        HEAP32[$0 + 4 >> 2] = $7;
        HEAP32[$4 >> 2] = $6;
        HEAP32[$4 + 4 >> 2] = $5;
        _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable9quicksort9quicksortyNvYyNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $9, $2, $3);
        $1 = ($9 ^ -1) + $1 | 0;
        $0 = $4 + 8 | 0;
        $2 = $4;
       }
       if ($1 >>> 0 >= 33) {
        continue
       }
       break;
      }
     }
     if ($1 >>> 0 < 2) {
      break block2
     }
     $2 = $1 >>> 1 | 0;
     $58 = $1 >>> 0 < 18;
     $9 = $58 ? $1 : $2;
     $38 = $1 - $2 | 0;
     $3 = ($2 << 3) + $0 | 0;
     $4 = $0;
     while (1) {
      block16 : {
       if ($9 >>> 0 <= 12) {
        $6 = 1;
        if ($9 >>> 0 <= 8) {
         break block16
        }
        $7 = HEAP32[$4 + 68 >> 2];
        $8 = HEAP32[$4 + 36 >> 2];
        $26 = HEAP32[$4 + 64 >> 2];
        $28 = HEAP32[$4 + 32 >> 2];
        $21 = ($7 | 0) == ($8 | 0) & $26 >>> 0 > $28 >>> 0 | $7 >>> 0 > $8 >>> 0;
        $6 = HEAP32[$4 + 28 >> 2];
        $5 = HEAP32[$4 + 4 >> 2];
        $11 = HEAP32[$4 + 24 >> 2];
        $16 = HEAP32[$4 >> 2];
        $19 = ($6 | 0) == ($5 | 0) & $11 >>> 0 > $16 >>> 0 | $6 >>> 0 > $5 >>> 0;
        $10 = HEAP32[$4 + 60 >> 2];
        $12 = HEAP32[$4 + 12 >> 2];
        $23 = HEAP32[$4 + 56 >> 2];
        $24 = HEAP32[$4 + 8 >> 2];
        $13 = ($10 | 0) == ($12 | 0) & $23 >>> 0 > $24 >>> 0 | $10 >>> 0 > $12 >>> 0;
        $17 = ($6 | 0) == ($5 | 0) & $11 >>> 0 < $16 >>> 0 | $6 >>> 0 < $5 >>> 0;
        $25 = $17 ? $11 : $16;
        $14 = $13 ? $10 : $12;
        $17 = $17 ? $6 : $5;
        $32 = $13 ? $23 : $24;
        $13 = ($14 | 0) == ($17 | 0) & $25 >>> 0 < $32 >>> 0 | $14 >>> 0 > $17 >>> 0;
        $22 = $21 ? $26 : $28;
        $27 = $19 ? $11 : $16;
        $16 = $21 ? $7 : $8;
        $6 = $19 ? $6 : $5;
        $5 = ($16 | 0) == ($6 | 0) & $22 >>> 0 > $27 >>> 0 | $6 >>> 0 < $16 >>> 0;
        $11 = $5 ? $22 : $27;
        $33 = $13 ? $32 : $25;
        $21 = $5 ? $16 : $6;
        $19 = $13 ? $14 : $17;
        $34 = ($21 | 0) == ($19 | 0) & $11 >>> 0 > $33 >>> 0 | $21 >>> 0 > $19 >>> 0;
        $5 = $34 ? $11 : $33;
        $13 = HEAP32[$4 + 44 >> 2];
        $20 = HEAP32[$4 + 20 >> 2];
        $30 = HEAP32[$4 + 40 >> 2];
        $29 = HEAP32[$4 + 16 >> 2];
        $35 = ($13 | 0) == ($20 | 0) & $30 >>> 0 > $29 >>> 0 | $13 >>> 0 > $20 >>> 0;
        $15 = HEAP32[$4 + 52 >> 2];
        $18 = $35 ? $13 : $20;
        $31 = HEAP32[$4 + 48 >> 2];
        $35 = $35 ? $30 : $29;
        $36 = ($15 | 0) == ($18 | 0) & $31 >>> 0 > $35 >>> 0 | $15 >>> 0 > $18 >>> 0;
        $39 = $22;
        $22 = ($6 | 0) == ($16 | 0) & $22 >>> 0 < $27 >>> 0 | $6 >>> 0 > $16 >>> 0;
        $27 = $22 ? $39 : $27;
        $39 = $23;
        $23 = ($10 | 0) == ($12 | 0) & $23 >>> 0 < $24 >>> 0 | $10 >>> 0 < $12 >>> 0;
        $40 = $23 ? $39 : $24;
        $16 = $22 ? $16 : $6;
        $10 = $23 ? $10 : $12;
        $23 = ($16 | 0) == ($10 | 0) & $27 >>> 0 > $40 >>> 0 | $10 >>> 0 < $16 >>> 0;
        $6 = $23 ? $27 : $40;
        $12 = $36 ? $15 : $18;
        $23 = $23 ? $16 : $10;
        $36 = $36 ? $31 : $35;
        $37 = ($12 | 0) == ($23 | 0) & $6 >>> 0 < $36 >>> 0 | $12 >>> 0 > $23 >>> 0;
        $24 = $34 ? $21 : $19;
        $22 = $37 ? $12 : $23;
        $37 = $37 ? $36 : $6;
        $34 = ($24 | 0) == ($22 | 0) & $37 >>> 0 < $5 >>> 0 | $22 >>> 0 < $24 >>> 0;
        HEAP32[$4 + 64 >> 2] = $34 ? $5 : $37;
        HEAP32[$4 + 68 >> 2] = $34 ? $24 : $22;
        $34 = $35;
        $35 = ($15 | 0) == ($18 | 0) & $31 >>> 0 < $35 >>> 0 | $15 >>> 0 < $18 >>> 0;
        $31 = $35 ? $31 : $34;
        $34 = $26;
        $26 = ($7 | 0) == ($8 | 0) & $26 >>> 0 < $28 >>> 0 | $7 >>> 0 < $8 >>> 0;
        $28 = $26 ? $34 : $28;
        $34 = $29;
        $29 = ($13 | 0) == ($20 | 0) & $30 >>> 0 < $29 >>> 0 | $13 >>> 0 < $20 >>> 0;
        $30 = $29 ? $30 : $34;
        $8 = $26 ? $7 : $8;
        $13 = $29 ? $13 : $20;
        $7 = ($8 | 0) == ($13 | 0) & $28 >>> 0 > $30 >>> 0 | $8 >>> 0 > $13 >>> 0;
        $29 = $7 ? $28 : $30;
        $20 = $35 ? $15 : $18;
        $15 = $7 ? $8 : $13;
        $18 = ($20 | 0) == ($15 | 0) & $31 >>> 0 < $29 >>> 0 | $15 >>> 0 > $20 >>> 0;
        $7 = $18 ? $31 : $29;
        $26 = $27;
        $27 = ($10 | 0) == ($16 | 0) & $27 >>> 0 < $40 >>> 0 | $10 >>> 0 > $16 >>> 0;
        $26 = $27 ? $26 : $40;
        $18 = $18 ? $20 : $15;
        $10 = $27 ? $16 : $10;
        $27 = ($18 | 0) == ($10 | 0) & $7 >>> 0 < $26 >>> 0 | $10 >>> 0 > $18 >>> 0;
        $16 = ($8 | 0) == ($13 | 0) & $28 >>> 0 < $30 >>> 0 | $8 >>> 0 < $13 >>> 0;
        $28 = $16 ? $28 : $30;
        $30 = $25;
        $25 = ($14 | 0) == ($17 | 0) & $25 >>> 0 > $32 >>> 0 | $14 >>> 0 < $17 >>> 0;
        $32 = $25 ? $32 : $30;
        $8 = $16 ? $8 : $13;
        $14 = $25 ? $14 : $17;
        $16 = ($8 | 0) == ($14 | 0) & $28 >>> 0 < $32 >>> 0 | $8 >>> 0 < $14 >>> 0;
        $25 = $16 ? $28 : $32;
        $17 = $27 ? $18 : $10;
        $16 = $16 ? $8 : $14;
        $27 = $27 ? $7 : $26;
        $13 = ($17 | 0) == ($16 | 0) & $25 >>> 0 > $27 >>> 0 | $16 >>> 0 > $17 >>> 0;
        HEAP32[$4 >> 2] = $13 ? $27 : $25;
        HEAP32[$4 + 4 >> 2] = $13 ? $17 : $16;
        $13 = ($21 | 0) == ($19 | 0) & $11 >>> 0 < $33 >>> 0 | $21 >>> 0 < $19 >>> 0;
        $11 = $13 ? $11 : $33;
        $30 = ($15 | 0) == ($20 | 0) & $31 >>> 0 > $29 >>> 0 | $15 >>> 0 < $20 >>> 0;
        $33 = $30 ? $31 : $29;
        $21 = $13 ? $21 : $19;
        $19 = $30 ? $20 : $15;
        $13 = ($21 | 0) == ($19 | 0) & $11 >>> 0 > $33 >>> 0 | $21 >>> 0 > $19 >>> 0;
        $15 = $13 ? $11 : $33;
        $20 = ($22 | 0) == ($24 | 0) & $5 >>> 0 < $37 >>> 0 | $22 >>> 0 > $24 >>> 0;
        $5 = $20 ? $5 : $37;
        $13 = $13 ? $21 : $19;
        $20 = $20 ? $24 : $22;
        $24 = ($13 | 0) == ($20 | 0) & $5 >>> 0 < $15 >>> 0 | $13 >>> 0 > $20 >>> 0;
        HEAP32[$4 + 56 >> 2] = $24 ? $15 : $5;
        HEAP32[$4 + 60 >> 2] = $24 ? $13 : $20;
        $22 = ($13 | 0) == ($20 | 0) & $5 >>> 0 > $15 >>> 0 | $13 >>> 0 < $20 >>> 0;
        $5 = $22 ? $15 : $5;
        $15 = ($21 | 0) == ($19 | 0) & $11 >>> 0 < $33 >>> 0 | $21 >>> 0 < $19 >>> 0;
        $11 = $15 ? $11 : $33;
        $29 = $6;
        $6 = ($12 | 0) == ($23 | 0) & $6 >>> 0 > $36 >>> 0 | $12 >>> 0 < $23 >>> 0;
        $24 = $6 ? $36 : $29;
        $21 = $15 ? $21 : $19;
        $12 = $6 ? $12 : $23;
        $19 = ($21 | 0) == ($12 | 0) & $11 >>> 0 > $24 >>> 0 | $12 >>> 0 < $21 >>> 0;
        $6 = $19 ? $11 : $24;
        $15 = ($10 | 0) == ($18 | 0) & $7 >>> 0 > $26 >>> 0 | $10 >>> 0 < $18 >>> 0;
        $7 = $15 ? $7 : $26;
        $26 = ($8 | 0) == ($14 | 0) & $28 >>> 0 > $32 >>> 0 | $8 >>> 0 > $14 >>> 0;
        $23 = $26 ? $28 : $32;
        $10 = $15 ? $18 : $10;
        $8 = $26 ? $8 : $14;
        $18 = ($10 | 0) == ($8 | 0) & $7 >>> 0 > $23 >>> 0 | $8 >>> 0 < $10 >>> 0;
        $15 = $18 ? $7 : $23;
        $14 = $19 ? $21 : $12;
        $19 = $18 ? $10 : $8;
        $18 = ($14 | 0) == ($19 | 0) & $6 >>> 0 > $15 >>> 0 | $14 >>> 0 > $19 >>> 0;
        $13 = $22 ? $13 : $20;
        $20 = $18 ? $14 : $19;
        $18 = $18 ? $6 : $15;
        $22 = ($13 | 0) == ($20 | 0) & $18 >>> 0 < $5 >>> 0 | $13 >>> 0 > $20 >>> 0;
        HEAP32[$4 + 48 >> 2] = $22 ? $5 : $18;
        HEAP32[$4 + 52 >> 2] = $22 ? $13 : $20;
        $29 = $5;
        $5 = ($13 | 0) == ($20 | 0) & $5 >>> 0 < $18 >>> 0 | $13 >>> 0 < $20 >>> 0;
        HEAP32[$4 + 40 >> 2] = $5 ? $29 : $18;
        HEAP32[$4 + 44 >> 2] = $5 ? $13 : $20;
        $5 = $15;
        $15 = ($14 | 0) == ($19 | 0) & $6 >>> 0 < $15 >>> 0 | $14 >>> 0 < $19 >>> 0;
        $13 = $15 ? $6 : $5;
        $5 = ($12 | 0) == ($21 | 0) & $11 >>> 0 < $24 >>> 0 | $12 >>> 0 > $21 >>> 0;
        $20 = $5 ? $11 : $24;
        $6 = $7;
        $7 = ($8 | 0) == ($10 | 0) & $7 >>> 0 < $23 >>> 0 | $8 >>> 0 > $10 >>> 0;
        $6 = $7 ? $6 : $23;
        $5 = $5 ? $21 : $12;
        $7 = $7 ? $10 : $8;
        $8 = ($5 | 0) == ($7 | 0) & $6 >>> 0 < $20 >>> 0 | $5 >>> 0 > $7 >>> 0;
        $10 = $8 ? $20 : $6;
        $11 = $15 ? $14 : $19;
        $8 = $8 ? $5 : $7;
        $12 = ($11 | 0) == ($8 | 0) & $10 >>> 0 < $13 >>> 0 | $8 >>> 0 < $11 >>> 0;
        HEAP32[$4 + 32 >> 2] = $12 ? $13 : $10;
        HEAP32[$4 + 36 >> 2] = $12 ? $11 : $8;
        $15 = $10;
        $10 = ($8 | 0) == ($11 | 0) & $10 >>> 0 > $13 >>> 0 | $8 >>> 0 > $11 >>> 0;
        HEAP32[$4 + 24 >> 2] = $10 ? $13 : $15;
        HEAP32[$4 + 28 >> 2] = $10 ? $11 : $8;
        $10 = $6;
        $6 = ($5 | 0) == ($7 | 0) & $6 >>> 0 > $20 >>> 0 | $5 >>> 0 < $7 >>> 0;
        $11 = $6 ? $20 : $10;
        $10 = ($16 | 0) == ($17 | 0) & $25 >>> 0 < $27 >>> 0 | $16 >>> 0 < $17 >>> 0;
        $8 = $10 ? $27 : $25;
        $6 = $6 ? $5 : $7;
        $5 = $10 ? $17 : $16;
        $7 = ($6 | 0) == ($5 | 0) & $8 >>> 0 < $11 >>> 0 | $6 >>> 0 > $5 >>> 0;
        HEAP32[$4 + 16 >> 2] = $7 ? $11 : $8;
        HEAP32[$4 + 20 >> 2] = $7 ? $6 : $5;
        $7 = ($6 | 0) == ($5 | 0) & $8 >>> 0 > $11 >>> 0 | $6 >>> 0 < $5 >>> 0;
        HEAP32[$4 + 8 >> 2] = $7 ? $11 : $8;
        HEAP32[$4 + 12 >> 2] = $7 ? $6 : $5;
        $6 = 9;
        break block16;
       }
       $7 = HEAP32[$4 + 100 >> 2];
       $11 = HEAP32[$4 + 4 >> 2];
       $33 = HEAP32[$4 + 96 >> 2];
       $30 = HEAP32[$4 >> 2];
       $5 = ($7 | 0) == ($11 | 0) & $33 >>> 0 > $30 >>> 0 | $7 >>> 0 > $11 >>> 0;
       $8 = HEAP32[$4 + 92 >> 2];
       $10 = HEAP32[$4 + 44 >> 2];
       $29 = HEAP32[$4 + 88 >> 2];
       $40 = HEAP32[$4 + 40 >> 2];
       $6 = ($8 | 0) == ($10 | 0) & $29 >>> 0 > $40 >>> 0 | $8 >>> 0 > $10 >>> 0;
       $12 = $6 ? $8 : $10;
       $14 = HEAP32[$4 + 36 >> 2];
       $35 = $6 ? $29 : $40;
       $36 = HEAP32[$4 + 32 >> 2];
       $18 = ($12 | 0) == ($14 | 0) & $35 >>> 0 > $36 >>> 0 | $12 >>> 0 > $14 >>> 0;
       $6 = HEAP32[$4 + 84 >> 2];
       $17 = HEAP32[$4 + 12 >> 2];
       $31 = HEAP32[$4 + 80 >> 2];
       $37 = HEAP32[$4 + 8 >> 2];
       $23 = ($6 | 0) == ($17 | 0) & $31 >>> 0 > $37 >>> 0 | $6 >>> 0 > $17 >>> 0;
       $16 = HEAP32[$4 + 68 >> 2];
       $21 = HEAP32[$4 + 52 >> 2];
       $34 = HEAP32[$4 + 64 >> 2];
       $41 = HEAP32[$4 + 48 >> 2];
       $24 = ($16 | 0) == ($21 | 0) & $34 >>> 0 > $41 >>> 0 | $16 >>> 0 > $21 >>> 0;
       $19 = HEAP32[$4 + 76 >> 2];
       $13 = HEAP32[$4 + 20 >> 2];
       $42 = HEAP32[$4 + 72 >> 2];
       $43 = HEAP32[$4 + 16 >> 2];
       $22 = ($19 | 0) == ($13 | 0) & $42 >>> 0 > $43 >>> 0 | $13 >>> 0 < $19 >>> 0;
       $20 = HEAP32[$4 + 60 >> 2];
       $15 = HEAP32[$4 + 28 >> 2];
       $44 = HEAP32[$4 + 56 >> 2];
       $47 = HEAP32[$4 + 24 >> 2];
       $25 = ($20 | 0) == ($15 | 0) & $44 >>> 0 > $47 >>> 0 | $15 >>> 0 < $20 >>> 0;
       $48 = $5 ? $33 : $30;
       $49 = $18 ? $35 : $36;
       $5 = $5 ? $7 : $11;
       $18 = $18 ? $12 : $14;
       $32 = ($5 | 0) == ($18 | 0) & $48 >>> 0 > $49 >>> 0 | $5 >>> 0 > $18 >>> 0;
       $50 = $32 ? $48 : $49;
       $51 = $23 ? $31 : $37;
       $45 = $24 ? $34 : $41;
       $23 = $23 ? $6 : $17;
       $24 = $24 ? $16 : $21;
       $26 = ($23 | 0) == ($24 | 0) & $45 >>> 0 < $51 >>> 0 | $23 >>> 0 > $24 >>> 0;
       $46 = $26 ? $51 : $45;
       $39 = $22 ? $42 : $43;
       $55 = $25 ? $44 : $47;
       $22 = $22 ? $19 : $13;
       $25 = $25 ? $20 : $15;
       $28 = ($22 | 0) == ($25 | 0) & $39 >>> 0 > $55 >>> 0 | $22 >>> 0 > $25 >>> 0;
       $56 = $28 ? $39 : $55;
       $26 = $26 ? $23 : $24;
       $28 = $28 ? $22 : $25;
       $27 = ($26 | 0) == ($28 | 0) & $46 >>> 0 > $56 >>> 0 | $26 >>> 0 > $28 >>> 0;
       $57 = $27 ? $46 : $56;
       $32 = $32 ? $5 : $18;
       $27 = $27 ? $26 : $28;
       $54 = ($32 | 0) == ($27 | 0) & $50 >>> 0 > $57 >>> 0 | $27 >>> 0 < $32 >>> 0;
       HEAP32[$4 + 96 >> 2] = $54 ? $50 : $57;
       HEAP32[$4 + 100 >> 2] = $54 ? $32 : $27;
       $54 = ($5 | 0) == ($18 | 0) & $48 >>> 0 < $49 >>> 0 | $5 >>> 0 < $18 >>> 0;
       $48 = $54 ? $48 : $49;
       $52 = $45;
       $45 = ($23 | 0) == ($24 | 0) & $45 >>> 0 > $51 >>> 0 | $23 >>> 0 < $24 >>> 0;
       $49 = $45 ? $51 : $52;
       $52 = $39;
       $39 = ($22 | 0) == ($25 | 0) & $39 >>> 0 < $55 >>> 0 | $22 >>> 0 < $25 >>> 0;
       $51 = $39 ? $52 : $55;
       $23 = $45 ? $23 : $24;
       $24 = $39 ? $22 : $25;
       $22 = ($23 | 0) == ($24 | 0) & $49 >>> 0 > $51 >>> 0 | $23 >>> 0 > $24 >>> 0;
       $45 = $22 ? $49 : $51;
       $18 = $54 ? $5 : $18;
       $22 = $22 ? $23 : $24;
       $39 = ($18 | 0) == ($22 | 0) & $45 >>> 0 < $48 >>> 0 | $18 >>> 0 > $22 >>> 0;
       $5 = $39 ? $48 : $45;
       $25 = ($16 | 0) == ($21 | 0) & $34 >>> 0 < $41 >>> 0 | $16 >>> 0 < $21 >>> 0;
       $34 = $25 ? $34 : $41;
       $52 = $31;
       $31 = ($6 | 0) == ($17 | 0) & $31 >>> 0 < $37 >>> 0 | $6 >>> 0 < $17 >>> 0;
       $37 = $31 ? $52 : $37;
       $16 = $25 ? $16 : $21;
       $17 = $31 ? $6 : $17;
       $25 = ($16 | 0) == ($17 | 0) & $37 >>> 0 < $34 >>> 0 | $16 >>> 0 > $17 >>> 0;
       $6 = $25 ? $34 : $37;
       $21 = ($15 | 0) == ($20 | 0) & $44 >>> 0 < $47 >>> 0 | $15 >>> 0 > $20 >>> 0;
       $41 = $21 ? $44 : $47;
       $31 = ($13 | 0) == ($19 | 0) & $42 >>> 0 < $43 >>> 0 | $13 >>> 0 > $19 >>> 0;
       $42 = $31 ? $42 : $43;
       $21 = $21 ? $20 : $15;
       $19 = $31 ? $19 : $13;
       $20 = ($21 | 0) == ($19 | 0) & $41 >>> 0 > $42 >>> 0 | $21 >>> 0 > $19 >>> 0;
       $31 = $20 ? $41 : $42;
       $13 = $25 ? $16 : $17;
       $20 = $20 ? $21 : $19;
       $44 = ($13 | 0) == ($20 | 0) & $6 >>> 0 > $31 >>> 0 | $13 >>> 0 > $20 >>> 0;
       $15 = ($12 | 0) == ($14 | 0) & $35 >>> 0 < $36 >>> 0 | $12 >>> 0 < $14 >>> 0;
       $36 = $15 ? $35 : $36;
       $25 = ($7 | 0) == ($11 | 0) & $30 >>> 0 > $33 >>> 0 | $7 >>> 0 < $11 >>> 0;
       $43 = $25 ? $33 : $30;
       $12 = $15 ? $12 : $14;
       $14 = $25 ? $7 : $11;
       $7 = ($12 | 0) == ($14 | 0) & $36 >>> 0 > $43 >>> 0 | $12 >>> 0 > $14 >>> 0;
       $35 = $7 ? $36 : $43;
       $15 = $44 ? $13 : $20;
       $25 = $7 ? $12 : $14;
       $44 = $44 ? $6 : $31;
       $7 = ($15 | 0) == ($25 | 0) & $35 >>> 0 < $44 >>> 0 | $15 >>> 0 > $25 >>> 0;
       $33 = $39 ? $18 : $22;
       $30 = $7 ? $15 : $25;
       $47 = $7 ? $44 : $35;
       $39 = ($33 | 0) == ($30 | 0) & $47 >>> 0 < $5 >>> 0 | $30 >>> 0 < $33 >>> 0;
       $7 = ($27 | 0) == ($32 | 0) & $50 >>> 0 < $57 >>> 0 | $27 >>> 0 > $32 >>> 0;
       $50 = $7 ? $50 : $57;
       $11 = $46;
       $46 = ($26 | 0) == ($28 | 0) & $46 >>> 0 < $56 >>> 0 | $26 >>> 0 < $28 >>> 0;
       $11 = $46 ? $11 : $56;
       $52 = $29;
       $29 = ($8 | 0) == ($10 | 0) & $29 >>> 0 < $40 >>> 0 | $8 >>> 0 < $10 >>> 0;
       $40 = $29 ? $52 : $40;
       $26 = $46 ? $26 : $28;
       $10 = $29 ? $8 : $10;
       $8 = ($26 | 0) == ($10 | 0) & $11 >>> 0 > $40 >>> 0 | $10 >>> 0 < $26 >>> 0;
       $46 = $8 ? $11 : $40;
       $28 = $7 ? $32 : $27;
       $32 = $8 ? $26 : $10;
       $8 = ($28 | 0) == ($32 | 0) & $46 >>> 0 < $50 >>> 0 | $28 >>> 0 > $32 >>> 0;
       $7 = $8 ? $50 : $46;
       $27 = $39 ? $33 : $30;
       $29 = $8 ? $28 : $32;
       $39 = $39 ? $5 : $47;
       $8 = ($27 | 0) == ($29 | 0) & $7 >>> 0 < $39 >>> 0 | $27 >>> 0 > $29 >>> 0;
       HEAP32[$4 + 88 >> 2] = $8 ? $39 : $7;
       HEAP32[$4 + 92 >> 2] = $8 ? $27 : $29;
       $8 = ($21 | 0) == ($19 | 0) & $41 >>> 0 < $42 >>> 0 | $21 >>> 0 < $19 >>> 0;
       $41 = $8 ? $41 : $42;
       $52 = $34;
       $34 = ($16 | 0) == ($17 | 0) & $37 >>> 0 > $34 >>> 0 | $16 >>> 0 < $17 >>> 0;
       $37 = $34 ? $52 : $37;
       $21 = $8 ? $21 : $19;
       $17 = $34 ? $16 : $17;
       $19 = ($21 | 0) == ($17 | 0) & $37 >>> 0 > $41 >>> 0 | $17 >>> 0 > $21 >>> 0;
       $8 = $19 ? $41 : $37;
       $16 = ($10 | 0) == ($26 | 0) & $11 >>> 0 < $40 >>> 0 | $10 >>> 0 > $26 >>> 0;
       $11 = $16 ? $11 : $40;
       $34 = $36;
       $36 = ($12 | 0) == ($14 | 0) & $36 >>> 0 < $43 >>> 0 | $12 >>> 0 < $14 >>> 0;
       $40 = $36 ? $34 : $43;
       $16 = $16 ? $26 : $10;
       $12 = $36 ? $12 : $14;
       $10 = ($16 | 0) == ($12 | 0) & $11 >>> 0 < $40 >>> 0 | $12 >>> 0 > $16 >>> 0;
       $14 = $19 ? $21 : $17;
       $19 = $10 ? $16 : $12;
       $36 = $10 ? $11 : $40;
       $10 = ($14 | 0) == ($19 | 0) & $36 >>> 0 > $8 >>> 0 | $14 >>> 0 < $19 >>> 0;
       HEAP32[$4 >> 2] = $10 ? $8 : $36;
       HEAP32[$4 + 4 >> 2] = $10 ? $14 : $19;
       $43 = ($27 | 0) == ($29 | 0) & $7 >>> 0 > $39 >>> 0 | $27 >>> 0 < $29 >>> 0;
       $7 = $43 ? $39 : $7;
       $10 = ($28 | 0) == ($32 | 0) & $46 >>> 0 > $50 >>> 0 | $28 >>> 0 < $32 >>> 0;
       $34 = $10 ? $50 : $46;
       $26 = $5;
       $5 = ($30 | 0) == ($33 | 0) & $5 >>> 0 < $47 >>> 0 | $30 >>> 0 > $33 >>> 0;
       $42 = $5 ? $26 : $47;
       $26 = $10 ? $28 : $32;
       $28 = $5 ? $33 : $30;
       $5 = ($26 | 0) == ($28 | 0) & $34 >>> 0 > $42 >>> 0 | $26 >>> 0 > $28 >>> 0;
       $10 = $5 ? $34 : $42;
       $32 = $43 ? $27 : $29;
       $27 = $5 ? $26 : $28;
       $5 = $7;
       $7 = $10;
       $10 = ($32 | 0) == ($27 | 0) & $5 >>> 0 > $7 >>> 0 | $27 >>> 0 < $32 >>> 0;
       HEAP32[$4 + 80 >> 2] = $10 ? $5 : $7;
       HEAP32[$4 + 84 >> 2] = $10 ? $32 : $27;
       $10 = ($23 | 0) == ($24 | 0) & $49 >>> 0 < $51 >>> 0 | $23 >>> 0 < $24 >>> 0;
       $33 = $10 ? $49 : $51;
       $29 = ($15 | 0) == ($25 | 0) & $35 >>> 0 > $44 >>> 0 | $15 >>> 0 < $25 >>> 0;
       $30 = $29 ? $44 : $35;
       $10 = $10 ? $23 : $24;
       $15 = $29 ? $15 : $25;
       $23 = ($10 | 0) == ($15 | 0) & $30 >>> 0 > $33 >>> 0 | $10 >>> 0 < $15 >>> 0;
       $29 = $23 ? $33 : $30;
       $25 = $11;
       $11 = ($12 | 0) == ($16 | 0) & $11 >>> 0 > $40 >>> 0 | $12 >>> 0 < $16 >>> 0;
       $24 = $11 ? $25 : $40;
       $25 = ($17 | 0) == ($21 | 0) & $37 >>> 0 < $41 >>> 0 | $17 >>> 0 < $21 >>> 0;
       $35 = $25 ? $41 : $37;
       $12 = $11 ? $16 : $12;
       $17 = $25 ? $21 : $17;
       $11 = ($12 | 0) == ($17 | 0) & $24 >>> 0 < $35 >>> 0 | $12 >>> 0 < $17 >>> 0;
       $40 = $11 ? $24 : $35;
       $16 = $23 ? $10 : $15;
       $21 = $11 ? $12 : $17;
       $23 = ($16 | 0) == ($21 | 0) & $29 >>> 0 < $40 >>> 0 | $16 >>> 0 < $21 >>> 0;
       $11 = $23 ? $29 : $40;
       $25 = ($18 | 0) == ($22 | 0) & $45 >>> 0 > $48 >>> 0 | $18 >>> 0 < $22 >>> 0;
       $37 = $25 ? $48 : $45;
       $39 = $6;
       $6 = ($13 | 0) == ($20 | 0) & $6 >>> 0 < $31 >>> 0 | $13 >>> 0 < $20 >>> 0;
       $31 = $6 ? $39 : $31;
       $18 = $25 ? $18 : $22;
       $13 = $6 ? $13 : $20;
       $20 = ($18 | 0) == ($13 | 0) & $31 >>> 0 > $37 >>> 0 | $13 >>> 0 > $18 >>> 0;
       $6 = $20 ? $37 : $31;
       $22 = $8;
       $8 = ($14 | 0) == ($19 | 0) & $8 >>> 0 > $36 >>> 0 | $14 >>> 0 > $19 >>> 0;
       $25 = $8 ? $22 : $36;
       $20 = $20 ? $18 : $13;
       $14 = $8 ? $14 : $19;
       $8 = ($20 | 0) == ($14 | 0) & $6 >>> 0 < $25 >>> 0 | $14 >>> 0 > $20 >>> 0;
       $19 = $23 ? $16 : $21;
       $23 = $8 ? $20 : $14;
       $36 = $8 ? $6 : $25;
       $8 = ($19 | 0) == ($23 | 0) & $36 >>> 0 > $11 >>> 0 | $19 >>> 0 < $23 >>> 0;
       HEAP32[$4 + 8 >> 2] = $8 ? $11 : $36;
       HEAP32[$4 + 12 >> 2] = $8 ? $19 : $23;
       $22 = ($27 | 0) == ($32 | 0) & $5 >>> 0 < $7 >>> 0 | $27 >>> 0 > $32 >>> 0;
       $7 = $22 ? $5 : $7;
       $8 = ($13 | 0) == ($18 | 0) & $31 >>> 0 < $37 >>> 0 | $13 >>> 0 < $18 >>> 0;
       $5 = $8 ? $37 : $31;
       $31 = $30;
       $30 = ($10 | 0) == ($15 | 0) & $30 >>> 0 < $33 >>> 0 | $10 >>> 0 > $15 >>> 0;
       $33 = $30 ? $33 : $31;
       $13 = $8 ? $18 : $13;
       $10 = $30 ? $10 : $15;
       $8 = ($13 | 0) == ($10 | 0) & $5 >>> 0 > $33 >>> 0 | $10 >>> 0 < $13 >>> 0;
       $30 = $8 ? $5 : $33;
       $15 = ($26 | 0) == ($28 | 0) & $34 >>> 0 < $42 >>> 0 | $26 >>> 0 < $28 >>> 0;
       $31 = $15 ? $34 : $42;
       $18 = ($12 | 0) == ($17 | 0) & $24 >>> 0 > $35 >>> 0 | $12 >>> 0 > $17 >>> 0;
       $35 = $18 ? $24 : $35;
       $15 = $15 ? $26 : $28;
       $12 = $18 ? $12 : $17;
       $18 = ($15 | 0) == ($12 | 0) & $31 >>> 0 > $35 >>> 0 | $12 >>> 0 < $15 >>> 0;
       $26 = $18 ? $31 : $35;
       $17 = $8 ? $13 : $10;
       $18 = $18 ? $15 : $12;
       $28 = ($17 | 0) == ($18 | 0) & $26 >>> 0 < $30 >>> 0 | $17 >>> 0 > $18 >>> 0;
       $8 = $28 ? $30 : $26;
       $24 = $22 ? $32 : $27;
       $22 = $28 ? $17 : $18;
       $28 = ($24 | 0) == ($22 | 0) & $7 >>> 0 > $8 >>> 0 | $22 >>> 0 < $24 >>> 0;
       HEAP32[$4 + 72 >> 2] = $28 ? $7 : $8;
       HEAP32[$4 + 76 >> 2] = $28 ? $24 : $22;
       $27 = $7;
       $7 = ($22 | 0) == ($24 | 0) & $7 >>> 0 < $8 >>> 0 | $22 >>> 0 > $24 >>> 0;
       HEAP32[$4 + 64 >> 2] = $7 ? $27 : $8;
       HEAP32[$4 + 68 >> 2] = $7 ? $24 : $22;
       $7 = $5;
       $5 = ($10 | 0) == ($13 | 0) & $5 >>> 0 < $33 >>> 0 | $10 >>> 0 > $13 >>> 0;
       $24 = $5 ? $7 : $33;
       $8 = ($12 | 0) == ($15 | 0) & $31 >>> 0 < $35 >>> 0 | $12 >>> 0 > $15 >>> 0;
       $22 = $8 ? $31 : $35;
       $7 = $5 ? $13 : $10;
       $8 = $8 ? $15 : $12;
       $5 = ($7 | 0) == ($8 | 0) & $22 >>> 0 < $24 >>> 0 | $7 >>> 0 > $8 >>> 0;
       $13 = $5 ? $24 : $22;
       $12 = ($17 | 0) == ($18 | 0) & $26 >>> 0 > $30 >>> 0 | $17 >>> 0 < $18 >>> 0;
       $15 = $12 ? $30 : $26;
       $10 = $5 ? $7 : $8;
       $12 = $12 ? $17 : $18;
       $5 = ($10 | 0) == ($12 | 0) & $13 >>> 0 > $15 >>> 0 | $10 >>> 0 > $12 >>> 0;
       HEAP32[$4 + 56 >> 2] = $5 ? $13 : $15;
       HEAP32[$4 + 60 >> 2] = $5 ? $10 : $12;
       $17 = ($16 | 0) == ($21 | 0) & $29 >>> 0 > $40 >>> 0 | $16 >>> 0 > $21 >>> 0;
       $5 = $17 ? $29 : $40;
       $29 = $6;
       $6 = ($14 | 0) == ($20 | 0) & $6 >>> 0 > $25 >>> 0 | $14 >>> 0 < $20 >>> 0;
       $18 = $6 ? $29 : $25;
       $17 = $17 ? $16 : $21;
       $14 = $6 ? $20 : $14;
       $6 = $5;
       $5 = ($17 | 0) == ($14 | 0) & $18 >>> 0 > $5 >>> 0 | $14 >>> 0 > $17 >>> 0;
       $21 = $5 ? $6 : $18;
       $16 = ($19 | 0) == ($23 | 0) & $11 >>> 0 > $36 >>> 0 | $19 >>> 0 > $23 >>> 0;
       $20 = $16 ? $11 : $36;
       $11 = $5 ? $17 : $14;
       $16 = $16 ? $19 : $23;
       $5 = ($11 | 0) == ($16 | 0) & $21 >>> 0 < $20 >>> 0 | $11 >>> 0 < $16 >>> 0;
       HEAP32[$4 + 16 >> 2] = $5 ? $21 : $20;
       HEAP32[$4 + 20 >> 2] = $5 ? $11 : $16;
       $5 = $15;
       $15 = ($10 | 0) == ($12 | 0) & $13 >>> 0 < $15 >>> 0 | $10 >>> 0 < $12 >>> 0;
       $5 = $15 ? $13 : $5;
       $23 = ($7 | 0) == ($8 | 0) & $22 >>> 0 > $24 >>> 0 | $7 >>> 0 < $8 >>> 0;
       $19 = $23 ? $24 : $22;
       $29 = $6;
       $6 = ($14 | 0) == ($17 | 0) & $6 >>> 0 > $18 >>> 0 | $14 >>> 0 < $17 >>> 0;
       $13 = $6 ? $29 : $18;
       $8 = $23 ? $7 : $8;
       $14 = $6 ? $17 : $14;
       $6 = ($8 | 0) == ($14 | 0) & $13 >>> 0 < $19 >>> 0 | $8 >>> 0 > $14 >>> 0;
       $7 = $6 ? $19 : $13;
       $10 = $15 ? $10 : $12;
       $12 = $6 ? $8 : $14;
       $6 = $5;
       $5 = $7;
       $7 = ($10 | 0) == ($12 | 0) & $6 >>> 0 > $5 >>> 0 | $10 >>> 0 > $12 >>> 0;
       HEAP32[$4 + 48 >> 2] = $7 ? $6 : $5;
       HEAP32[$4 + 52 >> 2] = $7 ? $10 : $12;
       $7 = $6;
       $6 = ($10 | 0) == ($12 | 0) & $6 >>> 0 < $5 >>> 0 | $10 >>> 0 < $12 >>> 0;
       HEAP32[$4 + 40 >> 2] = $6 ? $7 : $5;
       HEAP32[$4 + 44 >> 2] = $6 ? $10 : $12;
       $6 = ($8 | 0) == ($14 | 0) & $13 >>> 0 > $19 >>> 0 | $8 >>> 0 < $14 >>> 0;
       $7 = $6 ? $19 : $13;
       $5 = ($11 | 0) == ($16 | 0) & $21 >>> 0 > $20 >>> 0 | $11 >>> 0 > $16 >>> 0;
       $10 = $5 ? $21 : $20;
       $6 = $6 ? $8 : $14;
       $5 = $5 ? $11 : $16;
       $11 = ($6 | 0) == ($5 | 0) & $7 >>> 0 > $10 >>> 0 | $6 >>> 0 > $5 >>> 0;
       HEAP32[$4 + 32 >> 2] = $11 ? $7 : $10;
       HEAP32[$4 + 36 >> 2] = $11 ? $6 : $5;
       $11 = $7;
       $7 = ($6 | 0) == ($5 | 0) & $7 >>> 0 < $10 >>> 0 | $6 >>> 0 < $5 >>> 0;
       HEAP32[$4 + 24 >> 2] = $7 ? $11 : $10;
       HEAP32[$4 + 28 >> 2] = $7 ? $6 : $5;
       $6 = 13;
      }
      if ($6 >>> 0 > $9 >>> 0) {
       break block10
      }
      if (($6 | 0) != ($9 | 0)) {
       $14 = ($9 << 3) + $4 | 0;
       $5 = $6 << 3;
       $6 = $5 + $4 | 0;
       while (1) {
        $9 = $6 - 8 | 0;
        $7 = HEAP32[$9 >> 2];
        $8 = HEAP32[$6 + 4 >> 2];
        $11 = HEAP32[$9 + 4 >> 2];
        $9 = $11;
        $10 = HEAP32[$6 >> 2];
        if (!(($8 | 0) == ($9 | 0) & $7 >>> 0 <= $10 >>> 0 | $8 >>> 0 > $9 >>> 0)) {
         $9 = $5;
         block205 : {
          while (1) {
           $12 = $4 + $9 | 0;
           HEAP32[$12 >> 2] = $7;
           HEAP32[$12 + 4 >> 2] = $11;
           $7 = $4;
           if (($9 | 0) == 8) {
            break block205
           }
           $9 = $9 - 8 | 0;
           $11 = $12 - 16 | 0;
           $7 = HEAP32[$11 >> 2];
           $11 = HEAP32[$11 + 4 >> 2];
           if (($11 | 0) == ($8 | 0) & $7 >>> 0 > $10 >>> 0 | $8 >>> 0 < $11 >>> 0) {
            continue
           }
           break;
          };
          $7 = $4 + $9 | 0;
         }
         $9 = $7;
         HEAP32[$9 >> 2] = $10;
         HEAP32[$9 + 4 >> 2] = $8;
        }
        $5 = $5 + 8 | 0;
        $6 = $6 + 8 | 0;
        if (($14 | 0) != ($6 | 0)) {
         continue
        }
        break;
       };
      }
      if ($58) {
       break block2
      }
      $6 = ($0 | 0) == ($4 | 0);
      $9 = $38;
      $4 = $3;
      if ($6) {
       continue
      }
      break;
     };
     $7 = $4 - 8 | 0;
     $9 = ($1 << 3) - 8 | 0;
     $4 = $9 + $0 | 0;
     $5 = $9 + $53 | 0;
     $6 = $53;
     $9 = $0;
     while (1) {
      $17 = HEAP32[$3 >> 2];
      $16 = HEAP32[$9 >> 2];
      $11 = HEAP32[$3 + 4 >> 2];
      $8 = HEAP32[$9 + 4 >> 2];
      $19 = ($11 | 0) == ($8 | 0) & $16 >>> 0 > $17 >>> 0 | $8 >>> 0 > $11 >>> 0;
      HEAP32[$6 >> 2] = $19 ? $17 : $16;
      HEAP32[$6 + 4 >> 2] = $19 ? $11 : $8;
      $38 = HEAP32[$4 + 4 >> 2];
      $10 = HEAP32[$7 + 4 >> 2];
      $12 = HEAP32[$4 >> 2];
      $14 = HEAP32[$7 >> 2];
      $13 = $10 >>> 0 < $38 >>> 0;
      $21 = ($38 | 0) == ($10 | 0) & $12 >>> 0 > $14 >>> 0 | $13;
      HEAP32[$5 >> 2] = $21 ? $12 : $14;
      HEAP32[$5 + 4 >> 2] = $21 ? $38 : $10;
      $5 = $5 - 8 | 0;
      $6 = $6 + 8 | 0;
      $21 = ($10 | 0) == ($38 | 0);
      $7 = ($21 & $12 >>> 0 < $14 >>> 0 | $10 >>> 0 > $38 >>> 0 ? -8 : 0) + $7 | 0;
      $4 = ($13 | $12 >>> 0 >= $14 >>> 0 & $21 ? -8 : 0) + $4 | 0;
      $9 = ((($8 | 0) == ($11 | 0) & $16 >>> 0 <= $17 >>> 0 | $8 >>> 0 < $11 >>> 0) << 3) + $9 | 0;
      $3 = ($19 << 3) + $3 | 0;
      $2 = $2 - 1 | 0;
      if ($2) {
       continue
      }
      break;
     };
     $2 = $7 + 8 | 0;
     if ($1 & 1) {
      $5 = $2 >>> 0 > $9 >>> 0;
      $7 = $5 ? $9 : $3;
      $11 = HEAP32[$7 + 4 >> 2];
      HEAP32[$6 >> 2] = HEAP32[$7 >> 2];
      HEAP32[$6 + 4 >> 2] = $11;
      $3 = (($2 >>> 0 <= $9 >>> 0) << 3) + $3 | 0;
      $9 = ($5 << 3) + $9 | 0;
     }
     if (($9 | 0) != ($2 | 0)) {
      break block22
     }
     if (($4 + 8 | 0) != ($3 | 0)) {
      break block22
     }
     _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $53, $1 << 3);
     break block2;
    }
    wasm2js_trap();
   }
   _RNvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared9smallsort22panic_on_ord_violation();
   wasm2js_trap();
  }
  __stack_pointer = $53 + 256 | 0;
 }
 
 function _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recyNvYyNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  if ($3 >>> 0 >= 8) {
   $3 = $3 >>> 3 | 0;
   $5 = $3 << 5;
   $4 = Math_imul($3, 56);
   $0 = _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recyNvYyNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($0, $5 + $0 | 0, $4 + $0 | 0, $3);
   $1 = _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recyNvYyNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($1, $1 + $5 | 0, $1 + $4 | 0, $3);
   $2 = _RINvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared5pivot11median3_recyNvYyNtNtBa_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($2, $2 + $5 | 0, $2 + $4 | 0, $3);
  }
  $7 = HEAP32[$0 + 4 >> 2];
  $4 = $7;
  $6 = HEAP32[$1 + 4 >> 2];
  $3 = HEAP32[$0 >> 2];
  $5 = HEAP32[$1 >> 2];
  $8 = ($4 | 0) == ($6 | 0) & $3 >>> 0 < $5 >>> 0 | $4 >>> 0 < $6 >>> 0;
  $9 = $1;
  $1 = HEAP32[$2 + 4 >> 2];
  $4 = HEAP32[$2 >> 2];
  return $8 ^ (($1 | 0) == ($7 | 0) & $3 >>> 0 < $4 >>> 0 | $1 >>> 0 > $7 >>> 0) ? $0 : $8 ^ (($1 | 0) == ($6 | 0) & $4 >>> 0 > $5 >>> 0 | $1 >>> 0 > $6 >>> 0) ? $2 : $9;
 }
 
 function _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($0, $1, $2, $3, $4, $5) {
  var $6 = 0, $7 = 0;
  $7 = 1;
  $6 = 4;
  $3 = __wasm_i64_mul($5, 0, $3, 0);
  block1 : {
   if (i64toi32_i32$HIGH_BITS) {
    $3 = 0;
    break block1;
   }
   if ($3 >>> 0 > -2147483648 - $4 >>> 0) {
    $3 = 0;
    break block1;
   }
   block7 : {
    block6 : {
     block4 : {
      if ($1) {
       $6 = _RNvCs9hJ03s5DiqP_7___rustc14___rust_realloc($2, Math_imul($1, $5), $3);
       break block4;
      }
      if (!$3) {
       $6 = $4;
       break block6;
      }
      $6 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($3);
     }
     if ($6) {
      break block6
     }
     HEAP32[$0 + 4 >> 2] = $4;
     break block7;
    }
    HEAP32[$0 + 4 >> 2] = $6;
    $7 = 0;
   }
   $6 = 8;
  }
  HEAP32[$0 + $6 >> 2] = $3;
  HEAP32[$0 >> 2] = $7;
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $3 = $0;
  $0 = HEAP32[$0 + 112 >> 2];
  $2 = HEAP32[$3 + 116 >> 2];
  $0 = $0 + 1 | 0;
  $2 = $0 ? $2 : $2 + 1 | 0;
  HEAP32[$3 + 112 >> 2] = $0;
  HEAP32[$3 + 116 >> 2] = $2;
  $0 = HEAP32[$3 + 288 >> 2];
  if ($1 >>> 0 < $0 >>> 0) {
   $8 = HEAP32[$3 + 284 >> 2];
   $4 = $8 + Math_imul($1, 152) | 0;
   if (HEAPU8[$4 + 148 | 0] == 2) {
    $11 = HEAP32[$3 + 224 >> 2];
    $12 = HEAP32[$3 + 228 >> 2];
    $5 = HEAP32[$3 + 376 >> 2];
    HEAP32[$3 + 376 >> 2] = $5 + 1;
    $6 = HEAP32[$4 + 132 >> 2];
    $2 = HEAP32[$4 + 40 >> 2];
    if (($2 | 0) == HEAP32[$4 + 32 >> 2]) {
     _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtCseywxCc024wH_14raftscope_core3sim5EntryE8grow_oneBQ_($4 + 32 | 0)
    }
    $7 = HEAP32[$4 + 36 >> 2] + ($2 << 3) | 0;
    HEAP32[$7 + 4 >> 2] = $5;
    HEAP32[$7 >> 2] = $6;
    HEAP32[$4 + 40 >> 2] = $2 + 1;
    $5 = HEAP32[$4 + 8 >> 2];
    $2 = HEAP32[$4 + 20 >> 2];
    if (($5 | 0) == ($2 | 0)) {
     $2 = $4 + 8 | 0;
     $5 = HEAP32[$2 >> 2];
     _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($2);
     $9 = HEAP32[$2 + 8 >> 2];
     $6 = HEAP32[$2 + 12 >> 2];
     if ($9 >>> 0 > $5 - $6 >>> 0) {
      __inlined_func$_RNvMs3_NtNtCsl5a4uRf33NA_5alloc11collections9vec_dequeINtB5_8VecDequemE4growCseywxCc024wH_14raftscope_core$83 : {
       $7 = $6;
       $6 = $5 - $9 | 0;
       $7 = $7 - $6 | 0;
       $10 = HEAP32[$2 >> 2];
       if (!($7 >>> 0 <= $10 - $5 >>> 0 & $6 >>> 0 > $7 >>> 0)) {
        $5 = HEAP32[$2 + 4 >> 2];
        $7 = $10 - $6 | 0;
        _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem7memmove($5 + ($7 << 2) | 0, $5 + ($9 << 2) | 0, $6 << 2);
        HEAP32[$2 + 8 >> 2] = $7;
        break __inlined_func$_RNvMs3_NtNtCsl5a4uRf33NA_5alloc11collections9vec_dequeINtB5_8VecDequemE4growCseywxCc024wH_14raftscope_core$83;
       }
       $2 = HEAP32[$2 + 4 >> 2];
       _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($2 + ($5 << 2) | 0, $2, $7 << 2);
      }
     }
     $5 = HEAP32[$4 + 8 >> 2];
     $2 = HEAP32[$4 + 20 >> 2];
    }
    HEAP32[$4 + 20 >> 2] = $2 + 1;
    $2 = HEAP32[$4 + 16 >> 2] + $2 | 0;
    HEAP32[HEAP32[$4 + 12 >> 2] + ($2 - ($2 >>> 0 >= $5 >>> 0 ? $5 : 0) << 2) >> 2] = 1;
    $4 = HEAP32[$3 + 324 >> 2];
    if (($4 | 0) == HEAP32[$3 + 316 >> 2]) {
     $0 = __stack_pointer - 16 | 0;
     __stack_pointer = $0;
     $2 = $3 + 316 | 0;
     $6 = HEAP32[$2 >> 2];
     $5 = $6 << 1;
     $5 = $5 >>> 0 <= 4 ? 4 : $5;
     _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($0 + 4 | 0, $6, HEAP32[$2 + 4 >> 2], $5, 8, 8);
     if (HEAP32[$0 + 4 >> 2] == 1) {
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$0 + 8 >> 2]);
      wasm2js_trap();
     }
     $6 = HEAP32[$0 + 8 >> 2];
     HEAP32[$2 >> 2] = $5;
     HEAP32[$2 + 4 >> 2] = $6;
     __stack_pointer = $0 + 16 | 0;
     $8 = HEAP32[$3 + 284 >> 2];
     $0 = HEAP32[$3 + 288 >> 2];
    }
    HEAP32[$3 + 324 >> 2] = $4 + 1;
    $2 = HEAP32[$3 + 320 >> 2] + ($4 << 3) | 0;
    HEAP32[$2 >> 2] = $11;
    HEAP32[$2 + 4 >> 2] = $12;
    if ($0) {
     $2 = 0;
     while (1) {
      if (($1 | 0) != ($2 | 0)) {
       _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($8, $0, $1, $2)
      }
      $2 = $2 + 1 | 0;
      if (($2 | 0) != ($0 | 0)) {
       continue
      }
      break;
     };
    }
    _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim20advance_commit_index($3, $1);
    $0 = HEAP32[$3 + 312 >> 2];
    if ($1 >>> 0 < $0 >>> 0) {
     $0 = HEAP32[$3 + 228 >> 2];
     $5 = $0;
     $2 = HEAP32[$3 + 308 >> 2] + ($1 << 3) | 0;
     $6 = HEAP32[$3 + 224 >> 2];
     HEAP32[$2 >> 2] = $6;
     HEAP32[$2 + 4 >> 2] = $0;
     $0 = HEAP32[$3 + 300 >> 2];
     if (($0 | 0) == HEAP32[$3 + 292 >> 2]) {
      _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($3 + 292 | 0)
     }
     HEAP32[$3 + 300 >> 2] = $0 + 1;
     $7 = HEAP32[$3 + 296 >> 2];
     $3 = $7 + ($0 << 4) | 0;
     HEAP32[$3 + 8 >> 2] = $1;
     HEAP32[$3 >> 2] = $6;
     HEAP32[$3 + 4 >> 2] = $5;
     $2 = 0;
     block9 : {
      if (!$0) {
       break block9
      }
      while (1) {
       $3 = $0 - 1 >>> 1 | 0;
       $4 = $7 + ($3 << 4) | 0;
       $8 = HEAP32[$4 >> 2];
       $9 = HEAP32[$4 + 4 >> 2];
       if (($6 | 0) == ($8 | 0) & ($5 | 0) == ($9 | 0) ? HEAPU32[$4 + 8 >> 2] <= $1 >>> 0 : ($5 | 0) == ($9 | 0) & $6 >>> 0 >= $8 >>> 0 | $5 >>> 0 > $9 >>> 0) {
        $2 = $0;
        break block9;
       }
       $8 = HEAP32[$4 + 12 >> 2];
       $0 = $7 + ($0 << 4) | 0;
       HEAP32[$0 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
       HEAP32[$0 + 12 >> 2] = $8;
       $8 = HEAP32[$4 + 4 >> 2];
       HEAP32[$0 >> 2] = HEAP32[$4 >> 2];
       HEAP32[$0 + 4 >> 2] = $8;
       $0 = $3;
       if ($0) {
        continue
       }
       break;
      };
     }
     $0 = $7 + ($2 << 4) | 0;
     HEAP32[$0 + 8 >> 2] = $1;
     HEAP32[$0 >> 2] = $6;
     HEAP32[$0 + 4 >> 2] = $5;
     return;
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $0, 1055096);
    wasm2js_trap();
   }
   $0 = HEAP32[$3 + 124 >> 2];
   $1 = $0;
   $2 = $0 + 1 | 0;
   $0 = HEAP32[$3 + 120 >> 2] + 1 | 0;
   $1 = $0 ? $1 : $2;
   HEAP32[$3 + 120 >> 2] = $0;
   HEAP32[$3 + 124 >> 2] = $1;
   return;
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $0, 1054492);
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $7 = __stack_pointer - 16 | 0;
  __stack_pointer = $7;
  block6 : {
   block7 : {
    $10 = HEAP32[$0 + 288 >> 2];
    if ($1 >>> 0 < $10 >>> 0) {
     $8 = HEAP32[$0 + 284 >> 2];
     $3 = $8 + Math_imul($1, 152) | 0;
     $18 = HEAPU8[$3 + 148 | 0];
     block5 : {
      block2 : {
       $4 = HEAP32[$3 + 28 >> 2];
       $11 = HEAP32[$0 + 228 >> 2];
       $5 = $11;
       $1 = HEAP32[$3 + 24 >> 2];
       $9 = HEAP32[$0 + 224 >> 2];
       if (!(($4 | 0) == ($5 | 0) & $1 >>> 0 <= $9 >>> 0 | $4 >>> 0 < $5 >>> 0)) {
        if (($1 & $4) != -1) {
         break block2
        }
       }
       $1 = HEAP32[$0 + 164 >> 2];
       $12 = $1;
       $5 = HEAP32[$0 + 160 >> 2];
       block4 : {
        if (!($1 | $5)) {
         $4 = 0;
         $6 = 0;
         break block4;
        }
        $13 = HEAP32[$0 + 236 >> 2];
        $14 = $13 ^ HEAP32[$0 + 252 >> 2];
        $4 = HEAP32[$0 + 244 >> 2];
        $15 = HEAP32[$0 + 232 >> 2];
        $16 = $15 ^ HEAP32[$0 + 248 >> 2];
        $1 = HEAP32[$0 + 240 >> 2];
        HEAP32[$0 + 240 >> 2] = $16 ^ $1;
        HEAP32[$0 + 244 >> 2] = $4 ^ $14;
        $17 = HEAP32[$0 + 256 >> 2] ^ $1;
        $6 = HEAP32[$0 + 260 >> 2] ^ $4;
        (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($17, $6, 45)), HEAP32[wasm2js_i32$0 + 256 >> 2] = wasm2js_i32$1;
        HEAP32[$0 + 260 >> 2] = i64toi32_i32$HIGH_BITS;
        HEAP32[$0 + 248 >> 2] = $1 << 17 ^ $16;
        HEAP32[$0 + 252 >> 2] = ($4 << 17 | $1 >>> 15) ^ $14;
        HEAP32[$0 + 232 >> 2] = $15 ^ $17;
        HEAP32[$0 + 236 >> 2] = $13 ^ $6;
        __multi3($7, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($1, $4, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $5, $12);
        $4 = HEAP32[$7 + 12 >> 2];
        $6 = HEAP32[$7 + 8 >> 2];
       }
       $1 = $6;
       HEAP8[$3 + 148 | 0] = 0;
       HEAP32[$3 + 132 >> 2] = $2;
       HEAP32[$3 >> 2] = 0;
       _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($3);
       $2 = $11 + $12 | 0;
       $5 = $5 + $9 | 0;
       $2 = $4 + ($5 >>> 0 < $9 >>> 0 ? $2 + 1 | 0 : $2) | 0;
       $1 = $1 + $5 | 0;
       $2 = $6 >>> 0 > $1 >>> 0 ? $2 + 1 | 0 : $2;
       HEAP32[$3 + 24 >> 2] = $1;
       HEAP32[$3 + 28 >> 2] = $2;
       break block5;
      }
      HEAP8[$3 + 148 | 0] = 0;
      HEAP32[$3 + 132 >> 2] = $2;
      HEAP32[$3 >> 2] = 0;
      _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($3);
     }
     if (($18 | 0) != 2) {
      break block6
     }
     if (HEAP32[$0 >> 2]) {
      break block6
     }
     $1 = Math_imul($10, 152);
     while (1) {
      if (!$1) {
       break block7
      }
      $1 = $1 - 152 | 0;
      $2 = $8 + 148 | 0;
      $8 = $8 + 152 | 0;
      if (HEAPU8[$2 | 0] != 2) {
       continue
      }
      break;
     };
     break block6;
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $10, 1055272);
    wasm2js_trap();
   }
   HEAP32[$0 + 8 >> 2] = $9;
   HEAP32[$0 + 12 >> 2] = $11;
   HEAP32[$0 >> 2] = 1;
   HEAP32[$0 + 4 >> 2] = 0;
  }
  __stack_pointer = $7 + 16 | 0;
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0.0, $21 = 0, $22 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $18 = __stack_pointer - 16 | 0;
  __stack_pointer = $18;
  $10 = HEAP32[$0 + 224 >> 2];
  $16 = HEAP32[$0 + 228 >> 2];
  $7 = HEAP32[$0 + 176 >> 2];
  $14 = HEAP32[$0 + 168 >> 2];
  $11 = $7 - $14 | 0;
  $9 = HEAP32[$0 + 172 >> 2];
  $7 = HEAP32[$0 + 180 >> 2] - ($9 + ($7 >>> 0 < $14 >>> 0) | 0) | 0;
  $5 = $11 + 1 | 0;
  $6 = $5 ? $7 : $7 + 1 | 0;
  if ($5 | $6) {
   $15 = HEAP32[$0 + 236 >> 2];
   $12 = $15 ^ HEAP32[$0 + 252 >> 2];
   $7 = HEAP32[$0 + 244 >> 2];
   $13 = HEAP32[$0 + 232 >> 2];
   $8 = $13 ^ HEAP32[$0 + 248 >> 2];
   $11 = HEAP32[$0 + 240 >> 2];
   HEAP32[$0 + 240 >> 2] = $8 ^ $11;
   HEAP32[$0 + 244 >> 2] = $7 ^ $12;
   $17 = HEAP32[$0 + 256 >> 2] ^ $11;
   $19 = HEAP32[$0 + 260 >> 2] ^ $7;
   (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($17, $19, 45)), HEAP32[wasm2js_i32$0 + 256 >> 2] = wasm2js_i32$1;
   HEAP32[$0 + 260 >> 2] = i64toi32_i32$HIGH_BITS;
   HEAP32[$0 + 248 >> 2] = $11 << 17 ^ $8;
   HEAP32[$0 + 252 >> 2] = ($7 << 17 | $11 >>> 15) ^ $12;
   HEAP32[$0 + 232 >> 2] = $13 ^ $17;
   HEAP32[$0 + 236 >> 2] = $15 ^ $19;
   __multi3($18, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($11, $7, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $5, $6);
   $13 = HEAP32[$18 + 12 >> 2];
   $12 = HEAP32[$18 + 8 >> 2];
  }
  $7 = HEAP32[$0 + 268 >> 2];
  $11 = HEAP32[$0 + 264 >> 2] + 1 | 0;
  $7 = $11 ? $7 : $7 + 1 | 0;
  HEAP32[$0 + 264 >> 2] = $11;
  HEAP32[$0 + 268 >> 2] = $7;
  $5 = HEAP32[$0 + 84 >> 2];
  $8 = $5;
  $6 = $5 + 1 | 0;
  $5 = HEAP32[$0 + 80 >> 2] + 1 | 0;
  $6 = $5 ? $8 : $6;
  HEAP32[$0 + 80 >> 2] = $5;
  HEAP32[$0 + 84 >> 2] = $6;
  $15 = 0;
  $20 = HEAPF64[$0 + 192 >> 3];
  if ($20 > 0.0) {
   $8 = HEAP32[$0 + 236 >> 2];
   $15 = $8 ^ HEAP32[$0 + 252 >> 2];
   $5 = HEAP32[$0 + 244 >> 2];
   $17 = HEAP32[$0 + 232 >> 2];
   $19 = $17 ^ HEAP32[$0 + 248 >> 2];
   $6 = HEAP32[$0 + 240 >> 2];
   HEAP32[$0 + 240 >> 2] = $19 ^ $6;
   HEAP32[$0 + 244 >> 2] = $5 ^ $15;
   $21 = HEAP32[$0 + 256 >> 2] ^ $6;
   $22 = HEAP32[$0 + 260 >> 2] ^ $5;
   (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($21, $22, 45)), HEAP32[wasm2js_i32$0 + 256 >> 2] = wasm2js_i32$1;
   HEAP32[$0 + 260 >> 2] = i64toi32_i32$HIGH_BITS;
   HEAP32[$0 + 248 >> 2] = $6 << 17 ^ $19;
   HEAP32[$0 + 252 >> 2] = ($5 << 17 | $6 >>> 15) ^ $15;
   HEAP32[$0 + 232 >> 2] = $17 ^ $21;
   HEAP32[$0 + 236 >> 2] = $8 ^ $22;
   $5 = __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($6, $5, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0);
   $6 = i64toi32_i32$HIGH_BITS;
   $15 = $6 >>> 11 | 0;
   $15 = (+((($6 & 2047) << 21 | $5 >>> 11) >>> 0) + +($15 >>> 0) * 4294967296.0) * 1.1102230246251565e-16 < $20;
  }
  $5 = $9 + $16 | 0;
  $6 = $5 + 1 | 0;
  $8 = $5;
  $5 = $10 + $14 | 0;
  $6 = $13 + ($5 >>> 0 < $10 >>> 0 ? $6 : $8) | 0;
  $8 = $12;
  $12 = $5 + $12 | 0;
  $14 = $8 >>> 0 > $12 >>> 0 ? $6 + 1 | 0 : $6;
  block4 : {
   $5 = HEAP32[$0 + 44 >> 2];
   if (!$5) {
    $6 = HEAP32[$0 + 32 >> 2];
    if (($6 | 0) == HEAP32[$0 + 24 >> 2]) {
     $5 = __stack_pointer - 16 | 0;
     __stack_pointer = $5;
     $9 = $0 + 24 | 0;
     $8 = HEAP32[$9 >> 2];
     $13 = $8 << 1;
     $13 = $13 >>> 0 <= 4 ? 4 : $13;
     _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($5 + 4 | 0, $8, HEAP32[$9 + 4 >> 2], $13, 8, 64);
     if (HEAP32[$5 + 4 >> 2] == 1) {
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$5 + 8 >> 2]);
      wasm2js_trap();
     }
     $8 = HEAP32[$5 + 8 >> 2];
     HEAP32[$9 >> 2] = $13;
     HEAP32[$9 + 4 >> 2] = $8;
     __stack_pointer = $5 + 16 | 0;
    }
    HEAP32[$0 + 32 >> 2] = $6 + 1;
    $9 = HEAP32[$4 + 4 >> 2];
    $5 = HEAP32[$0 + 28 >> 2] + ($6 << 6) | 0;
    HEAP32[$5 >> 2] = HEAP32[$4 >> 2];
    HEAP32[$5 + 4 >> 2] = $9;
    $9 = HEAP32[$4 + 12 >> 2];
    HEAP32[$5 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
    HEAP32[$5 + 12 >> 2] = $9;
    $9 = HEAP32[$4 + 20 >> 2];
    HEAP32[$5 + 16 >> 2] = HEAP32[$4 + 16 >> 2];
    HEAP32[$5 + 20 >> 2] = $9;
    HEAP8[$5 + 60 | 0] = $15;
    HEAP32[$5 + 56 >> 2] = $3;
    HEAP32[$5 + 52 >> 2] = $2;
    HEAP32[$5 + 48 >> 2] = $1;
    HEAP32[$5 + 40 >> 2] = $12;
    HEAP32[$5 + 44 >> 2] = $14;
    HEAP32[$5 + 32 >> 2] = $10;
    HEAP32[$5 + 36 >> 2] = $16;
    HEAP32[$5 + 24 >> 2] = $11;
    HEAP32[$5 + 28 >> 2] = $7;
    break block4;
   }
   $5 = $5 - 1 | 0;
   HEAP32[$0 + 44 >> 2] = $5;
   $6 = HEAP32[HEAP32[$0 + 40 >> 2] + ($5 << 2) >> 2];
   $5 = HEAP32[$0 + 32 >> 2];
   if ($6 >>> 0 >= $5 >>> 0) {
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $5, 1054284);
    wasm2js_trap();
   }
   block9 : {
    block7 : {
     $5 = HEAP32[$0 + 28 >> 2] + ($6 << 6) | 0;
     $9 = HEAP32[$5 >> 2];
     block6 : {
      if (($9 | 0) == -1) {
       break block6
      }
      if (($9 | 0) <= 0) {
       break block6
      }
      $13 = HEAP32[$5 + 4 >> 2];
      $8 = HEAP32[$13 - 4 >> 2];
      $17 = $8 & -8;
      $9 = $9 << 3;
      $8 = $8 & 3;
      if ($17 >>> 0 < $9 + ($8 ? 4 : 8) >>> 0) {
       break block7
      }
      if (($8 | 0) != 0 & $9 + 39 >>> 0 < $17 >>> 0) {
       break block9
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($13);
     }
     HEAP8[$5 + 60 | 0] = $15;
     HEAP32[$5 + 56 >> 2] = $3;
     HEAP32[$5 + 52 >> 2] = $2;
     HEAP32[$5 + 48 >> 2] = $1;
     HEAP32[$5 + 40 >> 2] = $12;
     HEAP32[$5 + 44 >> 2] = $14;
     HEAP32[$5 + 32 >> 2] = $10;
     HEAP32[$5 + 36 >> 2] = $16;
     HEAP32[$5 + 24 >> 2] = $11;
     HEAP32[$5 + 28 >> 2] = $7;
     $1 = HEAP32[$4 + 20 >> 2];
     HEAP32[$5 + 16 >> 2] = HEAP32[$4 + 16 >> 2];
     HEAP32[$5 + 20 >> 2] = $1;
     $1 = HEAP32[$4 + 12 >> 2];
     HEAP32[$5 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
     HEAP32[$5 + 12 >> 2] = $1;
     $1 = HEAP32[$4 + 4 >> 2];
     HEAP32[$5 >> 2] = HEAP32[$4 >> 2];
     HEAP32[$5 + 4 >> 2] = $1;
     break block4;
    }
    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
   wasm2js_trap();
  }
  $4 = HEAP32[$0 + 56 >> 2];
  if (($4 | 0) == HEAP32[$0 + 48 >> 2]) {
   _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTyymEEE8grow_oneCseywxCc024wH_14raftscope_core($0 + 48 | 0)
  }
  HEAP32[$0 + 56 >> 2] = $4 + 1;
  $5 = HEAP32[$0 + 52 >> 2];
  $1 = $5 + Math_imul($4, 24) | 0;
  HEAP32[$1 + 16 >> 2] = $6;
  HEAP32[$1 + 8 >> 2] = $11;
  HEAP32[$1 + 12 >> 2] = $7;
  HEAP32[$1 >> 2] = $12;
  HEAP32[$1 + 4 >> 2] = $14;
  $2 = 0;
  block11 : {
   if (!$4) {
    break block11
   }
   while (1) {
    block14 : {
     $1 = $4;
     $4 = $1 - 1 >>> 1 | 0;
     $3 = $5 + Math_imul($4, 24) | 0;
     $16 = HEAP32[$3 >> 2];
     $10 = HEAP32[$3 + 4 >> 2];
     block13 : {
      if (!(($12 | 0) == ($16 | 0) & ($14 | 0) == ($10 | 0))) {
       if (($10 | 0) == ($14 | 0) & $12 >>> 0 < $16 >>> 0 | $10 >>> 0 > $14 >>> 0) {
        break block13
       }
       break block14;
      }
      $16 = HEAP32[$3 + 8 >> 2];
      $10 = HEAP32[$3 + 12 >> 2];
      if (!(($11 | 0) != ($16 | 0) | ($7 | 0) != ($10 | 0))) {
       if (HEAPU32[$3 + 16 >> 2] <= $6 >>> 0) {
        break block14
       }
       break block13;
      }
      if (($7 | 0) == ($10 | 0) & $11 >>> 0 >= $16 >>> 0 | $7 >>> 0 > $10 >>> 0) {
       break block14
      }
     }
     $10 = HEAP32[$3 + 20 >> 2];
     $1 = $5 + Math_imul($1, 24) | 0;
     HEAP32[$1 + 16 >> 2] = HEAP32[$3 + 16 >> 2];
     HEAP32[$1 + 20 >> 2] = $10;
     $10 = HEAP32[$3 + 12 >> 2];
     HEAP32[$1 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
     HEAP32[$1 + 12 >> 2] = $10;
     $10 = HEAP32[$3 + 4 >> 2];
     HEAP32[$1 >> 2] = HEAP32[$3 >> 2];
     HEAP32[$1 + 4 >> 2] = $10;
     if ($4) {
      continue
     }
     break block11;
    }
    break;
   };
   $2 = $1;
  }
  $1 = $5 + Math_imul($2, 24) | 0;
  HEAP32[$1 + 16 >> 2] = $6;
  HEAP32[$1 + 8 >> 2] = $11;
  HEAP32[$1 + 12 >> 2] = $7;
  HEAP32[$1 >> 2] = $12;
  HEAP32[$1 + 4 >> 2] = $14;
  HEAP32[$0 + 60 >> 2] = HEAP32[$0 + 60 >> 2] + 1;
  __stack_pointer = $18 + 16 | 0;
 }
 
 function _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0;
  folding_inner1 : {
   folding_inner0 : {
    $3 = HEAP32[$0 + 44 >> 2];
    if ($3) {
     $4 = HEAP32[$0 + 48 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $2 = $1 & -8;
     $1 = $1 & 3;
     if ($2 >>> 0 < $3 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $2 >>> 0 > $3 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    HEAP32[$0 + 140 >> 2] = 0;
    HEAP32[$0 + 52 >> 2] = 0;
    HEAP32[$0 + 44 >> 2] = 0;
    HEAP32[$0 + 48 >> 2] = 1;
    $2 = HEAP32[$0 + 56 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 60 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $3 = $1 & -8;
     $2 = $2 << 2;
     $1 = $1 & 3;
     if ($3 >>> 0 < $2 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    HEAP32[$0 + 64 >> 2] = 0;
    HEAP32[$0 + 56 >> 2] = 0;
    HEAP32[$0 + 60 >> 2] = 4;
    $2 = HEAP32[$0 + 68 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 72 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $3 = $1 & -8;
     $2 = $2 << 2;
     $1 = $1 & 3;
     if ($3 >>> 0 < $2 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    HEAP32[$0 + 76 >> 2] = 0;
    HEAP32[$0 + 68 >> 2] = 0;
    HEAP32[$0 + 72 >> 2] = 4;
    $2 = HEAP32[$0 + 80 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 84 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $3 = $1 & -8;
     $2 = $2 << 3;
     $1 = $1 & 3;
     if ($3 >>> 0 < $2 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    HEAP32[$0 + 88 >> 2] = 0;
    HEAP32[$0 + 80 >> 2] = 0;
    HEAP32[$0 + 84 >> 2] = 8;
    $2 = HEAP32[$0 + 92 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 96 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $3 = $1 & -8;
     $2 = $2 << 3;
     $1 = $1 & 3;
     if ($3 >>> 0 < $2 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    HEAP32[$0 + 100 >> 2] = 0;
    HEAP32[$0 + 92 >> 2] = 0;
    HEAP32[$0 + 96 >> 2] = 8;
    $2 = HEAP32[$0 + 104 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 108 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $3 = $1 & -8;
     $2 = $2 << 3;
     $1 = $1 & 3;
     if ($3 >>> 0 < $2 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    HEAP32[$0 + 112 >> 2] = 0;
    HEAP32[$0 + 104 >> 2] = 0;
    HEAP32[$0 + 108 >> 2] = 8;
    $2 = HEAP32[$0 + 116 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 120 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $3 = $1 & -8;
     $2 = $2 << 4;
     $1 = $1 & 3;
     if ($3 >>> 0 < ($2 | ($1 ? 4 : 8)) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    HEAP32[$0 + 124 >> 2] = 0;
    HEAP32[$0 + 116 >> 2] = 0;
    HEAP32[$0 + 120 >> 2] = 8;
    $2 = HEAP32[$0 + 8 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 12 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $3 = $1 & -8;
     $2 = $2 << 2;
     $1 = $1 & 3;
     if ($3 >>> 0 < $2 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    HEAP32[$0 + 16 >> 2] = 0;
    HEAP32[$0 + 20 >> 2] = 0;
    HEAP32[$0 + 8 >> 2] = 0;
    HEAP32[$0 + 12 >> 2] = 4;
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  block6 : {
   block5 : {
    block3 : {
     block2 : {
      if ($1 >>> 0 > $2 >>> 0) {
       $2 = Math_imul($2, 152) + $0 | 0;
       block1 : {
        if (HEAPU8[$2 + 148 | 0] != 2) {
         break block1
        }
        $0 = HEAP32[$2 + 100 >> 2];
        if ($0 >>> 0 <= $3 >>> 0) {
         break block2
        }
        $0 = HEAP32[$2 + 76 >> 2];
        if ($0 >>> 0 <= $3 >>> 0) {
         break block3
        }
        $4 = $3 << 3;
        $1 = $4 + HEAP32[$2 + 96 >> 2] | 0;
        $0 = HEAP32[$1 >> 2];
        $5 = HEAP32[$1 + 4 >> 2];
        if (HEAPU32[HEAP32[$2 + 72 >> 2] + ($3 << 2) >> 2] <= HEAPU32[$2 + 40 >> 2]) {
         $1 = HEAP32[$2 + 88 >> 2];
         if ($1 >>> 0 <= $3 >>> 0) {
          break block5
         }
         $4 = $4 + HEAP32[$2 + 84 >> 2] | 0;
         $1 = HEAP32[$4 >> 2];
         $6 = $1;
         $4 = HEAP32[$4 + 4 >> 2];
         $1 = ($5 | 0) == ($4 | 0) & $0 >>> 0 > $1 >>> 0 | $5 >>> 0 > $4 >>> 0;
         $0 = $1 ? $6 : $0;
         $5 = $1 ? $4 : $5;
        }
        $1 = HEAP32[$2 + 112 >> 2];
        if ($1 >>> 0 <= $3 >>> 0) {
         break block6
        }
        $1 = HEAP32[$2 + 108 >> 2] + ($3 << 3) | 0;
        if (HEAP32[$1 >> 2] == ($0 | 0) & HEAP32[$1 + 4 >> 2] == ($5 | 0)) {
         break block1
        }
        HEAP32[$1 >> 2] = $0;
        HEAP32[$1 + 4 >> 2] = $5;
        if (($0 & $5) == -1) {
         break block1
        }
        $1 = HEAP32[$2 + 124 >> 2];
        if (($1 | 0) == HEAP32[$2 + 116 >> 2]) {
         _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($2 + 116 | 0)
        }
        HEAP32[$2 + 124 >> 2] = $1 + 1;
        $8 = HEAP32[$2 + 120 >> 2];
        $2 = $8 + ($1 << 4) | 0;
        HEAP32[$2 + 8 >> 2] = $3;
        HEAP32[$2 >> 2] = $0;
        HEAP32[$2 + 4 >> 2] = $5;
        $2 = 0;
        block8 : {
         if (!$1) {
          break block8
         }
         while (1) {
          $4 = $1 - 1 >>> 1 | 0;
          $6 = ($4 << 4) + $8 | 0;
          $7 = HEAP32[$6 >> 2];
          $9 = HEAP32[$6 + 4 >> 2];
          if (($0 | 0) == ($7 | 0) & ($5 | 0) == ($9 | 0) ? HEAPU32[$6 + 8 >> 2] <= $3 >>> 0 : ($5 | 0) == ($9 | 0) & $0 >>> 0 >= $7 >>> 0 | $5 >>> 0 > $9 >>> 0) {
           $2 = $1;
           break block8;
          }
          $7 = HEAP32[$6 + 12 >> 2];
          $1 = ($1 << 4) + $8 | 0;
          HEAP32[$1 + 8 >> 2] = HEAP32[$6 + 8 >> 2];
          HEAP32[$1 + 12 >> 2] = $7;
          $7 = HEAP32[$6 + 4 >> 2];
          HEAP32[$1 >> 2] = HEAP32[$6 >> 2];
          HEAP32[$1 + 4 >> 2] = $7;
          $1 = $4;
          if ($1) {
           continue
          }
          break;
         };
        }
        $1 = ($2 << 4) + $8 | 0;
        HEAP32[$1 + 8 >> 2] = $3;
        HEAP32[$1 >> 2] = $0;
        HEAP32[$1 + 4 >> 2] = $5;
       }
       return;
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($2, $1, 1054396);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $0, 1054412);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $0, 1054428);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $1, 1054444);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $1, 1054460);
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim20advance_commit_index($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  block5 : {
   block1 : {
    block3 : {
     block2 : {
      $2 = HEAP32[$0 + 288 >> 2];
      if ($1 >>> 0 < $2 >>> 0) {
       $3 = HEAP32[$0 + 284 >> 2] + Math_imul($1, 152) | 0;
       if (HEAPU8[$3 + 148 | 0] != 2) {
        break block1
       }
       $4 = HEAP32[$3 + 20 >> 2];
       if (!$4) {
        break block1
       }
       $5 = $2 >>> 1 | 0;
       $8 = HEAP32[$3 + 16 >> 2];
       $6 = HEAP32[$3 + 12 >> 2] + ($8 << 2) | 0;
       $7 = HEAP32[$3 + 8 >> 2];
       $2 = 0;
       while (1) {
        if ($5 >>> 0 >= HEAPU32[$6 - (($2 + $8 >>> 0 >= $7 >>> 0 ? $7 : 0) << 2) >> 2]) {
         break block2
        }
        $6 = $6 + 4 | 0;
        $2 = $2 + 1 | 0;
        if (($4 | 0) != ($2 | 0)) {
         continue
        }
        break;
       };
       $2 = $4;
       break block3;
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $2, 1054780);
      wasm2js_trap();
     }
     if (!$2) {
      break block1
     }
    }
    $9 = HEAP32[$3 + 136 >> 2] + $2 | 0;
    $5 = $9 - 1 | 0;
    if ($5 >>> 0 < HEAPU32[$3 + 40 >> 2]) {
     $6 = HEAP32[HEAP32[$3 + 36 >> 2] + ($5 << 3) >> 2]
    } else {
     $6 = 0
    }
    if (($6 | 0) != HEAP32[$3 + 132 >> 2]) {
     break block1
    }
    if ($2 >>> 0 > $4 >>> 0) {
     break block5
    }
    HEAP32[$3 + 20 >> 2] = $4 - $2;
    $5 = $2 + $8 | 0;
    HEAP32[$3 + 16 >> 2] = ($2 | 0) != ($4 | 0) ? $5 - ($5 >>> 0 >= $7 >>> 0 ? $7 : 0) | 0 : 0;
    _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10set_commit($0, $1, $9);
   }
   return;
  }
  _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $2, $4, 1055320);
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtCseywxCc024wH_14raftscope_core3sim5EntryE8grow_oneBQ_($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  $3 = HEAP32[$0 >> 2];
  $2 = $3 << 1;
  $2 = $2 >>> 0 <= 4 ? 4 : $2;
  _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($1 + 4 | 0, $3, HEAP32[$0 + 4 >> 2], $2, 4, 8);
  if (HEAP32[$1 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$1 + 8 >> 2]);
   wasm2js_trap();
  }
  $3 = HEAP32[$1 + 8 >> 2];
  HEAP32[$0 >> 2] = $2;
  HEAP32[$0 + 4 >> 2] = $3;
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10set_commit($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
  $3 = __stack_pointer - 96 | 0;
  __stack_pointer = $3;
  $5 = HEAP32[$0 + 288 >> 2];
  if ($1 >>> 0 < $5 >>> 0) {
   block17 : {
    block15 : {
     $4 = HEAP32[$0 + 284 >> 2] + Math_imul($1, 152) | 0;
     $1 = HEAP32[$4 + 136 >> 2];
     if ($1 >>> 0 < $2 >>> 0) {
      $13 = HEAP32[$0 + 224 >> 2];
      $15 = HEAP32[$0 + 228 >> 2];
      $19 = $4 + 136 | 0;
      HEAP32[$4 + 136 >> 2] = $2;
      HEAP32[$0 + 372 >> 2] = 0;
      $5 = HEAP32[$0 + 364 >> 2];
      $9 = HEAP32[$0 + 368 >> 2];
      HEAP32[$0 + 364 >> 2] = 0;
      HEAP32[$0 + 368 >> 2] = 4;
      HEAP32[$3 + 8 >> 2] = 0;
      HEAP32[$3 >> 2] = $5;
      HEAP32[$3 + 4 >> 2] = $9;
      HEAP32[$3 + 16 >> 2] = $13;
      HEAP32[$3 + 20 >> 2] = $15;
      $14 = HEAP32[$4 + 40 >> 2];
      $20 = $1 >>> 0 < $14 >>> 0 ? $14 : $1;
      $6 = $1 << 3;
      $12 = $0 + 364 | 0;
      $11 = $3 + 52 | 0;
      $21 = $3 + 24 | 0;
      $16 = $3 + 48 | 0;
      $17 = $3 + 16 | 0;
      $18 = HEAP32[$4 + 128 >> 2] + 1 | 0;
      $22 = HEAP32[$4 + 36 >> 2];
      $23 = $0 + 352 | 0;
      $24 = $0 + 340 | 0;
      while (1) {
       block4 : {
        $4 = $1;
        if (($20 | 0) == ($4 | 0)) {
         HEAP32[$3 + 48 >> 2] = $18;
         HEAP32[$3 + 52 >> 2] = $14;
         HEAP32[$3 + 80 >> 2] = $11;
         HEAP32[$3 + 84 >> 2] = 3;
         HEAP32[$3 + 72 >> 2] = $19;
         HEAP32[$3 + 76 >> 2] = 3;
         HEAP32[$3 + 64 >> 2] = $16;
         HEAP32[$3 + 68 >> 2] = 3;
         HEAP32[$3 + 56 >> 2] = $17;
         HEAP32[$3 + 60 >> 2] = 6;
         _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($3 + 24 | 0, 1049083, $3 + 56 | 0);
         $1 = HEAP32[$0 + 360 >> 2];
         if (($1 | 0) == HEAP32[$0 + 352 >> 2]) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($0 + 352 | 0)
         }
         HEAP32[$0 + 360 >> 2] = $1 + 1;
         $2 = HEAP32[$3 + 28 >> 2];
         $1 = HEAP32[$0 + 356 >> 2] + Math_imul($1, 12) | 0;
         HEAP32[$1 >> 2] = HEAP32[$3 + 24 >> 2];
         HEAP32[$1 + 4 >> 2] = $2;
         HEAP32[$1 + 8 >> 2] = HEAP32[$3 + 32 >> 2];
         break block4;
        }
        $1 = $4 + 1 | 0;
        $8 = $6 + $22 | 0;
        $7 = HEAP32[$8 >> 2];
        $8 = HEAP32[$8 + 4 >> 2];
        HEAP32[$3 + 28 >> 2] = $8;
        HEAP32[$3 + 24 >> 2] = $7;
        $5 = $4;
        $4 = HEAP32[$0 + 348 >> 2];
        block8 : {
         if ($5 >>> 0 >= $4 >>> 0) {
          if (HEAP32[$0 + 340 >> 2] == ($4 | 0)) {
           _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtCseywxCc024wH_14raftscope_core3sim5EntryE8grow_oneBQ_($24);
           $8 = HEAP32[$3 + 28 >> 2];
           $7 = HEAP32[$3 + 24 >> 2];
          }
          HEAP32[$0 + 348 >> 2] = $4 + 1;
          $4 = HEAP32[$0 + 344 >> 2] + ($4 << 3) | 0;
          HEAP32[$4 + 4 >> 2] = $8;
          HEAP32[$4 >> 2] = $7;
          if (($10 | 0) == HEAP32[$3 >> 2]) {
           _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtCseywxCc024wH_14raftscope_core3sim5EntryE8grow_oneBQ_($3);
           $9 = HEAP32[$3 + 4 >> 2];
          }
          $7 = HEAP32[$3 + 28 >> 2];
          $4 = ($10 << 3) + $9 | 0;
          HEAP32[$4 >> 2] = HEAP32[$3 + 24 >> 2];
          HEAP32[$4 + 4 >> 2] = $7;
          $10 = $10 + 1 | 0;
          HEAP32[$3 + 8 >> 2] = $10;
          break block8;
         }
         $4 = HEAP32[$0 + 344 >> 2] + $6 | 0;
         if (($7 | 0) == HEAP32[$4 >> 2] & HEAP32[$4 + 4 >> 2] == ($8 | 0)) {
          break block8
         }
         HEAP32[$3 + 48 >> 2] = $18;
         HEAP32[$3 + 52 >> 2] = $1;
         HEAP32[$3 + 88 >> 2] = $4;
         HEAP32[$3 + 92 >> 2] = 11;
         HEAP32[$3 + 80 >> 2] = $11;
         HEAP32[$3 + 84 >> 2] = 3;
         HEAP32[$3 + 72 >> 2] = $21;
         HEAP32[$3 + 76 >> 2] = 11;
         HEAP32[$3 + 64 >> 2] = $16;
         HEAP32[$3 + 68 >> 2] = 3;
         HEAP32[$3 + 56 >> 2] = $17;
         HEAP32[$3 + 60 >> 2] = 6;
         _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($3 + 36 | 0, 1050864, $3 + 56 | 0);
         $4 = HEAP32[$0 + 360 >> 2];
         if (($4 | 0) == HEAP32[$0 + 352 >> 2]) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($23)
         }
         HEAP32[$0 + 360 >> 2] = $4 + 1;
         $7 = HEAP32[$3 + 40 >> 2];
         $4 = HEAP32[$0 + 356 >> 2] + Math_imul($4, 12) | 0;
         HEAP32[$4 >> 2] = HEAP32[$3 + 36 >> 2];
         HEAP32[$4 + 4 >> 2] = $7;
         HEAP32[$4 + 8 >> 2] = HEAP32[$3 + 44 >> 2];
        }
        $6 = $6 + 8 | 0;
        if (($1 | 0) != ($2 | 0)) {
         continue
        }
       }
       break;
      };
      if ($10) {
       $6 = $10 << 3;
       $1 = HEAP32[$3 + 4 >> 2] + 4 | 0;
       $4 = $0 + 144 | 0;
       while (1) {
        $2 = HEAP32[$0 + 132 >> 2];
        $5 = HEAP32[$0 + 128 >> 2] + 1 | 0;
        $2 = $5 ? $2 : $2 + 1 | 0;
        HEAP32[$0 + 128 >> 2] = $5;
        HEAP32[$0 + 132 >> 2] = $2;
        $2 = HEAP32[$1 >> 2] - 1 | 0;
        block12 : {
         if ($2 >>> 0 >= HEAPU32[$0 + 324 >> 2]) {
          break block12
         }
         $5 = HEAP32[$0 + 152 >> 2];
         if ($5 >>> 0 >= 4e6) {
          break block12
         }
         $9 = HEAP32[$0 + 320 >> 2] + ($2 << 3) | 0;
         $11 = HEAP32[$9 >> 2];
         $2 = $13 - $11 | 0;
         $2 = (HEAP32[$9 + 4 >> 2] + ($11 >>> 0 > $13 >>> 0) | 0) == ($15 | 0) & ($2 | 0) != -1 ? $2 : -1;
         if (HEAP32[$0 + 144 >> 2] == ($5 | 0)) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($4)
         }
         HEAP32[$0 + 152 >> 2] = $5 + 1;
         HEAP32[HEAP32[$0 + 148 >> 2] + ($5 << 2) >> 2] = $2;
        }
        $1 = $1 + 8 | 0;
        $6 = $6 - 8 | 0;
        if ($6) {
         continue
        }
        break;
       };
      }
      $1 = HEAP32[$12 >> 2];
      if ($1) {
       $2 = HEAP32[$0 + 368 >> 2];
       $5 = HEAP32[$2 - 4 >> 2];
       $0 = $5 & -8;
       $1 = $1 << 3;
       $5 = $5 & 3;
       if ($0 >>> 0 < $1 + ($5 ? 4 : 8) >>> 0) {
        break block15
       }
       if (($5 | 0) != 0 & $0 >>> 0 > $1 + 39 >>> 0) {
        break block17
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
      }
      HEAP32[$12 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
      $0 = HEAP32[$3 + 4 >> 2];
      HEAP32[$12 >> 2] = HEAP32[$3 >> 2];
      HEAP32[$12 + 4 >> 2] = $0;
     }
     __stack_pointer = $3 + 96 | 0;
     return;
    }
    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $5, 1054364);
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  $3 = HEAP32[$0 >> 2];
  $2 = $3 << 1;
  $2 = $2 >>> 0 <= 4 ? 4 : $2;
  _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($1 + 4 | 0, $3, HEAP32[$0 + 4 >> 2], $2, 8, 16);
  if (HEAP32[$1 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$1 + 8 >> 2]);
   wasm2js_trap();
  }
  $3 = HEAP32[$1 + 8 >> 2];
  HEAP32[$0 >> 2] = $2;
  HEAP32[$0 + 4 >> 2] = $3;
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13become_leader($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
  $8 = __stack_pointer - 80 | 0;
  __stack_pointer = $8;
  folding_inner2 : {
   folding_inner1 : {
    folding_inner0 : {
     block59 : {
      block1 : {
       block57 : {
        $10 = HEAP32[$0 + 288 >> 2];
        if ($1 >>> 0 < $10 >>> 0) {
         $12 = HEAP32[$0 + 284 >> 2];
         $6 = $12 + Math_imul($1, 152) | 0;
         if (HEAPU8[$6 + 148 | 0] != 1) {
          break block1
         }
         if (HEAPU32[$6 + 140 >> 2] < $10 >>> 1 >>> 0) {
          break block1
         }
         $13 = HEAP32[$0 + 224 >> 2];
         $14 = HEAP32[$0 + 228 >> 2];
         HEAP8[$6 + 148 | 0] = 2;
         $11 = HEAP32[$6 + 40 >> 2];
         $7 = $10 << 2;
         $4 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
         if ($4) {
          $5 = $11 + 1 | 0;
          $3 = $4;
          block3 : {
           if (($10 | 0) == 1) {
            break block3
           }
           $9 = $10 - 1 | 0;
           $2 = $9 & 7;
           if ($10 - 2 >>> 0 >= 7) {
            $9 = $9 & -8;
            while (1) {
             HEAP32[$3 >> 2] = $5;
             HEAP32[$3 + 28 >> 2] = $5;
             HEAP32[$3 + 24 >> 2] = $5;
             HEAP32[$3 + 20 >> 2] = $5;
             HEAP32[$3 + 16 >> 2] = $5;
             HEAP32[$3 + 12 >> 2] = $5;
             HEAP32[$3 + 8 >> 2] = $5;
             HEAP32[$3 + 4 >> 2] = $5;
             $3 = $3 + 32 | 0;
             $9 = $9 - 8 | 0;
             if ($9) {
              continue
             }
             break;
            };
            if (!$2) {
             break block3
            }
           }
           while (1) {
            HEAP32[$3 >> 2] = $5;
            $3 = $3 + 4 | 0;
            $2 = $2 - 1 | 0;
            if ($2) {
             continue
            }
            break;
           };
          }
          HEAP32[$3 >> 2] = $5;
          block6 : {
           $3 = HEAP32[$6 + 68 >> 2];
           if ($3) {
            $5 = HEAP32[$6 + 72 >> 2];
            $9 = HEAP32[$5 - 4 >> 2];
            $2 = $9 & -8;
            $3 = $3 << 2;
            $9 = $9 & 3;
            if ($2 >>> 0 < $3 + ($9 ? 4 : 8) >>> 0) {
             break block6
            }
            if (($9 | 0) != 0 & $2 >>> 0 > $3 + 39 >>> 0) {
             break folding_inner0
            }
            _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
           }
           HEAP32[$6 + 76 >> 2] = $10;
           HEAP32[$6 + 72 >> 2] = $4;
           HEAP32[$6 + 68 >> 2] = $10;
           $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
           if ($2) {
            if (HEAPU8[$2 - 4 | 0] & 3) {
             memset($2, 0, $7)
            }
            block12 : {
             $4 = HEAP32[$6 + 56 >> 2];
             if ($4) {
              $5 = HEAP32[$6 + 60 >> 2];
              $7 = HEAP32[$5 - 4 >> 2];
              $3 = $7 & -8;
              $4 = $4 << 2;
              $7 = $7 & 3;
              if ($3 >>> 0 < $4 + ($7 ? 4 : 8) >>> 0) {
               break block12
              }
              if (($7 | 0) != 0 & $3 >>> 0 > $4 + 39 >>> 0) {
               break folding_inner0
              }
              _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
             }
             HEAP32[$6 + 64 >> 2] = $10;
             HEAP32[$6 + 60 >> 2] = $2;
             HEAP32[$6 + 56 >> 2] = $10;
             $4 = $10 << 3;
             $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
             if ($3) {
              $2 = $3;
              if ($10 >>> 0 >= 2) {
               $2 = $4 - 8 | 0;
               $2 = memset($3, 255, $2) + $2 | 0;
              }
              HEAP32[$2 >> 2] = -1;
              HEAP32[$2 + 4 >> 2] = -1;
              block18 : {
               $5 = HEAP32[$6 + 80 >> 2];
               if ($5) {
                $7 = HEAP32[$6 + 84 >> 2];
                $9 = HEAP32[$7 - 4 >> 2];
                $2 = $9 & -8;
                $5 = $5 << 3;
                $9 = $9 & 3;
                if ($2 >>> 0 < $5 + ($9 ? 4 : 8) >>> 0) {
                 break block18
                }
                if (($9 | 0) != 0 & $2 >>> 0 > $5 + 39 >>> 0) {
                 break folding_inner0
                }
                _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
               }
               HEAP32[$6 + 88 >> 2] = $10;
               HEAP32[$6 + 84 >> 2] = $3;
               HEAP32[$6 + 80 >> 2] = $10;
               $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
               if ($2) {
                if (HEAPU8[$2 - 4 | 0] & 3) {
                 memset($2, 0, $4)
                }
                block24 : {
                 $5 = HEAP32[$6 + 92 >> 2];
                 if ($5) {
                  $7 = HEAP32[$6 + 96 >> 2];
                  $9 = HEAP32[$7 - 4 >> 2];
                  $3 = $9 & -8;
                  $5 = $5 << 3;
                  $9 = $9 & 3;
                  if ($3 >>> 0 < $5 + ($9 ? 4 : 8) >>> 0) {
                   break block24
                  }
                  if (($9 | 0) != 0 & $3 >>> 0 > $5 + 39 >>> 0) {
                   break folding_inner0
                  }
                  _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
                 }
                 HEAP32[$6 + 100 >> 2] = $10;
                 HEAP32[$6 + 96 >> 2] = $2;
                 HEAP32[$6 + 92 >> 2] = $10;
                 $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
                 if ($3) {
                  $2 = $3;
                  if ($10 >>> 0 >= 2) {
                   $2 = $4 - 8 | 0;
                   $2 = memset($3, 255, $2) + $2 | 0;
                  }
                  HEAP32[$2 >> 2] = -1;
                  HEAP32[$2 + 4 >> 2] = -1;
                  block30 : {
                   $4 = HEAP32[$6 + 104 >> 2];
                   if ($4) {
                    $5 = HEAP32[$6 + 108 >> 2];
                    $7 = HEAP32[$5 - 4 >> 2];
                    $2 = $7 & -8;
                    $4 = $4 << 3;
                    $7 = $7 & 3;
                    if ($2 >>> 0 < $4 + ($7 ? 4 : 8) >>> 0) {
                     break block30
                    }
                    if (($7 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
                     break folding_inner0
                    }
                    _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
                   }
                   HEAP32[$6 + 112 >> 2] = $10;
                   HEAP32[$6 + 108 >> 2] = $3;
                   HEAP32[$6 + 104 >> 2] = $10;
                   $2 = $10 << 4;
                   $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
                   if ($3) {
                    $4 = HEAP32[$6 + 116 >> 2];
                    if ($4) {
                     $5 = HEAP32[$6 + 120 >> 2];
                     $7 = HEAP32[$5 - 4 >> 2];
                     $2 = $7 & -8;
                     $4 = $4 << 4;
                     $7 = $7 & 3;
                     if ($2 >>> 0 < ($4 | ($7 ? 4 : 8)) >>> 0) {
                      break folding_inner1
                     }
                     if (($7 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
                      break folding_inner0
                     }
                     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
                    }
                    $2 = 0;
                    HEAP32[$6 + 124 >> 2] = 0;
                    HEAP32[$6 + 116 >> 2] = $10;
                    HEAP32[$6 + 120 >> 2] = $3;
                    $5 = 4;
                    block40 : {
                     $7 = HEAP32[$6 + 136 >> 2];
                     block39 : {
                      if ($11 >>> 0 <= $7 >>> 0) {
                       $9 = 0;
                       break block39;
                      }
                      $3 = $11 - $7 | 0;
                      $9 = $3 >>> 0 <= $11 >>> 0 ? $3 : 0;
                      $2 = $9 << 2;
                      $5 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
                      if (!$5) {
                       break block40
                      }
                      $4 = $3 & 3;
                      $2 = 0;
                      if ($7 - $11 >>> 0 <= 4294967292) {
                       $11 = $3 & -4;
                       $3 = $5;
                       while (1) {
                        HEAP32[$3 >> 2] = 1;
                        HEAP32[$3 + 4 >> 2] = 1;
                        $7 = $3 + 8 | 0;
                        HEAP32[$7 >> 2] = 1;
                        HEAP32[$7 + 4 >> 2] = 1;
                        $3 = $3 + 16 | 0;
                        $2 = $2 + 4 | 0;
                        if (($11 | 0) != ($2 | 0)) {
                         continue
                        }
                        break;
                       };
                       if (!$4) {
                        break block39
                       }
                      }
                      $11 = $2 + $4 | 0;
                      $3 = ($2 << 2) + $5 | 0;
                      while (1) {
                       HEAP32[$3 >> 2] = 1;
                       $3 = $3 + 4 | 0;
                       $4 = $4 - 1 | 0;
                       if ($4) {
                        continue
                       }
                       break;
                      };
                      $2 = $11;
                     }
                     block43 : {
                      $4 = HEAP32[$6 + 8 >> 2];
                      if ($4) {
                       $11 = HEAP32[$6 + 12 >> 2];
                       $7 = HEAP32[$11 - 4 >> 2];
                       $3 = $7 & -8;
                       $4 = $4 << 2;
                       $7 = $7 & 3;
                       if ($3 >>> 0 < $4 + ($7 ? 4 : 8) >>> 0) {
                        break block43
                       }
                       if (($7 | 0) != 0 & $3 >>> 0 > $4 + 39 >>> 0) {
                        break folding_inner0
                       }
                       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($11);
                      }
                      HEAP32[$6 + 20 >> 2] = $2;
                      $3 = 0;
                      HEAP32[$6 + 16 >> 2] = 0;
                      HEAP32[$6 + 8 >> 2] = $9;
                      HEAP32[$6 + 12 >> 2] = $5;
                      block47 : {
                       $2 = HEAP32[$6 + 44 >> 2];
                       if ($2) {
                        $5 = HEAP32[$6 + 48 >> 2];
                        $11 = HEAP32[$5 - 4 >> 2];
                        $4 = $11 & -8;
                        $11 = $11 & 3;
                        if ($4 >>> 0 < $2 + ($11 ? 4 : 8) >>> 0) {
                         break block47
                        }
                        if (($11 | 0) != 0 & $4 >>> 0 > $2 + 39 >>> 0) {
                         break folding_inner0
                        }
                        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
                       }
                       HEAP32[$6 + 52 >> 2] = 0;
                       HEAP32[$6 + 44 >> 2] = 0;
                       HEAP32[$6 + 48 >> 2] = 1;
                       HEAP32[$6 + 24 >> 2] = -1;
                       HEAP32[$6 + 28 >> 2] = -1;
                       while (1) {
                        if (($1 | 0) != ($3 | 0)) {
                         _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($12, $10, $1, $3)
                        }
                        $3 = $3 + 1 | 0;
                        if (($10 | 0) != ($3 | 0)) {
                         continue
                        }
                        break;
                       };
                       HEAP32[$8 >> 2] = $13;
                       HEAP32[$8 + 4 >> 2] = $14;
                       $5 = HEAP32[$6 + 132 >> 2];
                       $3 = HEAP32[$0 + 336 >> 2];
                       block52 : {
                        if ($5 >>> 0 < $3 >>> 0) {
                         $4 = $3;
                         break block52;
                        }
                        $4 = $5 + 1 | 0;
                        if ($4 >>> 0 > $3 >>> 0) {
                         $2 = $3;
                         $11 = $4 - $2 | 0;
                         if (HEAP32[$0 + 328 >> 2] - $2 >>> 0 < $11 >>> 0) {
                          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 328 | 0, $2, $11, 4, 4);
                          $2 = HEAP32[$0 + 336 >> 2];
                         }
                         $10 = HEAP32[$0 + 332 >> 2];
                         $4 = $10 + ($2 << 2) | 0;
                         if ($11 >>> 0 >= 2) {
                          memset($4, 0, $5 - $3 << 2);
                          $3 = $2 + $11 | 0;
                          $2 = $3 - 1 | 0;
                          $4 = ($10 + ($3 << 2) | 0) - 4 | 0;
                         }
                         HEAP32[$4 >> 2] = 0;
                         $4 = $2 + 1 | 0;
                        }
                        HEAP32[$0 + 336 >> 2] = $4;
                       }
                       if ($4 >>> 0 > $5 >>> 0) {
                        $10 = $6 + 132 | 0;
                        $2 = HEAP32[HEAP32[$0 + 332 >> 2] + ($5 << 2) >> 2];
                        HEAP32[$8 + 12 >> 2] = $2;
                        if (!$2) {
                         break block57
                        }
                        $3 = $2;
                        $2 = HEAP32[$6 + 128 >> 2] + 1 | 0;
                        if (($3 | 0) == ($2 | 0)) {
                         break block57
                        }
                        HEAP32[$8 + 28 >> 2] = $2;
                        HEAP32[$8 + 72 >> 2] = $10;
                        $2 = 3;
                        HEAP32[$8 + 76 >> 2] = $2;
                        HEAP32[$8 + 64 >> 2] = $8 + 28;
                        HEAP32[$8 + 68 >> 2] = 3;
                        HEAP32[$8 + 56 >> 2] = $8 + 12;
                        HEAP32[$8 + 60 >> 2] = 3;
                        HEAP32[$8 + 48 >> 2] = $8;
                        HEAP32[$8 + 52 >> 2] = 6;
                        _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($8 + 16 | 0, 1049024, $8 + 48 | 0);
                        $2 = HEAP32[$0 + 360 >> 2];
                        if (($2 | 0) == HEAP32[$0 + 352 >> 2]) {
                         _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($0 + 352 | 0);
                         $4 = HEAP32[$0 + 336 >> 2];
                        }
                        HEAP32[$0 + 360 >> 2] = $2 + 1;
                        $3 = HEAP32[$8 + 20 >> 2];
                        $2 = HEAP32[$0 + 356 >> 2] + Math_imul($2, 12) | 0;
                        HEAP32[$2 >> 2] = HEAP32[$8 + 16 >> 2];
                        HEAP32[$2 + 4 >> 2] = $3;
                        HEAP32[$2 + 8 >> 2] = HEAP32[$8 + 24 >> 2];
                        break block57;
                       }
                       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, $4, 1054252);
                       wasm2js_trap();
                      }
                      break folding_inner1;
                     }
                     break folding_inner1;
                    }
                    _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
                    wasm2js_trap();
                   }
                   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
                   wasm2js_trap();
                  }
                  break folding_inner1;
                 }
                 break folding_inner2;
                }
                break folding_inner1;
               }
               break folding_inner2;
              }
              break folding_inner1;
             }
             break folding_inner2;
            }
            break folding_inner1;
           }
           _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
           wasm2js_trap();
          }
          break folding_inner1;
         }
         _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
         wasm2js_trap();
        }
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $10, 1054476);
        wasm2js_trap();
       }
       if ($4 >>> 0 <= $5 >>> 0) {
        break block59
       }
       $7 = HEAP32[$6 + 128 >> 2] + 1 | 0;
       HEAP32[HEAP32[$0 + 332 >> 2] + ($5 << 2) >> 2] = $7;
       $2 = HEAP32[$0 + 348 >> 2] << 3;
       $9 = HEAP32[$6 + 40 >> 2];
       $11 = $9 + 1 | 0;
       $3 = HEAP32[$0 + 344 >> 2];
       $4 = HEAP32[$6 + 36 >> 2];
       $5 = 0;
       block60 : {
        block62 : {
         while (1) {
          if (!$2) {
           break block60
          }
          if (($5 | 0) == ($9 | 0)) {
           $5 = $11;
           break block62;
          }
          if (HEAP32[$4 >> 2] == HEAP32[$3 >> 2]) {
           $5 = $5 + 1 | 0;
           $2 = $2 - 8 | 0;
           $6 = $4 + 4 | 0;
           $12 = HEAP32[$3 + 4 >> 2];
           $4 = $4 + 8 | 0;
           $3 = $3 + 8 | 0;
           if (($12 | 0) == HEAP32[$6 >> 2]) {
            continue
           }
           break block62;
          }
          break;
         };
         $5 = $5 + 1 | 0;
        }
        HEAP32[$8 + 40 >> 2] = $7;
        HEAP32[$8 + 44 >> 2] = $5;
        HEAP32[$8 + 72 >> 2] = $8 + 44;
        $2 = 3;
        HEAP32[$8 + 76 >> 2] = $2;
        HEAP32[$8 + 64 >> 2] = $10;
        HEAP32[$8 + 68 >> 2] = 3;
        HEAP32[$8 + 56 >> 2] = $8 + 40;
        HEAP32[$8 + 60 >> 2] = 3;
        HEAP32[$8 + 48 >> 2] = $8;
        HEAP32[$8 + 52 >> 2] = 6;
        _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($8 + 28 | 0, 1048863, $8 + 48 | 0);
        $2 = HEAP32[$0 + 360 >> 2];
        if (($2 | 0) == HEAP32[$0 + 352 >> 2]) {
         _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($0 + 352 | 0)
        }
        HEAP32[$0 + 360 >> 2] = $2 + 1;
        $3 = HEAP32[$8 + 32 >> 2];
        $2 = HEAP32[$0 + 356 >> 2] + Math_imul($2, 12) | 0;
        HEAP32[$2 >> 2] = HEAP32[$8 + 28 >> 2];
        HEAP32[$2 + 4 >> 2] = $3;
        HEAP32[$2 + 8 >> 2] = HEAP32[$8 + 36 >> 2];
       }
       HEAP32[$0 + 20 >> 2] = $1;
       HEAP32[$0 + 16 >> 2] = 1;
       $1 = HEAP32[$0 >> 2];
       $3 = HEAP32[$0 + 4 >> 2];
       HEAP32[$0 >> 2] = 0;
       HEAP32[$0 + 4 >> 2] = 0;
       $2 = HEAP32[$0 + 76 >> 2];
       $4 = HEAP32[$0 + 72 >> 2] + 1 | 0;
       $2 = $4 ? $2 : $2 + 1 | 0;
       HEAP32[$0 + 72 >> 2] = $4;
       HEAP32[$0 + 76 >> 2] = $2;
       if (($1 | 0) != 1 | $3) {
        break block1
       }
       $3 = HEAP32[$0 + 136 >> 2];
       $2 = HEAP32[$0 + 8 >> 2];
       $1 = $3 + ($13 - $2 | 0) | 0;
       $2 = HEAP32[$0 + 140 >> 2] + ($14 - (HEAP32[$0 + 12 >> 2] + ($2 >>> 0 > $13 >>> 0) | 0) | 0) | 0;
       HEAP32[$0 + 136 >> 2] = $1;
       HEAP32[$0 + 140 >> 2] = $1 >>> 0 < $3 >>> 0 ? $2 + 1 | 0 : $2;
      }
      __stack_pointer = $8 + 80 | 0;
      return;
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, $4, 1054268);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim18start_new_election($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $9 = __stack_pointer - 16 | 0;
  __stack_pointer = $9;
  block15 : {
   block13 : {
    block10 : {
     block9 : {
      block7 : {
       block4 : {
        $7 = HEAP32[$0 + 288 >> 2];
        if ($1 >>> 0 < $7 >>> 0) {
         $3 = HEAP32[$0 + 284 >> 2] + Math_imul($1, 152) | 0;
         block1 : {
          if (HEAPU8[$3 + 148 | 0] >= 2) {
           break block1
          }
          $2 = HEAP32[$3 + 28 >> 2];
          $11 = HEAP32[$0 + 228 >> 2];
          $4 = $11;
          $6 = HEAP32[$0 + 224 >> 2];
          if (($2 | 0) == ($4 | 0) & $6 >>> 0 < HEAPU32[$3 + 24 >> 2] | $2 >>> 0 > $4 >>> 0) {
           break block1
          }
          $2 = HEAP32[$0 + 164 >> 2];
          $10 = $2;
          $5 = HEAP32[$0 + 160 >> 2];
          block3 : {
           if (!($2 | $5)) {
            $4 = 0;
            $8 = 0;
            break block3;
           }
           $12 = HEAP32[$0 + 236 >> 2];
           $13 = $12 ^ HEAP32[$0 + 252 >> 2];
           $4 = HEAP32[$0 + 244 >> 2];
           $14 = HEAP32[$0 + 232 >> 2];
           $15 = $14 ^ HEAP32[$0 + 248 >> 2];
           $2 = HEAP32[$0 + 240 >> 2];
           HEAP32[$0 + 240 >> 2] = $15 ^ $2;
           HEAP32[$0 + 244 >> 2] = $4 ^ $13;
           $16 = HEAP32[$0 + 256 >> 2] ^ $2;
           $8 = HEAP32[$0 + 260 >> 2] ^ $4;
           (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($16, $8, 45)), HEAP32[wasm2js_i32$0 + 256 >> 2] = wasm2js_i32$1;
           HEAP32[$0 + 260 >> 2] = i64toi32_i32$HIGH_BITS;
           HEAP32[$0 + 248 >> 2] = $2 << 17 ^ $15;
           HEAP32[$0 + 252 >> 2] = ($4 << 17 | $2 >>> 15) ^ $13;
           HEAP32[$0 + 232 >> 2] = $14 ^ $16;
           HEAP32[$0 + 236 >> 2] = $12 ^ $8;
           __multi3($9, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($2, $4, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $5, $10);
           $4 = HEAP32[$9 + 12 >> 2];
           $8 = HEAP32[$9 + 8 >> 2];
          }
          $2 = $8;
          HEAP8[$3 + 148 | 0] = 1;
          HEAP32[$3 + 4 >> 2] = $1;
          HEAP32[$3 >> 2] = 1;
          $1 = $10 + $11 | 0;
          $10 = $6;
          $6 = $5 + $6 | 0;
          $1 = $4 + ($10 >>> 0 > $6 >>> 0 ? $1 + 1 | 0 : $1) | 0;
          $2 = $2 + $6 | 0;
          $1 = $8 >>> 0 > $2 >>> 0 ? $1 + 1 | 0 : $1;
          HEAP32[$3 + 24 >> 2] = $2;
          HEAP32[$3 + 28 >> 2] = $1;
          HEAP32[$3 + 132 >> 2] = HEAP32[$3 + 132 >> 2] + 1;
          _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($3);
          $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
          if (!$1) {
           break block4
          }
          if (HEAPU8[$1 - 4 | 0] & 3) {
           memset($1, 0, $7)
          }
          $2 = HEAP32[$3 + 44 >> 2];
          if ($2) {
           $6 = HEAP32[$3 + 48 >> 2];
           $5 = HEAP32[$6 - 4 >> 2];
           $4 = $5 & -8;
           $5 = $5 & 3;
           if ($4 >>> 0 < $2 + ($5 ? 4 : 8) >>> 0) {
            break block7
           }
           if (($5 | 0) != 0 & $4 >>> 0 > $2 + 39 >>> 0) {
            break block9
           }
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($6);
          }
          HEAP32[$3 + 52 >> 2] = $7;
          HEAP32[$3 + 48 >> 2] = $1;
          HEAP32[$3 + 44 >> 2] = $7;
          $2 = $7 << 3;
          $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
          if (!$1) {
           break block10
          }
          if (HEAPU8[$1 - 4 | 0] & 3) {
           memset($1, 0, $2)
          }
          $4 = HEAP32[$3 + 80 >> 2];
          if ($4) {
           $6 = HEAP32[$3 + 84 >> 2];
           $5 = HEAP32[$6 - 4 >> 2];
           $2 = $5 & -8;
           $4 = $4 << 3;
           $5 = $5 & 3;
           if ($2 >>> 0 < $4 + ($5 ? 4 : 8) >>> 0) {
            break block13
           }
           if (($5 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
            break block15
           }
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($6);
          }
          HEAP32[$3 + 88 >> 2] = $7;
          HEAP32[$3 + 84 >> 2] = $1;
          HEAP32[$3 + 80 >> 2] = $7;
          $1 = HEAP32[$0 + 68 >> 2];
          $2 = HEAP32[$0 + 64 >> 2] + 1 | 0;
          $1 = $2 ? $1 : $1 + 1 | 0;
          HEAP32[$0 + 64 >> 2] = $2;
          HEAP32[$0 + 68 >> 2] = $1;
         }
         __stack_pointer = $9 + 16 | 0;
         return;
        }
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $7, 1054620);
        wasm2js_trap();
       }
       _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
     wasm2js_trap();
    }
    _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($0) {
  var $1 = 0, $2 = 0, $3 = 0;
  $1 = __stack_pointer - 16 | 0;
  __stack_pointer = $1;
  $3 = HEAP32[$0 >> 2];
  $2 = $3 << 1;
  $2 = $2 >>> 0 <= 4 ? 4 : $2;
  _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($1 + 4 | 0, $3, HEAP32[$0 + 4 >> 2], $2, 4, 12);
  if (HEAP32[$1 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$1 + 8 >> 2]);
   wasm2js_trap();
  }
  $3 = HEAP32[$1 + 8 >> 2];
  HEAP32[$0 >> 2] = $2;
  HEAP32[$0 + 4 >> 2] = $3;
  __stack_pointer = $1 + 16 | 0;
 }
 
 function _RNvXsg_NtCseywxCc024wH_14raftscope_core3simNtB5_5EntryNtNtCsedhpoW0refZ_4core3fmt5Debug3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  HEAP32[$2 + 4 >> 2] = $0 + 4;
  $3 = FUNCTION_TABLE[HEAP32[HEAP32[$1 + 4 >> 2] + 12 >> 2]](HEAP32[$1 >> 2], 1055336, 5) | 0;
  HEAP8[$2 + 13 | 0] = 0;
  HEAP8[$2 + 12 | 0] = $3;
  HEAP32[$2 + 8 >> 2] = $1;
  $0 = _RNvMs1_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_11DebugStruct5field(_RNvMs1_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_11DebugStruct5field($2 + 8 | 0, 1055341, 4, $0, 12), 1055345, 5, $2 + 4 | 0, 13);
  $3 = HEAPU8[$2 + 13 | 0];
  $4 = HEAPU8[$2 + 12 | 0];
  $1 = $3 | $4;
  block : {
   if (($3 | 0) != 1) {
    break block
   }
   if ($4 & 1) {
    break block
   }
   $0 = HEAP32[$0 >> 2];
   if (!(HEAPU8[$0 + 10 | 0] & 128)) {
    $1 = FUNCTION_TABLE[HEAP32[HEAP32[$0 + 4 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], 1051761, 2) | 0;
    break block;
   }
   $1 = FUNCTION_TABLE[HEAP32[HEAP32[$0 + 4 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], 1051688, 1) | 0;
  }
  __stack_pointer = $2 + 16 | 0;
  return $1 & 1;
 }
 
 function _RNvXsW_NtNtCsedhpoW0refZ_4core3fmt3nummNtB7_5Debug3fmt_182($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  block2 : {
   block1 : {
    $2 = HEAP32[$1 + 8 >> 2];
    if (!($2 & 33554432)) {
     if ($2 & 67108864) {
      break block1
     }
     $0 = _RNvXs8_NtNtNtCsedhpoW0refZ_4core3fmt3num3impmNtB9_7Display3fmt($0, $1);
     break block2;
    }
    $2 = HEAP32[$0 >> 2];
    $0 = 9;
    while (1) {
     HEAP8[($3 + $0 | 0) + 6 | 0] = HEAPU8[($2 & 15) + 1051580 | 0];
     $0 = $0 - 1 | 0;
     $2 = $2 >>> 4 | 0;
     if ($2) {
      continue
     }
     break;
    };
    $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054132, 2, ($3 + $0 | 0) + 7 | 0, 9 - $0 | 0);
    break block2;
   }
   $2 = HEAP32[$0 >> 2];
   $0 = 9;
   while (1) {
    HEAP8[($3 + $0 | 0) + 6 | 0] = HEAPU8[($2 & 15) + 1054134 | 0];
    $0 = $0 - 1 | 0;
    $2 = $2 >>> 4 | 0;
    if ($2) {
     continue
    }
    break;
   };
   $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054132, 2, ($3 + $0 | 0) + 7 | 0, 9 - $0 | 0);
  }
  __stack_pointer = $3 + 16 | 0;
  return $0 | 0;
 }
 
 function _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRmNtB6_5Debug3fmtCseywxCc024wH_14raftscope_core($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  $0 = HEAP32[$0 >> 2];
  block2 : {
   block1 : {
    $2 = HEAP32[$1 + 8 >> 2];
    if (!($2 & 33554432)) {
     if ($2 & 67108864) {
      break block1
     }
     $0 = _RNvXs8_NtNtNtCsedhpoW0refZ_4core3fmt3num3impmNtB9_7Display3fmt($0, $1);
     break block2;
    }
    $2 = HEAP32[$0 >> 2];
    $0 = 9;
    while (1) {
     HEAP8[($3 + $0 | 0) + 6 | 0] = HEAPU8[($2 & 15) + 1051580 | 0];
     $0 = $0 - 1 | 0;
     $2 = $2 >>> 4 | 0;
     if ($2) {
      continue
     }
     break;
    };
    $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054132, 2, ($3 + $0 | 0) + 7 | 0, 9 - $0 | 0);
    break block2;
   }
   $2 = HEAP32[$0 >> 2];
   $0 = 9;
   while (1) {
    HEAP8[($3 + $0 | 0) + 6 | 0] = HEAPU8[($2 & 15) + 1054134 | 0];
    $0 = $0 - 1 | 0;
    $2 = $2 >>> 4 | 0;
    if ($2) {
     continue
    }
    break;
   };
   $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054132, 2, ($3 + $0 | 0) + 7 | 0, 9 - $0 | 0);
  }
  __stack_pointer = $3 + 16 | 0;
  return $0 | 0;
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $8 = __stack_pointer - 16 | 0;
  __stack_pointer = $8;
  $13 = HEAP32[$0 + 224 >> 2];
  $14 = HEAP32[$0 + 228 >> 2];
  $2 = HEAP32[$0 + 164 >> 2];
  $9 = $2;
  $4 = HEAP32[$0 + 160 >> 2];
  block1 : {
   if (!($2 | $4)) {
    $6 = 0;
    break block1;
   }
   $7 = HEAP32[$0 + 236 >> 2];
   $5 = $7 ^ HEAP32[$0 + 252 >> 2];
   $3 = HEAP32[$0 + 244 >> 2];
   $11 = HEAP32[$0 + 232 >> 2];
   $12 = $11 ^ HEAP32[$0 + 248 >> 2];
   $2 = HEAP32[$0 + 240 >> 2];
   HEAP32[$0 + 240 >> 2] = $12 ^ $2;
   HEAP32[$0 + 244 >> 2] = $3 ^ $5;
   $6 = HEAP32[$0 + 256 >> 2] ^ $2;
   $10 = HEAP32[$0 + 260 >> 2] ^ $3;
   (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($6, $10, 45)), HEAP32[wasm2js_i32$0 + 256 >> 2] = wasm2js_i32$1;
   HEAP32[$0 + 260 >> 2] = i64toi32_i32$HIGH_BITS;
   HEAP32[$0 + 248 >> 2] = $2 << 17 ^ $12;
   HEAP32[$0 + 252 >> 2] = ($3 << 17 | $2 >>> 15) ^ $5;
   HEAP32[$0 + 232 >> 2] = $11 ^ $6;
   HEAP32[$0 + 236 >> 2] = $7 ^ $10;
   __multi3($8, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($2, $3, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $4, $9);
   $11 = HEAP32[$8 + 12 >> 2];
   $6 = HEAP32[$8 + 8 >> 2];
  }
  $2 = $6;
  block3 : {
   block4 : {
    $7 = HEAP32[$0 + 288 >> 2];
    if ($1 >>> 0 < $7 >>> 0) {
     $5 = HEAP32[$0 + 284 >> 2];
     $3 = $5 + Math_imul($1, 152) | 0;
     $12 = HEAPU8[$3 + 148 | 0];
     HEAP8[$3 + 148 | 0] = 0;
     _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($3);
     $10 = $9 + $14 | 0;
     $9 = $4 + $13 | 0;
     $4 = $11 + ($9 >>> 0 < $13 >>> 0 ? $10 + 1 | 0 : $10) | 0;
     $2 = $2 + $9 | 0;
     $4 = $6 >>> 0 > $2 >>> 0 ? $4 + 1 | 0 : $4;
     HEAP32[$3 + 24 >> 2] = $2;
     HEAP32[$3 + 28 >> 2] = $4;
     if (($12 | 0) != 2) {
      break block3
     }
     if (HEAP32[$0 >> 2]) {
      break block3
     }
     $2 = Math_imul($7, 152);
     while (1) {
      if (!$2) {
       break block4
      }
      $2 = $2 - 152 | 0;
      $3 = $5 + 148 | 0;
      $5 = $5 + 152 | 0;
      if (HEAPU8[$3 | 0] != 2) {
       continue
      }
      break;
     };
     break block3;
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $7, 1055112);
    wasm2js_trap();
   }
   HEAP32[$0 + 8 >> 2] = $13;
   HEAP32[$0 + 12 >> 2] = $14;
   HEAP32[$0 >> 2] = 1;
   HEAP32[$0 + 4 >> 2] = 0;
  }
  _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($0, $1);
  __stack_pointer = $8 + 16 | 0;
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13spread_timers($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
  $13 = __stack_pointer - 16 | 0;
  __stack_pointer = $13;
  $14 = HEAP32[$0 + 284 >> 2];
  $10 = HEAP32[$0 + 288 >> 2];
  $7 = Math_imul($10, 152);
  $5 = $14 + $7 | 0;
  $9 = HEAP32[$0 + 176 >> 2];
  $12 = HEAP32[$0 + 180 >> 2];
  $11 = HEAP32[$0 + 224 >> 2];
  $16 = HEAP32[$0 + 228 >> 2];
  block12 : {
   block15 : {
    block1 : {
     while (1) {
      if (!$7) {
       $14 = 0;
       $7 = 8;
       break block1;
      }
      $7 = $7 - 152 | 0;
      $1 = $14 + 24 | 0;
      $3 = $14 + 152 | 0;
      $14 = $3;
      $2 = HEAP32[$1 >> 2];
      $1 = HEAP32[$1 + 4 >> 2];
      if (($2 & $1) == -1) {
       continue
      }
      if (($1 | 0) == ($16 | 0) & $2 >>> 0 <= $11 >>> 0 | $1 >>> 0 < $16 >>> 0) {
       continue
      }
      break;
     };
     block11 : {
      $10 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(32);
      if ($10) {
       HEAP32[$10 >> 2] = $2;
       HEAP32[$10 + 4 >> 2] = $1;
       HEAP32[$13 + 12 >> 2] = 1;
       HEAP32[$13 + 8 >> 2] = $10;
       HEAP32[$13 + 4 >> 2] = 4;
       $6 = 1;
       while (1) {
        if (($3 | 0) != ($5 | 0)) {
         $1 = $3 + 24 | 0;
         $3 = $3 + 152 | 0;
         $2 = HEAP32[$1 >> 2];
         $1 = HEAP32[$1 + 4 >> 2];
         $4 = $1;
         if (($2 & $1) == -1) {
          continue
         }
         if (($1 | 0) == ($16 | 0) & $2 >>> 0 <= $11 >>> 0 | $1 >>> 0 < $16 >>> 0) {
          continue
         }
         if (($6 | 0) == HEAP32[$13 + 4 >> 2]) {
          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13 + 4 | 0, $6, 1, 8, 8);
          $10 = HEAP32[$13 + 8 >> 2];
         }
         $1 = ($6 << 3) + $10 | 0;
         HEAP32[$1 >> 2] = $2;
         HEAP32[$1 + 4 >> 2] = $4;
         $6 = $6 + 1 | 0;
         HEAP32[$13 + 12 >> 2] = $6;
         continue;
        }
        break;
       };
       $7 = HEAP32[$13 + 8 >> 2];
       $14 = HEAP32[$13 + 4 >> 2];
       if ($6 >>> 0 <= 1) {
        $10 = HEAP32[$0 + 288 >> 2];
        break block1;
       }
       block7 : {
        if ($6 >>> 0 >= 21) {
         _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortyNvYyNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($7, $6);
         break block7;
        }
        $10 = $7 + 8 | 0;
        $8 = ($6 << 3) + $7 | 0;
        $4 = 0;
        while (1) {
         $1 = $10 - 8 | 0;
         $2 = HEAP32[$1 >> 2];
         $17 = HEAP32[$10 + 4 >> 2];
         $5 = $17;
         $15 = HEAP32[$1 + 4 >> 2];
         $6 = $15;
         $1 = HEAP32[$10 >> 2];
         if (!(($5 | 0) == ($6 | 0) & $2 >>> 0 <= $1 >>> 0 | $5 >>> 0 > $6 >>> 0)) {
          $3 = $4;
          block10 : {
           while (1) {
            $6 = ($3 + $7 | 0) + 8 | 0;
            HEAP32[$6 >> 2] = $2;
            HEAP32[$6 + 4 >> 2] = $15;
            $6 = $7;
            if (!$3) {
             break block10
            }
            $3 = $3 - 8 | 0;
            $5 = $3 + $7 | 0;
            $2 = HEAP32[$5 >> 2];
            $15 = HEAP32[$5 + 4 >> 2];
            $6 = $15;
            if (($6 | 0) == ($17 | 0) & $2 >>> 0 > $1 >>> 0 | $6 >>> 0 > $17 >>> 0) {
             continue
            }
            break;
           };
           $6 = $5 + 8 | 0;
          }
          $3 = $6;
          HEAP32[$3 >> 2] = $1;
          HEAP32[$3 + 4 >> 2] = $17;
         }
         $4 = $4 + 8 | 0;
         $10 = $10 + 8 | 0;
         if (($8 | 0) != ($10 | 0)) {
          continue
         }
         break;
        };
       }
       $10 = HEAP32[$0 + 288 >> 2];
       $3 = HEAP32[$7 + 8 >> 2];
       $2 = HEAP32[$7 >> 2];
       $4 = $3 - $2 | 0;
       $1 = HEAP32[$7 + 4 >> 2];
       $3 = HEAP32[$7 + 12 >> 2] - ($1 + ($3 >>> 0 < $2 >>> 0) | 0) | 0;
       if (($12 | 0) == ($3 | 0) & $4 >>> 0 >= $9 >>> 0 | $3 >>> 0 > $12 >>> 0) {
        break block1
       }
       $3 = HEAP32[$0 + 284 >> 2];
       $6 = Math_imul($10, 152);
       $15 = $3 + $6 | 0;
       $5 = $12 + $16 | 0;
       $4 = $9 + $11 | 0;
       $5 = $4 >>> 0 < $11 >>> 0 ? $5 + 1 | 0 : $5;
       if (($5 | 0) == ($1 | 0) & $2 >>> 0 > $4 >>> 0 | $1 >>> 0 > $5 >>> 0) {
        break block11
       }
       if (!$10) {
        break block12
       }
       $5 = $6 - 152 | 0;
       block14 : {
        if (($5 >>> 0) / 152 & 1) {
         $6 = $3;
         break block14;
        }
        $6 = $3 + 152 | 0;
        $11 = HEAP32[$3 + 28 >> 2];
        $4 = $11;
        $8 = HEAP32[$7 + 4 >> 2];
        $2 = HEAP32[$3 + 24 >> 2];
        $1 = HEAP32[$7 >> 2];
        if (($4 | 0) == ($8 | 0) & $2 >>> 0 <= $1 >>> 0 | $4 >>> 0 < $8 >>> 0) {
         break block14
        }
        $8 = $8 + $12 | 0;
        $1 = $1 + $9 | 0;
        $8 = $1 >>> 0 < $9 >>> 0 ? $8 + 1 | 0 : $8;
        if (($8 | 0) == ($4 | 0) & $2 >>> 0 >= $1 >>> 0 | $4 >>> 0 > $8 >>> 0) {
         break block14
        }
        $8 = $4 + $12 | 0;
        $2 = $2 + $9 | 0;
        $8 = $2 >>> 0 < $9 >>> 0 ? $8 + 1 | 0 : $8;
        HEAP32[$3 + 24 >> 2] = $2;
        HEAP32[$3 + 28 >> 2] = $8;
       }
       if ($5 >>> 0 < 152) {
        break block15
       }
       while (1) {
        $1 = $6 + 24 | 0;
        $3 = HEAP32[$1 >> 2];
        $11 = HEAP32[$1 + 4 >> 2];
        $4 = $11;
        $5 = HEAP32[$7 + 4 >> 2];
        $2 = HEAP32[$7 >> 2];
        block16 : {
         if (($4 | 0) == ($5 | 0) & $2 >>> 0 >= $3 >>> 0 | $5 >>> 0 > $4 >>> 0) {
          break block16
         }
         $5 = $5 + $12 | 0;
         $2 = $2 + $9 | 0;
         $5 = $2 >>> 0 < $9 >>> 0 ? $5 + 1 | 0 : $5;
         if (($5 | 0) == ($4 | 0) & $3 >>> 0 >= $2 >>> 0 | $5 >>> 0 < $4 >>> 0) {
          break block16
         }
         $8 = $4 + $12 | 0;
         $3 = $3 + $9 | 0;
         $8 = $3 >>> 0 < $9 >>> 0 ? $8 + 1 | 0 : $8;
         HEAP32[$1 >> 2] = $3;
         HEAP32[$1 + 4 >> 2] = $8;
        }
        $1 = $6 + 176 | 0;
        $3 = HEAP32[$1 >> 2];
        $11 = HEAP32[$1 + 4 >> 2];
        $4 = $11;
        $5 = HEAP32[$7 + 4 >> 2];
        $2 = HEAP32[$7 >> 2];
        block17 : {
         if (($4 | 0) == ($5 | 0) & $2 >>> 0 >= $3 >>> 0 | $5 >>> 0 > $4 >>> 0) {
          break block17
         }
         $8 = $5 + $12 | 0;
         $2 = $2 + $9 | 0;
         $8 = $2 >>> 0 < $9 >>> 0 ? $8 + 1 | 0 : $8;
         if (($8 | 0) == ($4 | 0) & $3 >>> 0 >= $2 >>> 0 | $4 >>> 0 > $8 >>> 0) {
          break block17
         }
         $5 = $4 + $12 | 0;
         $3 = $3 + $9 | 0;
         $5 = $3 >>> 0 < $9 >>> 0 ? $5 + 1 | 0 : $5;
         HEAP32[$1 >> 2] = $3;
         HEAP32[$1 + 4 >> 2] = $5;
        }
        $6 = $6 + 304 | 0;
        if (($6 | 0) != ($15 | 0)) {
         continue
        }
        break;
       };
       break block1;
      }
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
      wasm2js_trap();
     }
     if (!$10) {
      break block12
     }
     $11 = $6 - 152 | 0;
     $2 = ($11 >>> 0) / 152 | 0;
     if (($2 & 3) != 3) {
      $6 = 0 - ($2 + 1 & 3) | 0;
      while (1) {
       $5 = $3 + 24 | 0;
       $1 = $5;
       $2 = HEAP32[$1 >> 2];
       $4 = HEAP32[$1 + 4 >> 2];
       if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
        HEAP32[$1 >> 2] = $2 - $9;
        HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
       }
       $3 = $3 + 152 | 0;
       $6 = $6 + 1 | 0;
       if ($6) {
        continue
       }
       break;
      };
     }
     if ($11 >>> 0 < 456) {
      break block1
     }
     while (1) {
      $11 = $3 + 24 | 0;
      $1 = $11;
      $2 = HEAP32[$1 >> 2];
      $4 = HEAP32[$1 + 4 >> 2];
      if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
       HEAP32[$1 >> 2] = $2 - $9;
       HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
      }
      $11 = $3 + 176 | 0;
      $1 = $11;
      $2 = HEAP32[$1 >> 2];
      $4 = HEAP32[$1 + 4 >> 2];
      if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
       HEAP32[$1 >> 2] = $2 - $9;
       HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
      }
      $11 = $3 + 328 | 0;
      $1 = $11;
      $2 = HEAP32[$1 >> 2];
      $4 = HEAP32[$1 + 4 >> 2];
      if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
       HEAP32[$1 >> 2] = $2 - $9;
       HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
      }
      $11 = $3 + 480 | 0;
      $1 = $11;
      $2 = HEAP32[$1 >> 2];
      $4 = HEAP32[$1 + 4 >> 2];
      if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
       HEAP32[$1 >> 2] = $2 - $9;
       HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
      }
      $3 = $3 + 608 | 0;
      if (($15 | 0) != ($3 | 0)) {
       continue
      }
      break;
     };
    }
    if (!$10) {
     break block12
    }
   }
   $3 = 0;
   while (1) {
    _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($0, $3);
    $3 = $3 + 1 | 0;
    if (($3 | 0) != ($10 | 0)) {
     continue
    }
    break;
   };
  }
  block27 : {
   block25 : {
    if ($14) {
     $0 = HEAP32[$7 - 4 >> 2];
     $2 = $0 & -8;
     $3 = $0 & 3;
     $0 = $14 << 3;
     if ($2 >>> 0 < ($3 ? 4 : 8) + $0 >>> 0) {
      break block25
     }
     if (($3 | 0) != 0 & $2 >>> 0 > $0 + 39 >>> 0) {
      break block27
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
    }
    __stack_pointer = $13 + 16 | 0;
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim7timeout($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  block1 : {
   $4 = HEAP32[$0 + 288 >> 2];
   if ($1 >>> 0 < $4 >>> 0) {
    $2 = HEAP32[$0 + 284 >> 2];
    $3 = $2 + Math_imul($1, 152) | 0;
    $5 = HEAPU8[$3 + 148 | 0];
    HEAP8[$3 + 148 | 0] = 0;
    _RNvMs_NtCseywxCc024wH_14raftscope_core3simNtB4_6Server15free_peer_state($3);
    HEAP32[$3 + 24 >> 2] = 0;
    HEAP32[$3 + 28 >> 2] = 0;
    if (($5 | 0) != 2) {
     break block1
    }
    if (HEAP32[$0 >> 2]) {
     break block1
    }
    $3 = Math_imul($4, 152);
    while (1) {
     if ($3) {
      $3 = $3 - 152 | 0;
      $4 = $2 + 148 | 0;
      $2 = $2 + 152 | 0;
      if (HEAPU8[$4 | 0] != 2) {
       continue
      }
      break block1;
     }
     break;
    };
    HEAP32[$0 >> 2] = 1;
    HEAP32[$0 + 4 >> 2] = 0;
    $2 = HEAP32[$0 + 228 >> 2];
    HEAP32[$0 + 8 >> 2] = HEAP32[$0 + 224 >> 2];
    HEAP32[$0 + 12 >> 2] = $2;
    break block1;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $4, 1055208);
   wasm2js_trap();
  }
  _RNvMs3_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim18start_new_election($0, $1);
  $2 = HEAP32[$0 + 312 >> 2];
  if ($1 >>> 0 < $2 >>> 0) {
   $2 = HEAP32[$0 + 228 >> 2];
   $7 = $2;
   $4 = HEAP32[$0 + 308 >> 2] + ($1 << 3) | 0;
   $3 = HEAP32[$0 + 224 >> 2];
   HEAP32[$4 >> 2] = $3;
   HEAP32[$4 + 4 >> 2] = $2;
   $2 = HEAP32[$0 + 300 >> 2];
   if (($2 | 0) == HEAP32[$0 + 292 >> 2]) {
    _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($0 + 292 | 0)
   }
   HEAP32[$0 + 300 >> 2] = $2 + 1;
   $8 = HEAP32[$0 + 296 >> 2];
   $0 = $8 + ($2 << 4) | 0;
   HEAP32[$0 + 8 >> 2] = $1;
   HEAP32[$0 >> 2] = $3;
   HEAP32[$0 + 4 >> 2] = $7;
   $0 = 0;
   block5 : {
    if (!$2) {
     break block5
    }
    while (1) {
     $4 = $2 - 1 >>> 1 | 0;
     $5 = $8 + ($4 << 4) | 0;
     $6 = HEAP32[$5 >> 2];
     $9 = HEAP32[$5 + 4 >> 2];
     if (($3 | 0) == ($6 | 0) & ($7 | 0) == ($9 | 0) ? HEAPU32[$5 + 8 >> 2] <= $1 >>> 0 : ($7 | 0) == ($9 | 0) & $3 >>> 0 >= $6 >>> 0 | $7 >>> 0 > $9 >>> 0) {
      $0 = $2;
      break block5;
     }
     $6 = HEAP32[$5 + 12 >> 2];
     $2 = $8 + ($2 << 4) | 0;
     HEAP32[$2 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
     HEAP32[$2 + 12 >> 2] = $6;
     $6 = HEAP32[$5 + 4 >> 2];
     HEAP32[$2 >> 2] = HEAP32[$5 >> 2];
     HEAP32[$2 + 4 >> 2] = $6;
     $2 = $4;
     if ($2) {
      continue
     }
     break;
    };
   }
   $0 = $8 + ($0 << 4) | 0;
   HEAP32[$0 + 8 >> 2] = $1;
   HEAP32[$0 >> 2] = $3;
   HEAP32[$0 + 4 >> 2] = $7;
   return;
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $2, 1055096);
  wasm2js_trap();
 }
 
 function _RNvNtCs9syRKuynNcS_3std9panicking15panic_with_hook($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  $4 = HEAP32[264030];
  HEAP32[264030] = $4 + 1;
  block4 : {
   block3 : {
    block : {
     if (($4 | 0) < 0) {
      break block
     }
     block2 : {
      if (!HEAPU8[1056112]) {
       HEAP8[1056112] = 1;
       HEAP32[264027] = HEAP32[264027] + 1;
       $0 = HEAP32[264029];
       if (($0 | 0) < 0) {
        break block
       }
       $1 = $0 + 1 | 0;
       if (($0 | 0) <= ($1 | 0)) {
        break block2
       }
       $0 = __stack_pointer - 16 | 0;
       __stack_pointer = $0;
       HEAP32[$0 + 4 >> 2] = 28;
       HEAP32[$0 >> 2] = 1055592;
       HEAP32[$0 + 8 >> 2] = $0;
       HEAP32[$0 + 12 >> 2] = 7;
       _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049308, $0 + 8 | 0, 1055620);
       wasm2js_trap();
      }
      FUNCTION_TABLE[HEAP32[$1 + 24 >> 2]]($3 + 8 | 0, $0);
      wasm2js_trap();
     }
     HEAP32[264029] = $1 - 1;
     if (($1 | 0) <= 0) {
      break block3
     }
     HEAP8[1056112] = 0;
     if ($2) {
      break block4
     }
    }
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1055668, 77, 1055708);
   wasm2js_trap();
  }
  wasm2js_trap();
 }
 
 function _RNvYINtNvNtCs9syRKuynNcS_3std9panicking11begin_panic7PayloadReENtNtCsedhpoW0refZ_4core5panic12PanicPayload6as_strB9_($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = 0;
 }
 
 function _RNvXNtCsedhpoW0refZ_4core3anyReNtB2_3Any7type_idCs9syRKuynNcS_3std($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1 = HEAP32[263855];
  HEAP32[$0 + 8 >> 2] = HEAP32[263854];
  HEAP32[$0 + 12 >> 2] = $1;
  $1 = HEAP32[263853];
  HEAP32[$0 >> 2] = HEAP32[263852];
  HEAP32[$0 + 4 >> 2] = $1;
 }
 
 function _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNvNtCs9syRKuynNcS_3std9panicking13panic_handler19FormatStringPayloadEBH_($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0;
  block3 : {
   block1 : {
    $2 = HEAP32[$0 >> 2];
    if (($2 | 0) > 0) {
     $0 = HEAP32[$0 + 4 >> 2];
     $1 = HEAP32[$0 - 4 >> 2];
     $3 = $1 & -8;
     $1 = $1 & 3;
     if ($3 >>> 0 < ($1 ? 4 : 8) + $2 >>> 0) {
      break block1
     }
     if (($1 | 0) != 0 & $2 + 39 >>> 0 < $3 >>> 0) {
      break block3
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($0);
    }
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055464, 46, 1055512);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055528, 46, 1055576);
  wasm2js_trap();
 }
 
 function _RNvXs0_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_19FormatStringPayloadNtNtCsedhpoW0refZ_4core3fmt7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  if (HEAP32[$0 >> 2] != -1) {
   return FUNCTION_TABLE[HEAP32[HEAP32[$1 + 4 >> 2] + 12 >> 2]](HEAP32[$1 >> 2], HEAP32[$0 + 4 >> 2], HEAP32[$0 + 8 >> 2]) | 0
  }
  $3 = HEAP32[$1 + 4 >> 2];
  $1 = HEAP32[$1 >> 2];
  $2 = HEAP32[HEAP32[$0 + 12 >> 2] >> 2];
  $0 = HEAP32[$2 >> 2];
  $2 = HEAP32[$2 + 4 >> 2];
  if ($2 & 1) {
   return FUNCTION_TABLE[HEAP32[$3 + 12 >> 2]]($1, $0, $2 >>> 1 | 0) | 0
  }
  return _RNvNtCsedhpoW0refZ_4core3fmt5write($1, $3, $0, $2) | 0;
 }
 
 function _RNvXs_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB4_19FormatStringPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload8take_box($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = __stack_pointer - 32 | 0;
  __stack_pointer = $2;
  if (HEAP32[$1 >> 2] == -1) {
   $3 = HEAP32[$1 + 12 >> 2];
   HEAP32[$2 + 24 >> 2] = 0;
   HEAP32[$2 + 16 >> 2] = 0;
   HEAP32[$2 + 20 >> 2] = 1;
   $3 = HEAP32[$3 >> 2];
   $4 = HEAP32[$3 >> 2];
   $3 = HEAP32[$3 + 4 >> 2];
   block3 : {
    if ($3 & 1) {
     $3 = $3 >>> 1 | 0;
     if ($3) {
      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECs9syRKuynNcS_3std($2 + 16 | 0, 0, $3);
      $5 = HEAP32[$2 + 24 >> 2];
      _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($5 + HEAP32[$2 + 20 >> 2] | 0, $4, $3);
     }
     HEAP32[$2 + 24 >> 2] = $3 + $5;
     break block3;
    }
    _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1055440, $4, $3);
   }
   $4 = HEAP32[$2 + 24 >> 2];
   HEAP32[$2 + 8 >> 2] = $4;
   $3 = HEAP32[$2 + 20 >> 2];
   $5 = HEAP32[$2 + 16 >> 2];
   HEAP32[$2 >> 2] = $5;
   HEAP32[$2 + 4 >> 2] = $3;
   HEAP32[$1 + 8 >> 2] = $4;
   HEAP32[$1 >> 2] = $5;
   HEAP32[$1 + 4 >> 2] = $3;
  }
  $3 = HEAP32[$1 + 8 >> 2];
  HEAP32[$1 + 8 >> 2] = 0;
  $4 = HEAP32[$1 >> 2];
  $5 = HEAP32[$1 + 4 >> 2];
  HEAP32[$1 >> 2] = 0;
  HEAP32[$1 + 4 >> 2] = 1;
  HEAP32[$2 + 24 >> 2] = $3;
  HEAP32[$2 + 16 >> 2] = $4;
  HEAP32[$2 + 20 >> 2] = $5;
  $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(12);
  if (!$1) {
   HEAP8[1056576] = 1;
   wasm2js_trap();
  }
  HEAP32[$1 + 8 >> 2] = HEAP32[$2 + 24 >> 2];
  $3 = HEAP32[$2 + 20 >> 2];
  HEAP32[$1 >> 2] = HEAP32[$2 + 16 >> 2];
  HEAP32[$1 + 4 >> 2] = $3;
  HEAP32[$0 + 4 >> 2] = 1055652;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $2 + 32 | 0;
 }
 
 function _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECs9syRKuynNcS_3std($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  $1 = $1 + $2 | 0;
  if ($2 >>> 0 > $1 >>> 0) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(0);
   wasm2js_trap();
  }
  $2 = HEAP32[$0 >> 2];
  $4 = $2 << 1;
  $1 = $1 >>> 0 > $4 >>> 0 ? $1 : $4;
  $1 = $1 >>> 0 <= 8 ? 8 : $1;
  $5 = $3 + 4 | 0;
  $6 = HEAP32[$0 + 4 >> 2];
  $4 = 0;
  block1 : {
   if (($1 | 0) < 0) {
    $2 = 1;
    $6 = 4;
    break block1;
   }
   block3 : {
    if ($2) {
     $2 = _RNvCs9hJ03s5DiqP_7___rustc14___rust_realloc($6, $2, $1);
     break block3;
    }
    $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($1);
   }
   block5 : {
    if (!$2) {
     HEAP32[$5 + 4 >> 2] = 1;
     $2 = 1;
     break block5;
    }
    HEAP32[$5 + 4 >> 2] = $2;
    $2 = 0;
   }
   $4 = $1;
   $6 = 8;
  }
  HEAP32[$6 + $5 >> 2] = $4;
  HEAP32[$5 >> 2] = $2;
  if (HEAP32[$3 + 4 >> 2] == 1) {
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$3 + 8 >> 2]);
   wasm2js_trap();
  }
  $2 = HEAP32[$3 + 8 >> 2];
  HEAP32[$0 >> 2] = $1;
  HEAP32[$0 + 4 >> 2] = $2;
  __stack_pointer = $3 + 16 | 0;
 }
 
 function _RNvXs_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB4_19FormatStringPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload3get($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = __stack_pointer - 32 | 0;
  __stack_pointer = $2;
  if (HEAP32[$1 >> 2] == -1) {
   $3 = HEAP32[$1 + 12 >> 2];
   HEAP32[$2 + 28 >> 2] = 0;
   HEAP32[$2 + 20 >> 2] = 0;
   HEAP32[$2 + 24 >> 2] = 1;
   $3 = HEAP32[$3 >> 2];
   $4 = HEAP32[$3 >> 2];
   $3 = HEAP32[$3 + 4 >> 2];
   block3 : {
    if ($3 & 1) {
     $3 = $3 >>> 1 | 0;
     if ($3) {
      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECs9syRKuynNcS_3std($2 + 20 | 0, 0, $3);
      $5 = HEAP32[$2 + 28 >> 2];
      _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($5 + HEAP32[$2 + 24 >> 2] | 0, $4, $3);
     }
     HEAP32[$2 + 28 >> 2] = $3 + $5;
     break block3;
    }
    _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 20 | 0, 1055440, $4, $3);
   }
   $4 = HEAP32[$2 + 28 >> 2];
   HEAP32[$2 + 16 >> 2] = $4;
   $3 = HEAP32[$2 + 24 >> 2];
   $5 = HEAP32[$2 + 20 >> 2];
   HEAP32[$2 + 8 >> 2] = $5;
   HEAP32[$2 + 12 >> 2] = $3;
   HEAP32[$1 + 8 >> 2] = $4;
   HEAP32[$1 >> 2] = $5;
   HEAP32[$1 + 4 >> 2] = $3;
  }
  HEAP32[$0 + 4 >> 2] = 1055652;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $2 + 32 | 0;
 }
 
 function _RNvXNtCsedhpoW0refZ_4core3anyNtNtCsl5a4uRf33NA_5alloc6string6StringNtB2_3Any7type_idCs9syRKuynNcS_3std($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1 = HEAP32[263859];
  HEAP32[$0 + 8 >> 2] = HEAP32[263858];
  HEAP32[$0 + 12 >> 2] = $1;
  $1 = HEAP32[263857];
  HEAP32[$0 >> 2] = HEAP32[263856];
  HEAP32[$0 + 4 >> 2] = $1;
 }
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str_197($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = HEAP32[$0 + 8 >> 2];
  block2 : {
   block1 : {
    if ($2 >>> 0 > HEAP32[$0 >> 2] - $3 >>> 0) {
     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECs9syRKuynNcS_3std($0, $3, $2);
     $3 = HEAP32[$0 + 8 >> 2];
     break block1;
    }
    if (!$2) {
     break block2
    }
   }
   _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 4 >> 2] + $3 | 0, $1, $2);
  }
  HEAP32[$0 + 8 >> 2] = $2 + $3;
  return 0;
 }
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char_198($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $5 = HEAP32[$0 + 8 >> 2];
  $3 = 1;
  block1 : {
   if ($1 >>> 0 < 128) {
    break block1
   }
   $3 = 2;
   if ($1 >>> 0 < 2048) {
    break block1
   }
   $3 = $1 >>> 0 < 65536 ? 3 : 4;
  }
  if ($3 >>> 0 > HEAP32[$0 >> 2] - $5 >>> 0) {
   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECs9syRKuynNcS_3std($0, $5, $3)
  }
  $2 = HEAP32[$0 + 4 >> 2] + $5 | 0;
  block6 : {
   if ($1 >>> 0 >= 128) {
    $6 = $1 & 63 | -128;
    $4 = $1 >>> 6 | 0;
    if ($1 >>> 0 < 2048) {
     HEAP8[$2 + 1 | 0] = $6;
     HEAP8[$2 | 0] = $4 | 192;
     break block6;
    }
    $7 = $1 >>> 12 | 0;
    $4 = $4 & 63 | -128;
    if ($1 >>> 0 <= 65535) {
     HEAP8[$2 + 2 | 0] = $6;
     HEAP8[$2 + 1 | 0] = $4;
     HEAP8[$2 | 0] = $7 | 224;
     break block6;
    }
    HEAP8[$2 + 3 | 0] = $6;
    HEAP8[$2 + 2 | 0] = $4;
    HEAP8[$2 + 1 | 0] = $7 & 63 | -128;
    HEAP8[$2 | 0] = $1 >>> 18 | -16;
    break block6;
   }
   HEAP8[$2 | 0] = $1;
  }
  HEAP32[$0 + 8 >> 2] = $5 + $3;
  return 0;
 }
 
 function _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtCs9syRKuynNcS_3std($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  if ($2 & 1) {
   $2 = $2 >>> 1 | 0;
   $3 = HEAP32[$0 + 8 >> 2];
   block3 : {
    block2 : {
     if ($2 >>> 0 > HEAP32[$0 >> 2] - $3 >>> 0) {
      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECs9syRKuynNcS_3std($0, $3, $2);
      $3 = HEAP32[$0 + 8 >> 2];
      break block2;
     }
     if (!$2) {
      break block3
     }
    }
    _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 4 >> 2] + $3 | 0, $1, $2);
   }
   HEAP32[$0 + 8 >> 2] = $2 + $3;
   return 0;
  }
  return _RNvNtCsedhpoW0refZ_4core3fmt5write($0, 1055440, $1, $2) | 0;
 }
 
 function _RNvXs2_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core3fmt7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return FUNCTION_TABLE[HEAP32[HEAP32[$1 + 4 >> 2] + 12 >> 2]](HEAP32[$1 >> 2], HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2]) | 0;
 }
 
 function _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload8take_box($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  $2 = HEAP32[$1 + 4 >> 2];
  $3 = HEAP32[$1 >> 2];
  $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(8);
  if (!$1) {
   HEAP8[1056576] = 1;
   wasm2js_trap();
  }
  HEAP32[$1 + 4 >> 2] = $2;
  HEAP32[$1 >> 2] = $3;
  HEAP32[$0 + 4 >> 2] = 1055636;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload3get($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 + 4 >> 2] = 1055636;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload6as_str($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[$1 + 4 >> 2];
  HEAP32[$0 >> 2] = HEAP32[$1 >> 2];
  HEAP32[$0 + 4 >> 2] = $2;
 }
 
 function _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE18insert_large_chunkCs9syRKuynNcS_3std($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  $2 = 31;
  HEAP32[$0 + 16 >> 2] = 0;
  HEAP32[$0 + 20 >> 2] = 0;
  if ($1 >>> 0 < 16777216) {
   $3 = Math_clz32($1 >>> 8 | 0);
   $2 = ($1 >>> 38 - $3 & 1 | $3 << 1) ^ 62;
  }
  HEAP32[$0 + 28 >> 2] = $2;
  $4 = ($2 << 2) + 1056124 | 0;
  $3 = 1 << $2;
  if (!($3 & HEAP32[264134])) {
   HEAP32[$4 >> 2] = $0;
   HEAP32[$0 + 24 >> 2] = $4;
   HEAP32[$0 + 12 >> 2] = $0;
   HEAP32[$0 + 8 >> 2] = $0;
   HEAP32[264134] = $3 | HEAP32[264134];
   return;
  }
  block4 : {
   $3 = HEAP32[$4 >> 2];
   block3 : {
    if (($1 | 0) == (HEAP32[$3 + 4 >> 2] & -8)) {
     $2 = $3;
     break block3;
    }
    $5 = $1 << (($2 | 0) != 31 ? 25 - ($2 >>> 1 | 0) | 0 : 0);
    while (1) {
     $4 = ($5 >>> 29 & 4) + $3 | 0;
     $2 = HEAP32[$4 + 16 >> 2];
     if (!$2) {
      break block4
     }
     $5 = $5 << 1;
     $3 = $2;
     if ((HEAP32[$2 + 4 >> 2] & -8) != ($1 | 0)) {
      continue
     }
     break;
    };
   }
   $1 = HEAP32[$2 + 8 >> 2];
   HEAP32[$1 + 12 >> 2] = $0;
   HEAP32[$2 + 8 >> 2] = $0;
   HEAP32[$0 + 24 >> 2] = 0;
   HEAP32[$0 + 12 >> 2] = $2;
   HEAP32[$0 + 8 >> 2] = $1;
   return;
  }
  HEAP32[$4 + 16 >> 2] = $0;
  HEAP32[$0 + 24 >> 2] = $3;
  HEAP32[$0 + 12 >> 2] = $0;
  HEAP32[$0 + 8 >> 2] = $0;
 }
 
 function _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
  $8 = __stack_pointer - 16 | 0;
  block1 : {
   if ($2 >>> 0 < 16) {
    $4 = $0;
    break block1;
   }
   $7 = 0 - $0 & 3;
   $5 = $7 + $0 | 0;
   if ($0 >>> 0 < $5 >>> 0) {
    $6 = $7;
    $4 = $0;
    $3 = $1;
    while (1) {
     HEAP8[$4 | 0] = HEAPU8[$3 | 0];
     $3 = $3 + 1 | 0;
     $4 = $4 + 1 | 0;
     $6 = $6 - 1 | 0;
     if ($6) {
      continue
     }
     break;
    };
   }
   $11 = $2 - $7 | 0;
   $12 = $11 & -4;
   $4 = $12 + $5 | 0;
   $7 = $1 + $7 | 0;
   $3 = $7 & 3;
   block4 : {
    if (!$3) {
     if ($4 >>> 0 <= $5 >>> 0) {
      break block4
     }
     $1 = $7;
     while (1) {
      HEAP32[$5 >> 2] = HEAP32[$1 >> 2];
      $1 = $1 + 4 | 0;
      $5 = $5 + 4 | 0;
      if ($5 >>> 0 < $4 >>> 0) {
       continue
      }
      break;
     };
     break block4;
    }
    $2 = 0;
    HEAP32[$8 + 12 >> 2] = 0;
    $1 = $3 | $8 + 12;
    $6 = 4 - $3 | 0;
    if ($6 & 1) {
     HEAP8[$1 | 0] = HEAPU8[$7 | 0];
     $2 = 1;
    }
    if ($6 & 2) {
     HEAP16[$1 + $2 >> 1] = HEAPU16[$2 + $7 >> 1]
    }
    $6 = $7 - $3 | 0;
    $9 = $3 << 3;
    $10 = HEAP32[$8 + 12 >> 2];
    if ($4 >>> 0 > $5 + 4 >>> 0) {
     $2 = 0 - $9 & 24;
     while (1) {
      $1 = $5;
      $5 = $10 >>> $9 | 0;
      $6 = $6 + 4 | 0;
      $10 = HEAP32[$6 >> 2];
      HEAP32[$1 >> 2] = $5 | $10 << $2;
      $5 = $1 + 4 | 0;
      if ($1 + 8 >>> 0 < $4 >>> 0) {
       continue
      }
      break;
     };
    }
    $2 = 0;
    HEAP8[$8 + 8 | 0] = 0;
    HEAP8[$8 + 6 | 0] = 0;
    block9 : {
     if (($3 | 0) == 1) {
      $1 = 0;
      $3 = $8 + 8 | 0;
      break block9;
     }
     $3 = HEAPU8[$6 + 5 | 0];
     $1 = HEAPU8[$6 + 4 | 0];
     HEAP8[$8 + 8 | 0] = $1;
     $13 = $3 << 8;
     $14 = 2;
     $3 = $8 + 6 | 0;
    }
    if ($7 & 1) {
     HEAP8[$3 | 0] = HEAPU8[($6 + 4 | 0) + $14 | 0];
     $2 = HEAPU8[$8 + 6 | 0] << 16;
     $1 = HEAPU8[$8 + 8 | 0];
    }
    HEAP32[$5 >> 2] = ($1 & 255 | ($2 | $13)) << (0 - $9 & 24) | $10 >>> $9;
   }
   $2 = $11 & 3;
   $1 = $7 + $12 | 0;
  }
  if ($4 >>> 0 < $2 + $4 >>> 0) {
   while (1) {
    HEAP8[$4 | 0] = HEAPU8[$1 | 0];
    $1 = $1 + 1 | 0;
    $4 = $4 + 1 | 0;
    $2 = $2 - 1 | 0;
    if ($2) {
     continue
    }
    break;
   }
  }
  return $0;
 }
 
 function _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem7memmove($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
  $7 = __stack_pointer - 32 | 0;
  block21 : {
   block1 : {
    block4 : {
     block9 : {
      if ($2 >>> 0 > $0 - $1 >>> 0) {
       $4 = $1 + $2 | 0;
       $0 = $0 + $2 | 0;
       if ($2 >>> 0 < 16) {
        break block1
       }
       $8 = $0 & 3;
       $10 = 0 - $8 | 0;
       $5 = $0 & -4;
       if ($0 >>> 0 > $5 >>> 0) {
        $6 = $4 - 1 | 0;
        $3 = $0;
        while (1) {
         $3 = $3 - 1 | 0;
         HEAP8[$3 | 0] = HEAPU8[$6 | 0];
         $6 = $6 - 1 | 0;
         if ($3 >>> 0 > $5 >>> 0) {
          continue
         }
         break;
        };
       }
       $12 = $2 - $8 | 0;
       $3 = $12 & -4;
       $9 = $5 - $3 | 0;
       $15 = 0 - $3 | 0;
       $11 = $4 + $10 | 0;
       $4 = $11 & 3;
       if (!$4) {
        if ($5 >>> 0 <= $9 >>> 0) {
         break block4
        }
        $0 = ($1 + $12 | 0) - 4 | 0;
        $1 = $5;
        while (1) {
         $1 = $1 - 4 | 0;
         HEAP32[$1 >> 2] = HEAP32[$0 >> 2];
         $0 = $0 - 4 | 0;
         if ($1 >>> 0 > $9 >>> 0) {
          continue
         }
         break;
        };
        break block4;
       }
       $3 = 0;
       HEAP8[$7 + 24 | 0] = 0;
       HEAP8[$7 + 22 | 0] = 0;
       $8 = $11 - $4 | 0;
       $6 = $4 << 3;
       block7 : {
        if (($4 | 0) == 1) {
         $13 = $7 + 24 | 0
        } else {
         $3 = HEAPU8[$8 | 0];
         HEAP8[$7 + 24 | 0] = $3;
         $14 = HEAPU8[$8 + 1 | 0];
         $13 = 0;
         if (!($11 & 1)) {
          break block7
         }
         $3 = 2;
         $13 = $7 + 22 | 0;
        }
        HEAP8[$13 | 0] = HEAPU8[$3 + $8 | 0];
        $3 = HEAPU8[$7 + 24 | 0];
        $13 = HEAPU8[$7 + 22 | 0] << 16;
       }
       $3 = $13 | $14 << 8 | $3 & 255;
       $9 = $9 + 4 | 0;
       if ($5 >>> 0 <= $9 >>> 0) {
        $2 = $5;
        break block9;
       }
       $1 = ($2 - $4 | 0) + $1 | 0;
       $14 = 0 - $6 & 24;
       while (1) {
        $2 = $3 << $14;
        $1 = $1 - 4 | 0;
        $8 = $10 + $1 | 0;
        $3 = HEAP32[$8 >> 2];
        HEAP32[($0 + $10 | 0) - 4 >> 2] = $2 | $3 >>> $6;
        $0 = $0 - 4 | 0;
        $2 = $10 + $0 | 0;
        if ($9 >>> 0 < $2 >>> 0) {
         continue
        }
        break;
       };
       break block9;
      }
      if ($2 >>> 0 >= 16) {
       $5 = 0 - $0 & 3;
       $6 = $5 + $0 | 0;
       if ($0 >>> 0 < $6 >>> 0) {
        $4 = $5;
        $3 = $1;
        while (1) {
         HEAP8[$0 | 0] = HEAPU8[$3 | 0];
         $3 = $3 + 1 | 0;
         $0 = $0 + 1 | 0;
         $4 = $4 - 1 | 0;
         if ($4) {
          continue
         }
         break;
        };
       }
       $11 = $2 - $5 | 0;
       $12 = $11 & -4;
       $0 = $12 + $6 | 0;
       $3 = $1 + $5 | 0;
       $2 = $3 & 3;
       block14 : {
        if (!$2) {
         if ($0 >>> 0 <= $6 >>> 0) {
          break block14
         }
         $1 = $3;
         while (1) {
          HEAP32[$6 >> 2] = HEAP32[$1 >> 2];
          $1 = $1 + 4 | 0;
          $6 = $6 + 4 | 0;
          if ($6 >>> 0 < $0 >>> 0) {
           continue
          }
          break;
         };
         break block14;
        }
        $4 = 0;
        HEAP32[$7 + 16 >> 2] = 0;
        $1 = $2 | $7 + 16;
        $5 = 4 - $2 | 0;
        if ($5 & 1) {
         HEAP8[$1 | 0] = HEAPU8[$3 | 0];
         $4 = 1;
        }
        if ($5 & 2) {
         HEAP16[$1 + $4 >> 1] = HEAPU16[$4 + $3 >> 1]
        }
        $5 = $3 - $2 | 0;
        $10 = $2 << 3;
        $9 = HEAP32[$7 + 16 >> 2];
        if ($0 >>> 0 > $6 + 4 >>> 0) {
         $4 = 0 - $10 & 24;
         while (1) {
          $1 = $6;
          $6 = $9 >>> $10 | 0;
          $5 = $5 + 4 | 0;
          $9 = HEAP32[$5 >> 2];
          HEAP32[$1 >> 2] = $6 | $9 << $4;
          $6 = $1 + 4 | 0;
          if ($1 + 8 >>> 0 < $0 >>> 0) {
           continue
          }
          break;
         };
        }
        $4 = 0;
        HEAP8[$7 + 12 | 0] = 0;
        HEAP8[$7 + 10 | 0] = 0;
        block19 : {
         if (($2 | 0) == 1) {
          $8 = $7 + 12 | 0;
          $1 = 0;
          $2 = 0;
          break block19;
         }
         $2 = HEAPU8[$5 + 5 | 0];
         $1 = HEAPU8[$5 + 4 | 0];
         HEAP8[$7 + 12 | 0] = $1;
         $14 = 2;
         $8 = $7 + 10 | 0;
         $2 = $2 << 8;
        }
        if ($3 & 1) {
         HEAP8[$8 | 0] = HEAPU8[($5 + 4 | 0) + $14 | 0];
         $4 = HEAPU8[$7 + 10 | 0] << 16;
         $1 = HEAPU8[$7 + 12 | 0];
        }
        HEAP32[$6 >> 2] = ($1 & 255 | ($2 | $4)) << (0 - $10 & 24) | $9 >>> $10;
       }
       $2 = $11 & 3;
       $1 = $3 + $12 | 0;
      }
      if ($0 + $2 >>> 0 <= $0 >>> 0) {
       break block21
      }
      while (1) {
       HEAP8[$0 | 0] = HEAPU8[$1 | 0];
       $1 = $1 + 1 | 0;
       $0 = $0 + 1 | 0;
       $2 = $2 - 1 | 0;
       if ($2) {
        continue
       }
       break;
      };
      break block21;
     }
     $0 = 0;
     HEAP32[$7 + 28 >> 2] = 0;
     $1 = ($4 + $8 | 0) - 4 | 0;
     $8 = $4 | $7 + 28;
     $4 = 4 - $4 | 0;
     if ($4 & 1) {
      HEAP8[$8 | 0] = HEAPU8[$1 | 0];
      $0 = 1;
     }
     if ($4 & 2) {
      HEAP16[$0 + $8 >> 1] = HEAPU16[$0 + $1 >> 1]
     }
     HEAP32[$2 - 4 >> 2] = $3 << (0 - $6 & 24) | HEAP32[$7 + 28 >> 2] >>> $6;
    }
    $2 = $12 & 3;
    $4 = $11 + $15 | 0;
    $0 = $5 + $15 | 0;
   }
   $2 = $0 - $2 | 0;
   if ($0 >>> 0 <= $2 >>> 0) {
    break block21
   }
   $1 = $4 - 1 | 0;
   while (1) {
    $0 = $0 - 1 | 0;
    HEAP8[$0 | 0] = HEAPU8[$1 | 0];
    $1 = $1 - 1 | 0;
    if ($0 >>> 0 > $2 >>> 0) {
     continue
    }
    break;
   };
  }
 }
 
 function __multi3($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  $7 = __wasm_i64_mul($3, 0, $1, 0);
  $11 = i64toi32_i32$HIGH_BITS;
  $9 = __wasm_i64_mul($4, 0, $1, 0);
  $5 = i64toi32_i32$HIGH_BITS;
  $10 = $5;
  $8 = __wasm_i64_mul($3, 0, $2, 0);
  $6 = $8 + $9 | 0;
  $5 = i64toi32_i32$HIGH_BITS + $5 | 0;
  $5 = $6 >>> 0 < $8 >>> 0 ? $5 + 1 | 0 : $5;
  HEAP32[$0 >> 2] = $7;
  $8 = $6 + $11 | 0;
  HEAP32[$0 + 4 >> 2] = $8;
  $7 = __wasm_i64_mul($4, 0, $2, 0) + $5 | 0;
  $6 = i64toi32_i32$HIGH_BITS + (($5 | 0) == ($10 | 0) & $6 >>> 0 < $9 >>> 0 | $5 >>> 0 < $10 >>> 0) | 0;
  $5 = $5 >>> 0 > $7 >>> 0 ? $6 + 1 | 0 : $6;
  $9 = $5 + 1 | 0;
  $10 = $5;
  $5 = $8 >>> 0 < $11 >>> 0;
  $6 = $5;
  $5 = $5 + $7 | 0;
  $7 = $6 >>> 0 > $5 >>> 0 ? $9 : $10;
  $1 = __wasm_i64_mul(0, 0, $1, $2);
  $2 = i64toi32_i32$HIGH_BITS;
  $3 = __wasm_i64_mul($3, $4, 0, 0);
  $1 = $1 + $3 | 0;
  $2 = i64toi32_i32$HIGH_BITS + $2 | 0;
  $2 = ($1 >>> 0 < $3 >>> 0 ? $2 + 1 | 0 : $2) + $7 | 0;
  $3 = $1;
  $1 = $1 + $5 | 0;
  $2 = $3 >>> 0 > $1 >>> 0 ? $2 + 1 | 0 : $2;
  HEAP32[$0 + 8 >> 2] = $1;
  HEAP32[$0 + 12 >> 2] = $2;
 }
 
 function _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($0) {
  var $1 = 0.0, $2 = 0.0, $3 = 0, $4 = 0.0, $5 = 0, $6 = 0, $7 = 0;
  $5 = __stack_pointer - 16 | 0;
  __stack_pointer = $5;
  $1 = +$0;
  block13 : {
   block16 : {
    block14 : {
     $6 = (wasm2js_scratch_store_f32($0), wasm2js_scratch_load_i32(2));
     $3 = $6 & 2147483647;
     if ($3 >>> 0 >= 1061752795) {
      if ($3 >>> 0 >= 1081824210) {
       if ($3 >>> 0 >= 1088565718) {
        block11 : {
         block10 : {
          block9 : {
           block12 : {
            if ($3 >>> 0 <= 2139095039) {
             HEAP32[$5 + 8 >> 2] = 0;
             HEAP32[$5 + 12 >> 2] = 0;
             block7 : {
              if ($3 >>> 0 <= 1305022426) {
               $2 = $1 * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0;
               $6 = $2 >= -2147483648.0;
               if (Math_abs($2) < 2147483648.0) {
                $3 = ~~$2
               } else {
                $3 = -2147483648
               }
               $3 = $2 == $2 ? ($2 > 2147483647.0 ? 2147483647 : $6 ? $3 : -2147483648) : 0;
               $1 = $1 + $2 * -1.5707963109016418 + $2 * -1.5893254773528196e-08;
               break block7;
              }
              $7 = $3;
              $3 = ($3 >>> 23 | 0) - 150 | 0;
              HEAPF64[$5 >> 3] = (wasm2js_scratch_store_i32(2, $7 - ($3 << 23) | 0), wasm2js_scratch_load_f32());
              $3 = _RNvNtNtNtCsaT5yz1Yhfyz_17compiler_builtins4math9libm_math14rem_pio2_large14rem_pio2_large($5, $5 + 8 | 0, $3);
              $1 = HEAPF64[$5 + 8 >> 3];
              if (($6 | 0) >= 0) {
               break block7
              }
              $3 = 0 - $3 | 0;
              $1 = -HEAPF64[$5 + 8 >> 3];
             }
             switch (($3 & 3) - 1 | 0) {
             case 0:
              break block10;
             case 1:
              break block11;
             case 2:
              break block12;
             default:
              break block9;
             };
            }
            $0 = Math_fround($0 - $0);
            break block13;
           }
           $2 = $1 * $1;
           $4 = $1 * $2;
           $0 = Math_fround($4 * ($2 * $2) * ($2 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($1 + $4 * ($2 * .008333329385889463 + -.16666666641626524)));
           break block13;
          }
          $1 = $1 * $1;
          $2 = $1 * $1;
          $0 = Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993));
          break block13;
         }
         $2 = $1 * $1;
         $4 = $2 * -$1;
         $0 = Math_fround($4 * ($2 * $2) * ($2 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($4 * ($2 * .008333329385889463 + -.16666666641626524) - $1));
         break block13;
        }
        $1 = $1 * $1;
        $2 = $1 * $1;
        $0 = Math_fround(-Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993)));
        break block13;
       }
       if ($3 >>> 0 > 1085271519) {
        break block14
       }
       if (($6 | 0) >= 0) {
        $2 = $1 + -4.71238898038469;
        $1 = $2 * $2;
        $4 = $2 * $1;
        $0 = Math_fround($4 * ($1 * $1) * ($1 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($2 + $4 * ($1 * .008333329385889463 + -.16666666641626524)));
        break block13;
       }
       $2 = -4.71238898038469 - $1;
       $1 = $2 * $2;
       $4 = $2 * $1;
       $0 = Math_fround($4 * ($1 * $1) * ($1 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($2 + $4 * ($1 * .008333329385889463 + -.16666666641626524)));
       break block13;
      }
      if ($3 >>> 0 > 1075235811) {
       break block16
      }
      if (($6 | 0) >= 0) {
       $2 = 1.5707963267948966 - $1;
       $1 = $2 * $2;
       $4 = $2 * $1;
       $0 = Math_fround($4 * ($1 * $1) * ($1 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($2 + $4 * ($1 * .008333329385889463 + -.16666666641626524)));
       break block13;
      }
      $2 = $1 + 1.5707963267948966;
      $1 = $2 * $2;
      $4 = $2 * $1;
      $0 = Math_fround($4 * ($1 * $1) * ($1 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($2 + $4 * ($1 * .008333329385889463 + -.16666666641626524)));
      break block13;
     }
     if ($3 >>> 0 >= 964689920) {
      $1 = $1 * $1;
      $2 = $1 * $1;
      $0 = Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993));
      break block13;
     }
     HEAPF32[$5 + 8 >> 2] = $0 + Math_fround(1329227995784915872903807.0e12);
     $0 = Math_fround(1.0);
     break block13;
    }
    $1 = (($6 | 0) >= 0 ? -6.283185307179586 : 6.283185307179586) + $1;
    $1 = $1 * $1;
    $2 = $1 * $1;
    $0 = Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993));
    break block13;
   }
   $1 = (($6 | 0) >= 0 ? -3.141592653589793 : 3.141592653589793) + $1;
   $1 = $1 * $1;
   $2 = $1 * $1;
   $0 = Math_fround(-Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993)));
  }
  __stack_pointer = $5 + 16 | 0;
  return $0;
 }
 
 function _RNvNtNtNtCsaT5yz1Yhfyz_17compiler_builtins4math9libm_math14rem_pio2_large14rem_pio2_large($0, $1, $2) {
  var $3 = 0, $4 = 0.0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0.0, $10 = 0, $11 = 0, $12 = 0, $13 = 0.0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0.0, $20 = 0, $21 = 0, $22 = 0, $23 = 0;
  $3 = __stack_pointer - 560 | 0;
  __stack_pointer = $3;
  HEAP32[$3 + 152 >> 2] = 0;
  HEAP32[$3 + 156 >> 2] = 0;
  HEAP32[$3 + 144 >> 2] = 0;
  HEAP32[$3 + 148 >> 2] = 0;
  HEAP32[$3 + 136 >> 2] = 0;
  HEAP32[$3 + 140 >> 2] = 0;
  HEAP32[$3 + 128 >> 2] = 0;
  HEAP32[$3 + 132 >> 2] = 0;
  HEAP32[$3 + 120 >> 2] = 0;
  HEAP32[$3 + 124 >> 2] = 0;
  HEAP32[$3 + 112 >> 2] = 0;
  HEAP32[$3 + 116 >> 2] = 0;
  HEAP32[$3 + 104 >> 2] = 0;
  HEAP32[$3 + 108 >> 2] = 0;
  HEAP32[$3 + 96 >> 2] = 0;
  HEAP32[$3 + 100 >> 2] = 0;
  HEAP32[$3 + 88 >> 2] = 0;
  HEAP32[$3 + 92 >> 2] = 0;
  HEAP32[$3 + 80 >> 2] = 0;
  HEAP32[$3 + 84 >> 2] = 0;
  HEAP32[$3 + 72 >> 2] = 0;
  HEAP32[$3 + 76 >> 2] = 0;
  HEAP32[$3 + 64 >> 2] = 0;
  HEAP32[$3 + 68 >> 2] = 0;
  HEAP32[$3 + 56 >> 2] = 0;
  HEAP32[$3 + 60 >> 2] = 0;
  HEAP32[$3 + 48 >> 2] = 0;
  HEAP32[$3 + 52 >> 2] = 0;
  HEAP32[$3 + 40 >> 2] = 0;
  HEAP32[$3 + 44 >> 2] = 0;
  HEAP32[$3 + 32 >> 2] = 0;
  HEAP32[$3 + 36 >> 2] = 0;
  HEAP32[$3 + 24 >> 2] = 0;
  HEAP32[$3 + 28 >> 2] = 0;
  HEAP32[$3 + 16 >> 2] = 0;
  HEAP32[$3 + 20 >> 2] = 0;
  HEAP32[$3 + 8 >> 2] = 0;
  HEAP32[$3 + 12 >> 2] = 0;
  HEAP32[$3 >> 2] = 0;
  HEAP32[$3 + 4 >> 2] = 0;
  HEAP32[$3 + 312 >> 2] = 0;
  HEAP32[$3 + 316 >> 2] = 0;
  HEAP32[$3 + 304 >> 2] = 0;
  HEAP32[$3 + 308 >> 2] = 0;
  HEAP32[$3 + 296 >> 2] = 0;
  HEAP32[$3 + 300 >> 2] = 0;
  HEAP32[$3 + 288 >> 2] = 0;
  HEAP32[$3 + 292 >> 2] = 0;
  HEAP32[$3 + 280 >> 2] = 0;
  HEAP32[$3 + 284 >> 2] = 0;
  HEAP32[$3 + 272 >> 2] = 0;
  HEAP32[$3 + 276 >> 2] = 0;
  HEAP32[$3 + 264 >> 2] = 0;
  HEAP32[$3 + 268 >> 2] = 0;
  HEAP32[$3 + 256 >> 2] = 0;
  HEAP32[$3 + 260 >> 2] = 0;
  HEAP32[$3 + 248 >> 2] = 0;
  HEAP32[$3 + 252 >> 2] = 0;
  HEAP32[$3 + 240 >> 2] = 0;
  HEAP32[$3 + 244 >> 2] = 0;
  HEAP32[$3 + 232 >> 2] = 0;
  HEAP32[$3 + 236 >> 2] = 0;
  HEAP32[$3 + 224 >> 2] = 0;
  HEAP32[$3 + 228 >> 2] = 0;
  HEAP32[$3 + 216 >> 2] = 0;
  HEAP32[$3 + 220 >> 2] = 0;
  HEAP32[$3 + 208 >> 2] = 0;
  HEAP32[$3 + 212 >> 2] = 0;
  HEAP32[$3 + 200 >> 2] = 0;
  HEAP32[$3 + 204 >> 2] = 0;
  HEAP32[$3 + 192 >> 2] = 0;
  HEAP32[$3 + 196 >> 2] = 0;
  HEAP32[$3 + 184 >> 2] = 0;
  HEAP32[$3 + 188 >> 2] = 0;
  HEAP32[$3 + 176 >> 2] = 0;
  HEAP32[$3 + 180 >> 2] = 0;
  HEAP32[$3 + 168 >> 2] = 0;
  HEAP32[$3 + 172 >> 2] = 0;
  HEAP32[$3 + 160 >> 2] = 0;
  HEAP32[$3 + 164 >> 2] = 0;
  HEAP32[$3 + 472 >> 2] = 0;
  HEAP32[$3 + 476 >> 2] = 0;
  HEAP32[$3 + 464 >> 2] = 0;
  HEAP32[$3 + 468 >> 2] = 0;
  HEAP32[$3 + 456 >> 2] = 0;
  HEAP32[$3 + 460 >> 2] = 0;
  HEAP32[$3 + 448 >> 2] = 0;
  HEAP32[$3 + 452 >> 2] = 0;
  HEAP32[$3 + 440 >> 2] = 0;
  HEAP32[$3 + 444 >> 2] = 0;
  HEAP32[$3 + 432 >> 2] = 0;
  HEAP32[$3 + 436 >> 2] = 0;
  HEAP32[$3 + 424 >> 2] = 0;
  HEAP32[$3 + 428 >> 2] = 0;
  HEAP32[$3 + 416 >> 2] = 0;
  HEAP32[$3 + 420 >> 2] = 0;
  HEAP32[$3 + 408 >> 2] = 0;
  HEAP32[$3 + 412 >> 2] = 0;
  HEAP32[$3 + 400 >> 2] = 0;
  HEAP32[$3 + 404 >> 2] = 0;
  HEAP32[$3 + 392 >> 2] = 0;
  HEAP32[$3 + 396 >> 2] = 0;
  HEAP32[$3 + 384 >> 2] = 0;
  HEAP32[$3 + 388 >> 2] = 0;
  HEAP32[$3 + 376 >> 2] = 0;
  HEAP32[$3 + 380 >> 2] = 0;
  HEAP32[$3 + 368 >> 2] = 0;
  HEAP32[$3 + 372 >> 2] = 0;
  HEAP32[$3 + 360 >> 2] = 0;
  HEAP32[$3 + 364 >> 2] = 0;
  HEAP32[$3 + 352 >> 2] = 0;
  HEAP32[$3 + 356 >> 2] = 0;
  HEAP32[$3 + 344 >> 2] = 0;
  HEAP32[$3 + 348 >> 2] = 0;
  HEAP32[$3 + 336 >> 2] = 0;
  HEAP32[$3 + 340 >> 2] = 0;
  HEAP32[$3 + 328 >> 2] = 0;
  HEAP32[$3 + 332 >> 2] = 0;
  HEAP32[$3 + 320 >> 2] = 0;
  HEAP32[$3 + 324 >> 2] = 0;
  memset($3 + 480 | 0, 0, 80);
  $11 = HEAP32[263939];
  $7 = $11;
  $17 = (($2 << 16) - 196608 >> 16) / 24 << 16 >> 16;
  $5 = $17;
  $8 = ($5 << 2) + 1055772 | 0;
  while (1) {
   HEAPF64[($6 << 3) + $3 >> 3] = ($5 | 0) < 0 ? 0.0 : +HEAP32[$8 >> 2];
   $12 = $6 >>> 0 < $7 >>> 0;
   if ($12) {
    $8 = $8 + 4 | 0;
    $5 = $5 + 1 | 0;
    $6 = $6 + $12 | 0;
    if ($7 >>> 0 >= $6 >>> 0) {
     continue
    }
   }
   break;
  };
  $5 = 0;
  while (1) {
   HEAPF64[($3 + 320 | 0) + ($5 << 3) >> 3] = HEAPF64[$0 >> 3] * HEAPF64[($5 << 3) + $3 >> 3] + 0.0;
   $6 = $5 >>> 0 < $11 >>> 0;
   if ($6) {
    $5 = $6 + $5 | 0;
    if ($5 >>> 0 <= $11 >>> 0) {
     continue
    }
   }
   break;
  };
  $21 = ($3 + ($11 << 2) | 0) + 476 | 0;
  $7 = Math_imul($17, -24) + $2 | 0;
  $22 = 47 - $7 & 31;
  $18 = 48 - $7 & 31;
  wasm2js_scratch_store_i32(0, 0);
  wasm2js_scratch_store_i32(1, $7 + 999 << 20);
  $19 = +wasm2js_scratch_load_f64();
  $12 = $7 - 24 | 0;
  $23 = $12 - 1 | 0;
  $5 = $11;
  block29 : {
   label8 : while (1) {
    $2 = $5;
    $9 = HEAPF64[($3 + 320 | 0) + ($2 << 3) >> 3];
    block5 : {
     if (!$2) {
      break block5
     }
     $10 = $3 + 480 | 0;
     $6 = $2;
     while (1) {
      $4 = $9 * 5.9604644775390625e-08;
      $5 = $4 >= -2147483648.0;
      $13 = $9;
      $9 = +(($4 == $4 ? ($4 > 2147483647.0 ? 2147483647 : $5 ? (Math_abs($4) < 2147483648.0 ? ~~$4 : -2147483648) : -2147483648) : 0) | 0);
      $4 = $13 + $9 * -16777216.0;
      $5 = $4 >= -2147483648.0;
      HEAP32[$10 >> 2] = $4 == $4 ? ($4 > 2147483647.0 ? 2147483647 : $5 ? (Math_abs($4) < 2147483648.0 ? ~~$4 : -2147483648) : -2147483648) : 0;
      $9 = HEAPF64[($3 + ($6 << 3) | 0) + 312 >> 3] + $9;
      $5 = ($6 | 0) == 1;
      if ($5) {
       break block5
      }
      $10 = $10 + 4 | 0;
      $6 = $5 ? 1 : $6 - 1 | 0;
      if ($6) {
       continue
      }
      break;
     };
    }
    $4 = $9 * $19;
    $4 = $4 + Math_floor($4 * .125) * -8.0;
    $5 = $4 >= -2147483648.0;
    $15 = $4 == $4 ? ($4 > 2147483647.0 ? 2147483647 : $5 ? (Math_abs($4) < 2147483648.0 ? ~~$4 : -2147483648) : -2147483648) : 0;
    $4 = $4 - +($15 | 0);
    block15 : {
     block17 : {
      $20 = ($12 | 0) > 0;
      block16 : {
       block14 : {
        if (!$20) {
         $14 = HEAP32[($3 + ($2 << 2) | 0) + 476 >> 2] >> 23;
         if (!$12) {
          break block14
         }
         $14 = 2;
         $16 = 0;
         if (!($4 >= .5)) {
          break block15
         }
         break block16;
        }
        $6 = ($3 + ($2 << 2) | 0) + 476 | 0;
        $8 = HEAP32[$6 >> 2];
        $5 = $8 >> $18;
        $14 = $6;
        $6 = $8 - ($5 << $18) | 0;
        HEAP32[$14 >> 2] = $6;
        $15 = $5 + $15 | 0;
        $14 = $6 >> $22;
       }
       if (($14 | 0) <= 0) {
        break block17
       }
      }
      $10 = 1;
      if ($2) {
       $5 = 0;
       $6 = $3 + 480 | 0;
       $8 = $2;
       while (1) {
        $16 = HEAP32[$6 >> 2];
        block22 : {
         block21 : {
          if ($5) {
           $5 = 16777215
          } else {
           if (!$16) {
            break block21
           }
           $5 = 16777216;
          }
          HEAP32[$6 >> 2] = $5 - $16;
          $10 = 0;
          $5 = 1;
          break block22;
         }
         $10 = 1;
         $5 = 0;
        }
        $6 = $6 + 4 | 0;
        $8 = $8 - 1 | 0;
        if ($8) {
         continue
        }
        break;
       };
      }
      block23 : {
       if (!$20) {
        break block23
       }
       $6 = 8388607;
       block24 : {
        switch ($23 | 0) {
        case 1:
         $6 = 4194303;
         break;
        case 0:
         break block24;
        default:
         break block23;
        };
       }
       $5 = ($3 + ($2 << 2) | 0) + 476 | 0;
       HEAP32[$5 >> 2] = HEAP32[$5 >> 2] & $6;
      }
      $15 = $15 + 1 | 0;
      $16 = 2;
      if (($14 | 0) != 2) {
       break block15
      }
      $4 = 1.0 - $4;
      $4 = $10 ? $4 : $4 - $19;
      break block15;
     }
     $16 = $14;
    }
    if ($4 == 0.0) {
     $6 = $21;
     $5 = $2;
     block27 : {
      $10 = $2 - 1 | 0;
      if ($10 >>> 0 < $11 >>> 0) {
       break block27
      }
      $8 = 0;
      while (1) {
       block28 : {
        $8 = HEAP32[($3 + 480 | 0) + ($10 << 2) >> 2] | $8;
        if ($10 >>> 0 <= $11 >>> 0) {
         break block28
        }
        $10 = $10 - ($10 >>> 0 > $11 >>> 0) | 0;
        if ($10 >>> 0 >= $11 >>> 0) {
         continue
        }
       }
       break;
      };
      $5 = $2;
      if (!$8) {
       break block27
      }
      $6 = ($3 + ($2 << 2) | 0) + 476 | 0;
      $7 = $12;
      while (1) {
       $2 = $2 - 1 | 0;
       $7 = $7 - 24 | 0;
       $0 = HEAP32[$6 >> 2];
       $6 = $6 - 4 | 0;
       if (!$0) {
        continue
       }
       break;
      };
      break block29;
     }
     while (1) {
      $5 = $5 + 1 | 0;
      $8 = HEAP32[$6 >> 2];
      $6 = $6 - 4 | 0;
      if (!$8) {
       continue
      }
      break;
     };
     if ($2 >>> 0 >= $5 >>> 0) {
      continue
     }
     $8 = $2 + 1 | 0;
     while (1) {
      HEAPF64[($8 << 3) + $3 >> 3] = HEAP32[($8 + $17 << 2) + 1055772 >> 2];
      HEAPF64[($3 + 320 | 0) + ($8 << 3) >> 3] = HEAPF64[$0 >> 3] * HEAPF64[($8 << 3) + $3 >> 3] + 0.0;
      if ($5 >>> 0 <= $8 >>> 0) {
       continue label8
      }
      $2 = ($5 >>> 0 > $8 >>> 0) + $8 | 0;
      $8 = $2;
      if ($2 >>> 0 <= $5 >>> 0) {
       continue
      }
      break;
     };
     continue;
    }
    break;
   };
   wasm2js_scratch_store_i32(0, 0);
   wasm2js_scratch_store_i32(1, 1023 - $12 << 20);
   $4 = $4 * +wasm2js_scratch_load_f64();
   block32 : {
    if (!($4 >= 16777216.0)) {
     $7 = $12;
     break block32;
    }
    $9 = $4 * 5.9604644775390625e-08;
    $0 = $9 >= -2147483648.0;
    $13 = $4;
    $4 = +(($9 == $9 ? ($9 > 2147483647.0 ? 2147483647 : $0 ? (Math_abs($9) < 2147483648.0 ? ~~$9 : -2147483648) : -2147483648) : 0) | 0);
    $9 = $13 + $4 * -16777216.0;
    $0 = $9 >= -2147483648.0;
    HEAP32[($3 + 480 | 0) + ($2 << 2) >> 2] = $9 == $9 ? ($9 > 2147483647.0 ? 2147483647 : $0 ? (Math_abs($9) < 2147483648.0 ? ~~$9 : -2147483648) : -2147483648) : 0;
    $2 = $2 + 1 | 0;
   }
   HEAP32[($3 + 480 | 0) + ($2 << 2) >> 2] = $4 == $4 ? ($4 > 2147483647.0 ? 2147483647 : $4 >= -2147483648.0 ? (Math_abs($4) < 2147483648.0 ? ~~$4 : -2147483648) : -2147483648) : 0;
  }
  block41 : {
   block42 : {
    block40 : {
     if (($7 | 0) <= 1023) {
      if (($7 | 0) < -1022) {
       break block40
      }
      $13 = 1.0;
      break block41;
     }
     if ($7 >>> 0 > 2046) {
      break block42
     }
     $7 = $7 - 1023 | 0;
     $13 = 8988465674311579538646525.0e283;
     break block41;
    }
    if ($7 >>> 0 > 4294965304) {
     $7 = $7 + 969 | 0;
     $13 = 2.004168360008973e-292;
     break block41;
    }
    $7 = ($7 >>> 0 <= 4294964336 ? -2960 : $7) + 1938 | 0;
    $13 = 0.0;
    break block41;
   }
   $7 = ($7 >>> 0 >= 3069 ? 3069 : $7) - 2046 | 0;
   $13 = Infinity;
  }
  wasm2js_scratch_store_i32(0, 0);
  wasm2js_scratch_store_i32(1, $7 + 1023 << 20);
  $4 = $13 * +wasm2js_scratch_load_f64();
  $6 = ($3 + 320 | 0) + ($2 << 3) | 0;
  $5 = ($3 + 480 | 0) + ($2 << 2) | 0;
  $0 = $2;
  while (1) {
   HEAPF64[$6 >> 3] = $4 * +HEAP32[$5 >> 2];
   $6 = $6 - 8 | 0;
   $5 = $5 - 4 | 0;
   $4 = $4 * 5.9604644775390625e-08;
   $0 = $0 - 1 | 0;
   if (($0 | 0) != -1) {
    continue
   }
   break;
  };
  $0 = ($3 + 320 | 0) + ($2 << 3) | 0;
  $6 = $2;
  while (1) {
   $7 = $6;
   $8 = $2 - $6 | 0;
   $12 = ($8 >>> 0 > $11 >>> 0 ? $11 : $8) + 1 | 0;
   $4 = 0.0;
   $6 = 0;
   $5 = 0;
   while (1) {
    $4 = $4 + HEAPF64[$6 + 1056040 >> 3] * HEAPF64[$0 + $6 >> 3];
    $6 = $6 + 8 | 0;
    $5 = $5 + 1 | 0;
    if (($12 | 0) != ($5 | 0)) {
     continue
    }
    break;
   };
   $5 = $3 + 160 | 0;
   HEAPF64[$5 + ($8 << 3) >> 3] = $4;
   $0 = $0 - 8 | 0;
   $6 = $7 - 1 | 0;
   if ($7) {
    continue
   }
   break;
  };
  $6 = ($2 << 3) + $5 | 0;
  $4 = 0.0;
  while (1) {
   $4 = $4 + HEAPF64[$6 >> 3];
   $6 = $6 - 8 | 0;
   $2 = $2 - 1 | 0;
   if (($2 | 0) != -1) {
    continue
   }
   break;
  };
  HEAPF64[$1 >> 3] = $16 ? -$4 : $4;
  __stack_pointer = $3 + 560 | 0;
  return $15 & 7;
 }
 
 function _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($0) {
  var $1 = 0.0, $2 = 0.0, $3 = 0, $4 = 0.0, $5 = 0, $6 = 0, $7 = 0;
  $5 = __stack_pointer - 16 | 0;
  __stack_pointer = $5;
  $1 = +$0;
  $6 = (wasm2js_scratch_store_f32($0), wasm2js_scratch_load_i32(2));
  $3 = $6 & 2147483647;
  block13 : {
   if ($3 >>> 0 >= 1061752795) {
    if ($3 >>> 0 >= 1081824210) {
     if ($3 >>> 0 >= 1088565718) {
      block11 : {
       block10 : {
        block9 : {
         block12 : {
          if ($3 >>> 0 <= 2139095039) {
           HEAP32[$5 + 8 >> 2] = 0;
           HEAP32[$5 + 12 >> 2] = 0;
           block7 : {
            if ($3 >>> 0 <= 1305022426) {
             $2 = $1 * .6366197723675814 + 6755399441055744.0 + -6755399441055744.0;
             $6 = $2 >= -2147483648.0;
             if (Math_abs($2) < 2147483648.0) {
              $3 = ~~$2
             } else {
              $3 = -2147483648
             }
             $3 = $2 == $2 ? ($2 > 2147483647.0 ? 2147483647 : $6 ? $3 : -2147483648) : 0;
             $1 = $1 + $2 * -1.5707963109016418 + $2 * -1.5893254773528196e-08;
             break block7;
            }
            $7 = $3;
            $3 = ($3 >>> 23 | 0) - 150 | 0;
            HEAPF64[$5 >> 3] = (wasm2js_scratch_store_i32(2, $7 - ($3 << 23) | 0), wasm2js_scratch_load_f32());
            $3 = _RNvNtNtNtCsaT5yz1Yhfyz_17compiler_builtins4math9libm_math14rem_pio2_large14rem_pio2_large($5, $5 + 8 | 0, $3);
            $1 = HEAPF64[$5 + 8 >> 3];
            if (($6 | 0) >= 0) {
             break block7
            }
            $3 = 0 - $3 | 0;
            $1 = -HEAPF64[$5 + 8 >> 3];
           }
           switch (($3 & 3) - 1 | 0) {
           case 0:
            break block10;
           case 1:
            break block11;
           case 2:
            break block12;
           default:
            break block9;
           };
          }
          $0 = Math_fround($0 - $0);
          break block13;
         }
         $1 = $1 * $1;
         $2 = $1 * $1;
         $0 = Math_fround(-Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993)));
         break block13;
        }
        $2 = $1 * $1;
        $4 = $1 * $2;
        $0 = Math_fround($4 * ($2 * $2) * ($2 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($1 + $4 * ($2 * .008333329385889463 + -.16666666641626524)));
        break block13;
       }
       $1 = $1 * $1;
       $2 = $1 * $1;
       $0 = Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993));
       break block13;
      }
      $2 = $1 * $1;
      $4 = $2 * -$1;
      $0 = Math_fround($4 * ($2 * $2) * ($2 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($4 * ($2 * .008333329385889463 + -.16666666641626524) - $1));
      break block13;
     }
     if ($3 >>> 0 >= 1085271520) {
      $2 = (($6 | 0) >= 0 ? -6.283185307179586 : 6.283185307179586) + $1;
      $1 = $2 * $2;
      $4 = $2 * $1;
      $0 = Math_fround($4 * ($1 * $1) * ($1 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($2 + $4 * ($1 * .008333329385889463 + -.16666666641626524)));
      break block13;
     }
     if (($6 | 0) >= 0) {
      $1 = $1 + -4.71238898038469;
      $1 = $1 * $1;
      $2 = $1 * $1;
      $0 = Math_fround(-Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993)));
      break block13;
     }
     $1 = $1 + 4.71238898038469;
     $1 = $1 * $1;
     $2 = $1 * $1;
     $0 = Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993));
     break block13;
    }
    if ($3 >>> 0 >= 1075235812) {
     $2 = (($6 | 0) >= 0 ? -3.141592653589793 : 3.141592653589793) + $1;
     $1 = $2 * $2;
     $4 = $1 * -$2;
     $0 = Math_fround($4 * ($1 * $1) * ($1 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($4 * ($1 * .008333329385889463 + -.16666666641626524) - $2));
     break block13;
    }
    if (($6 | 0) >= 0) {
     $1 = $1 + -1.5707963267948966;
     $1 = $1 * $1;
     $2 = $1 * $1;
     $0 = Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993));
     break block13;
    }
    $1 = $1 + 1.5707963267948966;
    $1 = $1 * $1;
    $2 = $1 * $1;
    $0 = Math_fround(-Math_fround($1 * -.499999997251031 + 1.0 + $2 * .04166662332373906 + $1 * $2 * ($1 * 2.439044879627741e-05 + -.001388676377460993)));
    break block13;
   }
   if ($3 >>> 0 >= 964689920) {
    $2 = $1 * $1;
    $4 = $2 * $1;
    $0 = Math_fround($4 * ($2 * $2) * ($2 * 2.718311493989822e-06 + -1.9839334836096632e-04) + ($4 * ($2 * .008333329385889463 + -.16666666641626524) + $1));
    break block13;
   }
   HEAPF32[$5 + 8 >> 2] = $3 >>> 0 < 8388608 ? Math_fround($0 * Math_fround(7.52316384526264e-37)) : Math_fround($0 + Math_fround(1329227995784915872903807.0e12));
  }
  __stack_pointer = $5 + 16 | 0;
  return $0;
 }
 
 function memset($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  block1 : {
   if ($2 >>> 0 < 16) {
    $3 = $0;
    break block1;
   }
   $5 = 0 - $0 & 3;
   $4 = $5 + $0 | 0;
   if ($0 >>> 0 < $4 >>> 0) {
    $6 = $5;
    $3 = $0;
    while (1) {
     HEAP8[$3 | 0] = $1;
     $3 = $3 + 1 | 0;
     $6 = $6 - 1 | 0;
     if ($6) {
      continue
     }
     break;
    };
   }
   $2 = $2 - $5 | 0;
   $3 = ($2 & -4) + $4 | 0;
   if ($3 >>> 0 > $4 >>> 0) {
    $5 = Math_imul($1 & 255, 16843009);
    while (1) {
     HEAP32[$4 >> 2] = $5;
     $4 = $4 + 4 | 0;
     if ($4 >>> 0 < $3 >>> 0) {
      continue
     }
     break;
    };
   }
   $2 = $2 & 3;
  }
  if ($3 >>> 0 < $2 + $3 >>> 0) {
   while (1) {
    HEAP8[$3 | 0] = $1;
    $3 = $3 + 1 | 0;
    $2 = $2 - 1 | 0;
    if ($2) {
     continue
    }
    break;
   }
  }
  return $0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$9 : {
          label$11 : {
           if ($1) {
            $3 = $2;
            if (!$3) {
             break label$11
            }
            break label$9;
           }
           i64toi32_i32$HIGH_BITS = 0;
           return ($0 >>> 0) / ($2 >>> 0) | 0;
          }
          if (!$0) {
           break label$7
          }
          break label$6;
         }
         if (!($3 - 1 & $3)) {
          break label$5
         }
         $6 = (Math_clz32($3) + 33 | 0) - Math_clz32($1) | 0;
         $5 = 0 - $6 | 0;
         break label$3;
        }
        i64toi32_i32$HIGH_BITS = 0;
        return ($1 >>> 0) / 0 | 0;
       }
       $2 = 32 - Math_clz32($1) | 0;
       if ($2 >>> 0 < 31) {
        break label$4
       }
       break label$2;
      }
      if (($3 | 0) == 1) {
       break label$1
      }
      if ($3) {
       $2 = 31 - Math_clz32($3 - 1 ^ $3) | 0
      } else {
       $2 = 32
      }
      $3 = $2 & 31;
      if (($2 & 63) >>> 0 >= 32) {
       $2 = 0;
       $0 = $1 >>> $3 | 0;
      } else {
       $2 = $1 >>> $3 | 0;
       $0 = ((1 << $3) - 1 & $1) << 32 - $3 | $0 >>> $3;
      }
      i64toi32_i32$HIGH_BITS = $2;
      return $0;
     }
     $6 = $2 + 1 | 0;
     $5 = 63 - $2 | 0;
    }
    $2 = $6 & 63;
    $4 = $2 & 31;
    if ($2 >>> 0 >= 32) {
     $2 = 0;
     $8 = $1 >>> $4 | 0;
    } else {
     $2 = $1 >>> $4 | 0;
     $8 = ((1 << $4) - 1 & $1) << 32 - $4 | $0 >>> $4;
    }
    $5 = $5 & 63;
    $4 = $5 & 31;
    if ($5 >>> 0 >= 32) {
     $1 = $0 << $4;
     $0 = 0;
    } else {
     $1 = (1 << $4) - 1 & $0 >>> 32 - $4 | $1 << $4;
     $0 = $0 << $4;
    }
    if ($6) {
     $5 = $3 - 1 | 0;
     $10 = ($5 | 0) == -1 ? -1 : 0;
     while (1) {
      $7 = $2 << 1 | $8 >>> 31;
      $2 = $8 << 1 | $1 >>> 31;
      $4 = $10 - ($7 + ($2 >>> 0 > $5 >>> 0) | 0) >> 31;
      $9 = $3 & $4;
      $8 = $2 - $9 | 0;
      $2 = $7 - ($2 >>> 0 < $9 >>> 0) | 0;
      $1 = $1 << 1 | $0 >>> 31;
      $0 = $11 | $0 << 1;
      $7 = $4 & 1;
      $11 = $7;
      $6 = $6 - 1 | 0;
      if ($6) {
       continue
      }
      break;
     };
    }
    i64toi32_i32$HIGH_BITS = $1 << 1 | $0 >>> 31;
    return $7 | $0 << 1;
   }
   $0 = 0;
   $1 = 0;
  }
  i64toi32_i32$HIGH_BITS = $1;
  return $0;
 }
 
 function __wasm_i64_mul($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  $4 = $2 >>> 16 | 0;
  $5 = $0 >>> 16 | 0;
  $9 = Math_imul($4, $5);
  $6 = $2 & 65535;
  $7 = $0 & 65535;
  $8 = Math_imul($6, $7);
  $5 = ($8 >>> 16 | 0) + Math_imul($5, $6) | 0;
  $4 = ($5 & 65535) + Math_imul($4, $7) | 0;
  i64toi32_i32$HIGH_BITS = (Math_imul($1, $2) + $9 | 0) + Math_imul($0, $3) + ($5 >>> 16) + ($4 >>> 16) | 0;
  return $8 & 65535 | $4 << 16;
 }
 
 function __wasm_rotl_i32($0) {
  var $1 = 0;
  $1 = $0 & 31;
  $0 = 0 - $0 & 31;
  return (-1 >>> $1 & -2) << $1 | (-1 << $0 & -2) >>> $0;
 }
 
 function __wasm_rotl_i64($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0;
  $6 = $2 & 63;
  $5 = $6;
  $4 = $5 & 31;
  if ($5 >>> 0 >= 32) {
   $5 = -1 >>> $4 | 0
  } else {
   $3 = -1 >>> $4 | 0;
   $5 = $3 | (1 << $4) - 1 << 32 - $4;
  }
  $5 = $5 & $0;
  $3 = $1 & $3;
  $4 = $6 & 31;
  if ($6 >>> 0 >= 32) {
   $3 = $5 << $4;
   $6 = 0;
  } else {
   $3 = (1 << $4) - 1 & $5 >>> 32 - $4 | $3 << $4;
   $6 = $5 << $4;
  }
  $5 = $3;
  $4 = 0 - $2 & 63;
  $3 = $4 & 31;
  if ($4 >>> 0 >= 32) {
   $3 = -1 << $3;
   $2 = 0;
  } else {
   $2 = -1 << $3;
   $3 = $2 | (1 << $3) - 1 & -1 >>> 32 - $3;
  }
  $0 = $2 & $0;
  $1 = $1 & $3;
  $3 = $4 & 31;
  if ($4 >>> 0 >= 32) {
   $2 = 0;
   $0 = $1 >>> $3 | 0;
  } else {
   $2 = $1 >>> $3 | 0;
   $0 = ((1 << $3) - 1 & $1) << 32 - $3 | $0 >>> $3;
  }
  $0 = $0 | $6;
  i64toi32_i32$HIGH_BITS = $2 | $5;
  return $0;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(imports);
 var FUNCTION_TABLE = [null, _RNvXs1i_NtCsedhpoW0refZ_4core3fmtRmNtB6_7Display3fmtCshn2Zjkdzlh4_14raftscope_wasm, _RNvXs1i_NtCsedhpoW0refZ_4core3fmtRbNtB6_7Display3fmtCshn2Zjkdzlh4_14raftscope_wasm, _RNvXs8_NtNtNtCsedhpoW0refZ_4core3fmt3num3impmNtB9_7Display3fmt, _RNvXsq_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt7Display3fmt, _RNvXsg_NtCsedhpoW0refZ_4core3fmtbNtB5_7Display3fmt, _RNvXsd_NtNtNtCsedhpoW0refZ_4core3fmt3num3impyNtB9_7Display3fmt, _RNvXs1i_NtCsedhpoW0refZ_4core3fmtReNtB6_7Display3fmtB8_, _RNvXs7_NtNtCsedhpoW0refZ_4core3fmt5floatdNtB7_7Display3fmt, _RNvXse_NtNtNtCsedhpoW0refZ_4core3fmt3num3impxNtB9_7Display3fmt, _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRDNtB6_5DebugEL_Bx_3fmtB8_, _RNvXsg_NtCseywxCc024wH_14raftscope_core3simNtB5_5EntryNtNtCsedhpoW0refZ_4core3fmt5Debug3fmt, _RNvXsW_NtNtCsedhpoW0refZ_4core3fmt3nummNtB7_5Debug3fmt_182, _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRmNtB6_5Debug3fmtCseywxCc024wH_14raftscope_core, _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCsl5a4uRf33NA_5alloc6string6StringEBF_, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char, _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtCshn2Zjkdzlh4_14raftscope_wasm, _RNvXsK_NtCsedhpoW0refZ_4core3fmtNtB5_5ErrorNtB5_5Debug3fmt, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str_100, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char_101, _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtB6_, _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRyNtB6_5Debug3fmtB8_, _RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write9write_str, _RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write10write_char, _RNvYNtNtNtCsedhpoW0refZ_4core3fmt8builders10PadAdapterNtB6_5Write9write_fmtB8_, _RNvXs2_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core3fmt7Display3fmt, _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload8take_box, _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload3get, _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload6as_str, _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNvNtCs9syRKuynNcS_3std9panicking13panic_handler19FormatStringPayloadEBH_, _RNvXs0_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_19FormatStringPayloadNtNtCsedhpoW0refZ_4core3fmt7Display3fmt, _RNvXs_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB4_19FormatStringPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload8take_box, _RNvXs_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB4_19FormatStringPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload3get, _RNvYINtNvNtCs9syRKuynNcS_3std9panicking11begin_panic7PayloadReENtNtCsedhpoW0refZ_4core5panic12PanicPayload6as_strB9_, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str_197, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char_198, _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtCs9syRKuynNcS_3std, _RNvXNtCsedhpoW0refZ_4core3anyReNtB2_3Any7type_idCs9syRKuynNcS_3std, _RNvXNtCsedhpoW0refZ_4core3anyNtNtCsl5a4uRf33NA_5alloc6string6StringNtB2_3Any7type_idCs9syRKuynNcS_3std];
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "rs_cmds": rs_cmds, 
  "rs_free": rs_free, 
  "rs_horizon": rs_horizon, 
  "rs_message": rs_message, 
  "rs_new": rs_new, 
  "rs_op": rs_op, 
  "rs_out": rs_out, 
  "rs_out_len": rs_out_len, 
  "rs_pick": rs_pick, 
  "rs_preferred_height": rs_preferred_height, 
  "rs_render": rs_render, 
  "rs_run_headless": rs_run_headless, 
  "rs_seek": rs_seek, 
  "rs_server": rs_server, 
  "rs_stats": rs_stats, 
  "rs_text": rs_text, 
  "rs_text_len": rs_text_len, 
  "rs_time": rs_time
 };
}

var retasmFunc = asmFunc({
});
export var memory = retasmFunc.memory;
export var rs_cmds = retasmFunc.rs_cmds;
export var rs_free = retasmFunc.rs_free;
export var rs_horizon = retasmFunc.rs_horizon;
export var rs_message = retasmFunc.rs_message;
export var rs_new = retasmFunc.rs_new;
export var rs_op = retasmFunc.rs_op;
export var rs_out = retasmFunc.rs_out;
export var rs_out_len = retasmFunc.rs_out_len;
export var rs_pick = retasmFunc.rs_pick;
export var rs_preferred_height = retasmFunc.rs_preferred_height;
export var rs_render = retasmFunc.rs_render;
export var rs_run_headless = retasmFunc.rs_run_headless;
export var rs_seek = retasmFunc.rs_seek;
export var rs_server = retasmFunc.rs_server;
export var rs_stats = retasmFunc.rs_stats;
export var rs_text = retasmFunc.rs_text;
export var rs_text_len = retasmFunc.rs_text_len;
export var rs_time = retasmFunc.rs_time;
