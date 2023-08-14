const g="data:text/markdown;base64,IyA0OTEuIE5vbi1kZWNyZWFzaW5nIFN1YnNlcXVlbmNlcwoKPGltZyB3aWR0aD0iNzU0IiBhbHQ9IjIwMjMwMjI4MTUwNDA2IiBzcmM9Imh0dHBzOi8vZ2l0aHViLmNvbS9hYmMxMjM0NWQvYWxnb3JpdGhtX3ByYWN0aWNlL2Fzc2V0cy80NDUxMjcyMi81ZTRiZTFlNS1kNjk0LTQ3Y2MtYjQ5Yy03MjdhNzdiMDM5ZDciPgoKYGBgUFlUSE9OCmRlZiBmaW5kU3Vic2VxdWVuY2VzKHNlbGYsIG51bXM6IExpc3RbaW50XSkgLT4gTGlzdFtMaXN0W2ludF1dOgogICAgZGVmIGJhY2t0cmFjayhzdGFydEluZGV4LCBwYXRoLCBudW1zKToKICAgICAgICBpZiBzdGFydEluZGV4ID4gbGVuKG51bXMpOgogICAgICAgICAgICByZXR1cm4KICAgICAgICAgICAgCiAgICAgICAgaWYgbGVuKHBhdGgpID49IDI6CiAgICAgICAgICAgIHJlc19saXN0LmFwcGVuZChwYXRoWzpdKQoKICAgICAgICAnJyd3YXkgMjoKICAgICAgICB1c2VkID0gc2V0KCkKICAgICAgICAnJycKICAgICAgICBmb3IgaSBpbiByYW5nZShzdGFydEluZGV4LCBsZW4obnVtcykpOgogICAgICAgIAogICAgICAgICAgICBpZiBwYXRoIGFuZCBwYXRoWy0xXSA+IG51bXNbaV06CiAgICAgICAgICAgICAgICBjb250aW51ZQoKICAgICAgICAgICAgJycnd2F5IDE6ICcnJwogICAgICAgICAgICBpZiBudW1zW2ldIGluIG51bXNbc3RhcnRJbmRleDppXToKICAgICAgICAgICAgICAgIGNvbnRpbnVlCgogICAgICAgICAgICAnJycgd2F5IDI6CiAgICAgICAgICAgIGlmIG51bXNbaV0gaW4gdXNlZDoKICAgICAgICAgICAgICAgICAgICBjb250aW51ZQoKICAgICAgICAgICAgdXNlZC5hZGQobnVtc1tpXSkKICAgICAgICAgICAgJycnCgogICAgICAgICAgICBwYXRoLmFwcGVuZChudW1zW2ldKQogICAgICAgICAgICBiYWNrdHJhY2soaSsxLCBwYXRoLCBudW1zKQogICAgICAgICAgICBwYXRoLnBvcCgpCgogICAgcmVzX2xpc3QgPSBbXQogICAgYmFja3RyYWNrKDAsIFtdLCBudW1zKQogICAgcmV0dXJuIHJlc19saXN0CmBgYAoKIyA0Ni4gUGVybXV0YXRpb25zCiMjIyB3YXkgMTogd2l0aCBhbiBleHRyYSBhcnJheSBgdXNlZGAKCmBgYFBZVEhPTgpkZWYgcGVybXV0ZShzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IExpc3RbTGlzdFtpbnRdXToKICAgIGRlZiBiYWNrdHJhY2sobnVtcywgcGF0aCwgdXNlZCk6CiAgICAgICAgaWYgYWxsKHVzZWQpOgogICAgICAgICAgICByZXNfbGlzdC5hcHBlbmQocGF0aFs6XSkKICAgICAgICAgICAgcmV0dXJuCiAgICAgICAgCiAgICAgICAgZm9yIGkgaW4gcmFuZ2UobGVuKG51bXMpKToKICAgICAgICAgICAgaWYgdXNlZFtpXSA9PSBUcnVlOgogICAgICAgICAgICAgICAgY29udGludWUKCiAgICAgICAgICAgIHVzZWRbaV0gPSBUcnVlCiAgICAgICAgICAgIHBhdGguYXBwZW5kKG51bXNbaV0pCiAgICAgICAgICAgIGJhY2t0cmFjayhudW1zLCBwYXRoLCB1c2VkKQogICAgICAgICAgICBwYXRoLnBvcCgpCiAgICAgICAgICAgIHVzZWRbaV0gPSBGYWxzZQoKICAgIHJlc19saXN0ID0gW10KICAgIGJhY2t0cmFjayhudW1zLCBbXSwgW0ZhbHNlXSAqIGxlbihudW1zKSkKICAgIHJldHVybiByZXNfbGlzdApgYGAKCiMjIyB3YXkgMjogd2l0aG91dCBhbnkgZXh0cmEgYXJyYXkKCmBgYFBZVEhPTgpkZWYgcGVybXV0ZShzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IExpc3RbTGlzdFtpbnRdXToKICAgIGRlZiBiYWNrdHJhY2socGF0aCwgdW51c2VkLCB1c2VkKToKICAgICAgICBpZiBsZW4odW51c2VkKSA9PSAwOgogICAgICAgICAgICByZXNfbGlzdC5hcHBlbmQocGF0aFs6XSkKCiAgICAgICAgZm9yIGkgaW4gcmFuZ2UobGVuKHVudXNlZCkpOgogICAgICAgICAgICB2YWwgPSB1bnVzZWRbaV0KCiAgICAgICAgICAgIHVzZWQuYXBwZW5kKHZhbCkKICAgICAgICAgICAgcGF0aC5hcHBlbmQodmFsKQogICAgICAgICAgICB1bnVzZWQucmVtb3ZlKHZhbCkKCiAgICAgICAgICAgIGJhY2t0cmFjayhwYXRoLCB1bnVzZWQsIHVzZWQpCiAgICAgICAgICAgIAogICAgICAgICAgICB1bnVzZWQuaW5zZXJ0KGksIHZhbCkKICAgICAgICAgICAgcGF0aC5wb3AoKQogICAgICAgICAgICB1c2VkLnBvcCgpCgogICAgcmVzX2xpc3QgPSBbXQogICAgYmFja3RyYWNrKFtdLCBudW1zLCBbXSkKICAgIHJldHVybiByZXNfbGlzdApgYGAKCiMgNDcuIFBlcm11dGF0aW9ucyBJSQojIyMgd2F5IDE6IGB1c2VkYCBzZXQgdG8gcmVtb3ZlIGR1cGxpY2F0ZSBpbiB0cmVlIGxheWVyIGFuZCBgLmNvdW50KClgIHRvIHJlbW92ZSBleHRyYSBpbiBicmFuY2ggbGV2ZWwKCmBgYFBZVEhPTgpkZWYgcGVybXV0ZVVuaXF1ZShzZWxmLCBudW1zOiBMaXN0W2ludF0pIC0+IExpc3RbTGlzdFtpbnRdXToKICAgIGRlZiBiYWNrdHJhY2sobnVtcywgcGF0aCk6CiAgICAgICAgaWYgbGVuKHBhdGgpID09IGxlbihudW1zKToKICAgICAgICAgICAgcmVzX2xpc3QuYXBwZW5kKHBhdGhbOl0pCiAgICAgICAgICAgIHJldHVybgogICAgICAgIAogICAgICAgIHVzZWQgPSBzZXQoKQogICAgICAgIGZvciBpIGluIHJhbmdlKGxlbihudW1zKSk6CiAgICAgICAgICAgIGlmIG51bXNbaV0gaW4gdXNlZDoKICAgICAgICAgICAgICAgIGNvbnRpbnVlCgogICAgICAgICAgICBpZiBwYXRoLmNvdW50KG51bXNbaV0pID09IG51bXMuY291bnQobnVtc1tpXSk6CiAgICAgICAgICAgICAgICBjb250aW51ZQogICAgICAgICAgICAKICAgICAgICAgICAgdXNlZC5hZGQobnVtc1tpXSkKICAgICAgICAgICAgcGF0aC5hcHBlbmQobnVtc1tpXSkKICAgICAgICAgICAgYmFja3RyYWNrKG51bXMsIHBhdGgpCiAgICAgICAgICAgIHBhdGgucG9wKCkKICAgICAgICAgICAgCgogICAgcmVzX2xpc3QgPSBbXQogICAgYmFja3RyYWNrKG51bXMsIFtdKQogICAgcmV0dXJuIHJlc19saXN0CmBgYAoKIyMjIHdheSAyOiBgdXNlZFtpLTFdID09IEZhbHNlYCByZXByZXNlbnQgZHVwbGljYXRlcyBpbiB0cmVlIGxheWVyIGFuZCBgdXNlZFtpXSA9PSB0cnVlYCByZXByZXNlbnQgZXh0cmEgaW4gYnJhbmNoIGxheWVyCgpgYGBQWVRIT04KZGVmIHBlcm11dGVVbmlxdWUoc2VsZiwgbnVtczogTGlzdFtpbnRdKSAtPiBMaXN0W0xpc3RbaW50XV06CiAgICBkZWYgYmFja3RyYWNrKG51bXMsIHBhdGgsIHVzZWQpOgogICAgICAgIGlmIGxlbihwYXRoKSA9PSBsZW4obnVtcyk6CiAgICAgICAgICAgIHJlc19saXN0LmFwcGVuZChwYXRoWzpdKQogICAgICAgICAgICByZXR1cm4KICAgICAgICAKICAgICAgICBmb3IgaSBpbiByYW5nZShsZW4obnVtcykpOgogICAgICAgICAgICBpZiBpID4gMCBhbmQgbnVtc1tpXSA9PSBudW1zW2ktMV0gYW5kIHVzZWRbaS0xXSA9PSBGYWxzZToKICAgICAgICAgICAgICAgIGNvbnRpbnVlCiAgICAgICAgICAgIAogICAgICAgICAgICBpZiB1c2VkW2ldID09IFRydWU6CiAgICAgICAgICAgICAgICBjb250aW51ZQogICAgICAgICAgICAgICAgCiAgICAgICAgICAgIHVzZWRbaV0gPSBUcnVlCiAgICAgICAgICAgIHBhdGguYXBwZW5kKG51bXNbaV0pCiAgICAgICAgICAgIGJhY2t0cmFjayhudW1zLCBwYXRoLCB1c2VkKQogICAgICAgICAgICB1c2VkW2ldID0gRmFsc2UKICAgICAgICAgICAgcGF0aC5wb3AoKQogICAgICAgICAgICAKCiAgICByZXNfbGlzdCA9IFtdCiAgICB1c2VkID0gW0ZhbHNlXSAqIGxlbihudW1zKQogICAgYmFja3RyYWNrKHNvcnRlZChudW1zKSwgW10sIHVzZWQpCiAgICByZXR1cm4gcmVzX2xpc3QKYGBg";export{g as default};
