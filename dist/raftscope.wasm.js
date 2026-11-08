
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
  base64DecodeToExistingUint8Array(bufferView, 1048576, "DwAAAAwAAAAEAAAAEAAAABEAAAASAAAAAVPAwAABU8AADCJwcmV2SW5kZXgiOsAMLCJwcmV2VGVybSI6wAssImVudHJpZXMiOsAPLCJjb21taXRJbmRleCI6wAAKInN1Y2Nlc3MiOsAOLCJtYXRjaEluZGV4IjrAAA4ibGFzdExvZ1Rlcm0iOsAQLCJsYXN0TG9nSW5kZXgiOsAABnsiaWQiOsAJLCJyb2xlIjoiwAkiLCJ0ZXJtIjrADCwidm90ZWRGb3IiOsANLCJsb2dMZW5ndGgiOsAPLCJjb21taXRJbmRleCI6wBEsImVsZWN0aW9uQWxhcm0iOsAJLCJncm91cCI6wAksInZvdGVzIjrADiwidHJhbnNmZXJUbyI6wAAKImdyYW50ZWQiOsAAAnQ9wBg6IExlYWRlciBDb21wbGV0ZW5lc3M6IFPAByAodGVybSDAGCkgbGFja3MgY29tbWl0dGVkIGVudHJ5IMAAFnNsaWNlIGluZGV4IHN0YXJ0cyBhdCDADSBidXQgZW5kcyBhdCDAACBpbmRleCBvdXQgb2YgYm91bmRzOiB0aGUgbGVuIGlzIMASIGJ1dCB0aGUgaW5kZXggaXMgwAACdD3AFDogRWxlY3Rpb24gU2FmZXR5OiBTwAYgYW5kIFPAFiBib3RoIGxlYWRlcnMgaW4gdGVybSDAAAJ0PcADOiBTwA0gY29tbWl0SW5kZXggwBMgYmV5b25kIGxvZyBsZW5ndGggwAAScmFuZ2Ugc3RhcnQgaW5kZXggwCIgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggwAAQcmFuZ2UgZW5kIGluZGV4IMAiIG91dCBvZiByYW5nZSBmb3Igc2xpY2Ugb2YgbGVuZ3RoIMAAwAQgb2YgwAAQYXNzZXJ0aW9uIGBsZWZ0IMAXIHJpZ2h0YCBmYWlsZWQKICBsZWZ0OiDACQogcmlnaHQ6IMAAwAI6IMAAE10sInZpb2xhdGlvbkNvdW50IjrAAX0ABnsiaWQiOsAILCJuZXh0IjrACSwibWF0Y2giOsABfQAHeyJzZXEiOsAJLCJraW5kIjoiwAkiLCJmcm9tIjrABiwidG8iOsAILCJ0ZXJtIjrACCwic2VudCI6wAssImFycml2ZXMiOsAILCJsb3N0IjrAASzAAX0AL3Jvb3QvLnJ1c3R1cC90b29sY2hhaW5zL3N0YWJsZS14ODZfNjQtdW5rbm93bi1saW51eC1nbnUvbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAvcm9vdC8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2NvcmUvc3JjL251bS9pbXAvZmx0MmRlYy9zdHJhdGVneS9ncmlzdS5ycwAvcm9vdC8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2NvcmUvc3JjL3NsaWNlL3NvcnQvc2hhcmVkL3NtYWxsc29ydC5ycwAvcm9vdC8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L2FsbG9jL3NyYy9mbXQucnMAL3Jvb3QvLnJ1c3R1cC90b29sY2hhaW5zL3N0YWJsZS14ODZfNjQtdW5rbm93bi1saW51eC1nbnUvbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9jb3JlL3NyYy9udW0vaW1wL2RpeV9mbG9hdC5ycwAvcm9vdC8ucnVzdHVwL3Rvb2xjaGFpbnMvc3RhYmxlLXg4Nl82NC11bmtub3duLWxpbnV4LWdudS9saWIvcnVzdGxpYi9zcmMvcnVzdC9saWJyYXJ5L3N0ZC9zcmMvc3lzL3N5bmMvcndsb2NrL25vX3RocmVhZHMucnMAL3Jvb3QvLnJ1c3R1cC90b29sY2hhaW5zL3N0YWJsZS14ODZfNjQtdW5rbm93bi1saW51eC1nbnUvbGliL3J1c3RsaWIvc3JjL3J1c3QvbGlicmFyeS9jb3JlL3NyYy9udW0vaW1wL2ZsdDJkZWMvc3RyYXRlZ3kvZHJhZ29uLnJzAC9yb290Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUteDg2XzY0LXVua25vd24tbGludXgtZ251L2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvY29yZS9zcmMvbnVtL2ltcC9iaWdudW0ucnMAY3JhdGVzL3JhZnRzY29wZS1jb3JlL3NyYy9zaW0ucnMAY3JhdGVzL3JhZnRzY29wZS1jb3JlL3NyYy90aW1lbGluZS5ycwBjcmF0ZXMvcmFmdHNjb3BlLWNvcmUvc3JjL3NjZW5lLnJzAC9yb290Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUteDg2XzY0LXVua25vd24tbGludXgtZ251L2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMvbW9kLnJzAC9yb290Ly5ydXN0dXAvdG9vbGNoYWlucy9zdGFibGUteDg2XzY0LXVua25vd24tbGludXgtZ251L2xpYi9ydXN0bGliL3NyYy9ydXN0L2xpYnJhcnkvY29yZS9zcmMvbnVtL2ltcC9mbHQyZGVjL21vZC5ycwAvcm9vdC8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby0xOTQ5Y2Y4YzZiNWI1NTdmL2RsbWFsbG9jLTAuMi4xMy9zcmMvZGxtYWxsb2MucnMAY3JhdGVzL3JhZnRzY29wZS13YXNtL3NyYy9saWIucnMAAnQ9wBk6IFN0YXRlIE1hY2hpbmUgU2FmZXR5OiBTwAsgY29tbWl0dGVkIMAKIGF0IGluZGV4IMAFIGJ1dCDAFCB3YXMgY29tbWl0dGVkIHRoZXJlAAh7InRpbWUiOsALLCJob3Jpem9uIjrABSwibiI6wAosImxlYWRlciI6wA4sImxlYWRlclRlcm0iOsALLCJtYXhUZXJtIjrADCwiaW5GbGlnaHQiOsANLCJlbGVjdGlvbnMiOsALLCJsZWFkZXJzIjrACCwic2VudCI6wA0sImRlbGl2ZXJlZCI6wAgsImxvc3QiOsANLCJydWxlRXZhbHMiOsAMLCJyZXF1ZXN0cyI6wAwsInJlamVjdGVkIjrADSwiY29tbWl0dGVkIjrADSwidHJhbnNmZXJzIjrABywicDUwIjrABywicDk5IjrADiwibGVhZGVybGVzcyI6wAssInN0b3BwZWQiOsAPLCJwYXJ0aXRpb25lZCI6wA8sInZpb2xhdGlvbnMiOlsAEF0sInN1Y2Nlc3Npb25zIjrACywiaW5PcmRlciI6wA4sImhhbmRvZmZQNTAiOsAMLCJoYW5kb2ZmcyI6wAwsInJvdGF0aW9uIjrADiwidGVybUxlbmd0aCI6wA8sImxlYWRlclRpbWUiOlsAASLAASIAUmVxdWVzdFZvdGVSZXF1ZXN0Vm90ZSByZXBseUFwcGVuZEVudHJpZXNBcHBlbmRFbnRyaWVzIHJlcGx5ImhhbmRvZmYiOnRydWVUaW1lb3V0Tm93Zm9sbG93ZXJjYW5kaWRhdGVsZWFkZXJzdG9wcGVkLCJwZWVycyI6WwAAAN8IEAAgAAAAVgEAACQAAADfCBAAIAAAAFYBAAA2AAAA3wgQACAAAADrAAAAGwAAAGNhcGFjaXR5IG92ZXJmbG93AAAAnwcQAG4AAAAcAAAABQ==");
  base64DecodeToExistingUint8Array(bufferView, 1051600, "AQAAABMAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3Igd2hlbiB0aGUgdW5kZXJseWluZyBzdHJlYW0gZGlkIG5vdAAA6wQQAGYAAACPAgAADgAAAEVycm9yAAAADwAAAAwAAAAEAAAAFAAAABUAAAAWAAAAMDEyMzQ1Njc4OWFiY2RlZgAAAAAEAAAABAAAABcAAAAtK05hTmluZjAwLmFzc2VydGlvbiBmYWlsZWQ6IGJ1Zi5sZW4oKSA+PSBtYXhsZW4OCBAAdQAAAIsCAAANAAAAIHsgLCA6ICB7CiwKfQAAAFIFEABzAAAALgAAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBvdGhlciA+IDBhc3NlcnRpb24gZmFpbGVkOiBub2JvcnJvdyB9AMQGEABwAAAAhAEAAAEAAABhc3NlcnRpb24gZmFpbGVkOiBkaWdpdHMgPCA0MAAAAAAAAAAMAAAABAAAABgAAAAZAAAAGgAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA9PTAwMDEwMjAzMDQwNTA2MDcwODA5MTAxMTEyMTMxNDE1MTYxNzE4MTkyMDIxMjIyMzI0MjUyNjI3MjgyOTMwMzEzMjMzMzQzNTM2MzczODM5NDA0MTQyNDM0NDQ1NDY0NzQ4NDk1MDUxNTI1MzU0NTU1NjU3NTg1OTYwNjE2MjYzNjQ2NTY2Njc2ODY5NzA3MTcyNzM3NDc1NzY3Nzc4Nzk4MDgxODI4Mzg0ODU4Njg3ODg4OTkwOTE5MjkzOTQ5NTk2OTc5ODk5LmF0dGVtcHQgdG8gZGl2aWRlIGJ5IHplcm9hdHRlbXB0IHRvIGNhbGN1bGF0ZSB0aGUgcmVtYWluZGVyIHdpdGggYSBkaXZpc29yIG9mIHplcm9hc3NlcnRpb24gZmFpbGVkOiAhYnVmLmlzX2VtcHR5KCkAAA4IEAB1AAAAtwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBidWZbMF0gPiBiJzAnAA4IEAB1AAAAuAAAAAUAAAB1c2VyLXByb3ZpZGVkIGNvbXBhcmlzb24gZnVuY3Rpb24gZG9lcyBub3QgY29ycmVjdGx5IGltcGxlbWVudCBhIHRvdGFsIG9yZGVybQQQAH0AAABWAwAABQAAAAAAAADfRRo9A88a5sH7zP4AAAAAysaaxxf+cKvc+9T+AAAAAE/cvL78sXf/9vvc/gAAAAAM1mtB75FWvhH85P4AAAAAPPx/kK0f0I0s/Oz+AAAAAIOaVTEoXFHTRvz0/gAAAAC1yaatj6xxnWH8/P4AAAAAy4vuI3cinOp7/AT/AAAAAG1TeECRScyulvwM/wAAAABXzrZdeRI8grH8FP8AAAAAN1b7TTaUEMLL/Bz/AAAAAE+YSDhv6paQ5vwk/wAAAADHOoIly4V01wD9LP8AAAAA9Je/l83PhqAb/TT/AAAAAOWsKheYCjTvNf08/wAAAACOsjUq+2c4slD9RP8AAAAAOz/G0t/UyIRr/Uz/AAAAALrN0xonRN3Fhf1U/wAAAACWySW7zp9rk6D9XP8AAAAAhKVifSRsrNu6/WT/AAAAAPbaXw1YZquj1f1s/wAAAAAm8cPek/ji8+/9dP8AAAAAuID/qqittbUK/nz/AAAAAItKfGwFX2KHJf6E/wAAAABTMME0YP+8yT/+jP8AAAAAVSa6kYyFTpZa/pT/AAAAAL1+KXAkd/nfdP6c/wAAAACPuOW4n73fpo/+pP8AAAAAlH10iM9fqfip/qz/AAAAAM+bqI+TcES5xP60/wAAAABrFQ+/+PAIit/+vP8AAAAAtjExZVUlsM35/sT/AAAAAKx/e9DG4j+ZFP/M/wAAAAAGOysqxBBc5C7/1P8AAAAA05JzaZkkJKpJ/9z/AAAAAA7KAIPytYf9Y//k/wAAAADrGhGSZAjlvH7/7P8AAAAAzIhQbwnMvIyZ//T/AAAAACxlGeJYF7fRs//8/w==");
  base64DecodeToExistingUint8Array(bufferView, 1053174, "QJzO/wQ=");
  base64DecodeToExistingUint8Array(bufferView, 1053188, "EKXU6Oj/DAAAAAAAAABirMXreK0DABQAAAAAAIQJlPh4OT+BHgAcAAAAAACzFQfJe86XwDgAJAAAAAAAcFzqe84yfo9TACwAAAAAAGiA6aukONLVbQA0AAAAAABFIpoXJidPn4gAPAAAAAAAJ/vE1DGiY+2iAEQAAAAAAKityIw4Zd6wvQBMAAAAAADbZasajgjHg9gAVAAAAAAAmh1xQvkdXcTyAFwAAAAAAFjnG6YsaU2SDQFkAAAAAADqjXAaZO4B2icBbAAAAAAASnfvmpmjbaJCAXQAAAAAAIVrfbR7eAnyXAF8AAAAAAB3GN15oeRUtHcBhAAAAAAAwsWbW5KGW4aSAYwAAAAAAD1dlsjFUzXIrAGUAAAAAACzoJf6XLQqlccBnAAAAAAA41+gmb2fRt7hAaQAAAAAACWMOds0wpul/AGsAAAAAABcn5ijcprG9hYCtAAAAAAAzr7pVFO/3LcxArwAAAAAAOJBIvIX8/yITALEAAAAAACleFzTm84gzGYCzAAAAAAA31Mhe/NaFpiBAtQAAAAAADowH5fctaDimwLcAAAAAACWs+NcU9HZqLYC5AAAAAAAPESnpNl8m/vQAuwAAAAAABBEpKdMTHa76wL0AAAAAAAanEC2746riwYD/AAAAAAALIRXphDvH9AgAwQBAAAAACkxkenlpBCbOwMMAQAAAACdDJyh+5sQ51UDFAEAAAAAKfQ7YtkgKKxwAxwBAAAAAIXPp3peS0SAiwMkAQAAAAAt3awDQOQhv6UDLAEAAAAAj/9EXi+cZ47AAzQBAAAAAEG4jJydFzPU2gM8AQAAAACpG+O0ktsZnvUDRAEAAAAA2Xffum6/lusPBEwBAAAAAGFzc2VydGlvbiBmYWlsZWQ6IGQubWFudCA+IDDsAxAAgAAAAN4BAAAFAAAA7AMQAIAAAAB/AAAAFQAAAOwDEACAAAAANQIAABEAAADsAxAAgAAAAG4CAAAJAAAA7AMQAIAAAACrAAAABQAAAOwDEACAAAAADAEAABEAAADsAxAAgAAAAEIBAAAJAAAAQgYQAIEAAAB0AQAAJAAAAEIGEACBAAAAeQEAAC8AAABCBhAAgQAAAIYBAAASAAAAQgYQAIEAAABoAQAADQAAAEIGEACBAAAATgEAACIAAABCBhAAgQAAAMQAAAAJAAAAQgYQAIEAAAD9AAAADQAAAEIGEACBAAAABAEAABIAAAABAAAACgAAAGQAAADoAwAAECcAAKCGAQBAQg8AgJaYAADh9QUAypo7wW/yhiMAAACB76yFW0FtLe4EAAABH2q/ZO04bu2Xp9r0+T/pA08YAAE+lS4Jmd8D/TgVDy/kdCPs9c/TCNwExNqwzbwZfzOmAyYf6U4CAAABfC6YW4fTvnKf2diHLxUSxlDea3BuSs8P2JXVbnGyJrBmxq0kNhUdWtNCPA5U/2PAc1XMF+/5ZfIovFX3x9yA3O1u9M7v3F/3UwUA7AMQAIAAAADxAgAAJgAAAOwDEACAAAAA5QIAACYAAADsAxAAgAAAAM4CAAAmAAAAICAgIDB4MDEyMzQ1Njc4OUFCQ0RFRmZhbHNldHJ1ZQB8BxAAIgAAAPwBAAAiAAAANQcQACAAAADxAQAAKAAAAHwHEAAiAAAAJwIAACEAAAB8BxAAIgAAAHECAAAsAAAAfAcQACIAAAByAgAAKwAAACDCtyBjYW5kLiDCtyBoYW5kaW5nIG9mZiDCtyBsZWFkZXIgwrcgZG93bgAANQcQACAAAAAmAQAAJwAAADUHEAAgAAAALwEAABwAAAA1BxAAIAAAAGcBAAAXAAAANQcQACAAAAB/AQAALQAAADUHEAAgAAAAiAEAAB8AAAA1BxAAIAAAAHMBAAAeAAAANQcQACAAAAAFAgAAFQAAADUHEAAgAAAAHgMAAB8AAAA1BxAAIAAAAGACAAAgAAAANQcQACAAAACeAgAAIgAAADUHEAAgAAAApAIAACYAAAA1BxAAIAAAAKUCAAAYAAAANQcQACAAAACmAgAAJAAAADUHEAAgAAAAqAIAAEwAAAA1BxAAIAAAAKsCAAAdAAAANQcQACAAAADUAgAAIgAAADUHEAAgAAAA7wIAABoAAAA1BxAAIAAAAPoCAAAdAAAANQcQACAAAADYBAAAIgAAADUHEAAgAAAAmQQAACIAAAA1BxAAIAAAABoEAAAeAAAANQcQACAAAAAGBAAANAAAADUHEAAgAAAABwQAACsAAAA1BxAAIAAAAEwEAAAYAAAANQcQACAAAABYBAAAJgAAADUHEAAgAAAAbAQAACAAAAA1BxAAIAAAAGADAAAiAAAANQcQACAAAABhAwAAMgAAADUHEAAgAAAAigIAACYAAAA1BxAAIAAAAJICAAAaAAAANQcQACAAAAC/AgAAIgAAADUHEAAgAAAA7QQAACQAAAA1BxAAIAAAAHsDAABPAAAANQcQACAAAACCAwAAHQAAADUHEAAgAAAAggMAADgAAAA1BxAAIAAAAIIDAABPAAAANQcQACAAAACFAwAAJgAAADUHEAAgAAAAhwMAABkAAAA1BxAAIAAAAJADAAASAAAANQcQACAAAACRAwAAGAAAADUHEAAgAAAAjQMAABsAAAA1BxAAIAAAAAcDAAAeAAAANQcQACAAAAAvBAAAIgAAADUHEAAgAAAAMgQAABYAAAA1BxAAIAAAADUEAAAxAAAANQcQACAAAAAzBAAAKgAAADUHEAAgAAAAfAQAACIAAAA1BxAAIAAAAIwEAAAvAAAANQcQACAAAACABAAAKAAAADUHEAAgAAAAigQAAB0AAAA1BxAAIAAAAI4EAAAWAAAANQcQACAAAABSBQAAJgAAADUHEAAgAAAATQUAACYAAABhc3NlcnRpb24gZmFpbGVkOiBjZmcubWluX2xhdGVuY3kgPj0gMSAmJiBjZmcubWF4X2xhdGVuY3kgPj0gY2ZnLm1pbl9sYXRlbmN5NQcQACAAAAC+AQAACQAAADUHEAAgAAAA2gEAABgAAAA1BxAAIAAAAKMEAAAiAAAANQcQACAAAAANAgAAFQAAADUHEAAgAAAAsQQAACIAAAA1BxAAIAAAALMDAAAZAAAANQcQACAAAAC0AwAAGQAAADUHEAAgAAAA0gMAABsAAAA1BxAAIAAAAN4DAAAgAAAANQcQACAAAADVAwAAJAAAADUHEAAgAAAAyAQAACIAAAA1BxAAIAAAADoDAAAiAAAANQcQACAAAAASAgAAHgAAADUHEAAgAAAAMAIAABwAAAA1BxAAIAAAAHkCAAAbAAAANQcQACAAAADoAwAAJgAAAFYHEAAlAAAAqwAAACgAAABWBxAAJQAAAIQAAAAnAAAAfgMQAG0AAAD8AwAAMwAAAEVudHJ5dGVybXZhbHVlAAAAAAAACAAAAAQAAAAbAAAAHAAAAB0AAAAeAAAAHwAAABAAAAAEAAAAIAAAACEAAAAiAAAAIwAAAFz26V/cAva58cFwbPJhwSSWbLeZw5plL7UjTNN9ErJxDwAAAAwAAAAEAAAAJAAAACUAAAAmAAAAYXNzZXJ0aW9uIGZhaWxlZDogcHNpemUgPj0gc2l6ZSArIG1pbl9vdmVyaGVhZAAAhAgQAFoAAACxBAAACQAAAGFzc2VydGlvbiBmYWlsZWQ6IHBzaXplIDw9IHNpemUgKyBtYXhfb3ZlcmhlYWQAAIQIEABaAAAAtwQAAA0AAAByd2xvY2sgb3ZlcmZsb3dlZCByZWFkIGxvY2tzxgUQAHsAAAAVAAAALAAAAAAAAAAIAAAABAAAACcAAAAPAAAADAAAAAQAAAAoAAAAcndsb2NrIGhhcyBub3QgYmVlbiBsb2NrZWQgZm9yIHJlYWRpbmcAAMYFEAB7AAAAPgAAAAkAAABJCxAAUQsQAFoLEABgCxAACAAAAAkAAAAGAAAABwAAAAMAAAAEAAAABAAAAAYAAACD+aIARE5uAPwpFQDRVycA3TT1AGLbwAA8mZUAQZBDAGNR/gC73qsAt2HFADpuJADSTUIASQbgAAnqLgAcktEA6x3+ACmxHADoPqcA9TWCAES7LgCc6YQAtCZwAEF+XwDWkTkAU4M5AJz0OQCLX4QAKPm9APgfOwDe/5cAD5gFABEv7wAKWosAbR9tAM9+NgAJyycARk+3AJ5mPwAt6l8Auid1AOXrxwA9e/EA9zkHAJJSigD7a+oAH7FfAAhdjQAwA1YAe/xGAPCrawAgvM8ANvSaAOOpHQBeYZEACBvmAIWZZQCgFF8AjUBoAIDY/wAnc00ABgYxAMpWFQDJqHMAe+JgAGuMwAAAAAAAAAAAQPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNQ==");
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
       $8 = HEAP32[264234];
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
           $2 = HEAP32[264233];
           $5 = $0 >>> 0 < 11 ? 16 : $0 + 11 & 504;
           $0 = $5 >>> 3 | 0;
           $1 = $2 >>> $0 | 0;
           if ($1 & 3) {
            $6 = $0 + (($1 ^ -1) & 1) | 0;
            $0 = $6 << 3;
            $3 = $0 + 1056668 | 0;
            $1 = HEAP32[$0 + 1056676 >> 2];
            $4 = HEAP32[$1 + 8 >> 2];
            if (($3 | 0) == ($4 | 0)) {
             break block5
            }
            HEAP32[$4 + 12 >> 2] = $3;
            HEAP32[$3 + 8 >> 2] = $4;
            break block6;
           }
           if (HEAPU32[264235] >= $5 >>> 0) {
            break block2
           }
           if ($1) {
            break block7
           }
           $0 = HEAP32[264234];
           if (!$0) {
            break block2
           }
           if ($0) {
            $0 = 31 - Math_clz32($0 - 1 ^ $0) | 0
           } else {
            $0 = 32
           }
           $1 = HEAP32[($0 << 2) + 1056524 >> 2];
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
             $1 = (HEAP32[$2 + 28 >> 2] << 2) + 1056524 | 0;
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
          (wasm2js_i32$0 = 1056932, wasm2js_i32$1 = __wasm_rotl_i32($6) & $2), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
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
        $3 = $1 + 1056668 | 0;
        $0 = HEAP32[$1 + 1056676 >> 2];
        $4 = HEAP32[$0 + 8 >> 2];
        block19 : {
         if (($3 | 0) != ($4 | 0)) {
          HEAP32[$4 + 12 >> 2] = $3;
          HEAP32[$3 + 8 >> 2] = $4;
          break block19;
         }
         (wasm2js_i32$0 = 1056932, wasm2js_i32$1 = __wasm_rotl_i32($6) & $2), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
        }
        HEAP32[$0 + 4 >> 2] = $5 | 3;
        $7 = $0 + $5 | 0;
        $6 = $1 - $5 | 0;
        HEAP32[$7 + 4 >> 2] = $6 | 1;
        HEAP32[$0 + $1 >> 2] = $6;
        $2 = HEAP32[264235];
        if ($2) {
         $1 = HEAP32[264237];
         $3 = HEAP32[264233];
         $4 = 1 << ($2 >>> 3);
         block22 : {
          if (!($3 & $4)) {
           HEAP32[264233] = $4 | $3;
           $4 = ($2 & -8) + 1056668 | 0;
           $3 = $4;
           break block22;
          }
          $2 = $2 & -8;
          $3 = $2 + 1056668 | 0;
          $4 = HEAP32[$2 + 1056676 >> 2];
         }
         HEAP32[$3 + 8 >> 2] = $1;
         HEAP32[$4 + 12 >> 2] = $1;
         HEAP32[$1 + 12 >> 2] = $3;
         HEAP32[$1 + 8 >> 2] = $4;
        }
        HEAP32[264237] = $7;
        HEAP32[264235] = $6;
        break folding_inner0;
       }
       (wasm2js_i32$0 = 1056936, wasm2js_i32$1 = HEAP32[264234] & __wasm_rotl_i32(HEAP32[$2 + 28 >> 2])), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
      }
      block27 : {
       block24 : {
        if ($4 >>> 0 >= 16) {
         HEAP32[$2 + 4 >> 2] = $5 | 3;
         $6 = $2 + $5 | 0;
         HEAP32[$6 + 4 >> 2] = $4 | 1;
         HEAP32[$4 + $6 >> 2] = $4;
         $1 = HEAP32[264235];
         if (!$1) {
          break block24
         }
         $0 = HEAP32[264237];
         $3 = HEAP32[264233];
         $7 = 1 << ($1 >>> 3);
         block26 : {
          if (!($3 & $7)) {
           HEAP32[264233] = $3 | $7;
           $3 = ($1 & -8) + 1056668 | 0;
           $1 = $3;
           break block26;
          }
          $3 = $1 & -8;
          $1 = $3 + 1056668 | 0;
          $3 = HEAP32[$3 + 1056676 >> 2];
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
       HEAP32[264237] = $6;
       HEAP32[264235] = $4;
      }
      $0 = $2 + 8 | 0;
      if (!$0) {
       break block2
      }
      break block28;
     }
     $4 = 0 - $5 | 0;
     $2 = HEAP32[($7 << 2) + 1056524 >> 2];
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
        $0 = HEAP32[($0 << 2) + 1056524 >> 2];
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
     $0 = HEAP32[264235];
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
       $2 = (HEAP32[$1 + 28 >> 2] << 2) + 1056524 | 0;
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
      (wasm2js_i32$0 = 1056936, wasm2js_i32$1 = HEAP32[264234] & __wasm_rotl_i32(HEAP32[$1 + 28 >> 2])), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
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
       $2 = HEAP32[264233];
       $3 = 1 << ($4 >>> 3);
       block50 : {
        if (!($2 & $3)) {
         HEAP32[264233] = $2 | $3;
         $4 = ($4 & 248) + 1056668 | 0;
         $2 = $4;
         break block50;
        }
        $3 = $4 & 248;
        $2 = $3 + 1056668 | 0;
        $4 = HEAP32[$3 + 1056676 >> 2];
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
      $1 = HEAP32[264235];
      if ($5 >>> 0 > $1 >>> 0) {
       $0 = HEAP32[264236];
       if ($5 >>> 0 >= $0 >>> 0) {
        $0 = $5 + 65583 | 0;
        $1 = $0 & -65536;
        if (!$1) {
         break block53
        }
        $3 = HEAPU8[1056504];
        HEAP8[1056504] = 1;
        $2 = 1056992;
        if ($1 >>> 0 > 57120) {
         break block53
        }
        if ($3) {
         break block53
        }
        $1 = 57120;
        break block54;
       }
       $1 = $0 - $5 | 0;
       HEAP32[264236] = $1;
       $0 = HEAP32[264238];
       $2 = $0 + $5 | 0;
       HEAP32[264238] = $2;
       HEAP32[$2 + 4 >> 2] = $1 | 1;
       HEAP32[$0 + 4 >> 2] = $5 | 3;
       $0 = $0 + 8 | 0;
       break block28;
      }
      $0 = HEAP32[264237];
      $2 = $1 - $5 | 0;
      block56 : {
       if ($2 >>> 0 <= 15) {
        HEAP32[264237] = 0;
        HEAP32[264235] = 0;
        HEAP32[$0 + 4 >> 2] = $1 | 3;
        $1 = $0 + $1 | 0;
        HEAP32[$1 + 4 >> 2] = HEAP32[$1 + 4 >> 2] | 1;
        break block56;
       }
       HEAP32[264235] = $2;
       $3 = $0 + $5 | 0;
       HEAP32[264237] = $3;
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
    $0 = $1 + HEAP32[264239] | 0;
    HEAP32[264239] = $0;
    $3 = HEAP32[264240];
    HEAP32[264240] = $0 >>> 0 > $3 >>> 0 ? $0 : $3;
    block63 : {
     block77 : {
      block74 : {
       block73 : {
        block64 : {
         block60 : {
          block59 : {
           $3 = HEAP32[264238];
           if ($3) {
            $0 = 1056652;
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
           $0 = HEAP32[264242];
           if (!(($0 | 0) != 0 & $0 >>> 0 <= $2 >>> 0)) {
            HEAP32[264242] = $2
           }
           HEAP32[264243] = 4095;
           HEAP32[264164] = $1;
           HEAP32[264163] = $2;
           HEAP32[264170] = 1056668;
           HEAP32[264172] = 1056676;
           HEAP32[264169] = 1056668;
           HEAP32[264174] = 1056684;
           HEAP32[264171] = 1056676;
           HEAP32[264176] = 1056692;
           HEAP32[264173] = 1056684;
           HEAP32[264178] = 1056700;
           HEAP32[264175] = 1056692;
           HEAP32[264180] = 1056708;
           HEAP32[264177] = 1056700;
           HEAP32[264182] = 1056716;
           HEAP32[264179] = 1056708;
           HEAP32[264184] = 1056724;
           HEAP32[264181] = 1056716;
           HEAP32[264166] = 0;
           HEAP32[264186] = 1056732;
           HEAP32[264183] = 1056724;
           HEAP32[264185] = 1056732;
           HEAP32[264188] = 1056740;
           HEAP32[264187] = 1056740;
           HEAP32[264190] = 1056748;
           HEAP32[264189] = 1056748;
           HEAP32[264192] = 1056756;
           HEAP32[264191] = 1056756;
           HEAP32[264194] = 1056764;
           HEAP32[264193] = 1056764;
           HEAP32[264196] = 1056772;
           HEAP32[264195] = 1056772;
           HEAP32[264198] = 1056780;
           HEAP32[264197] = 1056780;
           HEAP32[264200] = 1056788;
           HEAP32[264199] = 1056788;
           HEAP32[264202] = 1056796;
           HEAP32[264204] = 1056804;
           HEAP32[264201] = 1056796;
           HEAP32[264206] = 1056812;
           HEAP32[264203] = 1056804;
           HEAP32[264208] = 1056820;
           HEAP32[264205] = 1056812;
           HEAP32[264210] = 1056828;
           HEAP32[264207] = 1056820;
           HEAP32[264212] = 1056836;
           HEAP32[264209] = 1056828;
           HEAP32[264214] = 1056844;
           HEAP32[264211] = 1056836;
           HEAP32[264216] = 1056852;
           HEAP32[264213] = 1056844;
           HEAP32[264218] = 1056860;
           HEAP32[264215] = 1056852;
           HEAP32[264220] = 1056868;
           HEAP32[264217] = 1056860;
           HEAP32[264222] = 1056876;
           HEAP32[264219] = 1056868;
           HEAP32[264224] = 1056884;
           HEAP32[264221] = 1056876;
           HEAP32[264226] = 1056892;
           HEAP32[264223] = 1056884;
           HEAP32[264228] = 1056900;
           HEAP32[264225] = 1056892;
           HEAP32[264230] = 1056908;
           HEAP32[264227] = 1056900;
           HEAP32[264232] = 1056916;
           HEAP32[264229] = 1056908;
           $0 = $2 + 15 & -8;
           $3 = $0 - 8 | 0;
           HEAP32[264238] = $3;
           HEAP32[264231] = 1056916;
           $1 = $1 - 40 | 0;
           $0 = ($1 + ($2 - $0 | 0) | 0) + 8 | 0;
           HEAP32[264236] = $0;
           HEAP32[$3 + 4 >> 2] = $0 | 1;
           HEAP32[($1 + $2 | 0) + 4 >> 2] = 40;
           HEAP32[264241] = 2097152;
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
         $0 = HEAP32[264242];
         HEAP32[264242] = $0 >>> 0 < $2 >>> 0 ? $0 : $2;
         $4 = $1 + $2 | 0;
         $0 = 1056652;
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
          $0 = 1056652;
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
          HEAP32[264238] = $4;
          $7 = $1 - 40 | 0;
          $0 = ($7 + ($2 - $0 | 0) | 0) + 8 | 0;
          HEAP32[264236] = $0;
          HEAP32[$4 + 4 >> 2] = $0 | 1;
          HEAP32[($2 + $7 | 0) + 4 >> 2] = 40;
          HEAP32[264241] = 2097152;
          $0 = ($6 - 32 & -8) - 8 | 0;
          $4 = $0 >>> 0 < $3 + 16 >>> 0 ? $3 : $0;
          HEAP32[$4 + 4 >> 2] = 27;
          $7 = HEAP32[264163];
          $8 = HEAP32[264164];
          $0 = HEAP32[264166];
          $9 = $4 + 16 | 0;
          HEAP32[$9 >> 2] = HEAP32[264165];
          HEAP32[$9 + 4 >> 2] = $0;
          $0 = $4 + 8 | 0;
          HEAP32[$0 >> 2] = $7;
          HEAP32[$0 + 4 >> 2] = $8;
          HEAP32[264164] = $1;
          HEAP32[264163] = $2;
          HEAP32[264165] = $0;
          HEAP32[264166] = 0;
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
          $1 = HEAP32[264233];
          $2 = 1 << ($0 >>> 3);
          block72 : {
           if (!($1 & $2)) {
            HEAP32[264233] = $1 | $2;
            $0 = ($0 & 248) + 1056668 | 0;
            $1 = $0;
            break block72;
           }
           $0 = $0 & 248;
           $1 = $0 + 1056668 | 0;
           $0 = HEAP32[$0 + 1056676 >> 2];
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
         if (HEAP32[264238] == ($4 | 0)) {
          break block73
         }
         if (HEAP32[264237] == ($4 | 0)) {
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
         $1 = HEAP32[264233];
         $2 = 1 << ($5 >>> 3);
         block79 : {
          if (!($1 & $2)) {
           HEAP32[264233] = $1 | $2;
           $5 = ($5 & 248) + 1056668 | 0;
           $4 = $5;
           break block79;
          }
          $1 = $5 & 248;
          $4 = $1 + 1056668 | 0;
          $5 = HEAP32[$1 + 1056676 >> 2];
         }
         HEAP32[$4 + 8 >> 2] = $0;
         HEAP32[$5 + 12 >> 2] = $0;
         HEAP32[$0 + 12 >> 2] = $4;
         HEAP32[$0 + 8 >> 2] = $5;
         break block77;
        }
        HEAP32[$0 + 4 >> 2] = $1 + $6;
        $0 = HEAP32[264238];
        $2 = $0 + 15 & -8;
        $3 = $2 - 8 | 0;
        HEAP32[264238] = $3;
        $1 = HEAP32[264236] + $1 | 0;
        $2 = ($1 + ($0 - $2 | 0) | 0) + 8 | 0;
        HEAP32[264236] = $2;
        HEAP32[$3 + 4 >> 2] = $2 | 1;
        HEAP32[($0 + $1 | 0) + 4 >> 2] = 40;
        HEAP32[264241] = 2097152;
        break block63;
       }
       HEAP32[264238] = $0;
       $1 = HEAP32[264236] + $5 | 0;
       HEAP32[264236] = $1;
       HEAP32[$0 + 4 >> 2] = $1 | 1;
       break block77;
      }
      HEAP32[264237] = $0;
      $1 = HEAP32[264235] + $5 | 0;
      HEAP32[264235] = $1;
      HEAP32[$0 + 4 >> 2] = $1 | 1;
      HEAP32[$0 + $1 >> 2] = $1;
     }
     return $3 + 8 | 0;
    }
    $0 = 0;
    $1 = HEAP32[264236];
    if ($1 >>> 0 <= $5 >>> 0) {
     break block28
    }
    $1 = $1 - $5 | 0;
    HEAP32[264236] = $1;
    $0 = HEAP32[264238];
    $2 = $0 + $5 | 0;
    HEAP32[264238] = $2;
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
   HEAP8[1056976] = 1;
   wasm2js_trap();
  }
  _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow();
  wasm2js_trap();
 }
 
 function _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow() {
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1051556, 35, 1051576);
  wasm2js_trap();
 }
 
 function _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
  $2 = HEAP32[$0 + 372 >> 2];
  folding_inner1 : {
   folding_inner0 : {
    $4 = HEAP32[$0 + 376 >> 2];
    if ($4) {
     $3 = $2;
     while (1) {
      $6 = HEAP32[$3 + 56 >> 2];
      if ($6) {
       $7 = HEAP32[$3 + 60 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $1 = $5 & -8;
       $6 = $6 << 3;
       $5 = $5 & 3;
       if ($1 >>> 0 < $6 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $1 = HEAP32[$3 + 68 >> 2];
      if ($1) {
       $7 = HEAP32[$3 + 72 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $6 = $5 & -8;
       $5 = $5 & 3;
       if ($6 >>> 0 < $1 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $6 >>> 0 > $1 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$3 + 80 >> 2];
      if ($6) {
       $7 = HEAP32[$3 + 84 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $1 = $5 & -8;
       $6 = $6 << 2;
       $5 = $5 & 3;
       if ($1 >>> 0 < $6 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$3 + 92 >> 2];
      if ($6) {
       $7 = HEAP32[$3 + 96 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $1 = $5 & -8;
       $6 = $6 << 2;
       $5 = $5 & 3;
       if ($1 >>> 0 < $6 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$3 + 104 >> 2];
      if ($6) {
       $7 = HEAP32[$3 + 108 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $1 = $5 & -8;
       $6 = $6 << 3;
       $5 = $5 & 3;
       if ($1 >>> 0 < $6 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$3 + 116 >> 2];
      if ($6) {
       $7 = HEAP32[$3 + 120 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $1 = $5 & -8;
       $6 = $6 << 3;
       $5 = $5 & 3;
       if ($1 >>> 0 < $6 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$3 + 128 >> 2];
      if ($6) {
       $7 = HEAP32[$3 + 132 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $1 = $5 & -8;
       $6 = $6 << 3;
       $5 = $5 & 3;
       if ($1 >>> 0 < $6 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$3 + 140 >> 2];
      if ($6) {
       $7 = HEAP32[$3 + 144 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $1 = $5 & -8;
       $6 = $6 << 4;
       $5 = $5 & 3;
       if ($1 >>> 0 < ($6 | ($5 ? 4 : 8)) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $6 = HEAP32[$3 + 16 >> 2];
      if ($6) {
       $7 = HEAP32[$3 + 20 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $1 = $5 & -8;
       $6 = $6 << 2;
       $5 = $5 & 3;
       if ($1 >>> 0 < $6 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $1 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $3 = $3 + 176 | 0;
      $4 = $4 - 1 | 0;
      if ($4) {
       continue
      }
      break;
     };
    }
    $4 = HEAP32[$0 + 368 >> 2];
    if ($4) {
     $1 = HEAP32[$2 - 4 >> 2];
     $3 = $1 & -8;
     $4 = Math_imul($4, 176);
     $1 = $1 & 3;
     if ($3 >>> 0 < ($4 | ($1 ? 4 : 8)) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
    }
    $2 = HEAP32[$0 + 132 >> 2];
    $4 = HEAP32[$0 + 136 >> 2];
    if ($4) {
     $3 = $2;
     while (1) {
      $1 = HEAP32[$3 >> 2];
      block42 : {
       if (($1 | 0) == -1) {
        break block42
       }
       if (($1 | 0) <= 0) {
        break block42
       }
       $7 = HEAP32[$3 + 4 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $6 = $5 & -8;
       $1 = $1 << 3;
       $5 = $5 & 3;
       if ($6 >>> 0 < $1 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $6 >>> 0 > $1 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $3 = $3 - -64 | 0;
      $4 = $4 - 1 | 0;
      if ($4) {
       continue
      }
      break;
     };
    }
    $4 = HEAP32[$0 + 128 >> 2];
    if ($4) {
     $1 = HEAP32[$2 - 4 >> 2];
     $3 = $1 & -8;
     $4 = $4 << 6;
     $1 = $1 & 3;
     if ($3 >>> 0 < ($4 | ($1 ? 4 : 8)) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > ($4 | 39) >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
    }
    $2 = HEAP32[$0 + 140 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 144 >> 2];
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
    $2 = HEAP32[$0 + 152 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 156 >> 2];
     $1 = HEAP32[$4 - 4 >> 2];
     $3 = $1 & -8;
     $2 = Math_imul($2, 24);
     $1 = $1 & 3;
     if ($3 >>> 0 < $2 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $2 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
    }
    $2 = HEAP32[$0 + 380 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 384 >> 2];
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
    $2 = HEAP32[$0 + 392 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 396 >> 2];
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
    $2 = HEAP32[$0 + 404 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 408 >> 2];
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
    $2 = HEAP32[$0 + 416 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 420 >> 2];
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
    $2 = HEAP32[$0 + 272 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 276 >> 2];
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
    $2 = HEAP32[$0 + 284 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 288 >> 2];
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
    $2 = HEAP32[$0 + 296 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 300 >> 2];
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
    $2 = HEAP32[$0 + 428 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 432 >> 2];
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
    $2 = HEAP32[$0 + 440 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 444 >> 2];
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
    $2 = HEAP32[$0 + 456 >> 2];
    $4 = HEAP32[$0 + 460 >> 2];
    if ($4) {
     $3 = $2;
     while (1) {
      $1 = HEAP32[$3 >> 2];
      if ($1) {
       $7 = HEAP32[$3 + 4 >> 2];
       $5 = HEAP32[$7 - 4 >> 2];
       $6 = $5 & -8;
       $5 = $5 & 3;
       if ($6 >>> 0 < $1 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner0
       }
       if (($5 | 0) != 0 & $6 >>> 0 > $1 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      $3 = $3 + 12 | 0;
      $4 = $4 - 1 | 0;
      if ($4) {
       continue
      }
      break;
     };
    }
    $4 = HEAP32[$0 + 452 >> 2];
    if ($4) {
     $1 = HEAP32[$2 - 4 >> 2];
     $3 = $1 & -8;
     $4 = Math_imul($4, 12);
     $1 = $1 & 3;
     if ($3 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 > $4 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
    }
    $3 = HEAP32[$0 + 464 >> 2];
    if ($3) {
     $2 = HEAP32[$0 + 468 >> 2];
     $4 = HEAP32[$2 - 4 >> 2];
     $0 = $4 & -8;
     $3 = $3 << 3;
     $4 = $4 & 3;
     if ($0 >>> 0 < $3 + ($4 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($4 | 0) != 0 & $0 >>> 0 > $3 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
    }
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
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
    if (($1 | 0) == HEAP32[264237]) {
     if ((HEAP32[$2 + 4 >> 2] & 3) != 3) {
      break block
     }
     HEAP32[264235] = $0;
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
           if (($2 | 0) == HEAP32[264238]) {
            break block4
           }
           if (($2 | 0) == HEAP32[264237]) {
            break block5
           }
           $4 = $2;
           $2 = $3 & -8;
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($4, $2);
           $0 = $0 + $2 | 0;
           HEAP32[$1 + 4 >> 2] = $0 | 1;
           HEAP32[$0 + $1 >> 2] = $0;
           if (HEAP32[264237] != ($1 | 0)) {
            break block6
           }
           HEAP32[264235] = $0;
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
        HEAP32[264238] = $1;
        $0 = HEAP32[264236] + $0 | 0;
        HEAP32[264236] = $0;
        HEAP32[$1 + 4 >> 2] = $0 | 1;
        if (($1 | 0) == HEAP32[264237]) {
         HEAP32[264235] = 0;
         HEAP32[264237] = 0;
        }
        $2 = HEAP32[264241];
        if ($2 >>> 0 >= $0 >>> 0) {
         break block1
        }
        $0 = HEAP32[264238];
        if (!$0) {
         break block1
        }
        $3 = HEAP32[264236];
        if ($3 >>> 0 < 41) {
         break block11
        }
        $1 = 1056652;
        while (1) {
         $4 = HEAP32[$1 >> 2];
         if ($0 >>> 0 >= $4 >>> 0 & $0 >>> 0 < $4 + HEAP32[$1 + 4 >> 2] >>> 0) {
          break block11
         }
         $1 = HEAP32[$1 + 8 >> 2];
         continue;
        };
       }
       HEAP32[264237] = $1;
       $0 = HEAP32[264235] + $0 | 0;
       HEAP32[264235] = $0;
       HEAP32[$1 + 4 >> 2] = $0 | 1;
       HEAP32[$0 + $1 >> 2] = $0;
       return;
      }
      $2 = HEAP32[264233];
      $3 = 1 << ($0 >>> 3);
      block14 : {
       if (!($2 & $3)) {
        HEAP32[264233] = $2 | $3;
        $0 = ($0 & 248) + 1056668 | 0;
        $2 = $0;
        break block14;
       }
       $0 = $0 & 248;
       $2 = $0 + 1056668 | 0;
       $0 = HEAP32[$0 + 1056676 >> 2];
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
    $0 = HEAP32[264165];
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
    HEAP32[264243] = $0;
    if ($2 >>> 0 >= $3 >>> 0) {
     break block1
    }
    HEAP32[264241] = -1;
    break block1;
   }
   HEAP32[$1 + 16 >> 2] = 0;
   HEAP32[$1 + 20 >> 2] = 0;
   HEAP32[$1 + 28 >> 2] = $2;
   $3 = ($2 << 2) + 1056524 | 0;
   $4 = 1 << $2;
   block18 : {
    if (!($4 & HEAP32[264234])) {
     HEAP32[$3 >> 2] = $1;
     HEAP32[$1 + 24 >> 2] = $3;
     HEAP32[$1 + 12 >> 2] = $1;
     HEAP32[$1 + 8 >> 2] = $1;
     HEAP32[264234] = $4 | HEAP32[264234];
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
   $0 = HEAP32[264243] - 1 | 0;
   HEAP32[264243] = $0;
   if ($0) {
    break block1
   }
   $0 = HEAP32[264165];
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
   HEAP32[264243] = $0;
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
         if (($4 | 0) == HEAP32[264238]) {
          break block6
         }
         if (HEAP32[264237] != ($4 | 0)) {
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
         $3 = $3 + HEAP32[264235] | 0;
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
         HEAP32[264237] = $1;
         HEAP32[264235] = $4;
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
       $3 = $3 + HEAP32[264236] | 0;
       if ($3 >>> 0 > $1 >>> 0) {
        break block12
       }
       break block4;
      }
      _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
     wasm2js_trap();
    }
    HEAP32[$7 >> 2] = $1 | $5 & 1 | 2;
    $4 = $1 + $6 | 0;
    $1 = $3 - $1 | 0;
    HEAP32[$4 + 4 >> 2] = $1 | 1;
    HEAP32[264236] = $1;
    HEAP32[264238] = $4;
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
   return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, 1054374, 5) | 0
  }
  return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, 1054379, 4) | 0;
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
    $7 = HEAPU8[$7 + 1052066 | 0] | HEAPU8[$7 + 1052067 | 0] << 8;
    HEAP8[$4 | 0] = $7;
    HEAP8[$4 + 1 | 0] = $7 >>> 8;
    $2 = $2 - 2 | 0;
    $4 = ($9 - Math_imul($10, 100) & 65535) << 1;
    $4 = HEAPU8[$4 + 1052066 | 0] | HEAPU8[$4 + 1052067 | 0] << 8;
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
   $2 = HEAPU8[$2 + 1052066 | 0] | HEAPU8[$2 + 1052067 | 0] << 8;
   HEAP8[$6 | 0] = $2;
   HEAP8[$6 + 1 | 0] = $2 >>> 8;
  }
  if (!(!$0 & ($8 | 0) != 0)) {
   $3 = $3 - 1 | 0;
   HEAP8[$3 + ($5 + 6 | 0) | 0] = HEAPU8[($0 << 1) + 1052067 | 0];
  }
  $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1, 0, ($5 + 6 | 0) + $3 | 0, 10 - $3 | 0);
  __stack_pointer = $5 + 16 | 0;
  return $0 | 0;
 }
 
 function _RNvXs1i_NtCsedhpoW0refZ_4core3fmtRyNtB6_7Display3fmtCshn2Zjkdzlh4_14raftscope_wasm($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return _RNvXsd_NtNtNtCsedhpoW0refZ_4core3fmt3num3impyNtB9_7Display3fmt(HEAP32[$0 >> 2], $1) | 0;
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
    $8 = HEAPU8[$8 + 1052066 | 0] | HEAPU8[$8 + 1052067 | 0] << 8;
    HEAP8[$5 | 0] = $8;
    HEAP8[$5 + 1 | 0] = $8 >>> 8;
    $7 = $7 - 2 | 0;
    $5 = ($11 - Math_imul($12, 100) & 65535) << 1;
    $5 = HEAPU8[$5 + 1052066 | 0] | HEAPU8[$5 + 1052067 | 0] << 8;
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
   $4 = HEAPU8[$4 + 1052066 | 0] | HEAPU8[$4 + 1052067 | 0] << 8;
   HEAP8[$2 | 0] = $4;
   HEAP8[$2 + 1 | 0] = $4 >>> 8;
   $2 = 0;
  }
  if (!(!($0 | $2) & ($13 | $9) != 0)) {
   $3 = $3 - 1 | 0;
   HEAP8[$3 + ($6 + 12 | 0) | 0] = HEAPU8[($0 << 1) + 1052067 | 0];
  }
  $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1, 0, ($6 + 12 | 0) + $3 | 0, 20 - $3 | 0);
  __stack_pointer = $6 + 32 | 0;
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
  return HEAP32[$0 + 532 >> 2];
 }
 
 function rs_free($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
  folding_inner1 : {
   folding_inner0 : {
    if ($0) {
     _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($0);
     $4 = HEAP32[$0 + 496 >> 2];
     if ($4) {
      $2 = HEAP32[$0 + 500 >> 2];
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
     $3 = HEAP32[$0 + 512 >> 2];
     $2 = HEAP32[$0 + 516 >> 2];
     if ($2) {
      $1 = $3;
      while (1) {
       _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($1);
       $1 = $1 + 488 | 0;
       $2 = $2 - 1 | 0;
       if ($2) {
        continue
       }
       break;
      };
     }
     $4 = HEAP32[$0 + 508 >> 2];
     if ($4) {
      $1 = HEAP32[$3 - 4 >> 2];
      $5 = $1 & -8;
      $2 = $1 & 3;
      $1 = Math_imul($4, 488);
      if ($5 >>> 0 < ($2 ? 4 : 8) + $1 >>> 0) {
       break folding_inner0
      }
      if (($2 | 0) != 0 & $5 >>> 0 > $1 + 39 >>> 0) {
       break folding_inner1
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
     }
     $4 = HEAP32[$0 + 528 >> 2];
     if ($4) {
      $2 = HEAP32[$0 + 532 >> 2];
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
     $4 = HEAP32[$0 + 540 >> 2];
     if ($4) {
      $3 = HEAP32[$0 + 544 >> 2];
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
     $4 = HEAP32[$0 + 556 >> 2];
     if ($4) {
      $3 = HEAP32[$0 + 560 >> 2];
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
     if (($3 & -8) >>> 0 < ($1 ? 572 : 576) >>> 0) {
      break folding_inner0
     }
     if (($1 | 0) != 0 & $3 >>> 0 >= 608) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($0);
    }
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
  wasm2js_trap();
 }
 
 function rs_horizon($0) {
  $0 = $0 | 0;
  return +(+HEAPU32[$0 + 488 >> 2] + +HEAPU32[$0 + 492 >> 2] * 4294967296.0);
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
  $4 = $1 >= 0.0;
  block1 : {
   if ($4 & $1 < 18446744073709551615.0) {
    $3 = ~~$1 >>> 0;
    if (Math_abs($1) >= 1.0) {
     if ($1 > 0.0) {
      $8 = Math_min(Math_floor($1 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $8 = Math_ceil(($1 - +(~~$1 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $5 = ~~$8 >>> 0;
    } else {
     $5 = 0
    }
    break block1;
   }
   $5 = 0;
  }
  block2 : {
   $6 = HEAP32[$0 + 136 >> 2];
   if (!$6) {
    break block2
   }
   $7 = $1 > 18446744073709549568.0;
   $3 = $7 ? -1 : $4 ? $3 : 0;
   $7 = $7 ? -1 : $4 ? $5 : 0;
   $4 = $6 << 6;
   $5 = HEAP32[$0 + 132 >> 2];
   while (1) {
    block4 : {
     $6 = HEAP32[$5 >> 2];
     if (($6 | 0) != -1) {
      $9 = $5 + 24 | 0;
      if (($3 | 0) == HEAP32[$9 >> 2] & ($7 | 0) == HEAP32[$9 + 4 >> 2]) {
       break block4
      }
     }
     $5 = $5 - -64 | 0;
     $4 = $4 + -64 | 0;
     if ($4) {
      continue
     }
     break block2;
    }
    break;
   };
   block11 : {
    block5 : {
     switch ((($6 | 0) >= 0 ? 2 : $6 ^ -2147483648) - 1 | 0) {
     case 3:
      $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(14);
      if ($3) {
       $4 = HEAPU8[1051451] | HEAPU8[1051452] << 8 | (HEAPU8[1051453] << 16 | HEAPU8[1051454] << 24);
       $6 = HEAPU8[1051447] | HEAPU8[1051448] << 8 | (HEAPU8[1051449] << 16 | HEAPU8[1051450] << 24);
       HEAP8[$3 + 6 | 0] = $6;
       HEAP8[$3 + 7 | 0] = $6 >>> 8;
       HEAP8[$3 + 8 | 0] = $6 >>> 16;
       HEAP8[$3 + 9 | 0] = $6 >>> 24;
       HEAP8[$3 + 10 | 0] = $4;
       HEAP8[$3 + 11 | 0] = $4 >>> 8;
       HEAP8[$3 + 12 | 0] = $4 >>> 16;
       HEAP8[$3 + 13 | 0] = $4 >>> 24;
       $4 = HEAPU8[1051445] | HEAPU8[1051446] << 8 | (HEAPU8[1051447] << 16 | HEAPU8[1051448] << 24);
       $6 = HEAPU8[1051441] | HEAPU8[1051442] << 8 | (HEAPU8[1051443] << 16 | HEAPU8[1051444] << 24);
       HEAP8[$3 | 0] = $6;
       HEAP8[$3 + 1 | 0] = $6 >>> 8;
       HEAP8[$3 + 2 | 0] = $6 >>> 16;
       HEAP8[$3 + 3 | 0] = $6 >>> 24;
       HEAP8[$3 + 4 | 0] = $4;
       HEAP8[$3 + 5 | 0] = $4 >>> 8;
       HEAP8[$3 + 6 | 0] = $4 >>> 16;
       HEAP8[$3 + 7 | 0] = $4 >>> 24;
       HEAP32[$2 + 52 >> 2] = 14;
       HEAP32[$2 + 48 >> 2] = $3;
       HEAP32[$2 + 44 >> 2] = 14;
       $4 = 10;
       $3 = 1051455;
       break block11;
      }
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
      wasm2js_trap();
     case 2:
      HEAP32[$2 + 16 >> 2] = $5 + 8;
      HEAP32[$2 + 24 >> 2] = $5 + 4;
      HEAP32[$2 + 64 >> 2] = $2 + 24;
      HEAP32[$2 + 68 >> 2] = 1;
      HEAP32[$2 + 56 >> 2] = $2 + 16;
      HEAP32[$2 + 60 >> 2] = 2;
      _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($2 + 44 | 0, 1048668, $2 + 56 | 0);
      $4 = 19;
      $3 = 1051422;
      break block11;
     case 1:
      HEAP32[$2 + 36 >> 2] = $5 + 12;
      HEAP32[$2 + 40 >> 2] = $5 + 16;
      HEAP32[$2 + 16 >> 2] = $5 + 20;
      HEAP32[$2 + 24 >> 2] = HEAP32[$5 + 8 >> 2];
      HEAP32[$2 + 80 >> 2] = $2 + 16;
      $3 = 1;
      HEAP32[$2 + 84 >> 2] = $3;
      HEAP32[$2 + 72 >> 2] = $2 + 24;
      HEAP32[$2 + 76 >> 2] = 3;
      HEAP32[$2 + 64 >> 2] = $2 + 40;
      HEAP32[$2 + 68 >> 2] = 1;
      HEAP32[$2 + 56 >> 2] = $2 + 36;
      HEAP32[$2 + 60 >> 2] = 1;
      _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($2 + 44 | 0, 1048609, $2 + 56 | 0);
      $4 = 13;
      $3 = 1051409;
      break block11;
     case 0:
      HEAP32[$2 + 24 >> 2] = $5 + 4;
      HEAP32[$2 + 56 >> 2] = $2 + 24;
      HEAP32[$2 + 60 >> 2] = 2;
      _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($2 + 44 | 0, 1048866, $2 + 56 | 0);
      $4 = 17;
      $3 = 1051392;
      break block11;
     default:
      break block5;
     };
    }
    HEAP32[$2 + 16 >> 2] = $5 + 4;
    HEAP32[$2 + 24 >> 2] = $5 + 8;
    HEAP32[$2 + 64 >> 2] = $2 + 24;
    $6 = 1;
    HEAP32[$2 + 68 >> 2] = $6;
    HEAP32[$2 + 56 >> 2] = $2 + 16;
    HEAP32[$2 + 60 >> 2] = 1;
    _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($2 + 44 | 0, 1048697, $2 + 56 | 0);
    $4 = 11;
    $3 = 1051381;
   }
   HEAP32[$2 + 20 >> 2] = $4;
   HEAP32[$2 + 16 >> 2] = $3;
   HEAP32[$2 + 32 >> 2] = HEAP32[$2 + 52 >> 2];
   $3 = HEAP32[$2 + 48 >> 2];
   HEAP32[$2 + 24 >> 2] = HEAP32[$2 + 44 >> 2];
   HEAP32[$2 + 28 >> 2] = $3;
   HEAP32[$2 + 120 >> 2] = $2 + 24;
   HEAP32[$2 + 124 >> 2] = 4;
   HEAP32[$2 + 112 >> 2] = $5 + 60;
   HEAP32[$2 + 116 >> 2] = 5;
   HEAP32[$2 + 104 >> 2] = $5 + 40;
   $4 = 6;
   HEAP32[$2 + 108 >> 2] = $4;
   HEAP32[$2 + 96 >> 2] = $5 + 32;
   HEAP32[$2 + 100 >> 2] = 6;
   HEAP32[$2 + 88 >> 2] = $5 + 56;
   $3 = 3;
   HEAP32[$2 + 92 >> 2] = $3;
   HEAP32[$2 + 80 >> 2] = $5 + 52;
   HEAP32[$2 + 84 >> 2] = 3;
   HEAP32[$2 + 72 >> 2] = $5 + 48;
   HEAP32[$2 + 76 >> 2] = 3;
   HEAP32[$2 + 64 >> 2] = $2 + 16;
   HEAP32[$2 + 68 >> 2] = 7;
   HEAP32[$2 + 56 >> 2] = $5 + 24;
   HEAP32[$2 + 60 >> 2] = 6;
   _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 4 | 0, 1048576, 1049382, $2 + 56 | 0);
   $3 = HEAP32[$2 + 24 >> 2];
   if (!$3) {
    break block2
   }
   $5 = HEAP32[$2 + 28 >> 2];
   $6 = HEAP32[$5 - 4 >> 2];
   $4 = $6 & -8;
   block14 : {
    $6 = $6 & 3;
    if ($3 + ($6 ? 4 : 8) >>> 0 <= $4 >>> 0) {
     if (($6 | 0) != 0 & $4 >>> 0 > $3 + 39 >>> 0) {
      break block14
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
     break block2;
    }
    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
   wasm2js_trap();
  }
  HEAP32[$2 + 64 >> 2] = HEAP32[$2 + 12 >> 2];
  $3 = HEAP32[$2 + 8 >> 2];
  HEAP32[$2 + 56 >> 2] = HEAP32[$2 + 4 >> 2];
  HEAP32[$2 + 60 >> 2] = $3;
  block18 : {
   block16 : {
    $3 = HEAP32[$0 + 556 >> 2];
    if ($3) {
     $5 = HEAP32[$0 + 560 >> 2];
     $6 = HEAP32[$5 - 4 >> 2];
     $4 = $6 & -8;
     $6 = $6 & 3;
     if ($4 >>> 0 < $3 + ($6 ? 4 : 8) >>> 0) {
      break block16
     }
     if (($6 | 0) != 0 & $4 >>> 0 > $3 + 39 >>> 0) {
      break block18
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $3 = $0 + 556 | 0;
    HEAP32[$3 + 8 >> 2] = HEAP32[$2 + 64 >> 2];
    $4 = HEAP32[$2 + 60 >> 2];
    HEAP32[$3 >> 2] = HEAP32[$2 + 56 >> 2];
    HEAP32[$3 + 4 >> 2] = $4;
    __stack_pointer = $2 + 128 | 0;
    return HEAP32[$0 + 564 >> 2];
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
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
    if (_RNvNtCsedhpoW0refZ_4core3fmt5write($4, 1051720, $1, $2)) {
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
  HEAP32[$0 >> 2] = 1051608;
  HEAP32[$0 + 12 >> 2] = 1051592;
  HEAP32[$0 + 8 >> 2] = $4 + 15;
  HEAP32[$0 + 24 >> 2] = $0 + 8;
  HEAP32[$0 + 28 >> 2] = 11;
  HEAP32[$0 + 16 >> 2] = $0;
  HEAP32[$0 + 20 >> 2] = 7;
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049320, $0 + 16 | 0, 1051696);
  wasm2js_trap();
 }
 
 function _RNvXsg_NtCsedhpoW0refZ_4core3fmtbNtB5_7Display3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if (!HEAPU8[$0 | 0]) {
   return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, 1054374, 5) | 0
  }
  return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, 1054379, 4) | 0;
 }
 
 function _RNvXs1i_NtCsedhpoW0refZ_4core3fmtReNtB6_7Display3fmtB8_($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter3pad($1, HEAP32[$0 >> 2], HEAP32[$0 + 4 >> 2]) | 0;
 }
 
 function rs_new($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
  $0 = $0 | 0;
  $1 = +$1;
  $2 = +$2;
  $3 = +$3;
  $4 = +$4;
  $5 = +$5;
  $6 = $6 | 0;
  $7 = +$7;
  $8 = $8 | 0;
  $9 = +$9;
  $10 = +$10;
  var $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0.0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $11 = __stack_pointer - 976 | 0;
  __stack_pointer = $11;
  $15 = $3 >= 0.0;
  block1 : {
   if ($15 & $3 < 18446744073709551615.0) {
    $16 = ~~$3 >>> 0;
    if (Math_abs($3) >= 1.0) {
     if ($3 > 0.0) {
      $22 = Math_min(Math_floor($3 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $22 = Math_ceil(($3 - +(~~$3 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $19 = ~~$22 >>> 0;
    } else {
     $19 = 0
    }
    break block1;
   }
   $19 = 0;
  }
  if (($8 | 0) == 1) {
   $14 = $9 >= 0.0;
   block4 : {
    if ($14 & $9 < 18446744073709551615.0) {
     $8 = ~~$9 >>> 0;
     if (Math_abs($9) >= 1.0) {
      if ($9 > 0.0) {
       $22 = Math_min(Math_floor($9 * 2.3283064365386963e-10), 4294967295.0)
      } else {
       $22 = Math_ceil(($9 - +(~~$9 >>> 0 >>> 0)) * 2.3283064365386963e-10)
      }
      $17 = ~~$22 >>> 0;
     } else {
      $17 = 0
     }
     break block4;
    }
    $8 = 0;
    $17 = 0;
   }
   $20 = $14 ? $8 : 0;
   $8 = $9 > 18446744073709549568.0;
   $20 = $8 ? -1 : $20;
   $8 = $8 ? -1 : $14 ? $17 : 0;
   $14 = !$8 & $20 >>> 0 > 1 | ($8 | 0) != 0;
   $39 = $14 ? $20 : 1;
   $40 = 1;
   $41 = $14 ? $8 : 0;
  }
  $8 = $3 > 18446744073709549568.0;
  $14 = $8 ? -1 : $15 ? $16 : 0;
  $8 = $8 ? -1 : $15 ? $19 : 0;
  $3 = $10 != $10 ? 0.0 : $10;
  $3 = $3 > 0.0 ? $3 : 0.0;
  $12 = $3 >= 0.0;
  block6 : {
   if ($12 & $3 < 18446744073709551615.0) {
    $25 = ~~$3 >>> 0;
    if (Math_abs($3) >= 1.0) {
     if ($3 > 0.0) {
      $9 = Math_min(Math_floor($3 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $9 = Math_ceil(($3 - +(~~$3 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $16 = ~~$9 >>> 0;
    } else {
     $16 = 0
    }
    break block6;
   }
   $16 = 0;
  }
  $26 = $16;
  $15 = !$8 & $14 >>> 0 > 1 | ($8 | 0) != 0;
  $16 = $4 >= 0.0;
  block8 : {
   if ($16 & $4 < 18446744073709551615.0) {
    $18 = ~~$4 >>> 0;
    if (Math_abs($4) >= 1.0) {
     if ($4 > 0.0) {
      $9 = Math_min(Math_floor($4 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $9 = Math_ceil(($4 - +(~~$4 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $19 = ~~$9 >>> 0;
    } else {
     $19 = 0
    }
    break block8;
   }
   $19 = 0;
  }
  $23 = $15 ? $14 : 1;
  $32 = $15 ? $8 : 0;
  $15 = $4 > 18446744073709549568.0;
  $18 = $15 ? -1 : $16 ? $18 : 0;
  $17 = $18;
  $15 = $15 ? -1 : $16 ? $19 : 0;
  $18 = ($15 | 0) == ($8 | 0) & $14 >>> 0 > $18 >>> 0 | $8 >>> 0 > $15 >>> 0;
  $14 = $18 ? $14 : $17;
  $8 = $18 ? $8 : $15;
  $15 = !$8 & $14 >>> 0 > 1 | ($8 | 0) != 0;
  block10 : {
   if ($2 < 18446744073709551615.0 & $2 >= 0.0) {
    $16 = ~~$2 >>> 0;
    if (Math_abs($2) >= 1.0) {
     if ($2 > 0.0) {
      $4 = Math_min(Math_floor($2 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $4 = Math_ceil(($2 - +(~~$2 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $19 = ~~$4 >>> 0;
    } else {
     $19 = 0
    }
    break block10;
   }
   $16 = 0;
   $19 = 0;
  }
  $20 = $19;
  $33 = $15 ? $14 : 1;
  $19 = $15 ? $8 : 0;
  $8 = $32 - 1 | 0;
  $14 = $23 - 1 | 0;
  $8 = ($14 | 0) != -1 ? $8 + 1 | 0 : $8;
  block12 : {
   if ($5 < 18446744073709551615.0 & $5 >= 0.0) {
    $13 = ~~$5 >>> 0;
    if (Math_abs($5) >= 1.0) {
     if ($5 > 0.0) {
      $4 = Math_min(Math_floor($5 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $4 = Math_ceil(($5 - +(~~$5 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $17 = ~~$4 >>> 0;
    } else {
     $17 = 0
    }
    break block12;
   }
   $17 = 0;
  }
  $24 = $17;
  $8 = ($8 | 0) == ($19 | 0) & $14 >>> 0 < $33 >>> 0 | $8 >>> 0 < $19 >>> 0;
  block14 : {
   if ($1 < 18446744073709551615.0 & $1 >= 0.0) {
    $18 = ~~$1 >>> 0;
    if (Math_abs($1) >= 1.0) {
     if ($1 > 0.0) {
      $4 = Math_min(Math_floor($1 * 2.3283064365386963e-10), 4294967295.0)
     } else {
      $4 = Math_ceil(($1 - +(~~$1 >>> 0 >>> 0)) * 2.3283064365386963e-10)
     }
     $17 = ~~$4 >>> 0;
    } else {
     $17 = 0
    }
    break block14;
   }
   $18 = 0;
   $17 = 0;
  }
  $27 = $17;
  block26 : {
   block25 : {
    block24 : {
     block21 : {
      block19 : {
       block18 : {
        block16 : {
         if ($8) {
          if ($0 >>> 0 >= 12201612) {
           break block16
          }
          $15 = 0;
          $17 = 8;
          $14 = $0 >>> 0 <= 1 ? 1 : $0;
          $8 = Math_imul($14, 176);
          if ($8) {
           $17 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($8);
           if (!$17) {
            break block18
           }
           $15 = $14;
          }
          $8 = $2 >= 0.0;
          $21 = $8 ? $16 : 0;
          $16 = $2 > 18446744073709549568.0;
          $21 = $16 ? -1 : $21;
          $28 = $16 ? -1 : $8 ? $20 : 0;
          $34 = !$28 & $21 >>> 0 > 1 | ($28 | 0) != 0;
          $42 = $34 ? $21 : 1;
          $8 = $5 >= 0.0;
          $16 = $8 ? $13 : 0;
          $13 = $5 > 18446744073709549568.0;
          $16 = $13 ? -1 : $16;
          $24 = $13 ? -1 : $8 ? $24 : 0;
          $35 = !$24 & $16 >>> 0 > 1 | ($24 | 0) != 0;
          $43 = $35 ? $16 : 1;
          $44 = $6 >>> 0 <= 1 ? 1 : $6;
          $6 = $1 >= 0.0;
          $8 = $1 > 18446744073709549568.0;
          $18 = $8 ? -1 : $6 ? $18 : 0;
          $6 = $8 ? -1 : $6 ? $27 : 0;
          $16 = $6;
          $6 = $6 + 2027808485 | 0;
          $13 = $6 + 1 | 0;
          $8 = $6;
          $6 = $18 - 47583148 | 0;
          $8 = $6 >>> 0 < 4247384148 ? $13 : $8;
          $13 = $8 >>> 30 | 0;
          $6 = __wasm_i64_mul($6 ^ (($8 & 1073741823) << 2 | $6 >>> 30), $8 ^ $13, 484763065, -1084733587);
          $8 = i64toi32_i32$HIGH_BITS;
          $13 = $8 >>> 27 | 0;
          $27 = __wasm_i64_mul($6 ^ (($8 & 134217727) << 5 | $6 >>> 27), $8 ^ $13, 321982955, -1798288965);
          $21 = i64toi32_i32$HIGH_BITS;
          $45 = $21 >>> 31 | 0;
          $6 = $16 - 626627284 | 0;
          $13 = $6 + 1 | 0;
          $8 = $6;
          $6 = $18 + 2111796287 | 0;
          $8 = $6 >>> 0 < 2111796287 ? $13 : $8;
          $13 = $8 >>> 30 | 0;
          $6 = __wasm_i64_mul($6 ^ (($8 & 1073741823) << 2 | $6 >>> 30), $8 ^ $13, 484763065, -1084733587);
          $8 = i64toi32_i32$HIGH_BITS;
          $13 = $8 >>> 27 | 0;
          $36 = __wasm_i64_mul($6 ^ (($8 & 134217727) << 5 | $6 >>> 27), $8 ^ $13, 321982955, -1798288965);
          $29 = i64toi32_i32$HIGH_BITS;
          $46 = $29 >>> 31 | 0;
          $6 = $16 + 1013904242 | 0;
          $13 = $6 + 1 | 0;
          $8 = $6;
          $6 = $18 - 23791574 | 0;
          $8 = $6 >>> 0 < 4271175722 ? $13 : $8;
          $6 = __wasm_i64_mul((($8 & 1073741823) << 2 | $6 >>> 30) ^ $6, $8 ^ $8 >>> 30, 484763065, -1084733587);
          $8 = i64toi32_i32$HIGH_BITS;
          $13 = $8 >>> 27 | 0;
          $37 = __wasm_i64_mul($6 ^ (($8 & 134217727) << 5 | $6 >>> 27), $8 ^ $13, 321982955, -1798288965);
          $30 = i64toi32_i32$HIGH_BITS;
          $47 = $30 >>> 31 | 0;
          $6 = $16 - 1640531527 | 0;
          $13 = $6 + 1 | 0;
          $8 = $6;
          $6 = $18 + 2135587861 | 0;
          $8 = $6 >>> 0 < 2135587861 ? $13 : $8;
          $13 = $8 >>> 30 | 0;
          $6 = __wasm_i64_mul($6 ^ (($8 & 1073741823) << 2 | $6 >>> 30), $8 ^ $13, 484763065, -1084733587);
          $8 = i64toi32_i32$HIGH_BITS;
          $13 = $8 >>> 27 | 0;
          $38 = __wasm_i64_mul($6 ^ (($8 & 134217727) << 5 | $6 >>> 27), $8 ^ $13, 321982955, -1798288965);
          $31 = i64toi32_i32$HIGH_BITS;
          $48 = $31 >>> 31 | 0;
          $6 = $3 > 18446744073709549568.0;
          $20 = $6 ? -1 : $12 ? $25 : 0;
          $6 = $6 ? -1 : $12 ? $26 : 0;
          $25 = $6;
          $26 = !($6 | $20);
          $49 = $26 ? -1 : $20;
          $13 = 0;
          $6 = 0;
          while (1) {
           $8 = $13 + $17 | 0;
           HEAP32[$8 >> 2] = 0;
           $12 = $8 + 24 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 16 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 4;
           HEAP32[$8 + 8 >> 2] = 0;
           $12 = $8 + 32 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 40 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 0;
           HEAP32[$8 + 156 >> 2] = 1;
           HEAP32[$8 + 152 >> 2] = $6;
           $12 = $8 + 144 | 0;
           HEAP32[$12 >> 2] = 8;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 136 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 128 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 8;
           $12 = $8 + 120 | 0;
           HEAP32[$12 >> 2] = 8;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 112 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 104 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 8;
           $12 = $8 + 96 | 0;
           HEAP32[$12 >> 2] = 4;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 88 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 80 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 4;
           $12 = $8 + 72 | 0;
           HEAP32[$12 >> 2] = 1;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 - -64 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 0;
           $12 = $8 + 56 | 0;
           HEAP32[$12 >> 2] = 0;
           HEAP32[$12 + 4 >> 2] = 4;
           $12 = $8 + 48 | 0;
           HEAP32[$12 >> 2] = -1;
           HEAP32[$12 + 4 >> 2] = -1;
           $12 = $8 + 166 | 0;
           HEAP16[$12 >> 1] = 0;
           HEAP16[$12 + 2 >> 1] = 0;
           HEAP16[$12 + 4 >> 1] = 0;
           HEAP16[$12 + 6 >> 1] = 0;
           $8 = $8 + 160 | 0;
           HEAP32[$8 >> 2] = 0;
           HEAP32[$8 + 4 >> 2] = 0;
           $13 = $13 + 176 | 0;
           $6 = $6 + 1 | 0;
           if (($14 | 0) != ($6 | 0)) {
            continue
           }
           break;
          };
          $8 = $14 << 3;
          $6 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($8);
          if (!$6) {
           break block19
          }
          $13 = $6;
          if ($0 >>> 0 >= 2) {
           $0 = $8 - 8 | 0;
           $13 = memset($6, 255, $0) + $0 | 0;
          }
          HEAP32[$13 >> 2] = -1;
          HEAP32[$13 + 4 >> 2] = -1;
          $8 = $14 << 4;
          $0 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($8);
          if (!$0) {
           break block21
          }
          $1 = $7 < 0.0 ? 0.0 : $7;
          $1 = $1 > 1.0 ? 1.0 : $1;
          if (HEAPU8[$0 - 4 | 0] & 3) {
           memset($0, 0, $8)
          }
          HEAP32[$11 + 872 >> 2] = $14;
          HEAP32[$11 + 868 >> 2] = $17;
          HEAP32[$11 + 864 >> 2] = $15;
          HEAP32[$11 + 808 >> 2] = 0;
          HEAP32[$11 + 812 >> 2] = 0;
          HEAP32[$11 + 572 >> 2] = $44;
          HEAP32[$11 + 568 >> 2] = $14;
          HEAP32[$11 + 560 >> 2] = $20;
          HEAP32[$11 + 564 >> 2] = $25;
          HEAP32[$11 + 552 >> 2] = $18;
          HEAP32[$11 + 556 >> 2] = $16;
          HEAPF64[$11 + 544 >> 3] = $1;
          HEAP32[$11 + 536 >> 2] = $43;
          HEAP32[$11 + 540 >> 2] = $35 ? $24 : 0;
          HEAP32[$11 + 528 >> 2] = $33;
          HEAP32[$11 + 532 >> 2] = $19;
          HEAP32[$11 + 520 >> 2] = $23;
          HEAP32[$11 + 524 >> 2] = $32;
          HEAP32[$11 + 512 >> 2] = $42;
          HEAP32[$11 + 516 >> 2] = $34 ? $28 : 0;
          HEAP32[$11 + 504 >> 2] = $39;
          HEAP32[$11 + 508 >> 2] = $41;
          HEAP32[$11 + 496 >> 2] = $40;
          HEAP32[$11 + 500 >> 2] = 0;
          HEAP32[$11 + 896 >> 2] = $14;
          HEAP32[$11 + 892 >> 2] = $6;
          HEAP32[$11 + 888 >> 2] = $14;
          $8 = 0;
          HEAP32[$11 + 884 >> 2] = 0;
          HEAP32[$11 + 876 >> 2] = 0;
          HEAP32[$11 + 880 >> 2] = 8;
          HEAP32[$11 + 656 >> 2] = 0;
          HEAP32[$11 + 660 >> 2] = 0;
          HEAP32[$11 + 648 >> 2] = 0;
          HEAP32[$11 + 652 >> 2] = 8;
          HEAP32[$11 + 640 >> 2] = 4;
          HEAP32[$11 + 644 >> 2] = 0;
          HEAP32[$11 + 632 >> 2] = 0;
          HEAP32[$11 + 636 >> 2] = 0;
          HEAP32[$11 + 624 >> 2] = 0;
          HEAP32[$11 + 628 >> 2] = 8;
          HEAP32[$11 + 972 >> 2] = 1;
          HEAP32[$11 + 848 >> 2] = 0;
          HEAP32[$11 + 852 >> 2] = 0;
          HEAP32[$11 + 840 >> 2] = $27 ^ (($21 & 2147483647) << 1 | $27 >>> 31);
          HEAP32[$11 + 844 >> 2] = $21 ^ $45;
          HEAP32[$11 + 832 >> 2] = $36 ^ (($29 & 2147483647) << 1 | $36 >>> 31);
          HEAP32[$11 + 836 >> 2] = $29 ^ $46;
          HEAP32[$11 + 824 >> 2] = $37 ^ (($30 & 2147483647) << 1 | $37 >>> 31);
          HEAP32[$11 + 828 >> 2] = $30 ^ $47;
          HEAP32[$11 + 816 >> 2] = $38 ^ (($31 & 2147483647) << 1 | $38 >>> 31);
          HEAP32[$11 + 820 >> 2] = $31 ^ $48;
          HEAP32[$11 + 908 >> 2] = 0;
          HEAP32[$11 + 900 >> 2] = 0;
          HEAP32[$11 + 904 >> 2] = 8;
          HEAP32[$11 + 856 >> 2] = $49;
          HEAP32[$11 + 860 >> 2] = $26 ? -1 : $25;
          HEAP32[$11 + 616 >> 2] = 0;
          HEAP32[$11 + 608 >> 2] = 0;
          HEAP32[$11 + 576 >> 2] = 1;
          HEAP32[$11 + 580 >> 2] = 0;
          HEAP32[$11 + 584 >> 2] = 0;
          HEAP32[$11 + 588 >> 2] = 0;
          HEAP32[$11 + 592 >> 2] = 0;
          HEAP32[$11 + 596 >> 2] = 0;
          HEAP32[$11 + 920 >> 2] = $14;
          HEAP32[$11 + 916 >> 2] = $0;
          HEAP32[$11 + 912 >> 2] = $14;
          memset($11 + 664 | 0, 0, 108);
          HEAP32[$11 + 964 >> 2] = 4;
          HEAP32[$11 + 968 >> 2] = 0;
          HEAP32[$11 + 956 >> 2] = 0;
          HEAP32[$11 + 960 >> 2] = 0;
          HEAP32[$11 + 948 >> 2] = 0;
          HEAP32[$11 + 952 >> 2] = 4;
          HEAP32[$11 + 940 >> 2] = 4;
          HEAP32[$11 + 944 >> 2] = 0;
          HEAP32[$11 + 932 >> 2] = 0;
          HEAP32[$11 + 936 >> 2] = 0;
          HEAP32[$11 + 924 >> 2] = 0;
          HEAP32[$11 + 928 >> 2] = 4;
          HEAP32[$11 + 796 >> 2] = 8;
          HEAP32[$11 + 800 >> 2] = 0;
          HEAP32[$11 + 788 >> 2] = 0;
          HEAP32[$11 + 792 >> 2] = 0;
          HEAP32[$11 + 780 >> 2] = 0;
          HEAP32[$11 + 784 >> 2] = 4;
          HEAP32[$11 + 772 >> 2] = 4;
          HEAP32[$11 + 776 >> 2] = 0;
          $13 = 32;
          while (1) {
           $15 = 0;
           $0 = HEAP32[$11 + 516 >> 2];
           $16 = $0;
           $18 = HEAP32[$11 + 512 >> 2];
           $6 = 0;
           block23 : {
            if (!($0 | $18)) {
             break block23
            }
            $19 = HEAP32[$11 + 820 >> 2];
            $15 = $19 ^ HEAP32[$11 + 836 >> 2];
            $0 = HEAP32[$11 + 828 >> 2];
            $17 = HEAP32[$11 + 816 >> 2];
            $20 = $17 ^ HEAP32[$11 + 832 >> 2];
            $6 = HEAP32[$11 + 824 >> 2];
            HEAP32[$11 + 824 >> 2] = $20 ^ $6;
            HEAP32[$11 + 828 >> 2] = $0 ^ $15;
            $12 = HEAP32[$11 + 840 >> 2] ^ $6;
            $23 = HEAP32[$11 + 844 >> 2] ^ $0;
            (wasm2js_i32$0 = $11, wasm2js_i32$1 = __wasm_rotl_i64($12, $23, 45)), HEAP32[wasm2js_i32$0 + 840 >> 2] = wasm2js_i32$1;
            HEAP32[$11 + 844 >> 2] = i64toi32_i32$HIGH_BITS;
            HEAP32[$11 + 832 >> 2] = $6 << 17 ^ $20;
            HEAP32[$11 + 836 >> 2] = ($0 << 17 | $6 >>> 15) ^ $15;
            HEAP32[$11 + 816 >> 2] = $12 ^ $17;
            HEAP32[$11 + 820 >> 2] = $19 ^ $23;
            __multi3($11, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($6, $0, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $18, $16);
            $15 = HEAP32[$11 + 12 >> 2];
            $6 = HEAP32[$11 + 8 >> 2];
           }
           $0 = $6;
           $6 = HEAP32[$11 + 872 >> 2];
           if ($6 >>> 0 <= $8 >>> 0) {
            break block24
           }
           $6 = $15 + $16 | 0;
           $0 = $0 + $18 | 0;
           $6 = $0 >>> 0 < $18 >>> 0 ? $6 + 1 | 0 : $6;
           $15 = HEAP32[$11 + 868 >> 2] + $13 | 0;
           HEAP32[$15 >> 2] = $0;
           HEAP32[$15 + 4 >> 2] = $6;
           $13 = $13 + 176 | 0;
           $0 = $11 + 496 | 0;
           _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($0, $8);
           $8 = $8 + 1 | 0;
           if (($14 | 0) != ($8 | 0)) {
            continue
           }
           break;
          };
          $8 = $11 + 16 | 0;
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($8, $0, 480);
          $13 = HEAP32[$11 + 392 >> 2];
          $6 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(488);
          if (!$6) {
           break block25
          }
          _RNvXsI_NtCseywxCc024wH_14raftscope_core3simNtB5_3SimNtNtCsedhpoW0refZ_4core5clone5Clone5clone($6, $8);
          HEAP32[$6 + 480 >> 2] = 0;
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $8, 480);
          $8 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(568);
          if (!$8) {
           break block26
          }
          $0 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($8, $0, 480);
          HEAP32[$0 + 564 >> 2] = 0;
          HEAP32[$0 + 556 >> 2] = 0;
          HEAP32[$0 + 560 >> 2] = 1;
          HEAP32[$0 + 548 >> 2] = 0;
          HEAP32[$0 + 552 >> 2] = 0;
          HEAP32[$0 + 540 >> 2] = 0;
          HEAP32[$0 + 544 >> 2] = 1;
          HEAP32[$0 + 532 >> 2] = 4;
          HEAP32[$0 + 536 >> 2] = 0;
          HEAP32[$0 + 524 >> 2] = 400;
          HEAP32[$0 + 528 >> 2] = 0;
          HEAP32[$0 + 516 >> 2] = 1;
          HEAP32[$0 + 520 >> 2] = 0;
          HEAP32[$0 + 512 >> 2] = $6;
          HEAP32[$0 + 504 >> 2] = 0;
          HEAP32[$0 + 508 >> 2] = 1;
          HEAP32[$0 + 496 >> 2] = 0;
          HEAP32[$0 + 500 >> 2] = 8;
          HEAP32[$0 + 488 >> 2] = 0;
          HEAP32[$0 + 492 >> 2] = 0;
          (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_i64_mul((($13 >>> 0) / 50 | 0) + 1 | 0, 0, 5e4, 0)), HEAP32[wasm2js_i32$0 + 480 >> 2] = wasm2js_i32$1;
          HEAP32[$0 + 484 >> 2] = i64toi32_i32$HIGH_BITS;
          __stack_pointer = $11 + 976 | 0;
          return $0 | 0;
         }
         _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055356, 76, 1055432);
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
     _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $6, 1055448);
    wasm2js_trap();
   }
   HEAP8[1056976] = 1;
   wasm2js_trap();
  }
  HEAP8[1056976] = 1;
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0;
  block10 : {
   block11 : {
    block4 : {
     block5 : {
      block3 : {
       block2 : {
        block1 : {
         $5 = HEAP32[$0 + 376 >> 2];
         if ($1 >>> 0 < $5 >>> 0) {
          $3 = HEAP32[$0 + 372 >> 2] + Math_imul($1, 176) | 0;
          switch (HEAPU8[$3 + 173 | 0] - 1 | 0) {
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
         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $5, 1055624);
         wasm2js_trap();
        }
        $5 = HEAP32[$3 + 32 >> 2];
        $4 = HEAP32[$3 + 36 >> 2];
        break block5;
       }
       $5 = HEAP32[$3 + 32 >> 2];
       $4 = HEAP32[$3 + 36 >> 2];
       $2 = HEAP32[$3 + 112 >> 2];
       if (!$2) {
        break block5
       }
       $3 = HEAP32[$3 + 108 >> 2];
       $6 = $2 - 1 & 536870911;
       $7 = $6 + 1 | 0;
       $8 = $7 & 3;
       $2 = 0;
       if ($6 >>> 0 >= 3) {
        $13 = $7 & 1073741820;
        while (1) {
         $6 = HEAP32[$3 >> 2];
         $7 = HEAP32[$3 + 4 >> 2];
         $10 = ($4 | 0) == ($7 | 0) & $5 >>> 0 > $6 >>> 0 | $4 >>> 0 > $7 >>> 0;
         $11 = ($1 | 0) == ($2 | 0);
         $5 = $11 ? $5 : $10 ? $6 : $5;
         $9 = $3 + 8 | 0;
         $6 = HEAP32[$9 >> 2];
         $9 = HEAP32[$9 + 4 >> 2];
         $4 = $11 ? $4 : $10 ? $7 : $4;
         $10 = ($9 | 0) == ($4 | 0) & $5 >>> 0 > $6 >>> 0 | $4 >>> 0 > $9 >>> 0;
         $11 = ($2 + 1 | 0) == ($1 | 0);
         $5 = $11 ? $5 : $10 ? $6 : $5;
         $7 = $3 + 16 | 0;
         $6 = HEAP32[$7 >> 2];
         $7 = HEAP32[$7 + 4 >> 2];
         $4 = $11 ? $4 : $10 ? $9 : $4;
         $10 = ($7 | 0) == ($4 | 0) & $5 >>> 0 > $6 >>> 0 | $4 >>> 0 > $7 >>> 0;
         $11 = ($2 + 2 | 0) == ($1 | 0);
         $5 = $11 ? $5 : $10 ? $6 : $5;
         $9 = $3 + 24 | 0;
         $6 = HEAP32[$9 >> 2];
         $12 = $6;
         $9 = HEAP32[$9 + 4 >> 2];
         $4 = $11 ? $4 : $10 ? $7 : $4;
         $6 = ($9 | 0) == ($4 | 0) & $5 >>> 0 > $6 >>> 0 | $4 >>> 0 > $9 >>> 0;
         $7 = ($2 + 3 | 0) == ($1 | 0);
         $5 = $7 ? $5 : $6 ? $12 : $5;
         $4 = $7 ? $4 : $6 ? $9 : $4;
         $3 = $3 + 32 | 0;
         $2 = $2 + 4 | 0;
         if (($13 | 0) != ($2 | 0)) {
          continue
         }
         break;
        };
        if (!$8) {
         break block5
        }
       }
       $2 = $1 - $2 | 0;
       while (1) {
        $6 = HEAP32[$3 >> 2];
        $12 = $6;
        $7 = HEAP32[$3 + 4 >> 2];
        $6 = ($4 | 0) == ($7 | 0) & $5 >>> 0 > $6 >>> 0 | $4 >>> 0 > $7 >>> 0;
        $5 = $2 ? ($6 ? $12 : $5) : $5;
        $4 = $2 ? ($6 ? $7 : $4) : $4;
        $2 = $2 - 1 | 0;
        $3 = $3 + 8 | 0;
        $8 = $8 - 1 | 0;
        if ($8) {
         continue
        }
        break;
       };
       break block5;
      }
      block8 : {
       if (!HEAP32[$3 + 148 >> 2]) {
        $5 = -1;
        $4 = -1;
        break block8;
       }
       $2 = HEAP32[$3 + 144 >> 2];
       $5 = HEAP32[$2 >> 2];
       $4 = HEAP32[$2 + 4 >> 2];
      }
      if (HEAP32[$0 >> 2] != 1 | HEAP32[$0 + 4 >> 2]) {
       break block5
      }
      if (HEAP32[$3 + 8 >> 2]) {
       $2 = HEAP32[$3 + 48 >> 2];
       $6 = $2;
       $3 = HEAP32[$3 + 52 >> 2];
       $2 = ($4 | 0) == ($3 | 0) & $2 >>> 0 < $5 >>> 0 | $3 >>> 0 < $4 >>> 0;
       $5 = $2 ? $6 : $5;
       $4 = $2 ? $3 : $4;
       break block5;
      }
      $2 = HEAP32[$3 + 40 >> 2];
      $7 = HEAP32[$0 + 8 >> 2];
      $8 = $2 + $7 | 0;
      $6 = HEAP32[$3 + 44 >> 2];
      $3 = $6 + HEAP32[$0 + 12 >> 2] | 0;
      $12 = $8;
      $3 = $7 >>> 0 > $8 >>> 0 ? $3 + 1 | 0 : $3;
      $8 = ($6 | 0) == ($3 | 0) & $2 >>> 0 > $8 >>> 0 | $3 >>> 0 < $6 >>> 0;
      $2 = $8 ? -1 : $12;
      $6 = $2;
      $3 = $8 ? -1 : $3;
      $2 = ($4 | 0) == ($3 | 0) & $2 >>> 0 < $5 >>> 0 | $3 >>> 0 < $4 >>> 0;
      $5 = $2 ? $6 : $5;
      $4 = $2 ? $3 : $4;
     }
     $3 = HEAP32[$0 + 400 >> 2];
     if ($3 >>> 0 <= $1 >>> 0) {
      break block10
     }
     $2 = HEAP32[$0 + 396 >> 2] + ($1 << 3) | 0;
     HEAP32[$2 >> 2] = $5;
     HEAP32[$2 + 4 >> 2] = $4;
     if (($4 & $5) == -1) {
      break block11
     }
     $2 = HEAP32[$0 + 388 >> 2];
     if (($2 | 0) == HEAP32[$0 + 380 >> 2]) {
      _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($0 + 380 | 0)
     }
     HEAP32[$0 + 388 >> 2] = $2 + 1;
     $6 = HEAP32[$0 + 384 >> 2];
     $0 = $6 + ($2 << 4) | 0;
     HEAP32[$0 + 8 >> 2] = $1;
     HEAP32[$0 >> 2] = $5;
     HEAP32[$0 + 4 >> 2] = $4;
     $0 = 0;
     block13 : {
      if (!$2) {
       break block13
      }
      while (1) {
       $3 = $2 - 1 >>> 1 | 0;
       $8 = $6 + ($3 << 4) | 0;
       $7 = HEAP32[$8 >> 2];
       $9 = HEAP32[$8 + 4 >> 2];
       if (($5 | 0) == ($7 | 0) & ($4 | 0) == ($9 | 0) ? HEAPU32[$8 + 8 >> 2] <= $1 >>> 0 : ($9 | 0) == ($4 | 0) & $5 >>> 0 >= $7 >>> 0 | $4 >>> 0 > $9 >>> 0) {
        $0 = $2;
        break block13;
       }
       $7 = HEAP32[$8 + 12 >> 2];
       $2 = $6 + ($2 << 4) | 0;
       HEAP32[$2 + 8 >> 2] = HEAP32[$8 + 8 >> 2];
       HEAP32[$2 + 12 >> 2] = $7;
       $7 = HEAP32[$8 + 4 >> 2];
       HEAP32[$2 >> 2] = HEAP32[$8 >> 2];
       HEAP32[$2 + 4 >> 2] = $7;
       $2 = $3;
       if ($3) {
        continue
       }
       break;
      };
     }
     $0 = $6 + ($0 << 4) | 0;
     HEAP32[$0 + 8 >> 2] = $1;
     HEAP32[$0 >> 2] = $5;
     HEAP32[$0 + 4 >> 2] = $4;
     return;
    }
    $3 = HEAP32[$0 + 400 >> 2];
    if ($3 >>> 0 <= $1 >>> 0) {
     break block10
    }
    $0 = HEAP32[$0 + 396 >> 2] + ($1 << 3) | 0;
    HEAP32[$0 >> 2] = -1;
    HEAP32[$0 + 4 >> 2] = -1;
   }
   return;
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $3, 1054604);
  wasm2js_trap();
 }
 
 function _RNvXsI_NtCseywxCc024wH_14raftscope_core3simNtB5_3SimNtNtCsedhpoW0refZ_4core5clone5Clone5clone($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0;
  $14 = __stack_pointer - 32 | 0;
  __stack_pointer = $14;
  $52 = HEAP32[$1 + 312 >> 2];
  $53 = HEAP32[$1 + 316 >> 2];
  $41 = 8;
  $42 = 8;
  folding_inner4 : {
   folding_inner2 : {
    folding_inner1 : {
     block90 : {
      block59 : {
       block20 : {
        block7 : {
         $40 = HEAP32[$1 + 376 >> 2];
         block : {
          if (!$40) {
           break block
          }
          $3 = HEAP32[$1 + 372 >> 2];
          $5 = Math_imul($40, 176);
          $42 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
          if (!$42) {
           break folding_inner4
          }
          $43 = $3 + $5 | 0;
          $15 = $40;
          while (1) {
           if (($3 | 0) == ($43 | 0)) {
            break block
           }
           $7 = $3;
           $44 = HEAP32[$3 + 4 >> 2];
           $45 = HEAP32[$3 >> 2];
           $46 = HEAP32[$3 + 156 >> 2];
           $47 = HEAPU8[$3 + 173 | 0];
           $48 = HEAP32[$3 + 152 >> 2];
           $27 = HEAP32[$3 + 64 >> 2];
           block3 : {
            if (!$27) {
             $22 = 4;
             break block3;
            }
            $2 = HEAP32[$7 + 60 >> 2];
            $5 = $27 << 3;
            $22 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
            if (!$22) {
             break folding_inner1
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($22, $2, $5);
           }
           $25 = HEAP32[$7 + 32 >> 2];
           $28 = HEAP32[$7 + 36 >> 2];
           $49 = HEAP32[$7 + 160 >> 2];
           $23 = HEAP32[$7 + 76 >> 2];
           block6 : {
            if (!$23) {
             $29 = 1;
             break block6;
            }
            $2 = HEAP32[$7 + 72 >> 2];
            $29 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($23);
            if (!$29) {
             break block7
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($29, $2, $23);
           }
           $50 = HEAP32[$7 + 164 >> 2];
           $30 = 4;
           $31 = 4;
           $32 = HEAP32[$7 + 88 >> 2];
           if ($32) {
            $2 = HEAP32[$7 + 84 >> 2];
            $5 = $32 << 2;
            $31 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
            if (!$31) {
             break folding_inner2
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($31, $2, $5);
           }
           $33 = HEAP32[$7 + 100 >> 2];
           if ($33) {
            $2 = HEAP32[$7 + 96 >> 2];
            $5 = $33 << 2;
            $30 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
            if (!$30) {
             break folding_inner2
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($30, $2, $5);
           }
           $26 = 8;
           $35 = 8;
           $36 = HEAP32[$7 + 112 >> 2];
           if ($36) {
            $2 = HEAP32[$7 + 108 >> 2];
            $5 = $36 << 3;
            $35 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
            if (!$35) {
             break folding_inner4
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($35, $2, $5);
           }
           $37 = HEAP32[$7 + 124 >> 2];
           if ($37) {
            $2 = HEAP32[$7 + 120 >> 2];
            $5 = $37 << 3;
            $26 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
            if (!$26) {
             break folding_inner4
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($26, $2, $5);
           }
           $18 = 8;
           $38 = 8;
           $39 = HEAP32[$7 + 136 >> 2];
           if ($39) {
            $2 = HEAP32[$7 + 132 >> 2];
            $5 = $39 << 3;
            $38 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
            if (!$38) {
             break folding_inner4
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($38, $2, $5);
           }
           $21 = HEAP32[$7 + 148 >> 2];
           block18 : {
            if (!$21) {
             break block18
            }
            $3 = HEAP32[$7 + 144 >> 2];
            $10 = $21 << 4;
            $18 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($10);
            if (!$18) {
             break folding_inner4
            }
            $9 = 0;
            $2 = $21;
            while (1) {
             if (($9 | 0) == ($10 | 0)) {
              break block18
             }
             $6 = HEAP32[$3 + 4 >> 2];
             $5 = $9 + $18 | 0;
             HEAP32[$5 >> 2] = HEAP32[$3 >> 2];
             HEAP32[$5 + 4 >> 2] = $6;
             HEAP32[$5 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
             $9 = $9 + 16 | 0;
             $3 = $3 + 16 | 0;
             $2 = $2 - 1 | 0;
             if ($2) {
              continue
             }
             break;
            };
           }
           $6 = HEAP32[$7 + 28 >> 2];
           if ($6 >>> 0 > 1073741823) {
            break block20
           }
           $2 = $6 << 2;
           if ($2 >>> 0 >= 2147483645) {
            break block20
           }
           $13 = 0;
           block22 : {
            if (!$2) {
             $2 = 4;
             $3 = 0;
             break block22;
            }
            $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
            if (!$2) {
             break folding_inner2
            }
            $3 = $6;
           }
           HEAP32[$14 + 20 >> 2] = $2;
           HEAP32[$14 + 16 >> 2] = $3;
           HEAP32[$14 + 24 >> 2] = 0;
           HEAP32[$14 + 28 >> 2] = 0;
           block25 : {
            if (!$6) {
             $5 = 0;
             $2 = 0;
             break block25;
            }
            $5 = HEAP32[$7 + 24 >> 2];
            $2 = HEAP32[$7 + 16 >> 2];
            $5 = $5 - ($2 >>> 0 <= $5 >>> 0 ? $2 : 0) | 0;
            $4 = $2 - $5 | 0;
            if ($6 >>> 0 > $4 >>> 0) {
             $13 = $6 - $4 | 0;
             break block25;
            }
            $2 = $6 + $5 | 0;
           }
           $4 = HEAP32[$7 + 20 >> 2];
           $16 = $5 << 2;
           $12 = 0;
           $6 = $2 - $5 | 0;
           $17 = $6 + $13 | 0;
           block28 : {
            if ($3 >>> 0 >= $17 >>> 0) {
             $9 = $3;
             $20 = 0;
             break block28;
            }
            _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($14 + 16 | 0, 0, $17, 4, 4);
            $9 = HEAP32[$14 + 16 >> 2];
            $12 = HEAP32[$14 + 24 >> 2];
            $20 = HEAP32[$14 + 28 >> 2];
            if ($12 >>> 0 <= $3 - $20 >>> 0) {
             break block28
            }
            $11 = $3 - $12 | 0;
            $10 = $20 - $11 | 0;
            if (!($10 >>> 0 < $11 >>> 0 & $9 - $3 >>> 0 >= $10 >>> 0)) {
             $3 = $12 << 2;
             $10 = HEAP32[$14 + 20 >> 2];
             $12 = $9 - $11 | 0;
             _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem7memmove($10 + ($12 << 2) | 0, $3 + $10 | 0, $11 << 2);
             HEAP32[$14 + 24 >> 2] = $12;
             break block28;
            }
            $11 = HEAP32[$14 + 20 >> 2];
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($11 + ($3 << 2) | 0, $11, $10 << 2);
           }
           $24 = $2 << 2;
           $8 = Math_imul($34, 176) + $42 | 0;
           $3 = $4 + $16 | 0;
           block41 : {
            block34 : {
             $11 = $12 + $20 | 0;
             $19 = $11 - ($9 >>> 0 <= $11 >>> 0 ? $9 : 0) | 0;
             $11 = $9 - $19 | 0;
             if ($11 >>> 0 < $17 >>> 0) {
              $6 = $13 << 2;
              block35 : {
               if ($11) {
                $5 = $24 - $16 | 0;
                $2 = 0;
                $13 = HEAP32[$14 + 20 >> 2] + ($19 << 2) | 0;
                $12 = $13;
                $10 = 0;
                while (1) {
                 if (($2 | 0) == ($5 | 0)) {
                  $13 = ($19 - $9 | 0) + $10 | 0;
                  $2 = 0;
                  $3 = $6;
                  $5 = $4;
                  while (1) {
                   if (!$3) {
                    break block34
                   }
                   HEAP32[$12 >> 2] = HEAP32[$5 >> 2];
                   $12 = $12 + 4 | 0;
                   $3 = $3 - 4 | 0;
                   $5 = $5 + 4 | 0;
                   $2 = $2 - 1 | 0;
                   if (($13 | 0) != ($2 | 0)) {
                    continue
                   }
                   break;
                  };
                  $16 = 0;
                  break block35;
                 }
                 HEAP32[$2 + $13 >> 2] = HEAP32[$2 + $3 >> 2];
                 $12 = $12 + 4 | 0;
                 $2 = $2 + 4 | 0;
                 $10 = $10 + 1 | 0;
                 if (($11 | 0) != ($10 | 0)) {
                  continue
                 }
                 break;
                };
                $3 = $2 + $3 | 0;
               }
               $2 = $4 + $24 | 0;
               block37 : {
                if (($3 | 0) == ($2 | 0)) {
                 $16 = 0;
                 break block37;
                }
                $2 = $2 - $3 | 0;
                $16 = $2 >>> 2 | 0;
                $5 = $16 & 3;
                $13 = 0;
                $9 = HEAP32[$14 + 20 >> 2];
                block39 : {
                 if ($2 >>> 0 >= 16) {
                  $12 = $16 & 1073741820;
                  $2 = 0;
                  while (1) {
                   $17 = $2 + $9 | 0;
                   $10 = $2 + $3 | 0;
                   HEAP32[$17 >> 2] = HEAP32[$10 >> 2];
                   HEAP32[$17 + 4 >> 2] = HEAP32[$10 + 4 >> 2];
                   HEAP32[$17 + 8 >> 2] = HEAP32[$10 + 8 >> 2];
                   HEAP32[$17 + 12 >> 2] = HEAP32[$10 + 12 >> 2];
                   $2 = $2 + 16 | 0;
                   $13 = $13 + 4 | 0;
                   if (($12 | 0) != ($13 | 0)) {
                    continue
                   }
                   break;
                  };
                  if (!$5) {
                   break block39
                  }
                 }
                 $2 = $13 << 2;
                 $3 = $2 + $3 | 0;
                 $2 = $2 + $9 | 0;
                 while (1) {
                  HEAP32[$2 >> 2] = HEAP32[$3 >> 2];
                  $3 = $3 + 4 | 0;
                  $2 = $2 + 4 | 0;
                  $5 = $5 - 1 | 0;
                  if ($5) {
                   continue
                  }
                  break;
                 };
                }
                $11 = $11 + $16 | 0;
               }
               $5 = $4;
              }
              $2 = $4 + $6 | 0;
              if (($5 | 0) == ($2 | 0)) {
               $6 = $11;
               break block41;
              }
              $2 = $2 - $5 | 0;
              $4 = $2 >>> 2 | 0;
              $10 = $4 & 3;
              $13 = 0;
              $17 = HEAP32[$14 + 20 >> 2];
              block43 : {
               if ($2 >>> 0 >= 16) {
                $9 = $4 & 1073741820;
                $12 = $17 + ($16 << 2) | 0;
                $3 = 0;
                while (1) {
                 $2 = $3 + $12 | 0;
                 $6 = $3 + $5 | 0;
                 HEAP32[$2 >> 2] = HEAP32[$6 >> 2];
                 HEAP32[$2 + 4 >> 2] = HEAP32[$6 + 4 >> 2];
                 HEAP32[$2 + 8 >> 2] = HEAP32[$6 + 8 >> 2];
                 HEAP32[$2 + 12 >> 2] = HEAP32[$6 + 12 >> 2];
                 $3 = $3 + 16 | 0;
                 $13 = $13 + 4 | 0;
                 if (($9 | 0) != ($13 | 0)) {
                  continue
                 }
                 break;
                };
                if (!$10) {
                 break block43
                }
                $16 = $13 + $16 | 0;
               }
               $3 = ($13 << 2) + $5 | 0;
               $2 = $17 + ($16 << 2) | 0;
               while (1) {
                HEAP32[$2 >> 2] = HEAP32[$3 >> 2];
                $3 = $3 + 4 | 0;
                $2 = $2 + 4 | 0;
                $10 = $10 - 1 | 0;
                if ($10) {
                 continue
                }
                break;
               };
              }
              $6 = $4 + $11 | 0;
              break block41;
             }
             block44 : {
              if (($16 | 0) == ($24 | 0)) {
               break block44
              }
              $12 = $6 & 3;
              $11 = $19 << 2;
              $9 = HEAP32[$14 + 20 >> 2];
              $10 = 0;
              if ($5 - $2 >>> 0 <= 4294967292) {
               $2 = $9 + $11 | 0;
               $5 = $6 & -4;
               while (1) {
                HEAP32[$2 >> 2] = HEAP32[$3 >> 2];
                HEAP32[$2 + 4 >> 2] = HEAP32[$3 + 4 >> 2];
                HEAP32[$2 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                HEAP32[$2 + 12 >> 2] = HEAP32[$3 + 12 >> 2];
                $2 = $2 + 16 | 0;
                $3 = $3 + 16 | 0;
                $10 = $10 + 4 | 0;
                if (($5 | 0) != ($10 | 0)) {
                 continue
                }
                break;
               };
               if (!$12) {
                break block44
               }
              }
              $2 = $10 << 2;
              $3 = $9 + ($2 + $11 | 0) | 0;
              $2 = $4 + ($2 + $16 | 0) | 0;
              while (1) {
               HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
               $2 = $2 + 4 | 0;
               $3 = $3 + 4 | 0;
               $12 = $12 - 1 | 0;
               if ($12) {
                continue
               }
               break;
              };
             }
             if (!$13) {
              break block41
             }
             $12 = $13 & 3;
             $10 = 0;
             $11 = HEAP32[$14 + 20 >> 2];
             if ($13 >>> 0 >= 4) {
              $5 = $13 & -4;
              $3 = ((($19 << 2) + $24 | 0) - $16 | 0) + $11 | 0;
              $2 = $4;
              while (1) {
               HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
               HEAP32[$3 + 4 >> 2] = HEAP32[$2 + 4 >> 2];
               HEAP32[$3 + 8 >> 2] = HEAP32[$2 + 8 >> 2];
               HEAP32[$3 + 12 >> 2] = HEAP32[$2 + 12 >> 2];
               $3 = $3 + 16 | 0;
               $2 = $2 + 16 | 0;
               $10 = $10 + 4 | 0;
               if (($5 | 0) != ($10 | 0)) {
                continue
               }
               break;
              };
              if (!$12) {
               $6 = $17;
               break block41;
              }
              $6 = $6 + $10 | 0;
             }
             $3 = $11 + (($6 << 2) + ($19 << 2) | 0) | 0;
             $2 = $4 + ($10 << 2) | 0;
             while (1) {
              HEAP32[$3 >> 2] = HEAP32[$2 >> 2];
              $2 = $2 + 4 | 0;
              $3 = $3 + 4 | 0;
              $12 = $12 - 1 | 0;
              if ($12) {
               continue
              }
              break;
             };
             $6 = $17;
             break block41;
            }
            $6 = $10 - $2 | 0;
           }
           $3 = $7 + 176 | 0;
           $34 = $34 + 1 | 0;
           HEAP32[$14 + 28 >> 2] = $6 + $20;
           $6 = HEAP32[$7 + 40 >> 2];
           $16 = HEAP32[$7 + 44 >> 2];
           $2 = HEAP32[$7 + 48 >> 2];
           $20 = HEAP32[$7 + 52 >> 2];
           $17 = HEAP32[$7 + 168 >> 2];
           $12 = HEAPU8[$7 + 172 | 0];
           $9 = HEAP32[$7 + 8 >> 2];
           $19 = HEAP32[$7 + 12 >> 2];
           $5 = HEAP32[$14 + 28 >> 2];
           $7 = HEAP32[$14 + 24 >> 2];
           HEAP32[$14 + 8 >> 2] = $7;
           HEAP32[$14 + 12 >> 2] = $5;
           $4 = HEAP32[$14 + 20 >> 2];
           $24 = HEAP32[$14 + 16 >> 2];
           HEAP32[$14 >> 2] = $24;
           HEAP32[$14 + 4 >> 2] = $4;
           HEAP32[$8 + 8 >> 2] = $9;
           HEAP32[$8 + 12 >> 2] = $19;
           HEAP32[$8 + 4 >> 2] = $44;
           HEAP32[$8 >> 2] = $45;
           HEAP32[$8 + 16 >> 2] = $24;
           HEAP32[$8 + 20 >> 2] = $4;
           HEAP32[$8 + 24 >> 2] = $7;
           HEAP32[$8 + 28 >> 2] = $5;
           HEAP8[$8 + 173 | 0] = $47;
           HEAP8[$8 + 172 | 0] = $12;
           HEAP32[$8 + 168 >> 2] = $17;
           HEAP32[$8 + 164 >> 2] = $50;
           HEAP32[$8 + 160 >> 2] = $49;
           HEAP32[$8 + 156 >> 2] = $46;
           HEAP32[$8 + 152 >> 2] = $48;
           HEAP32[$8 + 148 >> 2] = $21;
           HEAP32[$8 + 144 >> 2] = $18;
           HEAP32[$8 + 140 >> 2] = $21;
           HEAP32[$8 + 136 >> 2] = $39;
           HEAP32[$8 + 132 >> 2] = $38;
           HEAP32[$8 + 128 >> 2] = $39;
           HEAP32[$8 + 124 >> 2] = $37;
           HEAP32[$8 + 120 >> 2] = $26;
           HEAP32[$8 + 116 >> 2] = $37;
           HEAP32[$8 + 112 >> 2] = $36;
           HEAP32[$8 + 108 >> 2] = $35;
           HEAP32[$8 + 104 >> 2] = $36;
           HEAP32[$8 + 100 >> 2] = $33;
           HEAP32[$8 + 96 >> 2] = $30;
           HEAP32[$8 + 92 >> 2] = $33;
           HEAP32[$8 + 88 >> 2] = $32;
           HEAP32[$8 + 84 >> 2] = $31;
           HEAP32[$8 + 80 >> 2] = $32;
           HEAP32[$8 + 76 >> 2] = $23;
           HEAP32[$8 + 72 >> 2] = $29;
           HEAP32[$8 + 68 >> 2] = $23;
           HEAP32[$8 + 64 >> 2] = $27;
           HEAP32[$8 + 60 >> 2] = $22;
           HEAP32[$8 + 56 >> 2] = $27;
           HEAP32[$8 + 48 >> 2] = $2;
           HEAP32[$8 + 52 >> 2] = $20;
           HEAP32[$8 + 40 >> 2] = $6;
           HEAP32[$8 + 44 >> 2] = $16;
           HEAP32[$8 + 32 >> 2] = $25;
           HEAP32[$8 + 36 >> 2] = $28;
           $15 = $15 - 1 | 0;
           if ($15) {
            continue
           }
           break;
          };
         }
         $17 = HEAP32[$1 + 136 >> 2];
         block48 : {
          if (!$17) {
           break block48
          }
          $8 = HEAP32[$1 + 132 >> 2];
          $22 = $17 << 6;
          $41 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($22);
          if (!$41) {
           break folding_inner4
          }
          $3 = 0;
          $5 = $17;
          while (1) {
           if (($3 | 0) == ($22 | 0)) {
            break block48
           }
           $4 = -1;
           $15 = $3 + $8 | 0;
           $7 = HEAP32[$15 >> 2];
           if (($7 | 0) != -1) {
            $23 = HEAP32[$15 + 56 >> 2];
            $11 = HEAP32[$15 + 52 >> 2];
            $13 = HEAP32[$15 + 48 >> 2];
            $2 = $15 + 24 | 0;
            $6 = HEAP32[$2 >> 2];
            $16 = HEAP32[$2 + 4 >> 2];
            $4 = -2147483644;
            block55 : {
             block56 : {
              switch ((($7 | 0) >= 0 ? 2 : $7 ^ -2147483648) - 2 | 0) {
              case 0:
               $18 = HEAP32[$15 + 16 >> 2];
               $12 = HEAP32[$15 + 12 >> 2];
               $4 = HEAP32[$15 + 8 >> 2];
               if ($4) {
                $2 = HEAP32[$15 + 4 >> 2];
                $7 = $4 << 3;
                $9 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
                if (!$9) {
                 break block59
                }
                $25 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($9, $2, $7);
               } else {
                $25 = 4
               }
               $28 = $4;
               $10 = HEAP32[$15 + 20 >> 2];
               break block55;
              case 2:
               break block55;
              default:
               break block56;
              };
             }
             $10 = HEAP32[$15 + 20 >> 2];
             $18 = HEAP32[$15 + 16 >> 2];
             $12 = HEAP32[$15 + 12 >> 2];
             $2 = $15 + 4 | 0;
             $25 = HEAP32[$2 >> 2];
             $28 = HEAP32[$2 + 4 >> 2];
             $4 = $7;
            }
            $2 = $15 + 40 | 0;
            $9 = HEAP32[$2 >> 2];
            $19 = HEAP32[$2 + 4 >> 2];
            $7 = $15 + 32 | 0;
            $2 = HEAP32[$7 >> 2];
            $20 = HEAP32[$7 + 4 >> 2];
            $21 = HEAPU8[$15 + 60 | 0];
           }
           $7 = $3 + $41 | 0;
           HEAP32[$7 >> 2] = $4;
           HEAP8[$7 + 60 | 0] = $21;
           HEAP32[$7 + 56 >> 2] = $23;
           HEAP32[$7 + 52 >> 2] = $11;
           HEAP32[$7 + 48 >> 2] = $13;
           $4 = $7 + 40 | 0;
           HEAP32[$4 >> 2] = $9;
           HEAP32[$4 + 4 >> 2] = $19;
           $4 = $7 + 32 | 0;
           HEAP32[$4 >> 2] = $2;
           HEAP32[$4 + 4 >> 2] = $20;
           $4 = $7 + 24 | 0;
           HEAP32[$4 >> 2] = $6;
           HEAP32[$4 + 4 >> 2] = $16;
           HEAP32[$7 + 20 >> 2] = $10;
           HEAP32[$7 + 16 >> 2] = $18;
           HEAP32[$7 + 12 >> 2] = $12;
           $4 = $7 + 4 | 0;
           HEAP32[$4 >> 2] = $25;
           HEAP32[$4 + 4 >> 2] = $28;
           $3 = $3 - -64 | 0;
           $5 = $5 - 1 | 0;
           if ($5) {
            continue
           }
           break;
          };
         }
         $28 = HEAP32[$1 + 148 >> 2];
         block61 : {
          if (!$28) {
           $16 = 4;
           break block61;
          }
          $2 = HEAP32[$1 + 144 >> 2];
          $5 = $28 << 2;
          $16 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
          if (!$16) {
           break folding_inner1
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($16, $2, $5);
         }
         $5 = 8;
         $10 = 8;
         $7 = HEAP32[$1 + 160 >> 2];
         block63 : {
          if (!$7) {
           break block63
          }
          $9 = HEAP32[$1 + 156 >> 2];
          $4 = Math_imul($7, 24);
          $10 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$10) {
           break folding_inner4
          }
          $3 = 0;
          $2 = $7;
          while (1) {
           if (($3 | 0) == ($4 | 0)) {
            break block63
           }
           $11 = HEAP32[$9 + 4 >> 2];
           $6 = $3 + $10 | 0;
           HEAP32[$6 >> 2] = HEAP32[$9 >> 2];
           HEAP32[$6 + 4 >> 2] = $11;
           HEAP32[$6 + 16 >> 2] = HEAP32[$9 + 16 >> 2];
           $11 = HEAP32[$9 + 12 >> 2];
           $6 = $6 + 8 | 0;
           HEAP32[$6 >> 2] = HEAP32[$9 + 8 >> 2];
           HEAP32[$6 + 4 >> 2] = $11;
           $3 = $3 + 24 | 0;
           $9 = $9 + 24 | 0;
           $2 = $2 - 1 | 0;
           if ($2) {
            continue
           }
           break;
          };
         }
         $35 = HEAP32[$1 + 164 >> 2];
         $2 = HEAP32[$1 + 388 >> 2];
         block65 : {
          if (!$2) {
           break block65
          }
          $3 = HEAP32[$1 + 384 >> 2];
          $11 = $2 << 4;
          $5 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($11);
          if (!$5) {
           break folding_inner4
          }
          $9 = 0;
          $4 = $2;
          while (1) {
           if (($9 | 0) == ($11 | 0)) {
            break block65
           }
           $18 = HEAP32[$3 + 4 >> 2];
           $6 = $5 + $9 | 0;
           HEAP32[$6 >> 2] = HEAP32[$3 >> 2];
           HEAP32[$6 + 4 >> 2] = $18;
           HEAP32[$6 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
           $9 = $9 + 16 | 0;
           $3 = $3 + 16 | 0;
           $4 = $4 - 1 | 0;
           if ($4) {
            continue
           }
           break;
          };
         }
         $8 = 8;
         $9 = 8;
         $23 = HEAP32[$1 + 400 >> 2];
         if ($23) {
          $6 = HEAP32[$1 + 396 >> 2];
          $4 = $23 << 3;
          $9 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$9) {
           break folding_inner4
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($9, $6, $4);
         }
         $36 = HEAP32[$1 + 476 >> 2];
         $37 = HEAP32[$1 + 352 >> 2];
         $38 = HEAP32[$1 + 356 >> 2];
         $19 = HEAP32[$1 + 412 >> 2];
         if ($19) {
          $6 = HEAP32[$1 + 408 >> 2];
          $4 = $19 << 3;
          $8 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$8) {
           break folding_inner4
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($8, $6, $4);
         }
         $22 = 4;
         $39 = HEAP32[$1 + 104 >> 2];
         $43 = HEAP32[$1 + 108 >> 2];
         $44 = HEAP32[$1 + 96 >> 2];
         $45 = HEAP32[$1 + 100 >> 2];
         $46 = HEAP32[$1 + 124 >> 2];
         $47 = HEAP32[$1 + 120 >> 2];
         $48 = HEAP32[$1 + 88 >> 2];
         $49 = HEAP32[$1 + 92 >> 2];
         $50 = HEAP32[$1 + 80 >> 2];
         $54 = HEAP32[$1 + 84 >> 2];
         $55 = HEAP32[$1 + 116 >> 2];
         $56 = HEAP32[$1 + 112 >> 2];
         $57 = HEAP32[$1 + 360 >> 2];
         $58 = HEAP32[$1 + 364 >> 2];
         $25 = HEAP32[$1 + 424 >> 2];
         block72 : {
          if (!$25) {
           $24 = 8;
           break block72;
          }
          $6 = HEAP32[$1 + 420 >> 2];
          $4 = $25 << 4;
          $24 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$24) {
           break folding_inner4
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($24, $6, $4);
         }
         $59 = HEAP32[$1 + 240 >> 2];
         $60 = HEAP32[$1 + 244 >> 2];
         $61 = HEAP32[$1 + 232 >> 2];
         $62 = HEAP32[$1 + 236 >> 2];
         $63 = HEAP32[$1 + 224 >> 2];
         $64 = HEAP32[$1 + 228 >> 2];
         $65 = HEAP32[$1 + 216 >> 2];
         $66 = HEAP32[$1 + 220 >> 2];
         $67 = HEAP32[$1 + 208 >> 2];
         $68 = HEAP32[$1 + 212 >> 2];
         $69 = HEAP32[$1 + 200 >> 2];
         $70 = HEAP32[$1 + 204 >> 2];
         $71 = HEAP32[$1 + 192 >> 2];
         $72 = HEAP32[$1 + 196 >> 2];
         $73 = HEAP32[$1 + 184 >> 2];
         $74 = HEAP32[$1 + 188 >> 2];
         $75 = HEAP32[$1 + 176 >> 2];
         $76 = HEAP32[$1 + 180 >> 2];
         $77 = HEAP32[$1 + 168 >> 2];
         $78 = HEAP32[$1 + 172 >> 2];
         $27 = HEAP32[$1 + 280 >> 2];
         if ($27) {
          $6 = HEAP32[$1 + 276 >> 2];
          $4 = $27 << 2;
          $22 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$22) {
           break folding_inner1
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($22, $6, $4);
         }
         $79 = HEAP32[$1 + 264 >> 2];
         $80 = HEAP32[$1 + 268 >> 2];
         $81 = HEAP32[$1 + 256 >> 2];
         $82 = HEAP32[$1 + 260 >> 2];
         $83 = HEAP32[$1 + 248 >> 2];
         $84 = HEAP32[$1 + 252 >> 2];
         $30 = HEAP32[$1 + 292 >> 2];
         block77 : {
          if (!$30) {
           $15 = 4;
           break block77;
          }
          $6 = HEAP32[$1 + 288 >> 2];
          $4 = $30 << 2;
          $15 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$15) {
           break folding_inner2
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($15, $6, $4);
         }
         $31 = HEAP32[$1 + 304 >> 2];
         block80 : {
          if (!$31) {
           $20 = 8;
           break block80;
          }
          $6 = HEAP32[$1 + 300 >> 2];
          $4 = $31 << 3;
          $20 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$20) {
           break folding_inner4
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($20, $6, $4);
         }
         $34 = 4;
         $29 = 4;
         $32 = HEAP32[$1 + 436 >> 2];
         if ($32) {
          $6 = HEAP32[$1 + 432 >> 2];
          $4 = $32 << 2;
          $29 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$29) {
           break folding_inner2
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($29, $6, $4);
         }
         $33 = HEAP32[$1 + 448 >> 2];
         if ($33) {
          $6 = HEAP32[$1 + 444 >> 2];
          $4 = $33 << 3;
          $34 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($4);
          if (!$34) {
           break folding_inner2
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($34, $6, $4);
         }
         $6 = 4;
         $13 = 4;
         $11 = HEAP32[$1 + 460 >> 2];
         block86 : {
          if (!$11) {
           break block86
          }
          $4 = HEAP32[$1 + 456 >> 2];
          $51 = Math_imul($11, 12);
          $13 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($51);
          if (!$13) {
           break folding_inner2
          }
          $3 = 0;
          $18 = $11;
          while (1) {
           if (($3 | 0) == ($51 | 0)) {
            break block86
           }
           $21 = HEAP32[$4 + 8 >> 2];
           block89 : {
            if (!$21) {
             $12 = 1;
             break block89;
            }
            $26 = HEAP32[$4 + 4 >> 2];
            $12 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($21);
            if (!$12) {
             break block90
            }
            _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($12, $26, $21);
           }
           $4 = $4 + 12 | 0;
           $26 = $3 + $13 | 0;
           HEAP32[$26 >> 2] = $21;
           HEAP32[$26 + 8 >> 2] = $21;
           HEAP32[$26 + 4 >> 2] = $12;
           $3 = $3 + 12 | 0;
           $18 = $18 - 1 | 0;
           if ($18) {
            continue
           }
           break;
          };
         }
         $4 = HEAP32[$1 + 472 >> 2];
         if ($4) {
          $3 = HEAP32[$1 + 468 >> 2];
          $18 = $4 << 3;
          $6 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($18);
          if (!$6) {
           break folding_inner2
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($6, $3, $18);
         }
         $0 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $1, 80);
         HEAP32[$0 + 376 >> 2] = $40;
         HEAP32[$0 + 372 >> 2] = $42;
         HEAP32[$0 + 368 >> 2] = $40;
         HEAP32[$0 + 312 >> 2] = $52;
         HEAP32[$0 + 316 >> 2] = $53;
         HEAP32[$0 + 400 >> 2] = $23;
         HEAP32[$0 + 396 >> 2] = $9;
         HEAP32[$0 + 392 >> 2] = $23;
         HEAP32[$0 + 388 >> 2] = $2;
         HEAP32[$0 + 384 >> 2] = $5;
         HEAP32[$0 + 380 >> 2] = $2;
         HEAP32[$0 + 164 >> 2] = $35;
         HEAP32[$0 + 160 >> 2] = $7;
         HEAP32[$0 + 156 >> 2] = $10;
         HEAP32[$0 + 152 >> 2] = $7;
         HEAP32[$0 + 148 >> 2] = $28;
         HEAP32[$0 + 144 >> 2] = $16;
         HEAP32[$0 + 140 >> 2] = $28;
         HEAP32[$0 + 136 >> 2] = $17;
         HEAP32[$0 + 132 >> 2] = $41;
         HEAP32[$0 + 128 >> 2] = $17;
         HEAP32[$0 + 476 >> 2] = $36;
         HEAP32[$0 + 352 >> 2] = $37;
         HEAP32[$0 + 356 >> 2] = $38;
         HEAP32[$0 + 404 >> 2] = $19;
         HEAP32[$0 + 408 >> 2] = $8;
         HEAP32[$0 + 412 >> 2] = $19;
         HEAP32[$0 + 360 >> 2] = $57;
         HEAP32[$0 + 364 >> 2] = $58;
         HEAP32[$0 + 116 >> 2] = $55;
         HEAP32[$0 + 112 >> 2] = $56;
         HEAP32[$0 + 124 >> 2] = $46;
         HEAP32[$0 + 120 >> 2] = $47;
         HEAP32[$0 + 88 >> 2] = $48;
         HEAP32[$0 + 92 >> 2] = $49;
         HEAP32[$0 + 80 >> 2] = $50;
         HEAP32[$0 + 84 >> 2] = $54;
         $2 = HEAP32[$1 + 348 >> 2];
         HEAP32[$0 + 344 >> 2] = HEAP32[$1 + 344 >> 2];
         HEAP32[$0 + 348 >> 2] = $2;
         $2 = HEAP32[$1 + 340 >> 2];
         HEAP32[$0 + 336 >> 2] = HEAP32[$1 + 336 >> 2];
         HEAP32[$0 + 340 >> 2] = $2;
         $2 = HEAP32[$1 + 332 >> 2];
         HEAP32[$0 + 328 >> 2] = HEAP32[$1 + 328 >> 2];
         HEAP32[$0 + 332 >> 2] = $2;
         $2 = HEAP32[$1 + 324 >> 2];
         HEAP32[$0 + 320 >> 2] = HEAP32[$1 + 320 >> 2];
         HEAP32[$0 + 324 >> 2] = $2;
         HEAP32[$0 + 424 >> 2] = $25;
         HEAP32[$0 + 420 >> 2] = $24;
         HEAP32[$0 + 416 >> 2] = $25;
         HEAP32[$0 + 104 >> 2] = $39;
         HEAP32[$0 + 108 >> 2] = $43;
         HEAP32[$0 + 96 >> 2] = $44;
         HEAP32[$0 + 100 >> 2] = $45;
         HEAP32[$0 + 472 >> 2] = $4;
         HEAP32[$0 + 468 >> 2] = $6;
         HEAP32[$0 + 464 >> 2] = $4;
         HEAP32[$0 + 460 >> 2] = $11;
         HEAP32[$0 + 456 >> 2] = $13;
         HEAP32[$0 + 452 >> 2] = $11;
         HEAP32[$0 + 448 >> 2] = $33;
         HEAP32[$0 + 444 >> 2] = $34;
         HEAP32[$0 + 440 >> 2] = $33;
         HEAP32[$0 + 436 >> 2] = $32;
         HEAP32[$0 + 432 >> 2] = $29;
         HEAP32[$0 + 428 >> 2] = $32;
         HEAP32[$0 + 304 >> 2] = $31;
         HEAP32[$0 + 300 >> 2] = $20;
         HEAP32[$0 + 296 >> 2] = $31;
         HEAP32[$0 + 292 >> 2] = $30;
         HEAP32[$0 + 288 >> 2] = $15;
         HEAP32[$0 + 284 >> 2] = $30;
         HEAP32[$0 + 280 >> 2] = $27;
         HEAP32[$0 + 276 >> 2] = $22;
         HEAP32[$0 + 272 >> 2] = $27;
         HEAP32[$0 + 264 >> 2] = $79;
         HEAP32[$0 + 268 >> 2] = $80;
         HEAP32[$0 + 256 >> 2] = $81;
         HEAP32[$0 + 260 >> 2] = $82;
         HEAP32[$0 + 248 >> 2] = $83;
         HEAP32[$0 + 252 >> 2] = $84;
         HEAP32[$0 + 240 >> 2] = $59;
         HEAP32[$0 + 244 >> 2] = $60;
         HEAP32[$0 + 232 >> 2] = $61;
         HEAP32[$0 + 236 >> 2] = $62;
         HEAP32[$0 + 224 >> 2] = $63;
         HEAP32[$0 + 228 >> 2] = $64;
         HEAP32[$0 + 216 >> 2] = $65;
         HEAP32[$0 + 220 >> 2] = $66;
         HEAP32[$0 + 208 >> 2] = $67;
         HEAP32[$0 + 212 >> 2] = $68;
         HEAP32[$0 + 200 >> 2] = $69;
         HEAP32[$0 + 204 >> 2] = $70;
         HEAP32[$0 + 192 >> 2] = $71;
         HEAP32[$0 + 196 >> 2] = $72;
         HEAP32[$0 + 184 >> 2] = $73;
         HEAP32[$0 + 188 >> 2] = $74;
         HEAP32[$0 + 176 >> 2] = $75;
         HEAP32[$0 + 180 >> 2] = $76;
         HEAP32[$0 + 168 >> 2] = $77;
         HEAP32[$0 + 172 >> 2] = $78;
         __stack_pointer = $14 + 32 | 0;
         return;
        }
        _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
        wasm2js_trap();
       }
       _RNvNtCsl5a4uRf33NA_5alloc7raw_vec17capacity_overflow();
       wasm2js_trap();
      }
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
      wasm2js_trap();
     }
     _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
     wasm2js_trap();
    }
    _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
    wasm2js_trap();
   }
   _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
   wasm2js_trap();
  }
  _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
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
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1048985, $3 + 16 | 0, $2);
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
      $1 = HEAP32[$0 + 520 >> 2];
      if ($1 >>> 0 <= HEAPU32[$0 + 504 >> 2]) {
       HEAP32[$0 + 504 >> 2] = $1
      }
      $9 = HEAP32[$0 + 312 >> 2];
      $10 = HEAP32[$0 + 316 >> 2];
      $6 = HEAP32[$0 + 516 >> 2];
      block16 : {
       if (!$6) {
        break block16
       }
       $8 = HEAP32[$0 + 512 >> 2];
       $1 = $8;
       while (1) {
        block17 : {
         $3 = $1 + 312 | 0;
         $4 = HEAP32[$3 >> 2];
         $3 = HEAP32[$3 + 4 >> 2];
         if (($10 | 0) == ($3 | 0) & $4 >>> 0 > $9 >>> 0 | $3 >>> 0 > $10 >>> 0) {
          break block17
         }
         $1 = $1 + 488 | 0;
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
        $1 = $1 + 488 | 0;
        while (1) {
         $3 = $1 + 312 | 0;
         $6 = HEAP32[$3 >> 2];
         $3 = HEAP32[$3 + 4 >> 2];
         block20 : {
          if (!(($10 | 0) == ($3 | 0) & $6 >>> 0 <= $9 >>> 0 | $3 >>> 0 < $10 >>> 0)) {
           _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($1);
           break block20;
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($8 + Math_imul($5, 488) | 0, $1, 488);
          $5 = $5 + 1 | 0;
         }
         $1 = $1 + 488 | 0;
         $4 = $4 - 1 | 0;
         if ($4) {
          continue
         }
         break;
        };
       }
       HEAP32[$0 + 516 >> 2] = $5;
      }
      HEAP32[$0 + 488 >> 2] = $9;
      HEAP32[$0 + 492 >> 2] = $10;
      break block12;
     case 14:
      $5 = Math_imul(HEAP32[$0 + 376 >> 2], 176);
      $4 = HEAP32[$0 + 372 >> 2];
      $3 = $5 + $4 | 0;
      while (1) {
       $1 = $4;
       if (!$5) {
        break block12
       }
       $5 = $5 - 176 | 0;
       $4 = $1 + 176 | 0;
       if (HEAPU8[$1 + 173 | 0] != 2) {
        continue
       }
       break;
      };
      block21 : {
       if (($3 | 0) == ($4 | 0)) {
        break block21
       }
       $8 = $3 - $4 | 0;
       $6 = ($8 >>> 0) / 176 | 0;
       $3 = HEAP32[$1 + 156 >> 2];
       if ($8 - 176 >>> 0 >= 176) {
        $9 = $6 & 1;
        $8 = ($5 >>> 0) / 352 << 1;
        $5 = $4;
        while (1) {
         if (HEAPU8[$5 + 173 | 0] == 2) {
          $6 = HEAP32[$5 + 156 >> 2];
          $11 = $6 >>> 0 < $3 >>> 0;
          $3 = $11 ? $3 : $6;
          $1 = $11 ? $1 : $5;
         }
         if (HEAPU8[$5 + 349 | 0] == 2) {
          $6 = HEAP32[$5 + 332 >> 2];
          $11 = $6 >>> 0 < $3 >>> 0;
          $3 = $11 ? $3 : $6;
          $1 = $11 ? $1 : $5 + 176 | 0;
         }
         $5 = $5 + 352 | 0;
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
       $4 = Math_imul($10, 176) + $4 | 0;
       if (HEAPU8[$4 + 173 | 0] != 2) {
        break block21
       }
       $1 = HEAPU32[$4 + 156 >> 2] < $3 >>> 0 ? $1 : $4;
      }
      HEAP32[$7 + 4 >> 2] = HEAP32[$1 + 152 >> 2];
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
   $11 = HEAP32[$0 + 312 >> 2];
   $12 = HEAP32[$0 + 316 >> 2];
   $3 = HEAP32[$0 + 504 >> 2];
   $6 = HEAP32[$0 + 520 >> 2];
   block26 : {
    if ($3 >>> 0 <= $6 >>> 0) {
     $1 = HEAP32[$0 + 492 >> 2];
     if (($1 | 0) == ($12 | 0) & HEAPU32[$0 + 488 >> 2] <= $11 >>> 0 | $1 >>> 0 < $12 >>> 0) {
      break block26
     }
    }
    if ($3 >>> 0 >= $6 >>> 0) {
     HEAP32[$0 + 504 >> 2] = $6;
     $3 = $6;
    }
    $9 = HEAP32[$0 + 516 >> 2];
    block28 : {
     if (!$9) {
      break block28
     }
     $5 = 0;
     $10 = HEAP32[$0 + 512 >> 2];
     $1 = $10;
     while (1) {
      block29 : {
       $4 = $1 + 312 | 0;
       $8 = HEAP32[$4 >> 2];
       $4 = HEAP32[$4 + 4 >> 2];
       if (($12 | 0) == ($4 | 0) & $8 >>> 0 > $11 >>> 0 | $4 >>> 0 > $12 >>> 0) {
        break block29
       }
       $1 = $1 + 488 | 0;
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
      $1 = $1 + 488 | 0;
      while (1) {
       $8 = $1 + 312 | 0;
       $9 = HEAP32[$8 >> 2];
       $8 = HEAP32[$8 + 4 >> 2];
       block32 : {
        if (!(($12 | 0) == ($8 | 0) & $9 >>> 0 <= $11 >>> 0 | $8 >>> 0 < $12 >>> 0)) {
         _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($1);
         break block32;
        }
        _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($10 + Math_imul($5, 488) | 0, $1, 488);
        $5 = $5 + 1 | 0;
       }
       $1 = $1 + 488 | 0;
       $4 = $4 - 1 | 0;
       if ($4) {
        continue
       }
       break;
      };
     }
     HEAP32[$0 + 516 >> 2] = $5;
    }
    HEAP32[$0 + 488 >> 2] = $11;
    HEAP32[$0 + 492 >> 2] = $12;
   }
   if (($3 | 0) == HEAP32[$0 + 496 >> 2]) {
    _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTyymEEE8grow_oneCseywxCc024wH_14raftscope_core($0 + 496 | 0);
    $6 = HEAP32[$0 + 520 >> 2];
   }
   HEAP32[$0 + 520 >> 2] = $6 + 1;
   HEAP32[$0 + 504 >> 2] = $3 + 1;
   $3 = HEAP32[$0 + 500 >> 2] + Math_imul($3, 24) | 0;
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
  $12 = __stack_pointer - 16 | 0;
  __stack_pointer = $12;
  $7 = HEAP32[$1 + 376 >> 2];
  folding_inner1 : {
   folding_inner0 : {
    block13 : {
     block33 : {
      block24 : {
       block12 : {
        switch (HEAP32[$0 >> 2] - 1 | 0) {
        case 1:
         if (!$7) {
          break block13
         }
         $0 = 0;
         while (1) {
          _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($1, $0);
          $0 = $0 + 1 | 0;
          if (($7 | 0) != ($0 | 0)) {
           continue
          }
          break;
         };
         break block13;
        case 5:
         $0 = Math_imul($7, 176);
         $3 = HEAP32[$1 + 372 >> 2];
         $4 = $0 + $3 | 0;
         while (1) {
          $2 = $3;
          if (!$0) {
           break block13
          }
          $0 = $0 - 176 | 0;
          $3 = $2 + 176 | 0;
          if (HEAPU8[$2 + 173 | 0] != 2) {
           continue
          }
          break;
         };
         block14 : {
          if (($3 | 0) == ($4 | 0)) {
           break block14
          }
          $6 = $4 - $3 | 0;
          $4 = ($6 >>> 0) / 176 | 0;
          $8 = HEAP32[$2 + 156 >> 2];
          $7 = 0;
          if ($6 - 176 >>> 0 >= 176) {
           $5 = $4 & 1;
           $6 = ($0 >>> 0) / 352 << 1;
           $0 = $3;
           while (1) {
            if (HEAPU8[$0 + 173 | 0] == 2) {
             $4 = HEAP32[$0 + 156 >> 2];
             $9 = $4 >>> 0 < $8 >>> 0;
             $8 = $9 ? $8 : $4;
             $2 = $9 ? $2 : $0;
            }
            if (HEAPU8[$0 + 349 | 0] == 2) {
             $4 = HEAP32[$0 + 332 >> 2];
             $9 = $4 >>> 0 < $8 >>> 0;
             $8 = $9 ? $8 : $4;
             $2 = $9 ? $2 : $0 + 176 | 0;
            }
            $0 = $0 + 352 | 0;
            $7 = $7 + 2 | 0;
            if (($6 | 0) != ($7 | 0)) {
             continue
            }
            break;
           };
           if (!$5) {
            break block14
           }
          }
          $0 = Math_imul($7, 176) + $3 | 0;
          if (HEAPU8[$0 + 173 | 0] != 2) {
           break block14
          }
          $2 = HEAPU32[$0 + 156 >> 2] < $8 >>> 0 ? $2 : $0;
         }
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, HEAP32[$2 + 152 >> 2]);
         break block13;
        case 6:
         $2 = HEAP32[$1 + 136 >> 2];
         if (!$2) {
          break block13
         }
         $3 = $2 << 6;
         $2 = HEAP32[$1 + 132 >> 2];
         $5 = HEAP32[$0 + 8 >> 2];
         $6 = HEAP32[$0 + 12 >> 2];
         $0 = 0;
         while (1) {
          block19 : {
           $9 = HEAP32[$2 >> 2];
           if (($9 | 0) != -1) {
            $4 = $2 + 24 | 0;
            if (($5 | 0) == HEAP32[$4 >> 2] & ($6 | 0) == HEAP32[$4 + 4 >> 2]) {
             break block19
            }
           }
           $2 = $2 - -64 | 0;
           $0 = $0 + 1 | 0;
           $3 = $3 + -64 | 0;
           if ($3) {
            continue
           }
           break block13;
          }
          break;
         };
         if (($9 | 0) > 0) {
          __inlined_func$_RNvCs9hJ03s5DiqP_7___rustc14___rust_dealloc$41 : {
           $5 = HEAP32[$2 + 4 >> 2];
           $4 = HEAP32[$5 - 4 >> 2];
           $6 = $4 & -8;
           $3 = $9 << 3;
           $4 = $4 & 3;
           if ($6 >>> 0 >= $3 + ($4 ? 4 : 8) >>> 0) {
            if (($4 | 0) != 0 & $3 + 39 >>> 0 < $6 >>> 0) {
             break folding_inner1
            }
            _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
            break __inlined_func$_RNvCs9hJ03s5DiqP_7___rustc14___rust_dealloc$41;
           }
           break folding_inner0;
          }
         }
         HEAP32[$2 >> 2] = -1;
         $2 = HEAP32[$1 + 148 >> 2];
         if (($2 | 0) == HEAP32[$1 + 140 >> 2]) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($1 + 140 | 0)
         }
         HEAP32[$1 + 148 >> 2] = $2 + 1;
         HEAP32[HEAP32[$1 + 144 >> 2] + ($2 << 2) >> 2] = $0;
         HEAP32[$1 + 164 >> 2] = HEAP32[$1 + 164 >> 2] - 1;
         break block13;
        case 8:
         if (!$7) {
          break block13
         }
         $6 = HEAP32[$1 + 372 >> 2];
         $1 = $6;
         $3 = Math_imul($7, 176);
         $4 = $3 - 176 | 0;
         $0 = ($4 >>> 0) / 176 | 0;
         if (($0 & 7) != 7) {
          $2 = 0 - ($0 + 1 & 7) | 0;
          while (1) {
           HEAP32[$1 + 168 >> 2] = 0;
           $1 = $1 + 176 | 0;
           $2 = $2 + 1 | 0;
           if ($2) {
            continue
           }
           break;
          };
         }
         if ($4 >>> 0 < 1232) {
          break block13
         }
         $0 = $3 + $6 | 0;
         while (1) {
          HEAP32[$1 + 1400 >> 2] = 0;
          HEAP32[$1 + 1224 >> 2] = 0;
          HEAP32[$1 + 1048 >> 2] = 0;
          HEAP32[$1 + 872 >> 2] = 0;
          HEAP32[$1 + 696 >> 2] = 0;
          HEAP32[$1 + 520 >> 2] = 0;
          HEAP32[$1 + 344 >> 2] = 0;
          HEAP32[$1 + 168 >> 2] = 0;
          $1 = $1 + 1408 | 0;
          if (($0 | 0) != ($1 | 0)) {
           continue
          }
          break;
         };
         break block13;
        case 9:
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13spread_timers($1);
         break block13;
        case 10:
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13spread_timers($1);
         $4 = HEAP32[$1 + 372 >> 2];
         $13 = HEAP32[$1 + 376 >> 2];
         $6 = Math_imul($13, 176);
         $3 = $4 + $6 | 0;
         $7 = HEAP32[$1 + 312 >> 2];
         $10 = HEAP32[$1 + 316 >> 2];
         $0 = 0;
         $2 = $4;
         while (1) {
          if (($0 | 0) == ($6 | 0)) {
           $0 = 0;
           $3 = 8;
           break block24;
          }
          $0 = $0 + 176 | 0;
          $9 = $2 + 32 | 0;
          $2 = $2 + 176 | 0;
          $5 = HEAP32[$9 >> 2];
          $9 = HEAP32[$9 + 4 >> 2];
          if (($5 & $9) == -1) {
           continue
          }
          if (($9 | 0) == ($10 | 0) & $5 >>> 0 <= $7 >>> 0 | $9 >>> 0 < $10 >>> 0) {
           continue
          }
          break;
         };
         $11 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(32);
         if ($11) {
          $2 = $0 + $4 | 0;
          HEAP32[$11 >> 2] = $5;
          HEAP32[$11 + 4 >> 2] = $9;
          HEAP32[$12 + 12 >> 2] = 1;
          HEAP32[$12 + 8 >> 2] = $11;
          HEAP32[$12 + 4 >> 2] = 4;
          $8 = 1;
          while (1) {
           if (($2 | 0) != ($3 | 0)) {
            $0 = $2 + 32 | 0;
            $2 = $2 + 176 | 0;
            $6 = HEAP32[$0 >> 2];
            $5 = HEAP32[$0 + 4 >> 2];
            if (($6 & $5) == -1) {
             continue
            }
            if (($5 | 0) == ($10 | 0) & $7 >>> 0 >= $6 >>> 0 | $5 >>> 0 < $10 >>> 0) {
             continue
            }
            if (($8 | 0) == HEAP32[$12 + 4 >> 2]) {
             _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($12 + 4 | 0, $8, 1, 8, 8);
             $11 = HEAP32[$12 + 8 >> 2];
            }
            $0 = ($8 << 3) + $11 | 0;
            HEAP32[$0 >> 2] = $6;
            HEAP32[$0 + 4 >> 2] = $5;
            $8 = $8 + 1 | 0;
            HEAP32[$12 + 12 >> 2] = $8;
            continue;
           }
           break;
          };
          $3 = HEAP32[$12 + 8 >> 2];
          $0 = HEAP32[$12 + 4 >> 2];
          if ($8 >>> 0 < 2) {
           break block24
          }
          block29 : {
           if ($8 >>> 0 >= 21) {
            _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortyNvYyNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($3, $8);
            break block29;
           }
           $11 = $3 + 8 | 0;
           $9 = ($8 << 3) + $3 | 0;
           $6 = 0;
           while (1) {
            $2 = $11 - 8 | 0;
            $8 = HEAP32[$2 >> 2];
            $14 = HEAP32[$11 + 4 >> 2];
            $10 = HEAP32[$2 + 4 >> 2];
            $2 = $10;
            $7 = HEAP32[$11 >> 2];
            if (!(($14 | 0) == ($2 | 0) & $8 >>> 0 <= $7 >>> 0 | $2 >>> 0 < $14 >>> 0)) {
             $2 = $6;
             block32 : {
              while (1) {
               $5 = ($2 + $3 | 0) + 8 | 0;
               HEAP32[$5 >> 2] = $8;
               HEAP32[$5 + 4 >> 2] = $10;
               $10 = $3;
               if (!$2) {
                break block32
               }
               $2 = $2 - 8 | 0;
               $5 = $3 + $2 | 0;
               $8 = HEAP32[$5 >> 2];
               $10 = HEAP32[$5 + 4 >> 2];
               if (($10 | 0) == ($14 | 0) & $7 >>> 0 < $8 >>> 0 | $10 >>> 0 > $14 >>> 0) {
                continue
               }
               break;
              };
              $10 = $5 + 8 | 0;
             }
             $2 = $10;
             HEAP32[$2 >> 2] = $7;
             HEAP32[$2 + 4 >> 2] = $14;
            }
            $6 = $6 + 8 | 0;
            $11 = $11 + 8 | 0;
            if (($9 | 0) != ($11 | 0)) {
             continue
            }
            break;
           };
          }
          if (!$13) {
           break block33
          }
          $2 = $4;
          $9 = Math_imul($13, 176);
          $5 = $9 - 176 | 0;
          $6 = ($5 >>> 0) / 176 | 0;
          if (($6 & 3) != 3) {
           $8 = 0 - ($6 + 1 & 3) | 0;
           while (1) {
            $7 = $2 + 32 | 0;
            if (!(HEAP32[$7 >> 2] != HEAP32[$3 + 8 >> 2] | HEAP32[$7 + 4 >> 2] != HEAP32[$3 + 12 >> 2])) {
             $6 = HEAP32[$3 + 4 >> 2];
             HEAP32[$7 >> 2] = HEAP32[$3 >> 2];
             HEAP32[$7 + 4 >> 2] = $6;
            }
            $2 = $2 + 176 | 0;
            $8 = $8 + 1 | 0;
            if ($8) {
             continue
            }
            break;
           };
          }
          if ($5 >>> 0 < 528) {
           break block24
          }
          $6 = $4 + $9 | 0;
          while (1) {
           $5 = $2 + 32 | 0;
           if (!(HEAP32[$5 >> 2] != HEAP32[$3 + 8 >> 2] | HEAP32[$5 + 4 >> 2] != HEAP32[$3 + 12 >> 2])) {
            $4 = HEAP32[$3 + 4 >> 2];
            HEAP32[$5 >> 2] = HEAP32[$3 >> 2];
            HEAP32[$5 + 4 >> 2] = $4;
           }
           $5 = $2 + 208 | 0;
           if (!(HEAP32[$5 >> 2] != HEAP32[$3 + 8 >> 2] | HEAP32[$5 + 4 >> 2] != HEAP32[$3 + 12 >> 2])) {
            $4 = HEAP32[$3 + 4 >> 2];
            HEAP32[$5 >> 2] = HEAP32[$3 >> 2];
            HEAP32[$5 + 4 >> 2] = $4;
           }
           $5 = $2 + 384 | 0;
           if (!(HEAP32[$5 >> 2] != HEAP32[$3 + 8 >> 2] | HEAP32[$5 + 4 >> 2] != HEAP32[$3 + 12 >> 2])) {
            $4 = HEAP32[$3 + 4 >> 2];
            HEAP32[$5 >> 2] = HEAP32[$3 >> 2];
            HEAP32[$5 + 4 >> 2] = $4;
           }
           $5 = $2 + 560 | 0;
           if (!(HEAP32[$5 >> 2] != HEAP32[$3 + 8 >> 2] | HEAP32[$5 + 4 >> 2] != HEAP32[$3 + 12 >> 2])) {
            $4 = HEAP32[$3 + 4 >> 2];
            HEAP32[$5 >> 2] = HEAP32[$3 >> 2];
            HEAP32[$5 + 4 >> 2] = $4;
           }
           $2 = $2 + 704 | 0;
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
         if ($7 >>> 0 <= $2 >>> 0) {
          break block13
         }
         HEAP32[(HEAP32[$1 + 372 >> 2] + Math_imul($2, 176) | 0) + 168 >> 2] = HEAP32[$0 + 8 >> 2];
         break block13;
        case 4:
         $0 = HEAP32[$0 + 4 >> 2];
         if ($0 >>> 0 >= $7 >>> 0) {
          break block13
         }
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, $0);
         break block13;
        case 3:
         $0 = HEAP32[$0 + 4 >> 2];
         if ($0 >>> 0 >= $7 >>> 0) {
          break block13
         }
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim7timeout($1, $0);
         break block13;
        case 2:
         $2 = HEAP32[$0 + 4 >> 2];
         if ($7 >>> 0 <= $2 >>> 0) {
          break block13
         }
         $4 = HEAP32[$1 + 372 >> 2] + Math_imul($2, 176) | 0;
         HEAP32[$4 + 32 >> 2] = 0;
         HEAP32[$4 + 36 >> 2] = 0;
         $0 = HEAPU8[$4 + 173 | 0];
         HEAP8[$4 + 173 | 0] = 3;
         _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($4);
         if (($0 | 0) == 2) {
          _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($1)
         }
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $2);
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($1, $2);
         break block13;
        case 0:
         $0 = HEAP32[$0 + 4 >> 2];
         if ($0 >>> 0 >= $7 >>> 0) {
          break block13
         }
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($1, $0);
         break block13;
        default:
         $2 = HEAP32[$0 + 4 >> 2];
         if ($7 >>> 0 <= $2 >>> 0) {
          break block13
         }
         $4 = HEAP32[$1 + 372 >> 2] + Math_imul($2, 176) | 0;
         HEAP32[$4 + 32 >> 2] = 0;
         HEAP32[$4 + 36 >> 2] = 0;
         $0 = HEAPU8[$4 + 173 | 0];
         HEAP8[$4 + 173 | 0] = 3;
         _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($4);
         if (($0 | 0) == 2) {
          _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($1)
         }
         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $2);
         break block13;
        case 11:
         break block12;
        };
       }
       if ($7 >>> 0 < 2) {
        break block13
       }
       $3 = 176;
       $0 = 1;
       block52 : {
        block46 : {
         block42 : {
          while (1) {
           $2 = HEAP32[$1 + 376 >> 2];
           if ($2 >>> 0 <= $0 >>> 0) {
            break block42
           }
           $6 = HEAP32[$1 + 372 >> 2] + $3 | 0;
           $2 = $6 + 32 | 0;
           HEAP32[$2 >> 2] = 0;
           HEAP32[$2 + 4 >> 2] = 0;
           $4 = $6 + 173 | 0;
           $2 = HEAPU8[$4 | 0];
           HEAP8[$4 | 0] = 3;
           _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($6);
           if (($2 | 0) == 2) {
            _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($1)
           }
           _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $0);
           _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($1, $0);
           $3 = $3 + 176 | 0;
           $0 = $0 + 1 | 0;
           if (($7 | 0) != ($0 | 0)) {
            continue
           }
           break;
          };
          _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim7timeout($1, 0);
          $6 = HEAP32[$1 + 376 >> 2];
          $4 = $6 >>> 0 <= 1 ? 1 : $6;
          $9 = HEAP32[$1 + 372 >> 2];
          $0 = $9 + 332 | 0;
          $3 = 1;
          block44 : {
           while (1) {
            if (($3 | 0) == ($4 | 0)) {
             break block44
            }
            HEAP32[$0 >> 2] = 2;
            $2 = $0 - 156 | 0;
            HEAP32[$2 >> 2] = 1;
            HEAP32[$2 + 4 >> 2] = 0;
            $0 = $0 + 176 | 0;
            $3 = $3 + 1 | 0;
            if (($7 | 0) != ($3 | 0)) {
             continue
            }
            break;
           };
           if ($6) {
            $0 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
            if (!$0) {
             break block46
            }
            $6 = $7 - 1 | 0;
            $5 = memset($0, 1, $6);
            HEAP8[$5 + $6 | 0] = 1;
            $3 = HEAP32[$9 + 68 >> 2];
            if ($3) {
             $2 = HEAP32[$9 + 72 >> 2];
             $0 = HEAP32[$2 - 4 >> 2];
             $4 = $0 & -8;
             $0 = $0 & 3;
             if ($4 >>> 0 < $3 + ($0 ? 4 : 8) >>> 0) {
              break folding_inner0
             }
             if (($0 | 0) != 0 & $4 >>> 0 > $3 + 39 >>> 0) {
              break folding_inner1
             }
             _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($2);
            }
            HEAP32[$9 + 76 >> 2] = $7;
            HEAP32[$9 + 72 >> 2] = $5;
            HEAP32[$9 + 68 >> 2] = $7;
            $0 = 0;
            HEAP8[$5 | 0] = 0;
            HEAP32[$9 + 164 >> 2] = $6;
            if (($7 | 0) != 2) {
             $6 = $7 >>> 0 <= 3 ? 3 : $7;
             $8 = 352;
             $3 = 2;
             while (1) {
              $2 = HEAP32[$1 + 376 >> 2];
              if ($2 >>> 0 <= $3 >>> 0) {
               break block52
              }
              $5 = HEAP32[$1 + 372 >> 2] + $8 | 0;
              $2 = $5 + 32 | 0;
              HEAP32[$2 >> 2] = 0;
              HEAP32[$2 + 4 >> 2] = 0;
              $4 = $5 + 173 | 0;
              $2 = HEAPU8[$4 | 0];
              HEAP8[$4 | 0] = 3;
              _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($5);
              if (($2 | 0) == 2) {
               _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($1)
              }
              _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $3);
              $8 = $8 + 176 | 0;
              $3 = $3 + 1 | 0;
              if (($6 | 0) != ($3 | 0)) {
               continue
              }
              break;
             };
            }
            _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13become_leader($1, 0);
            _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, 0);
            _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, 0);
            _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($1, 0);
            while (1) {
             _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $0);
             $0 = $0 + 1 | 0;
             if (($7 | 0) != ($0 | 0)) {
              continue
             }
             break;
            };
            break block13;
           }
           _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(0, 0, 1055324);
           wasm2js_trap();
          }
          _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, $6, 1055340);
          wasm2js_trap();
         }
         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($0, $2, 1055464);
         wasm2js_trap();
        }
        _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
        wasm2js_trap();
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $2, 1055464);
       wasm2js_trap();
      }
      if (!$13) {
       break block33
      }
      $2 = 0;
      while (1) {
       _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($1, $2);
       $2 = $2 + 1 | 0;
       if (($13 | 0) != ($2 | 0)) {
        continue
       }
       break;
      };
     }
     if (!$0) {
      break block13
     }
     $2 = HEAP32[$3 - 4 >> 2];
     $4 = $2 & -8;
     $1 = $0 << 3;
     $0 = $2 & 3;
     if ($4 >>> 0 < $1 + ($0 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (($0 | 0) != 0 & $4 >>> 0 > $1 + 39 >>> 0) {
      break folding_inner1
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
    }
    __stack_pointer = $12 + 16 | 0;
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
  wasm2js_trap();
 }
 
 function rs_out($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 560 >> 2];
 }
 
 function rs_out_len($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 564 >> 2];
 }
 
 function rs_pick($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = Math_fround($1);
  $2 = Math_fround($2);
  $3 = Math_fround($3);
  $4 = Math_fround($4);
  var $5 = Math_fround(0), $6 = 0, $7 = Math_fround(0), $8 = 0, $9 = Math_fround(0), $10 = 0, $11 = 0, $12 = Math_fround(0), $13 = 0, $14 = Math_fround(0), $15 = Math_fround(0), $16 = 0, $17 = Math_fround(0), $18 = Math_fround(0), $19 = 0.0, $20 = Math_fround(0), $21 = Math_fround(0), $22 = 0, $23 = 0.0, $24 = Math_fround(0), $25 = 0, $26 = 0;
  $6 = HEAP32[$0 + 376 >> 2];
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
    $10 = Math_imul($6, 176);
    $16 = HEAP32[$0 + 372 >> 2] + 152 | 0;
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
     $16 = $16 + 176 | 0;
     $10 = $10 - 176 | 0;
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
   $10 = HEAP32[$0 + 132 >> 2];
   $25 = $10 + (HEAP32[$0 + 136 >> 2] << 6) | 0;
   $17 = Math_fround(($6 >>> 0 <= 1 ? 1 : $6) >>> 0);
   $6 = HEAP32[$0 + 312 >> 2];
   $16 = HEAP32[$0 + 316 >> 2];
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
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = Math_fround(0), $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = Math_fround(0), $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = Math_fround(0), $22 = Math_fround(0), $23 = 0, $24 = Math_fround(0), $25 = Math_fround(0), $26 = 0, $27 = 0, $28 = Math_fround(0), $29 = Math_fround(0), $30 = 0, $31 = Math_fround(0), $32 = 0, $33 = 0, $34 = 0, $35 = Math_fround(0), $36 = Math_fround(0), $37 = 0, $38 = Math_fround(0), $39 = Math_fround(0), $40 = Math_fround(0), $41 = Math_fround(0), $42 = Math_fround(0), $43 = Math_fround(0), $44 = Math_fround(0), $45 = Math_fround(0), $46 = Math_fround(0), $47 = 0, $48 = Math_fround(0), $49 = Math_fround(0), $50 = 0, $51 = 0, $52 = 0, $53 = Math_fround(0), $54 = 0, $55 = 0, $56 = 0, $57 = Math_fround(0), $58 = Math_fround(0), $59 = Math_fround(0);
  $11 = __stack_pointer + -64 | 0;
  __stack_pointer = $11;
  HEAP32[$0 + 548 >> 2] = 0;
  HEAP32[$0 + 552 >> 2] = 0;
  HEAP32[$0 + 536 >> 2] = 0;
  $16 = HEAP32[$0 + 376 >> 2];
  block1 : {
   if (!($1 >= Math_fround(760.0))) {
    $10 = Math_fround($2 + Math_fround(-120.0));
    $15 = $1 != $1 ? $10 : $1;
    $10 = $10 != $10 ? $15 : $10;
    $10 = $10 > $15 ? $15 : $10;
    $10 = $10 != $10 ? Math_fround(120.0) : $10;
    $15 = $10 > Math_fround(120.0) ? $10 : Math_fround(120.0);
    $38 = Math_fround($15 + Math_fround(4.0));
    $43 = Math_fround(Math_fround($2 - $15) + Math_fround(-12.0));
    $41 = Math_fround($1 + Math_fround(-24.0));
    $44 = Math_fround(12.0);
    $10 = $15;
    $2 = Math_fround(.3100000023841858);
    break block1;
   }
   $10 = Math_fround($1 * Math_fround(.5199999809265137));
   $15 = $2 != $2 ? $10 : $2;
   $10 = $10 != $10 ? $15 : $10;
   $10 = $10 > $15 ? $15 : $10;
   $44 = Math_fround($10 + Math_fround(40.0));
   $41 = Math_fround(Math_fround($1 - $10) + Math_fround(-52.0));
   $43 = Math_fround($2 + Math_fround(-24.0));
   $38 = Math_fround(12.0);
   $15 = $2;
   $1 = $10;
   $2 = Math_fround(.30000001192092896);
  }
  $28 = Math_fround($2 * $10);
  if ($16 >>> 0 <= 1) {
   $2 = Math_fround($10 * Math_fround(.08500000089406967))
  } else {
   $2 = Math_fround($10 * Math_fround(.08500000089406967));
   $10 = Math_fround(Math_fround(_RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf(Math_fround(Math_fround(3.1415927410125732) / Math_fround($16 >>> 0))) * $28) * Math_fround(.8199999928474426));
   $10 = $10 != $10 ? $2 : $10;
   $2 = $2 != $2 ? $10 : $2;
   $2 = $2 > $10 ? $10 : $2;
  }
  $2 = $2 != $2 ? Math_fround(1.5) : $2;
  $21 = $2 > Math_fround(1.5) ? $2 : Math_fround(1.5);
  $20 = HEAP32[$0 + 312 >> 2];
  $18 = HEAP32[$0 + 316 >> 2];
  $48 = Math_fround(+HEAPU32[$0 + 16 >> 2] + +HEAPU32[$0 + 20 >> 2] * 4294967296.0);
  if (HEAPU32[$0 + 528 >> 2] <= 9) {
   _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 528 | 0, 0, 10, 4, 4);
   $5 = HEAP32[$0 + 536 >> 2];
  }
  $8 = $5 + 10 | 0;
  HEAP32[$0 + 536 >> 2] = $8;
  $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
  HEAP32[$5 + 32 >> 2] = 0;
  HEAP32[$5 + 36 >> 2] = 0;
  HEAP32[$5 + 24 >> 2] = 1065353216;
  HEAP32[$5 + 28 >> 2] = 1065353216;
  HEAP32[$5 + 16 >> 2] = -1082130432;
  HEAP32[$5 + 20 >> 2] = 1077936128;
  HEAPF32[$5 + 12 >> 2] = $28;
  $39 = Math_fround($15 * Math_fround(.5));
  HEAPF32[$5 + 8 >> 2] = $39;
  $40 = Math_fround($1 * Math_fround(.5));
  HEAPF32[$5 + 4 >> 2] = $40;
  HEAP32[$5 >> 2] = 1065353216;
  $6 = $16 >>> 0 < 33;
  $1 = $6 ? Math_fround(7.0) : Math_fround(3.0);
  $2 = $6 ? Math_fround(3.0) : Math_fround(1.2000000476837158);
  $10 = Math_fround($21 * ($6 ? Math_fround(.1599999964237213) : Math_fround(.5)));
  $2 = $2 > $10 ? $2 : $10;
  $29 = $1 < $2 ? $1 : $2;
  $24 = Math_fround($29 * Math_fround(.8500000238418579));
  $53 = Math_fround($29 * Math_fround(1.4500000476837158));
  $7 = HEAP32[$0 + 132 >> 2];
  $17 = $7 + (HEAP32[$0 + 136 >> 2] << 6) | 0;
  $45 = Math_fround(($16 >>> 0 <= 1 ? 1 : $16) >>> 0);
  $12 = $0 + 528 | 0;
  folding_inner2 : {
   folding_inner1 : {
    folding_inner0 : {
     label5 : while (1) {
      $19 = $4 >>> 0 > $13 >>> 0;
      while (1) {
       block10 : {
        block6 : {
         block81 : {
          block80 : {
           block75 : {
            block76 : {
             block74 : {
              block73 : {
               block8 : {
                block7 : {
                 block9 : {
                  $5 = $7;
                  if (($17 | 0) != ($5 | 0)) {
                   $7 = $5 - -64 | 0;
                   $9 = HEAP32[$5 >> 2];
                   if (($9 | 0) == -1) {
                    continue
                   }
                   if (!$19) {
                    break block6
                   }
                   $1 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPU32[$5 + 48 >> 2]) / $45) + Math_fround(.75)) * Math_fround(6.2831854820251465));
                   $10 = _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($1);
                   $15 = Math_fround(Math_fround(Math_fround(Math_fround(HEAPU32[$5 + 52 >> 2]) / $45) + Math_fround(.75)) * Math_fround(6.2831854820251465));
                   $25 = _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($15);
                   $2 = Math_fround($40 + Math_fround($28 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($1)));
                   $35 = Math_fround(Math_fround($40 + Math_fround($28 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($15))) - $2);
                   $10 = Math_fround($39 + Math_fround($28 * $10));
                   $42 = Math_fround(Math_fround($39 + Math_fround($28 * $25)) - $10);
                   $1 = Math_fround(Math_sqrt(Math_fround(Math_fround($35 * $35) + Math_fround($42 * $42))));
                   $1 = $1 != $1 ? Math_fround(1.0000000474974513e-03) : $1;
                   $46 = $1 > Math_fround(1.0000000474974513e-03) ? $1 : Math_fround(1.0000000474974513e-03);
                   $1 = Math_fround($21 / $46);
                   $1 = $1 != $1 ? Math_fround(.44999998807907104) : $1;
                   $1 = $1 < Math_fround(.44999998807907104) ? $1 : Math_fround(.44999998807907104);
                   $15 = $10;
                   $19 = HEAP32[$5 + 32 >> 2];
                   $23 = $20 - $19 | 0;
                   $30 = $23;
                   $27 = HEAP32[$5 + 36 >> 2];
                   $14 = $18 - ($27 + ($20 >>> 0 < $19 >>> 0) | 0) | 0;
                   $23 = ($18 | 0) == ($14 | 0) & $20 >>> 0 < $23 >>> 0 | $14 >>> 0 > $18 >>> 0;
                   $10 = Math_fround(+(($23 ? 0 : $30) >>> 0) + +(($23 ? 0 : $14) >>> 0) * 4294967296.0);
                   $14 = HEAP32[$5 + 40 >> 2];
                   $23 = $14 - $19 | 0;
                   $19 = HEAP32[$5 + 44 >> 2] - (($14 >>> 0 < $19 >>> 0) + $27 | 0) | 0;
                   $14 = !$19 & $23 >>> 0 > 1 | ($19 | 0) != 0;
                   $10 = Math_fround($10 / Math_fround(+(($14 ? $23 : 1) >>> 0) + +(($14 ? $19 : 0) >>> 0) * 4294967296.0));
                   $1 = Math_fround($1 + Math_fround(($10 > Math_fround(1.0) ? Math_fround(1.0) : $10) * Math_fround(Math_fround(1.0) - Math_fround($1 + $1))));
                   $22 = Math_fround($15 + Math_fround($42 * $1));
                   $36 = Math_fround($2 + Math_fround($35 * $1));
                   $13 = $13 + 1 | 0;
                   $15 = Math_fround(7.0);
                   $19 = ($9 | 0) >= 0 ? 2 : $9 ^ -2147483648;
                   switch ($19 - 2 | 0) {
                   case 0:
                   case 1:
                    break block8;
                   case 2:
                    break block9;
                   default:
                    break block7;
                   };
                  }
                  $19 = HEAP32[$0 + 372 >> 2];
                  $17 = Math_imul($16, 176);
                  $23 = $19 + $17 | 0;
                  if (!$16) {
                   break block10
                  }
                  $1 = $28 != $28 ? Math_fround(1.0) : $28;
                  $36 = $1 > Math_fround(1.0) ? $1 : Math_fround(1.0);
                  $1 = Math_fround($21 * Math_fround(.09000000357627869));
                  $1 = $1 != $1 ? Math_fround(2.0) : $1;
                  $35 = $1 > Math_fround(2.0) ? $1 : Math_fround(2.0);
                  $1 = Math_fround($21 * Math_fround(.75));
                  $1 = $1 < Math_fround(9.0) ? Math_fround(9.0) : $1;
                  $42 = $1 > Math_fround(26.0) ? Math_fround(26.0) : $1;
                  $45 = Math_fround($16 >>> 0);
                  $1 = Math_fround($45 + Math_fround(-2.0));
                  $1 = $1 != $1 ? Math_fround(1.0) : $1;
                  $46 = $1 > Math_fround(1.0) ? $1 : Math_fround(1.0);
                  $31 = Math_fround($21 * Math_fround(.6200000047683716));
                  $49 = Math_fround($21 + Math_fround(15.0));
                  $53 = Math_fround($21 + Math_fround(11.0));
                  $57 = Math_fround($21 + Math_fround(9.0));
                  $58 = Math_fround($21 + Math_fround(6.0));
                  $25 = Math_fround($21 * Math_fround(1.399999976158142));
                  $29 = Math_fround($21 * Math_fround(2.200000047683716));
                  $37 = $11 + 12 | 0;
                  $54 = $11 + 60 | 0;
                  $4 = HEAP32[$0 + 12 >> 2];
                  $30 = $4;
                  $32 = HEAP32[$0 + 8 >> 2];
                  $5 = !$4 & $32 >>> 0 > 1 | ($4 | 0) != 0;
                  $59 = Math_fround(+(($5 ? $32 : 1) >>> 0) + +(($5 ? $4 : 0) >>> 0) * 4294967296.0);
                  $50 = HEAP32[$0 >> 2];
                  $48 = Math_fround($48 + $48);
                  $51 = ($3 | 0) >= 0;
                  $52 = $16 >>> 0 < 33;
                  $13 = $0 + 528 | 0;
                  $33 = $0 + 540 | 0;
                  $4 = $19;
                  while (1) {
                   $34 = HEAP32[$4 + 152 >> 2];
                   $7 = $51 & ($34 | 0) == ($3 | 0);
                   $1 = Math_fround(Math_fround(Math_fround(Math_fround($34 >>> 0) / $45) + Math_fround(.75)) * Math_fround(6.2831854820251465));
                   $24 = Math_fround($39 + Math_fround($28 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($1)));
                   $22 = Math_fround($40 + Math_fround($28 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($1)));
                   $14 = HEAPU8[$4 + 173 | 0];
                   block21 : {
                    if (!$52) {
                     $15 = Math_fround(5.0);
                     $1 = $21;
                     $10 = $29;
                     block17 : {
                      block16 : {
                       block15 : {
                        switch ($14 - 1 | 0) {
                        case 0:
                         $1 = $25;
                        default:
                         $15 = Math_fround((HEAP32[$4 + 156 >> 2] & 7) + 10 >>> 0);
                         $10 = $1;
                        case 1:
                         $1 = $10 != $10 ? Math_fround(1.5) : $10;
                         $1 = $1 > Math_fround(1.5) ? $1 : Math_fround(1.5);
                         $2 = Math_fround(1.0);
                         $6 = HEAP32[$0 + 536 >> 2];
                         if (HEAP32[$0 + 528 >> 2] - $6 >>> 0 < 10) {
                          break block16
                         }
                         break block17;
                        case 2:
                         break block15;
                        };
                       }
                       $2 = Math_fround(.4000000059604645);
                       $15 = Math_fround(2.0);
                       $10 = $21;
                       $6 = HEAP32[$0 + 536 >> 2];
                       if (HEAP32[$0 + 528 >> 2] - $6 >>> 0 > 9) {
                        break block17
                       }
                      }
                      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $6, 10, 4, 4);
                      $6 = HEAP32[$0 + 536 >> 2];
                     }
                     $5 = HEAP32[$0 + 532 >> 2] + ($6 << 2) | 0;
                     HEAP32[$5 + 32 >> 2] = 0;
                     HEAP32[$5 + 36 >> 2] = 0;
                     HEAPF32[$5 + 28 >> 2] = $2;
                     HEAP32[$5 + 20 >> 2] = -1082130432;
                     HEAP32[$5 + 24 >> 2] = 0;
                     HEAPF32[$5 + 16 >> 2] = $15;
                     HEAPF32[$5 + 12 >> 2] = $1;
                     HEAPF32[$5 + 8 >> 2] = $24;
                     HEAPF32[$5 + 4 >> 2] = $22;
                     HEAP32[$5 >> 2] = 1065353216;
                     $5 = $6 + 10 | 0;
                     HEAP32[$0 + 536 >> 2] = $5;
                     block19 : {
                      if (!HEAP32[$4 + 168 >> 2]) {
                       $6 = $5;
                       break block19;
                      }
                      if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
                       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $5, 10, 4, 4);
                       $5 = HEAP32[$0 + 536 >> 2];
                      }
                      $6 = $5 + 10 | 0;
                      HEAP32[$0 + 536 >> 2] = $6;
                      $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
                      HEAP32[$5 + 32 >> 2] = 0;
                      HEAP32[$5 + 36 >> 2] = 0;
                      HEAP32[$5 + 24 >> 2] = 1065353216;
                      HEAP32[$5 + 28 >> 2] = 1065353216;
                      HEAP32[$5 + 16 >> 2] = -1082130432;
                      HEAP32[$5 + 20 >> 2] = 1086324736;
                      HEAPF32[$5 + 12 >> 2] = $10 + Math_fround(2.0);
                      HEAPF32[$5 + 8 >> 2] = $24;
                      HEAPF32[$5 + 4 >> 2] = $22;
                      HEAP32[$5 >> 2] = 1065353216;
                     }
                     if (!$7) {
                      break block21
                     }
                     if (HEAP32[$0 + 528 >> 2] - $6 >>> 0 <= 9) {
                      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $6, 10, 4, 4);
                      $6 = HEAP32[$0 + 536 >> 2];
                     }
                     HEAP32[$0 + 536 >> 2] = $6 + 10;
                     $5 = HEAP32[$0 + 532 >> 2] + ($6 << 2) | 0;
                     HEAP32[$5 + 32 >> 2] = 0;
                     HEAP32[$5 + 36 >> 2] = 0;
                     HEAP32[$5 + 24 >> 2] = 1073741824;
                     HEAP32[$5 + 28 >> 2] = 1065353216;
                     HEAP32[$5 + 16 >> 2] = -1082130432;
                     HEAP32[$5 + 20 >> 2] = 1065353216;
                     HEAPF32[$5 + 12 >> 2] = $10 + Math_fround(4.0);
                     HEAPF32[$5 + 8 >> 2] = $24;
                     HEAPF32[$5 + 4 >> 2] = $22;
                     HEAP32[$5 >> 2] = 1065353216;
                     break block21;
                    }
                    block34 : {
                     block33 : {
                      block27 : {
                       block26 : {
                        if ($14 >>> 0 <= 1) {
                         $5 = HEAP32[$4 + 32 >> 2];
                         $6 = HEAP32[$4 + 36 >> 2];
                         block24 : {
                          if (($5 & $6) == -1) {
                           break block24
                          }
                          if (($6 | 0) == ($18 | 0) & $5 >>> 0 <= $20 >>> 0 | $6 >>> 0 < $18 >>> 0) {
                           break block24
                          }
                          $1 = Math_fround(Math_fround(+($5 - $20 >>> 0) + +($6 - (($5 >>> 0 < $20 >>> 0) + $18 | 0) >>> 0) * 4294967296.0) / $48);
                          $1 = Math_fround(Math_fround(($1 > Math_fround(1.0) ? Math_fround(1.0) : $1) * Math_fround(6.2831854820251465)) + Math_fround(-1.5707963705062866));
                          $5 = HEAP32[$0 + 536 >> 2];
                          if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
                           _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $5, 10, 4, 4);
                           $5 = HEAP32[$0 + 536 >> 2];
                          }
                          HEAP32[$0 + 536 >> 2] = $5 + 10;
                          $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
                          HEAP32[$5 + 32 >> 2] = 1065353216;
                          HEAP32[$5 + 36 >> 2] = 0;
                          HEAP32[$5 + 24 >> 2] = 1073741824;
                          HEAP32[$5 + 28 >> 2] = 1077936128;
                          HEAPF32[$5 + 20 >> 2] = $1;
                          HEAP32[$5 + 16 >> 2] = -1077342245;
                          HEAPF32[$5 + 12 >> 2] = $58;
                          HEAPF32[$5 + 8 >> 2] = $24;
                          HEAPF32[$5 + 4 >> 2] = $22;
                          HEAP32[$5 >> 2] = 1073741824;
                         }
                         $27 = 0;
                         if (($14 | 0) == 1) {
                          break block26
                         }
                         $1 = Math_fround(-1.0);
                         $10 = Math_fround(0.0);
                         $15 = Math_fround(0.0);
                         break block27;
                        }
                        block29 : {
                         $27 = ($14 | 0) == 2;
                         if (!($50 & $27)) {
                          if (($14 | 0) == 3) {
                           break block29
                          }
                          $10 = Math_fround(0.0);
                          $1 = Math_fround(5.0);
                          $15 = Math_fround(5.0);
                          break block27;
                         }
                         $10 = Math_fround(0.0);
                         $1 = Math_fround(5.0);
                         $27 = 1;
                         $15 = Math_fround(5.0);
                         if (HEAP32[$4 + 8 >> 2]) {
                          break block27
                         }
                         $15 = Math_fround(1.0);
                         $6 = HEAP32[$4 + 44 >> 2];
                         $5 = $30 + $6 | 0;
                         $12 = HEAP32[$4 + 40 >> 2];
                         $8 = $32 + $12 | 0;
                         $5 = $8 >>> 0 < $32 >>> 0 ? $5 + 1 | 0 : $5;
                         block31 : {
                          $9 = $8;
                          $8 = ($5 | 0) == ($6 | 0) & $8 >>> 0 < $12 >>> 0 | $5 >>> 0 < $6 >>> 0;
                          $6 = $8 ? -1 : $9;
                          $12 = $6 - $20 | 0;
                          $5 = $8 ? -1 : $5;
                          $8 = $5 - (($6 >>> 0 < $20 >>> 0) + $18 | 0) | 0;
                          $5 = ($8 | 0) == ($5 | 0) & $6 >>> 0 < $12 >>> 0 | $5 >>> 0 < $8 >>> 0;
                          $2 = Math_fround(Math_fround(+(($5 ? 0 : $12) >>> 0) + +(($5 ? 0 : $8) >>> 0) * 4294967296.0) / $59);
                          if ($2 > Math_fround(1.0)) {
                           break block31
                          }
                          $15 = $2;
                          if ($2 > Math_fround(0.0)) {
                           break block31
                          }
                          $15 = Math_fround(5.0);
                          break block27;
                         }
                         $5 = HEAP32[$0 + 536 >> 2];
                         if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
                          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $5, 10, 4, 4);
                          $5 = HEAP32[$0 + 536 >> 2];
                         }
                         HEAP32[$0 + 536 >> 2] = $5 + 10;
                         $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
                         HEAP32[$5 + 32 >> 2] = 1063675494;
                         HEAP32[$5 + 36 >> 2] = 0;
                         HEAP32[$5 + 24 >> 2] = 1084227584;
                         HEAP32[$5 + 28 >> 2] = 1077936128;
                         HEAPF32[$5 + 20 >> 2] = Math_fround($15 * Math_fround(6.2831854820251465)) + Math_fround(-1.5707963705062866);
                         HEAP32[$5 + 16 >> 2] = -1077342245;
                         HEAPF32[$5 + 12 >> 2] = $57;
                         HEAPF32[$5 + 8 >> 2] = $24;
                         HEAPF32[$5 + 4 >> 2] = $22;
                         HEAP32[$5 >> 2] = 1073741824;
                         $15 = Math_fround(5.0);
                         break block27;
                        }
                        $27 = 0;
                        $10 = Math_fround(1.0);
                        $1 = Math_fround(2.0);
                        $2 = Math_fround(4.0);
                        $15 = Math_fround(2.0);
                        $6 = HEAP32[$0 + 536 >> 2];
                        if (HEAP32[$0 + 528 >> 2] - $6 >>> 0 < 10) {
                         break block33
                        }
                        break block34;
                       }
                       $1 = Math_fround(1.0);
                       $10 = Math_fround(1.0);
                       $15 = Math_fround(2.0);
                      }
                      $2 = Math_fround((HEAP32[$4 + 156 >> 2] & 7) + 10 >>> 0);
                      $6 = HEAP32[$0 + 536 >> 2];
                      if (HEAP32[$0 + 528 >> 2] - $6 >>> 0 > 9) {
                       break block34
                      }
                     }
                     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $6, 10, 4, 4);
                     $6 = HEAP32[$0 + 536 >> 2];
                    }
                    $5 = HEAP32[$0 + 532 >> 2] + ($6 << 2) | 0;
                    HEAP32[$5 + 36 >> 2] = 0;
                    HEAPF32[$5 + 32 >> 2] = $10;
                    HEAP32[$5 + 28 >> 2] = 1065353216;
                    HEAPF32[$5 + 24 >> 2] = $15;
                    HEAPF32[$5 + 20 >> 2] = $1;
                    HEAPF32[$5 + 16 >> 2] = $2;
                    HEAPF32[$5 + 12 >> 2] = $21;
                    HEAPF32[$5 + 8 >> 2] = $24;
                    HEAPF32[$5 + 4 >> 2] = $22;
                    HEAP32[$5 >> 2] = 1065353216;
                    $5 = $6 + 10 | 0;
                    HEAP32[$0 + 536 >> 2] = $5;
                    block36 : {
                     if (!HEAP32[$4 + 168 >> 2]) {
                      $8 = $5;
                      break block36;
                     }
                     if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
                      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $5, 10, 4, 4);
                      $5 = HEAP32[$0 + 536 >> 2];
                     }
                     $8 = $5 + 10 | 0;
                     HEAP32[$0 + 536 >> 2] = $8;
                     $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
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
                     if (HEAP32[$0 + 528 >> 2] - $8 >>> 0 > 9) {
                      $5 = $8
                     } else {
                      _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $8, 10, 4, 4);
                      $5 = HEAP32[$0 + 536 >> 2];
                     }
                     $8 = $5 + 10 | 0;
                     HEAP32[$0 + 536 >> 2] = $8;
                     $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
                     HEAP32[$5 + 32 >> 2] = 0;
                     HEAP32[$5 + 36 >> 2] = 0;
                     HEAP32[$5 + 24 >> 2] = 1073741824;
                     HEAP32[$5 + 28 >> 2] = 1063675494;
                     HEAP32[$5 + 16 >> 2] = -1082130432;
                     HEAP32[$5 + 20 >> 2] = 1065353216;
                     HEAPF32[$5 + 12 >> 2] = $49;
                     HEAPF32[$5 + 8 >> 2] = $24;
                     HEAPF32[$5 + 4 >> 2] = $22;
                     HEAP32[$5 >> 2] = 1065353216;
                    }
                    $5 = 10;
                    $12 = HEAP32[$4 + 156 >> 2];
                    $6 = $12;
                    if ($6 >>> 0 >= 1e3) {
                     while (1) {
                      $7 = $6;
                      $6 = ($6 >>> 0) / 1e4 | 0;
                      $9 = ($11 + 40 | 0) + $5 | 0;
                      $26 = $9 - 4 | 0;
                      $55 = $7 - Math_imul($6, 1e4) | 0;
                      $56 = (($55 & 65535) >>> 0) / 100 | 0;
                      $47 = $56 << 1;
                      $47 = HEAPU8[$47 + 1052066 | 0] | HEAPU8[$47 + 1052067 | 0] << 8;
                      HEAP8[$26 | 0] = $47;
                      HEAP8[$26 + 1 | 0] = $47 >>> 8;
                      $9 = $9 - 2 | 0;
                      $26 = ($55 - Math_imul($56, 100) & 65535) << 1;
                      $26 = HEAPU8[$26 + 1052066 | 0] | HEAPU8[$26 + 1052067 | 0] << 8;
                      HEAP8[$9 | 0] = $26;
                      HEAP8[$9 + 1 | 0] = $26 >>> 8;
                      $5 = $5 - 4 | 0;
                      if ($7 >>> 0 > 9999999) {
                       continue
                      }
                      break;
                     }
                    }
                    block43 : {
                     if ($6 >>> 0 <= 9) {
                      $7 = $6;
                      break block43;
                     }
                     $5 = $5 - 2 | 0;
                     $9 = $5 + ($11 + 40 | 0) | 0;
                     $7 = (($6 & 65535) >>> 0) / 100 | 0;
                     $6 = ($6 - Math_imul($7, 100) & 65535) << 1;
                     $6 = HEAPU8[$6 + 1052066 | 0] | HEAPU8[$6 + 1052067 | 0] << 8;
                     HEAP8[$9 | 0] = $6;
                     HEAP8[$9 + 1 | 0] = $6 >>> 8;
                    }
                    block50 : {
                     block47 : {
                      block46 : {
                       if (!(!$7 & ($12 | 0) != 0)) {
                        $9 = $5 - 1 | 0;
                        $6 = $9 + ($11 + 40 | 0) | 0;
                        HEAP8[$6 | 0] = HEAPU8[($7 << 1) + 1052067 | 0];
                        $7 = 11 - $5 | 0;
                        break block46;
                       }
                       $7 = 10 - $5 | 0;
                       if (($5 | 0) == 10) {
                        break block47
                       }
                       $6 = ($11 + 40 | 0) + $5 | 0;
                       $9 = $5;
                      }
                      $12 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
                      if (!$12) {
                       break folding_inner0
                      }
                      $8 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($12, $6, $7);
                      $6 = HEAP32[$0 + 548 >> 2];
                      $5 = $6;
                      if ($7 >>> 0 > HEAP32[$0 + 540 >> 2] - $5 >>> 0) {
                       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($33, $5, $7, 1, 1);
                       $5 = HEAP32[$0 + 548 >> 2];
                      }
                      _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 544 >> 2] + $5 | 0, $8, $7);
                      $8 = HEAP32[$0 + 536 >> 2];
                      break block50;
                     }
                     $12 = 1;
                     $9 = 10;
                     $6 = HEAP32[$0 + 548 >> 2];
                     $5 = $6;
                    }
                    HEAP32[$0 + 548 >> 2] = $5 + $7;
                    if (HEAP32[$0 + 528 >> 2] - $8 >>> 0 <= 9) {
                     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $8, 10, 4, 4);
                     $8 = HEAP32[$0 + 536 >> 2];
                    }
                    HEAP32[$0 + 536 >> 2] = $8 + 10;
                    $5 = HEAP32[$0 + 532 >> 2] + ($8 << 2) | 0;
                    HEAP32[$5 + 32 >> 2] = 1065353216;
                    HEAP32[$5 + 36 >> 2] = 1065353216;
                    HEAPF32[$5 + 28 >> 2] = $7 >>> 0;
                    HEAPF32[$5 + 24 >> 2] = $6 >>> 0;
                    HEAP32[$5 + 20 >> 2] = 1065353216;
                    HEAPF32[$5 + 16 >> 2] = ($14 | 0) == 3 ? Math_fround(2.0) : Math_fround(18.0);
                    HEAPF32[$5 + 12 >> 2] = $42;
                    HEAPF32[$5 + 8 >> 2] = $24;
                    HEAPF32[$5 + 4 >> 2] = $22;
                    HEAP32[$5 >> 2] = 1084227584;
                    if (($9 | 0) != 10) {
                     $6 = HEAP32[$12 - 4 >> 2];
                     $5 = $6 & -8;
                     $6 = $6 & 3;
                     if ($5 >>> 0 < ($6 ? 4 : 8) + $7 >>> 0) {
                      break folding_inner1
                     }
                     if (($6 | 0) != 0 & $5 >>> 0 > 49 - $9 >>> 0) {
                      break folding_inner2
                     }
                     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($12);
                    }
                    block56 : {
                     if ($16 >>> 0 > 9) {
                      break block56
                     }
                     if (($14 | 0) != 1) {
                      break block56
                     }
                     $8 = $34 + 1 | 0;
                     $5 = 0;
                     $9 = 0;
                     while (1) {
                      $6 = $5 >>> 0 > $16 >>> 0 ? $5 : $16;
                      while (1) {
                       $7 = $5;
                       if (($6 | 0) == ($5 | 0)) {
                        break block56
                       }
                       $5 = $5 + 1 | 0;
                       if (($8 | 0) == ($5 | 0)) {
                        continue
                       }
                       break;
                      };
                      $1 = Math_fround(Math_fround(Math_fround(Math_fround($9 | 0) / $46) * Math_fround(1.5707963705062866)) + Math_fround(.7853981852531433));
                      $2 = Math_fround($24 + Math_fround($31 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4sinf($1)));
                      $10 = Math_fround($22 + Math_fround($31 * _RNvNtNtCsaT5yz1Yhfyz_17compiler_builtins4math20partial_availability4cosf($1)));
                      block61 : {
                       block60 : {
                        block59 : {
                         block58 : {
                          if (HEAPU32[$4 + 76 >> 2] <= $7 >>> 0) {
                           $6 = HEAP32[$0 + 536 >> 2];
                           break block58;
                          }
                          $6 = HEAP32[$0 + 536 >> 2];
                          if (HEAPU8[$7 + HEAP32[$4 + 72 >> 2] | 0]) {
                           break block59
                          }
                         }
                         $1 = Math_fround(-1.0);
                         if (HEAP32[$0 + 528 >> 2] - $6 >>> 0 < 10) {
                          break block60
                         }
                         break block61;
                        }
                        $1 = Math_fround(18.0);
                        if (HEAP32[$0 + 528 >> 2] - $6 >>> 0 > 9) {
                         break block61
                        }
                       }
                       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $6, 10, 4, 4);
                       $6 = HEAP32[$0 + 536 >> 2];
                      }
                      $7 = HEAP32[$0 + 532 >> 2] + ($6 << 2) | 0;
                      HEAP32[$7 + 36 >> 2] = 0;
                      HEAP32[$7 + 28 >> 2] = 1065353216;
                      HEAP32[$7 + 32 >> 2] = 0;
                      HEAP32[$7 + 20 >> 2] = 1099956224;
                      HEAP32[$7 + 24 >> 2] = 1065353216;
                      HEAPF32[$7 + 16 >> 2] = $1;
                      HEAPF32[$7 + 12 >> 2] = $35;
                      HEAPF32[$7 + 8 >> 2] = $2;
                      HEAPF32[$7 + 4 >> 2] = $10;
                      HEAP32[$7 >> 2] = 1065353216;
                      HEAP32[$0 + 536 >> 2] = $6 + 10;
                      $9 = $9 + 1 | 0;
                      continue;
                     };
                    }
                    $1 = Math_fround(Math_fround($22 - $40) / $36);
                    $9 = $1 < Math_fround(-.3499999940395355);
                    $26 = $1 > Math_fround(.3499999940395355);
                    $2 = Math_fround($21 + ($26 ? Math_fround(17.0) : $9 ? Math_fround(17.0) : Math_fround(18.0)));
                    $5 = 1;
                    block62 : {
                     block65 : {
                      switch ($14 - 1 | 0) {
                      case 0:
                       $14 = 9;
                       $5 = 1054464;
                       break block62;
                      case 1:
                       $5 = HEAP32[$4 + 8 >> 2];
                       $14 = $5 ? 15 : 10;
                       $5 = $5 ? 1054473 : 1054488;
                       break block62;
                      case 2:
                       break block65;
                      default:
                       break block62;
                      };
                     }
                     $14 = 8;
                     $5 = 1054498;
                    }
                    HEAP32[$11 + 16 >> 2] = $14;
                    HEAP32[$11 + 12 >> 2] = $5;
                    HEAP32[$11 + 60 >> 2] = $34 + 1;
                    HEAP32[$11 + 48 >> 2] = $37;
                    HEAP32[$11 + 52 >> 2] = 7;
                    HEAP32[$11 + 40 >> 2] = $54;
                    HEAP32[$11 + 44 >> 2] = 3;
                    _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($11 + 24 | 0, 1048600, $11 + 40 | 0);
                    $8 = HEAP32[$11 + 24 >> 2];
                    $12 = HEAP32[$11 + 28 >> 2];
                    $7 = HEAP32[$11 + 32 >> 2];
                    $6 = HEAP32[$0 + 548 >> 2];
                    block68 : {
                     block67 : {
                      if ($7 >>> 0 > HEAP32[$0 + 540 >> 2] - $6 >>> 0) {
                       _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($33, $6, $7, 1, 1);
                       $5 = HEAP32[$0 + 548 >> 2];
                       break block67;
                      }
                      $5 = $6;
                      if (!$7) {
                       break block68
                      }
                     }
                     _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 544 >> 2] + $5 | 0, $12, $7);
                    }
                    HEAP32[$0 + 548 >> 2] = $5 + $7;
                    $5 = HEAP32[$0 + 536 >> 2];
                    if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
                     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($13, $5, 10, 4, 4);
                     $5 = HEAP32[$0 + 536 >> 2];
                    }
                    HEAP32[$0 + 536 >> 2] = $5 + 10;
                    $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
                    HEAP32[$5 + 36 >> 2] = 1065353216;
                    HEAPF32[$5 + 32 >> 2] = $27 >>> 0;
                    HEAPF32[$5 + 28 >> 2] = $7 >>> 0;
                    HEAPF32[$5 + 24 >> 2] = $6 >>> 0;
                    HEAPF32[$5 + 20 >> 2] = $26 ? Math_fround(0.0) : $9 ? Math_fround(2.0) : Math_fround(1.0);
                    HEAPF32[$5 + 16 >> 2] = $27 ? Math_fround(5.0) : Math_fround(2.0);
                    HEAP32[$5 + 12 >> 2] = 1094713344;
                    HEAPF32[$5 + 8 >> 2] = $24 + Math_fround(Math_fround(Math_fround($24 - $39) / $36) * $2);
                    HEAPF32[$5 + 4 >> 2] = $22 + Math_fround($1 * $2);
                    HEAP32[$5 >> 2] = 1084227584;
                    if (!$8) {
                     break block21
                    }
                    $6 = HEAP32[$12 - 4 >> 2];
                    $5 = $6 & -8;
                    $6 = $6 & 3;
                    if ($5 >>> 0 < $8 + ($6 ? 4 : 8) >>> 0) {
                     break folding_inner1
                    }
                    if (!(($6 | 0) != 0 & $5 >>> 0 > $8 + 39 >>> 0)) {
                     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($12);
                     break block21;
                    }
                    break folding_inner2;
                   }
                   $4 = $4 + 176 | 0;
                   if (($23 | 0) != ($4 | 0)) {
                    continue
                   }
                   break;
                  };
                  break block10;
                 }
                 $15 = Math_fround(9.0);
                }
                $31 = HEAPU8[$5 + 60 | 0] ? Math_fround(.30000001192092896) : Math_fround(1.0);
                break block73;
               }
               $31 = HEAPU8[$5 + 60 | 0] ? Math_fround(.30000001192092896) : Math_fround(1.0);
               $15 = Math_fround(8.0);
               if (($19 | 0) != 2) {
                break block73
               }
               $25 = Math_fround(8.0);
               $1 = HEAP32[$5 + 8 >> 2] ? $53 : $29;
               if (!$6) {
                break block74
               }
               break block75;
              }
              if ($6) {
               break block76
              }
              $25 = $15;
              $1 = $29;
             }
             $2 = Math_fround($22 - $1);
             $10 = Math_fround($36 - $1);
             $1 = Math_fround($1 + $1);
             if (HEAP32[$0 + 528 >> 2] - $8 >>> 0 > 9) {
              $5 = $8
             } else {
              _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($12, $8, 10, 4, 4);
              $5 = HEAP32[$0 + 536 >> 2];
             }
             $8 = $5 + 10 | 0;
             HEAP32[$0 + 536 >> 2] = $8;
             $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
             HEAP32[$5 + 36 >> 2] = 0;
             HEAPF32[$5 + 32 >> 2] = $31;
             HEAP32[$5 + 24 >> 2] = -1082130432;
             HEAP32[$5 + 28 >> 2] = 0;
             HEAPF32[$5 + 20 >> 2] = $25;
             HEAPF32[$5 + 16 >> 2] = $1;
             HEAPF32[$5 + 12 >> 2] = $1;
             HEAPF32[$5 + 8 >> 2] = $2;
             HEAPF32[$5 + 4 >> 2] = $10;
             HEAP32[$5 >> 2] = 1082130432;
             continue label5;
            }
            block79 : {
             if ($19 >>> 0 > 4) {
              break block79
             }
             if (!(1 << $19 & 21)) {
              break block79
             }
             $25 = $15;
             $1 = $29;
             break block75;
            }
            $49 = Math_fround(2.0);
            $25 = Math_fround(0.0);
            $1 = $24;
            $2 = $15;
            $10 = $29;
            if (HEAP32[$0 + 528 >> 2] - $8 >>> 0 <= 9) {
             break block80
            }
            break block81;
           }
           $49 = Math_fround(0.0);
           $15 = Math_fround(-1.0);
           $2 = $25;
           $10 = $1;
           if (HEAP32[$0 + 528 >> 2] - $8 >>> 0 < 10) {
            break block80
           }
           break block81;
          }
          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($12, $8, 10, 4, 4);
          $8 = HEAP32[$0 + 536 >> 2];
         }
         $5 = HEAP32[$0 + 532 >> 2] + ($8 << 2) | 0;
         HEAP32[$5 + 32 >> 2] = 0;
         HEAP32[$5 + 36 >> 2] = 0;
         HEAPF32[$5 + 28 >> 2] = $31;
         HEAPF32[$5 + 24 >> 2] = $49;
         HEAPF32[$5 + 20 >> 2] = $15;
         HEAPF32[$5 + 16 >> 2] = $25;
         HEAPF32[$5 + 12 >> 2] = $1;
         HEAPF32[$5 + 8 >> 2] = $22;
         HEAPF32[$5 + 4 >> 2] = $36;
         HEAP32[$5 >> 2] = 1065353216;
         $5 = $8 + 10 | 0;
         HEAP32[$0 + 536 >> 2] = $5;
         $1 = Math_fround($42 / $46);
         $15 = Math_fround($10 + Math_fround(5.0));
         $25 = Math_fround($22 + Math_fround($1 * $15));
         $35 = Math_fround($35 / $46);
         $15 = Math_fround($36 + Math_fround($35 * $15));
         if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($12, $5, 10, 4, 4);
          $5 = HEAP32[$0 + 536 >> 2];
         }
         $8 = $5 + 10 | 0;
         HEAP32[$0 + 536 >> 2] = $8;
         $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
         HEAP32[$5 + 32 >> 2] = 0;
         HEAP32[$5 + 36 >> 2] = 0;
         HEAPF32[$5 + 28 >> 2] = $31;
         HEAP32[$5 + 24 >> 2] = 1069547520;
         HEAPF32[$5 + 20 >> 2] = $2;
         HEAPF32[$5 + 16 >> 2] = $25;
         HEAPF32[$5 + 12 >> 2] = $15;
         HEAPF32[$5 + 8 >> 2] = $22 + Math_fround($1 * $10);
         HEAPF32[$5 + 4 >> 2] = $36 + Math_fround($35 * $10);
         HEAP32[$5 >> 2] = 1077936128;
         continue label5;
        }
        HEAP32[$0 + 552 >> 2] = HEAP32[$0 + 552 >> 2] + 1;
        continue;
       }
       break;
      };
      break;
     };
     block189 : {
      block83 : {
       if ($43 < Math_fround(40.0)) {
        break block83
       }
       if ($41 < Math_fround(80.0)) {
        break block83
       }
       HEAP32[$11 + 8 >> 2] = $16;
       HEAP32[$11 + 12 >> 2] = 0;
       HEAP32[$11 + 16 >> 2] = 4;
       $8 = 0;
       HEAP32[$11 + 20 >> 2] = 0;
       block95 : {
        block88 : {
         $2 = Math_fround($43 + Math_fround(-22.0));
         $1 = Math_fround(Math_floor(Math_fround($2 / Math_fround(18.0))));
         $1 = $1 != $1 ? Math_fround(1.0) : $1;
         $1 = $1 > Math_fround(1.0) ? $1 : Math_fround(1.0);
         $4 = $1 >= Math_fround(0.0);
         $5 = ~~$1 >>> 0;
         block85 : {
          if ($1 < Math_fround(4294967296.0) & $4) {
           break block85
          }
          $5 = 0;
         }
         $4 = $1 > Math_fround(4294967040.0) ? -1 : $4 ? $5 : 0;
         $13 = $4 >>> 0 >= 12 ? 12 : $4;
         if ($16 >>> 0 > $13 >>> 0) {
          $6 = $17;
          $7 = $19;
          while (1) {
           $5 = $7;
           $12 = $6;
           if (!$6) {
            $14 = 4;
            break block88;
           }
           $6 = $12 - 176 | 0;
           $7 = $5 + 176 | 0;
           if (HEAPU8[$5 + 173 | 0] != 2) {
            continue
           }
           break;
          };
          block89 : {
           if (($7 | 0) == ($23 | 0)) {
            break block89
           }
           $8 = $23 - $7 | 0;
           $14 = ($8 >>> 0) / 176 | 0;
           $9 = HEAP32[$5 + 156 >> 2];
           $4 = 0;
           if ($8 - 176 >>> 0 >= 176) {
            $14 = $14 & 1;
            $20 = ($6 >>> 0) / 352 << 1;
            $6 = $7;
            while (1) {
             if (HEAPU8[$6 + 173 | 0] == 2) {
              $18 = HEAP32[$6 + 156 >> 2];
              $8 = $18 >>> 0 < $9 >>> 0;
              $9 = $8 ? $9 : $18;
              $5 = $8 ? $5 : $6;
             }
             if (HEAPU8[$6 + 349 | 0] == 2) {
              $18 = HEAP32[$6 + 332 >> 2];
              $8 = $18 >>> 0 < $9 >>> 0;
              $9 = $8 ? $9 : $18;
              $5 = $8 ? $5 : $6 + 176 | 0;
             }
             $6 = $6 + 352 | 0;
             $4 = $4 + 2 | 0;
             if (($20 | 0) != ($4 | 0)) {
              continue
             }
             break;
            };
            if (!$14) {
             break block89
            }
           }
           $4 = Math_imul($4, 176) + $7 | 0;
           if (HEAPU8[$4 + 173 | 0] != 2) {
            break block89
           }
           $5 = HEAPU32[$4 + 156 >> 2] < $9 >>> 0 ? $5 : $4;
          }
          $4 = HEAP32[$5 + 152 >> 2];
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($11 + 12 | 0);
          $14 = HEAP32[$11 + 16 >> 2];
          HEAP32[$14 >> 2] = $4;
          $8 = 1;
          HEAP32[$11 + 20 >> 2] = 1;
          break block88;
         }
         $14 = 4;
         block93 : {
          if (!$16) {
           break block93
          }
          $5 = 0;
          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($11 + 12 | 0, 0, $16, 4, 4);
          $6 = $16 & 3;
          $14 = HEAP32[$11 + 16 >> 2];
          $8 = HEAP32[$11 + 20 >> 2];
          if ($16 >>> 0 >= 4) {
           $4 = $16 & 16777212;
           $7 = ($8 << 2) + $14 | 0;
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
           $8 = $5 + $8 | 0;
           if (!$6) {
            break block93
           }
          }
          $4 = $6 + $8 | 0;
          $7 = ($8 << 2) + $14 | 0;
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
          $8 = $4;
         }
         HEAP32[$11 + 20 >> 2] = $8;
         break block95;
        }
        block96 : {
         if (($3 | 0) < 0) {
          break block96
         }
         if (HEAP32[$14 >> 2] == ($3 | 0) ? $12 : 0) {
          break block96
         }
         if (HEAPU32[$11 + 8 >> 2] <= $3 >>> 0) {
          break block96
         }
         if (($8 | 0) == HEAP32[$11 + 12 >> 2]) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($11 + 12 | 0);
          $14 = HEAP32[$11 + 16 >> 2];
         }
         HEAP32[$14 + ($8 << 2) >> 2] = $3;
         $8 = $8 + 1 | 0;
         HEAP32[$11 + 20 >> 2] = $8;
         $14 = HEAP32[$11 + 16 >> 2];
        }
        block100 : {
         if ($8 >>> 0 >= $13 >>> 0) {
          break block100
         }
         $9 = HEAP32[$11 + 8 >> 2];
         if (!$9) {
          break block100
         }
         $6 = 0;
         while (1) {
          $4 = $8 << 2;
          $5 = 0;
          block102 : {
           while (1) {
            if (($4 | 0) != ($5 | 0)) {
             $7 = $5 + $14 | 0;
             $5 = $5 + 4 | 0;
             if (HEAP32[$7 >> 2] != ($6 | 0)) {
              continue
             }
             break block102;
            }
            break;
           };
           if (($8 | 0) == HEAP32[$11 + 12 >> 2]) {
            _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($11 + 12 | 0);
            $14 = HEAP32[$11 + 16 >> 2];
           }
           HEAP32[$4 + $14 >> 2] = $6;
           $8 = $8 + 1 | 0;
           HEAP32[$11 + 20 >> 2] = $8;
           $9 = HEAP32[$11 + 8 >> 2];
          }
          if ($8 >>> 0 < $13 >>> 0) {
           $6 = $6 + 1 | 0;
           if ($6 >>> 0 < $9 >>> 0) {
            continue
           }
          }
          break;
         };
         $14 = HEAP32[$11 + 16 >> 2];
        }
        if ($8 >>> 0 < 2) {
         break block95
        }
        if ($8 >>> 0 >= 21) {
         _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortmNvYmNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($14, $8);
         break block95;
        }
        $9 = $14 + 4 | 0;
        $6 = ($8 << 2) + $14 | 0;
        $13 = 0;
        while (1) {
         $7 = HEAP32[$9 - 4 >> 2];
         $4 = HEAP32[$9 >> 2];
         if ($7 >>> 0 > $4 >>> 0) {
          $5 = $13;
          block108 : {
           while (1) {
            HEAP32[($5 + $14 | 0) + 4 >> 2] = $7;
            $7 = $14;
            if (!$5) {
             break block108
            }
            $5 = $5 - 4 | 0;
            $12 = $14 + $5 | 0;
            $7 = HEAP32[$12 >> 2];
            if ($4 >>> 0 < $7 >>> 0) {
             continue
            }
            break;
           };
           $7 = $12 + 4 | 0;
          }
          HEAP32[$7 >> 2] = $4;
         }
         $13 = $13 + 4 | 0;
         $9 = $9 + 4 | 0;
         if (($6 | 0) != ($9 | 0)) {
          continue
         }
         break;
        };
       }
       $1 = Math_fround($2 / Math_fround($8 >>> 0));
       $1 = $1 < Math_fround(16.0) ? Math_fround(16.0) : $1;
       $10 = $1 > Math_fround(34.0) ? Math_fround(34.0) : $1;
       $1 = Math_fround($10 * Math_fround(.9200000166893005));
       $1 = $1 != $1 ? Math_fround(14.0) : $1;
       $1 = $1 > Math_fround(14.0) ? $1 : Math_fround(14.0);
       $2 = Math_fround(Math_floor(Math_fround(Math_fround($41 + Math_fround(-64.0)) / $1)));
       $12 = $2 >= Math_fround(0.0);
       $20 = ~~$2 >>> 0;
       block110 : {
        if ($2 < Math_fround(4294967296.0) & $12) {
         break block110
        }
        $20 = 0;
       }
       $4 = 0;
       $9 = $8 << 2;
       $5 = 0;
       block131 : {
        block130 : {
         block112 : {
          block113 : {
           block111 : {
            if (!$8) {
             break block111
            }
            $5 = HEAP32[$14 >> 2];
            if ($5 >>> 0 >= $16 >>> 0) {
             break block112
            }
            $5 = HEAP32[(Math_imul($5, 176) + $19 | 0) + 64 >> 2];
            if (($8 | 0) == 1) {
             break block111
            }
            $7 = $14 + 4 | 0;
            $6 = $9 - 4 >>> 2 | 0;
            while (1) {
             $13 = HEAP32[$7 >> 2];
             if ($13 >>> 0 >= $16 >>> 0) {
              break block113
             }
             $13 = HEAP32[(Math_imul($13, 176) + $19 | 0) + 64 >> 2];
             $5 = $5 >>> 0 > $13 >>> 0 ? $5 : $13;
             $7 = $7 + 4 | 0;
             $6 = $6 - 1 | 0;
             if ($6) {
              continue
             }
             break;
            };
           }
           $54 = $9 + $14 | 0;
           $6 = $2 > Math_fround(4294967040.0) ? -1 : $12 ? $20 : 0;
           $27 = $6 >>> 0 <= 1 ? 1 : $6;
           $20 = $5 >>> 0 <= $27 >>> 0 ? 1 : ($5 - $27 | 0) + 1 | 0;
           $16 = $1 >= Math_fround(22.0);
           $18 = $16 ? 1 : 5;
           $2 = Math_fround($38 + Math_fround(8.0));
           $15 = Math_fround($1 * Math_fround(.5));
           $28 = Math_fround($38 + Math_fround(20.0));
           $25 = Math_fround($44 + Math_fround(64.0));
           $32 = $0 + 540 | 0;
           $34 = $0 + 528 | 0;
           block129 : {
            while (1) {
             $12 = $4 + $20 | 0;
             block115 : {
              if (!(($12 >>> 0) % ($18 >>> 0) | 0 ? $16 : 1)) {
               break block115
              }
              $5 = 10;
              $6 = $12;
              if ($6 >>> 0 >= 1e3) {
               while (1) {
                $7 = $6;
                $6 = ($6 >>> 0) / 1e4 | 0;
                $9 = ($11 + 40 | 0) + $5 | 0;
                $13 = $9 - 4 | 0;
                $33 = $7 - Math_imul($6, 1e4) | 0;
                $37 = (($33 & 65535) >>> 0) / 100 | 0;
                $30 = $37 << 1;
                $30 = HEAPU8[$30 + 1052066 | 0] | HEAPU8[$30 + 1052067 | 0] << 8;
                HEAP8[$13 | 0] = $30;
                HEAP8[$13 + 1 | 0] = $30 >>> 8;
                $9 = $9 - 2 | 0;
                $13 = ($33 - Math_imul($37, 100) & 65535) << 1;
                $13 = HEAPU8[$13 + 1052066 | 0] | HEAPU8[$13 + 1052067 | 0] << 8;
                HEAP8[$9 | 0] = $13;
                HEAP8[$9 + 1 | 0] = $13 >>> 8;
                $5 = $5 - 4 | 0;
                if ($7 >>> 0 > 9999999) {
                 continue
                }
                break;
               }
              }
              block118 : {
               if ($6 >>> 0 <= 9) {
                $7 = $6;
                break block118;
               }
               $5 = $5 - 2 | 0;
               $9 = $5 + ($11 + 40 | 0) | 0;
               $7 = (($6 & 65535) >>> 0) / 100 | 0;
               $6 = ($6 - Math_imul($7, 100) & 65535) << 1;
               $6 = HEAPU8[$6 + 1052066 | 0] | HEAPU8[$6 + 1052067 | 0] << 8;
               HEAP8[$9 | 0] = $6;
               HEAP8[$9 + 1 | 0] = $6 >>> 8;
              }
              block125 : {
               block122 : {
                block121 : {
                 if (!(!$7 & ($12 | 0) != 0)) {
                  $9 = $5 - 1 | 0;
                  $6 = $9 + ($11 + 40 | 0) | 0;
                  HEAP8[$6 | 0] = HEAPU8[($7 << 1) + 1052067 | 0];
                  $7 = 11 - $5 | 0;
                  $13 = ($9 | 0) == 10;
                  break block121;
                 }
                 $7 = 10 - $5 | 0;
                 if (($5 | 0) == 10) {
                  break block122
                 }
                 $6 = ($11 + 40 | 0) + $5 | 0;
                 $9 = $5;
                 $13 = 0;
                }
                $12 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
                if (!$12) {
                 break folding_inner0
                }
                $33 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($12, $6, $7);
                $6 = HEAP32[$0 + 548 >> 2];
                $5 = $6;
                if ($7 >>> 0 > HEAP32[$0 + 540 >> 2] - $5 >>> 0) {
                 _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($32, $5, $7, 1, 1);
                 $5 = HEAP32[$0 + 548 >> 2];
                }
                _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 544 >> 2] + $5 | 0, $33, $7);
                $9 = 49 - $9 | 0;
                break block125;
               }
               $12 = 1;
               $13 = 1;
               $6 = HEAP32[$0 + 548 >> 2];
               $5 = $6;
               $9 = 39;
              }
              HEAP32[$0 + 548 >> 2] = $5 + $7;
              $5 = HEAP32[$0 + 536 >> 2];
              if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
               _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($34, $5, 10, 4, 4);
               $5 = HEAP32[$0 + 536 >> 2];
              }
              HEAP32[$0 + 536 >> 2] = $5 + 10;
              $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
              HEAP32[$5 + 32 >> 2] = 0;
              HEAP32[$5 + 36 >> 2] = 1065353216;
              HEAPF32[$5 + 28 >> 2] = $7 >>> 0;
              HEAPF32[$5 + 24 >> 2] = $6 >>> 0;
              HEAP32[$5 + 20 >> 2] = 1065353216;
              HEAP32[$5 + 12 >> 2] = 1092616192;
              HEAP32[$5 + 16 >> 2] = 1073741824;
              HEAPF32[$5 + 8 >> 2] = $2;
              HEAPF32[$5 + 4 >> 2] = $15 + Math_fround($25 + Math_fround($1 * Math_fround($4 >>> 0)));
              HEAP32[$5 >> 2] = 1084227584;
              if ($13) {
               break block115
              }
              $6 = HEAP32[$12 - 4 >> 2];
              $5 = $6 & -8;
              $6 = $6 & 3;
              if ($5 >>> 0 < ($6 ? 4 : 8) + $7 >>> 0) {
               break folding_inner1
              }
              if (($6 | 0) != 0 & $5 >>> 0 > $9 >>> 0) {
               break block129
              }
              _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($12);
             }
             $4 = $4 + 1 | 0;
             if (($27 | 0) != ($4 | 0)) {
              continue
             }
             break;
            };
            if (HEAPU32[$11 + 8 >> 2] > $8 >>> 0) {
             break block130
            }
            break block131;
           }
           break folding_inner2;
          }
          _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($13, $16, 1054384);
          wasm2js_trap();
         }
         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, $16, 1054384);
         wasm2js_trap();
        }
        HEAP32[$11 + 60 >> 2] = $8;
        HEAP32[$11 + 48 >> 2] = $11 + 8;
        HEAP32[$11 + 52 >> 2] = 3;
        HEAP32[$11 + 40 >> 2] = $11 + 60;
        HEAP32[$11 + 44 >> 2] = 3;
        _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($11 + 24 | 0, 1049257, $11 + 40 | 0);
        $7 = HEAP32[$11 + 24 >> 2];
        $12 = HEAP32[$11 + 28 >> 2];
        $6 = HEAP32[$11 + 32 >> 2];
        $4 = HEAP32[$0 + 548 >> 2];
        block134 : {
         block133 : {
          if ($6 >>> 0 > HEAP32[$0 + 540 >> 2] - $4 >>> 0) {
           _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 540 | 0, $4, $6, 1, 1);
           $5 = HEAP32[$0 + 548 >> 2];
           break block133;
          }
          $5 = $4;
          if (!$6) {
           break block134
          }
         }
         _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 544 >> 2] + $5 | 0, $12, $6);
        }
        HEAP32[$0 + 548 >> 2] = $5 + $6;
        $5 = HEAP32[$0 + 536 >> 2];
        if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
         _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 528 | 0, $5, 10, 4, 4);
         $5 = HEAP32[$0 + 536 >> 2];
        }
        HEAP32[$0 + 536 >> 2] = $5 + 10;
        $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
        HEAP32[$5 + 32 >> 2] = 0;
        HEAP32[$5 + 36 >> 2] = 1065353216;
        HEAPF32[$5 + 28 >> 2] = $6 >>> 0;
        HEAPF32[$5 + 24 >> 2] = $4 >>> 0;
        HEAP32[$5 + 20 >> 2] = 0;
        HEAP32[$5 + 12 >> 2] = 1092616192;
        HEAP32[$5 + 16 >> 2] = 1073741824;
        HEAPF32[$5 + 8 >> 2] = $2;
        HEAPF32[$5 + 4 >> 2] = $44;
        HEAP32[$5 >> 2] = 1084227584;
        if (!$7) {
         break block131
        }
        $5 = HEAP32[$12 - 4 >> 2];
        $4 = $5 & -8;
        $5 = $5 & 3;
        if ($4 >>> 0 < $7 + ($5 ? 4 : 8) >>> 0) {
         break folding_inner1
        }
        if (($5 | 0) != 0 & $4 >>> 0 > $7 + 39 >>> 0) {
         break folding_inner2
        }
        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($12);
       }
       $5 = $19;
       block140 : {
        while (1) {
         $16 = $5;
         if (!$17) {
          $16 = 0;
          break block140;
         }
         $17 = $17 - 176 | 0;
         $5 = $16 + 176 | 0;
         if (HEAPU8[$16 + 173 | 0] != 2) {
          continue
         }
         break;
        };
        if (($5 | 0) == ($23 | 0)) {
         break block140
        }
        $4 = $23 - $5 | 0;
        $7 = ($4 >>> 0) / 176 | 0;
        $6 = HEAP32[$16 + 156 >> 2];
        $12 = 0;
        if ($4 - 176 >>> 0 >= 176) {
         $4 = $7 & 1;
         $9 = ($17 >>> 0) / 352 << 1;
         $7 = $5;
         while (1) {
          if (HEAPU8[$7 + 173 | 0] == 2) {
           $13 = HEAP32[$7 + 156 >> 2];
           $17 = $13 >>> 0 < $6 >>> 0;
           $16 = $17 ? $16 : $7;
           $6 = $17 ? $6 : $13;
          }
          if (HEAPU8[$7 + 349 | 0] == 2) {
           $13 = HEAP32[$7 + 332 >> 2];
           $17 = $13 >>> 0 < $6 >>> 0;
           $16 = $17 ? $16 : $7 + 176 | 0;
           $6 = $17 ? $6 : $13;
          }
          $7 = $7 + 352 | 0;
          $12 = $12 + 2 | 0;
          if (($9 | 0) != ($12 | 0)) {
           continue
          }
          break;
         };
         if (!$4) {
          break block140
         }
        }
        $4 = Math_imul($12, 176) + $5 | 0;
        if (HEAPU8[$4 + 173 | 0] != 2) {
         break block140
        }
        $16 = HEAPU32[$4 + 156 >> 2] < $6 >>> 0 ? $16 : $4;
       }
       if ($8) {
        $2 = Math_fround($10 * Math_fround(.41999998688697815));
        $2 = $2 != $2 ? Math_fround(12.0) : $2;
        $39 = $2 < Math_fround(12.0) ? $2 : Math_fround(12.0);
        $33 = $20 + $27 | 0;
        $29 = Math_fround($10 + Math_fround(-4.0));
        $24 = Math_fround($1 + Math_fround(-4.0));
        $40 = Math_fround($10 * Math_fround(.5));
        $41 = Math_fround($41 + Math_fround(8.0));
        $36 = Math_fround($44 + Math_fround(-4.0));
        $30 = $11 + 60 | 0;
        $18 = $0 + 528 | 0;
        $32 = $0 + 540 | 0;
        $8 = $14;
        $34 = 0;
        while (1) {
         block150 : {
          block149 : {
           block148 : {
            $17 = HEAP32[$8 >> 2];
            $4 = HEAP32[$11 + 8 >> 2];
            if ($17 >>> 0 < $4 >>> 0) {
             $23 = Math_imul($17, 176) + $19 | 0;
             $21 = Math_fround($28 + Math_fround($10 * Math_fround($34 >>> 0)));
             block146 : {
              if (($3 | 0) < 0) {
               break block146
              }
              if (($3 | 0) != ($17 | 0)) {
               break block146
              }
              $5 = HEAP32[$0 + 536 >> 2];
              if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
               _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($18, $5, 10, 4, 4);
               $5 = HEAP32[$0 + 536 >> 2];
              }
              HEAP32[$0 + 536 >> 2] = $5 + 10;
              $4 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
              HEAP32[$4 + 36 >> 2] = 0;
              HEAP32[$4 + 28 >> 2] = 0;
              HEAP32[$4 + 32 >> 2] = 1065353216;
              HEAP32[$4 + 20 >> 2] = 1082130432;
              HEAP32[$4 + 24 >> 2] = -1082130432;
              HEAPF32[$4 + 16 >> 2] = $10;
              HEAPF32[$4 + 12 >> 2] = $41;
              HEAPF32[$4 + 8 >> 2] = $21;
              HEAPF32[$4 + 4 >> 2] = $36;
              HEAP32[$4 >> 2] = 1082130432;
             }
             $4 = HEAPU8[$23 + 173 | 0];
             HEAP32[$11 + 60 >> 2] = $17 + 1;
             HEAP32[$11 + 24 >> 2] = $30;
             HEAP32[$11 + 28 >> 2] = 3;
             _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($11 + 40 | 0, 1048605, $11 + 24 | 0);
             $2 = ($4 | 0) == 3 ? Math_fround(2.0) : Math_fround(1.0);
             $9 = ($4 | 0) == 2;
             $7 = HEAP32[$11 + 40 >> 2];
             $12 = HEAP32[$11 + 44 >> 2];
             $6 = HEAP32[$11 + 48 >> 2];
             $4 = HEAP32[$0 + 548 >> 2];
             if ($6 >>> 0 <= HEAP32[$0 + 540 >> 2] - $4 >>> 0) {
              break block148
             }
             _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($32, $4, $6, 1, 1);
             $5 = HEAP32[$0 + 548 >> 2];
             break block149;
            }
            _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($17, $4, 1054416);
            wasm2js_trap();
           }
           $5 = $4;
           if (!$6) {
            break block150
           }
          }
          _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 544 >> 2] + $5 | 0, $12, $6);
         }
         HEAP32[$0 + 548 >> 2] = $5 + $6;
         $5 = HEAP32[$0 + 536 >> 2];
         if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($18, $5, 10, 4, 4);
          $5 = HEAP32[$0 + 536 >> 2];
         }
         HEAP32[$0 + 536 >> 2] = $5 + 10;
         $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
         HEAP32[$5 + 36 >> 2] = 1065353216;
         HEAPF32[$5 + 32 >> 2] = $9 ? Math_fround(1.0) : Math_fround(0.0);
         HEAPF32[$5 + 28 >> 2] = $6 >>> 0;
         HEAPF32[$5 + 24 >> 2] = $4 >>> 0;
         HEAP32[$5 + 20 >> 2] = 0;
         HEAPF32[$5 + 16 >> 2] = $9 ? Math_fround(5.0) : $2;
         HEAP32[$5 + 12 >> 2] = 1094713344;
         $31 = Math_fround($40 + $21);
         HEAPF32[$5 + 8 >> 2] = $31;
         HEAPF32[$5 + 4 >> 2] = $44;
         HEAP32[$5 >> 2] = 1084227584;
         if ($7) {
          $5 = HEAP32[$12 - 4 >> 2];
          $4 = $5 & -8;
          $5 = $5 & 3;
          if ($4 >>> 0 < $7 + ($5 ? 4 : 8) >>> 0) {
           break folding_inner1
          }
          if (($5 | 0) != 0 & $4 >>> 0 > $7 + 39 >>> 0) {
           break folding_inner2
          }
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($12);
         }
         $34 = $34 + 1 | 0;
         $8 = $8 + 4 | 0;
         $22 = Math_fround($21 + Math_fround(2.0));
         $4 = 0;
         while (1) {
          $2 = Math_fround($25 + Math_fround($1 * Math_fround($4 >>> 0)));
          block158 : {
           $37 = $4 + $20 | 0;
           $5 = $37 - 1 | 0;
           if ($5 >>> 0 >= HEAPU32[$23 + 64 >> 2]) {
            $5 = HEAP32[$0 + 536 >> 2];
            if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
             _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($18, $5, 10, 4, 4);
             $5 = HEAP32[$0 + 536 >> 2];
            }
            HEAP32[$0 + 536 >> 2] = $5 + 10;
            $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
            HEAP32[$5 + 36 >> 2] = 0;
            HEAP32[$5 + 28 >> 2] = 1065353216;
            HEAP32[$5 + 32 >> 2] = 1065353216;
            HEAP32[$5 + 20 >> 2] = -1082130432;
            HEAP32[$5 + 24 >> 2] = 1077936128;
            HEAPF32[$5 + 16 >> 2] = $29;
            HEAPF32[$5 + 12 >> 2] = $24;
            HEAPF32[$5 + 8 >> 2] = $22;
            HEAPF32[$5 + 4 >> 2] = $2 + Math_fround(2.0);
            HEAP32[$5 >> 2] = 1082130432;
            break block158;
           }
           $50 = HEAP32[$23 + 160 >> 2];
           $38 = $50 >>> 0 < $37 >>> 0 ? Math_fround(.3799999952316284) : Math_fround(1.0);
           $12 = HEAP32[HEAP32[$23 + 60 >> 2] + ($5 << 3) >> 2];
           $43 = Math_fround(($12 & 7) + 10 >>> 0);
           $5 = HEAP32[$0 + 536 >> 2];
           if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 < 10) {
            _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($18, $5, 10, 4, 4);
            $5 = HEAP32[$0 + 536 >> 2];
           }
           HEAP32[$0 + 536 >> 2] = $5 + 10;
           $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
           HEAP32[$5 + 36 >> 2] = 0;
           HEAPF32[$5 + 32 >> 2] = $38;
           HEAP32[$5 + 24 >> 2] = -1082130432;
           HEAP32[$5 + 28 >> 2] = 0;
           HEAPF32[$5 + 20 >> 2] = $43;
           HEAPF32[$5 + 16 >> 2] = $29;
           HEAPF32[$5 + 12 >> 2] = $24;
           HEAPF32[$5 + 8 >> 2] = $22;
           HEAPF32[$5 + 4 >> 2] = $2 + Math_fround(2.0);
           HEAP32[$5 >> 2] = 1082130432;
           if (!($1 >= Math_fround(18.0))) {
            break block158
           }
           $5 = 10;
           $6 = $12;
           if ($6 >>> 0 >= 1e3) {
            while (1) {
             $7 = $6;
             $6 = ($6 >>> 0) / 1e4 | 0;
             $9 = ($11 + 40 | 0) + $5 | 0;
             $13 = $9 - 4 | 0;
             $51 = $7 - Math_imul($6, 1e4) | 0;
             $52 = (($51 & 65535) >>> 0) / 100 | 0;
             $26 = $52 << 1;
             $26 = HEAPU8[$26 + 1052066 | 0] | HEAPU8[$26 + 1052067 | 0] << 8;
             HEAP8[$13 | 0] = $26;
             HEAP8[$13 + 1 | 0] = $26 >>> 8;
             $9 = $9 - 2 | 0;
             $13 = ($51 - Math_imul($52, 100) & 65535) << 1;
             $13 = HEAPU8[$13 + 1052066 | 0] | HEAPU8[$13 + 1052067 | 0] << 8;
             HEAP8[$9 | 0] = $13;
             HEAP8[$9 + 1 | 0] = $13 >>> 8;
             $5 = $5 - 4 | 0;
             if ($7 >>> 0 > 9999999) {
              continue
             }
             break;
            }
           }
           block162 : {
            if ($6 >>> 0 <= 9) {
             $7 = $6;
             break block162;
            }
            $5 = $5 - 2 | 0;
            $9 = $5 + ($11 + 40 | 0) | 0;
            $7 = (($6 & 65535) >>> 0) / 100 | 0;
            $6 = ($6 - Math_imul($7, 100) & 65535) << 1;
            $6 = HEAPU8[$6 + 1052066 | 0] | HEAPU8[$6 + 1052067 | 0] << 8;
            HEAP8[$9 | 0] = $6;
            HEAP8[$9 + 1 | 0] = $6 >>> 8;
           }
           block168 : {
            block166 : {
             block165 : {
              if (!(!$7 & ($12 | 0) != 0)) {
               $12 = $5 - 1 | 0;
               $13 = $12 + ($11 + 40 | 0) | 0;
               HEAP8[$13 | 0] = HEAPU8[($7 << 1) + 1052067 | 0];
               $7 = 11 - $5 | 0;
               $9 = ($12 | 0) == 10;
               break block165;
              }
              $7 = 10 - $5 | 0;
              if (($5 | 0) == 10) {
               break block166
              }
              $13 = ($11 + 40 | 0) + $5 | 0;
              $12 = $5;
              $9 = 0;
             }
             $6 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
             if (!$6) {
              break folding_inner0
             }
             _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($6, $13, $7);
             $13 = 49 - $12 | 0;
             break block168;
            }
            $9 = 1;
            $6 = 1;
            $13 = 39;
           }
           $38 = Math_fround($15 + $2);
           block174 : {
            block173 : {
             if ($37 >>> 0 > $50 >>> 0) {
              $12 = HEAP32[$0 + 548 >> 2];
              block172 : {
               block171 : {
                if ($7 >>> 0 > HEAP32[$0 + 540 >> 2] - $12 >>> 0) {
                 _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($32, $12, $7, 1, 1);
                 $5 = HEAP32[$0 + 548 >> 2];
                 break block171;
                }
                $5 = $12;
                if ($9) {
                 break block172
                }
               }
               _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 544 >> 2] + $5 | 0, $6, $7);
              }
              HEAP32[$0 + 548 >> 2] = $5 + $7;
              $2 = Math_fround(.800000011920929);
              $5 = HEAP32[$0 + 536 >> 2];
              if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 < 10) {
               break block173
              }
              break block174;
             }
             $12 = HEAP32[$0 + 548 >> 2];
             block177 : {
              block176 : {
               if ($7 >>> 0 > HEAP32[$0 + 540 >> 2] - $12 >>> 0) {
                _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($32, $12, $7, 1, 1);
                $5 = HEAP32[$0 + 548 >> 2];
                break block176;
               }
               $5 = $12;
               if ($9) {
                break block177
               }
              }
              _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 544 >> 2] + $5 | 0, $6, $7);
             }
             HEAP32[$0 + 548 >> 2] = $5 + $7;
             $2 = Math_fround(1.0);
             $5 = HEAP32[$0 + 536 >> 2];
             if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 > 9) {
              break block174
             }
            }
            _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($18, $5, 10, 4, 4);
            $5 = HEAP32[$0 + 536 >> 2];
           }
           HEAP32[$0 + 536 >> 2] = $5 + 10;
           $5 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
           HEAPF32[$5 + 36 >> 2] = $2;
           HEAP32[$5 + 32 >> 2] = 0;
           HEAPF32[$5 + 28 >> 2] = $7 >>> 0;
           HEAPF32[$5 + 24 >> 2] = $12 >>> 0;
           HEAP32[$5 + 16 >> 2] = 1099956224;
           HEAP32[$5 + 20 >> 2] = 1065353216;
           HEAPF32[$5 + 12 >> 2] = $39;
           HEAPF32[$5 + 8 >> 2] = $31;
           HEAPF32[$5 + 4 >> 2] = $38;
           HEAP32[$5 >> 2] = 1084227584;
           if ($9) {
            break block158
           }
           $12 = HEAP32[$6 - 4 >> 2];
           $5 = $12 & -8;
           $9 = $7;
           $7 = $12 & 3;
           if ($5 >>> 0 < $9 + ($7 ? 4 : 8) >>> 0) {
            break folding_inner1
           }
           if (!(($7 | 0) != 0 & $5 >>> 0 > $13 >>> 0)) {
            _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($6);
            break block158;
           }
           break folding_inner2;
          }
          $4 = $4 + 1 | 0;
          if (($27 | 0) != ($4 | 0)) {
           continue
          }
          break;
         };
         block181 : {
          if (!$16) {
           break block181
          }
          if (($17 | 0) == HEAP32[$16 + 152 >> 2]) {
           break block181
          }
          $4 = HEAP32[$16 + 88 >> 2];
          if (!$4) {
           break block181
          }
          block184 : {
           block183 : {
            if ($4 >>> 0 > $17 >>> 0) {
             $4 = HEAP32[$16 + 100 >> 2];
             if ($4 >>> 0 <= $17 >>> 0) {
              break block183
             }
             $2 = Math_fround(Math_fround($10 + $21) + Math_fround(-2.0));
             $4 = $17 << 2;
             $6 = HEAP32[$4 + HEAP32[$16 + 84 >> 2] >> 2];
             $7 = HEAP32[$4 + HEAP32[$16 + 96 >> 2] >> 2];
             if ($7 >>> 0 < $20 >>> 0) {
              break block184
             }
             if ($7 >>> 0 >= $33 >>> 0) {
              break block184
             }
             $5 = HEAP32[$0 + 536 >> 2];
             if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
              _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($18, $5, 10, 4, 4);
              $5 = HEAP32[$0 + 536 >> 2];
             }
             HEAP32[$0 + 536 >> 2] = $5 + 10;
             $4 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
             HEAP32[$4 + 36 >> 2] = 0;
             HEAP32[$4 + 28 >> 2] = 1065353216;
             HEAP32[$4 + 32 >> 2] = 0;
             HEAP32[$4 + 20 >> 2] = 1065353216;
             HEAP32[$4 + 24 >> 2] = 1065353216;
             HEAP32[$4 + 12 >> 2] = 1075838976;
             HEAP32[$4 + 16 >> 2] = 0;
             HEAPF32[$4 + 8 >> 2] = $2;
             HEAPF32[$4 + 4 >> 2] = $15 + Math_fround($25 + Math_fround($1 * Math_fround($7 - $20 >>> 0)));
             HEAP32[$4 >> 2] = 1065353216;
             break block184;
            }
            _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($17, $4, 1054432);
            wasm2js_trap();
           }
           _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($17, $4, 1054448);
           wasm2js_trap();
          }
          if ($6 >>> 0 < $20 >>> 0) {
           break block181
          }
          if ($6 >>> 0 >= $33 >>> 0) {
           break block181
          }
          $5 = HEAP32[$0 + 536 >> 2];
          if (HEAP32[$0 + 528 >> 2] - $5 >>> 0 <= 9) {
           _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($18, $5, 10, 4, 4);
           $5 = HEAP32[$0 + 536 >> 2];
          }
          HEAP32[$0 + 536 >> 2] = $5 + 10;
          $4 = HEAP32[$0 + 532 >> 2] + ($5 << 2) | 0;
          HEAP32[$4 + 36 >> 2] = 0;
          HEAP32[$4 + 28 >> 2] = 1065353216;
          HEAP32[$4 + 32 >> 2] = 0;
          HEAP32[$4 + 20 >> 2] = 1065353216;
          HEAP32[$4 + 24 >> 2] = 1065353216;
          HEAP32[$4 + 12 >> 2] = 1075838976;
          HEAP32[$4 + 16 >> 2] = 1065353216;
          HEAPF32[$4 + 8 >> 2] = $2;
          HEAPF32[$4 + 4 >> 2] = $15 + Math_fround($25 + Math_fround($1 * Math_fround($6 - $20 >>> 0)));
          HEAP32[$4 >> 2] = 1065353216;
         }
         if (($8 | 0) != ($54 | 0)) {
          continue
         }
         break;
        };
       }
       $4 = HEAP32[$11 + 12 >> 2];
       if (!$4) {
        break block83
       }
       $5 = HEAP32[$14 - 4 >> 2];
       $3 = $5 & -8;
       $4 = $4 << 2;
       $5 = $5 & 3;
       if ($3 >>> 0 < $4 + ($5 ? 4 : 8) >>> 0) {
        break folding_inner1
       }
       if (($5 | 0) != 0 & $3 >>> 0 > $4 + 39 >>> 0) {
        break block189
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($14);
      }
      __stack_pointer = $11 - -64 | 0;
      return HEAPU32[$0 + 536 >> 2] / 10 | 0;
     }
     break folding_inner2;
    }
    _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
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
  _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10advance_to($0, $2 ? -1 : $6, $2 ? -1 : $3 ? $4 : 0);
  $2 = HEAP32[$0 + 208 >> 2];
  $3 = $2 + HEAP32[$0 + 192 >> 2] | 0;
  $0 = HEAP32[$0 + 196 >> 2] + HEAP32[$0 + 212 >> 2] | 0;
  return +(+($3 >>> 0) + +(($2 >>> 0 > $3 >>> 0 ? $0 + 1 | 0 : $0) >>> 0) * 4294967296.0);
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10advance_to($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $14 = __stack_pointer + -64 | 0;
  __stack_pointer = $14;
  $30 = $0 + 140 | 0;
  $29 = $0 + 380 | 0;
  block166 : {
   block169 : {
    block187 : {
     block188 : {
      block190 : {
       block191 : {
        block192 : {
         block193 : {
          block195 : {
           block197 : {
            block198 : {
             label8 : while (1) {
              $9 = -1;
              $8 = -1;
              block : {
               $4 = HEAP32[$0 + 388 >> 2];
               if (!$4) {
                break block
               }
               $12 = HEAP32[$0 + 396 >> 2];
               $10 = HEAP32[$0 + 400 >> 2];
               $6 = HEAP32[$0 + 384 >> 2];
               while (1) {
                $3 = HEAP32[$6 + 8 >> 2];
                if ($10 >>> 0 > $3 >>> 0) {
                 $9 = HEAP32[$6 >> 2];
                 $3 = $12 + ($3 << 3) | 0;
                 $8 = HEAP32[$6 + 4 >> 2];
                 if (($9 | 0) == HEAP32[$3 >> 2] & ($8 | 0) == HEAP32[$3 + 4 >> 2]) {
                  break block
                 }
                 $7 = $4 - 1 | 0;
                 HEAP32[$0 + 388 >> 2] = $7;
                 if (!$7) {
                  $9 = -1;
                  $8 = -1;
                  break block;
                 }
                 $3 = $6 + ($7 << 4) | 0;
                 $9 = HEAP32[$3 >> 2];
                 $5 = HEAP32[$3 + 4 >> 2];
                 $11 = $5;
                 $17 = HEAP32[$3 + 8 >> 2];
                 HEAP32[$6 + 8 >> 2] = $17;
                 HEAP32[$6 >> 2] = $9;
                 HEAP32[$6 + 4 >> 2] = $5;
                 $3 = 0;
                 $5 = 1;
                 if ($4 >>> 0 >= 4) {
                  $3 = $7 - 2 | 0;
                  $18 = $3 >>> 0 <= $7 >>> 0 ? $3 : 0;
                  $3 = 0;
                  while (1) {
                   $19 = $6 + ($5 << 4) | 0;
                   $15 = $19 + 16 | 0;
                   $13 = HEAP32[$15 >> 2];
                   $8 = $6 + ($3 << 4) | 0;
                   $16 = $5;
                   $20 = HEAPU32[$19 + 24 >> 2] <= HEAPU32[$19 + 8 >> 2];
                   $3 = HEAP32[$15 + 4 >> 2];
                   $5 = HEAP32[$19 + 4 >> 2];
                   $19 = HEAP32[$19 >> 2];
                   $3 = $16 + (($13 | 0) == ($19 | 0) & ($3 | 0) == ($5 | 0) ? $20 : ($3 | 0) == ($5 | 0) & $19 >>> 0 >= $13 >>> 0 | $3 >>> 0 < $5 >>> 0) | 0;
                   $5 = $6 + ($3 << 4) | 0;
                   $19 = HEAP32[$5 + 4 >> 2];
                   HEAP32[$8 >> 2] = HEAP32[$5 >> 2];
                   HEAP32[$8 + 4 >> 2] = $19;
                   $19 = HEAP32[$5 + 12 >> 2];
                   HEAP32[$8 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                   HEAP32[$8 + 12 >> 2] = $19;
                   $19 = $3 << 1;
                   $5 = $19 | 1;
                   if ($19 >>> 0 < $18 >>> 0) {
                    continue
                   }
                   break;
                  };
                 }
                 block7 : {
                  block6 : {
                   block5 : {
                    if (($5 | 0) == ($4 - 2 | 0)) {
                     $4 = $6 + ($5 << 4) | 0;
                     $19 = HEAP32[$4 + 12 >> 2];
                     $3 = $6 + ($3 << 4) | 0;
                     HEAP32[$3 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                     HEAP32[$3 + 12 >> 2] = $19;
                     $19 = HEAP32[$4 + 4 >> 2];
                     HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
                     HEAP32[$3 + 4 >> 2] = $19;
                     HEAP32[$4 + 8 >> 2] = $17;
                     HEAP32[$4 >> 2] = $9;
                     HEAP32[$4 + 4 >> 2] = $11;
                     $3 = $5;
                     break block5;
                    }
                    $4 = $6 + ($3 << 4) | 0;
                    HEAP32[$4 + 8 >> 2] = $17;
                    HEAP32[$4 >> 2] = $9;
                    HEAP32[$4 + 4 >> 2] = $11;
                    if (!$3) {
                     break block6
                    }
                   }
                   while (1) {
                    $4 = $3 - 1 >>> 1 | 0;
                    $5 = $6 + ($4 << 4) | 0;
                    $19 = HEAP32[$5 >> 2];
                    $8 = HEAP32[$5 + 4 >> 2];
                    if (($9 | 0) == ($19 | 0) & ($8 | 0) == ($11 | 0) ? $17 >>> 0 >= HEAPU32[$5 + 8 >> 2] : ($11 | 0) == ($8 | 0) & $9 >>> 0 >= $19 >>> 0 | $8 >>> 0 < $11 >>> 0) {
                     break block7
                    }
                    $19 = HEAP32[$5 + 12 >> 2];
                    $3 = $6 + ($3 << 4) | 0;
                    HEAP32[$3 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                    HEAP32[$3 + 12 >> 2] = $19;
                    $19 = HEAP32[$5 + 4 >> 2];
                    HEAP32[$3 >> 2] = HEAP32[$5 >> 2];
                    HEAP32[$3 + 4 >> 2] = $19;
                    $3 = $4;
                    if ($3) {
                     continue
                    }
                    break;
                   };
                  }
                  $3 = 0;
                 }
                 $4 = $6 + ($3 << 4) | 0;
                 HEAP32[$4 + 8 >> 2] = $17;
                 HEAP32[$4 >> 2] = $9;
                 HEAP32[$4 + 4 >> 2] = $11;
                 $4 = $7;
                 continue;
                }
                break;
               };
               _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $10, 1055640);
               wasm2js_trap();
              }
              $11 = HEAP32[$0 + 160 >> 2];
              if ($11) {
               $16 = HEAP32[$0 + 132 >> 2];
               $18 = HEAP32[$0 + 136 >> 2];
               $6 = HEAP32[$0 + 156 >> 2];
               while (1) {
                block11 : {
                 $4 = $11;
                 block13 : {
                  $3 = HEAP32[$6 + 16 >> 2];
                  if ($18 >>> 0 > $3 >>> 0) {
                   block10 : {
                    $3 = $16 + ($3 << 6) | 0;
                    if (HEAP32[$3 >> 2] == -1) {
                     break block10
                    }
                    if (HEAP32[$3 + 24 >> 2] != HEAP32[$6 + 8 >> 2] | HEAP32[$3 + 28 >> 2] != HEAP32[$6 + 12 >> 2]) {
                     break block10
                    }
                    $7 = HEAP32[$6 >> 2];
                    $6 = HEAP32[$6 + 4 >> 2];
                    break block11;
                   }
                   $11 = $4 - 1 | 0;
                   HEAP32[$0 + 160 >> 2] = $11;
                   if (!$11) {
                    $7 = -1;
                    $6 = -1;
                    break block11;
                   }
                   $3 = $6 + Math_imul($11, 24) | 0;
                   $5 = HEAP32[$3 + 4 >> 2];
                   $7 = HEAP32[$3 + 12 >> 2];
                   $17 = HEAP32[$3 + 20 >> 2];
                   HEAP8[$6 + 20 | 0] = $17;
                   HEAP8[$6 + 21 | 0] = $17 >>> 8;
                   HEAP8[$6 + 22 | 0] = $17 >>> 16;
                   HEAP8[$6 + 23 | 0] = $17 >>> 24;
                   $17 = HEAP32[$3 >> 2];
                   $19 = HEAP32[$3 + 8 >> 2];
                   $3 = HEAP32[$3 + 16 >> 2];
                   HEAP8[$6 + 16 | 0] = $3;
                   HEAP8[$6 + 17 | 0] = $3 >>> 8;
                   HEAP8[$6 + 18 | 0] = $3 >>> 16;
                   HEAP8[$6 + 19 | 0] = $3 >>> 24;
                   HEAP8[$6 + 12 | 0] = $7;
                   HEAP8[$6 + 13 | 0] = $7 >>> 8;
                   HEAP8[$6 + 14 | 0] = $7 >>> 16;
                   HEAP8[$6 + 15 | 0] = $7 >>> 24;
                   HEAP8[$6 + 8 | 0] = $19;
                   HEAP8[$6 + 9 | 0] = $19 >>> 8;
                   HEAP8[$6 + 10 | 0] = $19 >>> 16;
                   HEAP8[$6 + 11 | 0] = $19 >>> 24;
                   HEAP8[$6 + 4 | 0] = $5;
                   HEAP8[$6 + 5 | 0] = $5 >>> 8;
                   HEAP8[$6 + 6 | 0] = $5 >>> 16;
                   HEAP8[$6 + 7 | 0] = $5 >>> 24;
                   HEAP8[$6 | 0] = $17;
                   HEAP8[$6 + 1 | 0] = $17 >>> 8;
                   HEAP8[$6 + 2 | 0] = $17 >>> 16;
                   HEAP8[$6 + 3 | 0] = $17 >>> 24;
                   $3 = HEAP32[$6 + 20 >> 2];
                   HEAP32[$14 + 56 >> 2] = HEAP32[$6 + 16 >> 2];
                   HEAP32[$14 + 60 >> 2] = $3;
                   $3 = HEAP32[$6 + 12 >> 2];
                   HEAP32[$14 + 48 >> 2] = HEAP32[$6 + 8 >> 2];
                   HEAP32[$14 + 52 >> 2] = $3;
                   $3 = HEAP32[$6 + 4 >> 2];
                   HEAP32[$14 + 40 >> 2] = HEAP32[$6 >> 2];
                   HEAP32[$14 + 44 >> 2] = $3;
                   $5 = 0;
                   $3 = 1;
                   if ($4 >>> 0 < 4) {
                    break block13
                   }
                   $3 = $11 - 2 | 0;
                   $10 = $3 >>> 0 <= $11 >>> 0 ? $3 : 0;
                   $3 = 1;
                   while (1) {
                    $7 = $6 + Math_imul($5, 24) | 0;
                    $20 = $3;
                    $3 = $6 + Math_imul($3, 24) | 0;
                    $5 = $3 + 24 | 0;
                    $13 = HEAP32[$5 >> 2];
                    $12 = HEAP32[$3 >> 2];
                    $17 = HEAP32[$5 + 4 >> 2];
                    $19 = HEAP32[$3 + 4 >> 2];
                    block15 : {
                     if (!(($13 | 0) == ($12 | 0) & ($17 | 0) == ($19 | 0))) {
                      $5 = ($17 | 0) == ($19 | 0) & $12 >>> 0 >= $13 >>> 0 | $17 >>> 0 < $19 >>> 0;
                      break block15;
                     }
                     $13 = HEAP32[$5 + 8 >> 2];
                     $12 = HEAP32[$3 + 8 >> 2];
                     $17 = HEAP32[$5 + 12 >> 2];
                     $19 = HEAP32[$3 + 12 >> 2];
                     if (!(($13 | 0) == ($12 | 0) & ($17 | 0) == ($19 | 0))) {
                      $5 = ($17 | 0) == ($19 | 0) & $12 >>> 0 >= $13 >>> 0 | $17 >>> 0 < $19 >>> 0;
                      break block15;
                     }
                     $5 = HEAPU32[$5 + 16 >> 2] <= HEAPU32[$3 + 16 >> 2];
                    }
                    $5 = $20 + $5 | 0;
                    $3 = $6 + Math_imul($5, 24) | 0;
                    $17 = HEAP32[$3 + 20 >> 2];
                    HEAP32[$7 + 16 >> 2] = HEAP32[$3 + 16 >> 2];
                    HEAP32[$7 + 20 >> 2] = $17;
                    $17 = HEAP32[$3 + 12 >> 2];
                    HEAP32[$7 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                    HEAP32[$7 + 12 >> 2] = $17;
                    $17 = HEAP32[$3 + 4 >> 2];
                    HEAP32[$7 >> 2] = HEAP32[$3 >> 2];
                    HEAP32[$7 + 4 >> 2] = $17;
                    $7 = $5 << 1;
                    $3 = $7 | 1;
                    if ($7 >>> 0 < $10 >>> 0) {
                     continue
                    }
                    break;
                   };
                   break block13;
                  }
                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $18, 1054588);
                  wasm2js_trap();
                 }
                 block18 : {
                  if (($3 | 0) != ($4 - 2 | 0)) {
                   $3 = $5;
                   break block18;
                  }
                  $4 = $6 + Math_imul($5, 24) | 0;
                  $5 = $6 + Math_imul($3, 24) | 0;
                  $7 = HEAP32[$5 + 20 >> 2];
                  HEAP32[$4 + 16 >> 2] = HEAP32[$5 + 16 >> 2];
                  HEAP32[$4 + 20 >> 2] = $7;
                  $7 = HEAP32[$5 + 12 >> 2];
                  HEAP32[$4 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                  HEAP32[$4 + 12 >> 2] = $7;
                  $7 = HEAP32[$5 + 4 >> 2];
                  HEAP32[$4 >> 2] = HEAP32[$5 >> 2];
                  HEAP32[$4 + 4 >> 2] = $7;
                 }
                 $5 = HEAP32[$14 + 60 >> 2];
                 $4 = $6 + Math_imul($3, 24) | 0;
                 $7 = HEAP32[$14 + 56 >> 2];
                 HEAP32[$4 + 16 >> 2] = $7;
                 HEAP32[$4 + 20 >> 2] = $5;
                 $5 = HEAP32[$14 + 52 >> 2];
                 $19 = $5;
                 $13 = HEAP32[$14 + 48 >> 2];
                 HEAP32[$4 + 8 >> 2] = $13;
                 HEAP32[$4 + 12 >> 2] = $5;
                 $5 = HEAP32[$14 + 44 >> 2];
                 $10 = $5;
                 $12 = HEAP32[$14 + 40 >> 2];
                 HEAP32[$4 >> 2] = $12;
                 HEAP32[$4 + 4 >> 2] = $5;
                 $21 = HEAP32[$4 + 20 >> 2];
                 $4 = 0;
                 block19 : {
                  if (!$3) {
                   break block19
                  }
                  while (1) {
                   block21 : {
                    $5 = $3;
                    $3 = $3 - 1 >>> 1 | 0;
                    $17 = $6 + Math_imul($3, 24) | 0;
                    $22 = HEAP32[$17 >> 2];
                    $15 = HEAP32[$17 + 4 >> 2];
                    if (!(($12 | 0) == ($22 | 0) & ($10 | 0) == ($15 | 0))) {
                     if (($10 | 0) == ($15 | 0) & $12 >>> 0 < $22 >>> 0 | $10 >>> 0 < $15 >>> 0) {
                      break block21
                     }
                     $4 = $5;
                     break block19;
                    }
                    $22 = HEAP32[$17 + 8 >> 2];
                    $15 = HEAP32[$17 + 12 >> 2];
                    if (!(($13 | 0) != ($22 | 0) | ($19 | 0) != ($15 | 0))) {
                     if ($7 >>> 0 < HEAPU32[$17 + 16 >> 2]) {
                      break block21
                     }
                     $4 = $5;
                     break block19;
                    }
                    if (($15 | 0) == ($19 | 0) & $13 >>> 0 < $22 >>> 0 | $15 >>> 0 > $19 >>> 0) {
                     break block21
                    }
                    $4 = $5;
                    break block19;
                   }
                   $15 = HEAP32[$17 + 20 >> 2];
                   $5 = $6 + Math_imul($5, 24) | 0;
                   HEAP32[$5 + 16 >> 2] = HEAP32[$17 + 16 >> 2];
                   HEAP32[$5 + 20 >> 2] = $15;
                   $15 = HEAP32[$17 + 12 >> 2];
                   HEAP32[$5 + 8 >> 2] = HEAP32[$17 + 8 >> 2];
                   HEAP32[$5 + 12 >> 2] = $15;
                   $15 = HEAP32[$17 + 4 >> 2];
                   HEAP32[$5 >> 2] = HEAP32[$17 >> 2];
                   HEAP32[$5 + 4 >> 2] = $15;
                   if ($3) {
                    continue
                   }
                   break;
                  };
                 }
                 $4 = $6 + Math_imul($4, 24) | 0;
                 HEAP32[$4 + 20 >> 2] = $21;
                 HEAP32[$4 + 16 >> 2] = $7;
                 HEAP32[$4 + 8 >> 2] = $13;
                 HEAP32[$4 + 12 >> 2] = $19;
                 HEAP32[$4 >> 2] = $12;
                 HEAP32[$4 + 4 >> 2] = $10;
                 continue;
                }
                break;
               };
               $4 = ($6 | 0) == ($8 | 0) & $7 >>> 0 < $9 >>> 0 | $6 >>> 0 < $8 >>> 0;
               $9 = $4 ? $7 : $9;
               $8 = $4 ? $6 : $8;
              }
              $19 = HEAP32[$0 + 312 >> 2];
              $17 = HEAP32[$0 + 316 >> 2];
              $7 = HEAP32[$0 + 360 >> 2];
              $5 = HEAP32[$0 + 364 >> 2];
              $4 = ($8 | 0) == ($5 | 0) & $7 >>> 0 < $9 >>> 0 | $5 >>> 0 < $8 >>> 0;
              $3 = $4 ? $7 : $9;
              block25 : {
               block27 : {
                block28 : {
                 $4 = $4 ? $5 : $8;
                 if (!(($2 | 0) == ($4 | 0) & $1 >>> 0 < $3 >>> 0 | $2 >>> 0 < $4 >>> 0)) {
                  if (!(($4 | 0) == ($17 | 0) & $3 >>> 0 <= $19 >>> 0 | $4 >>> 0 < $17 >>> 0)) {
                   HEAP32[$0 + 312 >> 2] = $3;
                   HEAP32[$0 + 316 >> 2] = $4;
                   $19 = $3;
                   $17 = $4;
                  }
                  if (($5 | 0) == ($17 | 0) & $7 >>> 0 > $19 >>> 0 | $5 >>> 0 > $17 >>> 0) {
                   break block25
                  }
                  $4 = $17 + HEAP32[$0 + 68 >> 2] | 0;
                  $3 = $4 + 1 | 0;
                  $5 = $4;
                  $4 = $19 + HEAP32[$0 + 64 >> 2] | 0;
                  $3 = $4 >>> 0 < $19 >>> 0 ? $3 : $5;
                  HEAP32[$0 + 360 >> 2] = $4;
                  HEAP32[$0 + 364 >> 2] = $3;
                  $4 = HEAP32[$0 + 376 >> 2];
                  if (!HEAP32[$0 + 112 >> 2]) {
                   $9 = HEAP32[$0 + 372 >> 2];
                   break block27;
                  }
                  $3 = HEAP32[$0 + 116 >> 2];
                  if ($3 >>> 0 >= $4 >>> 0) {
                   break block28
                  }
                  $9 = HEAP32[$0 + 372 >> 2];
                  if (HEAPU8[($9 + Math_imul($3, 176) | 0) + 173 | 0] != 2) {
                   break block27
                  }
                  _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($0, $3);
                  break block25;
                 }
                 if (!(($2 | 0) == ($17 | 0) & $1 >>> 0 <= $19 >>> 0 | $2 >>> 0 < $17 >>> 0)) {
                  HEAP32[$0 + 312 >> 2] = $1;
                  HEAP32[$0 + 316 >> 2] = $2;
                 }
                 __stack_pointer = $14 - -64 | 0;
                 return;
                }
                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $4, 1055004);
                wasm2js_trap();
               }
               $6 = $9 + 176 | 0;
               $5 = Math_imul($4, 176);
               $4 = $5 - 176 | 0;
               $8 = $5 + $9 | 0;
               block30 : {
                while (1) {
                 $7 = $9;
                 $3 = $6;
                 $11 = $4;
                 if (!$5) {
                  break block30
                 }
                 $4 = $4 - 176 | 0;
                 $6 = $3 + 176 | 0;
                 $5 = $5 - 176 | 0;
                 $9 = $7 + 176 | 0;
                 if (HEAPU8[$7 + 173 | 0] != 2) {
                  continue
                 }
                 break;
                };
                if (($8 | 0) == ($9 | 0)) {
                 _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($0, HEAP32[$7 + 152 >> 2]);
                 break block25;
                }
                $4 = $8 - $9 | 0;
                $8 = ($4 >>> 0) / 176 | 0;
                $5 = HEAP32[$7 + 156 >> 2];
                $6 = 0;
                block36 : {
                 block35 : {
                  if ($4 - 176 >>> 0 >= 176) {
                   $4 = $8 & 1;
                   $11 = ($11 >>> 0) / 352 << 1;
                   while (1) {
                    if (HEAPU8[$3 + 173 | 0] == 2) {
                     $8 = HEAP32[$3 + 156 >> 2];
                     $10 = $8 >>> 0 < $5 >>> 0;
                     $7 = $10 ? $7 : $3;
                     $5 = $10 ? $5 : $8;
                    }
                    if (HEAPU8[$3 + 349 | 0] == 2) {
                     $8 = HEAP32[$3 + 332 >> 2];
                     $10 = $8 >>> 0 < $5 >>> 0;
                     $7 = $10 ? $7 : $3 + 176 | 0;
                     $5 = $10 ? $5 : $8;
                    }
                    $3 = $3 + 352 | 0;
                    $6 = $6 + 2 | 0;
                    if (($11 | 0) != ($6 | 0)) {
                     continue
                    }
                    break;
                   };
                   if (!$4) {
                    break block35
                   }
                  }
                  $3 = Math_imul($6, 176) + $9 | 0;
                  if (HEAPU8[$3 + 173 | 0] != 2) {
                   break block35
                  }
                  if (HEAPU32[$3 + 156 >> 2] >= $5 >>> 0) {
                   break block36
                  }
                 }
                 $3 = $7;
                 if (!$3) {
                  break block30
                 }
                }
                _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($0, HEAP32[$3 + 152 >> 2]);
                break block25;
               }
               $4 = HEAP32[$0 + 220 >> 2];
               $5 = $4;
               $3 = $4 + 1 | 0;
               $4 = HEAP32[$0 + 216 >> 2] + 1 | 0;
               $3 = $4 ? $5 : $3;
               HEAP32[$0 + 216 >> 2] = $4;
               HEAP32[$0 + 220 >> 2] = $3;
               $4 = HEAP32[$0 + 228 >> 2];
               $5 = $4;
               $3 = $4 + 1 | 0;
               $4 = HEAP32[$0 + 224 >> 2] + 1 | 0;
               $3 = $4 ? $5 : $3;
               HEAP32[$0 + 224 >> 2] = $4;
               HEAP32[$0 + 228 >> 2] = $3;
              }
              label18 : while (1) {
               $13 = 0;
               label9 : while (1) {
                $7 = HEAP32[$0 + 384 >> 2];
                block162 : {
                 block164 : {
                  block163 : {
                   block161 : {
                    block160 : {
                     while (1) {
                      block38 : {
                       $12 = HEAP32[$0 + 388 >> 2];
                       if ($12) {
                        $3 = HEAP32[$0 + 384 >> 2];
                        $4 = HEAP32[$3 >> 2];
                        $16 = HEAP32[$3 + 4 >> 2];
                        $5 = $16;
                        if (($17 | 0) == ($5 | 0) & $4 >>> 0 <= $19 >>> 0 | $5 >>> 0 < $17 >>> 0) {
                         break block38
                        }
                       }
                       $11 = HEAP32[$0 + 160 >> 2];
                       block39 : {
                        if (!$11) {
                         break block39
                        }
                        label19 : while (1) {
                         $10 = HEAP32[$0 + 156 >> 2];
                         while (1) {
                          block44 : {
                           block48 : {
                            block49 : {
                             $6 = HEAP32[$0 + 136 >> 2];
                             $8 = HEAP32[$0 + 156 >> 2];
                             $12 = HEAP32[$8 + 16 >> 2];
                             if ($6 >>> 0 > $12 >>> 0) {
                              block42 : {
                               $16 = $12 << 6;
                               $4 = $16 + HEAP32[$0 + 132 >> 2] | 0;
                               if (HEAP32[$4 >> 2] != -1) {
                                if (HEAP32[$4 + 24 >> 2] == HEAP32[$8 + 8 >> 2] & HEAP32[$4 + 28 >> 2] == HEAP32[$8 + 12 >> 2]) {
                                 break block42
                                }
                               }
                               $3 = $11 - 1 | 0;
                               HEAP32[$0 + 160 >> 2] = $3;
                               if (!$3) {
                                $4 = $13 & 1;
                                $13 = 0;
                                if (!$4) {
                                 continue label8
                                }
                                continue label9;
                               }
                               $4 = $10 + Math_imul($3, 24) | 0;
                               $5 = HEAP32[$4 + 4 >> 2];
                               $7 = HEAP32[$4 + 12 >> 2];
                               $9 = HEAP32[$4 + 20 >> 2];
                               HEAP8[$10 + 20 | 0] = $9;
                               HEAP8[$10 + 21 | 0] = $9 >>> 8;
                               HEAP8[$10 + 22 | 0] = $9 >>> 16;
                               HEAP8[$10 + 23 | 0] = $9 >>> 24;
                               $9 = HEAP32[$4 >> 2];
                               $6 = HEAP32[$4 + 8 >> 2];
                               $4 = HEAP32[$4 + 16 >> 2];
                               HEAP8[$10 + 16 | 0] = $4;
                               HEAP8[$10 + 17 | 0] = $4 >>> 8;
                               HEAP8[$10 + 18 | 0] = $4 >>> 16;
                               HEAP8[$10 + 19 | 0] = $4 >>> 24;
                               HEAP8[$10 + 12 | 0] = $7;
                               HEAP8[$10 + 13 | 0] = $7 >>> 8;
                               HEAP8[$10 + 14 | 0] = $7 >>> 16;
                               HEAP8[$10 + 15 | 0] = $7 >>> 24;
                               HEAP8[$10 + 8 | 0] = $6;
                               HEAP8[$10 + 9 | 0] = $6 >>> 8;
                               HEAP8[$10 + 10 | 0] = $6 >>> 16;
                               HEAP8[$10 + 11 | 0] = $6 >>> 24;
                               HEAP8[$10 + 4 | 0] = $5;
                               HEAP8[$10 + 5 | 0] = $5 >>> 8;
                               HEAP8[$10 + 6 | 0] = $5 >>> 16;
                               HEAP8[$10 + 7 | 0] = $5 >>> 24;
                               HEAP8[$10 | 0] = $9;
                               HEAP8[$10 + 1 | 0] = $9 >>> 8;
                               HEAP8[$10 + 2 | 0] = $9 >>> 16;
                               HEAP8[$10 + 3 | 0] = $9 >>> 24;
                               $4 = HEAP32[$10 + 20 >> 2];
                               HEAP32[$14 + 56 >> 2] = HEAP32[$10 + 16 >> 2];
                               HEAP32[$14 + 60 >> 2] = $4;
                               $4 = HEAP32[$10 + 12 >> 2];
                               HEAP32[$14 + 48 >> 2] = HEAP32[$10 + 8 >> 2];
                               HEAP32[$14 + 52 >> 2] = $4;
                               $4 = HEAP32[$10 + 4 >> 2];
                               HEAP32[$14 + 40 >> 2] = HEAP32[$10 >> 2];
                               HEAP32[$14 + 44 >> 2] = $4;
                               $7 = 0;
                               $5 = 1;
                               if ($11 >>> 0 < 4) {
                                break block44
                               }
                               $4 = $3 - 2 | 0;
                               $6 = $3 >>> 0 >= $4 >>> 0 ? $4 : 0;
                               while (1) {
                                $4 = $10 + Math_imul($7, 24) | 0;
                                $16 = $5;
                                $3 = $10 + Math_imul($5, 24) | 0;
                                $5 = $3 + 24 | 0;
                                $8 = HEAP32[$5 >> 2];
                                $12 = HEAP32[$3 >> 2];
                                $7 = HEAP32[$5 + 4 >> 2];
                                $9 = HEAP32[$3 + 4 >> 2];
                                block46 : {
                                 if (!(($8 | 0) == ($12 | 0) & ($7 | 0) == ($9 | 0))) {
                                  $5 = ($7 | 0) == ($9 | 0) & $8 >>> 0 <= $12 >>> 0 | $7 >>> 0 < $9 >>> 0;
                                  break block46;
                                 }
                                 $8 = HEAP32[$5 + 8 >> 2];
                                 $12 = HEAP32[$3 + 8 >> 2];
                                 $7 = HEAP32[$5 + 12 >> 2];
                                 $9 = HEAP32[$3 + 12 >> 2];
                                 if (!(($8 | 0) == ($12 | 0) & ($7 | 0) == ($9 | 0))) {
                                  $5 = ($7 | 0) == ($9 | 0) & $8 >>> 0 <= $12 >>> 0 | $7 >>> 0 < $9 >>> 0;
                                  break block46;
                                 }
                                 $5 = HEAPU32[$5 + 16 >> 2] <= HEAPU32[$3 + 16 >> 2];
                                }
                                $7 = $16 + $5 | 0;
                                $3 = $10 + Math_imul($7, 24) | 0;
                                $5 = HEAP32[$3 + 20 >> 2];
                                HEAP32[$4 + 16 >> 2] = HEAP32[$3 + 16 >> 2];
                                HEAP32[$4 + 20 >> 2] = $5;
                                $5 = HEAP32[$3 + 12 >> 2];
                                HEAP32[$4 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                                HEAP32[$4 + 12 >> 2] = $5;
                                $5 = HEAP32[$3 + 4 >> 2];
                                HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
                                HEAP32[$4 + 4 >> 2] = $5;
                                $4 = $7 << 1;
                                $5 = $4 | 1;
                                if ($4 >>> 0 < $6 >>> 0) {
                                 continue
                                }
                                break;
                               };
                               break block44;
                              }
                              $4 = HEAP32[$8 + 4 >> 2];
                              if (($17 | 0) == ($4 | 0) & $19 >>> 0 < HEAPU32[$8 >> 2] | $4 >>> 0 > $17 >>> 0) {
                               break block39
                              }
                              $5 = $11 - 1 | 0;
                              HEAP32[$0 + 160 >> 2] = $5;
                              if (!$5) {
                               break block48
                              }
                              $4 = $8 + Math_imul($5, 24) | 0;
                              $3 = HEAP32[$4 + 4 >> 2];
                              $7 = HEAP32[$4 + 12 >> 2];
                              $9 = HEAP32[$4 + 20 >> 2];
                              HEAP8[$8 + 20 | 0] = $9;
                              HEAP8[$8 + 21 | 0] = $9 >>> 8;
                              HEAP8[$8 + 22 | 0] = $9 >>> 16;
                              HEAP8[$8 + 23 | 0] = $9 >>> 24;
                              $9 = HEAP32[$4 >> 2];
                              $6 = HEAP32[$4 + 8 >> 2];
                              $4 = HEAP32[$4 + 16 >> 2];
                              HEAP8[$8 + 16 | 0] = $4;
                              HEAP8[$8 + 17 | 0] = $4 >>> 8;
                              HEAP8[$8 + 18 | 0] = $4 >>> 16;
                              HEAP8[$8 + 19 | 0] = $4 >>> 24;
                              HEAP8[$8 + 12 | 0] = $7;
                              HEAP8[$8 + 13 | 0] = $7 >>> 8;
                              HEAP8[$8 + 14 | 0] = $7 >>> 16;
                              HEAP8[$8 + 15 | 0] = $7 >>> 24;
                              HEAP8[$8 + 8 | 0] = $6;
                              HEAP8[$8 + 9 | 0] = $6 >>> 8;
                              HEAP8[$8 + 10 | 0] = $6 >>> 16;
                              HEAP8[$8 + 11 | 0] = $6 >>> 24;
                              HEAP8[$8 + 4 | 0] = $3;
                              HEAP8[$8 + 5 | 0] = $3 >>> 8;
                              HEAP8[$8 + 6 | 0] = $3 >>> 16;
                              HEAP8[$8 + 7 | 0] = $3 >>> 24;
                              HEAP8[$8 | 0] = $9;
                              HEAP8[$8 + 1 | 0] = $9 >>> 8;
                              HEAP8[$8 + 2 | 0] = $9 >>> 16;
                              HEAP8[$8 + 3 | 0] = $9 >>> 24;
                              $4 = HEAP32[$8 + 20 >> 2];
                              HEAP32[$14 + 56 >> 2] = HEAP32[$8 + 16 >> 2];
                              HEAP32[$14 + 60 >> 2] = $4;
                              $4 = HEAP32[$8 + 12 >> 2];
                              HEAP32[$14 + 48 >> 2] = HEAP32[$8 + 8 >> 2];
                              HEAP32[$14 + 52 >> 2] = $4;
                              $4 = HEAP32[$8 + 4 >> 2];
                              HEAP32[$14 + 40 >> 2] = HEAP32[$8 >> 2];
                              HEAP32[$14 + 44 >> 2] = $4;
                              $9 = 0;
                              $3 = 1;
                              if ($11 >>> 0 < 4) {
                               break block49
                              }
                              $4 = $5 - 2 | 0;
                              $6 = $4 >>> 0 <= $5 >>> 0 ? $4 : 0;
                              while (1) {
                               $4 = $8 + Math_imul($9, 24) | 0;
                               $20 = $3;
                               $3 = $8 + Math_imul($3, 24) | 0;
                               $5 = $3 + 24 | 0;
                               $10 = HEAP32[$5 >> 2];
                               $18 = HEAP32[$3 >> 2];
                               $7 = HEAP32[$5 + 4 >> 2];
                               $9 = HEAP32[$3 + 4 >> 2];
                               block51 : {
                                if (!(($10 | 0) == ($18 | 0) & ($7 | 0) == ($9 | 0))) {
                                 $5 = ($7 | 0) == ($9 | 0) & $10 >>> 0 <= $18 >>> 0 | $7 >>> 0 < $9 >>> 0;
                                 break block51;
                                }
                                $10 = HEAP32[$5 + 8 >> 2];
                                $18 = HEAP32[$3 + 8 >> 2];
                                $7 = HEAP32[$5 + 12 >> 2];
                                $9 = HEAP32[$3 + 12 >> 2];
                                if (!(($10 | 0) == ($18 | 0) & ($7 | 0) == ($9 | 0))) {
                                 $5 = ($7 | 0) == ($9 | 0) & $10 >>> 0 <= $18 >>> 0 | $7 >>> 0 < $9 >>> 0;
                                 break block51;
                                }
                                $5 = HEAPU32[$5 + 16 >> 2] <= HEAPU32[$3 + 16 >> 2];
                               }
                               $9 = $20 + $5 | 0;
                               $3 = $8 + Math_imul($9, 24) | 0;
                               $5 = HEAP32[$3 + 20 >> 2];
                               HEAP32[$4 + 16 >> 2] = HEAP32[$3 + 16 >> 2];
                               HEAP32[$4 + 20 >> 2] = $5;
                               $5 = HEAP32[$3 + 12 >> 2];
                               HEAP32[$4 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                               HEAP32[$4 + 12 >> 2] = $5;
                               $5 = HEAP32[$3 + 4 >> 2];
                               HEAP32[$4 >> 2] = HEAP32[$3 >> 2];
                               HEAP32[$4 + 4 >> 2] = $5;
                               $4 = $9 << 1;
                               $3 = $4 | 1;
                               if ($4 >>> 0 < $6 >>> 0) {
                                continue
                               }
                               break;
                              };
                              break block49;
                             }
                             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($12, $6, 1054556);
                             wasm2js_trap();
                            }
                            block54 : {
                             if (($3 | 0) != ($11 - 2 | 0)) {
                              $3 = $9;
                              break block54;
                             }
                             $4 = $8 + Math_imul($3, 24) | 0;
                             $7 = HEAP32[$4 + 20 >> 2];
                             $5 = $8 + Math_imul($9, 24) | 0;
                             HEAP32[$5 + 16 >> 2] = HEAP32[$4 + 16 >> 2];
                             HEAP32[$5 + 20 >> 2] = $7;
                             $7 = HEAP32[$4 + 12 >> 2];
                             HEAP32[$5 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                             HEAP32[$5 + 12 >> 2] = $7;
                             $7 = HEAP32[$4 + 4 >> 2];
                             HEAP32[$5 >> 2] = HEAP32[$4 >> 2];
                             HEAP32[$5 + 4 >> 2] = $7;
                            }
                            $5 = HEAP32[$14 + 60 >> 2];
                            $4 = $8 + Math_imul($3, 24) | 0;
                            $7 = HEAP32[$14 + 56 >> 2];
                            HEAP32[$4 + 16 >> 2] = $7;
                            HEAP32[$4 + 20 >> 2] = $5;
                            $5 = HEAP32[$14 + 52 >> 2];
                            $6 = $5;
                            $10 = HEAP32[$14 + 48 >> 2];
                            HEAP32[$4 + 8 >> 2] = $10;
                            HEAP32[$4 + 12 >> 2] = $5;
                            $5 = HEAP32[$14 + 44 >> 2];
                            $11 = $5;
                            $18 = HEAP32[$14 + 40 >> 2];
                            HEAP32[$4 >> 2] = $18;
                            HEAP32[$4 + 4 >> 2] = $5;
                            $21 = HEAP32[$4 + 20 >> 2];
                            $4 = 0;
                            block55 : {
                             if (!$3) {
                              break block55
                             }
                             while (1) {
                              block57 : {
                               $5 = $3;
                               $3 = $3 - 1 >>> 1 | 0;
                               $9 = $8 + Math_imul($3, 24) | 0;
                               $22 = HEAP32[$9 >> 2];
                               $15 = HEAP32[$9 + 4 >> 2];
                               if (!(($18 | 0) == ($22 | 0) & ($11 | 0) == ($15 | 0))) {
                                if (($11 | 0) == ($15 | 0) & $18 >>> 0 < $22 >>> 0 | $11 >>> 0 < $15 >>> 0) {
                                 break block57
                                }
                                $4 = $5;
                                break block55;
                               }
                               $22 = HEAP32[$9 + 8 >> 2];
                               $15 = HEAP32[$9 + 12 >> 2];
                               if (!(($10 | 0) != ($22 | 0) | ($6 | 0) != ($15 | 0))) {
                                if ($7 >>> 0 < HEAPU32[$9 + 16 >> 2]) {
                                 break block57
                                }
                                $4 = $5;
                                break block55;
                               }
                               if (($6 | 0) == ($15 | 0) & $10 >>> 0 < $22 >>> 0 | $6 >>> 0 < $15 >>> 0) {
                                break block57
                               }
                               $4 = $5;
                               break block55;
                              }
                              $15 = HEAP32[$9 + 20 >> 2];
                              $5 = $8 + Math_imul($5, 24) | 0;
                              HEAP32[$5 + 16 >> 2] = HEAP32[$9 + 16 >> 2];
                              HEAP32[$5 + 20 >> 2] = $15;
                              $15 = HEAP32[$9 + 12 >> 2];
                              HEAP32[$5 + 8 >> 2] = HEAP32[$9 + 8 >> 2];
                              HEAP32[$5 + 12 >> 2] = $15;
                              $15 = HEAP32[$9 + 4 >> 2];
                              HEAP32[$5 >> 2] = HEAP32[$9 >> 2];
                              HEAP32[$5 + 4 >> 2] = $15;
                              if ($3) {
                               continue
                              }
                              break;
                             };
                            }
                            $4 = $8 + Math_imul($4, 24) | 0;
                            HEAP32[$4 + 20 >> 2] = $21;
                            HEAP32[$4 + 16 >> 2] = $7;
                            HEAP32[$4 + 8 >> 2] = $10;
                            HEAP32[$4 + 12 >> 2] = $6;
                            HEAP32[$4 >> 2] = $18;
                            HEAP32[$4 + 4 >> 2] = $11;
                            $6 = HEAP32[$0 + 136 >> 2];
                           }
                           block147 : {
                            block106 : {
                             block108 : {
                              block78 : {
                               block84 : {
                                block85 : {
                                 block86 : {
                                  block90 : {
                                   block94 : {
                                    block100 : {
                                     block102 : {
                                      block109 : {
                                       block107 : {
                                        block105 : {
                                         block101 : {
                                          block99 : {
                                           block97 : {
                                            block95 : {
                                             block81 : {
                                              block80 : {
                                               block71 : {
                                                block63 : {
                                                 block62 : {
                                                  if ($6 >>> 0 > $12 >>> 0) {
                                                   $3 = $16 + HEAP32[$0 + 132 >> 2] | 0;
                                                   $18 = HEAP32[$3 >> 2];
                                                   HEAP32[$3 >> 2] = -1;
                                                   $5 = HEAPU8[$3 + 60 | 0];
                                                   $4 = HEAP32[$3 + 56 >> 2];
                                                   $8 = HEAP32[$3 + 52 >> 2];
                                                   $6 = HEAP32[$3 + 48 >> 2];
                                                   $22 = HEAP32[$3 + 20 >> 2];
                                                   $23 = HEAP32[$3 + 16 >> 2];
                                                   $7 = HEAP32[$3 + 12 >> 2];
                                                   $15 = HEAP32[$3 + 8 >> 2];
                                                   $9 = HEAP32[$3 + 4 >> 2];
                                                   $3 = HEAP32[$0 + 148 >> 2];
                                                   if (($3 | 0) == HEAP32[$0 + 140 >> 2]) {
                                                    _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($30)
                                                   }
                                                   HEAP32[$0 + 148 >> 2] = $3 + 1;
                                                   HEAP32[HEAP32[$0 + 144 >> 2] + ($3 << 2) >> 2] = $12;
                                                   HEAP32[$0 + 164 >> 2] = HEAP32[$0 + 164 >> 2] - 1;
                                                   if (($18 | 0) == -1) {
                                                    break block39
                                                   }
                                                   block64 : {
                                                    block61 : {
                                                     if ($5 & 1) {
                                                      break block61
                                                     }
                                                     $3 = HEAP32[$0 + 376 >> 2];
                                                     if ($6 >>> 0 >= $3 >>> 0) {
                                                      break block62
                                                     }
                                                     if ($3 >>> 0 <= $8 >>> 0) {
                                                      break block63
                                                     }
                                                     $11 = HEAP32[$0 + 372 >> 2];
                                                     $10 = Math_imul($8, 176);
                                                     $5 = $11 + $10 | 0;
                                                     if (HEAP32[($11 + Math_imul($6, 176) | 0) + 168 >> 2] != HEAP32[$5 + 168 >> 2]) {
                                                      break block61
                                                     }
                                                     if (HEAPU8[$5 + 173 | 0] == 3) {
                                                      break block64
                                                     }
                                                     $11 = HEAP32[$0 + 196 >> 2];
                                                     $12 = $11;
                                                     $16 = $11 + 1 | 0;
                                                     $11 = HEAP32[$0 + 192 >> 2] + 1 | 0;
                                                     $13 = $11 ? $12 : $16;
                                                     HEAP32[$0 + 192 >> 2] = $11;
                                                     HEAP32[$0 + 196 >> 2] = $13;
                                                     block69 : {
                                                      switch ((($18 | 0) >= 0 ? 2 : $18 ^ -2147483648) - 1 | 0) {
                                                      default:
                                                       if (HEAPU32[$5 + 156 >> 2] < $4 >>> 0) {
                                                        _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $8, $4);
                                                        $3 = HEAP32[$0 + 376 >> 2];
                                                       }
                                                       if ($3 >>> 0 <= $8 >>> 0) {
                                                        break block71
                                                       }
                                                       $5 = 0;
                                                       $13 = 0;
                                                       $3 = $10 + HEAP32[$0 + 372 >> 2] | 0;
                                                       $7 = HEAP32[$3 + 64 >> 2];
                                                       if ($7) {
                                                        $13 = HEAP32[(HEAP32[$3 + 60 >> 2] + ($7 << 3) | 0) - 8 >> 2]
                                                       }
                                                       $16 = HEAP32[$3 + 156 >> 2];
                                                       block73 : {
                                                        if (($16 | 0) != ($4 | 0)) {
                                                         break block73
                                                        }
                                                        if (HEAP32[$3 >> 2] != 0 & ($6 | 0) != HEAP32[$3 + 4 >> 2]) {
                                                         break block73
                                                        }
                                                        if ($9 >>> 0 <= $13 >>> 0) {
                                                         if ($7 >>> 0 > $15 >>> 0) {
                                                          break block73
                                                         }
                                                         if (($9 | 0) != ($13 | 0)) {
                                                          break block73
                                                         }
                                                        }
                                                        $7 = HEAP32[$0 + 312 >> 2];
                                                        $15 = HEAP32[$0 + 316 >> 2];
                                                        $4 = HEAP32[$0 + 20 >> 2];
                                                        $11 = $4;
                                                        $13 = HEAP32[$0 + 16 >> 2];
                                                        block77 : {
                                                         if (!($4 | $13)) {
                                                          $4 = 0;
                                                          $12 = 0;
                                                          break block77;
                                                         }
                                                         $21 = HEAP32[$0 + 324 >> 2];
                                                         $12 = $21 ^ HEAP32[$0 + 340 >> 2];
                                                         $4 = HEAP32[$0 + 332 >> 2];
                                                         $22 = HEAP32[$0 + 320 >> 2];
                                                         $23 = $22 ^ HEAP32[$0 + 336 >> 2];
                                                         $5 = HEAP32[$0 + 328 >> 2];
                                                         HEAP32[$0 + 328 >> 2] = $23 ^ $5;
                                                         HEAP32[$0 + 332 >> 2] = $4 ^ $12;
                                                         $20 = HEAP32[$0 + 344 >> 2] ^ $5;
                                                         $26 = HEAP32[$0 + 348 >> 2] ^ $4;
                                                         (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($20, $26, 45)), HEAP32[wasm2js_i32$0 + 344 >> 2] = wasm2js_i32$1;
                                                         HEAP32[$0 + 348 >> 2] = i64toi32_i32$HIGH_BITS;
                                                         HEAP32[$0 + 336 >> 2] = $5 << 17 ^ $23;
                                                         HEAP32[$0 + 340 >> 2] = ($4 << 17 | $5 >>> 15) ^ $12;
                                                         HEAP32[$0 + 320 >> 2] = $22 ^ $20;
                                                         HEAP32[$0 + 324 >> 2] = $21 ^ $26;
                                                         __multi3($14, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($5, $4, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $13, $11);
                                                         $4 = HEAP32[$14 + 12 >> 2];
                                                         $12 = HEAP32[$14 + 8 >> 2];
                                                        }
                                                        HEAP32[$3 + 4 >> 2] = $6;
                                                        $5 = 1;
                                                        HEAP32[$3 >> 2] = 1;
                                                        $11 = $11 + $15 | 0;
                                                        $20 = $7;
                                                        $7 = $7 + $13 | 0;
                                                        $4 = $4 + ($20 >>> 0 > $7 >>> 0 ? $11 + 1 | 0 : $11) | 0;
                                                        $20 = $4 + 1 | 0;
                                                        $11 = $4;
                                                        $4 = $7 + $12 | 0;
                                                        $7 = $4 >>> 0 < $12 >>> 0 ? $20 : $11;
                                                        HEAP32[$3 + 32 >> 2] = $4;
                                                        HEAP32[$3 + 36 >> 2] = $7;
                                                       }
                                                       HEAP32[$14 + 40 >> 2] = -2147483647;
                                                       HEAP8[$14 + 44 | 0] = $5;
                                                       _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $8, $6, $16, $14 + 40 | 0);
                                                       break block78;
                                                      case 0:
                                                       if (HEAPU32[$5 + 156 >> 2] < $4 >>> 0) {
                                                        _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $8, $4);
                                                        $3 = HEAP32[$0 + 376 >> 2];
                                                       }
                                                       if ($3 >>> 0 <= $8 >>> 0) {
                                                        break block80
                                                       }
                                                       $3 = $10 + HEAP32[$0 + 372 >> 2] | 0;
                                                       if (HEAPU8[$3 + 173 | 0] != 1) {
                                                        break block78
                                                       }
                                                       if (($4 | 0) != HEAP32[$3 + 156 >> 2]) {
                                                        break block78
                                                       }
                                                       $4 = HEAP32[$3 + 112 >> 2];
                                                       if ($4 >>> 0 <= $6 >>> 0) {
                                                        break block81
                                                       }
                                                       $4 = HEAP32[$3 + 108 >> 2] + ($6 << 3) | 0;
                                                       HEAP32[$4 >> 2] = -1;
                                                       HEAP32[$4 + 4 >> 2] = -1;
                                                       $4 = HEAP32[$3 + 76 >> 2];
                                                       if (!($9 & 1)) {
                                                        if ($4 >>> 0 > $6 >>> 0) {
                                                         $5 = HEAP32[$3 + 72 >> 2];
                                                         if (!HEAPU8[$6 + $5 | 0]) {
                                                          break block84
                                                         }
                                                         $4 = -1;
                                                         break block85;
                                                        }
                                                        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1055212);
                                                        wasm2js_trap();
                                                       }
                                                       if ($4 >>> 0 > $6 >>> 0) {
                                                        break block86
                                                       }
                                                       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1055228);
                                                       wasm2js_trap();
                                                      case 1:
                                                       $13 = HEAP32[$0 + 312 >> 2];
                                                       $26 = HEAP32[$0 + 316 >> 2];
                                                       if (HEAPU32[$5 + 156 >> 2] < $4 >>> 0) {
                                                        _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $8, $4);
                                                        $3 = HEAP32[$0 + 376 >> 2];
                                                       }
                                                       block89 : {
                                                        if ($3 >>> 0 > $8 >>> 0) {
                                                         $5 = 0;
                                                         $11 = $10 + HEAP32[$0 + 372 >> 2] | 0;
                                                         if (($4 | 0) == HEAP32[$11 + 156 >> 2]) {
                                                          break block89
                                                         }
                                                         $4 = 0;
                                                         break block90;
                                                        }
                                                        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $3, 1054876);
                                                        wasm2js_trap();
                                                       }
                                                       $4 = HEAP32[$0 + 20 >> 2];
                                                       $12 = $4;
                                                       $16 = HEAP32[$0 + 16 >> 2];
                                                       block92 : {
                                                        if (!($4 | $16)) {
                                                         $4 = 0;
                                                         $5 = 0;
                                                         break block92;
                                                        }
                                                        $20 = HEAP32[$0 + 324 >> 2];
                                                        $21 = $20 ^ HEAP32[$0 + 340 >> 2];
                                                        $4 = HEAP32[$0 + 332 >> 2];
                                                        $25 = HEAP32[$0 + 320 >> 2];
                                                        $27 = $25 ^ HEAP32[$0 + 336 >> 2];
                                                        $5 = HEAP32[$0 + 328 >> 2];
                                                        HEAP32[$0 + 328 >> 2] = $27 ^ $5;
                                                        HEAP32[$0 + 332 >> 2] = $4 ^ $21;
                                                        $24 = HEAP32[$0 + 344 >> 2] ^ $5;
                                                        $28 = HEAP32[$0 + 348 >> 2] ^ $4;
                                                        (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($24, $28, 45)), HEAP32[wasm2js_i32$0 + 344 >> 2] = wasm2js_i32$1;
                                                        HEAP32[$0 + 348 >> 2] = i64toi32_i32$HIGH_BITS;
                                                        HEAP32[$0 + 336 >> 2] = $5 << 17 ^ $27;
                                                        HEAP32[$0 + 340 >> 2] = ($4 << 17 | $5 >>> 15) ^ $21;
                                                        HEAP32[$0 + 320 >> 2] = $25 ^ $24;
                                                        HEAP32[$0 + 324 >> 2] = $20 ^ $28;
                                                        __multi3($14 + 16 | 0, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($5, $4, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $16, $12);
                                                        $4 = HEAP32[$14 + 28 >> 2];
                                                        $5 = HEAP32[$14 + 24 >> 2];
                                                       }
                                                       $12 = $12 + $26 | 0;
                                                       $24 = $12 + 1 | 0;
                                                       $20 = $12;
                                                       $12 = $13 + $16 | 0;
                                                       $4 = $4 + ($13 >>> 0 > $12 >>> 0 ? $24 : $20) | 0;
                                                       $20 = $4 + 1 | 0;
                                                       $16 = $4;
                                                       $4 = $5 + $12 | 0;
                                                       $5 = $5 >>> 0 > $4 >>> 0 ? $20 : $16;
                                                       $13 = HEAPU8[$11 + 173 | 0];
                                                       if (!$13) {
                                                        HEAP32[$11 + 32 >> 2] = $4;
                                                        HEAP32[$11 + 36 >> 2] = $5;
                                                        break block94;
                                                       }
                                                       _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($11);
                                                       HEAP32[$11 + 32 >> 2] = $4;
                                                       HEAP32[$11 + 36 >> 2] = $5;
                                                       HEAP8[$11 + 173 | 0] = 0;
                                                       if (($13 | 0) == 2) {
                                                        break block95
                                                       }
                                                       break block94;
                                                      case 2:
                                                       if (HEAPU32[$5 + 156 >> 2] < $4 >>> 0) {
                                                        _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $8, $4);
                                                        $3 = HEAP32[$0 + 376 >> 2];
                                                       }
                                                       if ($3 >>> 0 <= $8 >>> 0) {
                                                        break block97
                                                       }
                                                       $11 = HEAP32[$0 + 372 >> 2];
                                                       $5 = $11 + $10 | 0;
                                                       if (HEAPU8[$5 + 173 | 0] != 2) {
                                                        break block78
                                                       }
                                                       if (($4 | 0) != HEAP32[$5 + 156 >> 2]) {
                                                        break block78
                                                       }
                                                       if (!($15 & 1)) {
                                                        $4 = HEAP32[$5 + 100 >> 2];
                                                        if ($4 >>> 0 <= $6 >>> 0) {
                                                         break block99
                                                        }
                                                        $7 = HEAP32[$5 + 96 >> 2] + ($6 << 2) | 0;
                                                        $4 = HEAP32[$7 >> 2];
                                                        $4 = $4 - (($4 | 0) != 0) | 0;
                                                        HEAP32[$7 >> 2] = $4 >>> 0 <= 1 ? 1 : $4;
                                                        break block100;
                                                       }
                                                       $4 = HEAP32[$5 + 88 >> 2];
                                                       if ($4 >>> 0 <= $6 >>> 0) {
                                                        break block101
                                                       }
                                                       $13 = $6 << 2;
                                                       $7 = $13 + HEAP32[$5 + 84 >> 2] | 0;
                                                       $4 = HEAP32[$7 >> 2];
                                                       if ($4 >>> 0 >= $9 >>> 0) {
                                                        break block102
                                                       }
                                                       HEAP32[$7 >> 2] = $9;
                                                       $7 = HEAP32[$5 + 160 >> 2];
                                                       $4 = ($4 >>> 0 < $7 >>> 0 ? $7 : $4) + 1 | 0;
                                                       if ($9 >>> 0 < $4 >>> 0) {
                                                        break block102
                                                       }
                                                       $7 = $7 ^ -1;
                                                       while (1) {
                                                        $12 = $4 + $7 | 0;
                                                        if ($12 >>> 0 < HEAPU32[$5 + 28 >> 2]) {
                                                         $12 = $12 + HEAP32[$5 + 24 >> 2] | 0;
                                                         $15 = HEAP32[$5 + 16 >> 2];
                                                         $12 = HEAP32[$5 + 20 >> 2] + ($12 - ($12 >>> 0 >= $15 >>> 0 ? $15 : 0) << 2) | 0;
                                                         HEAP32[$12 >> 2] = HEAP32[$12 >> 2] + 1;
                                                        }
                                                        if ($4 >>> 0 >= $9 >>> 0) {
                                                         break block102
                                                        }
                                                        $4 = ($4 >>> 0 < $9 >>> 0) + $4 | 0;
                                                        if ($4 >>> 0 <= $9 >>> 0) {
                                                         continue
                                                        }
                                                        break;
                                                       };
                                                       break block102;
                                                      case 3:
                                                       break block69;
                                                      };
                                                     }
                                                     if (HEAPU32[$5 + 156 >> 2] < $4 >>> 0) {
                                                      _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $8, $4);
                                                      $3 = HEAP32[$0 + 376 >> 2];
                                                     }
                                                     if ($3 >>> 0 <= $8 >>> 0) {
                                                      break block105
                                                     }
                                                     $3 = $10 + HEAP32[$0 + 372 >> 2] | 0;
                                                     if (($4 | 0) != HEAP32[$3 + 156 >> 2]) {
                                                      break block78
                                                     }
                                                     if (HEAPU8[$3 + 173 | 0] == 2) {
                                                      break block78
                                                     }
                                                     HEAP32[$3 + 32 >> 2] = 0;
                                                     HEAP32[$3 + 36 >> 2] = 0;
                                                     HEAP8[$3 + 173 | 0] = 0;
                                                     break block78;
                                                    }
                                                    $4 = HEAP32[$0 + 204 >> 2];
                                                    $5 = $4;
                                                    $3 = $4 + 1 | 0;
                                                    $4 = HEAP32[$0 + 200 >> 2] + 1 | 0;
                                                    $3 = $4 ? $5 : $3;
                                                    HEAP32[$0 + 200 >> 2] = $4;
                                                    HEAP32[$0 + 204 >> 2] = $3;
                                                   }
                                                   if (($18 | 0) <= 0) {
                                                    break block106
                                                   }
                                                   $3 = HEAP32[$9 - 4 >> 2];
                                                   $4 = $3 & -8;
                                                   $5 = $18 << 3;
                                                   $3 = $3 & 3;
                                                   if ($4 >>> 0 < $5 + ($3 ? 4 : 8) >>> 0) {
                                                    break block107
                                                   }
                                                   if (!$3) {
                                                    break block108
                                                   }
                                                   if ($4 >>> 0 > $5 + 39 >>> 0) {
                                                    break block109
                                                   }
                                                   break block108;
                                                  }
                                                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($12, $6, 1054572);
                                                  wasm2js_trap();
                                                 }
                                                 _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $3, 1055512);
                                                 wasm2js_trap();
                                                }
                                                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $3, 1055528);
                                                wasm2js_trap();
                                               }
                                               _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $3, 1054828);
                                               wasm2js_trap();
                                              }
                                              _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $3, 1055180);
                                              wasm2js_trap();
                                             }
                                             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1055196);
                                             wasm2js_trap();
                                            }
                                            _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($0);
                                            $3 = HEAP32[$0 + 376 >> 2];
                                            break block94;
                                           }
                                           _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $3, 1055244);
                                           wasm2js_trap();
                                          }
                                          _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1055260);
                                          wasm2js_trap();
                                         }
                                         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1055276);
                                         wasm2js_trap();
                                        }
                                        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $3, 1054812);
                                        wasm2js_trap();
                                       }
                                       _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
                                       wasm2js_trap();
                                      }
                                      _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
                                      wasm2js_trap();
                                     }
                                     $4 = HEAP32[$5 + 100 >> 2];
                                     if ($6 >>> 0 < $4 >>> 0) {
                                      HEAP32[$13 + HEAP32[$5 + 96 >> 2] >> 2] = $9 + 1;
                                      break block100;
                                     }
                                     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1055292);
                                     wasm2js_trap();
                                    }
                                    $4 = HEAP32[$5 + 112 >> 2];
                                    if ($6 >>> 0 < $4 >>> 0) {
                                     $4 = HEAP32[$5 + 108 >> 2] + ($6 << 3) | 0;
                                     HEAP32[$4 >> 2] = 0;
                                     HEAP32[$4 + 4 >> 2] = 0;
                                     _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($11, $3, $8, $6);
                                     _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim20advance_commit_index($0, $8);
                                     break block78;
                                    }
                                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $4, 1055308);
                                    wasm2js_trap();
                                   }
                                   block113 : {
                                    if ($3 >>> 0 > $8 >>> 0) {
                                     $12 = $10 + HEAP32[$0 + 372 >> 2] | 0;
                                     if (!$7) {
                                      break block113
                                     }
                                     $5 = 0;
                                     if (HEAPU32[$12 + 64 >> 2] < $7 >>> 0) {
                                      $4 = 0;
                                      break block90;
                                     }
                                     $4 = 0;
                                     if (($23 | 0) == HEAP32[(HEAP32[$12 + 60 >> 2] + ($7 << 3) | 0) - 8 >> 2]) {
                                      break block113
                                     }
                                     break block90;
                                    }
                                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $3, 1054892);
                                    wasm2js_trap();
                                   }
                                   block116 : {
                                    if (!$15) {
                                     $5 = $7;
                                     break block116;
                                    }
                                    $11 = $15 << 3;
                                    $13 = $7 << 3;
                                    $3 = HEAP32[$12 + 64 >> 2];
                                    $15 = $12 + 56 | 0;
                                    $5 = $7;
                                    $4 = $9;
                                    while (1) {
                                     $7 = HEAP32[$4 >> 2];
                                     if (($7 | 0) != (($3 >>> 0 > $5 >>> 0 ? HEAP32[HEAP32[$12 + 60 >> 2] + $13 >> 2] : 0) | 0)) {
                                      if ($3 >>> 0 >= $5 >>> 0) {
                                       HEAP32[$12 + 64 >> 2] = $5;
                                       $3 = $5;
                                      }
                                      $16 = HEAP32[$4 + 4 >> 2];
                                      if (($3 | 0) == HEAP32[$12 + 56 >> 2]) {
                                       _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtCseywxCc024wH_14raftscope_core3sim5EntryE8grow_oneBQ_($15)
                                      }
                                      $21 = HEAP32[$12 + 60 >> 2] + ($3 << 3) | 0;
                                      HEAP32[$21 + 4 >> 2] = $16;
                                      HEAP32[$21 >> 2] = $7;
                                      $3 = $3 + 1 | 0;
                                      HEAP32[$12 + 64 >> 2] = $3;
                                     }
                                     $4 = $4 + 8 | 0;
                                     $5 = $5 + 1 | 0;
                                     $13 = $13 + 8 | 0;
                                     $11 = $11 - 8 | 0;
                                     if ($11) {
                                      continue
                                     }
                                     break;
                                    };
                                   }
                                   _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10set_commit($0, $8, $22);
                                   $3 = HEAP32[$0 + 376 >> 2];
                                   $4 = 1;
                                  }
                                  if ($3 >>> 0 <= $8 >>> 0) {
                                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $3, 1054908);
                                   wasm2js_trap();
                                  }
                                  $3 = HEAP32[($10 + HEAP32[$0 + 372 >> 2] | 0) + 156 >> 2];
                                  HEAP32[$14 + 44 >> 2] = $5;
                                  HEAP8[$14 + 48 | 0] = $4;
                                  HEAP32[$14 + 40 >> 2] = -2147483645;
                                  _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $8, $6, $3, $14 + 40 | 0);
                                  break block78;
                                 }
                                 $5 = HEAP32[$3 + 72 >> 2];
                                 if (HEAPU8[$6 + $5 | 0]) {
                                  break block84
                                 }
                                 $4 = 1;
                                }
                                HEAP32[$3 + 164 >> 2] = HEAP32[$3 + 164 >> 2] + $4;
                               }
                               HEAP8[$5 + $6 | 0] = $9;
                              }
                              block138 : {
                               block131 : {
                                block126 : {
                                 block136 : {
                                  block127 : {
                                   block124 : {
                                    block125 : {
                                     block123 : {
                                      $4 = HEAP32[$0 + 376 >> 2];
                                      if ($8 >>> 0 < $4 >>> 0) {
                                       $4 = $10 + HEAP32[$0 + 372 >> 2] | 0;
                                       switch (HEAPU8[$4 + 173 | 0] - 1 | 0) {
                                       case 0:
                                        break block123;
                                       case 1:
                                        break block124;
                                       default:
                                        break block125;
                                       };
                                      }
                                      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $4, 1055544);
                                      wasm2js_trap();
                                     }
                                     if (($18 | 0) == -2147483647) {
                                      break block126
                                     }
                                    }
                                    $4 = HEAP32[$0 + 400 >> 2];
                                    if ($4 >>> 0 <= $8 >>> 0) {
                                     break block127
                                    }
                                    $4 = HEAP32[$0 + 316 >> 2];
                                    $6 = $4;
                                    $3 = HEAP32[$0 + 396 >> 2] + ($8 << 3) | 0;
                                    $7 = HEAP32[$0 + 312 >> 2];
                                    HEAP32[$3 >> 2] = $7;
                                    HEAP32[$3 + 4 >> 2] = $4;
                                    break block131;
                                   }
                                   block133 : {
                                    if (!HEAP32[$4 + 148 >> 2]) {
                                     $7 = -1;
                                     $6 = -1;
                                     break block133;
                                    }
                                    $3 = HEAP32[$4 + 144 >> 2];
                                    $7 = HEAP32[$3 >> 2];
                                    $6 = HEAP32[$3 + 4 >> 2];
                                   }
                                   block134 : {
                                    if (HEAP32[$0 + 4 >> 2] | HEAP32[$0 >> 2] != 1) {
                                     break block134
                                    }
                                    if (HEAP32[$4 + 8 >> 2]) {
                                     $3 = HEAP32[$4 + 48 >> 2];
                                     $5 = $3;
                                     $4 = HEAP32[$4 + 52 >> 2];
                                     $3 = ($6 | 0) == ($4 | 0) & $3 >>> 0 < $7 >>> 0 | $4 >>> 0 < $6 >>> 0;
                                     $7 = $3 ? $5 : $7;
                                     $6 = $3 ? $4 : $6;
                                     break block134;
                                    }
                                    $11 = HEAP32[$4 + 40 >> 2];
                                    $5 = HEAP32[$0 + 8 >> 2];
                                    $3 = $11 + $5 | 0;
                                    $4 = HEAP32[$4 + 44 >> 2];
                                    $10 = $4 + HEAP32[$0 + 12 >> 2] | 0;
                                    $5 = $3 >>> 0 < $5 >>> 0 ? $10 + 1 | 0 : $10;
                                    $4 = ($5 | 0) == ($4 | 0) & $3 >>> 0 < $11 >>> 0 | $4 >>> 0 > $5 >>> 0;
                                    $3 = $4 ? -1 : $3;
                                    $11 = $3;
                                    $4 = $4 ? -1 : $5;
                                    $3 = ($6 | 0) == ($4 | 0) & $3 >>> 0 < $7 >>> 0 | $4 >>> 0 < $6 >>> 0;
                                    $7 = $3 ? $11 : $7;
                                    $6 = $3 ? $4 : $6;
                                   }
                                   $4 = HEAP32[$0 + 400 >> 2];
                                   if ($4 >>> 0 <= $8 >>> 0) {
                                    break block136
                                   }
                                   $4 = HEAP32[$0 + 396 >> 2] + ($8 << 3) | 0;
                                   $5 = HEAP32[$4 >> 2];
                                   $3 = HEAP32[$4 + 4 >> 2];
                                   if (!(($3 | 0) == ($6 | 0) & $5 >>> 0 > $7 >>> 0 | $3 >>> 0 > $6 >>> 0)) {
                                    $11 = HEAP32[$0 + 316 >> 2];
                                    if (($11 | 0) == ($3 | 0) & HEAPU32[$0 + 312 >> 2] <= $5 >>> 0 | $3 >>> 0 > $11 >>> 0) {
                                     break block138
                                    }
                                   }
                                   HEAP32[$4 >> 2] = $7;
                                   HEAP32[$4 + 4 >> 2] = $6;
                                   if (($6 & $7) == -1) {
                                    break block138
                                   }
                                   break block131;
                                  }
                                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $4, 1055480);
                                  wasm2js_trap();
                                 }
                                 _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $4, 1055576);
                                 wasm2js_trap();
                                }
                                _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13become_leader($0, $8);
                                block143 : {
                                 $4 = HEAP32[$0 + 376 >> 2];
                                 if ($8 >>> 0 < $4 >>> 0) {
                                  if (HEAPU8[($10 + HEAP32[$0 + 372 >> 2] | 0) + 173 | 0] != 2) {
                                   break block106
                                  }
                                  $4 = HEAP32[$0 + 400 >> 2];
                                  if ($4 >>> 0 <= $8 >>> 0) {
                                   break block143
                                  }
                                  $4 = HEAP32[$0 + 316 >> 2];
                                  $9 = $4;
                                  $3 = HEAP32[$0 + 396 >> 2] + ($8 << 3) | 0;
                                  $6 = HEAP32[$0 + 312 >> 2];
                                  HEAP32[$3 >> 2] = $6;
                                  HEAP32[$3 + 4 >> 2] = $4;
                                  $7 = HEAP32[$0 + 388 >> 2];
                                  if (($7 | 0) == HEAP32[$0 + 380 >> 2]) {
                                   _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($29)
                                  }
                                  HEAP32[$0 + 388 >> 2] = $7 + 1;
                                  $11 = HEAP32[$0 + 384 >> 2];
                                  $4 = $11 + ($7 << 4) | 0;
                                  HEAP32[$4 + 8 >> 2] = $8;
                                  HEAP32[$4 >> 2] = $6;
                                  HEAP32[$4 + 4 >> 2] = $9;
                                  $4 = 0;
                                  block145 : {
                                   if (!$7) {
                                    break block145
                                   }
                                   while (1) {
                                    $3 = $7 - 1 >>> 1 | 0;
                                    $5 = $11 + ($3 << 4) | 0;
                                    $10 = HEAP32[$5 >> 2];
                                    $13 = HEAP32[$5 + 4 >> 2];
                                    if (($6 | 0) == ($10 | 0) & ($9 | 0) == ($13 | 0) ? $8 >>> 0 >= HEAPU32[$5 + 8 >> 2] : ($9 | 0) == ($13 | 0) & $6 >>> 0 >= $10 >>> 0 | $9 >>> 0 > $13 >>> 0) {
                                     $4 = $7;
                                     break block145;
                                    }
                                    $10 = HEAP32[$5 + 12 >> 2];
                                    $7 = $11 + ($7 << 4) | 0;
                                    HEAP32[$7 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                                    HEAP32[$7 + 12 >> 2] = $10;
                                    $10 = HEAP32[$5 + 4 >> 2];
                                    HEAP32[$7 >> 2] = HEAP32[$5 >> 2];
                                    HEAP32[$7 + 4 >> 2] = $10;
                                    $7 = $3;
                                    if ($3) {
                                     continue
                                    }
                                    break;
                                   };
                                  }
                                  $4 = $11 + ($4 << 4) | 0;
                                  HEAP32[$4 + 8 >> 2] = $8;
                                  HEAP32[$4 >> 2] = $6;
                                  HEAP32[$4 + 4 >> 2] = $9;
                                  break block106;
                                 }
                                 _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $4, 1055560);
                                 wasm2js_trap();
                                }
                                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($8, $4, 1055480);
                                wasm2js_trap();
                               }
                               $5 = HEAP32[$0 + 388 >> 2];
                               if (($5 | 0) == HEAP32[$0 + 380 >> 2]) {
                                _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($29)
                               }
                               HEAP32[$0 + 388 >> 2] = $5 + 1;
                               $10 = HEAP32[$0 + 384 >> 2];
                               $4 = $10 + ($5 << 4) | 0;
                               HEAP32[$4 + 8 >> 2] = $8;
                               HEAP32[$4 >> 2] = $7;
                               HEAP32[$4 + 4 >> 2] = $6;
                               $4 = 0;
                               block129 : {
                                if (!$5) {
                                 break block129
                                }
                                while (1) {
                                 $3 = $5 - 1 >>> 1 | 0;
                                 $11 = $10 + ($3 << 4) | 0;
                                 $13 = HEAP32[$11 >> 2];
                                 $12 = HEAP32[$11 + 4 >> 2];
                                 if (($7 | 0) == ($13 | 0) & ($6 | 0) == ($12 | 0) ? $8 >>> 0 >= HEAPU32[$11 + 8 >> 2] : ($6 | 0) == ($12 | 0) & $7 >>> 0 >= $13 >>> 0 | $6 >>> 0 > $12 >>> 0) {
                                  $4 = $5;
                                  break block129;
                                 }
                                 $13 = HEAP32[$11 + 12 >> 2];
                                 $5 = $10 + ($5 << 4) | 0;
                                 HEAP32[$5 + 8 >> 2] = HEAP32[$11 + 8 >> 2];
                                 HEAP32[$5 + 12 >> 2] = $13;
                                 $13 = HEAP32[$11 + 4 >> 2];
                                 HEAP32[$5 >> 2] = HEAP32[$11 >> 2];
                                 HEAP32[$5 + 4 >> 2] = $13;
                                 $5 = $3;
                                 if ($3) {
                                  continue
                                 }
                                 break;
                                };
                               }
                               $4 = $10 + ($4 << 4) | 0;
                               HEAP32[$4 >> 2] = $7;
                               HEAP32[$4 + 4 >> 2] = $6;
                               HEAP32[$4 + 8 >> 2] = $8;
                              }
                              if (($18 | 0) <= 0) {
                               break block106
                              }
                              $3 = HEAP32[$9 - 4 >> 2];
                              $4 = $3 & -8;
                              $5 = $18 << 3;
                              $3 = $3 & 3;
                              if ($4 >>> 0 < $5 + ($3 ? 4 : 8) >>> 0) {
                               break block147
                              }
                              if (!$3) {
                               break block108
                              }
                              if ($4 >>> 0 <= $5 + 39 >>> 0) {
                               break block108
                              }
                              _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
                              wasm2js_trap();
                             }
                             _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($9);
                            }
                            $13 = 1;
                            $11 = HEAP32[$0 + 160 >> 2];
                            if (!$11) {
                             continue label18
                            }
                            continue label19;
                           }
                           _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
                           wasm2js_trap();
                          }
                          $9 = $11 - 2 | 0;
                          block149 : {
                           if (($5 | 0) != ($9 | 0)) {
                            $9 = $7;
                            break block149;
                           }
                           $4 = $10 + Math_imul($9, 24) | 0;
                           $5 = HEAP32[$4 + 20 >> 2];
                           $3 = $10 + Math_imul($7, 24) | 0;
                           HEAP32[$3 + 16 >> 2] = HEAP32[$4 + 16 >> 2];
                           HEAP32[$3 + 20 >> 2] = $5;
                           $5 = HEAP32[$4 + 12 >> 2];
                           HEAP32[$3 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
                           HEAP32[$3 + 12 >> 2] = $5;
                           $5 = HEAP32[$4 + 4 >> 2];
                           HEAP32[$3 >> 2] = HEAP32[$4 >> 2];
                           HEAP32[$3 + 4 >> 2] = $5;
                          }
                          $3 = HEAP32[$14 + 60 >> 2];
                          $4 = $10 + Math_imul($9, 24) | 0;
                          $5 = HEAP32[$14 + 56 >> 2];
                          HEAP32[$4 + 16 >> 2] = $5;
                          HEAP32[$4 + 20 >> 2] = $3;
                          $3 = HEAP32[$14 + 52 >> 2];
                          $6 = $3;
                          $8 = HEAP32[$14 + 48 >> 2];
                          HEAP32[$4 + 8 >> 2] = $8;
                          HEAP32[$4 + 12 >> 2] = $3;
                          $3 = HEAP32[$14 + 44 >> 2];
                          $11 = $3;
                          $12 = HEAP32[$14 + 40 >> 2];
                          HEAP32[$4 >> 2] = $12;
                          HEAP32[$4 + 4 >> 2] = $3;
                          $15 = HEAP32[$4 + 20 >> 2];
                          $4 = 0;
                          block150 : {
                           if (!$9) {
                            break block150
                           }
                           while (1) {
                            block152 : {
                             $3 = $9;
                             $9 = $3 - 1 >>> 1 | 0;
                             $7 = $10 + Math_imul($9, 24) | 0;
                             $16 = HEAP32[$7 >> 2];
                             $18 = HEAP32[$7 + 4 >> 2];
                             if (!(($12 | 0) == ($16 | 0) & ($11 | 0) == ($18 | 0))) {
                              if (($11 | 0) == ($18 | 0) & $12 >>> 0 < $16 >>> 0 | $11 >>> 0 < $18 >>> 0) {
                               break block152
                              }
                              $4 = $3;
                              break block150;
                             }
                             $16 = HEAP32[$7 + 8 >> 2];
                             $18 = HEAP32[$7 + 12 >> 2];
                             if (!(($8 | 0) != ($16 | 0) | ($6 | 0) != ($18 | 0))) {
                              if ($5 >>> 0 < HEAPU32[$7 + 16 >> 2]) {
                               break block152
                              }
                              $4 = $3;
                              break block150;
                             }
                             if (($6 | 0) == ($18 | 0) & $8 >>> 0 < $16 >>> 0 | $6 >>> 0 < $18 >>> 0) {
                              break block152
                             }
                             $4 = $3;
                             break block150;
                            }
                            $18 = HEAP32[$7 + 20 >> 2];
                            $3 = $10 + Math_imul($3, 24) | 0;
                            HEAP32[$3 + 16 >> 2] = HEAP32[$7 + 16 >> 2];
                            HEAP32[$3 + 20 >> 2] = $18;
                            $18 = HEAP32[$7 + 12 >> 2];
                            HEAP32[$3 + 8 >> 2] = HEAP32[$7 + 8 >> 2];
                            HEAP32[$3 + 12 >> 2] = $18;
                            $18 = HEAP32[$7 + 4 >> 2];
                            HEAP32[$3 >> 2] = HEAP32[$7 >> 2];
                            HEAP32[$3 + 4 >> 2] = $18;
                            if ($9) {
                             continue
                            }
                            break;
                           };
                          }
                          $4 = $10 + Math_imul($4, 24) | 0;
                          HEAP32[$4 + 20 >> 2] = $15;
                          HEAP32[$4 + 16 >> 2] = $5;
                          HEAP32[$4 + 8 >> 2] = $8;
                          HEAP32[$4 + 12 >> 2] = $6;
                          HEAP32[$4 >> 2] = $12;
                          HEAP32[$4 + 4 >> 2] = $11;
                          $11 = HEAP32[$0 + 160 >> 2];
                          if ($11) {
                           continue
                          }
                          break;
                         };
                         break;
                        };
                       }
                       $4 = $13 & 1;
                       $13 = 0;
                       if (!$4) {
                        continue label8
                       }
                       continue label9;
                      }
                      $11 = HEAP32[$3 + 8 >> 2];
                      $8 = $12 - 1 | 0;
                      HEAP32[$0 + 388 >> 2] = $8;
                      if ($8) {
                       $3 = $7 + ($8 << 4) | 0;
                       $9 = HEAP32[$3 >> 2];
                       $5 = HEAP32[$3 + 4 >> 2];
                       $6 = $5;
                       $10 = HEAP32[$3 + 8 >> 2];
                       HEAP32[$7 + 8 >> 2] = $10;
                       HEAP32[$7 >> 2] = $9;
                       HEAP32[$7 + 4 >> 2] = $5;
                       $3 = 0;
                       $5 = 1;
                       if ($12 >>> 0 >= 4) {
                        $3 = $8 - 2 | 0;
                        $21 = $3 >>> 0 <= $8 >>> 0 ? $3 : 0;
                        $3 = 0;
                        while (1) {
                         $8 = $7 + ($5 << 4) | 0;
                         $22 = $8 + 16 | 0;
                         $15 = HEAP32[$22 >> 2];
                         $18 = $7 + ($3 << 4) | 0;
                         $20 = $5;
                         $24 = HEAPU32[$8 + 24 >> 2] <= HEAPU32[$8 + 8 >> 2];
                         $3 = HEAP32[$22 + 4 >> 2];
                         $5 = HEAP32[$8 + 4 >> 2];
                         $8 = HEAP32[$8 >> 2];
                         $3 = $20 + (($8 | 0) == ($15 | 0) & ($3 | 0) == ($5 | 0) ? $24 : ($3 | 0) == ($5 | 0) & $8 >>> 0 >= $15 >>> 0 | $3 >>> 0 < $5 >>> 0) | 0;
                         $5 = $7 + ($3 << 4) | 0;
                         $8 = HEAP32[$5 + 4 >> 2];
                         HEAP32[$18 >> 2] = HEAP32[$5 >> 2];
                         HEAP32[$18 + 4 >> 2] = $8;
                         $8 = HEAP32[$5 + 12 >> 2];
                         HEAP32[$18 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                         HEAP32[$18 + 12 >> 2] = $8;
                         $8 = $3 << 1;
                         $5 = $8 | 1;
                         if ($8 >>> 0 < $21 >>> 0) {
                          continue
                         }
                         break;
                        };
                       }
                       block159 : {
                        block158 : {
                         block157 : {
                          if (($5 | 0) == ($12 - 2 | 0)) {
                           $8 = $7 + ($3 << 4) | 0;
                           $3 = $7 + ($5 << 4) | 0;
                           $12 = HEAP32[$3 + 12 >> 2];
                           HEAP32[$8 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                           HEAP32[$8 + 12 >> 2] = $12;
                           $12 = HEAP32[$3 + 4 >> 2];
                           HEAP32[$8 >> 2] = HEAP32[$3 >> 2];
                           HEAP32[$8 + 4 >> 2] = $12;
                           HEAP32[$3 + 8 >> 2] = $10;
                           HEAP32[$3 >> 2] = $9;
                           HEAP32[$3 + 4 >> 2] = $6;
                           $3 = $5;
                           break block157;
                          }
                          $5 = $7 + ($3 << 4) | 0;
                          HEAP32[$5 + 8 >> 2] = $10;
                          HEAP32[$5 >> 2] = $9;
                          HEAP32[$5 + 4 >> 2] = $6;
                          if (!$3) {
                           break block158
                          }
                         }
                         while (1) {
                          $5 = $3 - 1 >>> 1 | 0;
                          $8 = $7 + ($5 << 4) | 0;
                          $12 = HEAP32[$8 >> 2];
                          $18 = HEAP32[$8 + 4 >> 2];
                          if (($9 | 0) == ($12 | 0) & ($6 | 0) == ($18 | 0) ? $10 >>> 0 >= HEAPU32[$8 + 8 >> 2] : ($6 | 0) == ($18 | 0) & $9 >>> 0 >= $12 >>> 0 | $6 >>> 0 > $18 >>> 0) {
                           break block159
                          }
                          $12 = HEAP32[$8 + 12 >> 2];
                          $3 = $7 + ($3 << 4) | 0;
                          HEAP32[$3 + 8 >> 2] = HEAP32[$8 + 8 >> 2];
                          HEAP32[$3 + 12 >> 2] = $12;
                          $12 = HEAP32[$8 + 4 >> 2];
                          HEAP32[$3 >> 2] = HEAP32[$8 >> 2];
                          HEAP32[$3 + 4 >> 2] = $12;
                          $3 = $5;
                          if ($3) {
                           continue
                          }
                          break;
                         };
                        }
                        $3 = 0;
                       }
                       $3 = $7 + ($3 << 4) | 0;
                       HEAP32[$3 + 8 >> 2] = $10;
                       HEAP32[$3 >> 2] = $9;
                       HEAP32[$3 + 4 >> 2] = $6;
                      }
                      $3 = HEAP32[$0 + 400 >> 2];
                      if ($3 >>> 0 <= $11 >>> 0) {
                       break block160
                      }
                      $3 = HEAP32[$0 + 396 >> 2] + ($11 << 3) | 0;
                      if (($4 | 0) != HEAP32[$3 >> 2] | ($16 | 0) != HEAP32[$3 + 4 >> 2]) {
                       continue
                      }
                      break;
                     };
                     $4 = HEAP32[$0 + 212 >> 2];
                     $5 = $4;
                     $3 = $4 + 1 | 0;
                     $4 = HEAP32[$0 + 208 >> 2] + 1 | 0;
                     $3 = $4 ? $5 : $3;
                     HEAP32[$0 + 208 >> 2] = $4;
                     HEAP32[$0 + 212 >> 2] = $3;
                     _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim18start_new_election($0, $11);
                     _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13become_leader($0, $11);
                     $3 = HEAP32[$0 + 376 >> 2];
                     if ($3 >>> 0 <= $11 >>> 0) {
                      break block161
                     }
                     $18 = Math_imul($11, 176);
                     $5 = $18 + HEAP32[$0 + 372 >> 2] | 0;
                     if (HEAPU8[$5 + 173 | 0] != 2) {
                      break block162
                     }
                     $4 = HEAP32[$5 + 28 >> 2];
                     if (!$4) {
                      break block162
                     }
                     $8 = $3 >>> 1 | 0;
                     $6 = HEAP32[$5 + 24 >> 2];
                     $7 = HEAP32[$5 + 20 >> 2] + ($6 << 2) | 0;
                     $9 = HEAP32[$5 + 16 >> 2];
                     $3 = 0;
                     while (1) {
                      if ($8 >>> 0 >= HEAPU32[$7 - (($9 >>> 0 <= $3 + $6 >>> 0 ? $9 : 0) << 2) >> 2]) {
                       break block163
                      }
                      $7 = $7 + 4 | 0;
                      $3 = $3 + 1 | 0;
                      if (($4 | 0) != ($3 | 0)) {
                       continue
                      }
                      break;
                     };
                     $3 = $4;
                     break block164;
                    }
                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $3, 1054636);
                    wasm2js_trap();
                   }
                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $3, 1055164);
                   wasm2js_trap();
                  }
                  if (!$3) {
                   break block162
                  }
                 }
                 $7 = HEAP32[$5 + 160 >> 2] + $3 | 0;
                 $8 = $7 - 1 | 0;
                 if ($8 >>> 0 < HEAPU32[$5 + 64 >> 2]) {
                  $10 = HEAP32[HEAP32[$5 + 60 >> 2] + ($8 << 3) >> 2]
                 } else {
                  $10 = 0
                 }
                 if (($10 | 0) != HEAP32[$5 + 156 >> 2]) {
                  break block162
                 }
                 if ($3 >>> 0 > $4 >>> 0) {
                  break block166
                 }
                 HEAP32[$5 + 28 >> 2] = $4 - $3;
                 $10 = $5;
                 $5 = $3 + $6 | 0;
                 HEAP32[$10 + 24 >> 2] = ($3 | 0) != ($4 | 0) ? $5 - ($5 >>> 0 >= $9 >>> 0 ? $9 : 0) | 0 : 0;
                 _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10set_commit($0, $11, $7);
                }
                block168 : {
                 if (!HEAP32[$0 >> 2]) {
                  $9 = HEAP32[$0 + 376 >> 2];
                  break block168;
                 }
                 $9 = HEAP32[$0 + 376 >> 2];
                 if ($11 >>> 0 >= $9 >>> 0) {
                  break block169
                 }
                 if ($9 >>> 0 < 2) {
                  break block168
                 }
                 $7 = HEAP32[$0 + 372 >> 2];
                 $4 = $7 + $18 | 0;
                 if (HEAPU8[$4 + 173 | 0] != 2) {
                  break block168
                 }
                 $6 = HEAP32[$0 + 16 >> 2];
                 $8 = HEAP32[$0 + 20 >> 2];
                 $3 = HEAP32[$0 + 312 >> 2];
                 $5 = HEAP32[$0 + 316 >> 2];
                 block171 : {
                  if (HEAP32[$4 + 8 >> 2] == 1) {
                   $10 = HEAP32[$4 + 52 >> 2];
                   if (($10 | 0) == ($5 | 0) & HEAPU32[$4 + 48 >> 2] > $3 >>> 0 | $5 >>> 0 < $10 >>> 0) {
                    break block168
                   }
                   $10 = (HEAP32[$4 + 12 >> 2] + 1 >>> 0) % ($9 >>> 0) | 0;
                   if (($10 | 0) == ($11 | 0)) {
                    break block171
                   }
                   HEAP8[$4 + 172 | 0] = 0;
                   HEAP32[$4 + 12 >> 2] = $10;
                   HEAP32[$4 + 8 >> 2] = 1;
                   $5 = $5 + $8 | 0;
                   $8 = $5 + 1 | 0;
                   $12 = $5;
                   $5 = $3 + $6 | 0;
                   $3 = $3 >>> 0 > $5 >>> 0 ? $8 : $12;
                   HEAP32[$4 + 48 >> 2] = $5;
                   HEAP32[$4 + 52 >> 2] = $3;
                   _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($7, $9, $11, $10);
                   break block168;
                  }
                  $15 = HEAP32[$4 + 40 >> 2];
                  $12 = HEAP32[$0 + 8 >> 2];
                  $10 = $15 + $12 | 0;
                  $20 = $10;
                  $13 = HEAP32[$4 + 44 >> 2];
                  $16 = $13 + HEAP32[$0 + 12 >> 2] | 0;
                  $12 = $10 >>> 0 < $12 >>> 0 ? $16 + 1 | 0 : $16;
                  $10 = ($12 | 0) == ($13 | 0) & $10 >>> 0 < $15 >>> 0 | $12 >>> 0 < $13 >>> 0;
                  $13 = $10 ? -1 : $20;
                  $10 = $10 ? -1 : $12;
                  if (($10 | 0) == ($5 | 0) & $3 >>> 0 < $13 >>> 0 | $5 >>> 0 < $10 >>> 0) {
                   break block168
                  }
                  HEAP8[$4 + 172 | 0] = 0;
                  HEAP32[$4 + 8 >> 2] = 1;
                  HEAP32[$0 + 104 >> 2] = $3;
                  HEAP32[$0 + 108 >> 2] = $5;
                  HEAP32[$0 + 96 >> 2] = 1;
                  HEAP32[$0 + 100 >> 2] = 0;
                  $5 = $5 + $8 | 0;
                  $10 = $3;
                  $3 = $3 + $6 | 0;
                  $5 = $10 >>> 0 > $3 >>> 0 ? $5 + 1 | 0 : $5;
                  HEAP32[$4 + 48 >> 2] = $3;
                  HEAP32[$4 + 52 >> 2] = $5;
                  $5 = $4;
                  $4 = ($11 + 1 >>> 0) % ($9 >>> 0) | 0;
                  HEAP32[$5 + 12 >> 2] = $4;
                  $3 = HEAP32[$0 + 244 >> 2];
                  $5 = $3;
                  $6 = $3 + 1 | 0;
                  $3 = HEAP32[$0 + 240 >> 2] + 1 | 0;
                  $5 = $3 ? $5 : $6;
                  HEAP32[$0 + 240 >> 2] = $3;
                  HEAP32[$0 + 244 >> 2] = $5;
                  _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($7, $9, $11, $4);
                  break block168;
                 }
                 HEAP32[$4 + 48 >> 2] = -1;
                 HEAP32[$4 + 52 >> 2] = -1;
                 HEAP32[$4 + 8 >> 2] = 0;
                 HEAP32[$4 + 40 >> 2] = $3;
                 HEAP32[$4 + 44 >> 2] = $5;
                 HEAP32[$0 + 96 >> 2] = 0;
                 HEAP32[$0 + 100 >> 2] = 0;
                }
                block199 : {
                 block175 : {
                  block173 : {
                   block174 : {
                    if ($9 >>> 0 > $11 >>> 0) {
                     $12 = HEAP32[$0 + 372 >> 2];
                     switch (HEAPU8[($18 + $12 | 0) + 173 | 0] - 1 | 0) {
                     case 0:
                      break block173;
                     case 1:
                      break block174;
                     default:
                      break block175;
                     };
                    }
                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $9, 1055656);
                    wasm2js_trap();
                   }
                   $26 = HEAP32[$0 + 312 >> 2];
                   $22 = HEAP32[$0 + 316 >> 2];
                   while (1) {
                    $7 = $12 + $18 | 0;
                    $16 = HEAP32[$7 + 148 >> 2];
                    if (!$16) {
                     break block175
                    }
                    $6 = HEAP32[$7 + 144 >> 2];
                    $3 = $6;
                    $4 = HEAP32[$3 >> 2];
                    $20 = HEAP32[$3 + 4 >> 2];
                    $3 = $20;
                    if (($22 | 0) == ($3 | 0) & $4 >>> 0 > $26 >>> 0 | $3 >>> 0 > $22 >>> 0) {
                     break block175
                    }
                    $9 = HEAP32[$6 + 8 >> 2];
                    $13 = $16 - 1 | 0;
                    HEAP32[$7 + 148 >> 2] = $13;
                    if ($13) {
                     $3 = $6 + ($13 << 4) | 0;
                     $8 = HEAP32[$3 >> 2];
                     $5 = HEAP32[$3 + 4 >> 2];
                     $10 = $5;
                     $15 = HEAP32[$3 + 8 >> 2];
                     HEAP32[$6 + 8 >> 2] = $15;
                     HEAP32[$6 >> 2] = $8;
                     HEAP32[$6 + 4 >> 2] = $5;
                     $3 = 0;
                     $5 = 1;
                     if ($16 >>> 0 >= 4) {
                      $3 = $13 - 2 | 0;
                      $25 = $3 >>> 0 <= $13 >>> 0 ? $3 : 0;
                      $3 = 0;
                      while (1) {
                       $13 = $6 + ($5 << 4) | 0;
                       $27 = $13 + 16 | 0;
                       $23 = HEAP32[$27 >> 2];
                       $21 = $6 + ($3 << 4) | 0;
                       $24 = $5;
                       $28 = HEAPU32[$13 + 24 >> 2] <= HEAPU32[$13 + 8 >> 2];
                       $3 = HEAP32[$27 + 4 >> 2];
                       $5 = HEAP32[$13 + 4 >> 2];
                       $13 = HEAP32[$13 >> 2];
                       $3 = $24 + (($13 | 0) == ($23 | 0) & ($3 | 0) == ($5 | 0) ? $28 : ($3 | 0) == ($5 | 0) & $13 >>> 0 >= $23 >>> 0 | $3 >>> 0 < $5 >>> 0) | 0;
                       $5 = $6 + ($3 << 4) | 0;
                       $13 = HEAP32[$5 + 4 >> 2];
                       HEAP32[$21 >> 2] = HEAP32[$5 >> 2];
                       HEAP32[$21 + 4 >> 2] = $13;
                       $13 = HEAP32[$5 + 12 >> 2];
                       HEAP32[$21 + 8 >> 2] = HEAP32[$5 + 8 >> 2];
                       HEAP32[$21 + 12 >> 2] = $13;
                       $13 = $3 << 1;
                       $5 = $13 | 1;
                       if ($13 >>> 0 < $25 >>> 0) {
                        continue
                       }
                       break;
                      };
                     }
                     block181 : {
                      block180 : {
                       block179 : {
                        if (($5 | 0) == ($16 - 2 | 0)) {
                         $13 = $6 + ($3 << 4) | 0;
                         $3 = $6 + ($5 << 4) | 0;
                         $16 = HEAP32[$3 + 12 >> 2];
                         HEAP32[$13 + 8 >> 2] = HEAP32[$3 + 8 >> 2];
                         HEAP32[$13 + 12 >> 2] = $16;
                         $16 = HEAP32[$3 + 4 >> 2];
                         HEAP32[$13 >> 2] = HEAP32[$3 >> 2];
                         HEAP32[$13 + 4 >> 2] = $16;
                         HEAP32[$3 + 8 >> 2] = $15;
                         HEAP32[$3 >> 2] = $8;
                         HEAP32[$3 + 4 >> 2] = $10;
                         $3 = $5;
                         break block179;
                        }
                        $5 = $6 + ($3 << 4) | 0;
                        HEAP32[$5 + 8 >> 2] = $15;
                        HEAP32[$5 >> 2] = $8;
                        HEAP32[$5 + 4 >> 2] = $10;
                        if (!$3) {
                         break block180
                        }
                       }
                       while (1) {
                        $5 = $3 - 1 >>> 1 | 0;
                        $13 = $6 + ($5 << 4) | 0;
                        $16 = HEAP32[$13 >> 2];
                        $21 = HEAP32[$13 + 4 >> 2];
                        if (($8 | 0) == ($16 | 0) & ($10 | 0) == ($21 | 0) ? $15 >>> 0 >= HEAPU32[$13 + 8 >> 2] : ($10 | 0) == ($21 | 0) & $8 >>> 0 >= $16 >>> 0 | $10 >>> 0 > $21 >>> 0) {
                         break block181
                        }
                        $16 = HEAP32[$13 + 12 >> 2];
                        $3 = $6 + ($3 << 4) | 0;
                        HEAP32[$3 + 8 >> 2] = HEAP32[$13 + 8 >> 2];
                        HEAP32[$3 + 12 >> 2] = $16;
                        $16 = HEAP32[$13 + 4 >> 2];
                        HEAP32[$3 >> 2] = HEAP32[$13 >> 2];
                        HEAP32[$3 + 4 >> 2] = $16;
                        $3 = $5;
                        if ($3) {
                         continue
                        }
                        break;
                       };
                      }
                      $3 = 0;
                     }
                     $3 = $6 + ($3 << 4) | 0;
                     HEAP32[$3 + 8 >> 2] = $15;
                     HEAP32[$3 >> 2] = $8;
                     HEAP32[$3 + 4 >> 2] = $10;
                    }
                    block184 : {
                     block183 : {
                      $3 = HEAP32[$7 + 136 >> 2];
                      if ($9 >>> 0 < $3 >>> 0) {
                       $13 = $9 << 3;
                       $3 = $13 + HEAP32[$7 + 132 >> 2] | 0;
                       if (($4 | 0) == HEAP32[$3 >> 2] & ($20 | 0) == HEAP32[$3 + 4 >> 2]) {
                        break block183
                       }
                       $3 = HEAP32[$0 + 376 >> 2];
                       break block184;
                      }
                      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $3, 1054972);
                      wasm2js_trap();
                     }
                     HEAP32[$3 >> 2] = -1;
                     HEAP32[$3 + 4 >> 2] = -1;
                     block185 : {
                      if (HEAPU8[$7 + 173 | 0] != 2) {
                       break block185
                      }
                      $5 = HEAP32[$0 + 76 >> 2];
                      $21 = HEAP32[$0 + 16 >> 2];
                      $15 = HEAP32[$0 + 20 >> 2];
                      $23 = HEAP32[$0 + 40 >> 2];
                      $20 = HEAP32[$0 + 44 >> 2];
                      $8 = HEAP32[$0 + 312 >> 2];
                      $10 = HEAP32[$0 + 316 >> 2];
                      $4 = HEAP32[$7 + 64 >> 2];
                      block186 : {
                       if (HEAP32[$7 + 8 >> 2] != 1) {
                        break block186
                       }
                       if (($9 | 0) != HEAP32[$7 + 12 >> 2]) {
                        break block186
                       }
                       if (HEAPU8[$7 + 172 | 0]) {
                        break block186
                       }
                       $3 = HEAP32[$7 + 88 >> 2];
                       if ($3 >>> 0 <= $9 >>> 0) {
                        break block187
                       }
                       if (($4 | 0) != HEAP32[HEAP32[$7 + 84 >> 2] + ($9 << 2) >> 2]) {
                        break block186
                       }
                       HEAP8[$7 + 172 | 0] = 1;
                       $4 = HEAP32[$7 + 156 >> 2];
                       HEAP32[$14 + 40 >> 2] = -2147483644;
                       _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $11, $9, $4, $14 + 40 | 0);
                       break block185;
                      }
                      $3 = HEAP32[$7 + 124 >> 2];
                      if ($3 >>> 0 <= $9 >>> 0) {
                       break block188
                      }
                      $3 = HEAP32[$7 + 100 >> 2];
                      $6 = $13 + HEAP32[$7 + 120 >> 2] | 0;
                      $12 = HEAP32[$6 >> 2];
                      $6 = HEAP32[$6 + 4 >> 2];
                      if (!(($10 | 0) == ($6 | 0) & $8 >>> 0 >= $12 >>> 0 | $6 >>> 0 < $10 >>> 0)) {
                       if ($3 >>> 0 <= $9 >>> 0) {
                        break block190
                       }
                       if ($4 >>> 0 < HEAPU32[HEAP32[$7 + 96 >> 2] + ($9 << 2) >> 2]) {
                        break block185
                       }
                       $6 = HEAP32[$7 + 112 >> 2];
                       if ($6 >>> 0 <= $9 >>> 0) {
                        break block191
                       }
                       $6 = $13 + HEAP32[$7 + 108 >> 2] | 0;
                       $12 = HEAP32[$6 >> 2];
                       $6 = HEAP32[$6 + 4 >> 2];
                       if (($10 | 0) == ($6 | 0) & $8 >>> 0 < $12 >>> 0 | $6 >>> 0 > $10 >>> 0) {
                        break block185
                       }
                      }
                      if ($3 >>> 0 <= $9 >>> 0) {
                       break block192
                      }
                      $3 = HEAP32[$7 + 88 >> 2];
                      if ($3 >>> 0 <= $9 >>> 0) {
                       break block193
                      }
                      $12 = $9 << 2;
                      $6 = HEAP32[$12 + HEAP32[$7 + 96 >> 2] >> 2];
                      $3 = $6 - 1 | 0;
                      $5 = $3 + $5 | 0;
                      $5 = $6 >>> 0 > HEAP32[$12 + HEAP32[$7 + 84 >> 2] >> 2] + 1 >>> 0 ? $3 : $4 >>> 0 < $5 >>> 0 ? $4 : $5;
                      $16 = HEAP32[$7 + 60 >> 2];
                      $12 = 0;
                      $6 = $6 - 2 | 0;
                      if ($4 >>> 0 > $6 >>> 0) {
                       $12 = HEAP32[$16 + ($6 << 3) >> 2]
                      }
                      if ($3 >>> 0 > $5 >>> 0) {
                       break block195
                      }
                      if ($4 >>> 0 < $5 >>> 0) {
                       break block195
                      }
                      $4 = $5 - $3 | 0;
                      $6 = 4;
                      if (($3 | 0) != ($5 | 0)) {
                       $25 = $4 << 3;
                       $6 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($25);
                       if (!$6) {
                        break block197
                       }
                       _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($6, $16 + ($3 << 3) | 0, $25);
                      }
                      $16 = HEAP32[$7 + 160 >> 2];
                      HEAP32[$14 + 56 >> 2] = $12;
                      HEAP32[$14 + 52 >> 2] = $3;
                      HEAP32[$14 + 48 >> 2] = $4;
                      HEAP32[$14 + 44 >> 2] = $6;
                      HEAP32[$14 + 40 >> 2] = $4;
                      HEAP32[$14 + 60 >> 2] = $5 >>> 0 < $16 >>> 0 ? $5 : $16;
                      $4 = HEAP32[$7 + 112 >> 2];
                      if ($4 >>> 0 <= $9 >>> 0) {
                       break block198
                      }
                      $4 = $10 + $20 | 0;
                      $3 = $4 + 1 | 0;
                      $5 = $4;
                      $4 = $8 + $23 | 0;
                      $3 = $4 >>> 0 < $8 >>> 0 ? $3 : $5;
                      $5 = $13 + HEAP32[$7 + 108 >> 2] | 0;
                      HEAP32[$5 >> 2] = $4;
                      HEAP32[$5 + 4 >> 2] = $3;
                      $4 = HEAP32[$7 + 124 >> 2];
                      if ($4 >>> 0 <= $9 >>> 0) {
                       break block199
                      }
                      $4 = $13 + HEAP32[$7 + 120 >> 2] | 0;
                      $3 = $8 + (($15 & 1) << 31 | $21 >>> 1) | 0;
                      HEAP32[$4 >> 2] = $3;
                      $5 = $4;
                      $4 = $10 + ($15 >>> 1 | 0) | 0;
                      HEAP32[$5 + 4 >> 2] = $3 >>> 0 < $8 >>> 0 ? $4 + 1 | 0 : $4;
                      _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $11, $9, HEAP32[$7 + 156 >> 2], $14 + 40 | 0);
                     }
                     $12 = HEAP32[$0 + 372 >> 2];
                     $3 = HEAP32[$0 + 376 >> 2];
                     _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($12, $3, $11, $9);
                    }
                    if ($3 >>> 0 > $11 >>> 0) {
                     continue
                    }
                    break;
                   };
                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $3, 1054956);
                   wasm2js_trap();
                  }
                  $7 = 0;
                  $3 = 0;
                  while (1) {
                   block200 : {
                    if (($3 | 0) == ($11 | 0)) {
                     break block200
                    }
                    block202 : {
                     $4 = HEAP32[$0 + 376 >> 2];
                     if ($11 >>> 0 < $4 >>> 0) {
                      $4 = $18 + HEAP32[$0 + 372 >> 2] | 0;
                      if (HEAPU8[$4 + 173 | 0] != 1) {
                       break block200
                      }
                      $5 = HEAP32[$4 + 112 >> 2];
                      if ($5 >>> 0 <= $3 >>> 0) {
                       break block202
                      }
                      $5 = HEAP32[$4 + 108 >> 2] + $7 | 0;
                      $8 = HEAP32[$5 >> 2];
                      $10 = HEAP32[$5 + 4 >> 2];
                      $6 = HEAP32[$0 + 316 >> 2];
                      $12 = $8;
                      $8 = HEAP32[$0 + 312 >> 2];
                      if (($10 | 0) == ($6 | 0) & $12 >>> 0 > $8 >>> 0 | $6 >>> 0 < $10 >>> 0) {
                       break block200
                      }
                      $6 = $6 + HEAP32[$0 + 44 >> 2] | 0;
                      $12 = $6 + 1 | 0;
                      $10 = $6;
                      $6 = $8 + HEAP32[$0 + 40 >> 2] | 0;
                      $8 = $8 >>> 0 > $6 >>> 0 ? $12 : $10;
                      HEAP32[$5 >> 2] = $6;
                      HEAP32[$5 + 4 >> 2] = $8;
                      $5 = HEAP32[$4 + 64 >> 2];
                      if ($5) {
                       $6 = HEAP32[(HEAP32[$4 + 60 >> 2] + ($5 << 3) | 0) - 8 >> 2]
                      } else {
                       $6 = 0
                      }
                      HEAP32[$14 + 48 >> 2] = $5;
                      HEAP32[$14 + 44 >> 2] = $6;
                      HEAP32[$14 + 40 >> 2] = -2147483648;
                      _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $11, $3, HEAP32[$4 + 156 >> 2], $14 + 40 | 0);
                      break block200;
                     }
                     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $4, 1054924);
                     wasm2js_trap();
                    }
                    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $5, 1054940);
                    wasm2js_trap();
                   }
                   $7 = $7 + 8 | 0;
                   $3 = $3 + 1 | 0;
                   if (($9 | 0) != ($3 | 0)) {
                    continue
                   }
                   break;
                  };
                 }
                 _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($0, $11);
                 $13 = 1;
                 continue;
                }
                break;
               };
               break;
              };
              break;
             };
             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $4, 1055132);
             wasm2js_trap();
            }
            _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $4, 1055116);
            wasm2js_trap();
           }
           _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
           wasm2js_trap();
          }
          _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail($3, $5, $4, 1055148);
          wasm2js_trap();
         }
         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $3, 1055100);
         wasm2js_trap();
        }
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $3, 1055084);
        wasm2js_trap();
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $6, 1055068);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $3, 1055052);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $3, 1055036);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($9, $3, 1055020);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($11, $9, 1055608);
   wasm2js_trap();
  }
  _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, $4, 1055720);
  wasm2js_trap();
 }
 
 function rs_seek($0, $1) {
  $0 = $0 | 0;
  $1 = +$1;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0.0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $11 = __stack_pointer - 480 | 0;
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
   $2 = HEAP32[$0 + 316 >> 2];
   if (!(($3 | 0) == ($2 | 0) & HEAPU32[$0 + 312 >> 2] <= $14 >>> 0 | $2 >>> 0 < $3 >>> 0)) {
    $7 = HEAP32[$0 + 512 >> 2];
    block3 : {
     block4 : {
      block5 : {
       $8 = HEAP32[$0 + 516 >> 2];
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
       $4 = $5 + $6 | 0;
       $3 = ($7 + Math_imul($4, 488) | 0) + 312 | 0;
       $12 = HEAP32[$3 >> 2];
       $3 = HEAP32[$3 + 4 >> 2];
       $6 = ($9 | 0) == ($3 | 0) & $12 >>> 0 > $14 >>> 0 | $3 >>> 0 > $9 >>> 0 ? $6 : $4;
       $2 = $2 - $5 | 0;
       if ($2 >>> 0 > 1) {
        continue
       }
       break;
      };
     }
     $2 = ($7 + Math_imul($6, 488) | 0) + 312 | 0;
     $3 = HEAP32[$2 >> 2];
     $2 = HEAP32[$2 + 4 >> 2];
     $2 = (($9 | 0) == ($2 | 0) & $3 >>> 0 <= $14 >>> 0 | $2 >>> 0 < $9 >>> 0) + $6 | 0;
     $2 = $2 - (($2 | 0) != 0) | 0;
    }
    if ($2 >>> 0 >= $8 >>> 0) {
     break block6
    }
    $2 = $7 + Math_imul($2, 488) | 0;
    _RNvXsI_NtCseywxCc024wH_14raftscope_core3simNtB5_3SimNtNtCsedhpoW0refZ_4core5clone5Clone5clone($11, $2);
    _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($0);
    (wasm2js_i32$0 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $11, 480), wasm2js_i32$1 = HEAP32[$2 + 480 >> 2]), HEAP32[wasm2js_i32$0 + 520 >> 2] = wasm2js_i32$1;
   }
   $12 = $0 + 508 | 0;
   while (1) {
    $10 = HEAP32[$0 + 312 >> 2];
    $13 = HEAP32[$0 + 316 >> 2];
    block16 : {
     block13 : {
      block9 : {
       block8 : {
        $16 = HEAP32[$0 + 520 >> 2];
        $7 = $16 >>> 0 >= HEAPU32[$0 + 504 >> 2];
        if (!$7) {
         $4 = HEAP32[$0 + 500 >> 2] + Math_imul($16, 24) | 0;
         $3 = HEAP32[$4 >> 2];
         $2 = HEAP32[$4 + 4 >> 2];
         if (($13 | 0) == ($2 | 0) & $3 >>> 0 <= $10 >>> 0 | $2 >>> 0 < $13 >>> 0) {
          break block8
         }
        }
        if (($9 | 0) == ($13 | 0) & $10 >>> 0 >= $14 >>> 0 | $9 >>> 0 < $13 >>> 0) {
         break block9
        }
        $4 = HEAP32[$0 + 484 >> 2];
        $2 = HEAP32[$0 + 516 >> 2];
        block11 : {
         if (!$2) {
          $6 = 0;
          $15 = 0;
          break block11;
         }
         $2 = (HEAP32[$0 + 512 >> 2] + Math_imul($2, 488) | 0) - 176 | 0;
         $6 = HEAP32[$2 >> 2];
         $15 = HEAP32[$2 + 4 >> 2];
        }
        $2 = $4 + $15 | 0;
        $3 = HEAP32[$0 + 480 >> 2];
        $5 = $6 + $3 | 0;
        $17 = $5 >>> 0 < $6 >>> 0 ? $2 + 1 | 0 : $2;
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
        if (!$7) {
         $4 = HEAP32[$0 + 500 >> 2] + Math_imul($16, 24) | 0;
         $3 = HEAP32[$4 >> 2];
         $7 = $3;
         $4 = HEAP32[$4 + 4 >> 2];
         $3 = ($9 | 0) == ($4 | 0) & $2 >>> 0 > $3 >>> 0 | $4 >>> 0 < $9 >>> 0;
         $2 = $3 ? $7 : $2;
         $3 = $3 ? $4 : $9;
        }
        $4 = $2;
        $5 = $5 ? $17 : $8;
        $2 = ($5 | 0) == ($3 | 0) & $2 >>> 0 > $10 >>> 0 | $3 >>> 0 > $5 >>> 0;
        _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10advance_to($0, $2 ? $10 : $4, $2 ? $5 : $3);
        $2 = HEAP32[$0 + 312 >> 2];
        $3 = HEAP32[$0 + 316 >> 2];
        if (($10 | 0) != ($2 | 0) | ($5 | 0) != ($3 | 0)) {
         continue
        }
        if (($3 | 0) == ($15 | 0) & $2 >>> 0 <= $6 >>> 0 | $3 >>> 0 < $15 >>> 0) {
         continue
        }
        $7 = HEAP32[$0 + 520 >> 2];
        $3 = $7 - 1 | 0;
        $2 = HEAP32[$0 + 504 >> 2];
        if ($3 >>> 0 >= $2 >>> 0) {
         break block13
        }
        $6 = $7 + 1 | 0;
        $2 = (HEAP32[$0 + 500 >> 2] + Math_imul($7, 24) | 0) - 24 | 0;
        while (1) {
         block15 : {
          if (($6 | 0) == 1) {
           $6 = 0;
           break block15;
          }
          $6 = $6 - 1 | 0;
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
        if (($6 | 0) != ($7 | 0)) {
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
       HEAP32[$0 + 520 >> 2] = HEAP32[$0 + 520 >> 2] + 1;
       continue;
      }
      $2 = HEAP32[$0 + 492 >> 2];
      if (!(($2 | 0) == ($13 | 0) & HEAPU32[$0 + 488 >> 2] >= $10 >>> 0 | $2 >>> 0 > $13 >>> 0)) {
       HEAP32[$0 + 488 >> 2] = $10;
       HEAP32[$0 + 492 >> 2] = $13;
      }
      __stack_pointer = $11 + 480 | 0;
      return;
     }
     if (!$7) {
      break block16
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $2, 1055688);
     wasm2js_trap();
    }
    _RNvXsI_NtCseywxCc024wH_14raftscope_core3simNtB5_3SimNtNtCsedhpoW0refZ_4core5clone5Clone5clone($11, $0);
    $8 = HEAP32[$0 + 516 >> 2];
    if (($8 | 0) == HEAP32[$0 + 508 >> 2]) {
     $5 = __stack_pointer - 16 | 0;
     __stack_pointer = $5;
     $3 = HEAP32[$12 >> 2];
     $2 = $3 << 1;
     $4 = $2 >>> 0 <= 4 ? 4 : $2;
     _RNvMs4_NtCsl5a4uRf33NA_5alloc7raw_vecNtB5_11RawVecInner11finish_growCseywxCc024wH_14raftscope_core($5 + 4 | 0, $3, HEAP32[$12 + 4 >> 2], $4, 8, 488);
     if (HEAP32[$5 + 4 >> 2] == 1) {
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(HEAP32[$5 + 8 >> 2]);
      wasm2js_trap();
     }
     $2 = HEAP32[$5 + 8 >> 2];
     HEAP32[$12 >> 2] = $4;
     HEAP32[$12 + 4 >> 2] = $2;
     __stack_pointer = $5 + 16 | 0;
    }
    (wasm2js_i32$0 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy(HEAP32[$0 + 512 >> 2] + Math_imul($8, 488) | 0, $11, 480), wasm2js_i32$1 = $7), HEAP32[wasm2js_i32$0 + 480 >> 2] = wasm2js_i32$1;
    $2 = $8 + 1 | 0;
    HEAP32[$0 + 516 >> 2] = $2;
    if ($2 >>> 0 <= HEAPU32[$0 + 524 >> 2]) {
     continue
    }
    if ($8) {
     $4 = HEAP32[$0 + 512 >> 2];
     _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($4 + 488 | 0);
     $3 = 1;
     if (($8 | 0) != 1) {
      $2 = $4 + 976 | 0;
      $6 = 1;
      while (1) {
       $6 = $6 + 1 | 0;
       block22 : {
        if ($6 & 1) {
         _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCseywxCc024wH_14raftscope_core3sim3SimECshn2Zjkdzlh4_14raftscope_wasm($2);
         break block22;
        }
        _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($4 + Math_imul($3, 488) | 0, $2, 488);
        $3 = $3 + 1 | 0;
       }
       $2 = $2 + 488 | 0;
       if (($6 | 0) != ($8 | 0)) {
        continue
       }
       break;
      };
     }
     HEAP32[$0 + 516 >> 2] = $3;
    }
    $3 = HEAP32[$0 + 480 >> 2];
    $2 = HEAP32[$0 + 484 >> 2] << 1 | $3 >>> 31;
    HEAP32[$0 + 480 >> 2] = $3 << 1;
    HEAP32[$0 + 484 >> 2] = $2;
    continue;
   };
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($2, $8, 1055704);
  wasm2js_trap();
 }
 
 function rs_server($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0;
  $2 = __stack_pointer - 144 | 0;
  __stack_pointer = $2;
  HEAP32[$2 + 20 >> 2] = 0;
  HEAP32[$2 + 12 >> 2] = 0;
  HEAP32[$2 + 16 >> 2] = 1;
  if ($1 >>> 0 < HEAPU32[$0 + 376 >> 2]) {
   $4 = -1;
   $7 = HEAP32[$0 + 372 >> 2] + Math_imul($1, 176) | 0;
   $1 = $7;
   $8 = HEAP32[$1 + 32 >> 2];
   $1 = HEAP32[$1 + 36 >> 2];
   HEAPF64[$2 + 24 >> 3] = ($1 & $8) == -1 ? -1.0 : +($8 >>> 0) + +($1 >>> 0) * 4294967296.0;
   $3 = HEAPU8[$7 + 173 | 0];
   $1 = $3 << 2;
   HEAP32[$2 + 36 >> 2] = HEAP32[$1 + 1056140 >> 2];
   HEAP32[$2 + 32 >> 2] = HEAP32[$1 + 1056124 >> 2];
   $8 = -1;
   $1 = $7 + 156 | 0;
   $10 = $7 + 152 | 0;
   if (HEAP32[$7 >> 2]) {
    $8 = 0;
    $5 = HEAP32[$7 + 4 >> 2];
   } else {
    $5 = -1
   }
   HEAP32[$2 + 40 >> 2] = $5;
   HEAP32[$2 + 44 >> 2] = $8;
   HEAP32[$2 + 52 >> 2] = HEAP32[$7 + 64 >> 2];
   $8 = $7 + 164 | 0;
   $9 = $7 + 168 | 0;
   $6 = $7 + 160 | 0;
   if (HEAP32[$7 + 8 >> 2] == 1) {
    $4 = 0;
    $5 = HEAP32[$7 + 12 >> 2];
   } else {
    $5 = -1
   }
   HEAP32[$2 + 56 >> 2] = $5;
   HEAP32[$2 + 60 >> 2] = $4;
   $5 = $2 + 56 | 0;
   HEAP32[$2 + 136 >> 2] = $5;
   $4 = 8;
   HEAP32[$2 + 140 >> 2] = $4;
   HEAP32[$2 + 128 >> 2] = $8;
   $8 = 3;
   HEAP32[$2 + 132 >> 2] = $8;
   HEAP32[$2 + 120 >> 2] = $9;
   HEAP32[$2 + 124 >> 2] = 3;
   HEAP32[$2 + 112 >> 2] = $2 + 24;
   HEAP32[$2 + 116 >> 2] = 9;
   HEAP32[$2 + 104 >> 2] = $6;
   HEAP32[$2 + 108 >> 2] = 3;
   HEAP32[$2 + 96 >> 2] = $2 + 52;
   HEAP32[$2 + 100 >> 2] = 3;
   HEAP32[$2 + 88 >> 2] = $2 + 40;
   HEAP32[$2 + 92 >> 2] = 8;
   HEAP32[$2 + 80 >> 2] = $1;
   HEAP32[$2 + 84 >> 2] = 3;
   HEAP32[$2 + 72 >> 2] = $2 + 32;
   HEAP32[$2 + 76 >> 2] = 7;
   HEAP32[$2 + 64 >> 2] = $10;
   HEAP32[$2 + 68 >> 2] = 3;
   _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 12 | 0, 1048576, 1048732, $2 - -64 | 0);
   block4 : {
    if (($3 | 0) != 2) {
     $6 = HEAP32[$2 + 20 >> 2];
     break block4;
    }
    $6 = HEAP32[$2 + 20 >> 2];
    if (HEAPU32[$0 + 376 >> 2] >= 65) {
     break block4
    }
    $1 = 0;
    if (HEAP32[$2 + 12 >> 2] - $6 >>> 0 <= 9) {
     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 12 | 0, $6, 10);
     $6 = HEAP32[$2 + 20 >> 2];
    }
    $4 = HEAP32[$2 + 16 >> 2] + $6 | 0;
    $3 = HEAPU8[1051503] | HEAPU8[1051504] << 8;
    HEAP8[$4 + 8 | 0] = $3;
    HEAP8[$4 + 9 | 0] = $3 >>> 8;
    $9 = HEAPU8[1051499] | HEAPU8[1051500] << 8 | (HEAPU8[1051501] << 16 | HEAPU8[1051502] << 24);
    $3 = HEAPU8[1051495] | HEAPU8[1051496] << 8 | (HEAPU8[1051497] << 16 | HEAPU8[1051498] << 24);
    HEAP8[$4 | 0] = $3;
    HEAP8[$4 + 1 | 0] = $3 >>> 8;
    HEAP8[$4 + 2 | 0] = $3 >>> 16;
    HEAP8[$4 + 3 | 0] = $3 >>> 24;
    HEAP8[$4 + 4 | 0] = $9;
    HEAP8[$4 + 5 | 0] = $9 >>> 8;
    HEAP8[$4 + 6 | 0] = $9 >>> 16;
    HEAP8[$4 + 7 | 0] = $9 >>> 24;
    HEAP32[$2 + 20 >> 2] = $6 + 10;
    block6 : {
     $6 = HEAP32[$0 + 376 >> 2];
     if (!$6) {
      break block6
     }
     $4 = $5;
     $9 = 1;
     block10 : {
      while (1) {
       $3 = HEAP32[$10 >> 2];
       while (1) {
        block7 : {
         HEAP32[$2 + 56 >> 2] = $1;
         $5 = $1 + 1 | 0;
         if (($1 | 0) != ($3 | 0)) {
          break block7
         }
         $1 = $5;
         if ($1 >>> 0 < $6 >>> 0) {
          continue
         }
         break block6;
        }
        break;
       };
       if (!$9) {
        $1 = HEAP32[$2 + 20 >> 2];
        if (($1 | 0) == HEAP32[$2 + 12 >> 2]) {
         _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 12 | 0, $1, 1)
        }
        HEAP8[$1 + HEAP32[$2 + 16 >> 2] | 0] = 44;
        HEAP32[$2 + 20 >> 2] = $1 + 1;
        $1 = HEAP32[$2 + 56 >> 2];
       }
       $3 = HEAP32[$7 + 100 >> 2];
       if ($3 >>> 0 <= $1 >>> 0) {
        break block10
       }
       $3 = HEAP32[$7 + 88 >> 2];
       if ($1 >>> 0 < $3 >>> 0) {
        $9 = HEAP32[$7 + 96 >> 2];
        $3 = HEAP32[$7 + 84 >> 2];
        HEAP32[$2 + 64 >> 2] = $4;
        HEAP32[$2 + 68 >> 2] = 3;
        $8 = $3;
        $3 = $1 << 2;
        HEAP32[$2 + 80 >> 2] = $8 + $3;
        HEAP32[$2 + 84 >> 2] = 3;
        HEAP32[$2 + 72 >> 2] = $3 + $9;
        HEAP32[$2 + 76 >> 2] = 3;
        _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 12 | 0, 1048576, 1049350, $2 - -64 | 0);
        $9 = 0;
        $1 = $5;
        if ($6 >>> 0 > $1 >>> 0) {
         continue
        }
        break block6;
       }
       break;
      };
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $3, 1051524);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $3, 1051508);
     wasm2js_trap();
    }
    $1 = HEAP32[$2 + 20 >> 2];
    if (($1 | 0) == HEAP32[$2 + 12 >> 2]) {
     _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 12 | 0, $1, 1)
    }
    HEAP8[$1 + HEAP32[$2 + 16 >> 2] | 0] = 93;
    $6 = $1 + 1 | 0;
    HEAP32[$2 + 20 >> 2] = $6;
   }
   if (($6 | 0) == HEAP32[$2 + 12 >> 2]) {
    _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 12 | 0, $6, 1)
   }
   HEAP8[HEAP32[$2 + 16 >> 2] + $6 | 0] = 125;
   HEAP32[$2 + 20 >> 2] = $6 + 1;
  }
  HEAP32[$2 + 72 >> 2] = HEAP32[$2 + 20 >> 2];
  $1 = HEAP32[$2 + 16 >> 2];
  HEAP32[$2 + 64 >> 2] = HEAP32[$2 + 12 >> 2];
  HEAP32[$2 + 68 >> 2] = $1;
  block17 : {
   block15 : {
    $4 = HEAP32[$0 + 556 >> 2];
    if ($4) {
     $5 = HEAP32[$0 + 560 >> 2];
     $1 = HEAP32[$5 - 4 >> 2];
     $8 = $1 & -8;
     $1 = $1 & 3;
     if ($8 >>> 0 < $4 + ($1 ? 4 : 8) >>> 0) {
      break block15
     }
     if (($1 | 0) != 0 & $8 >>> 0 > $4 + 39 >>> 0) {
      break block17
     }
     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
    }
    $5 = $0 + 556 | 0;
    HEAP32[$5 + 8 >> 2] = HEAP32[$2 + 72 >> 2];
    $1 = HEAP32[$2 + 68 >> 2];
    HEAP32[$5 >> 2] = HEAP32[$2 + 64 >> 2];
    HEAP32[$5 + 4 >> 2] = $1;
    __stack_pointer = $2 + 144 | 0;
    return HEAP32[$0 + 564 >> 2];
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
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
    $9 = HEAPU8[$9 + 1052066 | 0] | HEAPU8[$9 + 1052067 | 0] << 8;
    HEAP8[$5 | 0] = $9;
    HEAP8[$5 + 1 | 0] = $9 >>> 8;
    $8 = $8 - 2 | 0;
    $5 = ($12 - Math_imul($13, 100) & 65535) << 1;
    $5 = HEAPU8[$5 + 1052066 | 0] | HEAPU8[$5 + 1052067 | 0] << 8;
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
   $3 = HEAPU8[$3 + 1052066 | 0] | HEAPU8[$3 + 1052067 | 0] << 8;
   HEAP8[$2 | 0] = $3;
   HEAP8[$2 + 1 | 0] = $3 >>> 8;
   $2 = 0;
  }
  if (!(!($0 | $2) & ($10 | $11) != 0)) {
   $4 = $4 - 1 | 0;
   HEAP8[$4 + ($6 + 12 | 0) | 0] = HEAPU8[($0 << 1) + 1052067 | 0];
  }
  $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, ($10 | 0) >= 0, 1, 0, ($6 + 12 | 0) + $4 | 0, 20 - $4 | 0);
  __stack_pointer = $6 + 32 | 0;
  return $0 | 0;
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
     __inlined_func$_RINvNtNtCsedhpoW0refZ_4core3fmt5float32float_to_decimal_common_shortestdEB6_$74 : {
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
                $3 = $0 ? 1051776 : 1;
                $5 = $0 ? 1051776 : 1051777;
                $0 = $15;
                $15 = $18 & 31;
                $22 = $6 + 48 | 0;
                $13 = $4 << 4;
                $4 = $13;
                $14 = HEAP32[$4 + 1052544 >> 2];
                $4 = HEAP32[$4 + 1052548 >> 2];
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
                $7 = 0 - ($7 + HEAPU16[$13 + 1052552 >> 1] | 0) | 0;
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
                $2 = HEAPU16[$13 + 1052554 >> 1];
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
               _RNvNtCsedhpoW0refZ_4core9panicking5panic(1053840, 28, 1053932);
               wasm2js_trap();
              }
              $1 = $15 >>> 0 < 1e5;
              $9 = $1 ? 4 : 5;
              $12 = $1 ? 1e4 : 1e5;
              break block15;
             }
             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, 81, 1053884);
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
                     _RNvNtNtCsedhpoW0refZ_4core9panicking11panic_const23panic_const_div_by_zero(1053948);
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
                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(17, 17, 1053964);
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
                   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, 17, 1054076);
                   wasm2js_trap();
                  }
                  break folding_inner7;
                 }
                 _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $7, 40, 1051928);
                 wasm2js_trap();
                }
                _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $11, 40, 1051928);
                wasm2js_trap();
               }
               _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(17, 17, 1054060);
               wasm2js_trap();
              }
              if ($1 >>> 0 <= 16) {
               break block29
              }
              _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $5, 17, 1054092);
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
             $47 = $23 ? ($15 ? 1051776 : 1051777) : $15 ? 1051776 : 1;
             $31 = $13 >>> 31 | $23;
             HEAP16[$6 + 1256 >> 1] = 2;
             if (($0 | 0) == 2) {
              break block137
             }
             HEAP32[$6 + 1264 >> 2] = 3;
             HEAP32[$6 + 1260 >> 2] = 1051781;
             $0 = $6 + 1256 | 0;
             break block135;
            }
            HEAP32[$6 + 1264 >> 2] = 3;
            HEAP32[$6 + 1260 >> 2] = 1051778;
            HEAP16[$6 + 1256 >> 1] = 2;
            $47 = 1;
            $12 = 1;
            $0 = $6 + 1256 | 0;
            break block135;
           }
           HEAP32[$6 + 1264 >> 2] = 1;
           HEAP32[$6 + 1260 >> 2] = 1051784;
           $0 = $6 + 1256 | 0;
          }
          HEAP32[$6 + 1100 >> 2] = $12;
          HEAP32[$6 + 1096 >> 2] = $0;
          HEAP32[$6 + 1092 >> 2] = $31;
          HEAP32[$6 + 1088 >> 2] = $47;
          $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter19pad_formatted_parts($19, $6 + 1088 | 0);
          __stack_pointer = $6 + 1424 | 0;
          break __inlined_func$_RINvNtNtCsedhpoW0refZ_4core3fmt5float32float_to_decimal_common_shortestdEB6_$74;
         }
         $0 = __stack_pointer - 16 | 0;
         __stack_pointer = $0;
         HEAP32[$0 + 12 >> 2] = $6 + 1256;
         HEAP32[$0 + 8 >> 2] = $6 + 1088;
         $1 = __stack_pointer - 48 | 0;
         __stack_pointer = $1;
         HEAP32[$1 + 4 >> 2] = 1051760;
         HEAP32[$1 >> 2] = $0 + 8;
         HEAP32[$1 + 12 >> 2] = 1051760;
         HEAP32[$1 + 8 >> 2] = $0 + 12;
         HEAP32[$1 + 20 >> 2] = 2;
         HEAP32[$1 + 16 >> 2] = 1052064;
         HEAP32[$1 + 40 >> 2] = $1 + 8;
         HEAP32[$1 + 44 >> 2] = 11;
         HEAP32[$1 + 32 >> 2] = $1;
         HEAP32[$1 + 36 >> 2] = 11;
         HEAP32[$1 + 24 >> 2] = $1 + 16;
         HEAP32[$1 + 28 >> 2] = 7;
         _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049265, $1 + 24 | 0, 1051856);
         wasm2js_trap();
        }
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(40, 40, 1051928);
        wasm2js_trap();
       }
       _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, 40, 1051928);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051899, 26, 1051928);
      wasm2js_trap();
     }
     return $0 | 0;
    }
    __inlined_func$_RINvNtNtCsedhpoW0refZ_4core3fmt5float29float_to_decimal_common_exactdEB6_$75 : {
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
             $3 = $22 ? ($1 ? 1051776 : 1051777) : $1 ? 1051776 : 1;
             $4 = $39 >>> 31 | $22;
             if (($0 | 0) != 2) {
              break block9
             }
             HEAP16[$8 + 1740 >> 1] = 2;
             if ($29) {
              break block10
             }
             HEAP32[$8 + 1748 >> 2] = 1;
             HEAP32[$8 + 1744 >> 2] = 1051784;
             $0 = $8 + 1740 | 0;
             break block117;
            }
            HEAP32[$8 + 1748 >> 2] = 3;
            HEAP32[$8 + 1744 >> 2] = 1051778;
            HEAP16[$8 + 1740 >> 1] = 2;
            $3 = 1;
            $4 = 0;
            $2 = 1;
            $0 = $8 + 1740 | 0;
            break block117;
           }
           HEAP32[$8 + 1748 >> 2] = 3;
           HEAP32[$8 + 1744 >> 2] = 1051781;
           HEAP16[$8 + 1740 >> 1] = 2;
           $0 = $8 + 1740 | 0;
           break block117;
          }
          HEAP32[$8 + 1756 >> 2] = $29;
          HEAP16[$8 + 1752 >> 1] = 0;
          $2 = 2;
          HEAP32[$8 + 1748 >> 2] = 2;
          HEAP32[$8 + 1744 >> 2] = 1051785;
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
                     $11 = HEAP32[$4 + 1052544 >> 2];
                     $6 = HEAP32[$4 + 1052548 >> 2];
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
                     $13 = -64 - ($2 + HEAPU16[$5 + 1052552 >> 1] | 0) | 0;
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
                     $5 = HEAPU16[$5 + 1052554 >> 1];
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
                    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051787, 37, 1051824);
                    wasm2js_trap();
                   }
                   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1053840, 28, 1053868);
                   wasm2js_trap();
                  }
                  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, 81, 1053884);
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
                 _RNvNtNtCsedhpoW0refZ_4core9panicking11panic_const23panic_const_div_by_zero(1053900);
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
             _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($2, $17, 1053916);
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
              $19 = HEAP32[($5 << 2) + 1054108 >> 2] << 1;
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
                _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($17, $17, 1054028);
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
              _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051872, 27, 1051928);
              wasm2js_trap();
             }
             _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $1, 40, 1051928);
             wasm2js_trap();
            }
            _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail($19, $16, $17, 1054044);
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
              _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($0, $17, 1053980);
              wasm2js_trap();
             }
             _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $16, $17, 1053996);
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
           _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $16, $17, 1054012);
           wasm2js_trap();
          }
          $5 = $8 + 44 | 0;
         }
         $0 = ($39 | 0) < 0;
         $3 = $22 ? ($0 ? 1051776 : 1051777) : $0 ? 1051776 : 1;
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
          HEAP32[$8 + 1744 >> 2] = 1051784;
          $0 = $8 + 1740 | 0;
          break block117;
         }
         HEAP32[$8 + 1756 >> 2] = $29;
         HEAP16[$8 + 1752 >> 1] = 0;
         HEAP32[$8 + 1748 >> 2] = 2;
         HEAP32[$8 + 1744 >> 2] = 1051785;
         $0 = $8 + 1740 | 0;
        }
        HEAP32[$8 + 1588 >> 2] = $2;
        HEAP32[$8 + 1584 >> 2] = $0;
        HEAP32[$8 + 1580 >> 2] = $4;
        HEAP32[$8 + 1576 >> 2] = $3;
        $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter19pad_formatted_parts($10, $8 + 1576 | 0);
        __stack_pointer = $8 + 1904 | 0;
        break __inlined_func$_RINvNtNtCsedhpoW0refZ_4core3fmt5float29float_to_decimal_common_exactdEB6_$75;
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(40, 40, 1051928);
       wasm2js_trap();
      }
      _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $4, 40, 1051928);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051899, 26, 1051928);
     wasm2js_trap();
    }
    return $0 | 0;
   }
   _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $0, 40, 1051928);
   wasm2js_trap();
  }
  _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $2, 40, 1051928);
  wasm2js_trap();
 }
 
 function rs_stats($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0;
  $2 = __stack_pointer - 240 | 0;
  __stack_pointer = $2;
  $7 = HEAP32[$0 + 280 >> 2];
  $1 = $7 - 1e5 | 0;
  $6 = $1 >>> 0 <= $7 >>> 0 ? $1 : 0;
  folding_inner1 : {
   folding_inner0 : {
    block : {
     if (($6 | 0) == ($7 | 0)) {
      break block
     }
     $3 = HEAP32[$0 + 276 >> 2];
     block18 : {
      $9 = $7 - $6 | 0;
      $12 = $9 << 2;
      $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($12);
      if ($1) {
       $5 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($1, $3 + ($6 << 2) | 0, $12);
       block2 : {
        if ($9 >>> 0 < 2) {
         break block2
        }
        if ($9 >>> 0 >= 21) {
         _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortmNvYmNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($5, $9);
         break block2;
        }
        $4 = $5 + 4 | 0;
        block5 : {
         if ($9 & 1) {
          $6 = $4;
          $4 = $5;
          break block5;
         }
         $1 = HEAP32[$5 >> 2];
         $7 = HEAP32[$5 + 4 >> 2];
         if ($1 >>> 0 > $7 >>> 0) {
          $3 = 0;
          block8 : {
           while (1) {
            HEAP32[($3 + $5 | 0) + 4 >> 2] = $1;
            $1 = $5;
            if (!$3) {
             break block8
            }
            $3 = $3 - 4 | 0;
            $6 = $5 + $3 | 0;
            $1 = HEAP32[$6 >> 2];
            if ($7 >>> 0 < $1 >>> 0) {
             continue
            }
            break;
           };
           $1 = $6 + 4 | 0;
          }
          HEAP32[$1 >> 2] = $7;
         }
         $6 = $5 + 8 | 0;
        }
        if (($9 | 0) == 2) {
         break block2
        }
        $11 = $5 + $12 | 0;
        $7 = $6 + 4 | 0;
        while (1) {
         $3 = HEAP32[$4 >> 2];
         $13 = HEAP32[$6 >> 2];
         if ($3 >>> 0 > $13 >>> 0) {
          $1 = $6;
          block11 : {
           while (1) {
            HEAP32[$1 >> 2] = $3;
            $3 = $5;
            if (($4 | 0) == ($5 | 0)) {
             break block11
            }
            $1 = $4;
            $4 = $1 - 4 | 0;
            $3 = HEAP32[$4 >> 2];
            if ($13 >>> 0 < $3 >>> 0) {
             continue
            }
            break;
           };
           $3 = $4 + 4 | 0;
          }
          HEAP32[$3 >> 2] = $13;
         }
         $3 = HEAP32[$6 >> 2];
         $13 = HEAP32[$6 + 4 >> 2];
         if ($3 >>> 0 > $13 >>> 0) {
          $4 = $7;
          while (1) {
           block14 : {
            HEAP32[$4 >> 2] = $3;
            $1 = $4 - 4 | 0;
            if (($1 | 0) == ($5 | 0)) {
             $1 = $5;
             break block14;
            }
            $3 = $4 - 8 | 0;
            $4 = $1;
            $3 = HEAP32[$3 >> 2];
            if ($13 >>> 0 < $3 >>> 0) {
             continue
            }
           }
           break;
          };
          HEAP32[$1 >> 2] = $13;
         }
         $4 = $6 + 4 | 0;
         $7 = $7 + 8 | 0;
         $6 = $6 + 8 | 0;
         if (($11 | 0) != ($6 | 0)) {
          continue
         }
         break;
        };
       }
       $3 = $9 - 1 | 0;
       $1 = (Math_imul($9, 99) >>> 0) / 100 | 0;
       $3 = $1 >>> 0 > $3 >>> 0 ? $3 : $1;
       if ($9 >>> 0 > $3 >>> 0) {
        $1 = HEAP32[$5 - 4 >> 2];
        $6 = $1 & -8;
        $1 = $1 & 3;
        if ($6 >>> 0 < $12 + ($1 ? 4 : 8) >>> 0) {
         break folding_inner0
        }
        $4 = HEAP32[$5 + ($3 << 2) >> 2];
        $3 = HEAP32[$5 + ($9 << 1 & -4) >> 2];
        if (($1 | 0) != 0 & $6 >>> 0 > $12 + 39 >>> 0) {
         break block18
        }
        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($5);
        break block;
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $9, 1051540);
       wasm2js_trap();
      }
      _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
      wasm2js_trap();
     }
     break folding_inner1;
    }
    HEAP32[$2 + 4 >> 2] = $3;
    HEAP32[$2 + 8 >> 2] = $4;
    $9 = HEAP32[$0 + 376 >> 2];
    $4 = Math_imul($9, 176);
    $6 = HEAP32[$0 + 372 >> 2];
    $1 = $4 + $6 | 0;
    $3 = $6;
    block20 : {
     while (1) {
      $5 = $3;
      if (!$4) {
       $5 = 0;
       break block20;
      }
      $4 = $4 - 176 | 0;
      $3 = $5 + 176 | 0;
      if (HEAPU8[$5 + 173 | 0] != 2) {
       continue
      }
      break;
     };
     if (($1 | 0) == ($3 | 0)) {
      break block20
     }
     $11 = $1 - $3 | 0;
     $7 = ($11 >>> 0) / 176 | 0;
     $8 = HEAP32[$5 + 156 >> 2];
     $1 = 0;
     if ($11 - 176 >>> 0 >= 176) {
      $12 = $7 & 1;
      $13 = ($4 >>> 0) / 352 << 1;
      $4 = $3;
      while (1) {
       if (HEAPU8[$4 + 173 | 0] == 2) {
        $11 = HEAP32[$4 + 156 >> 2];
        $7 = $11 >>> 0 < $8 >>> 0;
        $5 = $7 ? $5 : $4;
        $8 = $7 ? $8 : $11;
       }
       if (HEAPU8[$4 + 349 | 0] == 2) {
        $11 = HEAP32[$4 + 332 >> 2];
        $7 = $11 >>> 0 < $8 >>> 0;
        $5 = $7 ? $5 : $4 + 176 | 0;
        $8 = $7 ? $8 : $11;
       }
       $4 = $4 + 352 | 0;
       $1 = $1 + 2 | 0;
       if (($13 | 0) != ($1 | 0)) {
        continue
       }
       break;
      };
      if (!$12) {
       break block20
      }
     }
     $1 = Math_imul($1, 176) + $3 | 0;
     if (HEAPU8[$1 + 173 | 0] != 2) {
      break block20
     }
     $5 = HEAPU32[$1 + 156 >> 2] < $8 >>> 0 ? $5 : $1;
    }
    block24 : {
     if (!$9) {
      break block24
     }
     $10 = HEAP32[$6 + 156 >> 2];
     if (($9 | 0) == 1) {
      break block24
     }
     $1 = (Math_imul($9, 176) - 176 >>> 0) / 176 | 0;
     $3 = $1 & 3;
     $8 = 0;
     if ($1 - 1 >>> 0 >= 3) {
      $4 = $6 + 860 | 0;
      $11 = $1 & 33554428;
      while (1) {
       $1 = HEAP32[$4 - 528 >> 2];
       $7 = $1 >>> 0 < $10 >>> 0 ? $10 : $1;
       $1 = HEAP32[$4 - 352 >> 2];
       $7 = $1 >>> 0 < $7 >>> 0 ? $7 : $1;
       $1 = HEAP32[$4 - 176 >> 2];
       $7 = $1 >>> 0 < $7 >>> 0 ? $7 : $1;
       $1 = HEAP32[$4 >> 2];
       $10 = $1 >>> 0 < $7 >>> 0 ? $7 : $1;
       $4 = $4 + 704 | 0;
       $8 = $8 + 4 | 0;
       if (($11 | 0) != ($8 | 0)) {
        continue
       }
       break;
      };
      if (!$3) {
       break block24
      }
     }
     $4 = ($6 + Math_imul($8, 176) | 0) + 332 | 0;
     while (1) {
      $1 = HEAP32[$4 >> 2];
      $10 = $1 >>> 0 < $10 >>> 0 ? $10 : $1;
      $4 = $4 + 176 | 0;
      $3 = $3 - 1 | 0;
      if ($3) {
       continue
      }
      break;
     };
    }
    HEAP32[$2 + 12 >> 2] = $10;
    $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std(512);
    if (!$1) {
     _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
     wasm2js_trap();
    }
    $20 = $0 + 168 | 0;
    $10 = 0;
    HEAP32[$2 + 24 >> 2] = 0;
    HEAP32[$2 + 20 >> 2] = $1;
    HEAP32[$2 + 16 >> 2] = 512;
    $9 = HEAP32[$0 + 376 >> 2];
    HEAP32[$2 + 28 >> 2] = $9;
    block28 : {
     if ($5) {
      $10 = HEAP32[$5 + 156 >> 2];
      $1 = HEAP32[$5 + 152 >> 2];
      break block28;
     }
     $18 = -1;
     $1 = -1;
    }
    $21 = $0 + 488 | 0;
    $19 = $0 + 312 | 0;
    HEAP32[$2 + 32 >> 2] = $10;
    HEAP32[$2 + 216 >> 2] = $1;
    HEAP32[$2 + 220 >> 2] = $18;
    HEAP32[$2 + 36 >> 2] = HEAP32[$0 + 164 >> 2];
    $16 = $0 + 248 | 0;
    $18 = $0 + 240 | 0;
    $8 = $0 + 232 | 0;
    $14 = $0 + 224 | 0;
    $15 = $0 + 216 | 0;
    $17 = $0 + 208 | 0;
    $13 = $0 + 200 | 0;
    $11 = $0 + 192 | 0;
    $7 = $0 + 184 | 0;
    $6 = $0 + 176 | 0;
    block33 : {
     if ($9) {
      $12 = HEAP32[$0 + 372 >> 2];
      $4 = $9 & 3;
      $3 = 0;
      $10 = 0;
      block32 : {
       block31 : {
        block30 : {
         if ($9 >>> 0 < 4) {
          break block30
         }
         $5 = $12 + 701 | 0;
         $1 = $9 & 16777212;
         while (1) {
          $10 = ((((HEAPU8[$5 - 528 | 0] == 3) + $10 | 0) + (HEAPU8[$5 - 352 | 0] == 3) | 0) + (HEAPU8[$5 - 176 | 0] == 3) | 0) + (HEAPU8[$5 | 0] == 3) | 0;
          $5 = $5 + 704 | 0;
          $3 = $3 + 4 | 0;
          if (($1 | 0) != ($3 | 0)) {
           continue
          }
          break;
         };
         if ($4) {
          break block30
         }
         HEAP32[$2 + 232 >> 2] = $10;
         $4 = $9 & 3;
         break block31;
        }
        $5 = ($12 + Math_imul($3, 176) | 0) + 173 | 0;
        while (1) {
         $10 = (HEAPU8[$5 | 0] == 3) + $10 | 0;
         $5 = $5 + 176 | 0;
         $4 = $4 - 1 | 0;
         if ($4) {
          continue
         }
         break;
        };
        HEAP32[$2 + 232 >> 2] = $10;
        $4 = $9 & 3;
        $3 = 0;
        $10 = 0;
        if ($9 >>> 0 < 4) {
         break block32
        }
       }
       $5 = $12 + 696 | 0;
       $1 = $9 & 16777212;
       $3 = 0;
       $10 = 0;
       while (1) {
        $10 = ((((HEAP32[$5 - 528 >> 2] != 0) + $10 | 0) + (HEAP32[$5 - 352 >> 2] != 0) | 0) + (HEAP32[$5 - 176 >> 2] != 0) | 0) + (HEAP32[$5 >> 2] != 0) | 0;
        $5 = $5 + 704 | 0;
        $3 = $3 + 4 | 0;
        if (($1 | 0) != ($3 | 0)) {
         continue
        }
        break;
       };
       if (!$4) {
        break block33
       }
      }
      $5 = ($12 + Math_imul($3, 176) | 0) + 168 | 0;
      while (1) {
       $10 = (HEAP32[$5 >> 2] != 0) + $10 | 0;
       $5 = $5 + 176 | 0;
       $4 = $4 - 1 | 0;
       if ($4) {
        continue
       }
       break;
      };
      break block33;
     }
     $10 = 0;
     HEAP32[$2 + 232 >> 2] = 0;
    }
    HEAP32[$2 + 236 >> 2] = $10;
    $9 = $2 + 236 | 0;
    HEAP32[$2 + 208 >> 2] = $9;
    HEAP32[$2 + 212 >> 2] = 3;
    $12 = $2 + 232 | 0;
    HEAP32[$2 + 200 >> 2] = $12;
    HEAP32[$2 + 204 >> 2] = 3;
    HEAP32[$2 + 192 >> 2] = $16;
    HEAP32[$2 + 196 >> 2] = 6;
    HEAP32[$2 + 184 >> 2] = $2 + 8;
    HEAP32[$2 + 188 >> 2] = 3;
    HEAP32[$2 + 176 >> 2] = $2 + 4;
    HEAP32[$2 + 180 >> 2] = 3;
    HEAP32[$2 + 168 >> 2] = $18;
    HEAP32[$2 + 172 >> 2] = 6;
    HEAP32[$2 + 160 >> 2] = $8;
    HEAP32[$2 + 164 >> 2] = 6;
    HEAP32[$2 + 152 >> 2] = $14;
    HEAP32[$2 + 156 >> 2] = 6;
    HEAP32[$2 + 144 >> 2] = $15;
    HEAP32[$2 + 148 >> 2] = 6;
    HEAP32[$2 + 136 >> 2] = $17;
    HEAP32[$2 + 140 >> 2] = 6;
    HEAP32[$2 + 128 >> 2] = $13;
    HEAP32[$2 + 132 >> 2] = 6;
    HEAP32[$2 + 120 >> 2] = $11;
    HEAP32[$2 + 124 >> 2] = 6;
    HEAP32[$2 + 112 >> 2] = $7;
    HEAP32[$2 + 116 >> 2] = 6;
    HEAP32[$2 + 104 >> 2] = $6;
    HEAP32[$2 + 108 >> 2] = 6;
    HEAP32[$2 + 96 >> 2] = $20;
    HEAP32[$2 + 100 >> 2] = 6;
    $13 = $2 + 36 | 0;
    HEAP32[$2 + 88 >> 2] = $13;
    HEAP32[$2 + 92 >> 2] = 3;
    HEAP32[$2 + 80 >> 2] = $2 + 12;
    HEAP32[$2 + 84 >> 2] = 3;
    HEAP32[$2 + 72 >> 2] = $2 + 32;
    HEAP32[$2 + 76 >> 2] = 3;
    $3 = $2 + 216 | 0;
    $16 = $3;
    HEAP32[$2 + 64 >> 2] = $3;
    HEAP32[$2 + 68 >> 2] = 8;
    HEAP32[$2 + 56 >> 2] = $2 + 28;
    HEAP32[$2 + 60 >> 2] = 3;
    HEAP32[$2 + 48 >> 2] = $21;
    HEAP32[$2 + 52 >> 2] = 6;
    HEAP32[$2 + 40 >> 2] = $19;
    HEAP32[$2 + 44 >> 2] = 6;
    $1 = $2 + 40 | 0;
    _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1048576, 1050965, $1);
    block34 : {
     $4 = HEAP32[$0 + 460 >> 2];
     if (!$4) {
      break block34
     }
     $11 = HEAP32[$0 + 456 >> 2];
     _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($1, HEAP32[$11 + 4 >> 2], HEAP32[$11 + 8 >> 2], 92, 23644);
     $7 = HEAP32[$2 + 44 >> 2];
     _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($3, $7, HEAP32[$2 + 48 >> 2], 34, 8796);
     block36 : {
      $6 = HEAP32[$2 + 40 >> 2];
      if ($6) {
       $1 = HEAP32[$7 - 4 >> 2];
       $3 = $1 & -8;
       $1 = $1 & 3;
       if ($3 >>> 0 < $6 + ($1 ? 4 : 8) >>> 0) {
        break block36
       }
       if (($1 | 0) != 0 & $3 >>> 0 > $6 + 39 >>> 0) {
        break folding_inner1
       }
       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      }
      HEAP32[$2 + 40 >> 2] = $16;
      HEAP32[$2 + 44 >> 2] = 4;
      _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1048576, 1051375, $2 + 40 | 0);
      block40 : {
       $7 = HEAP32[$2 + 216 >> 2];
       if ($7) {
        $3 = HEAP32[$2 + 220 >> 2];
        $1 = HEAP32[$3 - 4 >> 2];
        $6 = $1 & -8;
        $1 = $1 & 3;
        if ($6 >>> 0 < $7 + ($1 ? 4 : 8) >>> 0) {
         break block40
        }
        if (($1 | 0) != 0 & $6 >>> 0 > $7 + 39 >>> 0) {
         break folding_inner1
        }
        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
       }
       $4 = Math_imul($4, 12) - 12 | 0;
       $5 = 0;
       block51 : {
        while (1) {
         if (($4 | 0) == ($5 | 0)) {
          break block34
         }
         $1 = HEAP32[$2 + 24 >> 2];
         if (($1 | 0) == HEAP32[$2 + 16 >> 2]) {
          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 16 | 0, $1, 1)
         }
         HEAP8[$1 + HEAP32[$2 + 20 >> 2] | 0] = 44;
         HEAP32[$2 + 24 >> 2] = $1 + 1;
         $1 = $5 + $11 | 0;
         _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($2 + 40 | 0, HEAP32[$1 + 16 >> 2], HEAP32[$1 + 20 >> 2], 92, 23644);
         $7 = HEAP32[$2 + 44 >> 2];
         _RINvMs3_NtCsl5a4uRf33NA_5alloc3stre7replacecECshn2Zjkdzlh4_14raftscope_wasm($2 + 216 | 0, $7, HEAP32[$2 + 48 >> 2], 34, 8796);
         block45 : {
          $6 = HEAP32[$2 + 40 >> 2];
          if ($6) {
           $1 = HEAP32[$7 - 4 >> 2];
           $3 = $1 & -8;
           $1 = $1 & 3;
           if ($3 >>> 0 < $6 + ($1 ? 4 : 8) >>> 0) {
            break block45
           }
           if (($1 | 0) != 0 & $3 >>> 0 > $6 + 39 >>> 0) {
            break folding_inner1
           }
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
          }
          HEAP32[$2 + 40 >> 2] = $16;
          HEAP32[$2 + 44 >> 2] = 4;
          _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1048576, 1051375, $2 + 40 | 0);
          $7 = HEAP32[$2 + 216 >> 2];
          if ($7) {
           $3 = HEAP32[$2 + 220 >> 2];
           $1 = HEAP32[$3 - 4 >> 2];
           $6 = $1 & -8;
           $1 = $1 & 3;
           if ($6 >>> 0 < $7 + ($1 ? 4 : 8) >>> 0) {
            break folding_inner0
           }
           if (($1 | 0) != 0 & $6 >>> 0 > $7 + 39 >>> 0) {
            break block51
           }
           _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
          }
          $5 = $5 + 12 | 0;
          if (($5 | 0) != 228) {
           continue
          }
          break block34;
         }
         break;
        };
        break folding_inner0;
       }
       break folding_inner1;
      }
      break folding_inner0;
     }
     break folding_inner0;
    }
    block72 : {
     block77 : {
      block75 : {
       block73 : {
        block54 : {
         $14 = HEAP32[$0 + 292 >> 2];
         block53 : {
          if (!$14) {
           HEAP32[$2 + 232 >> 2] = 0;
           $4 = 0;
           break block53;
          }
          $3 = HEAP32[$0 + 288 >> 2];
          $15 = $14 << 2;
          $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($15);
          if (!$1) {
           break block54
          }
          $4 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($1, $3, $15);
          block55 : {
           if (($14 | 0) == 1) {
            break block55
           }
           if ($14 >>> 0 >= 21) {
            _RINvNtNtNtCsedhpoW0refZ_4core5slice4sort8unstable7ipnsortmNvYmNtNtB8_3cmp10PartialOrd2ltECseywxCc024wH_14raftscope_core($4, $14);
            break block55;
           }
           $3 = $4 + 4 | 0;
           block58 : {
            if ($14 & 1) {
             $6 = $3;
             $3 = $4;
             break block58;
            }
            $1 = HEAP32[$4 >> 2];
            $7 = HEAP32[$4 + 4 >> 2];
            if ($1 >>> 0 > $7 >>> 0) {
             $8 = 0;
             block61 : {
              while (1) {
               HEAP32[($4 + $8 | 0) + 4 >> 2] = $1;
               $1 = $4;
               if (!$8) {
                break block61
               }
               $8 = $8 - 4 | 0;
               $6 = $4 + $8 | 0;
               $1 = HEAP32[$6 >> 2];
               if ($7 >>> 0 < $1 >>> 0) {
                continue
               }
               break;
              };
              $1 = $6 + 4 | 0;
             }
             HEAP32[$1 >> 2] = $7;
            }
            $6 = $4 + 8 | 0;
           }
           if (($14 | 0) == 2) {
            break block55
           }
           $11 = $4 + $15 | 0;
           $7 = $6 + 4 | 0;
           while (1) {
            $8 = HEAP32[$3 >> 2];
            $5 = HEAP32[$6 >> 2];
            if ($8 >>> 0 > $5 >>> 0) {
             $1 = $6;
             block64 : {
              while (1) {
               HEAP32[$1 >> 2] = $8;
               $1 = $4;
               if (($3 | 0) == ($4 | 0)) {
                break block64
               }
               $1 = $3;
               $3 = $1 - 4 | 0;
               $8 = HEAP32[$3 >> 2];
               if ($5 >>> 0 < $8 >>> 0) {
                continue
               }
               break;
              };
              $1 = $3 + 4 | 0;
             }
             HEAP32[$1 >> 2] = $5;
            }
            $8 = HEAP32[$6 >> 2];
            $17 = HEAP32[$6 + 4 >> 2];
            if ($8 >>> 0 > $17 >>> 0) {
             $3 = $7;
             while (1) {
              block67 : {
               HEAP32[$3 >> 2] = $8;
               $1 = $3 - 4 | 0;
               if (($1 | 0) == ($4 | 0)) {
                $1 = $4;
                break block67;
               }
               $5 = $3 - 8 | 0;
               $3 = $1;
               $8 = HEAP32[$5 >> 2];
               if ($17 >>> 0 < $8 >>> 0) {
                continue
               }
              }
              break;
             };
             HEAP32[$1 >> 2] = $17;
            }
            $3 = $6 + 4 | 0;
            $7 = $7 + 8 | 0;
            $6 = $6 + 8 | 0;
            if (($11 | 0) != ($6 | 0)) {
             continue
            }
            break;
           };
          }
          HEAP32[$2 + 232 >> 2] = HEAP32[$4 + ($14 << 1 & -4) >> 2];
          $1 = HEAP32[$4 - 4 >> 2];
          $3 = $1 & -8;
          $1 = $1 & 3;
          if ($3 >>> 0 < $15 + ($1 ? 4 : 8) >>> 0) {
           break folding_inner0
          }
          if (($1 | 0) != 0 & $3 >>> 0 > $15 + 39 >>> 0) {
           break folding_inner1
          }
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
          $4 = HEAP32[$0 + 292 >> 2];
         }
         HEAP32[$2 + 236 >> 2] = $4;
         $4 = HEAP32[$0 >> 2];
         HEAP8[$2 + 36 | 0] = $4;
         $3 = $0 + 264 | 0;
         $1 = $0 + 256 | 0;
         $6 = 0;
         if ($4) {
          $6 = HEAP32[$0 + 12 >> 2];
          $4 = HEAP32[$0 + 8 >> 2];
         } else {
          $4 = 0
         }
         HEAP32[$2 + 216 >> 2] = $4;
         HEAP32[$2 + 220 >> 2] = $6;
         HEAP32[$2 + 80 >> 2] = $16;
         HEAP32[$2 + 84 >> 2] = 6;
         HEAP32[$2 + 64 >> 2] = $9;
         HEAP32[$2 + 68 >> 2] = 3;
         HEAP32[$2 + 56 >> 2] = $12;
         HEAP32[$2 + 60 >> 2] = 3;
         HEAP32[$2 + 48 >> 2] = $3;
         HEAP32[$2 + 52 >> 2] = 6;
         HEAP32[$2 + 40 >> 2] = $1;
         HEAP32[$2 + 44 >> 2] = 6;
         HEAP32[$2 + 72 >> 2] = $13;
         HEAP32[$2 + 76 >> 2] = 5;
         _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1048576, 1051267, $2 + 40 | 0);
         $8 = HEAP32[$0 + 376 >> 2];
         if ($8 >>> 0 > 64) {
          break block72
         }
         if (!$8) {
          break block72
         }
         $14 = $8 << 3;
         $7 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($14);
         if (!$7) {
          break block73
         }
         $17 = HEAP32[$0 + 312 >> 2];
         $9 = HEAP32[$0 + 316 >> 2];
         $10 = HEAP32[$0 + 420 >> 2];
         $3 = HEAP32[$0 + 300 >> 2];
         $15 = HEAP32[$0 + 424 >> 2];
         $12 = HEAP32[$0 + 304 >> 2];
         $5 = 0;
         $4 = $7;
         while (1) {
          $6 = 0;
          $18 = 0;
          if ($5 >>> 0 < $12 >>> 0) {
           $18 = HEAP32[$3 + 4 >> 2];
           $6 = HEAP32[$3 >> 2];
          }
          if (($5 | 0) == ($15 | 0)) {
           break block75
          }
          $1 = 0;
          if (HEAP32[$10 >> 2]) {
           $13 = $10 + 8 | 0;
           $11 = HEAP32[$13 >> 2];
           $1 = $17 - $11 | 0;
           $19 = $9 - (HEAP32[$13 + 4 >> 2] + ($11 >>> 0 > $17 >>> 0) | 0) | 0;
          } else {
           $19 = 0
          }
          $11 = $19 + $18 | 0;
          $19 = $6;
          $6 = $1 + $6 | 0;
          $1 = $19 >>> 0 > $6 >>> 0 ? $11 + 1 | 0 : $11;
          HEAP32[$4 >> 2] = $6;
          HEAP32[$4 + 4 >> 2] = $1;
          $3 = $3 + 8 | 0;
          $4 = $4 + 8 | 0;
          $10 = $10 + 16 | 0;
          $5 = $5 + 1 | 0;
          if (($8 | 0) != ($5 | 0)) {
           continue
          }
          break;
         };
         HEAP32[$2 + 216 >> 2] = $7;
         HEAP32[$2 + 40 >> 2] = $16;
         HEAP32[$2 + 44 >> 2] = 10;
         _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1048576, 1049324, $2 + 40 | 0);
         if (($8 | 0) == 1) {
          break block77
         }
         $4 = $14 - 8 | 0;
         $5 = $7 + 8 | 0;
         while (1) {
          HEAP32[$2 + 216 >> 2] = $5;
          $1 = HEAP32[$2 + 24 >> 2];
          if (($1 | 0) == HEAP32[$2 + 16 >> 2]) {
           _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECshn2Zjkdzlh4_14raftscope_wasm($2 + 16 | 0, $1, 1)
          }
          $5 = $5 + 8 | 0;
          HEAP8[$1 + HEAP32[$2 + 20 >> 2] | 0] = 44;
          HEAP32[$2 + 24 >> 2] = $1 + 1;
          HEAP32[$2 + 40 >> 2] = $16;
          HEAP32[$2 + 44 >> 2] = 10;
          _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1048576, 1049324, $2 + 40 | 0);
          $4 = $4 - 8 | 0;
          if ($4) {
           continue
          }
          break;
         };
         break block77;
        }
        _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(4);
        wasm2js_trap();
       }
       _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($15, $15, 1054400);
      wasm2js_trap();
     }
     $1 = HEAP32[$7 - 4 >> 2];
     $3 = $1 & -8;
     $1 = $1 & 3;
     if ($3 >>> 0 < $14 + ($1 ? 4 : 8) >>> 0) {
      break folding_inner0
     }
     if (!(($1 | 0) != 0 & $3 >>> 0 > $14 + 39 >>> 0)) {
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
      break block72;
     }
     break folding_inner1;
    }
    HEAP32[$2 + 216 >> 2] = HEAP32[$0 + 460 >> 2];
    HEAP32[$2 + 40 >> 2] = $16;
    HEAP32[$2 + 44 >> 2] = 3;
    _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1048576, 1049326, $2 + 40 | 0);
    HEAP32[$2 + 48 >> 2] = HEAP32[$2 + 24 >> 2];
    $1 = HEAP32[$2 + 20 >> 2];
    HEAP32[$2 + 40 >> 2] = HEAP32[$2 + 16 >> 2];
    HEAP32[$2 + 44 >> 2] = $1;
    block85 : {
     $6 = HEAP32[$0 + 556 >> 2];
     if ($6) {
      $3 = HEAP32[$0 + 560 >> 2];
      $1 = HEAP32[$3 - 4 >> 2];
      $4 = $1 & -8;
      $1 = $1 & 3;
      if ($4 >>> 0 < $6 + ($1 ? 4 : 8) >>> 0) {
       break folding_inner0
      }
      if (($1 | 0) != 0 & $4 >>> 0 > $6 + 39 >>> 0) {
       break block85
      }
      _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($3);
     }
     $3 = $0 + 556 | 0;
     HEAP32[$3 + 8 >> 2] = HEAP32[$2 + 48 >> 2];
     $1 = HEAP32[$2 + 44 >> 2];
     HEAP32[$3 >> 2] = HEAP32[$2 + 40 >> 2];
     HEAP32[$3 + 4 >> 2] = $1;
     __stack_pointer = $2 + 240 | 0;
     return HEAP32[$0 + 564 >> 2];
    }
    break folding_inner1;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
  wasm2js_trap();
 }
 
 function rs_text($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 544 >> 2];
 }
 
 function rs_text_len($0) {
  $0 = $0 | 0;
  return HEAP32[$0 + 548 >> 2];
 }
 
 function rs_time($0) {
  $0 = $0 | 0;
  return +(+HEAPU32[$0 + 312 >> 2] + +HEAPU32[$0 + 316 >> 2] * 4294967296.0);
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
       $1 = (HEAP32[$0 + 28 >> 2] << 2) + 1056524 | 0;
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
     (wasm2js_i32$0 = 1056932, wasm2js_i32$1 = HEAP32[264233] & __wasm_rotl_i32($1 >>> 3 | 0)), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
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
  (wasm2js_i32$0 = 1056936, wasm2js_i32$1 = HEAP32[264234] & __wasm_rotl_i32(HEAP32[$0 + 28 >> 2])), HEAP32[wasm2js_i32$0 >> 2] = wasm2js_i32$1;
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
        if (($0 | 0) == HEAP32[264237]) {
         if ((HEAP32[$2 + 4 >> 2] & 3) != 3) {
          break block
         }
         HEAP32[264235] = $1;
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
          if (($2 | 0) == HEAP32[264238]) {
           break block4
          }
          if (($2 | 0) == HEAP32[264237]) {
           break block5
          }
          $3 = $3 & -8;
          _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE12unlink_chunkCs9syRKuynNcS_3std($2, $3);
          $1 = $1 + $3 | 0;
          HEAP32[$0 + 4 >> 2] = $1 | 1;
          HEAP32[$0 + $1 >> 2] = $1;
          if (HEAP32[264237] != ($0 | 0)) {
           break block6
          }
          HEAP32[264235] = $1;
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
        $2 = HEAP32[264233];
        $3 = 1 << ($1 >>> 3);
        block11 : {
         if (!($2 & $3)) {
          HEAP32[264233] = $2 | $3;
          $1 = ($1 & 248) + 1056668 | 0;
          $2 = $1;
          break block11;
         }
         $1 = $1 & 248;
         $2 = $1 + 1056668 | 0;
         $1 = HEAP32[$1 + 1056676 >> 2];
        }
        HEAP32[$2 + 8 >> 2] = $0;
        HEAP32[$1 + 12 >> 2] = $0;
        break folding_inner0;
       }
       HEAP32[264238] = $0;
       $1 = HEAP32[264236] + $1 | 0;
       HEAP32[264236] = $1;
       HEAP32[$0 + 4 >> 2] = $1 | 1;
       if (HEAP32[264237] != ($0 | 0)) {
        break block1
       }
       HEAP32[264235] = 0;
       HEAP32[264237] = 0;
      }
      return;
     }
     HEAP32[264237] = $0;
     $1 = HEAP32[264235] + $1 | 0;
     HEAP32[264235] = $1;
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
   $4 = ($2 << 2) + 1056524 | 0;
   $3 = 1 << $2;
   if (!($3 & HEAP32[264234])) {
    HEAP32[$4 >> 2] = $0;
    HEAP32[$0 + 24 >> 2] = $4;
    HEAP32[$0 + 12 >> 2] = $0;
    HEAP32[$0 + 8 >> 2] = $0;
    HEAP32[264234] = $3 | HEAP32[264234];
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
   _RNvNtCs9syRKuynNcS_3std9panicking15panic_with_hook($0, 1055752, HEAPU8[HEAP32[$1 + 8 >> 2] + 8 | 0]);
   wasm2js_trap();
  }
  HEAP32[$0 >> 2] = -1;
  HEAP32[$0 + 12 >> 2] = $1;
  _RNvNtCs9syRKuynNcS_3std9panicking15panic_with_hook($0, 1055780, HEAPU8[HEAP32[$1 + 8 >> 2] + 8 | 0]);
  wasm2js_trap();
 }
 
 function _RNvXsK_NtCsedhpoW0refZ_4core3fmtNtB5_5ErrorNtB5_5Debug3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return FUNCTION_TABLE[HEAP32[HEAP32[$1 + 4 >> 2] + 12 >> 2]](HEAP32[$1 >> 2], 1051712, 5) | 0;
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
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
  wasm2js_trap();
 }
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str_104($0, $1, $2) {
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
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char_105($0, $1) {
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
  return _RNvNtCsedhpoW0refZ_4core3fmt5write($0, 1051720, $1, $2) | 0;
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
      if (FUNCTION_TABLE[HEAP32[$9 + 12 >> 2]]($10, 1054352, 4) | 0) {
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
   if (!(FUNCTION_TABLE[HEAP32[$2 + 12 >> 2]]($3, 1054352, 4) | 0)) {
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
  return _RNvNtCsedhpoW0refZ_4core3fmt5write($0, 1051976, $1, $2) | 0;
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
     HEAP8[($0 + $4 | 0) - 2 | 0] = HEAPU8[($3 & 15) + 1051744 | 0];
     $0 = $0 - 1 | 0;
     $3 = ($2 & 15) << 28 | $3 >>> 4;
     $2 = $2 >>> 4 | 0;
     if ($3 | $2) {
      continue
     }
     break;
    };
    $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054356, 2, ($0 + $4 | 0) - 1 | 0, 17 - $0 | 0);
    break block2;
   }
   $3 = HEAP32[$0 >> 2];
   $2 = HEAP32[$0 + 4 >> 2];
   $0 = 17;
   while (1) {
    HEAP8[($0 + $4 | 0) - 2 | 0] = HEAPU8[($3 & 15) + 1054358 | 0];
    $0 = $0 - 1 | 0;
    $3 = ($2 & 15) << 28 | $3 >>> 4;
    $2 = $2 >>> 4 | 0;
    if ($3 | $2) {
     continue
    }
    break;
   };
   $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054356, 2, ($0 + $4 | 0) - 1 | 0, 17 - $0 | 0);
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
      _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1048945, $4 + 16 | 0, $3);
      wasm2js_trap();
     }
     HEAP32[$4 + 8 >> 2] = $0;
     HEAP32[$4 + 12 >> 2] = $2;
     HEAP32[$4 + 24 >> 2] = $4 + 12;
     $0 = 3;
     HEAP32[$4 + 28 >> 2] = $0;
     HEAP32[$4 + 16 >> 2] = $4 + 8;
     HEAP32[$4 + 20 >> 2] = 3;
     _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049145, $4 + 16 | 0, $3);
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
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049202, $4 + 16 | 0, $3);
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
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 4 >> 2] + 12 >> 2]](HEAP32[$6 >> 2], $7 ? 1051843 : 1051840, $7 ? 2 : 3) | 0) {
     break block
    }
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 4 >> 2] + 12 >> 2]](HEAP32[$6 >> 2], $1, $2) | 0) {
     break block
    }
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 4 >> 2] + 12 >> 2]](HEAP32[$6 >> 2], 1051845, 2) | 0) {
     break block
    }
    $8 = FUNCTION_TABLE[$4 | 0]($3, $6) | 0;
    break block;
   }
   if (!($7 & 1)) {
    if (FUNCTION_TABLE[HEAP32[HEAP32[$6 + 4 >> 2] + 12 >> 2]](HEAP32[$6 >> 2], 1051847, 3) | 0) {
     break block
    }
   }
   HEAP8[$5 + 15 | 0] = 1;
   HEAP32[$5 + 20 >> 2] = 1051976;
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
   if (_RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write9write_str($5, 1051845, 2)) {
    break block
   }
   if (FUNCTION_TABLE[$4 | 0]($3, $5 + 16 | 0) | 0) {
    break block
   }
   $8 = FUNCTION_TABLE[HEAP32[HEAP32[$5 + 20 >> 2] + 12 >> 2]](HEAP32[$5 + 16 >> 2], 1051850, 2) | 0;
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
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, 40, 1051928);
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
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, 40, 1051928);
      wasm2js_trap();
     }
     (wasm2js_i32$0 = _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($0, $9, 160), wasm2js_i32$1 = $11), HEAP32[wasm2js_i32$0 + 160 >> 2] = wasm2js_i32$1;
     __stack_pointer = $9 + 160 | 0;
     return;
    }
    _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $5, 40, 1051928);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, 40, 1051928);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, 40, 1051928);
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
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, 40, 1051928);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, 40, 1051928);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking5panic(1051944, 29, 1051928);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($2, 40, 1051928);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, 40, 1051928);
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
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1052267, 51, $0);
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
        HEAP32[$5 + 4 >> 2] = 1051785;
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
       HEAP32[$5 + 28 >> 2] = 1052266;
       HEAP16[$5 + 24 >> 1] = 2;
       break block6;
      }
      HEAP16[$5 + 24 >> 1] = 2;
      HEAP32[$5 + 20 >> 2] = 1;
      HEAP32[$5 + 16 >> 2] = 1052266;
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
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1052349, 33, 1052384);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1052400, 31, 1052432);
  wasm2js_trap();
 }
 
 function _RNvNtNtNtNtCsedhpoW0refZ_4core5slice4sort6shared9smallsort22panic_on_ord_violation() {
  _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1052448, 153, 1052524);
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
      $8 = HEAP32[($5 << 2) + 1054108 >> 2] >>> $5 | 0;
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
      $1 = HEAP32[($1 << 2) + 1054108 >> 2];
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
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1054148, 2)
     }
     if ($1 & 32) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1054156, 3)
     }
     if ($1 & 64) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1054168, 5)
     }
     if ($1 & 128) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1054188, 10)
     }
     if ($1 & 256) {
      _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x4010mul_digits($0, 1054228, 19)
     }
     _RNvMs2_NtNtNtCsedhpoW0refZ_4core3num3imp6bignumNtB5_8Big32x408mul_pow2($0, $1);
     return;
    }
    break folding_inner1;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check(40, 40, 1051928);
   wasm2js_trap();
  }
  _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $7, 40, 1051928);
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
         _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, $2, 1054320);
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
      _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, $2, 1054336);
      wasm2js_trap();
     }
     HEAP32[$0 >> 2] = 0;
     return;
    }
    _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $3, $2, 1054304);
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
             if (FUNCTION_TABLE[$3 | 0]($0, 1052e3, 64) | 0) {
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
        if (FUNCTION_TABLE[$3 | 0]($0, 1052e3, $2) | 0) {
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
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim14client_request($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0;
  $3 = $0;
  $0 = HEAP32[$0 + 216 >> 2];
  $2 = HEAP32[$3 + 220 >> 2];
  $0 = $0 + 1 | 0;
  $2 = $0 ? $2 : $2 + 1 | 0;
  HEAP32[$3 + 216 >> 2] = $0;
  HEAP32[$3 + 220 >> 2] = $2;
  $0 = HEAP32[$3 + 376 >> 2];
  if ($1 >>> 0 < $0 >>> 0) {
   $8 = HEAP32[$3 + 372 >> 2];
   $4 = $8 + Math_imul($1, 176) | 0;
   if (!(HEAPU8[$4 + 173 | 0] == 2 & !HEAP32[$4 + 8 >> 2])) {
    $0 = HEAP32[$3 + 228 >> 2];
    $1 = $0;
    $2 = $0 + 1 | 0;
    $0 = HEAP32[$3 + 224 >> 2] + 1 | 0;
    $1 = $0 ? $1 : $2;
    HEAP32[$3 + 224 >> 2] = $0;
    HEAP32[$3 + 228 >> 2] = $1;
    return;
   }
   $11 = HEAP32[$3 + 312 >> 2];
   $12 = HEAP32[$3 + 316 >> 2];
   $5 = HEAP32[$3 + 476 >> 2];
   HEAP32[$3 + 476 >> 2] = $5 + 1;
   $6 = HEAP32[$4 + 156 >> 2];
   $2 = HEAP32[$4 + 64 >> 2];
   if (($2 | 0) == HEAP32[$4 + 56 >> 2]) {
    _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtCseywxCc024wH_14raftscope_core3sim5EntryE8grow_oneBQ_($4 + 56 | 0)
   }
   $7 = HEAP32[$4 + 60 >> 2] + ($2 << 3) | 0;
   HEAP32[$7 + 4 >> 2] = $5;
   HEAP32[$7 >> 2] = $6;
   HEAP32[$4 + 64 >> 2] = $2 + 1;
   $5 = HEAP32[$4 + 16 >> 2];
   $2 = HEAP32[$4 + 28 >> 2];
   if (($5 | 0) == ($2 | 0)) {
    $2 = $4 + 16 | 0;
    $5 = HEAP32[$2 >> 2];
    _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($2);
    $9 = HEAP32[$2 + 8 >> 2];
    $6 = HEAP32[$2 + 12 >> 2];
    if ($9 >>> 0 > $5 - $6 >>> 0) {
     __inlined_func$_RNvMs3_NtNtCsl5a4uRf33NA_5alloc11collections9vec_dequeINtB5_8VecDequemE4growCseywxCc024wH_14raftscope_core$123 : {
      $7 = $6;
      $6 = $5 - $9 | 0;
      $7 = $7 - $6 | 0;
      $10 = HEAP32[$2 >> 2];
      if (!($7 >>> 0 <= $10 - $5 >>> 0 & $6 >>> 0 > $7 >>> 0)) {
       $5 = HEAP32[$2 + 4 >> 2];
       $7 = $10 - $6 | 0;
       _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem7memmove($5 + ($7 << 2) | 0, $5 + ($9 << 2) | 0, $6 << 2);
       HEAP32[$2 + 8 >> 2] = $7;
       break __inlined_func$_RNvMs3_NtNtCsl5a4uRf33NA_5alloc11collections9vec_dequeINtB5_8VecDequemE4growCseywxCc024wH_14raftscope_core$123;
      }
      $2 = HEAP32[$2 + 4 >> 2];
      _RNvNtCsaT5yz1Yhfyz_17compiler_builtins3mem6memcpy($2 + ($5 << 2) | 0, $2, $7 << 2);
     }
    }
    $5 = HEAP32[$4 + 16 >> 2];
    $2 = HEAP32[$4 + 28 >> 2];
   }
   HEAP32[$4 + 28 >> 2] = $2 + 1;
   $2 = HEAP32[$4 + 24 >> 2] + $2 | 0;
   HEAP32[HEAP32[$4 + 20 >> 2] + ($2 - ($2 >>> 0 >= $5 >>> 0 ? $5 : 0) << 2) >> 2] = 1;
   $4 = HEAP32[$3 + 412 >> 2];
   if (($4 | 0) == HEAP32[$3 + 404 >> 2]) {
    $0 = __stack_pointer - 16 | 0;
    __stack_pointer = $0;
    $2 = $3 + 404 | 0;
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
    $8 = HEAP32[$3 + 372 >> 2];
    $0 = HEAP32[$3 + 376 >> 2];
   }
   HEAP32[$3 + 412 >> 2] = $4 + 1;
   $2 = HEAP32[$3 + 408 >> 2] + ($4 << 3) | 0;
   HEAP32[$2 >> 2] = $11;
   HEAP32[$2 + 4 >> 2] = $12;
   if ($0) {
    $2 = 0;
    while (1) {
     if (($1 | 0) != ($2 | 0)) {
      _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($8, $0, $1, $2)
     }
     $2 = $2 + 1 | 0;
     if (($2 | 0) != ($0 | 0)) {
      continue
     }
     break;
    };
   }
   _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim20advance_commit_index($3, $1);
   $0 = HEAP32[$3 + 400 >> 2];
   if ($1 >>> 0 < $0 >>> 0) {
    $0 = HEAP32[$3 + 316 >> 2];
    $5 = $0;
    $2 = HEAP32[$3 + 396 >> 2] + ($1 << 3) | 0;
    $6 = HEAP32[$3 + 312 >> 2];
    HEAP32[$2 >> 2] = $6;
    HEAP32[$2 + 4 >> 2] = $0;
    $0 = HEAP32[$3 + 388 >> 2];
    if (($0 | 0) == HEAP32[$3 + 380 >> 2]) {
     _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($3 + 380 | 0)
    }
    HEAP32[$3 + 388 >> 2] = $0 + 1;
    $7 = HEAP32[$3 + 384 >> 2];
    $3 = $7 + ($0 << 4) | 0;
    HEAP32[$3 + 8 >> 2] = $1;
    HEAP32[$3 >> 2] = $6;
    HEAP32[$3 + 4 >> 2] = $5;
    $2 = 0;
    block10 : {
     if (!$0) {
      break block10
     }
     while (1) {
      $3 = $0 - 1 >>> 1 | 0;
      $4 = $7 + ($3 << 4) | 0;
      $8 = HEAP32[$4 >> 2];
      $9 = HEAP32[$4 + 4 >> 2];
      if (($6 | 0) == ($8 | 0) & ($5 | 0) == ($9 | 0) ? HEAPU32[$4 + 8 >> 2] <= $1 >>> 0 : ($5 | 0) == ($9 | 0) & $6 >>> 0 >= $8 >>> 0 | $5 >>> 0 > $9 >>> 0) {
       $2 = $0;
       break block10;
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
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $0, 1055480);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $0, 1054796);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim9step_down($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $8 = __stack_pointer - 16 | 0;
  __stack_pointer = $8;
  $3 = HEAP32[$0 + 376 >> 2];
  if ($1 >>> 0 < $3 >>> 0) {
   $3 = HEAP32[$0 + 372 >> 2] + Math_imul($1, 176) | 0;
   $16 = HEAPU8[$3 + 173 | 0];
   block5 : {
    block2 : {
     $4 = HEAP32[$3 + 36 >> 2];
     $9 = HEAP32[$0 + 316 >> 2];
     $5 = $9;
     $1 = HEAP32[$3 + 32 >> 2];
     $6 = HEAP32[$0 + 312 >> 2];
     if (!(($4 | 0) == ($5 | 0) & $1 >>> 0 <= $6 >>> 0 | $4 >>> 0 < $5 >>> 0)) {
      if (($1 & $4) != -1) {
       break block2
      }
     }
     $1 = HEAP32[$0 + 20 >> 2];
     $10 = $1;
     $5 = HEAP32[$0 + 16 >> 2];
     block4 : {
      if (!($1 | $5)) {
       $4 = 0;
       $7 = 0;
       break block4;
      }
      $7 = HEAP32[$0 + 324 >> 2];
      $11 = $7 ^ HEAP32[$0 + 340 >> 2];
      $4 = HEAP32[$0 + 332 >> 2];
      $12 = HEAP32[$0 + 320 >> 2];
      $13 = $12 ^ HEAP32[$0 + 336 >> 2];
      $1 = HEAP32[$0 + 328 >> 2];
      HEAP32[$0 + 328 >> 2] = $13 ^ $1;
      HEAP32[$0 + 332 >> 2] = $4 ^ $11;
      $14 = HEAP32[$0 + 344 >> 2] ^ $1;
      $15 = HEAP32[$0 + 348 >> 2] ^ $4;
      (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($14, $15, 45)), HEAP32[wasm2js_i32$0 + 344 >> 2] = wasm2js_i32$1;
      HEAP32[$0 + 348 >> 2] = i64toi32_i32$HIGH_BITS;
      HEAP32[$0 + 336 >> 2] = $1 << 17 ^ $13;
      HEAP32[$0 + 340 >> 2] = ($4 << 17 | $1 >>> 15) ^ $11;
      HEAP32[$0 + 320 >> 2] = $12 ^ $14;
      HEAP32[$0 + 324 >> 2] = $7 ^ $15;
      __multi3($8, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($1, $4, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $5, $10);
      $4 = HEAP32[$8 + 12 >> 2];
      $7 = HEAP32[$8 + 8 >> 2];
     }
     $1 = $7;
     HEAP8[$3 + 173 | 0] = 0;
     HEAP32[$3 + 156 >> 2] = $2;
     HEAP32[$3 >> 2] = 0;
     _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($3);
     $2 = $10 + $9 | 0;
     $9 = $6;
     $6 = $5 + $6 | 0;
     $2 = $4 + ($9 >>> 0 > $6 >>> 0 ? $2 + 1 | 0 : $2) | 0;
     $1 = $1 + $6 | 0;
     $2 = $7 >>> 0 > $1 >>> 0 ? $2 + 1 | 0 : $2;
     HEAP32[$3 + 32 >> 2] = $1;
     HEAP32[$3 + 36 >> 2] = $2;
     break block5;
    }
    HEAP8[$3 + 173 | 0] = 0;
    HEAP32[$3 + 156 >> 2] = $2;
    HEAP32[$3 >> 2] = 0;
    _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($3);
   }
   if (($16 | 0) == 2) {
    _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($0)
   }
   __stack_pointer = $8 + 16 | 0;
   return;
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $3, 1055672);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim4send($0, $1, $2, $3, $4) {
  var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0.0, $21 = 0, $22 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $18 = __stack_pointer - 16 | 0;
  __stack_pointer = $18;
  $10 = HEAP32[$0 + 312 >> 2];
  $16 = HEAP32[$0 + 316 >> 2];
  $7 = HEAP32[$0 + 32 >> 2];
  $14 = HEAP32[$0 + 24 >> 2];
  $11 = $7 - $14 | 0;
  $9 = HEAP32[$0 + 28 >> 2];
  $7 = HEAP32[$0 + 36 >> 2] - ($9 + ($7 >>> 0 < $14 >>> 0) | 0) | 0;
  $5 = $11 + 1 | 0;
  $6 = $5 ? $7 : $7 + 1 | 0;
  if ($5 | $6) {
   $15 = HEAP32[$0 + 324 >> 2];
   $12 = $15 ^ HEAP32[$0 + 340 >> 2];
   $7 = HEAP32[$0 + 332 >> 2];
   $13 = HEAP32[$0 + 320 >> 2];
   $8 = $13 ^ HEAP32[$0 + 336 >> 2];
   $11 = HEAP32[$0 + 328 >> 2];
   HEAP32[$0 + 328 >> 2] = $8 ^ $11;
   HEAP32[$0 + 332 >> 2] = $7 ^ $12;
   $17 = HEAP32[$0 + 344 >> 2] ^ $11;
   $19 = HEAP32[$0 + 348 >> 2] ^ $7;
   (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($17, $19, 45)), HEAP32[wasm2js_i32$0 + 344 >> 2] = wasm2js_i32$1;
   HEAP32[$0 + 348 >> 2] = i64toi32_i32$HIGH_BITS;
   HEAP32[$0 + 336 >> 2] = $11 << 17 ^ $8;
   HEAP32[$0 + 340 >> 2] = ($7 << 17 | $11 >>> 15) ^ $12;
   HEAP32[$0 + 320 >> 2] = $13 ^ $17;
   HEAP32[$0 + 324 >> 2] = $15 ^ $19;
   __multi3($18, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($11, $7, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $5, $6);
   $13 = HEAP32[$18 + 12 >> 2];
   $12 = HEAP32[$18 + 8 >> 2];
  }
  $7 = HEAP32[$0 + 356 >> 2];
  $11 = HEAP32[$0 + 352 >> 2] + 1 | 0;
  $7 = $11 ? $7 : $7 + 1 | 0;
  HEAP32[$0 + 352 >> 2] = $11;
  HEAP32[$0 + 356 >> 2] = $7;
  $5 = HEAP32[$0 + 188 >> 2];
  $8 = $5;
  $6 = $5 + 1 | 0;
  $5 = HEAP32[$0 + 184 >> 2] + 1 | 0;
  $6 = $5 ? $8 : $6;
  HEAP32[$0 + 184 >> 2] = $5;
  HEAP32[$0 + 188 >> 2] = $6;
  $15 = 0;
  $20 = HEAPF64[$0 + 48 >> 3];
  if ($20 > 0.0) {
   $8 = HEAP32[$0 + 324 >> 2];
   $15 = $8 ^ HEAP32[$0 + 340 >> 2];
   $5 = HEAP32[$0 + 332 >> 2];
   $17 = HEAP32[$0 + 320 >> 2];
   $19 = $17 ^ HEAP32[$0 + 336 >> 2];
   $6 = HEAP32[$0 + 328 >> 2];
   HEAP32[$0 + 328 >> 2] = $19 ^ $6;
   HEAP32[$0 + 332 >> 2] = $5 ^ $15;
   $21 = HEAP32[$0 + 344 >> 2] ^ $6;
   $22 = HEAP32[$0 + 348 >> 2] ^ $5;
   (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($21, $22, 45)), HEAP32[wasm2js_i32$0 + 344 >> 2] = wasm2js_i32$1;
   HEAP32[$0 + 348 >> 2] = i64toi32_i32$HIGH_BITS;
   HEAP32[$0 + 336 >> 2] = $6 << 17 ^ $19;
   HEAP32[$0 + 340 >> 2] = ($5 << 17 | $6 >>> 15) ^ $15;
   HEAP32[$0 + 320 >> 2] = $17 ^ $21;
   HEAP32[$0 + 324 >> 2] = $8 ^ $22;
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
   $5 = HEAP32[$0 + 148 >> 2];
   if (!$5) {
    $6 = HEAP32[$0 + 136 >> 2];
    if (($6 | 0) == HEAP32[$0 + 128 >> 2]) {
     $5 = __stack_pointer - 16 | 0;
     __stack_pointer = $5;
     $9 = $0 + 128 | 0;
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
    HEAP32[$0 + 136 >> 2] = $6 + 1;
    $9 = HEAP32[$4 + 4 >> 2];
    $5 = HEAP32[$0 + 132 >> 2] + ($6 << 6) | 0;
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
   HEAP32[$0 + 148 >> 2] = $5;
   $6 = HEAP32[HEAP32[$0 + 144 >> 2] + ($5 << 2) >> 2];
   $5 = HEAP32[$0 + 136 >> 2];
   if ($6 >>> 0 >= $5 >>> 0) {
    _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($6, $5, 1054540);
    wasm2js_trap();
   }
   block9 : {
    block7 : {
     $5 = HEAP32[$0 + 132 >> 2] + ($6 << 6) | 0;
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
    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
   wasm2js_trap();
  }
  $4 = HEAP32[$0 + 160 >> 2];
  if (($4 | 0) == HEAP32[$0 + 152 >> 2]) {
   _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTyymEEE8grow_oneCseywxCc024wH_14raftscope_core($0 + 152 | 0)
  }
  HEAP32[$0 + 160 >> 2] = $4 + 1;
  $5 = HEAP32[$0 + 156 >> 2];
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
  HEAP32[$0 + 164 >> 2] = HEAP32[$0 + 164 >> 2] + 1;
  __stack_pointer = $18 + 16 | 0;
 }
 
 function _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0;
  folding_inner1 : {
   folding_inner0 : {
    $3 = HEAP32[$0 + 68 >> 2];
    if ($3) {
     $4 = HEAP32[$0 + 72 >> 2];
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
    HEAP32[$0 + 164 >> 2] = 0;
    HEAP32[$0 + 76 >> 2] = 0;
    HEAP32[$0 + 68 >> 2] = 0;
    HEAP32[$0 + 72 >> 2] = 1;
    $2 = HEAP32[$0 + 80 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 84 >> 2];
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
    HEAP32[$0 + 88 >> 2] = 0;
    HEAP32[$0 + 80 >> 2] = 0;
    HEAP32[$0 + 84 >> 2] = 4;
    $2 = HEAP32[$0 + 92 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 96 >> 2];
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
    HEAP32[$0 + 100 >> 2] = 0;
    HEAP32[$0 + 92 >> 2] = 0;
    HEAP32[$0 + 96 >> 2] = 4;
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
    HEAP32[$0 + 124 >> 2] = 0;
    HEAP32[$0 + 116 >> 2] = 0;
    HEAP32[$0 + 120 >> 2] = 8;
    $2 = HEAP32[$0 + 128 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 132 >> 2];
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
    HEAP32[$0 + 136 >> 2] = 0;
    HEAP32[$0 + 128 >> 2] = 0;
    HEAP32[$0 + 132 >> 2] = 8;
    $2 = HEAP32[$0 + 140 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 144 >> 2];
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
    HEAP32[$0 + 148 >> 2] = 0;
    HEAP32[$0 + 140 >> 2] = 0;
    HEAP32[$0 + 144 >> 2] = 8;
    $2 = HEAP32[$0 + 16 >> 2];
    if ($2) {
     $4 = HEAP32[$0 + 20 >> 2];
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
    HEAP32[$0 + 24 >> 2] = 0;
    HEAP32[$0 + 28 >> 2] = 0;
    HEAP32[$0 + 16 >> 2] = 0;
    HEAP32[$0 + 20 >> 2] = 4;
    HEAP8[$0 + 172 | 0] = 0;
    HEAP32[$0 + 48 >> 2] = -1;
    HEAP32[$0 + 52 >> 2] = -1;
    HEAP32[$0 + 8 >> 2] = 0;
    return;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0;
  $10 = HEAP32[$0 + 312 >> 2];
  $15 = HEAP32[$0 + 316 >> 2];
  $2 = HEAP32[$0 + 376 >> 2];
  $5 = HEAP32[$0 + 304 >> 2];
  if ($2 >>> 0 > $5 >>> 0) {
   $1 = $5;
   $3 = $2 - $1 | 0;
   if (HEAP32[$0 + 296 >> 2] - $1 >>> 0 < $3 >>> 0) {
    _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 296 | 0, $1, $3, 8, 8);
    $1 = HEAP32[$0 + 304 >> 2];
   }
   $6 = HEAP32[$0 + 300 >> 2];
   $4 = $6 + ($1 << 3) | 0;
   if (!($3 >>> 0 < 2)) {
    memset($4, 0, ($5 ^ -1) + $2 << 3);
    $4 = ($6 + (($1 + $2 | 0) - $5 << 3) | 0) - 8 | 0;
    $1 = ($1 + $3 | 0) - 1 | 0;
   }
   $3 = $1;
   HEAP32[$4 >> 2] = 0;
   HEAP32[$4 + 4 >> 2] = 0;
   $5 = $3 + 1 | 0;
   HEAP32[$0 + 304 >> 2] = $5;
   $2 = HEAP32[$0 + 376 >> 2];
  }
  $6 = Math_imul($2, 176);
  $8 = HEAP32[$0 + 372 >> 2];
  if ($2) {
   $1 = $8 + 173 | 0;
   $3 = HEAP32[$0 + 300 >> 2];
   $2 = HEAP32[$0 + 420 >> 2];
   $11 = HEAP32[$0 + 424 >> 2];
   $4 = 0;
   $9 = $6;
   while (1) {
    block5 : {
     if (HEAPU8[$1 | 0] == 2) {
      break block5
     }
     if ($4 >>> 0 < $11 >>> 0) {
      $7 = HEAP32[$2 >> 2];
      HEAP32[$2 >> 2] = 0;
      HEAP32[$2 + 4 >> 2] = 0;
      if (!$7) {
       break block5
      }
      if ($4 >>> 0 < $5 >>> 0) {
       $12 = HEAP32[$3 >> 2];
       $7 = $2 + 8 | 0;
       $13 = HEAP32[$7 >> 2];
       $14 = $12 + ($10 - $13 | 0) | 0;
       $7 = HEAP32[$3 + 4 >> 2] + ($15 - (HEAP32[$7 + 4 >> 2] + ($10 >>> 0 < $13 >>> 0) | 0) | 0) | 0;
       HEAP32[$3 >> 2] = $14;
       HEAP32[$3 + 4 >> 2] = $14 >>> 0 < $12 >>> 0 ? $7 + 1 | 0 : $7;
       break block5;
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, $5, 1054860);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($4, $11, 1054844);
     wasm2js_trap();
    }
    $4 = $4 + 1 | 0;
    $2 = $2 + 16 | 0;
    $3 = $3 + 8 | 0;
    $1 = $1 + 176 | 0;
    $9 = $9 - 176 | 0;
    if ($9) {
     continue
    }
    break;
   };
  }
  block9 : {
   if (!HEAP32[$0 + 80 >> 2]) {
    while (1) {
     if (!$6) {
      break block9
     }
     $6 = $6 - 176 | 0;
     $1 = $8 + 173 | 0;
     $8 = $8 + 176 | 0;
     if (HEAPU8[$1 | 0] != 2) {
      continue
     }
     break;
    }
   }
   return;
  }
  HEAP32[$0 + 80 >> 2] = 1;
  HEAP32[$0 + 84 >> 2] = 0;
  $1 = HEAP32[$0 + 316 >> 2];
  HEAP32[$0 + 88 >> 2] = HEAP32[$0 + 312 >> 2];
  HEAP32[$0 + 92 >> 2] = $1;
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($0, $1, $2, $3) {
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  block8 : {
   block1 : {
    block6 : {
     block5 : {
      block3 : {
       block2 : {
        if ($1 >>> 0 > $2 >>> 0) {
         $2 = Math_imul($2, 176) + $0 | 0;
         if (HEAPU8[$2 + 173 | 0] != 2) {
          break block1
         }
         $0 = HEAP32[$2 + 124 >> 2];
         if ($0 >>> 0 <= $3 >>> 0) {
          break block2
         }
         $0 = HEAP32[$2 + 100 >> 2];
         if ($0 >>> 0 <= $3 >>> 0) {
          break block3
         }
         $5 = $3 << 3;
         $1 = $5 + HEAP32[$2 + 120 >> 2] | 0;
         $0 = HEAP32[$1 >> 2];
         $4 = HEAP32[$1 + 4 >> 2];
         $6 = HEAP32[$2 + 64 >> 2];
         if ($6 >>> 0 >= HEAPU32[HEAP32[$2 + 96 >> 2] + ($3 << 2) >> 2]) {
          $1 = HEAP32[$2 + 112 >> 2];
          if ($1 >>> 0 <= $3 >>> 0) {
           break block5
          }
          $5 = $5 + HEAP32[$2 + 108 >> 2] | 0;
          $1 = HEAP32[$5 >> 2];
          $7 = $1;
          $5 = HEAP32[$5 + 4 >> 2];
          $1 = ($5 | 0) == ($4 | 0) & $0 >>> 0 > $1 >>> 0 | $4 >>> 0 > $5 >>> 0;
          $0 = $1 ? $7 : $0;
          $4 = $1 ? $5 : $4;
         }
         if (!HEAP32[$2 + 8 >> 2]) {
          break block6
         }
         if (HEAP32[$2 + 12 >> 2] != ($3 | 0)) {
          break block6
         }
         if (HEAPU8[$2 + 172 | 0]) {
          break block6
         }
         $1 = HEAP32[$2 + 88 >> 2];
         if ($3 >>> 0 < $1 >>> 0) {
          $1 = ($6 | 0) == HEAP32[HEAP32[$2 + 84 >> 2] + ($3 << 2) >> 2];
          $0 = $1 ? 0 : $0;
          $4 = $1 ? 0 : $4;
          break block6;
         }
         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $1, 1054716);
         wasm2js_trap();
        }
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($2, $1, 1054652);
        wasm2js_trap();
       }
       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $0, 1054668);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $0, 1054684);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $1, 1054700);
     wasm2js_trap();
    }
    $1 = HEAP32[$2 + 136 >> 2];
    if ($1 >>> 0 <= $3 >>> 0) {
     break block8
    }
    $1 = HEAP32[$2 + 132 >> 2] + ($3 << 3) | 0;
    if (HEAP32[$1 >> 2] == ($0 | 0) & HEAP32[$1 + 4 >> 2] == ($4 | 0)) {
     break block1
    }
    HEAP32[$1 >> 2] = $0;
    HEAP32[$1 + 4 >> 2] = $4;
    if (($0 & $4) == -1) {
     break block1
    }
    $1 = HEAP32[$2 + 148 >> 2];
    if (($1 | 0) == HEAP32[$2 + 140 >> 2]) {
     _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($2 + 140 | 0)
    }
    HEAP32[$2 + 148 >> 2] = $1 + 1;
    $8 = HEAP32[$2 + 144 >> 2];
    $2 = $8 + ($1 << 4) | 0;
    HEAP32[$2 + 8 >> 2] = $3;
    HEAP32[$2 >> 2] = $0;
    HEAP32[$2 + 4 >> 2] = $4;
    $2 = 0;
    block10 : {
     if (!$1) {
      break block10
     }
     while (1) {
      $5 = $1 - 1 >>> 1 | 0;
      $6 = ($5 << 4) + $8 | 0;
      $7 = HEAP32[$6 >> 2];
      $9 = HEAP32[$6 + 4 >> 2];
      if (($0 | 0) == ($7 | 0) & ($4 | 0) == ($9 | 0) ? HEAPU32[$6 + 8 >> 2] <= $3 >>> 0 : ($4 | 0) == ($9 | 0) & $0 >>> 0 >= $7 >>> 0 | $4 >>> 0 > $9 >>> 0) {
       $2 = $1;
       break block10;
      }
      $7 = HEAP32[$6 + 12 >> 2];
      $1 = ($1 << 4) + $8 | 0;
      HEAP32[$1 + 8 >> 2] = HEAP32[$6 + 8 >> 2];
      HEAP32[$1 + 12 >> 2] = $7;
      $7 = HEAP32[$6 + 4 >> 2];
      HEAP32[$1 >> 2] = HEAP32[$6 >> 2];
      HEAP32[$1 + 4 >> 2] = $7;
      $1 = $5;
      if ($1) {
       continue
      }
      break;
     };
    }
    $1 = ($2 << 4) + $8 | 0;
    HEAP32[$1 + 8 >> 2] = $3;
    HEAP32[$1 >> 2] = $0;
    HEAP32[$1 + 4 >> 2] = $4;
   }
   return;
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($3, $1, 1054732);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim20advance_commit_index($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  block5 : {
   block1 : {
    block3 : {
     block2 : {
      $2 = HEAP32[$0 + 376 >> 2];
      if ($1 >>> 0 < $2 >>> 0) {
       $3 = HEAP32[$0 + 372 >> 2] + Math_imul($1, 176) | 0;
       if (HEAPU8[$3 + 173 | 0] != 2) {
        break block1
       }
       $4 = HEAP32[$3 + 28 >> 2];
       if (!$4) {
        break block1
       }
       $5 = $2 >>> 1 | 0;
       $8 = HEAP32[$3 + 24 >> 2];
       $6 = HEAP32[$3 + 20 >> 2] + ($8 << 2) | 0;
       $7 = HEAP32[$3 + 16 >> 2];
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
      _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $2, 1055164);
      wasm2js_trap();
     }
     if (!$2) {
      break block1
     }
    }
    $9 = HEAP32[$3 + 160 >> 2] + $2 | 0;
    $5 = $9 - 1 | 0;
    if ($5 >>> 0 < HEAPU32[$3 + 64 >> 2]) {
     $6 = HEAP32[HEAP32[$3 + 60 >> 2] + ($5 << 3) >> 2]
    } else {
     $6 = 0
    }
    if (($6 | 0) != HEAP32[$3 + 156 >> 2]) {
     break block1
    }
    if ($2 >>> 0 > $4 >>> 0) {
     break block5
    }
    HEAP32[$3 + 28 >> 2] = $4 - $2;
    $5 = $2 + $8 | 0;
    HEAP32[$3 + 24 >> 2] = ($2 | 0) != ($4 | 0) ? $5 - ($5 >>> 0 >= $7 >>> 0 ? $7 : 0) | 0 : 0;
    _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10set_commit($0, $1, $9);
   }
   return;
  }
  _RNvNtNtCsedhpoW0refZ_4core5slice5index16slice_index_fail(0, $2, $4, 1055720);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10set_commit($0, $1, $2) {
  var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0;
  $3 = __stack_pointer - 96 | 0;
  __stack_pointer = $3;
  $5 = HEAP32[$0 + 376 >> 2];
  if ($1 >>> 0 < $5 >>> 0) {
   block17 : {
    block15 : {
     $4 = HEAP32[$0 + 372 >> 2] + Math_imul($1, 176) | 0;
     $1 = HEAP32[$4 + 160 >> 2];
     if ($1 >>> 0 < $2 >>> 0) {
      $13 = HEAP32[$0 + 312 >> 2];
      $15 = HEAP32[$0 + 316 >> 2];
      $19 = $4 + 160 | 0;
      HEAP32[$4 + 160 >> 2] = $2;
      HEAP32[$0 + 472 >> 2] = 0;
      $5 = HEAP32[$0 + 464 >> 2];
      $9 = HEAP32[$0 + 468 >> 2];
      HEAP32[$0 + 464 >> 2] = 0;
      HEAP32[$0 + 468 >> 2] = 4;
      HEAP32[$3 + 8 >> 2] = 0;
      HEAP32[$3 >> 2] = $5;
      HEAP32[$3 + 4 >> 2] = $9;
      HEAP32[$3 + 16 >> 2] = $13;
      HEAP32[$3 + 20 >> 2] = $15;
      $14 = HEAP32[$4 + 64 >> 2];
      $20 = $1 >>> 0 < $14 >>> 0 ? $14 : $1;
      $6 = $1 << 3;
      $12 = $0 + 464 | 0;
      $11 = $3 + 52 | 0;
      $21 = $3 + 24 | 0;
      $16 = $3 + 48 | 0;
      $17 = $3 + 16 | 0;
      $18 = HEAP32[$4 + 152 >> 2] + 1 | 0;
      $22 = HEAP32[$4 + 60 >> 2];
      $23 = $0 + 452 | 0;
      $24 = $0 + 440 | 0;
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
         _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($3 + 24 | 0, 1049099, $3 + 56 | 0);
         $1 = HEAP32[$0 + 460 >> 2];
         if (($1 | 0) == HEAP32[$0 + 452 >> 2]) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($0 + 452 | 0)
         }
         HEAP32[$0 + 460 >> 2] = $1 + 1;
         $2 = HEAP32[$3 + 28 >> 2];
         $1 = HEAP32[$0 + 456 >> 2] + Math_imul($1, 12) | 0;
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
        $4 = HEAP32[$0 + 448 >> 2];
        block8 : {
         if ($5 >>> 0 >= $4 >>> 0) {
          if (HEAP32[$0 + 440 >> 2] == ($4 | 0)) {
           _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtCseywxCc024wH_14raftscope_core3sim5EntryE8grow_oneBQ_($24);
           $8 = HEAP32[$3 + 28 >> 2];
           $7 = HEAP32[$3 + 24 >> 2];
          }
          HEAP32[$0 + 448 >> 2] = $4 + 1;
          $4 = HEAP32[$0 + 444 >> 2] + ($4 << 3) | 0;
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
         $4 = HEAP32[$0 + 444 >> 2] + $6 | 0;
         if (($7 | 0) == HEAP32[$4 >> 2] & HEAP32[$4 + 4 >> 2] == ($8 | 0)) {
          break block8
         }
         HEAP32[$3 + 48 >> 2] = $18;
         HEAP32[$3 + 52 >> 2] = $1;
         HEAP32[$3 + 88 >> 2] = $4;
         HEAP32[$3 + 92 >> 2] = 12;
         HEAP32[$3 + 80 >> 2] = $11;
         HEAP32[$3 + 84 >> 2] = 3;
         HEAP32[$3 + 72 >> 2] = $21;
         HEAP32[$3 + 76 >> 2] = 12;
         HEAP32[$3 + 64 >> 2] = $16;
         HEAP32[$3 + 68 >> 2] = 3;
         HEAP32[$3 + 56 >> 2] = $17;
         HEAP32[$3 + 60 >> 2] = 6;
         _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($3 + 36 | 0, 1050880, $3 + 56 | 0);
         $4 = HEAP32[$0 + 460 >> 2];
         if (($4 | 0) == HEAP32[$0 + 452 >> 2]) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($23)
         }
         HEAP32[$0 + 460 >> 2] = $4 + 1;
         $7 = HEAP32[$3 + 40 >> 2];
         $4 = HEAP32[$0 + 456 >> 2] + Math_imul($4, 12) | 0;
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
       $4 = $0 + 272 | 0;
       while (1) {
        $2 = HEAP32[$0 + 236 >> 2];
        $5 = HEAP32[$0 + 232 >> 2] + 1 | 0;
        $2 = $5 ? $2 : $2 + 1 | 0;
        HEAP32[$0 + 232 >> 2] = $5;
        HEAP32[$0 + 236 >> 2] = $2;
        $2 = HEAP32[$1 >> 2] - 1 | 0;
        block12 : {
         if ($2 >>> 0 >= HEAPU32[$0 + 412 >> 2]) {
          break block12
         }
         $5 = HEAP32[$0 + 280 >> 2];
         if ($5 >>> 0 >= 4e6) {
          break block12
         }
         $9 = HEAP32[$0 + 408 >> 2] + ($2 << 3) | 0;
         $11 = HEAP32[$9 >> 2];
         $2 = $13 - $11 | 0;
         $2 = (HEAP32[$9 + 4 >> 2] + ($11 >>> 0 > $13 >>> 0) | 0) == ($15 | 0) & ($2 | 0) != -1 ? $2 : -1;
         if (HEAP32[$0 + 272 >> 2] == ($5 | 0)) {
          _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($4)
         }
         HEAP32[$0 + 280 >> 2] = $5 + 1;
         HEAP32[HEAP32[$0 + 276 >> 2] + ($5 << 2) >> 2] = $2;
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
       $2 = HEAP32[$0 + 468 >> 2];
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
    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $5, 1054620);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13become_leader($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0;
  $8 = __stack_pointer - 80 | 0;
  __stack_pointer = $8;
  folding_inner2 : {
   folding_inner1 : {
    folding_inner0 : {
     block59 : {
      block1 : {
       block57 : {
        $10 = HEAP32[$0 + 376 >> 2];
        if ($1 >>> 0 < $10 >>> 0) {
         $14 = HEAP32[$0 + 372 >> 2];
         $6 = $14 + Math_imul($1, 176) | 0;
         if (HEAPU8[$6 + 173 | 0] != 1) {
          break block1
         }
         if (HEAPU32[$6 + 164 >> 2] < $10 >>> 1 >>> 0) {
          break block1
         }
         $12 = HEAP32[$0 + 312 >> 2];
         $13 = HEAP32[$0 + 316 >> 2];
         HEAP8[$6 + 173 | 0] = 2;
         $11 = HEAP32[$6 + 64 >> 2];
         $9 = $10 << 2;
         $5 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($9);
         if ($5) {
          $4 = $11 + 1 | 0;
          $3 = $5;
          block3 : {
           if (($10 | 0) == 1) {
            break block3
           }
           $7 = $10 - 1 | 0;
           $2 = $7 & 7;
           if ($10 - 2 >>> 0 >= 7) {
            $7 = $7 & -8;
            while (1) {
             HEAP32[$3 >> 2] = $4;
             HEAP32[$3 + 28 >> 2] = $4;
             HEAP32[$3 + 24 >> 2] = $4;
             HEAP32[$3 + 20 >> 2] = $4;
             HEAP32[$3 + 16 >> 2] = $4;
             HEAP32[$3 + 12 >> 2] = $4;
             HEAP32[$3 + 8 >> 2] = $4;
             HEAP32[$3 + 4 >> 2] = $4;
             $3 = $3 + 32 | 0;
             $7 = $7 - 8 | 0;
             if ($7) {
              continue
             }
             break;
            };
            if (!$2) {
             break block3
            }
           }
           while (1) {
            HEAP32[$3 >> 2] = $4;
            $3 = $3 + 4 | 0;
            $2 = $2 - 1 | 0;
            if ($2) {
             continue
            }
            break;
           };
          }
          HEAP32[$3 >> 2] = $4;
          block6 : {
           $3 = HEAP32[$6 + 92 >> 2];
           if ($3) {
            $4 = HEAP32[$6 + 96 >> 2];
            $7 = HEAP32[$4 - 4 >> 2];
            $2 = $7 & -8;
            $3 = $3 << 2;
            $7 = $7 & 3;
            if ($2 >>> 0 < $3 + ($7 ? 4 : 8) >>> 0) {
             break block6
            }
            if (($7 | 0) != 0 & $2 >>> 0 > $3 + 39 >>> 0) {
             break folding_inner0
            }
            _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
           }
           HEAP32[$6 + 100 >> 2] = $10;
           HEAP32[$6 + 96 >> 2] = $5;
           HEAP32[$6 + 92 >> 2] = $10;
           $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($9);
           if ($2) {
            if (HEAPU8[$2 - 4 | 0] & 3) {
             memset($2, 0, $9)
            }
            block12 : {
             $5 = HEAP32[$6 + 80 >> 2];
             if ($5) {
              $4 = HEAP32[$6 + 84 >> 2];
              $7 = HEAP32[$4 - 4 >> 2];
              $3 = $7 & -8;
              $5 = $5 << 2;
              $7 = $7 & 3;
              if ($3 >>> 0 < $5 + ($7 ? 4 : 8) >>> 0) {
               break block12
              }
              if (($7 | 0) != 0 & $3 >>> 0 > $5 + 39 >>> 0) {
               break folding_inner0
              }
              _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
             }
             HEAP32[$6 + 88 >> 2] = $10;
             HEAP32[$6 + 84 >> 2] = $2;
             HEAP32[$6 + 80 >> 2] = $10;
             $5 = $10 << 3;
             $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
             if ($3) {
              $2 = $3;
              if ($10 >>> 0 >= 2) {
               $2 = $5 - 8 | 0;
               $2 = memset($3, 255, $2) + $2 | 0;
              }
              HEAP32[$2 >> 2] = -1;
              HEAP32[$2 + 4 >> 2] = -1;
              block18 : {
               $4 = HEAP32[$6 + 104 >> 2];
               if ($4) {
                $7 = HEAP32[$6 + 108 >> 2];
                $9 = HEAP32[$7 - 4 >> 2];
                $2 = $9 & -8;
                $4 = $4 << 3;
                $9 = $9 & 3;
                if ($2 >>> 0 < $4 + ($9 ? 4 : 8) >>> 0) {
                 break block18
                }
                if (($9 | 0) != 0 & $2 >>> 0 > $4 + 39 >>> 0) {
                 break folding_inner0
                }
                _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
               }
               HEAP32[$6 + 112 >> 2] = $10;
               HEAP32[$6 + 108 >> 2] = $3;
               HEAP32[$6 + 104 >> 2] = $10;
               $2 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
               if ($2) {
                if (HEAPU8[$2 - 4 | 0] & 3) {
                 memset($2, 0, $5)
                }
                block24 : {
                 $4 = HEAP32[$6 + 116 >> 2];
                 if ($4) {
                  $7 = HEAP32[$6 + 120 >> 2];
                  $9 = HEAP32[$7 - 4 >> 2];
                  $3 = $9 & -8;
                  $4 = $4 << 3;
                  $9 = $9 & 3;
                  if ($3 >>> 0 < $4 + ($9 ? 4 : 8) >>> 0) {
                   break block24
                  }
                  if (($9 | 0) != 0 & $3 >>> 0 > $4 + 39 >>> 0) {
                   break folding_inner0
                  }
                  _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($7);
                 }
                 HEAP32[$6 + 124 >> 2] = $10;
                 HEAP32[$6 + 120 >> 2] = $2;
                 HEAP32[$6 + 116 >> 2] = $10;
                 $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($5);
                 if ($3) {
                  $2 = $3;
                  if ($10 >>> 0 >= 2) {
                   $2 = $5 - 8 | 0;
                   $2 = memset($3, 255, $2) + $2 | 0;
                  }
                  HEAP32[$2 >> 2] = -1;
                  HEAP32[$2 + 4 >> 2] = -1;
                  block30 : {
                   $5 = HEAP32[$6 + 128 >> 2];
                   if ($5) {
                    $4 = HEAP32[$6 + 132 >> 2];
                    $7 = HEAP32[$4 - 4 >> 2];
                    $2 = $7 & -8;
                    $5 = $5 << 3;
                    $7 = $7 & 3;
                    if ($2 >>> 0 < $5 + ($7 ? 4 : 8) >>> 0) {
                     break block30
                    }
                    if (($7 | 0) != 0 & $2 >>> 0 > $5 + 39 >>> 0) {
                     break folding_inner0
                    }
                    _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
                   }
                   HEAP32[$6 + 136 >> 2] = $10;
                   HEAP32[$6 + 132 >> 2] = $3;
                   HEAP32[$6 + 128 >> 2] = $10;
                   $3 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($10 << 4);
                   if ($3) {
                    $5 = HEAP32[$6 + 140 >> 2];
                    if ($5) {
                     $4 = HEAP32[$6 + 144 >> 2];
                     $7 = HEAP32[$4 - 4 >> 2];
                     $2 = $7 & -8;
                     $5 = $5 << 4;
                     $7 = $7 & 3;
                     if ($2 >>> 0 < ($5 | ($7 ? 4 : 8)) >>> 0) {
                      break folding_inner1
                     }
                     if (($7 | 0) != 0 & $2 >>> 0 > $5 + 39 >>> 0) {
                      break folding_inner0
                     }
                     _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
                    }
                    $2 = 0;
                    HEAP32[$6 + 148 >> 2] = 0;
                    HEAP32[$6 + 140 >> 2] = $10;
                    HEAP32[$6 + 144 >> 2] = $3;
                    $5 = 4;
                    block40 : {
                     $9 = HEAP32[$6 + 160 >> 2];
                     block39 : {
                      if ($11 >>> 0 <= $9 >>> 0) {
                       $7 = 0;
                       break block39;
                      }
                      $3 = $11 - $9 | 0;
                      $7 = $3 >>> 0 <= $11 >>> 0 ? $3 : 0;
                      $5 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7 << 2);
                      if (!$5) {
                       break block40
                      }
                      $4 = $3 & 3;
                      if ($9 - $11 >>> 0 <= 4294967292) {
                       $11 = $3 & -4;
                       $3 = $5;
                       while (1) {
                        HEAP32[$3 >> 2] = 1;
                        HEAP32[$3 + 4 >> 2] = 1;
                        $9 = $3 + 8 | 0;
                        HEAP32[$9 >> 2] = 1;
                        HEAP32[$9 + 4 >> 2] = 1;
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
                      $4 = HEAP32[$6 + 16 >> 2];
                      if ($4) {
                       $11 = HEAP32[$6 + 20 >> 2];
                       $9 = HEAP32[$11 - 4 >> 2];
                       $3 = $9 & -8;
                       $4 = $4 << 2;
                       $9 = $9 & 3;
                       if ($3 >>> 0 < $4 + ($9 ? 4 : 8) >>> 0) {
                        break block43
                       }
                       if (($9 | 0) != 0 & $3 >>> 0 > $4 + 39 >>> 0) {
                        break folding_inner0
                       }
                       _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($11);
                      }
                      HEAP32[$6 + 28 >> 2] = $2;
                      $3 = 0;
                      HEAP32[$6 + 24 >> 2] = 0;
                      HEAP32[$6 + 16 >> 2] = $7;
                      HEAP32[$6 + 20 >> 2] = $5;
                      block47 : {
                       $2 = HEAP32[$6 + 68 >> 2];
                       if ($2) {
                        $4 = HEAP32[$6 + 72 >> 2];
                        $11 = HEAP32[$4 - 4 >> 2];
                        $5 = $11 & -8;
                        $11 = $11 & 3;
                        if ($5 >>> 0 < $2 + ($11 ? 4 : 8) >>> 0) {
                         break block47
                        }
                        if (($11 | 0) != 0 & $5 >>> 0 > $2 + 39 >>> 0) {
                         break folding_inner0
                        }
                        _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE4freeCs9syRKuynNcS_3std($4);
                       }
                       HEAP32[$6 + 76 >> 2] = 0;
                       HEAP32[$6 + 68 >> 2] = 0;
                       HEAP32[$6 + 72 >> 2] = 1;
                       HEAP32[$6 + 40 >> 2] = $12;
                       HEAP32[$6 + 44 >> 2] = $13;
                       HEAP32[$6 + 32 >> 2] = -1;
                       HEAP32[$6 + 36 >> 2] = -1;
                       HEAP8[$6 + 172 | 0] = 0;
                       HEAP32[$6 + 48 >> 2] = -1;
                       HEAP32[$6 + 52 >> 2] = -1;
                       HEAP32[$6 + 8 >> 2] = 0;
                       while (1) {
                        if (($1 | 0) != ($3 | 0)) {
                         _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim12refresh_peer($14, $10, $1, $3)
                        }
                        $3 = $3 + 1 | 0;
                        if (($10 | 0) != ($3 | 0)) {
                         continue
                        }
                        break;
                       };
                       HEAP32[$8 >> 2] = $12;
                       HEAP32[$8 + 4 >> 2] = $13;
                       $5 = HEAP32[$6 + 156 >> 2];
                       $3 = HEAP32[$0 + 436 >> 2];
                       block52 : {
                        if ($5 >>> 0 < $3 >>> 0) {
                         $4 = $3;
                         break block52;
                        }
                        $4 = $5 + 1 | 0;
                        if ($4 >>> 0 > $3 >>> 0) {
                         $2 = $3;
                         $4 = $4 - $2 | 0;
                         if ($4 >>> 0 > HEAP32[$0 + 428 >> 2] - $2 >>> 0) {
                          _RINvNvMs2_NtCsl5a4uRf33NA_5alloc7raw_vecINtB8_11RawVecInnerpE7reserve21do_reserve_and_handleNtNtBa_5alloc6GlobalECseywxCc024wH_14raftscope_core($0 + 428 | 0, $2, $4, 4, 4);
                          $2 = HEAP32[$0 + 436 >> 2];
                         }
                         $10 = HEAP32[$0 + 432 >> 2];
                         $11 = $10 + ($2 << 2) | 0;
                         if ($4 >>> 0 >= 2) {
                          memset($11, 0, $5 - $3 << 2);
                          $3 = $2 + $4 | 0;
                          $2 = $3 - 1 | 0;
                          $11 = ($10 + ($3 << 2) | 0) - 4 | 0;
                         }
                         HEAP32[$11 >> 2] = 0;
                         $4 = $2 + 1 | 0;
                        }
                        HEAP32[$0 + 436 >> 2] = $4;
                       }
                       if ($4 >>> 0 > $5 >>> 0) {
                        $10 = $6 + 156 | 0;
                        $2 = HEAP32[HEAP32[$0 + 432 >> 2] + ($5 << 2) >> 2];
                        HEAP32[$8 + 12 >> 2] = $2;
                        if (!$2) {
                         break block57
                        }
                        $3 = HEAP32[$6 + 152 >> 2] + 1 | 0;
                        if (($2 | 0) == ($3 | 0)) {
                         break block57
                        }
                        HEAP32[$8 + 28 >> 2] = $3;
                        HEAP32[$8 + 72 >> 2] = $10;
                        HEAP32[$8 + 76 >> 2] = 3;
                        HEAP32[$8 + 64 >> 2] = $8 + 28;
                        HEAP32[$8 + 68 >> 2] = 3;
                        HEAP32[$8 + 56 >> 2] = $8 + 12;
                        HEAP32[$8 + 60 >> 2] = 3;
                        HEAP32[$8 + 48 >> 2] = $8;
                        HEAP32[$8 + 52 >> 2] = 6;
                        _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($8 + 16 | 0, 1049040, $8 + 48 | 0);
                        $2 = HEAP32[$0 + 460 >> 2];
                        if (($2 | 0) == HEAP32[$0 + 452 >> 2]) {
                         _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($0 + 452 | 0);
                         $4 = HEAP32[$0 + 436 >> 2];
                        }
                        HEAP32[$0 + 460 >> 2] = $2 + 1;
                        $3 = HEAP32[$8 + 20 >> 2];
                        $2 = HEAP32[$0 + 456 >> 2] + Math_imul($2, 12) | 0;
                        HEAP32[$2 >> 2] = HEAP32[$8 + 16 >> 2];
                        HEAP32[$2 + 4 >> 2] = $3;
                        HEAP32[$2 + 8 >> 2] = HEAP32[$8 + 24 >> 2];
                        break block57;
                       }
                       _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, $4, 1054508);
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
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $10, 1054748);
        wasm2js_trap();
       }
       if ($4 >>> 0 <= $5 >>> 0) {
        break block59
       }
       $7 = HEAP32[$6 + 152 >> 2] + 1 | 0;
       HEAP32[HEAP32[$0 + 432 >> 2] + ($5 << 2) >> 2] = $7;
       $2 = HEAP32[$0 + 448 >> 2] << 3;
       $9 = HEAP32[$6 + 64 >> 2];
       $11 = $9 + 1 | 0;
       $3 = HEAP32[$0 + 444 >> 2];
       $4 = HEAP32[$6 + 60 >> 2];
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
           $14 = HEAP32[$3 + 4 >> 2];
           $4 = $4 + 8 | 0;
           $3 = $3 + 8 | 0;
           if (($14 | 0) == HEAP32[$6 >> 2]) {
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
        HEAP32[$8 + 76 >> 2] = 3;
        HEAP32[$8 + 64 >> 2] = $10;
        HEAP32[$8 + 68 >> 2] = 3;
        HEAP32[$8 + 56 >> 2] = $8 + 40;
        HEAP32[$8 + 60 >> 2] = 3;
        HEAP32[$8 + 48 >> 2] = $8;
        HEAP32[$8 + 52 >> 2] = 6;
        _RNvNvNtCsl5a4uRf33NA_5alloc3fmt6format12format_inner($8 + 28 | 0, 1048879, $8 + 48 | 0);
        $2 = HEAP32[$0 + 460 >> 2];
        if (($2 | 0) == HEAP32[$0 + 452 >> 2]) {
         _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecNtNtB7_6string6StringE8grow_oneCseywxCc024wH_14raftscope_core($0 + 452 | 0)
        }
        HEAP32[$0 + 460 >> 2] = $2 + 1;
        $3 = HEAP32[$8 + 32 >> 2];
        $2 = HEAP32[$0 + 456 >> 2] + Math_imul($2, 12) | 0;
        HEAP32[$2 >> 2] = HEAP32[$8 + 28 >> 2];
        HEAP32[$2 + 4 >> 2] = $3;
        HEAP32[$2 + 8 >> 2] = HEAP32[$8 + 36 >> 2];
       }
       HEAP32[$0 + 116 >> 2] = $1;
       HEAP32[$0 + 112 >> 2] = 1;
       $2 = HEAP32[$0 + 180 >> 2];
       $3 = $2;
       $5 = $2 + 1 | 0;
       $2 = HEAP32[$0 + 176 >> 2] + 1 | 0;
       $3 = $2 ? $3 : $5;
       HEAP32[$0 + 176 >> 2] = $2;
       HEAP32[$0 + 180 >> 2] = $3;
       block65 : {
        if (HEAP32[$0 + 120 >> 2] != 1) {
         break block65
        }
        $3 = HEAP32[$0 + 124 >> 2];
        if (($3 | 0) == ($1 | 0)) {
         break block65
        }
        $2 = HEAP32[$0 + 376 >> 2];
        $5 = HEAP32[$0 + 260 >> 2];
        $11 = $5;
        $4 = $5 + 1 | 0;
        $5 = HEAP32[$0 + 256 >> 2] + 1 | 0;
        $4 = $5 ? $11 : $4;
        HEAP32[$0 + 256 >> 2] = $5;
        HEAP32[$0 + 260 >> 2] = $4;
        if ($2) {
         if ((($3 + 1 >>> 0) % ($2 >>> 0) | 0) != ($1 | 0)) {
          break block65
         }
         $2 = HEAP32[$0 + 268 >> 2];
         $3 = $2;
         $5 = $2 + 1 | 0;
         $2 = HEAP32[$0 + 264 >> 2] + 1 | 0;
         $3 = $2 ? $3 : $5;
         HEAP32[$0 + 264 >> 2] = $2;
         HEAP32[$0 + 268 >> 2] = $3;
         break block65;
        }
        _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1052292, 115, 1054764);
        wasm2js_trap();
       }
       HEAP32[$0 + 124 >> 2] = $1;
       HEAP32[$0 + 120 >> 2] = 1;
       $2 = HEAP32[$0 + 96 >> 2];
       HEAP32[$0 + 96 >> 2] = 0;
       HEAP32[$0 + 100 >> 2] = 0;
       if ($2) {
        $2 = HEAP32[$0 + 104 >> 2];
        $3 = $12 - $2 | 0;
        $3 = (HEAP32[$0 + 108 >> 2] + ($2 >>> 0 > $12 >>> 0) | 0) == ($13 | 0) & ($3 | 0) != -1 ? $3 : -1;
        $2 = HEAP32[$0 + 292 >> 2];
        if (($2 | 0) == HEAP32[$0 + 284 >> 2]) {
         _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecmE8grow_oneCseywxCc024wH_14raftscope_core($0 + 284 | 0)
        }
        HEAP32[$0 + 292 >> 2] = $2 + 1;
        HEAP32[HEAP32[$0 + 288 >> 2] + ($2 << 2) >> 2] = $3;
       }
       block71 : {
        block70 : {
         $2 = HEAP32[$0 + 424 >> 2];
         if ($1 >>> 0 < $2 >>> 0) {
          $1 = HEAP32[$0 + 420 >> 2] + ($1 << 4) | 0;
          if (!(HEAP32[$1 >> 2] | HEAP32[$1 + 4 >> 2])) {
           break block70
          }
          break block71;
         }
         _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $2, 1054780);
         wasm2js_trap();
        }
        HEAP32[$1 + 8 >> 2] = $12;
        HEAP32[$1 + 12 >> 2] = $13;
        HEAP32[$1 >> 2] = 1;
        HEAP32[$1 + 4 >> 2] = 0;
       }
       $1 = HEAP32[$0 + 80 >> 2];
       HEAP32[$0 + 80 >> 2] = 0;
       HEAP32[$0 + 84 >> 2] = 0;
       if (!$1) {
        break block1
       }
       $3 = HEAP32[$0 + 248 >> 2];
       $2 = HEAP32[$0 + 88 >> 2];
       $1 = $3 + ($12 - $2 | 0) | 0;
       $2 = HEAP32[$0 + 252 >> 2] + ($13 - (HEAP32[$0 + 92 >> 2] + ($2 >>> 0 > $12 >>> 0) | 0) | 0) | 0;
       HEAP32[$0 + 248 >> 2] = $1;
       HEAP32[$0 + 252 >> 2] = $1 >>> 0 < $3 >>> 0 ? $2 + 1 | 0 : $2;
      }
      __stack_pointer = $8 + 80 | 0;
      return;
     }
     _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($5, $4, 1054524);
     wasm2js_trap();
    }
    _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim18start_new_election($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $9 = __stack_pointer - 16 | 0;
  __stack_pointer = $9;
  block15 : {
   block13 : {
    block10 : {
     block9 : {
      block7 : {
       block4 : {
        $7 = HEAP32[$0 + 376 >> 2];
        if ($1 >>> 0 < $7 >>> 0) {
         $3 = HEAP32[$0 + 372 >> 2] + Math_imul($1, 176) | 0;
         block1 : {
          if (HEAPU8[$3 + 173 | 0] >= 2) {
           break block1
          }
          $2 = HEAP32[$3 + 36 >> 2];
          $11 = HEAP32[$0 + 316 >> 2];
          $4 = $11;
          $6 = HEAP32[$0 + 312 >> 2];
          if (($2 | 0) == ($4 | 0) & $6 >>> 0 < HEAPU32[$3 + 32 >> 2] | $2 >>> 0 > $4 >>> 0) {
           break block1
          }
          $2 = HEAP32[$0 + 20 >> 2];
          $10 = $2;
          $5 = HEAP32[$0 + 16 >> 2];
          block3 : {
           if (!($2 | $5)) {
            $4 = 0;
            $8 = 0;
            break block3;
           }
           $12 = HEAP32[$0 + 324 >> 2];
           $13 = $12 ^ HEAP32[$0 + 340 >> 2];
           $4 = HEAP32[$0 + 332 >> 2];
           $14 = HEAP32[$0 + 320 >> 2];
           $15 = $14 ^ HEAP32[$0 + 336 >> 2];
           $2 = HEAP32[$0 + 328 >> 2];
           HEAP32[$0 + 328 >> 2] = $15 ^ $2;
           HEAP32[$0 + 332 >> 2] = $4 ^ $13;
           $16 = HEAP32[$0 + 344 >> 2] ^ $2;
           $8 = HEAP32[$0 + 348 >> 2] ^ $4;
           (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($16, $8, 45)), HEAP32[wasm2js_i32$0 + 344 >> 2] = wasm2js_i32$1;
           HEAP32[$0 + 348 >> 2] = i64toi32_i32$HIGH_BITS;
           HEAP32[$0 + 336 >> 2] = $2 << 17 ^ $15;
           HEAP32[$0 + 340 >> 2] = ($4 << 17 | $2 >>> 15) ^ $13;
           HEAP32[$0 + 320 >> 2] = $14 ^ $16;
           HEAP32[$0 + 324 >> 2] = $12 ^ $8;
           __multi3($9, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($2, $4, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $5, $10);
           $4 = HEAP32[$9 + 12 >> 2];
           $8 = HEAP32[$9 + 8 >> 2];
          }
          $2 = $8;
          HEAP8[$3 + 173 | 0] = 1;
          HEAP32[$3 + 4 >> 2] = $1;
          HEAP32[$3 >> 2] = 1;
          $1 = $10 + $11 | 0;
          $10 = $6;
          $6 = $5 + $6 | 0;
          $1 = $4 + ($10 >>> 0 > $6 >>> 0 ? $1 + 1 | 0 : $1) | 0;
          $2 = $2 + $6 | 0;
          $1 = $8 >>> 0 > $2 >>> 0 ? $1 + 1 | 0 : $1;
          HEAP32[$3 + 32 >> 2] = $2;
          HEAP32[$3 + 36 >> 2] = $1;
          HEAP32[$3 + 156 >> 2] = HEAP32[$3 + 156 >> 2] + 1;
          _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($3);
          $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($7);
          if (!$1) {
           break block4
          }
          if (HEAPU8[$1 - 4 | 0] & 3) {
           memset($1, 0, $7)
          }
          $2 = HEAP32[$3 + 68 >> 2];
          if ($2) {
           $6 = HEAP32[$3 + 72 >> 2];
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
          HEAP32[$3 + 76 >> 2] = $7;
          HEAP32[$3 + 72 >> 2] = $1;
          HEAP32[$3 + 68 >> 2] = $7;
          $2 = $7 << 3;
          $1 = _RNvMs0_NtCs2HsQA2r9Y84_8dlmalloc8dlmallocINtB5_8DlmallocNtNtB7_3sys6SystemE6mallocCs9syRKuynNcS_3std($2);
          if (!$1) {
           break block10
          }
          if (HEAPU8[$1 - 4 | 0] & 3) {
           memset($1, 0, $2)
          }
          $4 = HEAP32[$3 + 104 >> 2];
          if ($4) {
           $6 = HEAP32[$3 + 108 >> 2];
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
          HEAP32[$3 + 112 >> 2] = $7;
          HEAP32[$3 + 108 >> 2] = $1;
          HEAP32[$3 + 104 >> 2] = $7;
          $1 = HEAP32[$0 + 172 >> 2];
          $2 = HEAP32[$0 + 168 >> 2] + 1 | 0;
          $1 = $2 ? $1 : $1 + 1 | 0;
          HEAP32[$0 + 168 >> 2] = $2;
          HEAP32[$0 + 172 >> 2] = $1;
         }
         __stack_pointer = $9 + 16 | 0;
         return;
        }
        _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $7, 1054988);
        wasm2js_trap();
       }
       _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(1);
       wasm2js_trap();
      }
      _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
      wasm2js_trap();
     }
     _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
     wasm2js_trap();
    }
    _RNvNtCsl5a4uRf33NA_5alloc7raw_vec12handle_error(8);
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
  wasm2js_trap();
 }
 
 function _RNvXsn_NtCseywxCc024wH_14raftscope_core3simNtB5_5EntryNtNtCsedhpoW0refZ_4core3fmt5Debug3fmt($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $4 = 0;
  $2 = __stack_pointer - 16 | 0;
  __stack_pointer = $2;
  HEAP32[$2 + 4 >> 2] = $0 + 4;
  $3 = FUNCTION_TABLE[HEAP32[HEAP32[$1 + 4 >> 2] + 12 >> 2]](HEAP32[$1 >> 2], 1055736, 5) | 0;
  HEAP8[$2 + 13 | 0] = 0;
  HEAP8[$2 + 12 | 0] = $3;
  HEAP32[$2 + 8 >> 2] = $1;
  $0 = _RNvMs1_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_11DebugStruct5field(_RNvMs1_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_11DebugStruct5field($2 + 8 | 0, 1055741, 4, $0, 13), 1055745, 5, $2 + 4 | 0, 14);
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
    $1 = FUNCTION_TABLE[HEAP32[HEAP32[$0 + 4 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], 1051925, 2) | 0;
    break block;
   }
   $1 = FUNCTION_TABLE[HEAP32[HEAP32[$0 + 4 >> 2] + 12 >> 2]](HEAP32[$0 >> 2], 1051852, 1) | 0;
  }
  __stack_pointer = $2 + 16 | 0;
  return $1 & 1;
 }
 
 function _RNvXsW_NtNtCsedhpoW0refZ_4core3fmt3nummNtB7_5Debug3fmt_186($0, $1) {
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
     HEAP8[($3 + $0 | 0) + 6 | 0] = HEAPU8[($2 & 15) + 1051744 | 0];
     $0 = $0 - 1 | 0;
     $2 = $2 >>> 4 | 0;
     if ($2) {
      continue
     }
     break;
    };
    $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054356, 2, ($3 + $0 | 0) + 7 | 0, 9 - $0 | 0);
    break block2;
   }
   $2 = HEAP32[$0 >> 2];
   $0 = 9;
   while (1) {
    HEAP8[($3 + $0 | 0) + 6 | 0] = HEAPU8[($2 & 15) + 1054358 | 0];
    $0 = $0 - 1 | 0;
    $2 = $2 >>> 4 | 0;
    if ($2) {
     continue
    }
    break;
   };
   $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054356, 2, ($3 + $0 | 0) + 7 | 0, 9 - $0 | 0);
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
     HEAP8[($3 + $0 | 0) + 6 | 0] = HEAPU8[($2 & 15) + 1051744 | 0];
     $0 = $0 - 1 | 0;
     $2 = $2 >>> 4 | 0;
     if ($2) {
      continue
     }
     break;
    };
    $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054356, 2, ($3 + $0 | 0) + 7 | 0, 9 - $0 | 0);
    break block2;
   }
   $2 = HEAP32[$0 >> 2];
   $0 = 9;
   while (1) {
    HEAP8[($3 + $0 | 0) + 6 | 0] = HEAPU8[($2 & 15) + 1054358 | 0];
    $0 = $0 - 1 | 0;
    $2 = $2 >>> 4 | 0;
    if ($2) {
     continue
    }
    break;
   };
   $0 = _RNvMsa_NtCsedhpoW0refZ_4core3fmtNtB5_9Formatter12pad_integral($1, 1, 1054356, 2, ($3 + $0 | 0) + 7 | 0, 9 - $0 | 0);
  }
  __stack_pointer = $3 + 16 | 0;
  return $0 | 0;
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim6resume($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, wasm2js_i32$0 = 0, wasm2js_i32$1 = 0;
  $7 = __stack_pointer - 16 | 0;
  __stack_pointer = $7;
  $4 = HEAP32[$0 + 312 >> 2];
  $14 = HEAP32[$0 + 316 >> 2];
  $2 = HEAP32[$0 + 20 >> 2];
  $11 = $2;
  $5 = HEAP32[$0 + 16 >> 2];
  block1 : {
   if (!($2 | $5)) {
    $6 = 0;
    break block1;
   }
   $6 = HEAP32[$0 + 324 >> 2];
   $8 = $6 ^ HEAP32[$0 + 340 >> 2];
   $3 = HEAP32[$0 + 332 >> 2];
   $9 = HEAP32[$0 + 320 >> 2];
   $12 = $9 ^ HEAP32[$0 + 336 >> 2];
   $2 = HEAP32[$0 + 328 >> 2];
   HEAP32[$0 + 328 >> 2] = $12 ^ $2;
   HEAP32[$0 + 332 >> 2] = $3 ^ $8;
   $13 = HEAP32[$0 + 344 >> 2] ^ $2;
   $10 = HEAP32[$0 + 348 >> 2] ^ $3;
   (wasm2js_i32$0 = $0, wasm2js_i32$1 = __wasm_rotl_i64($13, $10, 45)), HEAP32[wasm2js_i32$0 + 344 >> 2] = wasm2js_i32$1;
   HEAP32[$0 + 348 >> 2] = i64toi32_i32$HIGH_BITS;
   HEAP32[$0 + 336 >> 2] = $2 << 17 ^ $12;
   HEAP32[$0 + 340 >> 2] = ($3 << 17 | $2 >>> 15) ^ $8;
   HEAP32[$0 + 320 >> 2] = $9 ^ $13;
   HEAP32[$0 + 324 >> 2] = $10 ^ $6;
   __multi3($7, __wasm_i64_mul(__wasm_rotl_i64(__wasm_i64_mul($2, $3, 5, 0), i64toi32_i32$HIGH_BITS, 7), i64toi32_i32$HIGH_BITS, 9, 0), i64toi32_i32$HIGH_BITS, $5, $11);
   $10 = HEAP32[$7 + 12 >> 2];
   $6 = HEAP32[$7 + 8 >> 2];
  }
  $2 = $6;
  $3 = HEAP32[$0 + 376 >> 2];
  if ($1 >>> 0 < $3 >>> 0) {
   $3 = HEAP32[$0 + 372 >> 2] + Math_imul($1, 176) | 0;
   $9 = HEAPU8[$3 + 173 | 0];
   HEAP8[$3 + 173 | 0] = 0;
   _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($3);
   $8 = $11 + $14 | 0;
   $5 = $4 + $5 | 0;
   $4 = $10 + ($5 >>> 0 < $4 >>> 0 ? $8 + 1 | 0 : $8) | 0;
   $2 = $2 + $5 | 0;
   $4 = $6 >>> 0 > $2 >>> 0 ? $4 + 1 | 0 : $4;
   HEAP32[$3 + 32 >> 2] = $2;
   HEAP32[$3 + 36 >> 2] = $4;
   if (($9 | 0) == 2) {
    _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($0)
   }
   _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($0, $1);
   __stack_pointer = $7 + 16 | 0;
   return;
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $3, 1055496);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim13spread_timers($0) {
  var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0;
  $13 = __stack_pointer - 16 | 0;
  __stack_pointer = $13;
  $14 = HEAP32[$0 + 372 >> 2];
  $10 = HEAP32[$0 + 376 >> 2];
  $7 = Math_imul($10, 176);
  $5 = $14 + $7 | 0;
  $9 = HEAP32[$0 + 32 >> 2];
  $12 = HEAP32[$0 + 36 >> 2];
  $11 = HEAP32[$0 + 312 >> 2];
  $16 = HEAP32[$0 + 316 >> 2];
  block12 : {
   block15 : {
    block1 : {
     while (1) {
      if (!$7) {
       $14 = 0;
       $7 = 8;
       break block1;
      }
      $7 = $7 - 176 | 0;
      $1 = $14 + 32 | 0;
      $3 = $14 + 176 | 0;
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
         $1 = $3 + 32 | 0;
         $3 = $3 + 176 | 0;
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
        $10 = HEAP32[$0 + 376 >> 2];
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
       $10 = HEAP32[$0 + 376 >> 2];
       $3 = HEAP32[$7 + 8 >> 2];
       $2 = HEAP32[$7 >> 2];
       $4 = $3 - $2 | 0;
       $1 = HEAP32[$7 + 4 >> 2];
       $3 = HEAP32[$7 + 12 >> 2] - ($1 + ($3 >>> 0 < $2 >>> 0) | 0) | 0;
       if (($12 | 0) == ($3 | 0) & $4 >>> 0 >= $9 >>> 0 | $3 >>> 0 > $12 >>> 0) {
        break block1
       }
       $3 = HEAP32[$0 + 372 >> 2];
       $6 = Math_imul($10, 176);
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
       $5 = $6 - 176 | 0;
       block14 : {
        if (($5 >>> 0) / 176 & 1) {
         $6 = $3;
         break block14;
        }
        $6 = $3 + 176 | 0;
        $11 = HEAP32[$3 + 36 >> 2];
        $4 = $11;
        $8 = HEAP32[$7 + 4 >> 2];
        $2 = HEAP32[$3 + 32 >> 2];
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
        HEAP32[$3 + 32 >> 2] = $2;
        HEAP32[$3 + 36 >> 2] = $8;
       }
       if ($5 >>> 0 < 176) {
        break block15
       }
       while (1) {
        $1 = $6 + 32 | 0;
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
        $1 = $6 + 208 | 0;
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
        $6 = $6 + 352 | 0;
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
     $11 = $6 - 176 | 0;
     $2 = ($11 >>> 0) / 176 | 0;
     if (($2 & 3) != 3) {
      $6 = 0 - ($2 + 1 & 3) | 0;
      while (1) {
       $5 = $3 + 32 | 0;
       $1 = $5;
       $2 = HEAP32[$1 >> 2];
       $4 = HEAP32[$1 + 4 >> 2];
       if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
        HEAP32[$1 >> 2] = $2 - $9;
        HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
       }
       $3 = $3 + 176 | 0;
       $6 = $6 + 1 | 0;
       if ($6) {
        continue
       }
       break;
      };
     }
     if ($11 >>> 0 < 528) {
      break block1
     }
     while (1) {
      $11 = $3 + 32 | 0;
      $1 = $11;
      $2 = HEAP32[$1 >> 2];
      $4 = HEAP32[$1 + 4 >> 2];
      if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
       HEAP32[$1 >> 2] = $2 - $9;
       HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
      }
      $11 = $3 + 208 | 0;
      $1 = $11;
      $2 = HEAP32[$1 >> 2];
      $4 = HEAP32[$1 + 4 >> 2];
      if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
       HEAP32[$1 >> 2] = $2 - $9;
       HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
      }
      $11 = $3 + 384 | 0;
      $1 = $11;
      $2 = HEAP32[$1 >> 2];
      $4 = HEAP32[$1 + 4 >> 2];
      if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
       HEAP32[$1 >> 2] = $2 - $9;
       HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
      }
      $11 = $3 + 560 | 0;
      $1 = $11;
      $2 = HEAP32[$1 >> 2];
      $4 = HEAP32[$1 + 4 >> 2];
      if (!(($2 | 0) != HEAP32[$7 >> 2] | ($4 | 0) != HEAP32[$7 + 4 >> 2])) {
       HEAP32[$1 >> 2] = $2 - $9;
       HEAP32[$1 + 4 >> 2] = $4 - (($2 >>> 0 < $9 >>> 0) + $12 | 0);
      }
      $3 = $3 + 704 | 0;
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
    _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim10reschedule($0, $3);
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
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
  wasm2js_trap();
 }
 
 function _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim7timeout($0, $1) {
  var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
  block1 : {
   $2 = HEAP32[$0 + 376 >> 2];
   if ($1 >>> 0 < $2 >>> 0) {
    $2 = HEAP32[$0 + 372 >> 2] + Math_imul($1, 176) | 0;
    $3 = HEAPU8[$2 + 173 | 0];
    HEAP8[$2 + 173 | 0] = 0;
    _RNvMs0_NtCseywxCc024wH_14raftscope_core3simNtB5_6Server15free_peer_state($2);
    HEAP32[$2 + 32 >> 2] = 0;
    HEAP32[$2 + 36 >> 2] = 0;
    if (($3 | 0) != 2) {
     break block1
    }
    _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim16note_leader_gone($0);
    break block1;
   }
   _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $2, 1055592);
   wasm2js_trap();
  }
  _RNvMs4_NtCseywxCc024wH_14raftscope_core3simNtB5_3Sim18start_new_election($0, $1);
  $2 = HEAP32[$0 + 400 >> 2];
  if ($1 >>> 0 < $2 >>> 0) {
   $2 = HEAP32[$0 + 316 >> 2];
   $6 = $2;
   $7 = HEAP32[$0 + 396 >> 2] + ($1 << 3) | 0;
   $3 = HEAP32[$0 + 312 >> 2];
   HEAP32[$7 >> 2] = $3;
   HEAP32[$7 + 4 >> 2] = $2;
   $2 = HEAP32[$0 + 388 >> 2];
   if (($2 | 0) == HEAP32[$0 + 380 >> 2]) {
    _RNvMs3_NtCsl5a4uRf33NA_5alloc7raw_vecINtB5_6RawVecINtNtCsedhpoW0refZ_4core3cmp7ReverseTymEEE8grow_oneCseywxCc024wH_14raftscope_core($0 + 380 | 0)
   }
   HEAP32[$0 + 388 >> 2] = $2 + 1;
   $8 = HEAP32[$0 + 384 >> 2];
   $0 = $8 + ($2 << 4) | 0;
   HEAP32[$0 + 8 >> 2] = $1;
   HEAP32[$0 >> 2] = $3;
   HEAP32[$0 + 4 >> 2] = $6;
   $0 = 0;
   block4 : {
    if (!$2) {
     break block4
    }
    while (1) {
     $7 = $2 - 1 >>> 1 | 0;
     $4 = ($7 << 4) + $8 | 0;
     $5 = HEAP32[$4 >> 2];
     $9 = HEAP32[$4 + 4 >> 2];
     if (($3 | 0) == ($5 | 0) & ($6 | 0) == ($9 | 0) ? HEAPU32[$4 + 8 >> 2] <= $1 >>> 0 : ($6 | 0) == ($9 | 0) & $3 >>> 0 >= $5 >>> 0 | $6 >>> 0 > $9 >>> 0) {
      $0 = $2;
      break block4;
     }
     $5 = HEAP32[$4 + 12 >> 2];
     $2 = ($2 << 4) + $8 | 0;
     HEAP32[$2 + 8 >> 2] = HEAP32[$4 + 8 >> 2];
     HEAP32[$2 + 12 >> 2] = $5;
     $5 = HEAP32[$4 + 4 >> 2];
     HEAP32[$2 >> 2] = HEAP32[$4 >> 2];
     HEAP32[$2 + 4 >> 2] = $5;
     $2 = $7;
     if ($2) {
      continue
     }
     break;
    };
   }
   $0 = ($0 << 4) + $8 | 0;
   HEAP32[$0 + 8 >> 2] = $1;
   HEAP32[$0 >> 2] = $3;
   HEAP32[$0 + 4 >> 2] = $6;
   return;
  }
  _RNvNtCsedhpoW0refZ_4core9panicking18panic_bounds_check($1, $2, 1055480);
  wasm2js_trap();
 }
 
 function _RNvNtCs9syRKuynNcS_3std9panicking15panic_with_hook($0, $1, $2) {
  var $3 = 0, $4 = 0;
  $3 = __stack_pointer - 16 | 0;
  __stack_pointer = $3;
  $4 = HEAP32[264130];
  HEAP32[264130] = $4 + 1;
  block4 : {
   block3 : {
    block : {
     if (($4 | 0) < 0) {
      break block
     }
     block2 : {
      if (!HEAPU8[1056512]) {
       HEAP8[1056512] = 1;
       HEAP32[264127] = HEAP32[264127] + 1;
       $0 = HEAP32[264129];
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
       HEAP32[$0 >> 2] = 1055992;
       HEAP32[$0 + 8 >> 2] = $0;
       HEAP32[$0 + 12 >> 2] = 7;
       _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1049324, $0 + 8 | 0, 1056020);
       wasm2js_trap();
      }
      FUNCTION_TABLE[HEAP32[$1 + 24 >> 2]]($3 + 8 | 0, $0);
      wasm2js_trap();
     }
     HEAP32[264129] = $1 - 1;
     if (($1 | 0) <= 0) {
      break block3
     }
     HEAP8[1056512] = 0;
     if ($2) {
      break block4
     }
    }
    wasm2js_trap();
   }
   _RNvNtCsedhpoW0refZ_4core9panicking9panic_fmt(1056068, 77, 1056108);
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
  $1 = HEAP32[263955];
  HEAP32[$0 + 8 >> 2] = HEAP32[263954];
  HEAP32[$0 + 12 >> 2] = $1;
  $1 = HEAP32[263953];
  HEAP32[$0 >> 2] = HEAP32[263952];
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
   _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055864, 46, 1055912);
   wasm2js_trap();
  }
  _RNvNtCsedhpoW0refZ_4core9panicking5panic(1055928, 46, 1055976);
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
    _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 16 | 0, 1055840, $4, $3);
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
   HEAP8[1056976] = 1;
   wasm2js_trap();
  }
  HEAP32[$1 + 8 >> 2] = HEAP32[$2 + 24 >> 2];
  $3 = HEAP32[$2 + 20 >> 2];
  HEAP32[$1 >> 2] = HEAP32[$2 + 16 >> 2];
  HEAP32[$1 + 4 >> 2] = $3;
  HEAP32[$0 + 4 >> 2] = 1056052;
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
    _RNvNtCsedhpoW0refZ_4core3fmt5write($2 + 20 | 0, 1055840, $4, $3);
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
  HEAP32[$0 + 4 >> 2] = 1056052;
  HEAP32[$0 >> 2] = $1;
  __stack_pointer = $2 + 32 | 0;
 }
 
 function _RNvXNtCsedhpoW0refZ_4core3anyNtNtCsl5a4uRf33NA_5alloc6string6StringNtB2_3Any7type_idCs9syRKuynNcS_3std($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $1 = HEAP32[263959];
  HEAP32[$0 + 8 >> 2] = HEAP32[263958];
  HEAP32[$0 + 12 >> 2] = $1;
  $1 = HEAP32[263957];
  HEAP32[$0 >> 2] = HEAP32[263956];
  HEAP32[$0 + 4 >> 2] = $1;
 }
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str_203($0, $1, $2) {
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
 
 function _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char_204($0, $1) {
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
  return _RNvNtCsedhpoW0refZ_4core3fmt5write($0, 1055840, $1, $2) | 0;
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
   HEAP8[1056976] = 1;
   wasm2js_trap();
  }
  HEAP32[$1 + 4 >> 2] = $2;
  HEAP32[$1 >> 2] = $3;
  HEAP32[$0 + 4 >> 2] = 1056036;
  HEAP32[$0 >> 2] = $1;
 }
 
 function _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload3get($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 + 4 >> 2] = 1056036;
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
  $4 = ($2 << 2) + 1056524 | 0;
  $3 = 1 << $2;
  if (!($3 & HEAP32[264234])) {
   HEAP32[$4 >> 2] = $0;
   HEAP32[$0 + 24 >> 2] = $4;
   HEAP32[$0 + 12 >> 2] = $0;
   HEAP32[$0 + 8 >> 2] = $0;
   HEAP32[264234] = $3 | HEAP32[264234];
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
  $11 = HEAP32[264039];
  $7 = $11;
  $17 = (($2 << 16) - 196608 >> 16) / 24 << 16 >> 16;
  $5 = $17;
  $8 = ($5 << 2) + 1056172 | 0;
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
      HEAPF64[($8 << 3) + $3 >> 3] = HEAP32[($8 + $17 << 2) + 1056172 >> 2];
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
    $4 = $4 + HEAPF64[$6 + 1056440 >> 3] * HEAPF64[$0 + $6 >> 3];
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
 var FUNCTION_TABLE = [null, _RNvXs1i_NtCsedhpoW0refZ_4core3fmtRmNtB6_7Display3fmtCshn2Zjkdzlh4_14raftscope_wasm, _RNvXs1i_NtCsedhpoW0refZ_4core3fmtRbNtB6_7Display3fmtCshn2Zjkdzlh4_14raftscope_wasm, _RNvXs8_NtNtNtCsedhpoW0refZ_4core3fmt3num3impmNtB9_7Display3fmt, _RNvXsq_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt7Display3fmt, _RNvXsg_NtCsedhpoW0refZ_4core3fmtbNtB5_7Display3fmt, _RNvXsd_NtNtNtCsedhpoW0refZ_4core3fmt3num3impyNtB9_7Display3fmt, _RNvXs1i_NtCsedhpoW0refZ_4core3fmtReNtB6_7Display3fmtB8_, _RNvXse_NtNtNtCsedhpoW0refZ_4core3fmt3num3impxNtB9_7Display3fmt, _RNvXs7_NtNtCsedhpoW0refZ_4core3fmt5floatdNtB7_7Display3fmt, _RNvXs1i_NtCsedhpoW0refZ_4core3fmtRyNtB6_7Display3fmtCshn2Zjkdzlh4_14raftscope_wasm, _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRDNtB6_5DebugEL_Bx_3fmtB8_, _RNvXsn_NtCseywxCc024wH_14raftscope_core3simNtB5_5EntryNtNtCsedhpoW0refZ_4core3fmt5Debug3fmt, _RNvXsW_NtNtCsedhpoW0refZ_4core3fmt3nummNtB7_5Debug3fmt_186, _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRmNtB6_5Debug3fmtCseywxCc024wH_14raftscope_core, _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNtCsl5a4uRf33NA_5alloc6string6StringEBF_, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char, _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtCshn2Zjkdzlh4_14raftscope_wasm, _RNvXsK_NtCsedhpoW0refZ_4core3fmtNtB5_5ErrorNtB5_5Debug3fmt, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str_104, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char_105, _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtB6_, _RNvXs1g_NtCsedhpoW0refZ_4core3fmtRyNtB6_5Debug3fmtB8_, _RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write9write_str, _RNvXs0_NtNtCsedhpoW0refZ_4core3fmt8buildersNtB5_10PadAdapterNtB7_5Write10write_char, _RNvYNtNtNtCsedhpoW0refZ_4core3fmt8builders10PadAdapterNtB6_5Write9write_fmtB8_, _RNvXs2_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core3fmt7Display3fmt, _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload8take_box, _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload3get, _RNvXs1_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_16StaticStrPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload6as_str, _RINvNtCsedhpoW0refZ_4core3ptr9drop_glueNtNvNtCs9syRKuynNcS_3std9panicking13panic_handler19FormatStringPayloadEBH_, _RNvXs0_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB5_19FormatStringPayloadNtNtCsedhpoW0refZ_4core3fmt7Display3fmt, _RNvXs_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB4_19FormatStringPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload8take_box, _RNvXs_NvNtCs9syRKuynNcS_3std9panicking13panic_handlerNtB4_19FormatStringPayloadNtNtCsedhpoW0refZ_4core5panic12PanicPayload3get, _RNvYINtNvNtCs9syRKuynNcS_3std9panicking11begin_panic7PayloadReENtNtCsedhpoW0refZ_4core5panic12PanicPayload6as_strB9_, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_str_203, _RNvXsZ_NtCsl5a4uRf33NA_5alloc6stringNtB5_6StringNtNtCsedhpoW0refZ_4core3fmt5Write10write_char_204, _RNvYNtNtCsl5a4uRf33NA_5alloc6string6StringNtNtCsedhpoW0refZ_4core3fmt5Write9write_fmtCs9syRKuynNcS_3std, _RNvXNtCsedhpoW0refZ_4core3anyReNtB2_3Any7type_idCs9syRKuynNcS_3std, _RNvXNtCsedhpoW0refZ_4core3anyNtNtCsl5a4uRf33NA_5alloc6string6StringNtB2_3Any7type_idCs9syRKuynNcS_3std];
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
