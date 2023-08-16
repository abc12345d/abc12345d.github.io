const g="data:text/markdown;base64,IyA0NTUuIEFzc2lnbiBDb29raWVzCgpgYGBQWVRIT04KZGVmIGZpbmRDb250ZW50Q2hpbGRyZW4oc2VsZiwgZzogTGlzdFtpbnRdLCBzOiBMaXN0W2ludF0pIC0+IGludDoKICAgIGcuc29ydCgpCiAgICBzLnNvcnQoKQogICAgZ19wb2ludGVyICwgc19wb2ludGVyID0gMCwgMAogICAgd2hpbGUoZ19wb2ludGVyIDwgbGVuKGcpIGFuZCBzX3BvaW50ZXIgPCBsZW4ocykpOgogICAgICAgIGlmIHNbc19wb2ludGVyXSA+PSBnW2dfcG9pbnRlcl06CiAgICAgICAgICAgIGdfcG9pbnRlciArPSAxCiAgICAgICAgICAgIHNfcG9pbnRlciArPSAxCiAgICAgICAgZWxzZToKICAgICAgICAgICAgc19wb2ludGVyICs9IDEKCiAgICByZXR1cm4gZ19wb2ludGVyCmBgYAoKIyAzNzYuIFdpZ2dsZSBTdWJzZXF1ZW5jZQojIyMgd2F5IDE6IGdyZWVkeQoKPGltZyB3aWR0aD0iODEwIiBhbHQ9ImltYWdlIiBzcmM9Imh0dHBzOi8vZ2l0aHViLmNvbS9hYmMxMjM0NWQvYWxnb3JpdGhtX3ByYWN0aWNlL2Fzc2V0cy80NDUxMjcyMi9kYmI2MDlmNi1jYTU2LTRkYjAtOWJmNS00YjRjMzM1ZmEzNTMiPgoKYGBgUFlUSE9OCmRlZiB3aWdnbGVNYXhMZW5ndGgoc2VsZiwgbnVtczogTGlzdFtpbnRdKSAtPiBpbnQ6CiAgICBwcmV2X2RpZmYgPSAwCiAgICByZXN1bHQgPSAxCiAgICBmb3IgaW5kZXggaW4gcmFuZ2UoMSxsZW4obnVtcykpOgogICAgICAgIGN1cnJfZGlmZiA9IG51bXNbaW5kZXhdIC0gbnVtc1tpbmRleC0xXQogICAgICAgIGlmIChjdXJyX2RpZmYgPiAwIGFuZCBwcmV2X2RpZmYgPD0gMCkgb3IgKGN1cnJfZGlmZiA8IDAgYW5kIHByZXZfZGlmZiA+PSAwKToKICAgICAgICAgICAgcmVzdWx0ICs9IDEKCiAgICAgICAgICAgICMgYmVsb3cgbGluZSBtdXN0IGluc2lkZSB0aGUgaWYtc3RhdGVtZW50CiAgICAgICAgICAgICMgb3RoZXJ3aXNlLCBmYWlsIGNhc2U6IG51bXMgPSBbMSw3LDQsNSw1LDddCiAgICAgICAgICAgIHByZXZfZGlmZiA9IGN1cnJfZGlmZgoKICAgIHJldHVybiByZXN1bHQKYGBgCgojIyMgd2F5IDI6IGRwCigxKSBEZXRlcm1pbmUgdGhlIGRwIGFycmF5IGFuZCB0aGUgbWVhbmluZyBvZiBpdHMgc3Vic2NyaXB0c1wKYHVwYCA9IHRoZSBsZW5ndGggb2YgdGhlIGxvbmdlc3Qgd2lnZ2xlIHN1YnNlcXVlbmNlIHdoZXJlIHRoZSBkaWZmZXJlbmNlIG9mIGxhc3QgdHdvIG51bWJlcnMgaXMgcG9zaXRpdmVcCmBkb3duYCA9IHRoZSBsZW5ndGggb2YgdGhlIGxvbmdlc3Qgd2lnZ2xlIHN1YnNlcXVlbmNlIHdoZXJlIHRoZSBkaWZmZXJlbmNlIG9mIGxhc3QgdHdvIG51bWJlcnMgaXMgbmVnYXRpdmUKCigyKSBEZXRlcm1pbmUgdGhlIHJlY3VycmVuY2UgZm9ybXVsYVwKYHVwID0gZG93biArIDFgXApgZG93biA9IHVwICsgMWAKCigzKSBUaGUgaW5pdGlhbGlzYXRpb24gb2YgdGhlIGRwIGFycmF5XApgdXAgPSAxYFwKYGRvd24gPSAxYAoKKDQpIERldGVybWluZSB0aGUgdHJhdmVyc2FsIG9yZGVyXApEb2Vzbid0IG1hdHRlciB3aGljaCBvcmRlciB3ZSB0cmF2ZXJzZS4KCig1KSBEZXJpdmUgdGhlIGZpbmFsIHJlc3VsdCBcCmBtYXgodXAsZG93bilgIAoKYGBgUFlUSE9OCmRlZiB3aWdnbGVNYXhMZW5ndGgoc2VsZiwgbnVtczogTGlzdFtpbnRdKSAtPiBpbnQ6CiAgICB1cCA9IDEKICAgIGRvd24gPSAxCgogICAgZm9yIGluZGV4IGluIHJhbmdlKDEsbGVuKG51bXMpKToKICAgICAgICBpZiBudW1zW2luZGV4XSA+IG51bXNbaW5kZXggLSAxXToKICAgICAgICAgICAgdXAgPSBkb3duICsgMQogICAgICAgIGVsaWYgbnVtc1tpbmRleF0gPCBudW1zW2luZGV4IC0gMV06CiAgICAgICAgICAgIGRvd24gPSB1cCArIDEKCiAgICByZXR1cm4gbWF4KHVwLCBkb3duKQpgYGAKCiMgNTMuIE1heGltdW0gU3ViYXJyYXkKIyMjIHdheSAxOiBkcAoKYGBgUFlUSE9OCmRlZiBtYXhTdWJBcnJheShzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IGludDoKICAgIG1heFN1bSA9IG51bXNbMF0KICAgIGRwID0gbnVtc1swXQogICAgZm9yIG51bSBpbiBudW1zWzE6XToKICAgICAgICBkcCA9IG1heChkcCArIG51bSwgbnVtKQogICAgICAgIG1heFN1bSA9IG1heChtYXhTdW0sIGRwKQogICAgcmV0dXJuIG1heFN1bQpgYGAKCiMgcmVmZXJlbmNlCltiaWxpYmlsaS0g6LeR6ams5ouJ5p2+55qE56iL5bqP5ZGYXShodHRwczovL3d3dy5iaWxpYmlsaS5jb20vdmlkZW8vQlYxRVk0eTFINzlqLz9zcG1faWRfZnJvbT0zMzMuMzM3LnNlYXJjaC1jYXJkLmFsbC5jbGljayZ2ZF9zb3VyY2U9YWNjNTQ1MTU0YmM1MmJhYzg2ZDdlY2E1Y2YzZGE4M2UpCg==";export{g as default};