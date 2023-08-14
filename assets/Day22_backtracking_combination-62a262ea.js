const I="data:text/markdown;base64,IyAyMTYuIENvbWJpbmF0aW9uIFN1bSBJSUkKV2UgdXNlIGBzdGFydEluZGV4YCB0byBkZWNpZGUgdGhlIG5leHQgYXZhaWxhYmxlIHJhbmdlIGZvciBiYWNrdHJhY2tpbmcuCgo8aW1nIHdpZHRoPSI5NjMiIGFsdD0iMjAyMzAzMDIxMjUwMDgiIHNyYz0iaHR0cHM6Ly9naXRodWIuY29tL2FiYzEyMzQ1ZC9hbGdvcml0aG1fcHJhY3RpY2UvYXNzZXRzLzQ0NTEyNzIyLzliNGNmZTBiLTA0OTEtNDRkZS04NzA3LTNjNTM1YWExZTIyMCI+CgojIyMgd2F5IDE6IGJhY2t0cmFja2luZyB3aXRob3V0IHBydW5uaW5nCgpgYGBQWVRIT04KZGVmIGNvbWJpbmF0aW9uU3VtMyhzZWxmLCBrOiBpbnQsIG46IGludCkgLT4gTGlzdFtMaXN0W2ludF1dOgogICAgZGVmIGJhY2t0cmFjayhzdGFydEluZGV4LCBrLCBuLCBjb21iaW5hdGlvbik6CiAgICAgICAgaWYgbGVuKGNvbWJpbmF0aW9uKSA9PSBrOgogICAgICAgICAgICBpZiBzdW0oY29tYmluYXRpb24pID09IG46CiAgICAgICAgICAgICAgICByZXNfbGlzdC5hcHBlbmQoY29tYmluYXRpb25bOl0pCiAgICAgICAgICAgIHJldHVybgoKICAgICAgICBmb3IgaSBpbiByYW5nZShzdGFydEluZGV4LCAxMCk6CiAgICAgICAgICAgIGNvbWJpbmF0aW9uLmFwcGVuZChpKQogICAgICAgICAgICBiYWNrdHJhY2soaSArIDEsIGssIG4sIGNvbWJpbmF0aW9uKQogICAgICAgICAgICBjb21iaW5hdGlvbi5wb3AoKQogICAgCiAgICByZXNfbGlzdCA9IFtdCiAgICBiYWNrdHJhY2soMSwgaywgbiwgW10pCiAgICByZXR1cm4gcmVzX2xpc3QKYGBgCgojIyMgd2F5IDI6IGJhY2t0cmFja2luZyB3aXRoIHBydW5uaW5nCgo8aW1nIHdpZHRoPSI3NjAiIGFsdD0iMjAyMzAyMjQyMDI2MDYiIHNyYz0iaHR0cHM6Ly9naXRodWIuY29tL2FiYzEyMzQ1ZC9hbGdvcml0aG1fcHJhY3RpY2UvYXNzZXRzLzQ0NTEyNzIyL2EyNGQ0NDZmLThkY2QtNGVjNC04NTQ3LWFjMmRlNGNhYzk0YyI+CgpgYGBQWVRIT04KZGVmIGNvbWJpbmF0aW9uU3VtMyhzZWxmLCBrOiBpbnQsIG46IGludCkgLT4gTGlzdFtMaXN0W2ludF1dOgogICAgZGVmIGJhY2t0cmFjayhzdGFydCwgaywgbiwgY29tYmluYXRpb24sIGFjY3VtKToKICAgICAgICBpZiBsZW4oY29tYmluYXRpb24pID09IGs6CiAgICAgICAgICAgIGlmIGFjY3VtID09IG46CiAgICAgICAgICAgICAgICByZXNfbGlzdC5hcHBlbmQoY29tYmluYXRpb25bOl0pCiAgICAgICAgICAgIHJldHVybgoKICAgICAgICAjIHBydW5uaW5nIDE6IAogICAgICAgICMgcHJ1bmUgd2hlbiBpID4gbGFzdF9zdGFydAogICAgICAgICMgZS5nLiAKICAgICAgICAjIGsgPSAyLCB0aGUgbGFzdF9zdGFydCBzaG91bGQgYmUgOAogICAgICAgICMgayA9IDMsIHRoZSBsYXN0X3N0YXJ0IHNob3VsZCBiZSA3CiAgICAgICAgbGFzdF9zdGFydCA9IDkgLSAoayAtIGxlbihjb21iaW5hdGlvbikpICsgMSAKICAgICAgICBmb3IgaSBpbiByYW5nZShzdGFydCwgbGFzdF9zdGFydCArIDEpOgoKICAgICAgICAgICAgIyBwcnVubmluZyAyOgogICAgICAgICAgICBpZiBhY2N1bSArIGkgPiBuOgogICAgICAgICAgICAgICAgY29udGludWUKCiAgICAgICAgICAgIGFjY3VtICs9IGkKICAgICAgICAgICAgY29tYmluYXRpb24uYXBwZW5kKGkpCiAgICAgICAgICAgIGJhY2t0cmFjayhpICsgMSwgaywgbiwgY29tYmluYXRpb24sIGFjY3VtKQogICAgICAgICAgICBjb21iaW5hdGlvbi5wb3AoKQogICAgICAgICAgICBhY2N1bSAtPSBpCiAgICAKICAgIHJlc19saXN0ID0gW10KICAgIGJhY2t0cmFjaygxLCBrLCBuLCBbXSwgMCkKICAgIHJldHVybiByZXNfbGlzdApgYGAKCiMgMTcuIExldHRlciBDb21iaW5hdGlvbnMgb2YgYSBQaG9uZSBOdW1iZXIKCmBgYFBZVEhPTgpkZWYgbGV0dGVyQ29tYmluYXRpb25zKHNlbGYsIGRpZ2l0czogc3RyKSAtPiBMaXN0W3N0cl06CiAgICBkZWYgYmFja3RyYWNrKGluZGV4LCBwYXRoLCBkaWdpdHMpOgogICAgICAgIGlmIGxlbihwYXRoKSA9PSBsZW4oZGlnaXRzKToKICAgICAgICAgICAgcmVzX2xpc3QuYXBwZW5kKCIiLmpvaW4ocGF0aCkpCiAgICAgICAgICAgIHJldHVybgoKICAgICAgICBmb3IgYWxwaGFiZXQgaW4gZGlnaXRfYWxwaGFfZGljdFtkaWdpdHNbaW5kZXhdXToKICAgICAgICAgICAgcGF0aC5hcHBlbmQoYWxwaGFiZXQpCiAgICAgICAgICAgIGJhY2t0cmFjayhpbmRleCArIDEsIHBhdGgsIGRpZ2l0cykKICAgICAgICAgICAgcGF0aC5wb3AoKQoKICAgIGlmIG5vdCBkaWdpdHM6CiAgICAgICAgcmV0dXJuCgogICAgZGlnaXRfYWxwaGFfZGljdCA9IHsKICAgICAgICAiMiI6ICJhYmMiLAogICAgICAgICIzIjogImRlZiIsCiAgICAgICAgIjQiOiAiZ2hpIiwKICAgICAgICAiNSI6ICJqa2wiLAogICAgICAgICI2IjogIm1ubyIsCiAgICAgICAgIjciOiAicHFycyIsCiAgICAgICAgIjgiOiAidHV2IiwKICAgICAgICAiOSI6ICJ3eHl6IiwKICAgIH0KICAgIHJlc19saXN0ID0gW10KICAgIGJhY2t0cmFjaygwLCBbXSwgZGlnaXRzKQogICAgcmV0dXJuIHJlc19saXN0CmBgYA==";export{I as default};
