const g="data:text/markdown;base64,IyAyMzkuIFNsaWRpbmcgV2luZG93IE1heGltdW0KCiMjIyB3YXkgMTogYnJ1dGUtZm9yY2UoZ2V0dGluZyBtYXggd2hpbGUgc2xpZGluZyB3aW5kb3cpCkNvdWxkIG5vdCBwYXNzIGFsbCB0aGUgbGVldGNvZGUgdGVzdCBjYXNlIHNpbmNlIGl0IGhhcyBoaWdoIHRpbWUgY29tcGxleGl0eS5cClRpbWUgY29tcGxleGl0eTogTyhuKmspIApTcGFjZSBjb21wbGV4aXR5OiBPKGspCmBgYFBZVEhPTgpkZWYgbWF4U2xpZGluZ1dpbmRvdyhzZWxmLCBudW1zOiBMaXN0W2ludF0sIGs6IGludCkgLT4gTGlzdFtpbnRdOgogICAgaWYgbGVuKG51bXMpIDw9IGs6CiAgICAgICAgcmV0dXJuIFttYXgobnVtcyldCgogICAgd2luZG93ID0gbnVtc1s6a10KICAgIG1heF9saXN0ID0gW21heCh3aW5kb3cpXQoKICAgIGZvciBpIGluIHJhbmdlKGssbGVuKG51bXMpKToKCiAgICAgICAgd2luZG93ID0gbnVtc1tpICsgMSAtIGsgOiBpICsgMV0KICAgICAgICBtYXhfbGlzdC5hcHBlbmQobWF4KHdpbmRvdykpCiAgICAKICAgIHJldHVybiBtYXhfbGlzdApgYGAKCiMjIyB3YXkgMjogbWFpbnRhaW4gYSBtb25vdG9uaWMgcXVldWUgd2hpY2ggc3RvcmVzIHBvc3NpYmxlIG1heCB2YWx1ZXMgb2Ygc2xpZGluZyB3aW5kb3dzClRpbWUgY29tcGxleGl0eTogTyhuKSwgc2luY2UgZXZlcnkgZWxlbWVudCBpbiB0aGUgbW9ub3RvbmljIHF1ZXVlIHdpbGwgb25seSBiZSBwdXNoIGFuZCBwb3AgYnkgb25lIHRpbWVcCiFbXSguL2ltYWdlcy8yMDIzMDIxMzEzNDcyMC5wbmcpICAgClNwYWNlIGNvbXBsZXhpdHk6IE8oaykKYGBgUFlUSE9OCmZyb20gY29sbGVjdGlvbnMgaW1wb3J0IGRlcXVlCmNsYXNzIG1vbm90b25pY19xdWV1ZToKICAgICMgdmFsdWVzIGluIHF1ZXVlIGFyZSBpbiBkZXNjZW5kaW5nIG9yZGVyCiAgICBkZWYgX19pbml0X18oc2VsZik6CiAgICAgICAgc2VsZi5xdWV1ZSA9IGRlcXVlKCkKCiAgICBkZWYgcHVzaChzZWxmLHZhbCk6CiAgICAgICAgd2hpbGUgc2VsZi5xdWV1ZSBhbmQgc2VsZi5xdWV1ZVstMV0gPCB2YWw6CiAgICAgICAgICAgICMgcG9wIGFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIHF1ZXVlIHdoaWNoIHNtYWxsZXIgdGhhbiB0aGUgdmFsCiAgICAgICAgICAgIHNlbGYucXVldWUucG9wKCkKICAgICAgICBzZWxmLnF1ZXVlLmFwcGVuZCh2YWwpCgogICAgZGVmIHBvcChzZWxmKToKICAgICAgICByZXR1cm4gc2VsZi5xdWV1ZS5wb3BsZWZ0KCkKCiAgICBkZWYgZ2V0X21heF92YWx1ZShzZWxmKToKICAgICAgICAjIGFzIHRoaXMgaXMgYSBtb25vdG9uaWMgcXVldWUsCiAgICAgICAgIyB0aGUgZnJvbnQgdmFsdWUgd2lsbCBhbHdheXMgYmUgdGhlIG1heGltdW0gdmFsdWUgb2YgdGhlIHF1ZXVlCiAgICAgICAgcmV0dXJuIHNlbGYucXVldWVbMF0gaWYgbGVuKHNlbGYucXVldWUpID4gMCBlbHNlIC1mbG9hdCgiaW5mIikKCmNsYXNzIFNvbHV0aW9uOgogICAgZGVmIG1heFNsaWRpbmdXaW5kb3coc2VsZiwgbnVtczogTGlzdFtpbnRdLCBrOiBpbnQpIC0+IExpc3RbaW50XToKICAgICAgICBpZiBsZW4obnVtcykgPD0gazoKICAgICAgICAgICAgcmV0dXJuIFttYXgobnVtcyldCiAgICAgICAgCiAgICAgICAgcXVldWUgPSBtb25vdG9uaWNfcXVldWUoKQogICAgICAgIG1heF9saXN0ID0gW10KCiAgICAgICAgIyBjb25zdHJ1Y3QgdGhlIHNsaWRpbmcgd2luZG93IGJ5IHVzaW5nIGZpcnN0IChrLTEpIGVsZW1lbnRzIG9mIG51bXMKICAgICAgICBmb3IgaSBpbiBudW1zWzprXToKICAgICAgICAgICAgcXVldWUucHVzaChpKQogICAgICAgIG1heF9saXN0LmFwcGVuZChxdWV1ZS5nZXRfbWF4X3ZhbHVlKCkpCgogICAgICAgICMgc2xpZGluZyB0aHJvdWdoIHRoZSByZXN0IG9mIHRoZSBudW1zCiAgICAgICAgZm9yIHN0YXJ0LCBlbmQgaW4gZW51bWVyYXRlKHJhbmdlKGssIGxlbihudW1zKSkpOgogICAgICAgICAgICBpZiBudW1zW3N0YXJ0XSA9PSBxdWV1ZS5nZXRfbWF4X3ZhbHVlKCk6CiAgICAgICAgICAgICAgICBxdWV1ZS5wb3AoKQogICAgICAgICAgICBxdWV1ZS5wdXNoKG51bXNbZW5kXSkKICAgICAgICAgICAgCiAgICAgICAgICAgIG1heF9saXN0LmFwcGVuZChxdWV1ZS5nZXRfbWF4X3ZhbHVlKCkpCiAgICAgICAgCiAgICAgICAgcmV0dXJuIG1heF9saXN0CmBgYAoKIyAzNDcuIFRvcCBLIEZyZXF1ZW50IEVsZW1lbnRzClVzZSBoYXNoIG1hcCBhbmQgaGVhcCBzb3J0XApUaW1lIGNvbXBsZXhpdHk6IE8obiBsb2cgaykKYGBgUFlUSE9OCmltcG9ydCBoZWFwcQpjbGFzcyBTb2x1dGlvbjoKICAgIGRlZiB0b3BLRnJlcXVlbnQoc2VsZiwgbnVtczogTGlzdFtpbnRdLCBrOiBpbnQpIC0+IExpc3RbaW50XToKICAgICAgICAjIGRlY2xhcmUgYSBkaWN0IHdoZXJlIG51bWJlcnMgYXMga2V5cyBhbmQgZnJlcXVlbmN5IG9mIHRoZSBudW1iZXJzIGFzIHZhbHVlcwogICAgICAgIHZhbF9mcmVxX21hcCA9IHt9CiAgICAgICAgZm9yIGkgaW4gbnVtczoKICAgICAgICAgICAgaWYgaSBpbiB2YWxfZnJlcV9tYXAua2V5cygpOgogICAgICAgICAgICAgICAgdmFsX2ZyZXFfbWFwW2ldICs9IDEKICAgICAgICAgICAgZWxzZToKICAgICAgICAgICAgICAgIHZhbF9mcmVxX21hcFtpXSA9IDEKCiAgICAgICAgIyBoZWFwIHNvcnQgdGhlIGl0ZW1zIG9mIHZhbF9mcmVxX21hcCBieSB2YWx1ZXMKICAgICAgICBoID0gW10KICAgICAgICBmb3Iga2V5LCB2YWx1ZSBpbiB2YWxfZnJlcV9tYXAuaXRlbXMoKToKICAgICAgICAgICAgaGVhcHEuaGVhcHB1c2goaCwgKHZhbHVlLGtleSkpCgogICAgICAgICAgICBpZiBsZW4oaCkgPiBrOgogICAgICAgICAgICAgICAgaGVhcHEuaGVhcHBvcChoKQoKICAgICAgICByZXR1cm4gW2tleSBmb3IgKHZhbCxrZXkpIGluIGhdCmBgYA==";export{g as default};